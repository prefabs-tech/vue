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
  } catch (error) {
    throw new Error("SOMETHING_WRONG");
  }
};

const sendVerificationEmail = async (
  apiBaseUrl: string,
  path: string,
): Promise<emailVerificationStatus> => {
  try {
    const response = await client(apiBaseUrl).post(path);

    if (response.data) {
      return EMAIL_VERIFICATION.OK;
    } else {
      return EMAIL_VERIFICATION.EMAIL_ALREADY_VERIFIED_ERROR;
    }
  } catch (error) {
    throw new Error("SOMETHING_WRONG");
  }
};

export { getVerificationStatus, sendVerificationEmail };
