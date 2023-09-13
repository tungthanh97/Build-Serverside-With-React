import { useEffect, useRef, useState } from "react";


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
      PLAY MUSIC
    </button>
  );
};

export default AudioPlayer;
