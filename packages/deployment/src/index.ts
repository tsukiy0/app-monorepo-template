import * as cdk from "@aws-cdk/core";
import { AppStack } from "./stacks/AppStack";
import { RootStack } from "./stacks/RootStack";

const app = new cdk.App();

new RootStack(app, "Root", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT!,
    region: "us-east-1",
  },
  alertEmail: process.env.ALERT_EMAIL!,
  domainName: process.env.DOMAIN_NAME!,
});

new AppStack(app, "UsEast1App", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT!,
    region: "us-east-1",
  },
  domainName: process.env.DOMAIN_NAME!,
  owmApiKey: process.env.OWM_API_KEY!,
});
