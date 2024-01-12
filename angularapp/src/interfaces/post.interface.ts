import { User } from "./user.interface"
export interface Post {
  id: string;
  title: string;
  content: string;
  summary: string;
  createDate: string;
  updateDate: string | null;
  publishDate: string | null;
  author: User
}
