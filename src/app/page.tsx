import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="relative mt-12 px-[2%]">
                <Image
                    src="/coathanger2.png"
                    alt="coat hanger"
                    width={3000}
                    height={1000}
                    style={{ width: "100%", height: "auto" }}
                />
                <div className="absolute h-[65%] top-[6%] z-10 left-0 w-full pl-[1%]">
                    <div className=" w-[16%] h-[100%] text-center  inline-block ">
                        <Image
                            src="/sweater1.png"
                            width={200}
                            height={200}
                            style={{
                                width: "100%",
                                height: "auto",
                            }}
                            alt="sweater"
                        />
                    </div>
                    <div className=" w-[17%] h-[100%] text-center -ml-[8%]  inline-block">
                        <Image
                            src="/sweater2.png"
                            width={200}
                            height={200}
                            style={{
                                width: "70%",
                                height: "auto",
                            }}
                            alt="sweater"
                        />
                    </div>
                    <div className=" w-[17%] h-[100%] text-center -ml-[11%] inline-block">
                        <Image
                            src="/sweater3.png"
                            width={1000}
                            height={1000}
                            style={{
                                width: "100%",
                                height: "auto",
                            }}
                            alt="sweater"
                        />
                    </div>
                    <div className=" w-[17%] h-[100%] text-center -ml-[9%] pt-[1%]  inline-block">
                        <Image
                            src="/sweater4.png"
                            width={1000}
                            height={1000}
                            style={{
                                width: "95%",
                                height: "auto",
                            }}
                            alt="sweater"
                        />
                    </div>
                    <div className=" w-[17%] h-[100%] text-center -ml-[9.7%] pt-[1%]  inline-block">
                        <Image
                            src="/sweater5.png"
                            width={1000}
                            height={1000}
                            style={{
                                width: "95%",
                                height: "auto",
                            }}
                            alt="sweater"
                        />
                    </div>
                    <div className=" w-[17%] h-[100%] text-center -ml-[8.5%]  inline-block">
                        <Image
                            src="/sweater6.png"
                            width={1000}
                            height={1000}
                            style={{
                                width: "95%",
                                height: "auto",
                            }}
                            alt="sweater"
                        />
                    </div>
                    <div className=" w-[17%] h-[100%] text-center -ml-[9%] pt-[1.5%]  inline-block">
                        <Image
                            src="/sweater7.png"
                            width={1000}
                            height={1000}
                            style={{
                                width: "85%",
                                height: "auto",
                            }}
                            alt="sweater"
                        />
                    </div>
                    <div className=" w-[17%] h-[100%] text-center -ml-[10%]   inline-block">
                        <Image
                            src="/sweater8.png"
                            width={1000}
                            height={1000}
                            style={{
                                width: "90%",
                                height: "auto",
                            }}
                            alt="sweater"
                        />
                    </div>
                    <div className=" w-[17%] h-[100%] text-center -ml-[7.5%] inline-block">
                        <Image
                            src="/sweater9.png"
                            width={1000}
                            height={1000}
                            style={{
                                width: "70%",
                                height: "auto",
                            }}
                            alt="sweater"
                        />
                    </div>
                    <div className=" w-[17%] h-[100%] text-center -ml-[11%] pt-[1.5%]   inline-block">
                        <Image
                            src="/sweater10.png"
                            width={1000}
                            height={1000}
                            style={{
                                width: "85%",
                                height: "auto",
                            }}
                            alt="sweater"
                        />
                    </div>
                    <div className=" w-[17%] h-[100%] text-center -ml-[9.5%] pt-[1.5%]   inline-block">
                        <Image
                            src="/sweater11.png"
                            width={1000}
                            height={1000}
                            style={{
                                width: "85%",
                                height: "auto",
                            }}
                            alt="sweater"
                        />
                    </div>
                    <div className=" w-[15%] h-[100%] text-center -ml-[8.8%] pt-[1.5%]  inline-block">
                        <Image
                            src="/sweater12.png"
                            width={1000}
                            height={1000}
                            style={{
                                width: "100%",
                                height: "auto",
                            }}
                            alt="sweater"
                        />
                    </div>
                </div>
            </div>
            <div className="flex gap-2 flex-col lg:flex-row justify-center items-center md:text-center mt-24">
                <div className="flex w-full h-[500px] p-2 flex-col items-center justify-between border border-black">
                    <Image
                        src="/shelf.png"
                        width={500}
                        height={500}
                        style={{
                            width: "100%",
                            height: "auto",
                        }}
                        alt="polica"
                    />
                    <h1 className="text-8xl text-white">0</h1>
                    <h2 className="text-3xl">
                        SZENT ISTVÁN KIRÁLY ZENEI ALAPÍTVÁNY
                    </h2>
                    <div className="bg-blue-900 text-white relative pl-12 rounded-full pr-4 py-1">
                        <Image
                            className="absolute left-0 top-[-4px]"
                            src="/infoIcon.png"
                            width={40}
                            height={40}
                            alt="info icon"
                        />
                        <Link href="#">www.szentistvanzene.hu</Link>
                    </div>
                </div>
                <div className="flex w-full h-[500px] p-2  flex-col items-center justify-between border border-black">
                    <Image
                        src="/shelf.png"
                        width={500}
                        height={500}
                        style={{
                            width: "100%",
                            height: "auto",
                        }}
                        alt="polica"
                    />
                    <h1 className="text-8xl text-white">0</h1>
                    <h2 className="text-3xl">AUTIZMUS ALAPÍTVÁNY</h2>
                    <div className="bg-blue-900 text-white relative pl-12 rounded-full pr-4 py-1">
                        <Image
                            className="absolute left-0 top-[-4px]"
                            src="/infoIcon.png"
                            width={40}
                            height={40}
                            alt="info icon"
                        />
                        <Link href="#">www.autizmus.hu</Link>
                    </div>
                </div>
                <div className="flex w-full h-[500px] p-2  flex-col items-center justify-between border border-black">
                    <Image
                        src="/shelf.png"
                        width={500}
                        height={500}
                        style={{
                            width: "100%",
                            height: "auto",
                        }}
                        alt="polica"
                    />
                    <h1 className="text-8xl text-white">0</h1>
                    <h2 className="text-3xl">ÉLELMISZERBANK EGYESÜLETY</h2>
                    <div className="bg-blue-900 text-white relative pl-12 rounded-full pr-4 py-1">
                        <Image
                            className="absolute left-0 top-[-4px]"
                            src="/infoIcon.png"
                            width={40}
                            height={40}
                            alt="info icon"
                        />
                        <Link href="#">www.elelmiszerbank.hu</Link>
                    </div>
                </div>
                <div className="flex w-full h-[500px] p-2  flex-col items-center justify-between border border-black">
                    <Image
                        src="/shelf.png"
                        width={500}
                        height={500}
                        style={{
                            width: "100%",
                            height: "auto",
                        }}
                        alt="polica"
                    />
                    <h1 className="text-8xl text-white">0</h1>
                    <h2 className="text-3xl">LÁMPÁS ’92 ALAPÍTVÁNY</h2>
                    <div className="bg-blue-900 text-white relative pl-12 rounded-full pr-4 py-1">
                        <Image
                            className="absolute left-0 top-[-4px]"
                            src="/infoIcon.png"
                            width={40}
                            height={40}
                            alt="info icon"
                        />
                        <Link href="#">www.lampas92.hu</Link>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center mt-8 mb-24">
                <button className="py-2 px-8 bg-red-600 text-white rounded-full border-4 border-white">
                    VISSZAÁLLÍTÁS
                </button>
            </div>
        </>
    );
}
