"use client";

import { useEffect, useRef, useState } from "react";
import { DndContext } from "@dnd-kit/core";
import Image from "next/image";
import Link from "next/link";
import Draggable from "@/components/Draggable";
import Dropabble from "@/components/Droppable";

const initialParents = [
    {
        parent: null,
        id: "sweater1",
        isSorted: false,
    },
    {
        parent: null,
        id: "sweater2",
        isSorted: false,
    },
    {
        parent: null,
        id: "sweater3",
        isSorted: false,
    },
    {
        parent: null,
        id: "sweater4",
        isSorted: false,
    },
    {
        parent: null,
        id: "sweater5",
        isSorted: false,
    },
    {
        parent: null,
        id: "sweater6",
        isSorted: false,
    },
    {
        parent: null,
        id: "sweater7",
        isSorted: false,
    },
    {
        parent: null,
        id: "sweater8",
        isSorted: false,
    },
    {
        parent: null,
        id: "sweater9",
        isSorted: false,
    },
    {
        parent: null,
        id: "sweater10",
        isSorted: false,
    },
    {
        parent: null,
        id: "sweater11",
        isSorted: false,
    },
    {
        parent: null,
        id: "sweater12",
        isSorted: false,
    },
];

const initialShelves = [
    {
        id: "A",
        elements: [],
    },
    {
        id: "B",
        elements: [],
    },
    {
        id: "C",
        elements: [],
    },
    {
        id: "D",
        elements: [],
    },
];

type OverType = {
    current: any;
};

