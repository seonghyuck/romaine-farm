'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const filteredProducts = selectedCategory === '전체'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">전체 상품</h1>
        <p className="text-gray-600">신선한 야채를 만나보세요</p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedCategory === category
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16 text-gray-500">
          해당 카테고리에 상품이 없습니다.
        </div>
      )}
    </div>
  );
}
