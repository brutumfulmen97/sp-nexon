"use client";

import Image from "next/image";
import { useWindowSize } from "@uidotdev/usehooks";

const Header = ({}) => {
    const { width: windowWidth } = useWindowSize();
    return (
        <header className="relative">
            <Image
                src={
                    windowWidth! > 768
                        ? "/headerImage2022.png"
                        : "/headerphone.png"
                }
                width={1000}
                height={1000}
                style={{ width: "100%", height: "auto" }}
                priority={true}
                alt="header image"
            />
            {windowWidth! < 768 ? (
                <p className="text-white absolute bottom-4 text-center mx-2 md:mx-12 text-[8px] mobile:text-[14px] sm:text-[16px]">
                    A fogason lévő pulcsik mindegyike 250 ezer forintot
                    jelképez. Kérjük, húzza a pulcsikat egyesével az
                    alapítványok polcaira aszerint, ahogyan Ön elosztaná az
                    adományt közöttük! A kiválasztott arányokat végül
                    egyesítjük, s ennek megfelelően osztjuk szét a felajánlott
                    összeget a négy szervezet között. A pulcsik elhelyezése után
                    az „Elküldöm” gombra kattintva véglegesítse döntését.
                </p>
            ) : null}
        </header>
    );
};

export default Header;
