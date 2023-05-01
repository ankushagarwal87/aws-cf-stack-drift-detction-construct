import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { NotifyingStackDrift } from './NotifyingStackDrift';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new NotifyingStackDrift(this, id, {})
  }
}