export default function Home() {
    const [parents, setParents] = useState(initialParents);
    const [shelves, setShelves] = useState(initialShelves);
    const overRef: OverType = useRef();
    const idRef = useRef();

    function handleDragEnd(event: any) {
        const {
            over,
            active: { id },
        } = event;

        overRef.current = over;
        idRef.current = id;

        setParents((prev) => {
            return prev.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        parent: over ? over.id : null,
                        isSorted: over ? true : false,
                    };
                } else {
                    return item;
                }
            });
        });
    }

    const draggableContent = [
        <Draggable id="sweater1" key="sweater1">
            <Image
                src={
                    parents[0].isSorted ? "/sweater-white.png" : "/sweater1.png"
                }
                width={200}
                height={200}
                style={{
                    width: "100%",
                    height: "auto",
                }}
                alt="sweater"
            />
        </Draggable>,
        <Draggable id="sweater2" key="sweater2">
            <Image
                src={
                    parents[1].isSorted
                        ? "/sweater-darkgreen.png"
                        : "/sweater2.png"
                }
                width={200}
                height={200}
                style={{
                    width: parents[1].isSorted ? "100%" : "70%",
                    height: "auto",
                }}
                alt="sweater"
            />
        </Draggable>,
        <Draggable id="sweater3" key="sweater3">
            <Image
                src={
                    parents[2].isSorted
                        ? "/sweater-lightblue.png"
                        : "/sweater3.png"
                }
                width={1000}
                height={1000}
                style={{
                    width: "100%",
                    height: "auto",
                }}
                alt="sweater"
            />
        </Draggable>,
        <Draggable id="sweater4" key="sweater4">
            {" "}
            <Image
                src={parents[3].isSorted ? "/sweater-red.png" : "/sweater4.png"}
                width={1000}
                height={1000}
                style={{
                    width: parents[3].isSorted ? "100%" : "95%",
                    height: "auto",
                }}
                alt="sweater"
            />
        </Draggable>,
        <Draggable id="sweater5" key="sweater5">
            {" "}
            <Image
                src={
                    parents[4].isSorted
                        ? "/sweater-green2.png"
                        : "/sweater5.png"
                }
                width={1000}
                height={1000}
                style={{
                    width: parents[4].isSorted ? "100%" : "95%",
                    height: "auto",
                }}
                alt="sweater"
            />
        </Draggable>,
        <Draggable id="sweater6" key="sweater6">
            {" "}
            <Image
                src={
                    parents[5].isSorted ? "/sweater-white.png" : "/sweater6.png"
                }
                width={1000}
                height={1000}
                style={{
                    width: parents[5].isSorted ? "100%" : "95%",
                    height: "auto",
                }}
                alt="sweater"
            />
        </Draggable>,
        <Draggable id="sweater7" key="sweater7">
            {" "}
            <Image
                src={
                    parents[6].isSorted ? "/sweater-beige.png" : "/sweater7.png"
                }
                width={1000}
                height={1000}
                style={{
                    width: parents[6].isSorted ? "100%" : "85%",
                    height: "auto",
                }}
                alt="sweater"
            />
        </Draggable>,
        <Draggable id="sweater8" key="sweater8">
            <Image
                src={
                    parents[7].isSorted
                        ? "/sweater-lightgreen.png"
                        : "/sweater8.png"
                }
                width={1000}
                height={1000}
                style={{
                    width: parents[7].isSorted ? "100%" : "90%",
                    height: "auto",
                }}
                alt="sweater"
            />
        </Draggable>,
        <Draggable id="sweater9" key="sweater9">
            {" "}
            <Image
                src={
                    parents[8].isSorted
                        ? "/sweater-maroon.png"
                        : "/sweater9.png"
                }
                width={1000}
                height={1000}
                style={{
                    width: parents[8].isSorted ? "100%" : "70%",
                    height: "auto",
                }}
                alt="sweater"
            />
        </Draggable>,
        <Draggable id="sweater10" key="sweater10">
            {" "}
            <Image
                src={
                    parents[9].isSorted
                        ? "/sweater-green2.png"
                        : "/sweater10.png"
                }
                width={1000}
                height={1000}
                style={{
                    width: parents[9].isSorted ? "100%" : "85%",
                    height: "auto",
                }}
                alt="sweater"
            />
        </Draggable>,
        <Draggable id="sweater11" key="sweater11">
            {" "}
            <Image
                src={
                    parents[10].isSorted
                        ? "/sweater-blue.png"
                        : "/sweater11.png"
                }
                width={1000}
                height={1000}
                style={{
                    width: parents[10].isSorted ? "100%" : "85%",
                    height: "auto",
                }}
                alt="sweater"
            />
        </Draggable>,
        <Draggable id="sweater12" key="sweater12">
            {" "}
            <Image
                src={
                    parents[11].isSorted
                        ? "/sweater-lightblue.png"
                        : "/sweater12.png"
                }
                width={1000}
                height={1000}
                style={{
                    width: "100%",
                    height: "auto",
                }}
                alt="sweater"
            />
        </Draggable>,
    ];

    useEffect(() => {
        const id = idRef.current;
        const element = draggableContent.find((el) => el.props.id === id);
        if (!element) return;

        setShelves((prev: any) => {
            return prev.map((shelf: any) => {
                if (!overRef.current) {
                    return {
                        ...shelf,
                        elements: shelf.elements.filter(
                            (el: any) => el.props.id !== id
                        ),
                    };
                } else if (shelf.id === overRef.current.id) {
                    let isAlreadyIn = false;
                    shelf.elements.forEach((el: any) => {
                        if (el.props.id === id) isAlreadyIn = true;
                    });
                    if (!isAlreadyIn) {
                        return {
                            ...shelf,
                            elements: [...shelf.elements, element],
                        };
                    } else {
                        return {
                            ...shelf,
                        };
                    }
                } else {
                    return {
                        ...shelf,
                        elements: shelf.elements.filter(
                            (el: any) => el.props.id !== id
                        ),
                    };
                }
            });
        });
    }, [parents]);

    console.log(shelves);

    return (
        <>
            <DndContext onDragEnd={handleDragEnd}>
                <div className="relative mt-12 px-[2%] mb-2">
                    <Image
                        src="/coathanger2.png"
                        alt="coat hanger"
                        width={3000}
                        height={1000}
                        style={{ width: "100%", height: "auto" }}
                    />
                    <div className="absolute h-[65%] top-[6%] z-10 left-0 w-full pl-[1%]">
                        <div className=" w-[16%] h-[100%] text-center  inline-block ">
                            {parents[0].parent === null
                                ? draggableContent[0]
                                : null}
                        </div>
                        <div className=" w-[17%] h-[100%] text-center -ml-[8%]  inline-block">
                            {parents[1].parent === null
                                ? draggableContent[1]
                                : null}
                        </div>
                        <div className=" w-[17%] h-[100%] text-center -ml-[11%] inline-block">
                            {parents[2].parent === null
                                ? draggableContent[2]
                                : null}
                        </div>
                        <div className=" w-[17%] h-[100%] text-center -ml-[9%] pt-[1%]  inline-block">
                            {parents[3].parent === null
                                ? draggableContent[3]
                                : null}
                        </div>
                        <div className=" w-[17%] h-[100%] text-center -ml-[9.7%] pt-[1%]  inline-block">
                            {parents[4].parent === null
                                ? draggableContent[4]
                                : null}
                        </div>
                        <div className=" w-[17%] h-[100%] text-center -ml-[8.5%]  inline-block">
                            {parents[5].parent === null
                                ? draggableContent[5]
                                : null}
                        </div>
                        <div className=" w-[17%] h-[100%] text-center -ml-[9%] pt-[1.5%]  inline-block">
                            {parents[6].parent === null
                                ? draggableContent[6]
                                : null}
                        </div>
                        <div className=" w-[17%] h-[100%] text-center -ml-[10%]   inline-block">
                            {parents[7].parent === null
                                ? draggableContent[7]
                                : null}
                        </div>
                        <div className=" w-[17%] h-[100%] text-center -ml-[7.5%] inline-block">
                            {parents[8].parent === null
                                ? draggableContent[8]
                                : null}
                        </div>
                        <div className=" w-[17%] h-[100%] text-center -ml-[11%] pt-[1.5%]   inline-block">
                            {parents[9].parent === null
                                ? draggableContent[9]
                                : null}
                        </div>
                        <div className=" w-[17%] h-[100%] text-center -ml-[9.5%] pt-[1.5%]   inline-block">
                            {parents[10].parent === null
                                ? draggableContent[10]
                                : null}
                        </div>
                        <div className=" w-[15%] h-[100%] text-center -ml-[8.8%] pt-[1.5%]  inline-block">
                            {parents[11].parent === null
                                ? draggableContent[11]
                                : null}
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col lg:flex-row justify-center items-start md:text-center ">
                    <Dropabble id="A" className="w-full">
                        <div className="flex  w-full   flex-row-reverse lg:flex-col items-center justify-center gap-4 ">
                            <div className="w-1/3 max-w-[250px] h-[200px] -mb-6 mr-24  flex flex-col-reverse justify-start">
                                {/* {parents.map((parent, idx) => {
                                        return parent.parent === "A"
                                            ? draggableContent[idx]
                                            : null;
                                    })} */}
                                {shelves[0].elements.map((el: any) => el)}
                            </div>
                            <Image
                                src="/shelf.png"
                                width={1000}
                                height={500}
                                alt="polica"
                            />
                            <h1 className="text-8xl text-white">
                                {shelves[0].elements.length}
                            </h1>
                            <h2 className="text-2xl h-[100px]">
                                SZENT ISTVÁN KIRÁLY ZENEI ALAPÍTVÁNY
                            </h2>
                            <div className="bg-blue-900 text-white relative pl-12 rounded-full pr-4 py-1 mt-2">
                                <Image
                                    className="absolute left-0 top-[-4px]"
                                    src="/infoIcon.png"
                                    width={40}
                                    height={40}
                                    alt="info icon"
                                />
                                <Link href="#" className="hidden lg:block">
                                    www.szentistvanzene.hu
                                </Link>
                            </div>
                        </div>
                    </Dropabble>

                    <Dropabble id="B" className="w-full">
                        <div className="flex w-full    flex-row-reverse lg:flex-col items-center justify-center gap-4 ">
                            <div className="w-1/3 max-w-[250px] h-[200px] -mb-6 mr-24  flex flex-col-reverse justify-start">
                                {/* {parents.map((parent, idx) => {
                                    return parent.parent === "B"
                                        ? draggableContent[idx]
                                        : null;
                                })} */}
                                {shelves[1].elements.map((el: any) => el)}
                            </div>
                            <Image
                                src="/shelf.png"
                                width={500}
                                height={500}
                                alt="polica"
                            />
                            <h1 className="text-8xl text-white">
                                {shelves[1].elements.length}
                            </h1>
                            <h2 className="text-2xl h-[100px]">
                                AUTIZMUS ALAPÍTVÁNY
                            </h2>
                            <div className="bg-blue-900 text-white relative pl-12 rounded-full pr-4 py-1 mt-2">
                                <Image
                                    className="absolute left-0 top-[-4px]"
                                    src="/infoIcon.png"
                                    width={40}
                                    height={40}
                                    alt="info icon"
                                />
                                <Link href="#" className="hidden lg:block">
                                    www.autizmus.hu
                                </Link>
                            </div>
                        </div>
                    </Dropabble>

                    <Dropabble id="C" className="w-full">
                        <div className="flex w-full   flex-row-reverse lg:flex-col items-center justify-center gap-4 ">
                            <div className="w-1/3 max-w-[250px] h-[200px] -mb-6 mr-24  flex flex-col-reverse justify-start">
                                {/* {parents.map((parent, idx) => {
                                    return parent.parent === "C"
                                        ? draggableContent[idx]
                                        : null;
                                })} */}
                                {shelves[2].elements.map((el: any) => el)}
                            </div>
                            <Image
                                src="/shelf.png"
                                width={1000}
                                height={500}
                                alt="polica"
                            />
                            <h1 className="text-8xl text-white">
                                {shelves[2].elements.length}
                            </h1>
                            <h2 className="text-2xl h-[100px]">
                                ÉLELMISZERBANK EGYESÜLETY
                            </h2>
                            <div className="bg-blue-900 text-white relative pl-12 rounded-full pr-4 py-1 mt-2">
                                <Image
                                    className="absolute left-0 top-[-4px]"
                                    src="/infoIcon.png"
                                    width={40}
                                    height={40}
                                    alt="info icon"
                                />
                                <Link href="#" className="hidden lg:block">
                                    www.elelmiszerbank.hu
                                </Link>
                            </div>
                        </div>
                    </Dropabble>

                    <Dropabble id="D" className="w-full">
                        <div className="flex w-full    flex-row-reverse lg:flex-col items-center justify-center gap-4">
                            <div className="w-1/3 max-w-[250px] h-[200px] -mb-6 mr-24  flex flex-col-reverse justify-start">
                                {/* {parents.map((parent, idx) => {
                                    return parent.parent === "D"
                                        ? draggableContent[idx]
                                        : null;
                                })} */}
                                {shelves[3].elements.map((el: any) => el)}
                            </div>
                            <Image
                                src="/shelf.png"
                                width={1000}
                                height={500}
                                alt="polica"
                            />
                            <h1 className="text-8xl text-white">
                                {shelves[3].elements.length}
                            </h1>
                            <h2 className="text-2xl h-[100px]">
                                LÁMPÁS ’92 ALAPÍTVÁNY
                            </h2>
                            <div className="bg-blue-900 text-white relative pl-12 rounded-full pr-4 py-1 mt-2">
                                <Image
                                    className="absolute left-0 top-[-4px]"
                                    src="/infoIcon.png"
                                    width={40}
                                    height={40}
                                    alt="info icon"
                                />
                                <Link href="#" className="hidden lg:block">
                                    www.lampas92.hu
                                </Link>
                            </div>
                        </div>
                    </Dropabble>
                </div>

                <div className="w-full flex justify-center mt-8 mb-24">
                    <button
                        className="py-2 px-8 bg-red-600 hover:bg-red-500 text-white rounded-full border-4 border-white"
                        onClick={() => {
                            setParents(initialParents);
                        }}
                    >
                        VISSZAÁLLÍTÁS
                    </button>
                </div>
            </DndContext>
        </>
    );
}
