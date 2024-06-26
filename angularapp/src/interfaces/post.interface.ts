import { User } from "./user.interface"
export interface Post {
  id: string;
  title: string;
  summary: string;
  content: string;
  createDate: string;
  updateDate: string | null;
  publishDate: string | null;
  author: User;
  images: any[];
}
