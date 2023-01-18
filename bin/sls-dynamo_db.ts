#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib'
import 'source-map-support/register'
import { SlsDynamoDbStack } from '../lib/sls-dynamo_db-stack'

const app = new cdk.App()
new SlsDynamoDbStack(app, 'SlsDynamoDbStack')
