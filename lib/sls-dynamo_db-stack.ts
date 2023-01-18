import * as cdk from 'aws-cdk-lib'
import * as S3 from 'aws-cdk-lib/aws-s3'

import { Construct } from 'constructs'
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class SlsDynamoDbStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    this.connectS3bucket(this)
  }

  private connectS3bucket(params: any) {
    return new S3.Bucket(params, 'MyBucket', {
      bucketName: 'sls-basic-engine',
      blockPublicAccess: S3.BlockPublicAccess.BLOCK_ALL,
      encryption: S3.BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      versioned: true,
    })
  }
}
