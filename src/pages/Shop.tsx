import { SkipLink } from "@/components/SkipLink";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Import images with srcset for responsive loading
// Using signboard as a temporary hero image - replace with actual shop/shelf image
import signboard from "@/assets/signboard.png";
import signboardSrcSet from "@/assets/signboard.png?w=600;1200;1800&format=webp&as=srcset";

// Sample product data - replace with actual products
const products = [
  {
    id: 1,
    name: "【心心玫瑰園】",
    description: "玫瑰花醬",
    price: "NT$330",
    image: null, // Replace with actual product image
  },
  {
    id: 2,
    name: "【心心玫瑰園】",
    description: "玫瑰花醋",
    price: "NT$399",
    image: null,
  },
  {
    id: 3,
    name: "",
    description: "",
    price: "",
    image: null,
  },
  {
    id: 4,
    name: "",
    description: "",
    price: "",
    image: null,
  },
  {
    id: 5,
    name: "",
    description: "",
    price: "",
    image: null,
  },
  {
    id: 6,
    name: "",
    description: "",
    price: "",
    image: null,
  },
];

const Shop = () => {
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
            src={signboard}
            srcSet={signboardSrcSet}
            sizes="100vw"
            alt="優質選品展示"
            className="w-full h-full object-cover"
          />
          {/* Bottom fade gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Hero Title - Below image, centered */}
        <div className="bg-background py-8 md:py-10">
          <h1 className="font-serif text-primary text-3xl md:text-4xl lg:text-5xl tracking-[0.3em] text-center">
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
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-6 md:gap-10">
              {products.map((product) => (
                <div key={product.id} className="flex flex-col items-center">
                  {/* Product Image - Circular */}
                  <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden mb-4 bg-gradient-to-b from-sky-100 to-sky-50 flex items-end justify-center">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.description || "商品"}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <ProductPlaceholder />
                    )}
                  </div>
                  {/* Product Info */}
                  {product.name && (
                    <div className="text-center">
                      <p className="text-xs md:text-sm text-muted-foreground tracking-wide">
                        {product.name}
                      </p>
                      <p className="text-sm md:text-base text-foreground font-medium">
                        {product.description}
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground mt-1">
                        {product.price}
                      </p>
                    </div>
                  )}
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

// Placeholder component for product images
const ProductPlaceholder = () => (
  <svg
    viewBox="0 0 200 200"
    className="w-full h-full"
    preserveAspectRatio="xMidYMax slice"
  >
    {/* Cloud */}
    <ellipse cx="140" cy="50" rx="30" ry="15" fill="white" opacity="0.9" />
    <ellipse cx="155" cy="47" rx="22" ry="11" fill="white" opacity="0.9" />
    <ellipse cx="125" cy="49" rx="18" ry="9" fill="white" opacity="0.9" />

    {/* Back hill - lighter green */}
    <path
      d="M0 200 Q50 120 100 150 Q150 180 200 130 L200 200 Z"
      fill="#6B8E4E"
    />

    {/* Front hill - darker green */}
    <path
      d="M0 200 Q40 150 80 175 Q120 200 160 165 Q190 140 200 155 L200 200 Z"
      fill="#4A7C3A"
    />
  </svg>
);

export default Shop;
