"use client";

import { useState, useEffect } from "react";

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
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchDonations = async (page = 1) => {
            setIsLoading(true);
            try {
                const res = await fetch(`/api/sheets?page=${page}`);
                const data = await res.json();
                setNumPages(data.numPages);
                setData(data.data);
                setIsLoading(false);
            } catch (err) {
                console.error(err);
            }
        };

        fetchDonations(page);
    }, [page]);

    return (
        <>
            {isLoading && <div>Loading...</div>}
            {!isLoading && data && (
                <div className="w-full p-4 flex flex-col items-center justify-between">
                    {data.map((item: any, index: number) => {
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
                        <div className="w-full flex flex-col items-center justify-center gap-2 mt-8">
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
