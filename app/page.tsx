import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl p-6">
      <h1 className="text-3xl font-bold">Banua</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Selamat datang. Lihat produk kami.
      </p>
      <Link href="/produk" className="mt-4 inline-block underline">
        Lihat produk →
      </Link>
    </main>
  );
}
