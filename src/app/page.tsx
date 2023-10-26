"use client";

import { useEffect, useRef, useState } from "react";
import { DndContext } from "@dnd-kit/core";
import Image from "next/image";
import Draggable from "@/components/Draggable";
import Droppable from "@/components/Droppable";
import Sweater from "@/components/Sweater";
import Shelf from "@/components/Shelf";
import { useSweaterStore, initialParents } from "@/store/store";

const links = [
    "www.szentistvanzene.hu",
    "www.autizmus.hu",
    "www.elelmiszerbank.hu",
    "www.lampas92.hu",
];

const titles = [
    "Szent István Zenei Alapítvány",
    "Autizmus Alapítvány",
    "Élelmiszerbank egyesület",
    "Lámpás 92 Alapítvány",
];

type OverType = {
    current: any;
};

type ShelfType = {
    id: string;
    elements: React.ReactNode[];
};

export const initialShelves: ShelfType[] = [
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

export default function Home() {
    const { parents, setParents } = useSweaterStore();
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

        const newParents = parents.map((item) => {
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

        setParents(newParents);
    }

    const draggableContent = [
        <Draggable id="sweater1" key="sweater1">
            <Sweater
                isSorted={parents[0]?.isSorted}
                imgSmall={"/sweater-white.png"}
                imgBig={"/sweater1.png"}
                width={"100%"}
            />
        </Draggable>,
        <Draggable id="sweater2" key="sweater2">
            <Sweater
                isSorted={parents[1]?.isSorted}
                imgSmall={"/sweater-darkgreen.png"}
                imgBig={"/sweater2.png"}
                width={"70%"}
            />
        </Draggable>,
        <Draggable id="sweater3" key="sweater3">
            <Sweater
                isSorted={parents[2]?.isSorted}
                imgSmall={"/sweater-lightblue.png"}
                imgBig={"/sweater3.png"}
                width={"100%"}
            />
        </Draggable>,
        <Draggable id="sweater4" key="sweater4">
            <Sweater
                isSorted={parents[3]?.isSorted}
                imgSmall={"/sweater-red.png"}
                imgBig={"/sweater4.png"}
                width={"95%"}
            />
        </Draggable>,
        <Draggable id="sweater5" key="sweater5">
            <Sweater
                isSorted={parents[4]?.isSorted}
                imgSmall={"/sweater-green2.png"}
                imgBig={"/sweater5.png"}
                width={"95%"}
            />
        </Draggable>,
        <Draggable id="sweater6" key="sweater6">
            <Sweater
                isSorted={parents[5]?.isSorted}
                imgSmall={"/sweater-white.png"}
                imgBig={"/sweater6.png"}
                width={"95%"}
            />
        </Draggable>,
        <Draggable id="sweater7" key="sweater7">
            <Sweater
                isSorted={parents[6]?.isSorted}
                imgSmall={"/sweater-beige.png"}
                imgBig={"/sweater7.png"}
                width={"85%"}
            />
        </Draggable>,
        <Draggable id="sweater8" key="sweater8">
            <Sweater
                isSorted={parents[7]?.isSorted}
                imgSmall={"/sweater-lightgreen.png"}
                imgBig={"/sweater8.png"}
                width={"90%"}
            />
        </Draggable>,
        <Draggable id="sweater9" key="sweater9">
            <Sweater
                isSorted={parents[8]?.isSorted}
                imgSmall={"/sweater-maroon.png"}
                imgBig={"/sweater9.png"}
                width={"70%"}
            />
        </Draggable>,
        <Draggable id="sweater10" key="sweater10">
            <Sweater
                isSorted={parents[9]?.isSorted}
                imgSmall={"/sweater-green2.png"}
                imgBig={"/sweater10.png"}
                width={"85%"}
            />
        </Draggable>,
        <Draggable id="sweater11" key="sweater11">
            <Sweater
                isSorted={parents[10]?.isSorted}
                imgSmall={"/sweater-blue.png"}
                imgBig={"/sweater11.png"}
                width={"85%"}
            />
        </Draggable>,
        <Draggable id="sweater12" key="sweater12">
            <Sweater
                isSorted={parents[11]?.isSorted}
                imgSmall={"/sweater-lightblue.png"}
                imgBig={"/sweater12.png"}
                width={"100%"}
            />
        </Draggable>,
    ];

    const allSweatersSorted = parents.every((parent) => parent.parent !== null);
    const oneSweaterSorted = parents.some((parent) => parent.parent !== null);

    useEffect(() => {
        const isResetting = parents.every((parent) => parent.parent === null);
        if (isResetting) {
            setShelves(initialShelves);
            return;
        }

        const id = idRef.current;
        const element = draggableContent.find((el) => el.props.id === id);
        if (!element) return;

        setShelves((prev) =>
            prev.map((shelf) => {
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
            })
        );
    }, [parents]);

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
                    {allSweatersSorted && (
                        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-20">
                            <button className="bg-[#0d4067] hover:bg-[#2f4b61] cursor-pointer text-white px-4 py-1 sm:px-6 sm:py-2 text-l sm:text-2xl md:text-4xl font-bold rounded-full border-2 sm:border-4 shadow ">
                                ELKÜLDÖM
                            </button>
                        </div>
                    )}
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
                    {["A", "B", "C", "D"].map((el, idx) => (
                        <Droppable id={el} className="w-full" key={el}>
                            <Shelf
                                id={el}
                                elements={shelves[idx].elements}
                                title={titles[idx]}
                                link={links[idx]}
                            />
                        </Droppable>
                    ))}
                </div>

                <div className="w-full flex justify-center mt-8 mb-24">
                    <button
                        className="py-2 px-8 bg-red-600 hover:bg-red-500 text-white rounded-full border-4 border-white"
                        style={{
                            visibility: oneSweaterSorted ? "visible" : "hidden",
                        }}
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
