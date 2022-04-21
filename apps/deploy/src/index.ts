import { App } from "aws-cdk-lib";
import { Environment } from "@packages/domain";
import { AppStack } from "./stacks/AppStack";
import { ExternalStack } from "./stacks/ExternalStack";

const app = new App();

const account = process.env.CDK_DEFAULT_ACCOUNT;
const region = process.env.CDK_DEFAULT_REGION;
const environment = Environment.check(process.env.ENVIRONMENT);

const config: Record<
  Environment,
  {
    environment: Environment;
  }
> = {
  dev: {
    environment,
  },
  prod: {
    environment,
  },
};

const external = new ExternalStack(app, "External", {
  env: {
    account,
    region,
  },
  ...config[environment],
});

new AppStack(app, "App", {
  env: {
    account,
    region,
  },
  ...config[environment],
  external,
});
