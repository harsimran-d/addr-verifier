import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col m-auto w-72">
      <div>Welcome to Addr Verifier</div>
      <p>
        To verify with{' '}
        <Link className="text-blue-600 underline" href={'/solana'}>
          Solana
        </Link>
      </p>
    </div>
  );
}
