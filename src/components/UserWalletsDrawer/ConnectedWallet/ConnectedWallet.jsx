import React from "react";
import {
  useAccount,
  useDisconnect,
} from "wagmi";
import { Typography } from "antd";
import {
  CopyOutlined,
  CheckCircleOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";

export default function ConnectedWallet() {
  const { t } = useTranslation();
  const { address, connector } = useAccount();
  const { disconnect } = useDisconnect();
  const { Paragraph } = Typography;

  return (
    <div className={styles.drawer_isConnectedHeader}>
      <div className={styles.drawer_userWalletInfo}>
        <svg>{connector?.options?.use}</svg>
        <Paragraph
          className={styles.drawer_userWalletAddress}
          copyable={{
            icon: [
              <CopyOutlined key="copy-icon" />,
              <CheckCircleOutlined key="copied-icon" />,
            ],
            text: address,
            tooltips: false,
          }}>
          {address.substring(0, 6) +
            "..." +
            address.substring(address?.length - 4)}
        </Paragraph>
      </div>
      <div
        className={styles.drawer_WalletDisconnect}
        onClick={() => disconnect()}>
        <LogoutOutlined />
        {t("buttons.Disconnect")}
      </div>
    </div>
  );
}