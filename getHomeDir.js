import { homedir } from "os";
import { sep } from "path";

// console.log('process', process.env)

export const getHomeDir = () => {

  const { HOME, USERPROFILE, HOMEPATH, HOMEDRIVE = `C:${sep}` } = process.env;

  if ( HOME ) return HOME;
  if (USERPROFILE) return USERPROFILE;
  if (HOMEPATH) return`${HOMEDRIVE}${HOMEPATH}`; 
}
