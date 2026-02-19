import { useSEO } from "@/hooks/useSEO";
import { SkipLink } from "@/components/SkipLink";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Import images with WebP fallback (src) and responsive srcSet
import shopHero from "@/assets/Good_01.png?w=1200&format=webp";
import shopHeroSrcSet from "@/assets/Good_01.png?w=600;1200;1800&format=webp&as=srcset";

// Import product images (optimized to WebP; AVIF files kept as-is since already optimized)
import flowerBrew from "@/assets/products/flower-brew.avif";
import enzyme03 from "@/assets/products/enzyme-03.png?w=600&format=webp";
import camelliaOil from "@/assets/products/camellia-oil.png?w=600&format=webp";
import flowerBouquet from "@/assets/products/flower-bouquet.avif";
import xoSauce from "@/assets/products/xo-sauce.png?w=600&format=webp";
import cloth from "@/assets/products/cloth.png?w=600&format=webp";

const products = [
  {
    id: 1,
    name: "【心心玫瑰園】",
    description: "玫瑰花釀",
    price: "NT$330",
    image: flowerBrew,
  },
  {
    id: 2,
    name: "【悦納蔬食生活館】",
    description: "太來酵素",
    price: "NT$2680",
    image: enzyme03,
  },
  {
    id: 3,
    name: "【悦納蔬食生活館】",
    description: "苦茶油",
    price: "NT$1200",
    image: camelliaOil,
  },
  {
    id: 4,
    name: "【心心玫瑰園】",
    description: "玫瑰花醋",
    price: "NT$399",
    image: flowerBouquet,
  },
  {
    id: 5,
    name: "【悦納蔬食生活館】",
    description: "主廚手作XO醬",
    price: "NT$300",
    image: xoSauce,
  },
  {
    id: 6,
    name: "【悦納蔬食生活館】",
    description: "布列塔尼酥餅（8入）",
    price: "NT$360",
    image: cloth,
  },
];

const Shop = () => {
  useSEO({
    title: "悦納選物｜純淨好物 · 養生伴手禮｜injoy 悦納",
    description: "精選純淨好物：玫瑰花釀、酵素、苦茶油、XO醬。悦納嚴選的養生伴手禮，把純淨的心意帶回家。",
  });

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden font-sans">
      {/* Skip Link for Accessibility */}
      <SkipLink />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative flex flex-col">
        {/* Background Image with fade effect */}
        <div className="relative h-[60vh] min-h-[400px]">
          <img
            src={shopHero}
            srcSet={shopHeroSrcSet}
            sizes="100vw"
            alt="優質選品展示"
            className="w-full h-full object-cover"
          />
          {/* Bottom fade gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Hero Title - Below image, centered */}
        <div className="bg-background py-8 md:py-10">
          <h1 className="font-iansui text-primary text-3xl md:text-4xl lg:text-5xl tracking-[0.3em] text-center">
            優質選品
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main id="main-content">
        {/* Philosophy Introduction Section */}
        <section className="py-24 bg-background text-center">
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-12">
              <p className="text-muted-foreground leading-[2.5] text-lg tracking-wide">
                選物，是對生活的一種表態。
              </p>
              <p className="text-muted-foreground leading-[2.5] text-lg tracking-wide">
                悦納將這份對純淨的堅持，延伸至你的家中。<br />
                我們嚴選友善環境的食材、職人手作的料理，以及滋養身心的好物。<br />
                每一件商品，都承載著我們對自然的敬意與對品質的承諾。
              </p>
              <p className="text-muted-foreground leading-[2.5] text-lg tracking-wide">
                希望這些經過時間淬鍊的選品，能成為你日常生活的溫柔陪伴，<br />
                讓你在悦納之外，也能持續實踐純淨而豐盛的生活方式。
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid Section */}
        <section className="py-16 px-4 md:px-8 bg-background">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-3 gap-8 md:gap-12">
              {products.map((product) => (
                <div key={product.id} className="flex flex-col items-center">
                  {/* Product Image - Circular with light gray background */}
                  <div className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden mb-5 bg-gray-100 shadow-sm">
                    <img
                      src={product.image}
                      alt={product.description}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Product Info */}
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-muted-foreground tracking-wide">
                      {product.name}
                    </p>
                    <p className="text-sm md:text-base text-foreground font-medium mt-0.5">
                      {product.description}
                    </p>
                    <p className="text-sm md:text-base text-muted-foreground mt-1">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Shop;
