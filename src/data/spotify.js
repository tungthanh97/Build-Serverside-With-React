import axios from "axios";

export const clientId = "da29f46fbe4c40529683a4ae8bf27e1e";
export const clientSecret = "d55809a0d7624a21a1e83ce49763672f";
// const redirectUri = "https://localhost:3000";
// const scopes = ["user-read-private"];

// export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
//   "%20"
// )}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
    apiClient.defaults.headers.Authorization = token;
    apiClient.interceptors.request.use(async function (config) {
      config.headers.Authorization = "Bearer " + token;

      return config;
    });
};

export default apiClient;
