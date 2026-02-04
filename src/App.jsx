import { useRef, useState } from "react";
import WeddingContent from "./content/WeddingContent";
import music from "./assets/musics/music.mp3";
import './App.css'

function App() {
  const audioRef = useRef(null);
  const [opened, setOpened] = useState(false);

  const openInvitation = () => {
    audioRef.current.volume = 0.4;
    audioRef.current.play();
    setOpened(true);
  };

  return (
    <>
      {!opened && (
        <div className="fixed inset-0 z-50 flex flex-col items-center bg-[url('/bg-invitation-mobile.jpg')] md:bg-[url('/bg-invitation-desktop.jpg')] justify-center bg-cover bg-center bg-no-repeat text-center">
          <img
            src="/logo.png"
            alt="Wedding Logo"
            className="mb-2 w-60 md:w-40"
          />
          
          <h1 className="mb-2 text-4xl font-serif tracking-wide">
            Wedding Invitation
          </h1>

          <p className="mb-4 italic text-gray-600">
            You are warmly invited
          </p>

          <p className="mb-8 font-semibold text-gray-600 font-serif tracking-wide">
            Dear Mr. Dummy
          </p>

          <button
            onClick={openInvitation}
            className="rounded-full font-semibold bg-primary px-6 py-2 text-white transition hover:opacity-90"
          >
            OPEN INVITATION
          </button>
        </div>
      )}

      <audio ref={audioRef} loop>
        <source src={music} type="audio/mpeg" />
      </audio>

      {opened && <WeddingContent />}
    </>
  );
}

export default App
