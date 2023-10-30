import Statistic from "@/components/Statistics";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "statistika",
};

export default function Statistics() {
    // TODO: ulepsati sve ovo
    return (
        <div>
            <h1 className="font-4xl font-bold text-center">STATISTICS</h1>
            <Statistic />
        </div>
    );
}
