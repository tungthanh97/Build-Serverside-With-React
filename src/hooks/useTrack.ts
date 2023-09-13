import { useEffect } from "react";
import apiClient from "../data/spotify";

export const getTrack = async () => {
  const token = localStorage.getItem("TOKEN");
  const resp = await apiClient.get("tracks/5Msoarj5hk9LguTtiIyqug", {
    params: { market: "VN" },
    headers: { Authorization: "Bearer " + token },
  });
  return resp;
};

const useTrack = () => {
  const accessToken = localStorage.getItem("TOKEN");

  useEffect(() => {
    if (accessToken) getTrack();
  }, [accessToken]);
};

export default useTrack;
