import { getAuthorisationURLWithQueryParamsAndSetState } from "supertokens-web-js/recipe/thirdpartyemailpassword";

async function googleSignIn(redirectURL: string) {
  try {
    const authUrl = await getAuthorisationURLWithQueryParamsAndSetState({
      authorisationURL: `${redirectURL}/auth/callback/google`,
      providerId: "google",
    });

    window.location.assign(authUrl);
  } catch (err: any) {
    if (err.isSuperTokensGeneralError === true) {
      window.alert(err.message);
    } else {
      window.alert(`Oops! Something went wrong. Error:${err.message}`);
    }
  }
}

export default googleSignIn;
