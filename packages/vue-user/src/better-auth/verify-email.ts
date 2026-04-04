import { AxiosError } from "axios";

import client from "../api/axios";
import { EMAIL_VERIFICATION } from "../constant";

const verifyEmail = async (
  token: string,
  apiBaseUrl: string,
  path: string,
): Promise<{
  status:
    | typeof EMAIL_VERIFICATION.OK
    | typeof EMAIL_VERIFICATION.EMAIL_VERIFICATION_INVALID_TOKEN_ERROR;
}> => {
  try {
    await client(apiBaseUrl).get(path, {
      params: { token },
    });

    return { status: EMAIL_VERIFICATION.OK };
  } catch (error) {
    if (
      error instanceof AxiosError &&
      (error.response?.status === 400 || error.response?.status === 404)
    ) {
      return {
        status: EMAIL_VERIFICATION.EMAIL_VERIFICATION_INVALID_TOKEN_ERROR,
      };
    }

    throw new Error("VERIFY_EMAIL_FAILED");
  }
};

const getVerificationStatus = async (
  apiBaseUrl: string,
  path: string,
): Promise<boolean> => {
  try {
    const response = await client(apiBaseUrl).get(path);

    return response.data && response.data.isVerified === true;
  } catch {
    return false;
  }
};

export { verifyEmail, getVerificationStatus };
