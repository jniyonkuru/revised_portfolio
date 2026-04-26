
interface Experience {
    role:string,
    id: number,
    organization: string,
    start_date: string,
    end_date: string|null,
    tasks: string[]
    created_at: string
    updated_at:string
}
interface Project {
  title: string;
  github_url: string;
  tags: string[];
  description: string;
  id: number;
}

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: string;
  created_at: string;
  updated_at: string;
  user_name: string;
}


export type {Experience,Project,User}