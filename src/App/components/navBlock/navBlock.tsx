import React, { useContext } from "react";
import * as styles from "./styles.module.scss";
import NavButton from "~public/staticFiles/navButton.svg";
import { CurrentInterval } from "@/App/context";
import data from "~public/staticFiles/events.json";

export const NavBlock = () => {
    const blockCount = data.dates.length;
    const { curInt, setCurInt } = useContext(CurrentInterval);

    const handleClick = (mode: string) => {
        mode === "prev" && setCurInt((prev) => prev - 1);
        mode === "next" && setCurInt((prev) => prev + 1);
    };

    return (
        <div className={styles.container}>
            <div className={styles.counter}>
                0{curInt + 1}/0{blockCount}
            </div>
            <div className={styles.buttons}>
                <button
                    disabled={curInt === 0}
                    onClick={() => handleClick("prev")}
                >
                    <NavButton stroke={"#3877EE"} strokeWidth={"2"} />
                </button>
                <button
                    onClick={() => handleClick("next")}
                    disabled={curInt === blockCount - 1}
                >
                    <NavButton stroke={"#3877EE"} strokeWidth={"2"} />
                </button>
            </div>
        </div>
    );
};
