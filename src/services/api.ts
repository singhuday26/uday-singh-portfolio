import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import {
  ProjectDB,
  EducationDB,
  AchievementDB,
  SkillCategoryDB,
} from "@/types";
import {
  fallbackProjects,
  fallbackEducation,
  fallbackAchievements,
  fallbackSkillCategories,
} from "@/data/fallback";

export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      if (!supabase) return fallbackProjects;

      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) {
        console.warn(
          "Failed to fetch projects from Supabase, using fallback:",
          error.message,
        );
        return fallbackProjects;
      }
      // Deduplicate by title in case seed was run multiple times
      const seen = new Set<string>();
      const unique = (data as ProjectDB[]).filter((p) => {
        if (seen.has(p.title)) return false;
        seen.add(p.title);
        return true;
      });
      return unique.length > 0 ? unique : fallbackProjects;
    },
  });
};

export const useEducation = () => {
  return useQuery({
    queryKey: ["education"],
    queryFn: async () => {
      if (!supabase) return fallbackEducation;

      const { data, error } = await supabase
        .from("education")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.warn(
          "Failed to fetch education from Supabase, using fallback:",
          error.message,
        );
        return fallbackEducation;
      }
      const seen = new Set<string>();
      const unique = (data as EducationDB[]).filter((e) => {
        if (seen.has(e.institution + e.degree)) return false;
        seen.add(e.institution + e.degree);
        return true;
      });
      return unique.length > 0 ? unique : fallbackEducation;
    },
  });
};

export const useAchievements = () => {
  return useQuery({
    queryKey: ["achievements"],
    queryFn: async () => {
      if (!supabase) return fallbackAchievements;

      const { data, error } = await supabase
        .from("achievements")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.warn(
          "Failed to fetch achievements from Supabase, using fallback:",
          error.message,
        );
        return fallbackAchievements;
      }
      const seen = new Set<string>();
      const unique = (data as AchievementDB[]).filter((a) => {
        if (seen.has(a.title)) return false;
        seen.add(a.title);
        return true;
      });
      return unique.length > 0 ? unique : fallbackAchievements;
    },
  });
};

export const useSkillCategories = () => {
  return useQuery({
    queryKey: ["skill_categories"],
    queryFn: async () => {
      if (!supabase) return fallbackSkillCategories;

      const { data, error } = await supabase
        .from("skill_categories")
        .select("*")
        .order("display_order", { ascending: true });

      if (error) {
        console.warn(
          "Failed to fetch skill categories from Supabase, using fallback:",
          error.message,
        );
        return fallbackSkillCategories;
      }
      return (data as SkillCategoryDB[]) ?? fallbackSkillCategories;
    },
  });
};
