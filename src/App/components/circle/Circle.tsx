import * as styles from "./styles.module.scss";
import { useCircleRotation } from "./hooks/useCircleRotation";
import { calculatePointCoordinates } from "./hooks/useCalculatePointCoordinates";
import { useContext } from "react";
import { CurrentInterval } from "@/App/context";

export const Circle = () => {
    const { setCurInt } = useContext(CurrentInterval);
    const totalPoints = 6;

    // хендлер вынес в хук
    const { curInt, circleRef, pointsRef } = useCircleRotation(totalPoints);

    return (
        <div className={styles.container} ref={circleRef}>
            {Array.from({ length: totalPoints }).map((_, index) => {
                // логику вычисления координат точки вынес в отдельный хук
                const { x, y } = calculatePointCoordinates(index, totalPoints);

                return (
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
                        {index + 1}
                    </div>
                );
            })}
        </div>
    );
};
