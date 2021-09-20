import { Guid, SystemConfiguration, Url } from "@tsukiy0/extensions-core";
import { ApiClient } from "./ApiClient";

describe("ApiClient", () => {
  let sut: ApiClient;

  beforeEach(() => {
    const config = new SystemConfiguration();
    const apiUrl = Url.check(config.get("API_URL"));
    const apiKey = Guid.check(config.get("API_KEY"));

    sut = new ApiClient({
      apiUrl,
      apiKey,
    });
  });

  describe("getHealth", () => {
    it("gets health", async () => {
      await sut.getHealth();
    });
  });
});
