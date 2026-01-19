import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { ProjectDB, EducationDB, AchievementDB, SkillCategoryDB } from "@/types";

export const useProjects = () => {
    return useQuery({
        queryKey: ["projects"],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("projects")
                .select("*")
                .order("created_at", { ascending: true });

            if (error) throw error;
            return data as ProjectDB[];
        },
    });
};

export const useEducation = () => {
    return useQuery({
        queryKey: ["education"],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("education")
                .select("*")
                .order("created_at", { ascending: false });

            if (error) throw error;
            return data as EducationDB[];
        },
    });
};

export const useAchievements = () => {
    return useQuery({
        queryKey: ["achievements"],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("achievements")
                .select("*")
                .order("created_at", { ascending: false });

            if (error) throw error;
            return data as AchievementDB[];
        },
    });
};

export const useSkillCategories = () => {
    return useQuery({
        queryKey: ["skill_categories"],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("skill_categories")
                .select("*")
                .order("display_order", { ascending: true });

            if (error) throw error;
            return data as SkillCategoryDB[];
        },
    });
};
