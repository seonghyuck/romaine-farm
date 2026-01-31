'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const { user } = useAuth();

  const deliveryFee = totalPrice >= 30000 ? 0 : 3000;
  const finalPrice = totalPrice + deliveryFee;

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <svg className="w-24 h-24 mx-auto text-gray-300 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">장바구니가 비어있습니다</h1>
        <p className="text-gray-600 mb-8">신선한 야채를 담아보세요!</p>
        <Link
          href="/products"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          상품 보러가기
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">장바구니</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm flex gap-4">
              <div className="relative w-24 h-24 bg-green-50 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-grow">
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-green-700 font-medium mt-1">
                  {item.price.toLocaleString()}원
                </p>

                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500 transition"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="text-right">
                <span className="font-bold text-gray-800">
                  {(item.price * item.quantity).toLocaleString()}원
                </span>
              </div>
            </div>
          ))}

          <button
            onClick={clearCart}
            className="text-sm text-gray-500 hover:text-red-500 transition"
          >
            장바구니 비우기
          </button>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
            <h2 className="text-lg font-bold text-gray-800 mb-4">주문 요약</h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">상품 금액</span>
                <span className="font-medium">{totalPrice.toLocaleString()}원</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">배송비</span>
                <span className="font-medium">
                  {deliveryFee === 0 ? (
                    <span className="text-green-600">무료</span>
                  ) : (
                    `${deliveryFee.toLocaleString()}원`
                  )}
                </span>
              </div>
              {totalPrice < 30000 && (
                <p className="text-xs text-gray-500">
                  {(30000 - totalPrice).toLocaleString()}원 더 담으면 무료배송!
                </p>
              )}
            </div>

            <div className="border-t border-gray-200 mt-4 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">총 결제 금액</span>
                <span className="text-xl font-bold text-green-700">
                  {finalPrice.toLocaleString()}원
                </span>
              </div>
            </div>

            {user ? (
              <button className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold mt-6 hover:bg-green-700 transition">
                주문하기
              </button>
            ) : (
              <div className="mt-6">
                <p className="text-sm text-gray-600 mb-3 text-center">
                  주문하시려면 로그인이 필요합니다
                </p>
                <Link
                  href="/auth/login"
                  className="block w-full bg-green-600 text-white py-4 rounded-lg font-semibold text-center hover:bg-green-700 transition"
                >
                  로그인하기
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
