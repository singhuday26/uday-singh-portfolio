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
      return (data as ProjectDB[]) ?? fallbackProjects;
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
      return (data as EducationDB[]) ?? fallbackEducation;
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
      return (data as AchievementDB[]) ?? fallbackAchievements;
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
