import { HttpClient } from "@react-course/utils";
import { Book, createBook } from "../domain/book";

export class BooksApi {
  constructor(private readonly httpClient: HttpClient) {}

  public async create(title: string): Promise<Book> {
    const newBook = createBook(title);
    const { body } = await this.httpClient.send<Book>({
      method: 'POST',
      url: 'http://localhost:3001/books',
      body: { ...newBook },
    });

    if (!body) throw new Error('Book not created')
    
    return {
      id: body?.id,
      title: body?.title,
    };
  }

  public async updateById(id: string, title: string): Promise<Book> {
    const { body } = await this.httpClient.send<Book>({
      method: 'PUT',
      url: `http://localhost:3001/books/${id}`,
      body: { title },
    })

    if (!body) throw new Error('Book not updated')

    return {
      id: body?.id,
      title: body?.title,
    }
  }

  public async deleteById(id: string): Promise<Book> {
    const { body } = await this.httpClient.send<Book>({
      method: 'DELETE',
      url: `http://localhost:3001/books/${id}`,
    })

    if (!body) throw new Error('Book not deleted')

    return {
      id: body.id,
      title: body.title,
    }
  }

  public async getAll(): Promise<Book[]> {
    const { body } = await this.httpClient.send<Book[]>({
      method: 'GET',
      url: 'http://localhost:3001/books',
    })

    if (!body) throw new Error('Books not found')

    return body.map((book) => ({
      id: book.id,
      title: book.title,
    }))
  }
  
}