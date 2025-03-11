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
    console.log(curInt);
    return (
        <div className={styles.main_wrapper}>
            <Title />
            <Lines />
            <CurrentInterval.Provider value={{ curInt, setCurInt }}>
                <Circle />
                <NavBlock />
                <SwiperBlock />
                <YearsBlock />
            </CurrentInterval.Provider>
        </div>
    );
};
