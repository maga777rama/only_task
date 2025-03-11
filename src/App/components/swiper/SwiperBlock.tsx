import data from "~public/staticFiles/events.json";
import * as styles from "./styles.module.scss";
import { SwiperItem } from "./SwiperItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useContext, useEffect, useRef, useState } from "react";
import NavBut from "~public/staticFiles/navButton.svg";
import { CurrentInterval } from "@/App/context";
import { useFadeAnimation } from "@/App/components/swiper/hooks/useFadeAnimation";

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
    const events = data.dates[curInt].events;
    const containerRef = useFadeAnimation(curInt);

    const handleSwiper = (swiper: any) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (
        <div className={styles.container}>
            {__PLATFORM__ === "desktop" && (
                <button
                    className={`${styles.navButton} ${styles.prev} ${isBeginning ? styles.hidden : ""}`}
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    <NavBut stroke={"#3877EE"} strokeWidth={"2"} />
                </button>
            )}
            <div ref={containerRef}>
                <Swiper
                    direction={"horizontal"}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Navigation, Pagination]}
                    freeMode={true}
                    slidesPerView={"auto"}
                    spaceBetween={__PLATFORM__ === "mobile" ? 25 : 80}
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
            {__PLATFORM__ === "desktop" && (
                <button
                    className={`${styles.navButton} ${styles.next} ${isEnd ? styles.hidden : ""}`}
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    <NavBut stroke={"#3877EE"} strokeWidth={"2"} />
                </button>
            )}
        </div>
    );
};
