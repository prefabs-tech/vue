import { sendVerificationEmail } from "supertokens-web-js/recipe/emailverification";

type resendEmailStatus = "EMAIL_ALREADY_VERIFIED_ERROR" | "OK";

const resendVerificationEmail = async (): Promise<
  resendEmailStatus | undefined
> => {
  const response = await sendVerificationEmail();

  return response.status;
};

export default resendVerificationEmail;
