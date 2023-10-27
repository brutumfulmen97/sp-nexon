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
    const [page, setPage] = useState(0);
    const [numPages, setNumPages] = useState(0);

    const fetchDonations = async (page = 0) => {
        try {
            const res = await fetch(`/api/sheets?page=1`);
            const json = await res.json();
            console.log(json.length[0]);
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

    console.log(fetchedData);
    console.log(numPages);

    return (
        <>
            {isPending && <div>Loading...</div>}
            {isError && <div>{error.message}</div>}
            {!isPending && !isError && fetchedData && (
                <div>
                    {fetchedData.data.map((item: any, index: number) => {
                        console.log(item);
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
                    <div className="w-full flex flex-col items-center justify-center gap-2">
                        <h2>pagination</h2>
                    </div>
                </div>
            )}
        </>
    );
}
