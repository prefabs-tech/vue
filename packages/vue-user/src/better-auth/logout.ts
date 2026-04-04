import client from "../api/axios";

const logout = async (apiBaseUrl: string, path: string): Promise<void> => {
  try {
    await client(apiBaseUrl).post(
      path,
      {},
      {
        withCredentials: true,
      },
    );
  } catch {
    throw new Error("LOGOUT_FAILED");
  }
};

export default logout;
