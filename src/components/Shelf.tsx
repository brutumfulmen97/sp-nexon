import Image from "next/image";
import Link from "next/link";

type ShelfProps = {
    elements: Array<React.ReactNode>;
    title: string;
    link: string;
};

export default function Shelf({ elements, title, link }: ShelfProps) {
    return (
        <div className="flex  w-full   flex-row-reverse lg:flex-col items-center justify-center gap-4 ">
            <div className="w-1/3 max-w-[250px] h-[200px] -mb-6 mr-24  flex flex-col-reverse justify-start">
                {elements.map((el: any) => el)}
            </div>
            <Image
                src="/shelf.png"
                width={1000}
                height={500}
                alt="shelf"
                className="mt-1"
            />
            <h1 className="text-8xl text-white">{elements.length}</h1>
            <h2 className="text-2xl h-[100px]">{title.toUpperCase()}</h2>
            <div className="bg-blue-900 text-white relative pl-12 rounded-full pr-4 py-1 mt-2">
                <Image
                    className="absolute left-0 top-[-4px]"
                    src="/infoIcon.png"
                    width={40}
                    height={40}
                    alt="info icon"
                />
                <Link href={link} className="hidden lg:block">
                    {link}
                </Link>
            </div>
        </div>
    );
}
