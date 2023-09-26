import ConnectBtn from '../../Header/ConnectBtn/ConnectBtn'
import { useEffect, useState } from "react";
import { Drawer, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

import {
  useAccount,
  useBalance,
  useConnect,
} from "wagmi";
import { useStore } from '../../../store/store';
import ConnectedWallet from '../ConnectedWallet/ConnectedWallet';

export default function UserDrawer() {
  const openDrawer = useStore(state => state.openDrawer)
  const showDrawer = useStore(state => state.showDrawer)
  const closeDrawer = useStore(state => state.closeDrawer)
  const { t } = useTranslation();
  const { connect, connectAsync, connectors } = useConnect();
  const { address, connector, isConnected } = useAccount();
  const { data } = useBalance({
    address: address,
  });

  const handelWalletConnect = (connector) => {
    connectAsync({ connector });
    closeDrawer();
  };

  return (
    <>
      {isConnected ? (
        <span className={styles.userWalletButton}
        onClick={() => showDrawer()}
      >
        <UserOutlined className={styles.userWalletButton_icon}/>
        {address.substring(0, 6) +
                "..." +
        address.substring(address?.length - 4)}
      </span>
      ) : (
        <ConnectBtn 
          showDrawer={showDrawer} 
        />
      )}
      <Drawer
        className={styles.drawer}
        title={
          isConnected ? 
          <ConnectedWallet />
          :
          t("drawer.title")
        }
        onClose={closeDrawer}
        placement="right"
        open={openDrawer}
        >
          {isConnected && (
            <div className={styles.drawer_userBalance}>
              Balance: {data?.formatted} {data?.symbol}
            </div>
          )}
          {!isConnected && (
            <ul className={styles.drawer_wallets}>
              {connectors.map((connector) => (
                <button
                  className={styles.drawer_walletLinks}
                  disabled={!connector.ready}
                  key={crypto.randomUUID()}
                  onClick={() => handelWalletConnect(connector)}>
                  <svg className={styles.drawer_walletIcon}>
                    {connector.options.use}
                  </svg>
                  {connector?.name}
                </button>
              ))}
            </ul>
          )}
      </Drawer>
    </>
  );
}