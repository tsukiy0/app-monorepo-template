import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Environment } from "@packages/domain";

export class ExternalStack extends Stack {
  public constructor(
    scope: Construct,
    id: string,
    props: StackProps & {
      environment: Environment;
    }
  ) {
    super(scope, id, props);
  }
}
