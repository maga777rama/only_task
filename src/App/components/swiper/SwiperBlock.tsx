import data from "~public/staticFiles/events.json";
import * as styles from "./styles.module.scss";
import { SwiperItem } from "./SwiperItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import NavBut from "~public/staticFiles/navButton.svg";
import { CurrentInterval } from "@/App/context";
import gsap from "gsap";

interface IData {
    id: number;
    year: number;
    event: string;
}

export const SwiperBlock = () => {
    const swiperRef = useRef<any>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const { curInt } = useContext(CurrentInterval);
    const containerRef = useRef<HTMLDivElement>(null);
    const [events, setEvents] = useState(data.dates[curInt].events);

    const handleSwiper = (swiper: any) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    useEffect(() => {
        gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
                setEvents(data.dates[curInt].events);
                gsap.to(containerRef.current, {
                    opacity: 1,
                    duration: 0.3,
                    stagger: 0.1,
                });
            },
        });
    }, [curInt]);

    return (
        <div className={styles.container}>
            <button
                className={`${styles.navButton} ${styles.prev} ${isBeginning ? styles.hidden : ""}`}
                onClick={() => swiperRef.current?.slidePrev()}
            >
                <NavBut stroke={"#3877EE"} strokeWidth={"2"} />
            </button>
            <div ref={containerRef}>
                <Swiper
                    modules={[FreeMode, Navigation]}
                    freeMode={true}
                    slidesPerView={"auto"}
                    spaceBetween={80}
                    grabCursor={true}
                    onSwiper={(swiper: unknown) => (swiperRef.current = swiper)}
                    onSlideChange={handleSwiper}
                    onReachEnd={() => setIsEnd(true)}
                    onReachBeginning={() => setIsBeginning(true)}
                    onFromEdge={() => {
                        setIsBeginning(false);
                        setIsEnd(false);
                    }}
                >
                    {events.map((el: IData) => (
                        <SwiperSlide key={el.id} style={{ width: "auto" }}>
                            <SwiperItem year={el.year} event={el.event} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <button
                className={`${styles.navButton} ${styles.next} ${isEnd ? styles.hidden : ""}`}
                onClick={() => swiperRef.current?.slideNext()}
            >
                <NavBut stroke={"#3877EE"} strokeWidth={"2"} />
            </button>
        </div>
    );
};
