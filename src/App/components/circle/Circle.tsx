import * as styles from "./styles.module.scss";
import { useCircleRotation } from "./hooks/useCircleRotation";
import { calculatePointCoordinates } from "./hooks/useCalculatePointCoordinates";
import { useContext } from "react";
import { CurrentInterval } from "@/App/context";
import data from "~public/staticFiles/events.json";

export const Circle = () => {
    const { curInt, setCurInt } = useContext(CurrentInterval);
    const totalPoints = data.dates.length;
    const { circleRef, pointsRef } = useCircleRotation(totalPoints);

    return (
        <div className={styles.container} ref={circleRef}>
            {Array.from({ length: totalPoints }).map((_, index) => {
                const { x, y } = calculatePointCoordinates(index, totalPoints);

                return (
                    <>
                        <div
                            key={index}
                            ref={(el) => {
                                if (el) {
                                    pointsRef.current[index] = el;
                                }
                            }}
                            className={`${curInt === index ? styles.point__active : styles.point}`}
                            style={{ transform: `translate(${x}px, ${y}px)` }}
                            onClick={() => setCurInt(index)}
                        >
                            {index + 1}
                            {index === curInt && (
                                <span className={styles.category}>
                                    {data.dates[index].category}
                                </span>
                            )}
                        </div>
                    </>
                );
            })}
        </div>
    );
};
