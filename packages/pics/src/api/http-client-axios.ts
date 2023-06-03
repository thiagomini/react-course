import axios, { RawAxiosRequestHeaders } from 'axios';
import { HttpClient, HttpRequest, HttpResponse } from './http-client.interface';

export class HttpClientAxios implements HttpClient {
  private readonly axiosInstance = axios.create();

  public async send<TResponse>(
    request: HttpRequest
  ): Promise<HttpResponse<TResponse>> {
    const response = await this.axiosInstance.request({
      url: request.url,
      method: request.method,
      data: request.body,
      headers: request.headers as RawAxiosRequestHeaders,
    });

    return {
      status: response.status,
      body: response.data,
    };
  }
}
