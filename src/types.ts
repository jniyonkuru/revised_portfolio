import * as z from 'zod';

const ExperienceSchema = z.object({
  role: z.string().min(1),
  id: z.number(),
  organization: z.string(),
  start_date: z.string(),
  end_date: z.nullable(z.string()),
  tasks: z.array(z.string()).nonempty(),
});

const UserSchema = z.object({
  id: z.number(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.email(),
  password: z.nullish(z.string()),
  role: z.string(),
  user_name: z.string(),
});

const ProjectSchema = z.object({
  id: z.number(),
  github_url: z.string(),
  title: z.string(),
  tags: z.array(z.string()).nonempty(),
  description: z.string(),
  image: z.union([z.string(), z.file()]),
  user_id: z.number(),
});

const ListOfProjectsSchema = z.array(ProjectSchema);

// Shape used by the edit/create forms. Unlike ProjectSchema, `tags` is the raw
// comma-separated string bound to the text field; it is split into an array
// before being sent to the API.
const ProjectFormSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  github_url: z.string().min(1, 'Github URL is required'),
  tags: z.string().min(1, 'Please list technologies used.'),
  description: z.string().min(1, 'Description is required'),
  image: z.union([z.string(), z.file()]).optional(),
});

// Shape used by the experience form. `tasks` is the raw newline-separated
// string bound to the textarea; it is split into an array before being sent.
// `end_date` is an empty string while the role is current.
const ExperienceFormSchema = z.object({
  role: z.string().min(1, 'Role is required'),
  organization: z.string().min(1, 'Organization is required'),
  start_date: z.string().min(1, 'Start date is required'),
  end_date: z.string().optional(),
  tasks: z.string().min(1, 'Add at least one task'),
});

type Experience = z.infer<typeof ExperienceSchema>;
type Project = z.infer<typeof ProjectSchema>;
type User = z.infer<typeof UserSchema>;
type ProjectFormValues = z.infer<typeof ProjectFormSchema>;
type ExperienceFormValues = z.infer<typeof ExperienceFormSchema>;

type UpdateProject = {
  title?: string;
  description?: string;
  image?: File;
  tags?: string;
  github_url?: string;
};
export type {
  Experience,
  Project,
  User,
  UpdateProject,
  ProjectFormValues,
  ExperienceFormValues,
};

export {
  ProjectSchema,
  UserSchema,
  ExperienceSchema,
  ListOfProjectsSchema,
  ProjectFormSchema,
  ExperienceFormSchema,
};
