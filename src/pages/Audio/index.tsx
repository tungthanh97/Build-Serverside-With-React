import { useEffect, useState } from "react";
import AudioPlayer from "../../components/AudioPlayer";
import { getTrack } from "../../hooks/useTrack";

const Audio = () => {
  const [currentTrack, setCurrentTrack] = useState();

  useEffect(() => {
    const getCurrentTrack = async () => {
      const current = (await getTrack()) as any;
      setCurrentTrack(current?.data);
    };
    getCurrentTrack();
  }, []);

  if (!currentTrack) return <div>Loading ...</div>;

  return <AudioPlayer currentTrack={currentTrack} />;
};

export default Audio;
