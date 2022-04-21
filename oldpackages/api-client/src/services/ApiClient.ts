import {
  FetchExtensions,
  Guid,
  Url,
  UrlExtensions,
} from "@tsukiy0/extensions-core";
import fetch from "cross-fetch";

type Config = {
  apiUrl: Url;
  apiKey: Guid;
};

export class ApiClient {
  constructor(private readonly config: Config) {}

  getHealth = async (): Promise<void> => {
    const response = await fetch(
      ...this.getFetchArgs("/v1/public/health/", {}),
    );

    await FetchExtensions.checkSuccess(response, [200]);
  };

  private getFetchArgs = (
    path: string,
    body: unknown,
  ): Parameters<typeof fetch> => {
    const headers = {
      "x-api-key": this.config.apiKey,
      "content-type": "application/json",
    };
    const url = UrlExtensions.appendPath(this.config.apiUrl, path);

    return [
      url,
      {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      },
    ];
  };
}
