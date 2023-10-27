"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

type Donation = {
    shelfACount: string;
    shelfBCount: string;
    shelfCCount: string;
    shelfDCount: string;
    ip: string;
    createdAt: string;
};

export default function Statistic() {
    const [page, setPage] = useState(1);
    const [numPages, setNumPages] = useState(0);

    const fetchDonations = async (page = 1) => {
        try {
            const res = await fetch(`/api/sheets?page=${page}`, {
                cache: "no-cache",
                next: {
                    tags: ["donations"],
                },
            });
            const json = await res.json();
            setNumPages(json.numPages);
            return json;
        } catch (err) {
            console.error(err);
        }
    };

    const {
        data: fetchedData,
        isPending,
        isError,
        error,
    } = useQuery({
        queryKey: ["donations", page],
        queryFn: () => fetchDonations(page),
    });

    return (
        <>
            {isPending && <div>Loading...</div>}
            {isError && <div>{error.message}</div>}
            {!isPending && !isError && fetchedData && (
                <div>
                    {fetchedData.data.map((item: any, index: number) => {
                        return (
                            <div key={index} className="p-4 flex gap-2">
                                <p className="text-4xl text-red-500">{index}</p>
                                {item.map((row: any, idx: number) => {
                                    return (
                                        <div
                                            key={idx}
                                            className="p-2 border-border-black"
                                        >
                                            {row}
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                    {numPages > 1 && (
                        <div className="w-full flex flex-col items-center justify-center gap-2">
                            <h2>pagination</h2>
                            <p>you are on page: {page}</p>
                            <div className="flex gap-2">
                                {Array.from({ length: numPages }).map(
                                    (_, idx) => {
                                        console.log(idx);
                                        return (
                                            <button
                                                key={idx}
                                                onClick={() => setPage(idx + 1)}
                                                className="border border-black p-2 bg-green-500"
                                            >
                                                {idx + 1}
                                            </button>
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}
