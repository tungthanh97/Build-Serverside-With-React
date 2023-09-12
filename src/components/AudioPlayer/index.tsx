import { useEffect, useRef, useState } from "react";
import PlayButton from "../../assets/play.svg";

const AudioPlayer = ({
  currentTrack,
}: {
  currentTrack: { preview_url: string };
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(currentTrack.preview_url));

  const playMusic = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };

  const pauseMusic = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };

  useEffect(() => {
    return () => audioRef.current.pause();
  }, []);

  return (
    <button
      className="cursor-pointer"
      onClick={() => {
        if (!isPlaying) playMusic();
        else pauseMusic();
      }}
    >
      <img src={PlayButton} alt="play" />
    </button>
  );
};

export default AudioPlayer;
