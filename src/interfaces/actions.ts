export interface IDefaultAction {
  apiFunction: () => Promise<unknown>;
  types: { start: string; success: string; error: string };
}
