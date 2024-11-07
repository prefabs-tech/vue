import EmailVerification from "supertokens-web-js/recipe/emailverification";

const verifyEmail = async () => {
  const { isVerified } = await EmailVerification.isEmailVerified();

  if (isVerified) {
    return { status: "EMAIL_ALREADY_VERIFIED" };
  } else {
    const response = await EmailVerification.verifyEmail();

    return { status: response.status };
  }
};

export default verifyEmail;
