import { HostedZone, IHostedZone } from "@aws-cdk/aws-route53";
import { Construct } from "@aws-cdk/core";

export class Dns extends Construct {
  public readonly hostedZone: IHostedZone;
  public readonly domainName: string;

  public constructor(
    scope: Construct,
    id: string,
    props: {
      domainName: string;
    },
  ) {
    super(scope, id);

    const hostedZone = HostedZone.fromLookup(this, "HostedZone", {
      domainName: props.domainName,
    });

    this.hostedZone = hostedZone;
    this.domainName = props.domainName;
  }
}
