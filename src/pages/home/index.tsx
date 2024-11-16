import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <h1
      onClick={() => {
        router.back();
      }}
    >
      Home
    </h1>
  );
}
