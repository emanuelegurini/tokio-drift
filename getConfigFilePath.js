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
export const ENV_CONFIG_PATH = "AWS_CONFIG_FILE"

export const getConfigFilePath = () => process.env[ENV_CONFIG_PATH] || join(getHomeDir(), ".aws", "config");
