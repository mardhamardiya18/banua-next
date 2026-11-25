// Data dummy — nanti diganti query DB
export type Product = {
  slug: string;
  name: string;
  description: string;
  price: number;
};

const products: Product[] = [
  {
    slug: "tumpeng-mini",
    name: "Tumpeng Mini",
    description: "Tumpeng porsi kecil lengkap dengan lauk pauk.",
    price: 35000,
  },
  {
    slug: "nasi-kuning",
    name: "Nasi Kuning",
    description: "Nasi kuning gurih dengan pelengkap khas.",
    price: 25000,
  },
  {
    slug: "kue-lapis",
    name: "Kue Lapis",
    description: "Kue lapis manis dan lembut.",
    price: 20000,
  },
];

export async function getProducts(): Promise<Product[]> {
  return products;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return products.find((p) => p.slug === slug);
}

export function formatRupiah(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}
