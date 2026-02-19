import { useState } from "react";
import { Phone } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { SkipLink } from "@/components/SkipLink";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MenuLightbox } from "@/components/MenuLightbox";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

// Import images with WebP fallback (src) and responsive srcSet
import diningHero from "@/assets/dining-hero.jpg?w=1200&format=webp";
import diningHeroSrcSet from "@/assets/dining-hero.jpg?w=600;1200;1800&format=webp&as=srcset";
import fineDiningMenu from "@/assets/fine-dining.png?w=1200&format=webp";
import diningPinyue from "@/assets/dining-pinyue.png?w=1200&format=webp";
import diningPinyueSrcSet from "@/assets/dining-pinyue.png?w=600;1200;1800&format=webp&as=srcset";
// 真味・日常 section image
import diningTruetaste from "@/assets/dining-truetaest.png?w=1200&format=webp";
import diningTruetasteSrcSet from "@/assets/dining-truetaest.png?w=600;1200;1800&format=webp&as=srcset";
// 蘊火・炊香 section image
import diningFire from "@/assets/dining-fire.png?w=1200&format=webp";
import diningFireSrcSet from "@/assets/dining-fire.png?w=600;1200;1800&format=webp&as=srcset";

const Dining = () => {
  useSEO({
    title: "餐飲體驗｜精緻套餐 · 火鍋 · 砂鍋飯｜injoy 悦納",
    description: "品悦納福精緻套餐、真味日常火鍋、蘊火炊香砂鍋飯。慢火細熬的純淨蔬食料理，用時間與手作溫度款待每一位客人。",
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [fineDiningOpen, setFineDiningOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden font-sans">
      {/* Skip Link for Accessibility */}
      <SkipLink />

      {/* Header */}
      <Header />

      {/* Hero Section - Consistent with About page design */}
      <section className="relative flex flex-col">
        {/* Background Image with fade effect */}
        <div className="relative h-[60vh] min-h-[400px]">
          <img
            src={diningHero}
            srcSet={diningHeroSrcSet}
            sizes="100vw"
            alt="精緻餐點擺盤"
            className="w-full h-full object-cover"
          />
          {/* Bottom fade gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Hero Title - Below image, centered */}
        <div className="bg-background py-8 md:py-10">
          <h1 className="font-iansui text-primary text-3xl md:text-4xl lg:text-5xl tracking-[0.3em] text-center">
            餐飲體驗
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

        {/* 品悦・納福 Section - Beige Background Left, Image Right */}
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
                      品悦・納福
                    </h2>
                  </div>

                  {/* Description Part - Bottom */}
                  {/* Stacking paragraphs horizontally (side-by-side) within the bottom block */}
                  <div className="flex flex-row-reverse flex-wrap justify-center gap-3 text-zen-green text-sm md:text-base tracking-widest leading-loose overflow-hidden">
                    <p className="writing-vertical-rl max-h-[50vh] md:max-h-[350px]">嚴選當令珍饈，</p>
                    <p className="writing-vertical-rl max-h-[50vh] md:max-h-[350px]">以細膩工序演繹四季流轉。</p>
                    <p className="writing-vertical-rl max-h-[50vh] md:max-h-[350px]">每一口，</p>
                    <p className="writing-vertical-rl max-h-[50vh] md:max-h-[350px]">都是對天地厚賜的歡喜接納，</p>
                    <p className="writing-vertical-rl max-h-[50vh] md:max-h-[350px]">為身心注入圓滿的幸福能量。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Panel */}
            <div className="w-full md:w-[65%] h-[400px] md:h-auto relative">
              <img
                src={diningPinyue}
                srcSet={diningPinyueSrcSet}
                alt="品悦納福精緻套餐"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* View More Button Section - Centered */}
        <section className="py-20 bg-background flex justify-center">
          <div className="flex flex-col items-center gap-3">
            <span className="text-foreground font-serif text-2xl md:text-3xl tracking-[0.2em]">精緻套餐</span>
            <button
              onClick={() => setFineDiningOpen(true)}
              className="px-12 py-3 bg-zen-green text-white text-lg tracking-[0.2em]
                         hover:bg-zen-green-dark hover:shadow-lg
                         focus:outline-none focus:ring-2 focus:ring-zen-green focus:ring-offset-2
                         active:scale-[0.98] cursor-pointer
                         transition-all duration-300 motion-reduce:transition-none
                         rounded-sm shadow-md"
            >
              查看更多
            </button>
          </div>
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
                  <div className="flex flex-row-reverse flex-wrap justify-center gap-3 text-muted-foreground text-sm md:text-base tracking-widest leading-loose overflow-hidden">
                    <p className="writing-vertical-rl max-h-[50vh] md:max-h-[350px]">以慢火熬煮的濃郁與歲月醃漬的甘醇，</p>
                    <p className="writing-vertical-rl max-h-[50vh] md:max-h-[350px]">重現記憶中的溫暖滋味。</p>
                    <p className="writing-vertical-rl max-h-[50vh] md:max-h-[350px]">這是一份撫慰身心的紮實陪伴，</p>
                    <p className="writing-vertical-rl max-h-[50vh] md:max-h-[350px]">讓每一餐，</p>
                    <p className="writing-vertical-rl max-h-[50vh] md:max-h-[350px]">都成為安心的歸屬。</p>
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
        <section className="py-20 bg-background flex justify-center">
          <div className="flex flex-col items-center gap-3">
            <span className="text-foreground font-serif text-2xl md:text-3xl tracking-[0.2em]">常態套餐</span>
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
          </div>
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
                  <div className="flex flex-row-reverse flex-wrap justify-center gap-3 text-muted-foreground text-sm md:text-base tracking-widest leading-loose overflow-hidden">
                    <p className="writing-vertical-rl max-h-[50vh] md:max-h-[350px]">仿效古法土鍋炊飯，</p>
                    <p className="writing-vertical-rl max-h-[50vh] md:max-h-[350px]">利用陶鍋燒製過程中產生的氣孔</p>
                    <p className="writing-vertical-rl max-h-[50vh] md:max-h-[350px]">以及砂土的遠紅外線效果，</p>
                    <p className="writing-vertical-rl max-h-[50vh] md:max-h-[350px]">可以使米飯在烹煮過程中溫度穩定、</p>
                    <p className="writing-vertical-rl max-h-[50vh] md:max-h-[350px]">勻速的上升並達到良好的導熱，</p>
                    <p className="writing-vertical-rl max-h-[50vh] md:max-h-[350px]">讓食材從裡到外徹底加熱。</p>
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
        <section className="py-20 bg-background flex justify-center">
          <Popover>
            <PopoverTrigger asChild>
              <button
                className="px-12 py-3 bg-zen-green text-white text-lg tracking-[0.2em]
                           hover:bg-zen-green-dark hover:shadow-lg
                           focus:outline-none focus:ring-2 focus:ring-zen-green focus:ring-offset-2
                           active:scale-[0.98] cursor-pointer
                           transition-all duration-300 motion-reduce:transition-none
                           rounded-sm shadow-md"
              >
                預約品享
              </button>
            </PopoverTrigger>
            <PopoverContent
              sideOffset={12}
              className="w-auto rounded-lg border-primary/20 bg-popover/95 backdrop-blur-sm px-6 py-4 shadow-organic"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-muted-foreground text-xs tracking-widest">
                  電話預約
                </span>
                <a
                  href="tel:+886-2-2250-0166"
                  className="flex items-center gap-2 text-primary font-serif text-lg tracking-wider
                             hover:text-zen-green transition-colors"
                >
                  <Phone size={16} strokeWidth={1.5} />
                  02-2250-0166
                </a>
              </div>
            </PopoverContent>
          </Popover>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Menu Lightbox - 常態套餐 */}
      <MenuLightbox open={menuOpen} onOpenChange={setMenuOpen} />

      {/* Fine Dining Lightbox - 精緻套餐 */}
      <Dialog open={fineDiningOpen} onOpenChange={setFineDiningOpen}>
        <DialogContent className="max-w-[95vw] md:max-w-[85vw] lg:max-w-[75vw] h-[90vh] p-0 bg-zen-beige/95 backdrop-blur-sm border-none overflow-hidden flex items-center justify-center">
          <VisuallyHidden>
            <DialogTitle>精緻套餐菜單</DialogTitle>
          </VisuallyHidden>
          <img
            src={fineDiningMenu}
            alt="精緻套餐菜單"
            className="max-w-full max-h-full object-contain shadow-2xl"
            draggable={false}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dining;
