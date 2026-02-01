import { useState } from "react";
import { SkipLink } from "@/components/SkipLink";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MenuLightbox } from "@/components/MenuLightbox";

// Import images with srcset for responsive loading
import diningHero from "@/assets/dining-hero.jpg";
import diningHeroSrcSet from "@/assets/dining-hero.jpg?w=600;1200;1800&format=webp&as=srcset";
import diningPinyue from "@/assets/dining-pinyue.png";
import diningPinyueSrcSet from "@/assets/dining-pinyue.png?w=600;1200;1800&format=webp&as=srcset";
// 真味・日常 section image
import diningTruetaste from "@/assets/dining-truetaest.png";
import diningTruetasteSrcSet from "@/assets/dining-truetaest.png?w=600;1200;1800&format=webp&as=srcset";
// 蘊火・炊香 section image
import diningFire from "@/assets/dining-fire.png";
import diningFireSrcSet from "@/assets/dining-fire.png?w=600;1200;1800&format=webp&as=srcset";

const Dining = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden font-sans">
      {/* Skip Link for Accessibility */}
      <SkipLink />

      {/* Header */}
      <Header />

      {/* Hero Section - Consistent with About page design */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={diningHero}
            srcSet={diningHeroSrcSet}
            sizes="100vw"
            alt="精緻餐點擺盤"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background" />
        </div>

        {/* Hero Title */}
        <div className="absolute bottom-32 left-0 right-0 z-10 text-center">
          <h1 className="font-serif text-primary text-3xl md:text-4xl lg:text-5xl tracking-widest">
            餐飲體驗
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main id="main-content">
        {/* Philosophy Introduction Section */}
        <section className="py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-12">
              <p className="text-muted-foreground leading-[2.5] text-lg tracking-wide">
                本店嚴選純植物性及原形食物為出發，<br />
                堅持純手工制作，回歸天然飲食，<br />
                為我們的健康增添多一層保障，多一份安心。
              </p>
              <p className="text-muted-foreground leading-[2.5] text-lg tracking-wide">
                每日新鮮現煮五行蔬菜湯，在清洗食材浸泡及烹飪料理，<br />
                都經能量直飲水處理，讓您吃得無負擔、安心有能量！
              </p>
            </div>
          </div>
        </section>

        {/* 品悦・納幅 Section - Beige Background Left, Image Right */}
        <section className="relative w-full">
          <div className="flex flex-col md:flex-row h-auto md:min-h-[600px]">
            {/* Left Content Panel - Beige/Apricot Color */}
            <div className="w-full md:w-[35%] bg-zen-beige relative flex flex-col justify-between py-16 px-8 md:px-12">

              {/* Vertical Text Container */}
              <div className="flex-grow flex justify-center items-center">
                <div className="flex flex-col gap-16 py-8 md:py-12">
                  {/* Title Part - Top */}
                  <div className="flex justify-center">
                    <h2 className="writing-vertical-rl text-zen-green text-4xl md:text-5xl font-serif font-bold tracking-[0.2em] max-h-[300px]">
                      品悦・納幅
                    </h2>
                  </div>

                  {/* Description Part - Bottom */}
                  {/* Stacking paragraphs horizontally (side-by-side) within the bottom block */}
                  <div className="flex justify-center gap-3 text-zen-green text-sm md:text-base tracking-widest leading-loose">
                    <p className="writing-vertical-rl">嚴選當令珍饈，</p>
                    <p className="writing-vertical-rl">以細膩工序演繹四季流轉。</p>
                    <p className="writing-vertical-rl">每一口，</p>
                    <p className="writing-vertical-rl">都是對天地厚賜的歡喜接納，</p>
                    <p className="writing-vertical-rl">為身心注入圓滿的幸福能量。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Panel */}
            <div className="w-full md:w-[65%] h-[400px] md:h-auto relative">
              <img
                src={diningPinyue}
                srcSet={diningPinyueSrcSet}
                alt="品悦納幅精緻套餐"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* View More Button Section - Centered */}
        <section className="py-20 bg-white flex justify-center">
          <button
            onClick={() => setMenuOpen(true)}
            className="px-12 py-3 bg-zen-green text-white text-lg tracking-[0.2em]
                       hover:bg-zen-green-dark hover:shadow-lg
                       focus:outline-none focus:ring-2 focus:ring-zen-green focus:ring-offset-2
                       active:scale-[0.98] cursor-pointer
                       transition-all duration-300 motion-reduce:transition-none
                       rounded-sm shadow-md"
          >
            查看更多
          </button>
        </section>

        {/* 真味・日常 Section - True Taste */}
        <section className="relative w-full">
          <div className="flex flex-col md:flex-row h-auto md:min-h-[600px]">
            {/* Left Content Panel - Beige */}
            <div className="w-full md:w-[35%] bg-zen-beige relative flex flex-col justify-between py-16 px-8 md:px-12">
              <div className="flex-grow flex justify-center items-center">
                <div className="flex flex-col gap-16 py-8 md:py-12">
                  {/* Title */}
                  <div className="flex justify-center">
                    <h2 className="writing-vertical-rl text-zen-green text-4xl md:text-5xl font-serif font-bold tracking-[0.2em] max-h-[300px]">
                      真味・日常
                    </h2>
                  </div>
                  {/* Description */}
                  <div className="flex justify-center gap-3 text-muted-foreground text-sm md:text-base tracking-widest leading-loose">
                    <p className="writing-vertical-rl">以慢火熬煮的濃郁與歲月醃漬的甘醇，</p>
                    <p className="writing-vertical-rl">重現記憶中的溫暖滋味。</p>
                    <p className="writing-vertical-rl">這是一份撫慰身心的紮實陪伴，</p>
                    <p className="writing-vertical-rl">讓每一餐，</p>
                    <p className="writing-vertical-rl">都成為安心的歸屬。</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Image Panel */}
            <div className="w-full md:w-[65%] h-[400px] md:h-auto relative">
              <img
                src={diningTruetaste}
                srcSet={diningTruetasteSrcSet}
                alt="真味日常火鍋套餐"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* View More Button Section - Daily */}
        <section className="py-20 bg-white flex justify-center">
          <button
            onClick={() => setMenuOpen(true)}
            className="px-12 py-3 bg-zen-green text-white text-lg tracking-[0.2em]
                       hover:bg-zen-green-dark hover:shadow-lg
                       focus:outline-none focus:ring-2 focus:ring-zen-green focus:ring-offset-2
                       active:scale-[0.98] cursor-pointer
                       transition-all duration-300 motion-reduce:transition-none
                       rounded-sm shadow-md"
          >
            查看更多
          </button>
        </section>

        {/* 蘊火・炊香 Section - Simmering Fire */}
        <section className="relative w-full">
          <div className="flex flex-col md:flex-row h-auto md:min-h-[600px]">
            {/* Left Content Panel - Beige */}
            <div className="w-full md:w-[35%] bg-zen-beige relative flex flex-col justify-between py-16 px-8 md:px-12">
              <div className="flex-grow flex justify-center items-center">
                <div className="flex flex-col gap-16 py-8 md:py-12">
                  {/* Title */}
                  <div className="flex justify-center">
                    <h2 className="writing-vertical-rl text-zen-green text-4xl md:text-5xl font-serif font-bold tracking-[0.2em] max-h-[300px]">
                      蘊火・炊香
                    </h2>
                  </div>
                  {/* Description */}
                  <div className="flex justify-center gap-3 text-muted-foreground text-sm md:text-base tracking-widest leading-loose">
                    <p className="writing-vertical-rl">仿效古法土鍋炊飯，</p>
                    <p className="writing-vertical-rl">利用陶鍋燒製過程中產生的氣孔</p>
                    <p className="writing-vertical-rl">以及砂土的遠紅外線效果，</p>
                    <p className="writing-vertical-rl">可以使米飯在烹煮過程中溫度穩定、</p>
                    <p className="writing-vertical-rl">勻速的上升並達到良好的導熱，</p>
                    <p className="writing-vertical-rl">讓食材從裡到外徹底加熱。</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Image Panel */}
            <div className="w-full md:w-[65%] h-[400px] md:h-auto relative">
              <img
                src={diningFire}
                srcSet={diningFireSrcSet}
                alt="蘊火炊香砂鍋飯"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Reserve Button Section */}
        <section className="py-20 bg-white flex justify-center">
          <a
            href="https://lin.ee/97XgLRz"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-3 bg-zen-green text-white text-lg tracking-[0.2em]
                       hover:bg-zen-green-dark hover:shadow-lg
                       focus:outline-none focus:ring-2 focus:ring-zen-green focus:ring-offset-2
                       active:scale-[0.98] cursor-pointer
                       transition-all duration-300 motion-reduce:transition-none
                       rounded-sm shadow-md"
          >
            預約品享
          </a>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Menu Lightbox */}
      <MenuLightbox open={menuOpen} onOpenChange={setMenuOpen} />
    </div>
  );
};

export default Dining;
