import client from "../api/axios";
import { EMAIL_VERIFICATION } from "../constant";

type emailVerificationStatus = "OK" | "EMAIL_ALREADY_VERIFIED_ERROR";

const getVerificationStatus = async (
  apiBaseUrl: string,
  path: string,
): Promise<boolean> => {
  try {
    const response = await client(apiBaseUrl).get(path);

    return response.data?.isVerified;
  } catch {
    throw new Error("SOMETHING_WRONG");
  }
};

const sendVerificationEmail = async (
  apiBaseUrl: string,
  path: string,
): Promise<emailVerificationStatus> => {
  try {
    const response = await client(apiBaseUrl).post(path);

    return response.data
      ? EMAIL_VERIFICATION.OK
      : EMAIL_VERIFICATION.EMAIL_ALREADY_VERIFIED_ERROR;
  } catch {
    throw new Error("SOMETHING_WRONG");
  }
};

const verifyEmail = async (token: string, apiBaseUrl: string, path: string) => {
  try {
    const response = await client(apiBaseUrl).post(path, { token });

    return response.data
      ? { status: EMAIL_VERIFICATION.OK }
      : { status: EMAIL_VERIFICATION.EMAIL_VERIFICATION_INVALID_TOKEN_ERROR };
  } catch {
    throw new Error("SOMETHING_WRONG");
  }
};

export { getVerificationStatus, sendVerificationEmail, verifyEmail };
