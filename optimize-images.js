import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'src', 'assets');
const outputDir = path.join(__dirname, 'src', 'assets');

// Image sizes for responsive variants
const sizes = [480, 768, 1024];

async function optimizeImage(inputPath, filename) {
    const ext = path.extname(filename);
    const basename = path.basename(filename, ext);

    console.log(`Processing: ${filename}`);

    try {
        // Only process jpg and png files
        if (!['.jpg', '.jpeg', '.png'].includes(ext.toLowerCase())) {
            console.log(`Skipping ${filename} - not a jpg/png file`);
            return;
        }

        // Get original image metadata
        const metadata = await sharp(inputPath).metadata();
        console.log(`  Original size: ${metadata.width}x${metadata.height}`);

        // Convert to WebP format for the main image
        const webpPath = path.join(outputDir, `${basename}.webp`);
        await sharp(inputPath)
            .webp({ quality: 85 })
            .toFile(webpPath);
        console.log(`  ✓ Created WebP: ${basename}.webp`);

        // Generate responsive variants in WebP
        for (const size of sizes) {
            if (size < metadata.width) {
                const variantPath = path.join(outputDir, `${basename}-${size}w.webp`);
                await sharp(inputPath)
                    .resize(size, null, { withoutEnlargement: true })
                    .webp({ quality: 85 })
                    .toFile(variantPath);
                console.log(`  ✓ Created variant: ${basename}-${size}w.webp`);
            }
        }

        // Also create optimized versions in original format (for fallback)
        const optimizedPath = path.join(outputDir, `${basename}-optimized${ext}`);
        if (ext.toLowerCase() === '.png') {
            await sharp(inputPath)
                .png({ quality: 85, compressionLevel: 9 })
                .toFile(optimizedPath);
        } else {
            await sharp(inputPath)
                .jpeg({ quality: 85, mozjpeg: true })
                .toFile(optimizedPath);
        }
        console.log(`  ✓ Created optimized: ${basename}-optimized${ext}`);

        // Generate responsive variants in original format
        for (const size of sizes) {
            if (size < metadata.width) {
                const variantPath = path.join(outputDir, `${basename}-${size}w${ext}`);
                if (ext.toLowerCase() === '.png') {
                    await sharp(inputPath)
                        .resize(size, null, { withoutEnlargement: true })
                        .png({ quality: 85, compressionLevel: 9 })
                        .toFile(variantPath);
                } else {
                    await sharp(inputPath)
                        .resize(size, null, { withoutEnlargement: true })
                        .jpeg({ quality: 85, mozjpeg: true })
                        .toFile(variantPath);
                }
                console.log(`  ✓ Created variant: ${basename}-${size}w${ext}`);
            }
        }

        console.log(`✓ Completed: ${filename}\n`);
    } catch (error) {
        console.error(`✗ Error processing ${filename}:`, error.message);
    }
}

async function processAllImages() {
    console.log('Starting image optimization...\n');

    const files = fs.readdirSync(assetsDir);

    for (const file of files) {
        const filePath = path.join(assetsDir, file);
        const stat = fs.statSync(filePath);

        if (stat.isFile()) {
            await optimizeImage(filePath, file);
        }
    }

    console.log('Image optimization complete!');
}

processAllImages().catch(console.error);
