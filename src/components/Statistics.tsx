"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { PieChart, pieArcClasses } from "@mui/x-charts/PieChart";

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
    const [latestRecord, setLatestRecord] = useState(["", "", "", "", ""]);
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
            setLatestRecord(data.latestRecord);
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

    return (
        <>
            {isPending && <div>Loading...</div>}
            {isError && <div>{error.message}</div>}
            {!isPending && !isError && data && (
                <div className="w-full p-4 flex flex-col items-center justify-between">
                    {latestRecord && (
                        <div>
                            <h2 className="text-blue-700">LATEST DONATION:</h2>
                            <hr />
                            <p>A: {latestRecord[0]}</p>
                            <hr />
                            <p>B: {latestRecord[1]}</p>
                            <hr />
                            <p>C: {latestRecord[2]}</p>
                            <hr />
                            <p>D: {latestRecord[3]}</p>
                            <hr />
                            <p>ip: {latestRecord[4]}</p>
                            <hr />
                            <p>createdAt: {latestRecord[5]}</p>
                            <hr />
                        </div>
                    )}
                    <h1>
                        NUMBER OF RECORD:{" "}
                        <span className="text-red-600">{numOfRecords}</span>
                    </h1>
                    <hr />
                    <div className="flex gap-2">
                        <p className="text-blue-700">TOTALS:</p>
                        <p>A: {totals.shelfATotal}</p>
                        <p>B: {totals.shelfBTotal}</p>
                        <p>C: {totals.shelfCTotal}</p>
                        <p>D: {totals.shelfDTotal}</p>
                    </div>
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
                    <div className="flex border border-black gap-2">
                        <p className="border-r-2 border-black">A:</p>
                        <p className="border-r-2 border-black">B:</p>
                        <p className="border-r-2 border-black">C:</p>
                        <p className="border-r-2 border-black">D:</p>
                        <p className="border-r-2 border-black">IP:</p>
                        <p className="border-r-2 border-black">CREATED AT:</p>
                    </div>

                    {data.map((item: any, index: number) => {
                        if (item.length === 0) return null;
                        return (
                            <div key={index} className="p-4 flex">
                                <button
                                    className="border-2 p-2 border-red-600"
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
                                            className="p-2 border border-black"
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
                    <div className="mt-4">
                        <PieChart
                            series={[
                                {
                                    data: [
                                        {
                                            id: 0,
                                            value: totals.shelfATotal,
                                            label: `A: ${(
                                                (totals.shelfATotal /
                                                    (numOfRecords * 12)) *
                                                100
                                            ).toFixed(2)}%`,
                                        },
                                        {
                                            id: 1,
                                            value: totals.shelfBTotal,
                                            label: `B: ${(
                                                (totals.shelfBTotal /
                                                    (numOfRecords * 12)) *
                                                100
                                            ).toFixed(2)}%`,
                                        },
                                        {
                                            id: 2,
                                            value: totals.shelfCTotal,
                                            label: `C: ${(
                                                (totals.shelfCTotal /
                                                    (numOfRecords * 12)) *
                                                100
                                            ).toFixed(2)}%`,
                                        },
                                        {
                                            id: 3,
                                            value: totals.shelfDTotal,
                                            label: `D: ${(
                                                (totals.shelfDTotal /
                                                    (numOfRecords * 12)) *
                                                100
                                            ).toFixed(2)}%`,
                                        },
                                    ],
                                    highlightScope: {
                                        faded: "global",
                                        highlighted: "item",
                                    },
                                    faded: {
                                        innerRadius: 30,
                                        additionalRadius: -30,
                                    },
                                },
                            ]}
                            width={400}
                            height={200}
                            sx={{
                                [`& .${pieArcClasses.faded}`]: {
                                    fill: "gray",
                                },
                            }}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
