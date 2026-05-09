//standard packages

//third party packages
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';

//local packages

import api from '../axios';
import type { Project } from '../types';
import { ProjectSchema, ListOfProjectsSchema } from '../types';

async function readProject(projectId: number): Promise<Project> {
  const { data } = await api.get(`/projects/${projectId}`);
  if (!data) {
    throw new Error(`${projectId} not found`);
  }
  const result = ProjectSchema.safeParse(data);
  if (!result.success) {
    const message = result.error.issues
      .map((issue) => issue.message)
      .join('; ');
    throw new Error(`Validation error on reading project :${message}`);
  }

  return result.data;
}

async function readProjects(): Promise<Project[]> {
  const { data } = await api.get('/projects');
  const result = ListOfProjectsSchema.safeParse(data);
  if (!result.success) {
    const message = result.error.issues
      .map((issue) => issue.message)
      .join('; ');
    throw new Error(`Validation error on reading projects :${message}`);
  }
  return result.data;
}
async function createProject(project: FormData) {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('User is not authenticated');
  }
  const { data } = await api.post('/projects', project, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
}

async function updateProject({
  project,
  projectId,
}: {
  project: FormData;
  projectId: number | undefined;
}) {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('User is not authenticated');
  }
  if (!projectId) {
    throw new Error('Project Id  is required');
  }
  const { data } = await api.put(`/projects/${projectId}`, project, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
}

async function deleteProject(projectId: number) {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('User is not authenticated');
  }
  if (!projectId) {
    throw new Error('Project Id is required');
  }
  const { data } = await api.delete(`/projects/${projectId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
}

function useUpdateProject() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateProject,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        predicate: (query) => {
          const key = query.queryKey;
          return key.includes('project') || key.includes('projects');
        },
      });
    },
  });
}

function useProjects() {
  return useQuery({
    queryKey: ['projects'],
    queryFn: readProjects,
  });
}

function useAddProject() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createProject,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });
}

function useReadProject({ projectId }: { projectId?: number | null }) {
  return useQuery({
    queryKey: ['project', projectId],
    queryFn: async () => await readProject(projectId as number),
    enabled: projectId != null,
  });
}

function useDeleteProject() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteProject,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });
}

export {
  useProjects,
  useUpdateProject,
  useAddProject,
  useReadProject,
  useDeleteProject,
};
