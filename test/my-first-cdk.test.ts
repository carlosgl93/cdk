import * as cdk from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import * as MyFirstCdk from "../lib/my-first-cdk-stack";

// example test. To run these tests, uncomment this file along with the
// example resource in lib/my-first-cdk-stack.ts
test("My first cdk stack created", () => {
  const app = new cdk.App();
  const stack = new MyFirstCdk.MyFirstCdkStack(app, "MyTestStack");
  const template = Template.fromStack(stack);

  template.hasResourceProperties("AWS::Lambda::Function", {
    FunctionName: "first-cdk-lambda",
    Runtime: "nodejs18.x",
    Handler: "index.handler",
    MemorySize: 128,
  });
});
