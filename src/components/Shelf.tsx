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
        <div className="flex  w-full   flex-row-reverse lg:flex-col items-center justify-center gap-4 ">
            {popupOpen && (
                <div className="z-10 fixed left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-[50vw] min-h-[50vh] bg-[#1c3c51ed]  rounded-lg p-12 grid grid-cols-3 gap-4">
                    <div
                        className="absolute right-2 top-2 text-white cursor-pointer"
                        onClick={() => setPopupOpen(false)}
                    >
                        <XCircle />
                    </div>
                    {parents.map((el: any) => {
                        if (el.parent === id) {
                            return (
                                <div className="w-full" key={id}>
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
            <div className="w-1/3 max-w-[250px] h-[200px] -mb-6 mr-24  flex flex-col-reverse justify-start">
                {elements.map((el: any) => el)}
            </div>
            <Image
                src="/shelf.png"
                width={1000}
                height={500}
                alt="shelf"
                className="mt-1"
            />
            <h1
                className="text-8xl text-white"
                onMouseOver={() => setPopupOpen(true)}
            >
                {elements.length}
            </h1>
            <h2 className="text-2xl h-[100px]">{title.toUpperCase()}</h2>
            <div className="bg-blue-900 text-white relative pl-12 rounded-full pr-4 py-1 mt-2">
                <Image
                    className="absolute left-0 top-[-4px]"
                    src="/infoIcon.png"
                    width={40}
                    height={40}
                    alt="info icon"
                />
                <Link href={link} className="hidden lg:block">
                    {link}
                </Link>
            </div>
        </div>
    );
}
