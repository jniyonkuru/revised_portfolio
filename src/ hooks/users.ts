//standart packages

//third party packages
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';

//local packages

import api from '../axios';

async function readMe() {
  const token = localStorage.getItem('token');
  if (!token) {
    return null;
  }
  const { data } = await api.get('/users/me', {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log(data);
  return data;
}
async function login(username: string, password: string) {
  const { data } = await api.post(
    '/users/token',
    { username, password },
    { headers: { 'Content-Type': 'multipart/form-data' } },
  );
  return data;
}

function useLogin() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => login(username, password),
    onSuccess: async (data) => {
      localStorage.setItem('token', data['access_token']);
      await queryClient.invalidateQueries({ queryKey: ['me'] });
    },
  });
}

function useMe() {
  return useQuery({
    queryKey: ['me'],
    queryFn: readMe,
  });
}

export { useMe, useLogin };
