import { getAuthorisationURLWithQueryParamsAndSetState } from "supertokens-web-js/recipe/thirdpartyemailpassword";

async function socialSignIn(providerId: string, redirectURL: string) {
  const authUrl = await getAuthorisationURLWithQueryParamsAndSetState({
    frontendRedirectURI: redirectURL,
    thirdPartyId: providerId,
  });

  window.location.assign(authUrl);
}

export default socialSignIn;
