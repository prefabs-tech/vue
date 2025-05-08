import client from "../api/axios";

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

export { getVerificationStatus};
