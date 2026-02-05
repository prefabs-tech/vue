import EmailVerification from "supertokens-web-js/recipe/emailverification";

const getVerificationStatus = async () => {
  const response = await EmailVerification.isEmailVerified();

  return response.isVerified;
};

const verifyEmail = async () => {
  const response = await EmailVerification.verifyEmail();

  return { status: response.status };
};

export { getVerificationStatus };

export default verifyEmail;
