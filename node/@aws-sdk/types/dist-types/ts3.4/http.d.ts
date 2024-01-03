import { AbortSignal } from "./abort";
import { URI } from "./uri";
export interface Headers extends Map<string, string> {
  withHeader(headerName: string, headerValue: string): Headers;
  withoutHeader(headerName: string): Headers;
}
export type HeaderBag = Record<string, string>;
export interface HttpMessage {
  headers: HeaderBag;
  body?: any;
}
export type QueryParameterBag = Record<string, string | Array<string> | null>;
export interface Endpoint {
  protocol: string;
  hostname: string;
  port?: number;
  path: string;
  query?: QueryParameterBag;
}
export interface HttpRequest extends HttpMessage, URI {
  method: string;
}
export interface HttpResponse extends HttpMessage {
  statusCode: number;
  reason?: string;
}
export interface ResolvedHttpResponse extends HttpResponse {
  body: string;
}
export interface HttpHandlerOptions {
  abortSignal?: AbortSignal;
  requestTimeout?: number;
}
