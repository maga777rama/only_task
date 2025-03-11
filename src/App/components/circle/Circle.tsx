import * as styles from "./styles.module.scss";
import { useCircleRotation } from "./hooks/useCircleRotation";
import { calculatePointCoordinates } from "./hooks/useCalculatePointCoordinates";
import { useContext } from "react";
import { CurrentInterval } from "@/App/context";
import data from "~public/staticFiles/events.json";

export const Circle = () => {
    const { curInt, setCurInt } = useContext(CurrentInterval);
    const totalPoints = 6;
    const { circleRef, pointsRef } = useCircleRotation(totalPoints);
    console.log(data.dates[2].category);
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
                            className={`${styles.point}${curInt === index ? "__active" : ""}`}
                            style={{ transform: `translate(${x}px, ${y}px)` }}
                            onClick={() => setCurInt(index)}
                        >
                            <div> {index + 1}</div>
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
