import { App } from "aws-cdk-lib";
import { AppStack } from "./stacks/AppStack";
import { ExternalStack } from "./stacks/ExternalStack";

const app = new App();

new ExternalStack(app, "External", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT!,
    region: "us-east-1",
  },
  alertEmail: process.env.ALERT_EMAIL!,
});

new AppStack(app, "AppUsEast1", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT!,
    region: "us-east-1",
  },
});
