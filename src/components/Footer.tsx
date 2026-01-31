export default function Footer() {
  return (
    <footer className="bg-green-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">성준농장</h3>
            <p className="text-green-200 text-sm leading-relaxed">
              정직한 농부가 직접 재배한 신선한 야채를<br />
              농장에서 식탁까지 빠르게 배송해드립니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">고객센터</h3>
            <p className="text-green-200 text-sm">
              전화: 010-1234-5678<br />
              이메일: farm@sungjun.com<br />
              운영시간: 평일 09:00 - 18:00
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">배송안내</h3>
            <p className="text-green-200 text-sm">
              3만원 이상 무료배송<br />
              평일 오후 2시 전 주문 시 당일발송<br />
              신선도 유지를 위한 냉장배송
            </p>
          </div>
        </div>

        <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-300 text-sm">
          © 2024 성준농장. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
