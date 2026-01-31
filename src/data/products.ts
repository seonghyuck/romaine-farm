import { Product } from '@/types';

export const products: Product[] = [
  {
    id: "romaine",
    name: "통로메인 2kg",
    price: 8000,
    desc: "신선하고 아삭한 통로메인. 샐러드와 쌈채소로 최고의 선택입니다.",
    image: "/images/romaine.png",
    category: "샐러드"
  },
  {
    id: "kale",
    name: "케일 2kg",
    price: 8000,
    desc: "비타민 가득 건강한 케일. 스무디와 샐러드에 완벽합니다.",
    image: "/images/kale.png",
    category: "샐러드"
  },
  {
    id: "lettuce",
    name: "포기상추 4kg",
    price: 12000,
    desc: "수분 가득! 쌈채소로 딱 좋은 포기상추입니다.",
    image: "/images/lettuce.png",
    category: "쌈채소"
  },
  {
    id: "romaine-mini",
    name: "미니 로메인 1kg",
    price: 5000,
    desc: "한 입 크기의 미니 로메인. 간편하게 즐기세요.",
    image: "/images/romaine.png",
    category: "샐러드"
  },
  {
    id: "kale-bundle",
    name: "케일 번들 3kg",
    price: 10000,
    desc: "대용량 케일 번들. 가족들과 함께 건강하게!",
    image: "/images/kale.png",
    category: "샐러드"
  },
  {
    id: "lettuce-fresh",
    name: "신선상추 2kg",
    price: 7000,
    desc: "오늘 아침 수확한 가장 신선한 상추입니다.",
    image: "/images/lettuce.png",
    category: "쌈채소"
  }
];

export const categories = ["전체", "샐러드", "쌈채소"];
