import Image from "next/image";

type SweaterProps = {
    isSorted: boolean;
    imgBig: string;
    imgSmall: string;
    width: string;
};

export default function Sweater({
    isSorted,
    imgBig,
    imgSmall,
    width,
}: SweaterProps) {
    return (
        <>
            <Image
                src={isSorted ? imgSmall : imgBig}
                width={200}
                height={200}
                style={{
                    width: isSorted ? "100%" : width,
                    height: "auto",
                }}
                alt="sweater"
            />
        </>
    );
}
