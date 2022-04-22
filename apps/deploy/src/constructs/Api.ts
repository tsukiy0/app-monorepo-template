import {
  DefaultFunction,
  DefaultFunctionHttpApi,
} from "@tsukiy0/aws-cdk-tools";
import { Code, Runtime } from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
import path from "path";

export class Api extends Construct {
  public constructor(scope: Construct, id: string) {
    super(scope, id);

    const fn = new DefaultFunction(this, "Function", {
      runtime: Runtime.NODEJS_14_X,
      code: Code.fromAsset(path.resolve(__dirname, "../../../api/dist")),
      handler: "index.handler",
      memorySize: 128,
    });

    new DefaultFunctionHttpApi(this, "Api", {
      fn,
    });
  }
}
