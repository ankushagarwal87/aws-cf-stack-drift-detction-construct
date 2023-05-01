import { Construct } from 'constructs';
import * as events from 'aws-cdk-lib/aws-events';
import * as targets from 'aws-cdk-lib/aws-events-targets';

export interface NotifyingStackDriftProps {
  // Define construct properties here
}

export class NotifyingStackDrift extends Construct {

  constructor(scope: Construct, id: string, props: NotifyingStackDriftProps = {}) {
    super(scope, id);

   // Create rule to trigger this be run every 24 hours
    new events.Rule(this, id, {
      description: "Starts the CloudFormation Drift Detection task every night",
      ruleName: "cloudformation_scheduler",
      schedule: events.Schedule.expression("cron(25 10 * * ? *)"),
      targets: [new targets.AwsApi({
        action:'detectStackDrift',
        service:'CloudFormation',
        parameters: { "StackName": "payroll-infra-stack" }
      })]
    });
  }
}