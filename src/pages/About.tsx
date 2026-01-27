import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OrganicImage } from "@/components/OrganicImage";

// Import images - using existing assets where available
import leavesCloseup from "@/assets/leaves-closeup.png";
import restaurantInterior from "@/assets/restaurant-interior.png";
import gatheringFriends from "@/assets/gathering-friends.png";

const About = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section - Ginkgo leaves background */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={leavesCloseup}
            alt="銀杏葉背景"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background" />
        </div>


        {/* Reservation Button */}
        <a
          href="#reservation"
          className="absolute top-6 right-6 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors shadow-organic"
        >
          預約
        </a>
      </section>

      {/* Section 1: 人 (People) - Ginkgo leaf image on left, text on right */}
      <section id="people" className="py-24 md:py-32 relative">
        {/* Background Character */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[20rem] font-serif text-muted/10 pointer-events-none select-none hidden lg:block leading-none">
          人
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* Left: Image */}
            <div className="w-full md:w-2/5 flex justify-center">
              <OrganicImage
                src={leavesCloseup}
                alt="銀杏葉"
                variant="oval"
                className="w-full max-w-xl mx-auto"
              />
            </div>

            {/* Right: Text */}
            <div className="w-full md:w-3/5 text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-relaxed">
                純淨，使身體深呼吸。
                <br />
                回歸本質，滋養每一位 會生活的生命。
              </h2>

              <p className="text-foreground/70 mb-6 leading-loose">
                來到悅納，你會發現「純淨」其實很簡單，就是讓身體重新深呼吸。
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
      </section>

      {/* Section 2: 事 (Space) - Text on left, image on right */}
      <section id="space" className="py-24 md:py-32 relative">
        {/* Background Character */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[20rem] font-serif text-muted/10 pointer-events-none select-none hidden lg:block leading-none">
          事
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-12">
            {/* Left: Text */}
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-relaxed">
                空間，讓日常有溫度。
                <br />
                如家溫暖，陪你實踐 有生命的生活。
              </h2>

              <p className="text-foreground/70 mb-6 leading-loose">
                我們常說，空間是生活的容器。
                <br />
                悅納想做的，就是個讓你覺得「像家」的地方。
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

            {/* Right: Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <OrganicImage
                src={restaurantInterior}
                alt="溫馨的用餐空間"
                variant="blob"
                className="w-full max-w-xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: 物 (Food) - Image on left, text on right */}
      <section id="food" className="py-24 md:py-32 relative">
        {/* Background Character */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[20rem] font-serif text-muted/10 pointer-events-none select-none hidden lg:block leading-none">
          物
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-12">
            {/* Left: Image - Family gathering */}
            <div className="w-full md:w-1/2 flex justify-center">
              <OrganicImage
                src={gatheringFriends}
                alt="家人朋友聚餐"
                variant="capsule-left"
                className="w-full max-w-2xl mx-auto"
              />
            </div>

            {/* Right: Text */}
            <div className="w-full md:w-1/2 text-left">
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
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
