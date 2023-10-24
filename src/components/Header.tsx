import Image from "next/image";

const Header = ({}) => {
    return (
        <header>
            <Image
                src="/headerImage2022.png"
                width={1000}
                height={1000}
                style={{ width: "100%", height: "auto" }}
                priority={true}
                alt="header image"
            />
        </header>
    );
};

export default Header;
