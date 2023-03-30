import Session from "supertokens-web-js/recipe/session";

import { removeUserData } from "../utils";

const logout = async () => {
  await Session.signOut();

  removeUserData();
};

export default logout;
