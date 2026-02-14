import { SkipLink } from "@/components/SkipLink";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Import hero image with WebP fallback
import aestheticsHero from "@/assets/aesthetics/aesthetics_01.png?w=1200&format=webp";
import aestheticsHeroSrcSet from "@/assets/aesthetics/aesthetics_01.png?w=600;1200;1800&format=webp&as=srcset";

// Import gallery images with WebP fallback
import aesthetics02 from "@/assets/aesthetics/aesthetics_02.jpg?w=800&format=webp";
import aesthetics02SrcSet from "@/assets/aesthetics/aesthetics_02.jpg?w=400;800&format=webp&as=srcset";
import aesthetics03 from "@/assets/aesthetics/aesthetics_03.png?w=800&format=webp";
import aesthetics03SrcSet from "@/assets/aesthetics/aesthetics_03.png?w=400;800&format=webp&as=srcset";
import aesthetics04 from "@/assets/aesthetics/aesthetics_04.png?w=800&format=webp";
import aesthetics04SrcSet from "@/assets/aesthetics/aesthetics_04.png?w=400;800&format=webp&as=srcset";
import aesthetics05 from "@/assets/aesthetics/aesthetics_05.png?w=800&format=webp";
import aesthetics05SrcSet from "@/assets/aesthetics/aesthetics_05.png?w=400;800&format=webp&as=srcset";
import aesthetics06 from "@/assets/aesthetics/aesthetics_06.png?w=800&format=webp";
import aesthetics06SrcSet from "@/assets/aesthetics/aesthetics_06.png?w=400;800&format=webp&as=srcset";
import aesthetics07 from "@/assets/aesthetics/aesthetics_07.png?w=800&format=webp";
import aesthetics07SrcSet from "@/assets/aesthetics/aesthetics_07.png?w=400;800&format=webp&as=srcset";
import aesthetics08 from "@/assets/aesthetics/aesthetics_08.png?w=800&format=webp";
import aesthetics08SrcSet from "@/assets/aesthetics/aesthetics_08.png?w=400;800&format=webp&as=srcset";

const Life = () => {
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
            src={aestheticsHero}
            srcSet={aestheticsHeroSrcSet}
            sizes="100vw"
            alt="生活美學"
            className="w-full h-full object-cover"
          />
          {/* Bottom fade gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Hero Title - Below image, centered */}
        <div className="bg-background py-8 md:py-10">
          <h1 className="font-iansui text-primary text-3xl md:text-4xl lg:text-5xl tracking-[0.3em] text-center">
            生活美學
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
                悦納不只是餐廳，<br />
                更是個「策展日常」的場域。
              </p>
              <p className="text-muted-foreground leading-[2.5] text-lg tracking-wide">
                我們相信，生活需要不斷地被啟發與滋養。<br />
                透過茶席、故事會，我們邀請每一位會生活的生命，在此交會。<br />
                從沙龍到心靈的跨界思維，這些活動紀錄不僅是回憶，<br />
                更是我們共同學習、一起長出有生命的生活的軌跡。
              </p>
            </div>
          </div>
        </section>

        {/* Life Gallery Section */}
        <section className="py-8 px-4 md:px-8 bg-background">
          <div className="max-w-5xl mx-auto flex flex-col gap-3 md:gap-4">

            {/* Row 1: 02 | 03 — two large images, equal width */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
                <img
                  src={aesthetics02}
                  srcSet={aesthetics02SrcSet}
                  sizes="(max-width: 768px) 50vw, 40vw"
                  alt="悦納讀書會活動看板"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
                <img
                  src={aesthetics03}
                  srcSet={aesthetics03SrcSet}
                  sizes="(max-width: 768px) 50vw, 40vw"
                  alt="手作花藝包裝"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Rows 2-3: Left (04,05 + 06 wide) + Right tall portraits (07,08) */}
            <div className="grid grid-cols-4 grid-rows-2 gap-3 md:gap-4">
              {/* Row 2 left: 04 | 05 */}
              <div className="aspect-square relative overflow-hidden rounded-2xl">
                <img
                  src={aesthetics04}
                  srcSet={aesthetics04SrcSet}
                  sizes="(max-width: 768px) 25vw, 20vw"
                  alt="品酒活動"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square relative overflow-hidden rounded-2xl">
                <img
                  src={aesthetics05}
                  srcSet={aesthetics05SrcSet}
                  sizes="(max-width: 768px) 25vw, 20vw"
                  alt="歡聚活動紀錄"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Right tall portraits: 07 | 08 — span 2 rows */}
              <div className="row-span-2 relative overflow-hidden rounded-2xl">
                <img
                  src={aesthetics07}
                  srcSet={aesthetics07SrcSet}
                  sizes="(max-width: 768px) 25vw, 20vw"
                  alt="空間一隅"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="row-span-2 relative overflow-hidden rounded-2xl">
                <img
                  src={aesthetics08}
                  srcSet={aesthetics08SrcSet}
                  sizes="(max-width: 768px) 25vw, 20vw"
                  alt="茶道體驗"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Row 3 left: 06 — spans 2 columns, same total width as 04+05 */}
              <div className="col-span-2 aspect-[2/1] relative overflow-hidden rounded-2xl">
                <img
                  src={aesthetics06}
                  srcSet={aesthetics06SrcSet}
                  sizes="(max-width: 768px) 50vw, 40vw"
                  alt="茶席品茗"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
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

export default Life;
