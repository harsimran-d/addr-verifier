import { useState } from 'react';
export default function VerifySolAddressOwnership() {
  const [verifyStatus, setVerifyStatus] = useState(false);

  return (
    <div>
      <button onClick={() => {}}>Verify ownership</button>
      <br></br>
      {verifyStatus ? 'Verified' : 'Not Verified'}
    </div>
  );
}
