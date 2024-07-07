export type Problem = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  difficulty?: "Option1" | null;
  likes: number | null;
  title: string | null;
  description: string | null;
  dislikes: number | null;
};
