export const products = [
  {
    id: 1,
    slug: "aria",
    name: "Платье Aria",
    category: "Платья",
    price: 89900,
    sizes: ["XS", "S", "M", "L"],
    description: "Элегантное платье из мягкой ткани для повседневных и вечерних образов.",
    composition: "95% полиэстер, 5% эластан",
    variants: [
      { color: "Зелёный",  code: "#556B4E", images: ["/products/aria-green-1.jpg", "/products/aria-green-2.jpg", "/products/aria-green-3.jpg"] },
      { color: "Жёлтый",   code: "#D4B16A", images: ["/products/aria-yellow-1.jpg", "/products/aria-yellow-2.jpg"] },
      { color: "Красный",  code: "#9E3B3B", images: ["/products/aria-red-1.jpg",    "/products/aria-red-2.jpg"] },
    ]
  },
  {
    id: 2,
    slug: "milano",
    name: "Пальто Milano",
    category: "Верхняя одежда",
    price: 145000,
    sizes: ["S", "M", "L"],
    description: "Премиальное пальто свободного кроя из натуральной шерсти.",
    composition: "80% шерсть, 20% полиэстер",
    variants: [
      { color: "Чёрный",   code: "#1a1a1a", images: ["/products/milano-black-1.jpg", "/products/milano-black-2.jpg"] },
      { color: "Кремовый", code: "#D4C5A9", images: ["/products/milano-cream-1.jpg", "/products/milano-cream-2.jpg"] },
      { color: "Серый",    code: "#8A8A8A", images: ["/products/milano-grey-1.jpg"] },
    ]
  },
  {
    id: 3,
    slug: "luna",
    name: "Платье Luna",
    category: "Платья",
    price: 79900,
    sizes: ["XS", "S", "M", "L"],
    description: "Романтичное платье с нежным силуэтом. Лёгкая ткань создаёт эффект невесомости.",
    composition: "92% вискоза, 8% эластан",
    variants: [
      { color: "Коричневый", code: "#7B5B3A", images: ["/products/luna-brown-1.jpg", "/products/luna-brown-2.jpg"] },
      { color: "Чёрный",    code: "#1a1a1a", images: ["/products/luna-black-1.jpg"] },
      { color: "Молочный",  code: "#F2EDE4", images: ["/products/luna-milk-1.jpg", "/products/luna-milk-2.jpg"] },
    ]
  },
  {
    id: 4,
    slug: "soft",
    name: "Костюм Soft",
    category: "Костюмы",
    price: 129900,
    sizes: ["XS", "S", "M", "L"],
    description: "Элегантный костюм из премиальной ткани для офиса и торжественных мероприятий.",
    composition: "65% шерсть, 30% полиэстер, 5% эластан",
    variants: [
      { color: "Бежевый",  code: "#C8B89A", images: ["/products/soft-beige-1.jpg", "/products/soft-beige-2.jpg"] },
      { color: "Серо-беж", code: "#9C9080", images: ["/products/soft-taupe-1.jpg"] },
      { color: "Белый",    code: "#F5F3EE", images: ["/products/soft-white-1.jpg", "/products/soft-white-2.jpg"] },
    ]
  },
  {
    id: 5,
    slug: "seta",
    name: "Топ Seta",
    category: "Топы",
    price: 34900,
    sizes: ["XS", "S", "M", "L"],
    description: "Шёлковистый топ для повседневных и вечерних образов.",
    composition: "100% вискоза",
    variants: [
      { color: "Кремовый",    code: "#F2EDE4", images: ["/products/seta-cream-1.jpg"] },
      { color: "Карамельный", code: "#C8966B", images: ["/products/seta-caramel-1.jpg"] },
    ]
  },
  {
    id: 6,
    slug: "aqua",
    name: "Плащ Aqua",
    category: "Верхняя одежда",
    price: 189000,
    sizes: ["XS", "S", "M", "L"],
    description: "Стильный плащ с водоотталкивающим покрытием. Защита от непогоды в элегантном исполнении.",
    composition: "100% полиэстер, пропитка DWR",
    variants: [
      { color: "Шалфей", code: "#7A9E7E", images: ["/products/aqua-sage-1.jpg", "/products/aqua-sage-2.jpg"] },
      { color: "Чёрный", code: "#1a1a1a", images: ["/products/aqua-black-1.jpg"] },
    ]
  },
  {
    id: 7,
    slug: "sera",
    name: "Платье Sera",
    category: "Платья",
    price: 94900,
    sizes: ["XS", "S", "M", "L"],
    description: "Вечернее платье с деликатными деталями. Создаёт безупречный образ для особых случаев.",
    composition: "98% полиэстер, 2% эластан",
    variants: [
      { color: "Слоновая кость", code: "#EDE5D8", images: ["/products/sera-ivory-1.jpg", "/products/sera-ivory-2.jpg"] },
      { color: "Мокко",          code: "#8B6F5E", images: ["/products/sera-mocha-1.jpg"] },
    ]
  },
  {
    id: 8,
    slug: "roma",
    name: "Сумка Roma",
    category: "Аксессуары",
    price: 28900,
    sizes: ["ONE SIZE"],
    description: "Структурированная сумка из экокожи. Вмещает всё необходимое, не теряя элегантности.",
    composition: "100% экокожа, подкладка — 100% полиэстер",
    variants: [
      { color: "Карамельный", code: "#C8966B", images: ["/products/roma-caramel-1.jpg", "/products/roma-caramel-2.jpg"] },
      { color: "Чёрный",      code: "#1a1a1a", images: ["/products/roma-black-1.jpg"] },
      { color: "Кремовый",    code: "#F2EDE4", images: ["/products/roma-cream-1.jpg"] },
    ]
  },
];
