import { useTranslation } from "react-i18next";
import { useStore } from "../../../store/store";
import lotteryLogo from "../../../assets/icons/lotteryLogo.svg";
import styles from "./styles.module.scss";

export default function Lottery() {
  const { t } = useTranslation();
  const showDrawer = useStore(state => state.showDrawer)

  return (
    <div className={styles.lottery}>
      <img
        className={styles.lottery_logo}
        src={lotteryLogo}
        alt="Lottery Jackpot"
      />
      <h1 className={styles.lottery_title}>Exclusive lottery</h1>
      <p className={styles.lottery_jackpot}>$100,000K</p>
      <div className={styles.lottery_btns}>
        <span className={styles.lottery_btns_btnConnect}
          onClick={showDrawer}
        >
          {t("buttons.Connect")}
        </span>
        <a className={styles.lottery_btns_btnWatch} href="">
          {t("buttons.WatchVideo")}
        </a>
      </div>
    </div>
  );
}
