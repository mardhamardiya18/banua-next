import ProductCard from "../components/product-card";
import { getProducts } from "../lib/products";

export default async function ProdukPage() {
  const products = await getProducts();

  return (
    <main className="mx-auto w-full max-w-3xl p-6">
      <h1 className="mb-6 text-2xl font-bold">Produk</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </main>
  );
}
