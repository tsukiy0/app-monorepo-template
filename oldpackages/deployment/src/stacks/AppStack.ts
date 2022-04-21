import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Api } from "../constructs/Api";
import { External } from "../constructs/External";
import { Web } from "../constructs/Web";

export class AppStack extends Stack {
  public constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    new External(this, "External");

    new Api(this, "Api");

    new Web(this, "Web");
  }
}