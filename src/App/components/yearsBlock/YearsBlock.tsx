import React, { useContext, useEffect, useRef, useState } from "react";
import * as styles from "./styles.module.scss";
import { gsap } from "gsap";
import data from "~public/staticFiles/events.json";
import { CurrentInterval } from "@/App/context";

interface IYearsBlockProps {
    start: number;
    end: number;
}

export const YearsBlock = () => {
    const { curInt } = useContext(CurrentInterval);
    const start = data.dates[curInt].start;
    const end = data.dates[curInt].end;
    const startRef = useRef<HTMLSpanElement>(null);
    const endRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.to(startRef.current, {
            textContent: start,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
        });

        tl.to(
            endRef.current,
            {
                textContent: end,
                duration: 2,
                ease: "power2.out",
                snap: { textContent: 1 },
            },
            "<",
        );
    }, [start, end]);

    return (
        <div className={styles.container}>
            <span ref={startRef} className={styles.container__start}>
                {start}
            </span>
            <span ref={endRef} className={styles.container__end}>
                {end}
            </span>
        </div>
    );
};
