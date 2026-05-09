import { useMutation, useQuery ,useQueryClient} from "@tanstack/react-query";
import api from "../axios";
import { Experience } from "../types";

const fetchExperiences = async (): Promise<Experience[]> => {
  const { data } = await api.get<Experience[]>("/experiences");
  return data;
};

const useExperiences = () => {
  return useQuery({
    queryKey: ["Experiences"],
    queryFn: fetchExperiences,
  });
};

const addExperience = async (experience: Omit<Experience, "id" | "created_at" | "updated_at">) => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("User is not authenticated");
  }
  const { data } = await api.post<Experience>("/experiences", experience, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

const updateExperience = async (experience: Omit<Experience, "created_at" | "updated_at">) => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("User is not authenticated");
  }
  const { data } = await api.put(`/experiences/${experience.id}`, experience, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

const deleteExperience = async (experienceId: number) => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("User is not authenticated");
  }
  if (!experienceId) {
    throw new Error("Experience Id is required");
  }
  const { data } = await api.delete(`/experiences/${experienceId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

const useUpdateExperience = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateExperience,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Experiences"] });
    },
  });
};      

  const useAddExperience = () => {
    const queryclient = useQueryClient();
    return useMutation({
      mutationFn: addExperience,
      onSuccess: () => {
        queryclient.invalidateQueries({ queryKey: ["Experiences"] });
      },
    });
  };

const useDeleteExperience = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteExperience,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Experiences"] });
    },
  });
};

export { useExperiences,useAddExperience ,useUpdateExperience, useDeleteExperience};

export default useExperiences;
