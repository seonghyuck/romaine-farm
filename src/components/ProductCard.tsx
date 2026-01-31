'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
        <div className="relative aspect-square bg-green-50 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.category && (
            <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
              {product.category}
            </span>
          )}
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
          <p className="text-sm text-gray-500 mb-3 line-clamp-2">{product.desc}</p>

          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-green-700">
              {product.price.toLocaleString()}원
            </span>
            <button
              onClick={handleAddToCart}
              className="bg-green-100 text-green-700 p-2 rounded-lg hover:bg-green-600 hover:text-white transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
