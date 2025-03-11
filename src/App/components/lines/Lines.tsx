import * as styles from "./styles.module.scss";

export const Lines = () => {
  return (
    <div className={styles.lines}>
      <div className={styles.lines__horizontal}></div>
      <div className={styles.lines__vertical}></div>
    </div>
  );
};
