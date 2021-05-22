import { Construct, Stack, StackProps } from "@aws-cdk/core";
import { Api } from "../constructs/Api";
import { Dns } from "../constructs/Dns";

export class AppStack extends Stack {
  public constructor(
    scope: Construct,
    id: string,
    props: StackProps & {
      domainName: string;
      owmApiKey: string;
    },
  ) {
    super(scope, id, props);

    const dns = new Dns(this, "Dns", {
      domainName: props.domainName,
    });

    new Api(this, "Api", {
      dns,
      owmApiKey: props.owmApiKey,
    });
  }
}
