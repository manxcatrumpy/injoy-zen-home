import { useSEO } from "@/hooks/useSEO";
import { SkipLink } from "@/components/SkipLink";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OrganicImage } from "@/components/OrganicImage";

// Import images with WebP fallback (src) and responsive srcSet
import leavesCloseup from "@/assets/leaves-closeup.png?w=800&format=webp";
import leavesCloseupSrcSet from "@/assets/leaves-closeup.png?w=400;800;1200;1600&format=webp&as=srcset";
import aboutPeople from "@/assets/about_people.png?w=800&format=webp";
import aboutPeopleSrcSet from "@/assets/about_people.png?w=400;800;1200;1600&format=webp&as=srcset";
import aboutThing from "@/assets/about_thing.png?w=800&format=webp";
import aboutThingSrcSet from "@/assets/about_thing.png?w=400;800;1200&format=webp&as=srcset";
import aboutObject from "@/assets/about_object.png?w=800&format=webp";
import aboutObjectSrcSet from "@/assets/about_object.png?w=400;800;1200&format=webp&as=srcset";
import aboutHeart from "@/assets/about_heart.png?w=800&format=webp";
import aboutHeartSrcSet from "@/assets/about_heart.png?w=400;800;1200&format=webp&as=srcset";

const About = () => {
  useSEO({
    title: "關於悦納｜人 · 事 · 物 · 心｜injoy 悦納",
    description: "認識悦納的品牌故事。以純淨、溫暖、手作為核心，從人、事、物、心四個面向，打造有生命的生活體驗。",
  });

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Skip Link for Accessibility */}
      <SkipLink />

      {/* Header */}
      <Header />

      {/* Hero Section - Ginkgo leaves background */}
      <section className="relative flex flex-col">
        {/* Background Image with fade effect */}
        <div className="relative h-[60vh] min-h-[400px]">
          <img
            src={leavesCloseup}
            srcSet={leavesCloseupSrcSet}
            sizes="100vw"
            alt="銀杏葉背景"
            className="w-full h-full object-cover"
          />
          {/* Bottom fade gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Hero Title - Below image, centered */}
        <div className="bg-background py-8 md:py-10">
          <h1 className="font-iansui text-primary text-3xl md:text-4xl lg:text-5xl tracking-[0.3em] text-center">
            關於悦納
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main id="main-content">
        {/* Section 1: 人 (People) - Ginkgo leaf image on left, text on right */}
        <section id="people" className="py-24 md:py-32 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 relative">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              {/* Left: Image */}
              <div className="w-full md:w-2/5 flex justify-center relative z-10">
                <OrganicImage
                  src={aboutPeople}
                  srcSet={aboutPeopleSrcSet}
                  alt="關於人"
                  variant="oval"
                  className="w-full max-w-sm mx-auto"
                />
              </div>

              {/* Right: Text with Background Character */}
              <div className="w-full md:w-3/5 text-left relative">
                {/* Background Character - Behind text */}
                <div className="absolute -top-16 -right-8 md:-right-16 pointer-events-none select-none">
                  <span className="text-[14rem] md:text-[18rem] font-serif text-primary/10 leading-none">
                    人
                  </span>
                </div>

                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-relaxed">
                    純淨，使身體深呼吸。
                    <br />
                    回歸本質，滋養每一位 會生活的生命。
                  </h2>

                  <p className="text-foreground/70 mb-6 leading-loose">
                    來到悦納，你會發現「純淨」其實很簡單，就是讓身體重新深呼吸。
                  </p>

                  <div className="text-foreground/80 leading-loose space-y-2">
                    <p>我們相信，每個人都值得為自己選擇更好的。</p>
                    <p>所以我們幫你把關，洗去多餘的負擔，留下食材最原本的美好。</p>
                    <p>在這裡，吃飯不只是填飽肚子，更是打開胸懷，感受大地的生命力，</p>
                    <p>成為與自然的連結，感受身心久違的輕盈與自由。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: 事 (Space) - Text on left with character behind, image on right */}
        <section id="space" className="py-24 md:py-32 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 relative">
            <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
              {/* Left: Text with Background Character */}
              <div className="w-full md:w-3/5 text-left md:text-right relative z-10">
                {/* Background Character - Behind text on left */}
                <div className="absolute -top-16 -left-8 md:-left-16 pointer-events-none select-none">
                  <span className="text-[14rem] md:text-[18rem] font-serif text-primary/10 leading-none">
                    事
                  </span>
                </div>

                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-relaxed">
                    空間，讓日常有溫度。
                    <br />
                    如家溫暖，陪你實踐 有生命的生活。
                  </h2>

                  <p className="text-foreground/70 mb-6 leading-loose">
                    我們常說，空間是生活的容器。
                    <br />
                    悦納想做的，就是個讓你覺得「像家」的地方。
                  </p>

                  <div className="text-foreground/80 leading-loose space-y-2">
                    <p>溫暖的色調、剛剛好的光線，</p>
                    <p>這裡的一切都在和你說：幸福不在遠方，</p>
                    <p>它在一碗熱湯的溫暖中、喝一杯茶的時光裡、</p>
                    <p>活在我們相視而笑的瞬間⋯</p>
                  </div>

                  <div className="text-foreground/60 mt-6 leading-loose">
                    <p>這些日常的、小小的互動與選擇，</p>
                    <p>都是我們活出一份有生命的生活樣貌。</p>
                    <p>家的溫度，始終來自我們共同創造的日常。</p>
                  </div>
                </div>
              </div>

              {/* Right: Image */}
              <div className="w-full md:w-2/5 flex justify-center relative z-10">
                <OrganicImage
                  src={aboutThing}
                  srcSet={aboutThingSrcSet}
                  alt="關於事"
                  variant="blob"
                  className="w-full max-w-sm mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: 物 (Food) - Image on left, text on right */}
        <section id="food" className="py-24 md:py-32 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 relative">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              {/* Left: Image - Family gathering */}
              <div className="w-full md:w-2/5 flex justify-center relative z-10">
                <OrganicImage
                  src={aboutObject}
                  srcSet={aboutObjectSrcSet}
                  alt="關於物"
                  variant="capsule-left"
                  className="w-full max-w-sm mx-auto"
                />
              </div>

              {/* Right: Text with Background Character */}
              <div className="w-full md:w-3/5 text-left relative">
                {/* Background Character - Behind text */}
                <div className="absolute -top-16 -right-8 md:-right-16 pointer-events-none select-none">
                  <span className="text-[14rem] md:text-[18rem] font-serif text-primary/10 leading-none">
                    物
                  </span>
                </div>

                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-relaxed">
                    料理，是時間的祝福。
                    <br />
                    簡單中見豐盛，心安，即是幸福歸處。
                  </h2>

                  <p className="text-foreground/70 mb-6 leading-loose">
                    這裡的料理，沒有捷徑，只有時間。
                  </p>

                  <div className="text-foreground/80 leading-loose space-y-2">
                    <p>我們慢火細熬，喚醒食物天然的風味；</p>
                    <p>用手作的溫度，傳遞一份想好好款待你的心意。</p>
                    <p>每道菜，都是對自然的感謝，也是對你身體的滋養。</p>
                    <p>我們希望你吃進去的，不只是營養，更是一份喜悅與祝福。</p>
                  </div>

                  <p className="text-foreground/60 mt-6 leading-loose">
                    簡單，但很豐盛；心安，就是幸福的歸處。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: 心 (Heart/Team) - Text on left with character behind, image on right */}
        <section id="heart" className="py-24 md:py-32 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 relative">
            <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
              {/* Left: Text with Background Character */}
              <div className="w-full md:w-3/5 text-left md:text-right relative z-10">
                {/* Background Character - Behind text on left */}
                <div className="absolute -top-16 -left-8 md:-left-16 pointer-events-none select-none">
                  <span className="text-[14rem] md:text-[18rem] font-serif text-primary/10 leading-none">
                    心
                  </span>
                </div>

                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-relaxed">
                    團隊，傳遞真摯溫度。
                    <br />
                    以誠相待，共建有生命的生活。
                  </h2>

                  <p className="text-foreground/70 mb-6 leading-loose">
                    如果說空間是家，料理是愛，那麼悦納團隊就是溫暖迎接大家的心。
                  </p>

                  <div className="text-foreground/80 leading-loose space-y-2">
                    <p>我們是群共同實踐「有生命的生活」的夥伴，</p>
                    <p>因為深刻體會著純淨飲食帶來的美好，</p>
                    <p>所以我們用心將這份幸福，傳遞給每一位來到悦納的你。</p>
                  </div>

                  <div className="text-foreground/60 mt-6 leading-loose space-y-2">
                    <p>在這裡，只有如家人般的真心款待。</p>
                    <p>每一次的「歡迎回家」，都蘊含著我們對人與自然最深的敬意。</p>
                    <p>我們期待透過真摯的交流、樸實且用心的服務，</p>
                    <p>成為連結【人】、【事】、【物】的橋樑。</p>
                    <p>讓你在悦納的每一刻，都能真切感受到純淨的美好。</p>
                  </div>
                </div>
              </div>

              {/* Right: Image */}
              <div className="w-full md:w-2/5 flex justify-center relative z-10">
                <OrganicImage
                  src={aboutHeart}
                  srcSet={aboutHeartSrcSet}
                  alt="悦納團隊合照"
                  variant="blob"
                  className="w-full max-w-sm mx-auto"
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

export default About;
