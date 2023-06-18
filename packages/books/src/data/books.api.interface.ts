import { Book } from "../domain/book";

export interface BooksApi {
  create(title: string): Promise<Book>;
  updateById(id: string, title: string): Promise<Book>;
  deleteById(id: string): Promise<Book>;
  getAll(): Promise<Book[]>;
}