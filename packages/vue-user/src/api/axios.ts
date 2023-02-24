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

export default client;
