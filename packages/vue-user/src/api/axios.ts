import axios from "axios";
import SuperTokens from "supertokens-website";

SuperTokens.addAxiosInterceptors(axios);

const client = (baseURL: string) => {
  return axios.create({
    baseURL: baseURL,
    headers: {
      post: {
        "Content-Type": "application/json",
      },
    },
  });
};

export const encodeURIParameter = <T>(argument: T) => {
  return !argument ? undefined : JSON.stringify(argument);
};

export default client;
