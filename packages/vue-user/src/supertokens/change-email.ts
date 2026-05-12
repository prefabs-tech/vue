import client from "../api/axios";

const changeEmail = async (email: string, apiBaseUrl: string) => {
  try {
    const response = await client(apiBaseUrl).post(
      "/change-email",
      { email },
      {
        withCredentials: true,
      },
    );

    return response.data.status;
    /*eslint-disable-next-line @typescript-eslint/no-explicit-any */
  } catch (error: any) {
    if (error.response) {
      const { data } = error.response;

      return { message: data.message, status: data.status };
    }

    return { message: "Oops! Something went wrong", status: "ERROR" };
  }
};

export default changeEmail;
