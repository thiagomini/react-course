export interface HttpRequest<
  TBody extends Record<string, unknown> = Record<string, unknown>,
  THeaders extends Record<string, unknown> = Record<string, unknown>
> {
  url: string;
  method: 'POST' | 'GET' | 'PUT' | 'DELETE';
  body?: TBody;
  headers?: THeaders;
}

export interface HttpResponse<TBody = unknown> {
  status: number;
  body?: TBody;
}

export abstract class HttpClient {
  abstract send<TResponse>(
    request: HttpRequest
  ): Promise<HttpResponse<TResponse>>;
}
