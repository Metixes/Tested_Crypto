import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { mainnet, optimism, base } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

import sprite from '../../assets/icons/sprite.svg'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [base],
  [publicProvider()],
)

const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({
      chains,
      options: {
        name: 'MetaMask',
        shimDisconnect: true,
        use: (
          <use href={sprite + '#metaMask'}/>
        )
      }
    }),
    new WalletConnectConnector({
      chains,
      options: {
        name: 'WalletConnect',
        projectId: '54cdd96f200211d0c4e585a984e6d2f3',
        use: (
          <use href={sprite + '#wallet'}/>
        )
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
})

export const WagmiProvider = ({children}) => {
    return(
    <WagmiConfig config={config}>
      {children}
    </WagmiConfig>
    )
}