import Image from "next/image";

type SweaterProps = {
    isSorted?: boolean;
    imgBig: string;
    imgSmall: string;
    width?: string;
};

export default function Sweater({
    isSorted,
    imgBig,
    imgSmall,
    width,
}: SweaterProps) {
    const randomValue = Math.round(Math.random());

    return (
        <>
            <Image
                src={!isSorted ? imgBig : imgSmall}
                width={200}
                height={200}
                style={{
                    width: isSorted ? "100%" : width,
                    height: "auto",
                    marginLeft: `${randomValue * 3}px`,
                }}
                className="-mb-1"
                alt="sweater"
            />
        </>
    );
}
