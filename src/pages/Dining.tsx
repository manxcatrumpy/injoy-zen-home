import { SkipLink } from "@/components/SkipLink";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Import images with srcset for responsive loading
import diningHero from "@/assets/dining-hero.jpg";
import diningHeroSrcSet from "@/assets/dining-hero.jpg?w=600;1200;1800&format=webp&as=srcset";
import diningPinyue from "@/assets/dining-pinyue.png";
import diningPinyueSrcSet from "@/assets/dining-pinyue.png?w=600;1200;1800&format=webp&as=srcset";
// TODO: Replace with actual dining images when available
import tomatoHand from "@/assets/tomato-hand.jpg";
import tomatoHandSrcSet from "@/assets/tomato-hand.jpg?w=600;1200;1800&format=webp&as=srcset";

const Dining = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Skip Link for Accessibility */}
      <SkipLink />

      {/* Header */}
      <Header />

      {/* Hero Section - Full-width food image with gradient fade to background */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={diningHero}
            srcSet={diningHeroSrcSet}
            sizes="100vw"
            alt="精緻餐點擺盤"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background" />
        </div>

        {/* Hero Title - Positioned at bottom center */}
        <div className="absolute bottom-32 left-0 right-0 z-10 text-center">
          <h1 className="font-serif text-primary text-3xl md:text-4xl lg:text-5xl tracking-widest">
            餐飲體驗
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main id="main-content">
        {/* Philosophy Introduction Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-foreground/80 leading-loose text-base md:text-lg mb-8">
              本店嚴選純植物性及原形食物為出發，
              <br />
              堅持純手工制作，回歸天然飲食，
              <br />
              為我們的健康增添多一層保障，多一份安心。
            </p>
            <p className="text-foreground/70 leading-loose text-base md:text-lg">
              每日新鮮現煮五行蔬菜湯，在清洗食材浸泡及烹飪料理，
              <br />
              都經能量直飲水處理，讓您吃得無負擔、安心有能量！
            </p>
          </div>
        </section>

        {/* 品悦・納幅 Section - Fine Dining Zen Style */}
        <section className="relative overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left: Cream/Beige background with vertical text - 30% */}
            <div
              className="w-full md:w-[30%] flex items-end justify-center py-16 md:py-0 px-4 md:px-6 order-2 md:order-1"
              style={{ backgroundColor: '#F3E9D9' }}
            >
              <div className="flex flex-row items-end justify-center gap-4 md:gap-3 pb-10 md:pb-14">
                {/* Vertical Title - Forest Green, rightmost */}
                <h2
                  className="text-2xl md:text-3xl font-serif tracking-[0.3em] writing-vertical-rl"
                  style={{ color: '#1A4D2E' }}
                >
                  品悦・納幅
                </h2>

                {/* Vertical Description Text - Multiple columns, right to left */}
                <div
                  className="flex flex-row gap-2 md:gap-1.5 text-xs md:text-sm leading-relaxed"
                  style={{ color: '#1A4D2E', opacity: 0.7 }}
                >
                  <p className="writing-vertical-rl font-serif">嚴選當令珍饈，</p>
                  <p className="writing-vertical-rl font-serif">以細膩工序演繹四季流轉。</p>
                  <p className="writing-vertical-rl font-serif">每一口，</p>
                  <p className="writing-vertical-rl font-serif">都是對天地厚賜的歡喜接納，</p>
                  <p className="writing-vertical-rl font-serif">為身心注入圓滿的幸福能量。</p>
                </div>
              </div>
            </div>

            {/* Right: Food image - 70% width, white/clean background feel */}
            <div className="w-full md:w-[70%] order-1 md:order-2 overflow-hidden bg-white">
              <img
                src={diningPinyue}
                srcSet={diningPinyueSrcSet}
                sizes="(max-width: 768px) 100vw, 70vw"
                alt="品悦納幅精緻套餐"
                className="w-full h-auto object-cover object-center"
              />
            </div>
          </div>

          {/* More Button - Centered below */}
          <div className="text-center py-12 bg-background">
            <a
              href="#dining-menu"
              className="inline-flex items-center justify-center px-8 py-3 border-2 text-sm tracking-widest hover:text-white transition-colors cursor-pointer font-sans"
              style={{
                borderColor: '#1A4D2E',
                color: '#1A4D2E',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1A4D2E';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#1A4D2E';
              }}
            >
              查看更多
            </a>
          </div>
        </section>

        {/* 真味・日常 Section - Warm background */}
        <section className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: '#f5ecd9' }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col-reverse md:flex-row items-stretch gap-8 md:gap-0">
              {/* Left: Vertical Text */}
              <div className="w-full md:w-2/5 flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-6">
                {/* Vertical Title */}
                <div className="flex flex-row md:flex-col items-center gap-2">
                  <h2 className="text-primary text-2xl md:text-3xl font-serif tracking-widest writing-vertical md:writing-vertical-rl">
                    真味・日常
                  </h2>
                </div>

                {/* Vertical Description Text */}
                <div className="flex flex-row md:flex-col gap-4 md:gap-2 text-foreground/70 text-sm leading-relaxed">
                  <p className="writing-vertical md:writing-vertical-rl">以慢火熬煮的濃郁與歲月醃漬的甘醇，</p>
                  <p className="writing-vertical md:writing-vertical-rl">重現記憶中的溫暖滋味。</p>
                  <p className="writing-vertical md:writing-vertical-rl">這是一份撫慰身心的紮實陪伴，</p>
                  <p className="writing-vertical md:writing-vertical-rl">讓每一餐，</p>
                  <p className="writing-vertical md:writing-vertical-rl">都成為安心的歸屬。</p>
                </div>
              </div>

              {/* Right: Food Image */}
              <div className="w-full md:w-3/5">
                <div className="relative">
                  <img
                    src={tomatoHand}
                    srcSet={tomatoHandSrcSet}
                    sizes="(max-width: 768px) 100vw, 60vw"
                    alt="日常套餐"
                    className="w-full h-auto object-cover rounded-lg shadow-organic"
                  />
                </div>
              </div>
            </div>

            {/* More Button */}
            <div className="text-center mt-12">
              <a
                href="#daily-menu"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-sans text-sm tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                查看更多
              </a>
            </div>
          </div>
        </section>

        {/* 蘊火・炊香 Section - Green background */}
        <section className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: '#3d5a4c' }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col-reverse md:flex-row items-stretch gap-8 md:gap-0">
              {/* Left: Vertical Text */}
              <div className="w-full md:w-2/5 flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-6">
                {/* Vertical Title */}
                <div className="flex flex-row md:flex-col items-center gap-2">
                  <h2 className="text-[#f5ecd9] text-2xl md:text-3xl font-serif tracking-widest writing-vertical md:writing-vertical-rl">
                    蘊火・炊香
                  </h2>
                </div>

                {/* Vertical Description Text */}
                <div className="flex flex-row md:flex-col gap-4 md:gap-2 text-[#f5ecd9]/80 text-sm leading-relaxed">
                  <p className="writing-vertical md:writing-vertical-rl">仿效古法土鍋炊飯，</p>
                  <p className="writing-vertical md:writing-vertical-rl">利用陶鍋燒製過程中產生的氣孔</p>
                  <p className="writing-vertical md:writing-vertical-rl">以及砂土的遠紅外線效果，</p>
                  <p className="writing-vertical md:writing-vertical-rl">可以使米飯在烹煮過程中溫度穩定、</p>
                  <p className="writing-vertical md:writing-vertical-rl">勻速的上升並達到良好的導熱，</p>
                  <p className="writing-vertical md:writing-vertical-rl">讓食材從裡到外徹底加熱。</p>
                </div>
              </div>

              {/* Right: Food Image */}
              <div className="w-full md:w-3/5">
                <div className="relative">
                  <img
                    src={tomatoHand}
                    srcSet={tomatoHandSrcSet}
                    sizes="(max-width: 768px) 100vw, 60vw"
                    alt="砂鍋粥"
                    className="w-full h-auto object-cover rounded-lg shadow-organic"
                  />
                </div>
              </div>
            </div>

            {/* Reserve Button */}
            <div className="text-center mt-12">
              <a
                href="https://lin.ee/97XgLRz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#f5ecd9] text-[#f5ecd9] font-sans text-sm tracking-widest hover:bg-[#f5ecd9] hover:text-[#3d5a4c] transition-colors"
              >
                預約品享
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dining;
