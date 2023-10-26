"use client";
import { useState, useEffect } from "react";

export default function Statistics() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/api/sheets");
            const json = await res.json();
            console.log(json);
            setData(json);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Statistics</h1>
            {data.map((item: any, index) => {
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
    );
}
