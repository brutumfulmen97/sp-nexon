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

    return (
        <div className="flex  w-full flex-row-reverse lg:flex-col items-center justify-between lg:gap-4 ">
            {popupOpen && (
                <div className="z-10 fixed left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-[50vw] min-h-[50vh] bg-[#1c3c51ed]  rounded-lg p-12 grid grid-cols-3 gap-4">
                    <div
                        className="absolute top-2 right-2 text-white cursor-pointer"
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
            <div className="flex flex-col border justify-end items-end h-[200px] w-2/5 lg:w-full">
                <div className="lg:w-1/3 lg:max-w-[250px] lg:h-[200px] w-1/5 mr-40 -mb-2 lg:mr-24  flex flex-col-reverse justify-center lg:justify-start">
                    {elements.map((el: any) => el)}
                </div>
                <Image
                    src="/shelf.png"
                    width={1000}
                    height={500}
                    alt="shelf"
                    className="mt-1 w-3/4  lg:w-full"
                />
            </div>
            <div className="flex flex-row lg:flex-col items-center justify-center gap-4 border border-pink-300 w-1/3 lg:w-full">
                <h1
                    className=" text-8xl text-white cursor-pointer"
                    onMouseOver={() => setPopupOpen(true)}
                    onMouseLeave={() => setPopupOpen(false)}
                    onClick={() => setPopupOpen(true)}
                >
                    {elements.length}
                </h1>
                <h2 className="text-left lg:text-center text-2xl lg:h-[100px] w-1/2 break-words lg:break-normal">
                    {title.toUpperCase()}
                </h2>
            </div>
            <div className="lg:bg-blue-900  text-white relative pl-12 rounded-full pr-4 py-1 mt-2 flex items-center justify-center gap-4">
                <Image
                    className="lg:absolute lg:left-0 lg:top-[-4px] cursor-pointer"
                    src="/infoIcon.png"
                    width={40}
                    height={40}
                    alt="info icon"
                />
                <Link href={link} className="lg:hidden cursor-pointer">
                    <Image
                        src="/linkIcon.png"
                        width={40}
                        height={40}
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
