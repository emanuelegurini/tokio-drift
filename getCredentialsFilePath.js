import { join } from "path"
import { getHomeDir } from "./getHomeDir.js"

/**
 * ============ ABOUT AWS_SHARED_CREDENTIALS_FILE ============
 *
 * https://docs.aws.amazon.com/cli/v1/userguide/cli-configure-files.html
 *
 * You can specify a non-default location for the files by setting 
 * the AWS_SHARED_CREDENTIALS_FILE environment variables to another 
 * local path.
 */
export const ENV_CREDENTIALS_PATH = "AWS_SHARED_CREDENTIALS_FILE"

export const getCredentialsFilePath = () => process.env[ENV_CREDENTIALS_PATH] || join(getHomeDir(), ".aws", "credentials");
  
