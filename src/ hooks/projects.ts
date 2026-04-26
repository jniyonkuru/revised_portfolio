//standard packages

//third party packages
import { useQuery,useQueryClient,useMutation } from "@tanstack/react-query";

//local packages

import api from "../axios";
import { Project } from "../types";

async function readProjects():Promise<Project[]>{
  const { data } = await api.get("/projects");
  return data;
}

async function updateProject(project: Omit<Project, "created_at" | "updated_at" | "user_id">) {

  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("User is not authenticated");
  } 

  const { data } = await api.put(`/projects/${project.id}`, project, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
}

function useUpdateProject() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
}


function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: readProjects,
  });
}


async function addProject(project: Omit<Project, "id" | "created_at" | "updated_at">) {
  const { data } = await api.post("/projects", project, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return data;
}

function useAddProject() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
}

export { useProjects,useUpdateProject,useAddProject};
