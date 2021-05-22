import {
  Cors,
  EndpointType,
  LambdaRestApi,
  RestApi,
} from "@aws-cdk/aws-apigateway";
import { Code, Runtime } from "@aws-cdk/aws-lambda";
import { Construct, Aws } from "@aws-cdk/core";
import path from "path";
import { DefaultFunction } from "@tsukiy0/aws-cdk-toolbox";
import { ARecord, CfnRecordSet, RecordTarget } from "@aws-cdk/aws-route53";
import * as targets from "@aws-cdk/aws-route53-targets";
import {
  Certificate,
  CertificateValidation,
} from "@aws-cdk/aws-certificatemanager";
import { Dns } from "./Dns";

export class Api extends Construct {
  public readonly api: RestApi;

  public constructor(
    scope: Construct,
    id: string,
    props: {
      dns: Dns;
      owmApiKey: string;
    },
  ) {
    super(scope, id);

    const fn = new DefaultFunction(this, "Function", {
      runtime: Runtime.NODEJS_12_X,
      code: Code.fromAsset(path.resolve(__dirname, "../../../api/dist")),
      handler: "index.handler",
      memorySize: 128,
      environment: {
        OWM_API_KEY: props.owmApiKey,
      },
    });

    const domainName = `api.${props.dns.domainName}`;

    const api = new LambdaRestApi(this, "Api", {
      handler: fn,
      defaultCorsPreflightOptions: {
        allowOrigins: Cors.ALL_ORIGINS,
        allowMethods: Cors.ALL_METHODS,
      },
    });

    this.addDnsRecord(props.dns, domainName, api);

    this.api = api;
  }

  private addDnsRecord(dns: Dns, domainName: string, api: LambdaRestApi) {
    const certificate = new Certificate(this, "Certificate", {
      domainName: domainName,
      validation: CertificateValidation.fromDns(dns.hostedZone),
    });

    api.addDomainName("DomainName", {
      domainName,
      certificate: certificate,
      endpointType: EndpointType.REGIONAL,
    });

    const record = new ARecord(this, "DnsRecord", {
      zone: dns.hostedZone,
      recordName: domainName,
      target: RecordTarget.fromAlias(new targets.ApiGateway(api)),
    });

    const recordSet = record.node.defaultChild as CfnRecordSet;
    recordSet.region = Aws.REGION;
    recordSet.setIdentifier = Aws.REGION;
  }
}
