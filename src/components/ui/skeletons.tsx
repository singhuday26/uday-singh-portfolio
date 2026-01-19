export const ProjectCardSkeleton = () => (
    <div className="p-8 bg-card border border-border rounded-lg animate-pulse">
        <div className="grid lg:grid-cols-3 gap-8">
            {/* Image skeleton */}
            <div className="lg:col-span-1">
                <div className="h-64 lg:h-full min-h-[200px] bg-muted rounded-lg" />
            </div>

            {/* Content skeleton */}
            <div className="lg:col-span-2 space-y-4">
                {/* Title */}
                <div className="h-8 bg-muted rounded w-3/4" />
                {/* Description */}
                <div className="h-4 bg-muted rounded w-full" />
                <div className="h-4 bg-muted rounded w-5/6" />

                {/* Grid items */}
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="space-y-2">
                            <div className="h-4 bg-muted rounded w-1/3" />
                            <div className="h-3 bg-muted rounded w-full" />
                            <div className="h-3 bg-muted rounded w-4/5" />
                        </div>
                    ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="h-8 w-20 bg-muted rounded-full" />
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export const EducationCardSkeleton = () => (
    <div className="p-6 bg-card border border-border rounded-lg animate-pulse">
        <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-muted rounded-lg flex-shrink-0" />
            <div className="flex-1 space-y-3">
                <div className="h-6 bg-muted rounded w-3/4" />
                <div className="h-4 bg-muted rounded w-full" />
                <div className="flex gap-4">
                    <div className="h-3 bg-muted rounded w-24" />
                    <div className="h-3 bg-muted rounded w-32" />
                    <div className="h-3 bg-muted rounded w-20" />
                </div>
            </div>
        </div>
    </div>
);

export const AchievementCardSkeleton = () => (
    <div className="p-6 bg-card border border-border rounded-lg animate-pulse">
        <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-muted rounded-lg flex-shrink-0" />
            <div className="flex-1 space-y-3">
                <div className="flex items-center gap-2">
                    <div className="h-6 bg-muted rounded w-48" />
                    <div className="h-6 w-20 bg-muted rounded-full" />
                </div>
                <div className="h-4 bg-muted rounded w-full" />
                <div className="h-4 bg-muted rounded w-5/6" />
            </div>
        </div>
    </div>
);

export const SkillCategorySkeleton = () => (
    <div className="p-6 bg-card border border-border rounded-lg animate-pulse">
        <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-muted rounded-lg flex-shrink-0" />
            <div className="h-6 bg-muted rounded w-48" />
        </div>
        <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="h-9 w-24 bg-muted rounded-full" />
            ))}
        </div>
    </div>
);
