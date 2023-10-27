"use client";
import { useState, useEffect } from "react";
import {
    useQuery,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
import Statistic from "@/components/Statistics";

const queryClient = new QueryClient();

export default function Statistics() {
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch("/api/sheets");
    //         const json = await res.json();
    //         console.log(json);
    //         setData(json);
    //     };

    //     fetchData();
    // }, []);

    return (
        <div>
            <h1>Statistics</h1>
            <QueryClientProvider client={queryClient}>
                <Statistic />
            </QueryClientProvider>
        </div>
    );
}
