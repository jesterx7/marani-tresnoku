import { useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

const photos = [
    "/collections/img-1.jpeg",
    "/collections/img-2.jpeg",
    "/collections/img-3.jpeg",
    "/collections/img-4.jpeg",
    "/collections/img-5.jpeg",
    "/collections/img-6.jpeg",
    "/collections/img-7.jpeg",
    "/collections/img-8.jpg",
    "/collections/img-9.jpg",
    "/collections/img-10.jpg",
];

function WeddingContent() {
    const [sizes, setSizes] = useState({});
    const [attendance, setAttendance] = useState("");
    const [pax, setPax] = useState("");
    const [name, setName] = useState("");
    const [wishes, setWishes] = useState("");
    const [wishesList, setWishesList] = useState([
        { id: 1, name: "Andi", message: "Selamat ya! Semoga langgeng 🙏" },
        { id: 2, name: "Budi", message: "Happy wedding! 💕" },
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !wishes) return;

        const newWish = {
            id: Date.now(),
            name,
            message: wishes,
        };
        setWishesList([newWish, ...wishesList]);
        setName("");
        setWishes("");
    };

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
            <div className="relative min-h-screen p-8 inset-0 z-50 flex flex-col items-center justify-center bg-[url('/bg-flower-mobile.jpg')] bg-cover bg-center bg-no-repeat text-center">
                <div className="w-full h-full rounded-3xl border-0 border-[#D4AF37] p-8 bg-white bg-opacity-30">
                    <div className="text-sm font-serif">
                        Destiny never come in expected way, Separated individuals become one, Every steps we take will be lighter with our bonds
                    </div>
                    <div className="text-2xl great-vibes-regular mt-10">
                        Marcellino Agustinus Sinaga
                    </div>
                    <div className="text-2xl great-vibes-regular mt-10">
                        &
                    </div>
                    <div className="text-2xl great-vibes-regular mt-10">
                        Nandia Rani Woro Tri Handayani
                    </div>
                </div>
            </div>
            <div className="relative min-h-screen p-8 inset-0 z-50 flex flex-col items-center justify-center bg-[url('/bg-place-mobile.jpg')] bg-cover bg-center bg-no-repeat text-center">
                <div className="w-full h-full rounded-3xl border-0 border-[#D4AF37] p-8 bg-white bg-opacity-50">
                    <div className="text-2xl crimson-text-semibold text-center">
                        Holy Matrimony
                        <hr className="w-3/4 border-1 border-black mx-auto mt-3" />
                    </div>
                    <div className="mt-5">
                        <p className="text-md font-serif">Gereja Katolik Hati Santa Perawan Maria Tak Bercela</p>
                        <p className="text-sm font-serif">Jl. Kemetiran No.13, Pringgokusuman, Gedong Tengen, Kota Yogyakarta</p>
                    </div>
                    <div className="text-2xl great-vibes-regular mt-7">
                        &
                    </div>
                    <div className="text-2xl crimson-text-semibold text-center mt-7">
                        Reception
                        <hr className="w-3/4 border-1 border-black mx-auto mt-3" />
                    </div>
                    <div className="mt-5">
                        <p className="text-md font-serif">Grha Pradipta Jogja Expo Center</p>
                        <p className="text-sm font-serif">Jl. Raya Janti Jl. Wonocatur, Wonocatur, Banguntapan</p>
                    </div>
                </div>
            </div>
            <div className="relative min-h-screen p-8 inset-0 z-50 flex flex-col items-center justify-center bg-[url('/bg-gift-mobile.jpg')] bg-cover bg-center bg-no-repeat text-center">
                <div className="text-4xl crimson-text-semibold text-center text-pink-300 mt-7">
                    Wedding Gift
                </div>
                <div className="mt-10 text-2xl text-black crimson-text-regular">
                    Doa restu Anda adalah hadiah terbaik bagi kami. Jika berkenan memberikan tanda kasih, dapat melalui pilihan di bawah ini.
                </div>
                <div>
                    <button
                        type="button"
                        className="inline-flex mt-10 items-center text-white bg-pink-300 hover:bg-pink-400 box-border border border-pink-300 focus:ring-4 focus:ring-pink-200 shadow-xs font-medium leading-5 rounded-lg text-sm px-4 py-2.5 focus:outline-none">
                        <i className="fa-solid fa-gift me-2"></i>
                        Send Gift
                    </button>
                </div>
            </div>
            <div className="relative min-h-screen p-6 bg-white">
                <Gallery
                    options={{
                        arrowPrev: true,
                        arrowNext: true,
                        close: true,
                        zoom: true,
                        counter: true,
                        maxZoomLevel: 1,
                        showHideAnimationType: "none"
                    }}
                >
                    <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] gap-2">
                        {photos.map((src, i) => {
                            const span =
                                (i === 0 || i === 7)
                                    ? "row-span-2"
                                    : (i === 3 || i === 6)
                                        ? "col-span-2"
                                        : "";

                            return (
                                <Item
                                    key={i}
                                    original={src}
                                    thumbnail={src}
                                    width={sizes[src]?.width || 1}
                                    height={sizes[src]?.height || 1}
                                >
                                    {({ ref, open }) => (
                                        <div
                                            ref={ref}
                                            onClick={open}
                                            className={`relative overflow-hidden cursor-pointer ${span}`}
                                        >
                                            <img
                                                src={src}
                                                loading="lazy"
                                                onLoad={(e) => {
                                                    const { naturalWidth, naturalHeight } = e.currentTarget;
                                                    setSizes((prev) => ({
                                                        ...prev,
                                                        [src]: { width: naturalWidth, height: naturalHeight },
                                                    }));
                                                }}
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
            <div className="relative min-h-screen px-6 py-12 inset-0 z-50 flex flex-col items-center justify-center bg-[linear-gradient(360deg,_#F9A8D4_3%,_#FF003F00_20%),url('/bg-rsvp-mobile.jpeg')] bg-cover bg-center bg-no-repeat text-center">
                <div className="w-full min-h-screen rounded-[75px] border-0 border-[#D4AF37] p-4 bg-white bg-opacity-70">
                    <div className="w-full min-h-screen rounded-[75px] border-0 border-[#D4AF37] p-8 bg-white bg-opacity-40">
                        <form onSubmit={handleSubmit}>
                            <div className="font-serif">
                                <p className="text-2xl">RSVP & Wishes</p>
                                <p className="text-sm mt-2">Please kindly fill in the confirmation of attendance and greetings for the bride and groom below:</p>
                            </div>
                            <div className="text-md font-serif mt-10">
                                <p className="text-left ml-2 mb-2">Name :</p>
                                <div>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter your name"
                                        class="border border-gray-300 rounded-2xl px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-pink-300 focus:border-pink-300"
                                    />
                                </div>
                            </div>
                            <div className="font-serif mt-8">
                                <p className="text-left ml-2 mb-2">Confirmation Attendance :</p>
                                <select
                                    name="rsvp"
                                    className="border border-gray-300 rounded-2xl px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-pink-300 focus:border-pink-300"
                                    onChange={(e) => {
                                        setAttendance(e.target.value);
                                        if (e.target.value !== "attending") {
                                            setPax("");
                                        }
                                    }}
                                >
                                    <option value="">Select RSVP</option>
                                    <option value="attending">Attending</option>
                                    <option value="not_attending">Not Attending</option>
                                </select>
                            </div>
                            <div className="font-serif mt-8">
                                <p className="text-left ml-2 mb-2">Number Of Pax :</p>
                                <select
                                    name="number_of_pax"
                                    value={pax}
                                    onChange={(e) => setPax(e.target.value)}
                                    disabled={attendance !== "attending"}
                                    className={`w-full border rounded-lg px-4 py-2 focus:ring-pink-300 focus:border-pink-300 ${attendance !== "attending"
                                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                        : "bg-white border-gray-300"
                                        }`}
                                >
                                    <option value="">Number of pax</option>
                                    <option value="1">1 People</option>
                                    <option value="2">2 People</option>
                                </select>
                            </div>
                            <div className="font-serif mt-8">
                                <p className="text-left ml-2 mb-2">Wishes :</p>
                                <textarea
                                    value={wishes}
                                    onChange={(e) => setWishes(e.target.value)}
                                    placeholder="Write us your wishes..."
                                    rows={4}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-pink-300"
                                />
                            </div>

                            <button type="submit" className="w-1/2 bg-pink-300 text-white rounded-3xl py-2 hover:bg-pink-300 transition font-sm font-medium mt-4">
                                Send RSVP
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center p-8 bg-pink-300 bg-cover bg-center bg-no-repeat text-center border-0">
                <div className="font-roboto font-medium mb-4">
                    <p className="text-2xl text-white">Our Wishes</p>
                </div>
                <div className="w-full max-w-md space-y-3 max-h-80 overflow-y-auto">
                    {wishesList.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow text-left"
                        >
                            <p className="font-semibold text-pink-500">{item.name}</p>
                            <p className="text-gray-700 text-sm">{item.message}</p>
                        </div>
                    ))}
                </div>
            </div>
            <footer class="bg-gray-900 text-gray-300 text-center py-4">
                <p class="text-sm">
                    © 2026 Marcani. All rights reserved.
                </p>
            </footer>
        </div>
    );
}

export default WeddingContent;