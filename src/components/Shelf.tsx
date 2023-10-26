import { usePopupStore, useSweaterStore } from "@/store/store";
import { XCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ShelfProps = {
    elements: Array<React.ReactNode>;
    id: string;
    title: string;
    link: string;
};

export default function Shelf({ id, elements, title, link }: ShelfProps) {
    const [sweaterPopupOpen, setSweaterPopupOpen] = useState(false);
    const [infoPopupOpen, setInfoPopupOpen] = useState(false);
    const { parents } = useSweaterStore();

    const popupStore = usePopupStore();

    return (
        <div className="flex  w-full flex-row-reverse lg:flex-col items-center justify-between lg:gap-4 ">
            {sweaterPopupOpen && (
                <div className="z-20 fixed left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-[90vw] md:w-[50vw]  min-h-[70vh] md:min-h-[50vh] bg-[#06283ed9]   rounded-lg p-12 grid grid-cols-3 gap-4">
                    <div
                        className="absolute top-2 right-2 text-white cursor-pointer"
                        onClick={() => {
                            setSweaterPopupOpen(false);
                            popupStore.setOnePopupOpen(false);
                        }}
                    >
                        <XCircle className="bg-[#132938] rounded-full" />
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
                                            height: "auto",
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
            {infoPopupOpen && (
                <div className="z-10 fixed left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-[90vw] min-h-[50vh] md:min-h-[30vh] bg-[#06283ed9]   rounded-lg p-12 grid place-content-center gap-4">
                    <div
                        className="absolute top-2 right-2 text-white cursor-pointer"
                        onClick={() => {
                            setInfoPopupOpen(false);
                            popupStore.setOnePopupOpen(false);
                        }}
                    >
                        <XCircle className="bg-[#132938] rounded-full" />
                    </div>
                    <h2 className="text-3xl text-white text-center">
                        {title.toUpperCase()}
                    </h2>
                    <p className="w-full text-center text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio, obcaecati itaque. A illo vero, distinctio
                        voluptatibus temporibus cum, dolores harum ducimus sed
                        architecto debitis. Minus, similique! Sunt doloribus
                        consequatur molestias! Sit eius provident quis suscipit
                        minus. Nostrum ab quam cum unde ducimus, consectetur
                        dicta! Dignissimos suscipit rem, distinctio hic aperiam
                        delectus debitis libero natus ex maiores facilis aliquam
                        expedita recusandae. Repellat possimus labore id
                        delectus veritatis, atque animi error illo similique
                        modi! Quasi aut voluptates numquam doloribus temporibus
                        commodi velit quo, hic eaque et amet porro? Facere
                        commodi blanditiis rerum.
                    </p>
                </div>
            )}
            <div className="flex flex-col justify-end items-end h-[150px] lg:h-[250px] w-2/5 lg:w-full">
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
            <div className="flex flex-col md:flex-row lg:flex-col items-center justify-center gap-4  lg:-mt-4  w-1/3 lg:w-full">
                <h1
                    className="text-6xl lg:text-8xl text-white cursor-pointer"
                    onMouseOver={() => {
                        if (popupStore.onePopupOpen) return;
                        setSweaterPopupOpen(true);
                        popupStore.setOnePopupOpen(true);
                    }}
                    // onMouseLeave={() => setPopupOpen(false)}
                    onClick={() => {
                        if (popupStore.onePopupOpen) return;
                        setSweaterPopupOpen(true);
                        popupStore.setOnePopupOpen(true);
                    }}
                >
                    {elements.length}
                </h1>
                <h2 className="text-center md:text-left lg:text-center text-xl lg:text-2xl lg:h-[100px] w-full md:w-1/2 break-words lg:break-normal">
                    {title.toUpperCase()}
                </h2>
            </div>
            <div className="lg:bg-blue-900  text-white relative pl-4 lg:pl-12 rounded-full pr-4 py-1 mt-2 flex flex-col md:flex-row items-center justify-center gap-4 ">
                <Image
                    className="lg:absolute lg:left-0 lg:top-[-4px] cursor-pointer lg:w-10 lg:h-10 w-[40px]  md:w-[50px] h-[40px]  md:h-[50px]"
                    src="/infoIcon.png"
                    width={100}
                    height={100}
                    alt="info icon"
                    onClick={() => {
                        if (popupStore.onePopupOpen) return;
                        setInfoPopupOpen(true);
                        popupStore.setOnePopupOpen(true);
                    }}
                />
                <Link
                    href={link}
                    target="_blank"
                    className="lg:hidden cursor-pointer w-[40px] md:w-[50px] h-[40px] md:h-[50px]"
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
