'use client';

import { WalletProvider } from '@solana/wallet-adapter-react';

import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';

const WalletDisconnectButtonDynamic = dynamic(
  async () =>
    (await import('@solana/wallet-adapter-react-ui')).WalletDisconnectButton,
  { ssr: false }
);
const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

import '@solana/wallet-adapter-react-ui/styles.css';
import VerifySolAddressOwnership from '../components/VerifySolAddressOwnership';
import dynamic from 'next/dynamic';

export default function Page() {
  return (
    <div className="flex flex-col m-auto w-48 space-y-2">
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <WalletMultiButtonDynamic />
          <WalletDisconnectButtonDynamic />
          <VerifySolAddressOwnership />
        </WalletModalProvider>
      </WalletProvider>
    </div>
  );
}
