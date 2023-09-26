import React from 'react'
import CryptoPlatform from "./pages/CryptoPlatform/CryptoPlatform"
import { WagmiProvider } from './util/wagmiProvider/wagmiProvider'

export default function App() {
  return (
    <WagmiProvider>
      <CryptoPlatform />
    </WagmiProvider>
  )
}