import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";

export class MyFirstCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'MyFirstCdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    new lambda.Function(this, "lambdaFunction", {
      functionName: "first-cdk-lambda",
      code: new lambda.AssetCode("src"),
      handler: "index.handler",
      runtime: lambda.Runtime.NODEJS_18_X,
      memorySize: 128,
    });
  }
}
