export interface IRequest {
  api: string;
  options: RequestInit;
  body?: BodyInit | string | Record<string, unknown>;
}

export type IError = unknown | Error;
