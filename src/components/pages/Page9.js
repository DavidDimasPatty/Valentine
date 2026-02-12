import { useRef } from "react";
const Page9 = () => {
  const audioRef = useRef(null);

  const playAudio = () => {
    audioRef.current.play();
  };

  return (
    <div className="w-full h-full flex items-center justify-center text-gray-200 flex-col gap-3">
      <audio src="/audio/audio.ogg" autoPlay loop />
      <p>
        Happy Valentine’s Day, my love.
        You make my life brighter and my heart happier every single day.
        I’m so grateful for every moment we share together.
        Being with you feels like home and my favorite adventure at the same time.
        I love you more than words can ever explain. Happy Valentine’s, once again.
      </p>
      <button
        onClick={playAudio}
        className="
    relative
    px-8 py-3
    text-white font-semibold
    rounded-full
    bg-gradient-to-r from-pink-500 to-rose-500
    shadow-lg
    transition-all duration-300
    hover:scale-110
    hover:shadow-pink-300/50
    active:scale-95
  "
      >
        💕 Play Audio
      </button>
    </div>
  );
}

export default Page9;