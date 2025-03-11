import { useContext, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { CurrentInterval } from "@/App/context";

export const useCircleRotation = (totalPoints: number) => {
    const rotateAngle = useRef<number>(0); // текущий угол поворота (положение) всей окружности
    const circleRef = useRef<HTMLDivElement>(null);
    const pointsRef = useRef<HTMLDivElement[]>([]);
    const { curInt, setCurInt } = useContext(CurrentInterval);

    const rotateCircle = (index: number) => {
        setCurInt(index);

        // текущее положение вершины (против часовой стрелки)
        const targetAngle = -(360 / totalPoints) * index;

        // положение вершины с учетом направления вращения (вправо/влево)
        const targetRotateAngle = -(targetAngle <= -180
            ? targetAngle + 360
            : targetAngle);

        // угол и направление вращения вершины на которой сработал обработчик
        let delta = targetRotateAngle - rotateAngle.current;
        if (delta >= 180) {
            delta -= 360;
        }
        if (delta < -180) {
            delta += 360;
        }

        gsap.to(circleRef.current, { rotate: `+=${delta}`, duration: 1 });

        // обновляем текущее положение окружности
        rotateAngle.current =
            rotateAngle.current + delta <= -180
                ? rotateAngle.current + delta + 360
                : rotateAngle.current + delta;

        // выставляем цифры на окружности в правильное положение после вращения
        pointsRef.current.forEach((el) => {
            gsap.to(el, {
                rotate: `-=${delta}`,
                duration: 1,
            });
        });
    };

    useEffect(() => {
        rotateCircle(curInt);
    }, [curInt]);

    return { curInt, circleRef, pointsRef, rotateCircle };
};
