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
                {__PLATFORM__ === "mobile" && (
                    <div className={styles.hrLine}></div>
                )}
                <SwiperBlock />
                <YearsBlock />
            </CurrentInterval.Provider>
        </div>
    );
};
