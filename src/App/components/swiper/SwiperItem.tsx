import * as styles from "./styles.module.scss";

interface ISliderItem {
  year: number;
  event: string;
}

export const SwiperItem = ({ year, event }: ISliderItem) => {
  return (
    <div className={styles.item}>
      <h2>{year}</h2>
      <p>{event}</p>
    </div>
  );
};
