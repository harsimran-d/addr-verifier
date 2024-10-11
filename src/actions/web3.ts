'use server';

import nacl from 'tweetnacl';
import { PublicKey } from '@solana/web3.js';

export async function verifyMessage(
  message: string,
  data: Uint8Array,
  publicKey: string
) {
  console.log('Message:', message);
  console.log('Received signedMessage:', data);
  console.log('Public Key:', publicKey);

  const encoder = new TextEncoder();
  const messageUint8 = encoder.encode(message);
  const publicKeyBytes = new PublicKey(publicKey).toBytes();

  try {
    const isValid = nacl.sign.detached.verify(
      messageUint8,
      Uint8Array.from(data),
      publicKeyBytes
    );
    if (isValid) {
      console.log('Signature is valid');
    } else {
      console.log('Signature is invalid');
    }
    return isValid;
  } catch (error) {
    console.log('Verification failed with error:', error);
    return false;
  }
}
