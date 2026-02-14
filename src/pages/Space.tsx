import { SkipLink } from "@/components/SkipLink";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Import images with WebP fallback (src) and responsive srcSet
import restaurantInterior from "@/assets/restaurant-interior.png?w=1200&format=webp";
import restaurantInteriorSrcSet from "@/assets/restaurant-interior.png?w=600;1200;1800&format=webp&as=srcset";

// Humanities gallery images
import humanities01 from "@/assets/Humanities/Humanities_01.png?w=800&format=webp";
import humanities01SrcSet from "@/assets/Humanities/Humanities_01.png?w=400;800;1200&format=webp&as=srcset";
import humanities02 from "@/assets/Humanities/Humanities_02.png?w=800&format=webp";
import humanities02SrcSet from "@/assets/Humanities/Humanities_02.png?w=600;1134&format=webp&as=srcset";
import humanities03 from "@/assets/Humanities/Humanities_03.png?w=800&format=webp";
import humanities03SrcSet from "@/assets/Humanities/Humanities_03.png?w=400;800;1200&format=webp&as=srcset";
import humanities04 from "@/assets/Humanities/Humanities_04.png?w=800&format=webp";
import humanities04SrcSet from "@/assets/Humanities/Humanities_04.png?w=400;800;1200&format=webp&as=srcset";
import humanities05 from "@/assets/Humanities/Humanities_05.png?w=800&format=webp";
import humanities05SrcSet from "@/assets/Humanities/Humanities_05.png?w=400;800;1200&format=webp&as=srcset";
import humanities06 from "@/assets/Humanities/Humanities_06.png?w=800&format=webp";
import humanities06SrcSet from "@/assets/Humanities/Humanities_06.png?w=600;1185&format=webp&as=srcset";

const Space = () => {
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
            src={restaurantInterior}
            srcSet={restaurantInteriorSrcSet}
            sizes="100vw"
            alt="溫馨的人文空間"
            className="w-full h-full object-cover"
          />
          {/* Bottom fade gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Hero Title - Below image, centered */}
        <div className="bg-background py-8 md:py-10">
          <h1 className="font-iansui text-primary text-3xl md:text-4xl lg:text-5xl tracking-[0.3em] text-center">
            人文空間
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
                我們常說，空間是生活的容器，<br />
                而悦納想做的，就是成為你「安心的家」。
              </p>
              <p className="text-muted-foreground leading-[2.5] text-lg tracking-wide">
                無論你是獨自前來沉澱，還是與親友歡喜相聚，<br />
                悦納都在輕聲對你說：歡迎回家。
              </p>
              <p className="text-muted-foreground leading-[2.5] text-lg tracking-wide">
                在這個傳遞愛的生活場域裡，每一個相視而笑的瞬間，<br />
                都是我們共同創造的日常。讓我們陪你，<br />
                在像家一樣的氛圍裡，自在實踐有生命的生活。
              </p>
            </div>
          </div>
        </section>

        {/* Space Gallery Section - Collage Layout */}
        <section className="py-8 px-4 md:px-8 bg-background">
          <div className="max-w-5xl mx-auto">
            {/*
              Unified grid: 10 columns x 4 rows
              Row 1-2: 01 (col 1-4, row 1-2) | 02 (col 5-10, row 1-2)
              Row 3:   03 (col 1-3, row 3)   | 04 (col 4-6, row 3)   | 06 (col 7-10, row 3-4)
              Row 4:   05 (col 1-6, row 4)                            | 06 continues
            */}
            <div className="grid grid-cols-10 gap-3 md:gap-4">
              {/* 01 - top left, portrait */}
              <div className="col-start-1 col-end-5 row-start-1 row-end-3 relative overflow-hidden rounded-lg">
                <img
                  src={humanities01}
                  srcSet={humanities01SrcSet}
                  sizes="(max-width: 768px) 40vw, 380px"
                  alt="悦納蔬食生活空間 店面外觀"
                  className="w-full h-full object-cover aspect-[3/4]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              {/* 02 - top right, wider */}
              <div className="col-start-5 col-end-11 row-start-1 row-end-3 relative overflow-hidden rounded-lg">
                <img
                  src={humanities02}
                  srcSet={humanities02SrcSet}
                  sizes="(max-width: 768px) 100vw, 1134px"
                  alt="悦納室內招牌與蘭花擺設"
                  className="w-full h-full object-cover object-[85%_center]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* 03 - middle left, small */}
              <div className="col-start-1 col-end-4 row-start-3 row-end-4 relative overflow-hidden rounded-lg">
                <img
                  src={humanities03}
                  srcSet={humanities03SrcSet}
                  sizes="(max-width: 768px) 30vw, 280px"
                  alt="牆面裝飾與植栽"
                  className="w-full h-full object-cover aspect-[4/3]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              {/* 04 - middle center */}
              <div className="col-start-4 col-end-7 row-start-3 row-end-4 relative overflow-hidden rounded-lg">
                <img
                  src={humanities04}
                  srcSet={humanities04SrcSet}
                  sizes="(max-width: 768px) 30vw, 280px"
                  alt="溫馨用餐空間"
                  className="w-full h-full object-cover aspect-[4/3]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              {/* 06 - right, spans 2 rows (row 3-4) */}
              <div className="col-start-7 col-end-11 row-start-3 row-end-5 relative overflow-hidden rounded-lg">
                <img
                  src={humanities06}
                  srcSet={humanities06SrcSet}
                  sizes="(max-width: 768px) 100vw, 1185px"
                  alt="明亮的玻璃門與座位區"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* 05 - bottom left, landscape */}
              <div className="col-start-1 col-end-7 row-start-4 row-end-5 relative overflow-hidden rounded-lg">
                <img
                  src={humanities05}
                  srcSet={humanities05SrcSet}
                  sizes="(max-width: 768px) 60vw, 570px"
                  alt="綠意植栽"
                  className="w-full h-full object-cover object-bottom aspect-[16/9]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};


export default Space;
