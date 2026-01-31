import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <span className="inline-block bg-green-500/30 text-green-100 px-4 py-1 rounded-full text-sm mb-4">
              농장직송 신선야채
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              건강한 땅에서 자란<br />
              신선한 야채를 만나보세요
            </h1>
            <p className="text-lg text-green-100 mb-8">
              농가에서 정성껏 키운 야채를<br />
              수확 당일 바로 배송해드립니다.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
            >
              상품 보러가기
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-50" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">책임 재배</h3>
              <p className="text-gray-600 text-sm">한 농가가 책임지고<br />재배합니다.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">당일 수확 배송</h3>
              <p className="text-gray-600 text-sm">주문 후 바로 수확하여<br />신선하게 배송합니다.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">농장 직거래</h3>
              <p className="text-gray-600 text-sm">중간 유통 없이 합리적인<br />가격에 드립니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">인기 상품</h2>
              <p className="text-gray-600 mt-1">가장 많이 찾는 신선한 야채들</p>
            </div>
            <Link href="/products" className="text-green-600 hover:text-green-700 font-medium">
              전체보기 →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            신선한 야채로 건강한 식탁을 만들어보세요
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            지금 가입하시면 첫 주문 시 10% 할인 혜택을 드립니다.<br />
            정기 구독 서비스도 준비중입니다.
          </p>
          <Link
            href="/auth/register"
            className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            회원가입하기
          </Link>
        </div>
      </section>
    </div>
  );
}
