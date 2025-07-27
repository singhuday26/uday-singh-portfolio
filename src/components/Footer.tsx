import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-sm">
            © 2025 Uday Singh. All Rights Reserved. | Built with 
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            for data science and innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;