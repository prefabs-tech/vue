import EmailVerification from "supertokens-web-js/recipe/emailverification";

const getVerificationStatus = async () => {
  return (await EmailVerification.isEmailVerified()).isVerified;
};

const verifyEmail = async () => {
  const response = await EmailVerification.verifyEmail();

  return { status: response.status };
};

export { getVerificationStatus };

export default verifyEmail;
