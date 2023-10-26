import { XCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ShelfProps = {
    elements: Array<React.ReactNode>;
    id: string;
    title: string;
    link: string;
    parents: any;
};

export default function Shelf({
    id,
    parents,
    elements,
    title,
    link,
}: ShelfProps) {
    const [popupOpen, setPopupOpen] = useState(false);

    console.log(link);

    return (
        <div className="flex  w-full flex-row-reverse lg:flex-col items-center justify-between lg:gap-4 ">
            {popupOpen && (
                <div className="z-10 fixed left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-[50vw] min-h-[50vh] bg-[#1c3c51ed]  rounded-lg p-12 grid grid-cols-3 gap-4">
                    <div
                        className="absolute top-2 right-2 text-white cursor-pointer"
                        onMouseOver={() => setPopupOpen(true)}
                        onClick={() => setPopupOpen(false)}
                    >
                        <XCircle />
                    </div>
                    {parents.map((el: any) => {
                        if (el.parent === id) {
                            return (
                                <div className="w-full" key={el.id}>
                                    <Image
                                        src={`/${el.id}.png`}
                                        width={100}
                                        height={100}
                                        style={{
                                            width: "100%",
                                            aspectRatio: "1/1",
                                        }}
                                        alt="sweater"
                                    />
                                </div>
                            );
                        }
                    })}
                </div>
            )}
            <div className="flex flex-col border justify-end items-end h-[150px] lg:h-[250px] w-2/5 lg:w-full">
                <div className="lg:w-1/3 lg:max-w-[250px]  w-1/5 -mb-1 md:-mb-2 mr-[60%] md:mr-[42%]  lg:mr-[50%]  flex flex-col-reverse justify-center lg:justify-start">
                    {elements.map((el: any, idx) => (
                        <div key={idx} className="w-[70px] lg:w-[100px]">
                            {el}
                        </div>
                    ))}
                </div>
                <Image
                    src="/shelf.png"
                    width={1000}
                    height={500}
                    alt="shelf"
                    className="mt-1 w-full md:w-[75%]  lg:w-full"
                />
            </div>
            <div className="flex flex-col md:flex-row lg:flex-col items-center justify-center gap-4 border lg:-mt-4 border-pink-300 w-1/3 lg:w-full">
                <h1
                    className="text-6xl lg:text-8xl text-white cursor-pointer"
                    // onMouseOver={() => setPopupOpen(true)}
                    // onMouseLeave={() => setPopupOpen(false)}
                    onClick={() => setPopupOpen(true)}
                >
                    {elements.length}
                </h1>
                <h2 className="text-center md:text-left lg:text-center text-xl lg:text-2xl lg:h-[100px] w-full md:w-1/2 break-words lg:break-normal">
                    {title.toUpperCase()}
                </h2>
            </div>
            <div className="lg:bg-blue-900  text-white relative pl-4 lg:pl-12 rounded-full pr-4 py-1 mt-2 flex flex-col md:flex-row items-center justify-center gap-4 border">
                <Image
                    className="lg:absolute lg:left-0 lg:top-[-4px] cursor-pointer lg:w-10 lg:h-10 w-[40px]  md:w-[50px] h-[40px]  md:h-[50px]"
                    src="/infoIcon.png"
                    width={100}
                    height={100}
                    alt="info icon"
                />
                <Link
                    href={link}
                    target="_blank"
                    className="lg:hidden cursor-pointer w-[40px] md:w-[50px] h-[40px] md:h-[50px] border"
                >
                    <Image
                        src="/linkIcon.png"
                        width={100}
                        height={100}
                        alt="link icon"
                    />
                </Link>
                <Link href={link} className="hidden lg:block">
                    {link}
                </Link>
            </div>
        </div>
    );
}
