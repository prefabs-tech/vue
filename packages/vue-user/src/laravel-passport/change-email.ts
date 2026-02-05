import client from "../api/axios";

const changeEmail = async (email: string, apiBaseUrl: string, path: string) => {
  try {
    const response = await client(apiBaseUrl).put(
      path,
      { email },
      {
        withCredentials: true,
      },
    );

    return response.statusText;
    /*eslint-disable-next-line @typescript-eslint/no-explicit-any */
  } catch (error: any) {
    if (error.response) {
      const { data } = error.response;

      return { status: data.status, message: data.message };
    }

    return { status: "ERROR", message: "Oops! Something went wrong" };
  }
};

export default changeEmail;
