import { S3StaticSite } from "@tsukiy0/aws-cdk-tools";
import { CachePolicy } from "aws-cdk-lib/aws-cloudfront";
import { Source } from "aws-cdk-lib/aws-s3-deployment";
import { Construct } from "constructs";
import path from "path";

export class Web extends Construct {
  public constructor(scope: Construct, id: string) {
    super(scope, id);

    new S3StaticSite(this, "StaticSite", {
      source: Source.asset(path.resolve(__dirname, "../../../web/out")),
      cacheBehaviors: [
        {
          path: "*.html",
          cachePolicy: CachePolicy.CACHING_DISABLED,
        },
        {
          path: "favicon.ico",
          cachePolicy: CachePolicy.CACHING_DISABLED,
        },
      ],
    });
  }
}
