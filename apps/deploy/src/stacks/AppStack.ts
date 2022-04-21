import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Environment } from "@packages/domain";
import { ExternalStack } from "./ExternalStack";
import { App } from "../constructs/App";

export class AppStack extends Stack {
  public constructor(
    scope: Construct,
    id: string,
    props: StackProps & {
      environment: Environment;
      external: ExternalStack;
    }
  ) {
    super(scope, id, props);

    new App(this, "App", {});
  }
}
