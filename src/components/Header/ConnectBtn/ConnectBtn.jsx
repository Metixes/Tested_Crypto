import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";

export default function ConnectBtn({showDrawer}) {
  const { t } = useTranslation();

  return (
    <a onClick={showDrawer} className={styles.connectBtn}>
      {t("buttons.Connect")}
    </a>
  );
}
