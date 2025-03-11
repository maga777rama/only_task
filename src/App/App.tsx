import * as styles from "@/App/styles.module.scss";
import {
    Circle,
    Lines,
    NavBlock,
    SwiperBlock,
    Title,
    YearsBlock,
} from "@/App/components";
import { CurrentInterval } from "@/App/context";
import { useState } from "react";

export const App = () => {
    const [curInt, setCurInt] = useState<number>(0);

    console.log(__PLATFORM__);
    return (
        <div className={styles.main_wrapper}>
            <Title />
            {__PLATFORM__ === "desktop" && <Lines />}

            <CurrentInterval.Provider value={{ curInt, setCurInt }}>
                {__PLATFORM__ === "desktop" && <Circle />}
                <NavBlock />

                <SwiperBlock />
                <YearsBlock />
            </CurrentInterval.Provider>
        </div>
    );
};
//
// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
//
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
//
// // import required modules
// import { Pagination } from "swiper/modules";
//
// export const App = () => {
//     return (
//         <>
//             <Swiper
//                 pagination={true}
//                 modules={[Pagination]}
//                 className="mySwiper"
//             >
//                 <SwiperSlide>Slide 1</SwiperSlide>
//                 <SwiperSlide>Slide 2</SwiperSlide>
//                 <SwiperSlide>Slide 3</SwiperSlide>
//                 <SwiperSlide>Slide 4</SwiperSlide>
//                 <SwiperSlide>Slide 5</SwiperSlide>
//                 <SwiperSlide>Slide 6</SwiperSlide>
//                 <SwiperSlide>Slide 7</SwiperSlide>
//                 <SwiperSlide>Slide 8</SwiperSlide>
//                 <SwiperSlide>Slide 9</SwiperSlide>
//             </Swiper>
//         </>
//     );
// };
