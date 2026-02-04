import { useState } from "react";
import LightBoxContent from "./LightBoxContent";

const photos = [
    "/collections/img-1.jpeg",
    "/collections/img-2.jpeg",
    "/collections/img-1.jpeg",
    "/collections/img-2.jpeg",
    "/collections/img-1.jpeg",
    "/collections/img-2.jpeg"
];

function WeddingContent() {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div>
            <div className="relative h-screen p-8 bg-[linear-gradient(360deg,_#7a99b7_3%,_#FF003F00_40%),url('/img-view-1-mobile.jpeg')] bg-cover bg-center bg-no-repeat text-center border-0">
                <div className="flex items-center justify-center flex-col">
                    <div className="text-6xl lg:text-9xl tracking-wide font-serif opacity-0 translate-y-4 animate-fadeIn">
                        Marani
                    </div>
                    <div className="text-7xl lg:text-9xl tracking-wide great-vibes-regular opacity-0 translate-y-4 animate-fadeIn">
                        Katresnan
                    </div>
                    <div className="flex items-center justify-center gap-3 opacity-0 translate-y-4 animate-fadeIn">
                        <div className="text-3xl text-white crimson-text-semibold">
                            Marcell
                        </div>
                        <div className="text-2xl text-white crimson-text-semibold">
                            &
                        </div>
                        <div className="text-3xl text-white crimson-text-semibold">
                            Rani
                        </div>
                    </div>

                </div>
                <div className="absolute bottom-8 left-0 right-0 p-3">
                    <div className="flex flex-col items-center animate-swipeUp [animation-delay:.3s]">
                        <svg className="w-6 h-6 text-white opacity-30" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M5 15l7-7 7 7" />
                        </svg>
                        <svg className="w-6 h-6 text-white opacity-60 -mt-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M5 15l7-7 7 7" />
                        </svg>
                    </div>
                    <div className="mt-2 md:mt-4 text-1xl md:text-3xl text-white opacity-0 translate-y-4 animate-fadeIn crimson-text-regular">
                        Swipe up
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-screen p-8 bg-primary bg-cover bg-center bg-no-repeat text-center border-0">
                <div className="text-5xl text-white great-vibes-regular">
                    Matius 19 : 6
                </div>
                <div className="mt-12 text-3xl text-white crimson-text-regular">
                    Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia
                </div>
            </div>
            <div className="relative min-h-screen p-6 bg-white">

                {/* GRID VIEW */}
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                    {photos.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt=""
                            onClick={() => setActiveIndex(i)}
                            className="aspect-square object-cover rounded-xl cursor-pointer transition-transform hover:scale-105"
                        />
                    ))}
                </div>

                {/* LIGHTBOX */}
                {activeIndex !== null && (
                    <LightBoxContent
                        photos={photos}
                        index={activeIndex}
                        onClose={() => setActiveIndex(null)}
                        onPrev={() =>
                            setActiveIndex((activeIndex - 1 + photos.length) % photos.length)
                        }
                        onNext={() =>
                            setActiveIndex((activeIndex + 1) % photos.length)
                        }
                    />
                )}
            </div>
        </div>
    );
}

export default WeddingContent;