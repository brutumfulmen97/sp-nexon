import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="relative mt-12 mx-2">
                <Image
                    src="/coathanger2.png"
                    alt="coat hanger"
                    width={3000}
                    height={1000}
                    style={{ width: "100%", height: "auto" }}
                />
                <div className="absolute top-12 z-10 left-0 w-full bg-green-400 opacity-25 flex px-8">
                    <div className="bg-green-300 w-full text-center">123</div>
                    <div className="bg-green-300 w-full text-center">123</div>
                    <div className="bg-green-300 w-full text-center">123</div>
                    <div className="bg-green-300 w-full text-center">123</div>
                    <div className="bg-green-300 w-full text-center">123</div>
                    <div className="bg-green-300 w-full text-center">123</div>
                    <div className="bg-green-300 w-full text-center">123</div>
                    <div className="bg-green-300 w-full text-center">123</div>
                    <div className="bg-green-300 w-full text-center">123</div>
                    <div className="bg-green-300 w-full text-center">123</div>
                    <div className="bg-green-300 w-full text-center">123</div>
                    <div className="bg-green-300 w-full text-center">123</div>
                </div>
            </div>
        </>
    );
}
