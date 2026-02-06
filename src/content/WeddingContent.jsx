import { useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

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
                <Gallery>
                    <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] gap-2">
                        {photos.map((src, i) => {
                            const span =
                                i === 0
                                    ? "row-span-2"
                                    : i === 3
                                        ? "col-span-2"
                                        : "";

                            return (
                                <Item
                                    key={i}
                                    original={src}
                                    thumbnail={src}
                                    width="1200"
                                    height="1800"
                                >
                                    {({ ref, open }) => (
                                        <div
                                            ref={ref}
                                            onClick={open}
                                            className={`relative overflow-hidden cursor-pointer ${span}`}
                                        >
                                            <img
                                                src={src}
                                                alt=""
                                                loading="lazy"
                                                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                            />
                                        </div>
                                    )}
                                </Item>
                            );
                        })}
                    </div>
                </Gallery>
            </div>
        </div>
    );
}

export default WeddingContent;