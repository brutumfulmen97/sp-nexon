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
            const res = await fetch(`/api/sheets?page=${page}`);
            const json = await res.json();
            setNumPages(json.length);
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
                    {fetchedData.map((item: any, index: number) => {
                        console.log(item);
                        return (
                            <div key={index} className="p-4">
                                {item.map((row: any, idx: number) => {
                                    return (
                                        <div key={idx} className="p-2">
                                            {row}
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
}
