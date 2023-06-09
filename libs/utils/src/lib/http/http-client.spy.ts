import {
  HttpClient,
  HttpRequest,
  HttpResponse,
} from './http-client.interface';

export class HttpClientSpy implements HttpClient {
  private readonly requests: HttpRequest[] = [];

  constructor(
    private responseBody: unknown = {},
    private responseStatus: number = 200
  ) {}

  public send<TResponse>(request: HttpRequest) {
    const response: HttpResponse = {
      status: this.responseStatus,
      body: this.responseBody,
    };

    this.requests.push(request);
    return Promise.resolve(response) as TResponse;
  }

  public reset() {
    this.requests.length = 0;
  }

  public setResponse(responseBody: unknown, responseStatus = 200): void {
    this.responseBody = responseBody;
    this.responseStatus = responseStatus;
  }

  shouldSendNumberOfRequests(numberOfRequests: number): this {
    expect(this.requests.length).toBe(numberOfRequests);
    return this;
  }

  withUrl(url: string): this {
    expect(this.requests[0].url).toBe(url);
    return this;
  }

  withMethod(method: 'POST' | 'GET' | 'PUT' | 'DELETE'): this {
    expect(this.requests[0].method).toBe(method);
    return this;
  }

  withBody<TBody>(body: TBody): this {
    expect(this.requests[0].body).toEqual(body);
    return this;
  }

  withHeaders<THeaders>(headers: THeaders): this {
    expect(this.requests[0].headers).toEqual(headers);
    return this;
  }
}
