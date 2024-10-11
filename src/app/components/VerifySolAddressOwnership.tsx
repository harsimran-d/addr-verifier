import { useState } from 'react';

import { useWallet } from '@solana/wallet-adapter-react';
import { verifyMessage } from '@/actions/web3';

export default function VerifySolAddressOwnership() {
  const [verifyStatus, setVerifyStatus] = useState(false);

  const selectedWallet = useWallet();
  const publicKey = selectedWallet.publicKey;
  const encoder = new TextEncoder();

  async function _verify() {
    const message = `i own this key ${publicKey!.toBase58()}`;
    if (selectedWallet.signMessage) {
      const resp = await selectedWallet.signMessage(encoder.encode(message));
      let result = false;
      const walletName = selectedWallet.wallet?.adapter.name;
      if (walletName == 'Phantom') {
        const phantomData: { data: Uint8Array } = JSON.parse(
          JSON.stringify(resp)
        );
        console.log(phantomData.data);
        result = await verifyMessage(
          message,
          phantomData.data,
          publicKey!.toBase58()
        );
      } else if (walletName == 'Backpack') {
        result = await verifyMessage(message, resp, publicKey!.toBase58());
      }
      setVerifyStatus(result);
    }
  }

  return (
    <div>
      <button onClick={_verify}>Verify ownership</button>
      <br></br>
      {verifyStatus ? 'Verified' : 'Not Verified'}
    </div>
  );
}
