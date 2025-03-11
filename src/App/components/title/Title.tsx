import React from "react";
import * as styles from "./styles.module.scss";
import AccentLine from "~public/staticFiles/accentLine.svg";
export const Title = () => {
    return (
        <div className={styles.container}>
            {__PLATFORM__ === "desktop" && <AccentLine />}
            <span className={styles.title}>Исторические даты</span>
        </div>
    );
};
