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
            {data.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
    );
}
