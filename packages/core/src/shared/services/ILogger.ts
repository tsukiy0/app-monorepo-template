export interface ILogger {
  info(message: string, ctx?: unknown): void;
  error(e: Error, ctx?: unknown): void;
}
