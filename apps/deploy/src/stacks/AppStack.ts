import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Environment } from "@packages/domain";
import { ExternalStack } from "./ExternalStack";
import { Api } from "../constructs/Api";
import { Web } from "../constructs/Web";

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

    new Api(this, "Api")
    new Web(this, "Web")
  }
}
