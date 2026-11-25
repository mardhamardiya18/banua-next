import Link from "next/link";
import { formatRupiah, type Product } from "../lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/produk/${product.slug}`}
      className="block rounded-lg border border-zinc-200 p-4 transition hover:shadow-md dark:border-zinc-800"
    >
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
        {product.description}
      </p>
      <p className="mt-3 font-medium">{formatRupiah(product.price)}</p>
    </Link>
  );
}
