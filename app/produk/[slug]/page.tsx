import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { formatRupiah, getProductBySlug, getProducts } from "../../lib/products";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProdukDetailPage(props: PageProps<"/produk/[slug]">) {
  return (
    <main className="mx-auto w-full max-w-3xl p-6">
      <Link href="/produk" className="text-sm underline">
        ← Kembali
      </Link>
      <Suspense fallback={<ProductDetailSkeleton />}>
        <ProductDetail params={props.params} />
      </Suspense>
    </main>
  );
}

async function ProductDetail({
  params,
}: {
  params: PageProps<"/produk/[slug]">["params"];
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <h1 className="mt-4 text-2xl font-bold">{product.name}</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        {product.description}
      </p>
      <p className="mt-4 text-xl font-semibold">{formatRupiah(product.price)}</p>
    </>
  );
}

function ProductDetailSkeleton() {
  return (
    <div className="mt-4 animate-pulse space-y-3">
      <div className="h-8 w-1/2 rounded bg-zinc-200 dark:bg-zinc-800" />
      <div className="h-4 w-3/4 rounded bg-zinc-200 dark:bg-zinc-800" />
      <div className="h-6 w-24 rounded bg-zinc-200 dark:bg-zinc-800" />
    </div>
  );
}
