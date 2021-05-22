import { HostedZone } from "@aws-cdk/aws-route53";
import { Construct, Stack, StackProps } from "@aws-cdk/core";
import { BillingAlarm, EmailNotification } from "@tsukiy0/aws-cdk-toolbox";

export class RootStack extends Stack {
  public constructor(
    scope: Construct,
    id: string,
    props: StackProps & {
      alertEmail: string;
      domainName: string;
    },
  ) {
    super(scope, id, props);

    const emailNotification = new EmailNotification(this, "EmailNotification", {
      emails: [props.alertEmail],
    });

    new BillingAlarm(this, "BillingAlarm", {
      amountUSD: 10,
      actions: [emailNotification.action],
    });

    new HostedZone(this, "HostedZone", {
      zoneName: props.domainName,
    });
  }
}
