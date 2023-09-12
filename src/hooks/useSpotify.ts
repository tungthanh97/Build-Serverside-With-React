import axios from "axios";
import { useEffect, useState } from "react";
import { clientId, clientSecret, setClientToken } from "../data/spotify";
import qs from "qs";

const getToken = async (
  clientId = process.env.SPOTIFY_CLIENT_ID,
  clientSecret = process.env.SPOTIFY_CLIENT_SECRET
) => {
  const headers = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    auth: {
      username: clientId as string,
      password: clientSecret as string,
    },
  };
  const data = {
    grant_type: "client_credentials",
  };
  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      qs.stringify(data),
      headers
    );

    return response.data.access_token;
  } catch (err) {
    console.log(err);
  }
};

const useSpotify = () => {
  const [isLoading, setIsLoading] = useState(true);

  const setSpotifyToken = async () => {
    const token = await getToken(clientId, clientSecret);

    await setClientToken(token);
    localStorage.setItem("TOKEN", token);
    setIsLoading(false);
  };

  useEffect(() => {
    setSpotifyToken();
  }, []);

  return [isLoading];
};

export default useSpotify;
