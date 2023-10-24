import Header from "@/components/Header";
import Image from "next/image";

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
                <div className="absolute h-[65%] border border-pink-500 top-[6%] z-10 left-0 w-full">
                    <div className=" w-[17%] h-[100%] text-center  border border-blue-500 inline-block ">
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
                    <div className=" w-[17%] h-[100%] text-center -ml-[9%] border inline-block">
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
                    <div className=" w-[17%] h-[100%] text-center -ml-[10%] border border-blue-500 inline-block">
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
                    <div className=" w-[17%] h-[100%] text-center -ml-[9.5%] border  inline-block">
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
                    <div className=" w-[17%] h-[100%] text-center -ml-[10%]  border border-blue-500 inline-block">
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
                    <div className=" w-[17%] h-[100%] text-center -ml-[8.5%] border inline-block">
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
                    <div className=" w-[17%] h-[100%] text-center -ml-[9.5%]  border border-blue-500 inline-block">
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
                    <div className=" w-[17%] h-[100%] text-center -ml-[10%]  border inline-block">
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
                    <div className=" w-[17%] h-[100%] text-center -ml-[9%] border border-blue-500 inline-block">
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
                    <div className=" w-[17%] h-[100%] text-center -ml-[10%]  border inline-block">
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
                    <div className=" w-[17%] h-[100%] text-center -ml-[10%] border border-blue-500  inline-block">
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
                    <div className=" w-[17%] h-[100%] text-center -ml-[9%] border  inline-block">
                        <Image
                            src="/sweater12.png"
                            width={1000}
                            height={1000}
                            style={{
                                width: "85%",
                                height: "auto",
                            }}
                            alt="sweater"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
