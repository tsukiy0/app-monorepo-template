export interface ILogger {
  info(message: string, context?: unknown): void;
  error(e: Error, context?: unknown): void;
}
