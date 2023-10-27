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
    const [numOfRecords, setNumOfRecords] = useState(0);
    const [totals, setTotals] = useState({
        shelfATotal: 0,
        shelfBTotal: 0,
        shelfCTotal: 0,
        shelfDTotal: 0,
    });
    const [sortDirection, setSortDirection] = useState("asc");

    const fetchDonations = async (page = 1, sortDirection = "asc") => {
        try {
            const res = await fetch(
                `/api/sheets?page=${page}&sortDirection=${sortDirection}`
            );
            const data = await res.json();
            setNumPages(data.numPages);
            setNumOfRecords(data.numOfRecords);
            setTotals(data.totals);
            if (sortDirection === "asc") return data.data.reverse();
            return data.data;
        } catch (err) {
            console.error(err);
        }
    };

    const { isPending, isError, data, error } = useQuery({
        queryKey: ["donations", page, sortDirection],
        queryFn: () => fetchDonations(page, sortDirection),
        refetchInterval: 10000,
    });

    // console.log("a", totals.shelfATotal);
    // console.log("b", totals.shelfBTotal);
    // console.log("c", totals.shelfCTotal);
    // console.log("d", totals.shelfDTotal);

    return (
        <>
            {isPending && <div>Loading...</div>}
            {isError && <div>{error.message}</div>}
            {!isPending && !isError && data && (
                <div className="w-full p-4 flex flex-col items-center justify-between">
                    <h2
                        onClick={() =>
                            setSortDirection((prev: string) => {
                                setPage(1);
                                if (prev === "asc") return "desc";
                                if (prev === "desc") return "asc";
                                else return "asc";
                            })
                        }
                    >
                        {sortDirection}
                    </h2>
                    {data.map((item: any, index: number) => {
                        if (item.length === 0) return null;
                        return (
                            <div key={index} className="p-4 flex gap-2">
                                <p className="text-red-500">{index}</p>
                                <button
                                    className="border-2 p-2 border-green-300"
                                    onClick={async () => {
                                        let rowNumber;
                                        if (sortDirection === "asc") {
                                            rowNumber =
                                                page === 1
                                                    ? numOfRecords - index + 1
                                                    : numOfRecords -
                                                      page * 10 +
                                                      (10 - index) +
                                                      1;
                                        } else {
                                            rowNumber =
                                                page === 1
                                                    ? index + 2
                                                    : page * 10 -
                                                      10 +
                                                      index +
                                                      2;
                                        }
                                        console.log(rowNumber);
                                        try {
                                            const res = await fetch(
                                                "/api/delete",
                                                {
                                                    method: "POST",
                                                    headers: {
                                                        "Content-Type":
                                                            "application/json",
                                                    },
                                                    body: JSON.stringify({
                                                        rowNumber,
                                                    }),
                                                }
                                            );
                                            const data = await res.json();
                                            console.log(data);
                                        } catch (err) {
                                            console.log(err);
                                        }
                                    }}
                                >
                                    X
                                </button>
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
                            <p>number of record: {numOfRecords}</p>
                            <div className="flex gap-2">
                                {Array.from({ length: numPages }).map(
                                    (_, idx) => {
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
