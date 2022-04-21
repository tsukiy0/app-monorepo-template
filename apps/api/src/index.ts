import { buildApp } from "./buildApp";
import serverlessExpress from "@vendia/serverless-express";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";

let serverlessExpressInstance: any;

export const handler: APIGatewayProxyHandlerV2 = async (event, context) => {
  if (serverlessExpressInstance) {
    return serverlessExpressInstance(event, context);
  }

  const app = await buildApp();
  serverlessExpressInstance = serverlessExpress({ app });
  return serverlessExpressInstance(event, context);
};
