import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SkipLink } from "@/components/SkipLink";
import { Header } from "@/components/Header";
import { FlowingWave } from "@/components/FlowingWave";
import { HeroSection } from "@/components/HeroSection";
import { ContentSection } from "@/components/ContentSection";
import { OrganicImage } from "@/components/OrganicImage";
import { LocationSection } from "@/components/LocationSection";
import { Footer } from "@/components/Footer";

// Import images with srcset for responsive loading
// Format: ?w=sizes&format=webp&as=srcset generates multiple sizes in WebP format
import leavesCloseup from "@/assets/leaves-closeup.png";
import leavesCloseupSrcSet from "@/assets/leaves-closeup.png?w=400;800;1200&format=webp&as=srcset";
import tomatoHand from "@/assets/tomato-hand.jpg";
import tomatoHandSrcSet from "@/assets/tomato-hand.jpg?w=400;800;1200&format=webp&as=srcset";
import restaurantInterior from "@/assets/restaurant-interior.png";
import restaurantInteriorSrcSet from "@/assets/restaurant-interior.png?w=600;1200;1800&format=webp&as=srcset";
import teaCeremony from "@/assets/tea-ceremony.jpg";
import teaCeremonySrcSet from "@/assets/tea-ceremony.jpg?w=400;800;1200&format=webp&as=srcset";
import gatheringFriends from "@/assets/gathering-friends.png";
import gatheringFriendsSrcSet from "@/assets/gathering-friends.png?w=400;800;1200&format=webp&as=srcset";

const Index = () => {
  const location = useLocation();

  // Handle hash navigation when coming from other pages
  useEffect(() => {
    if (location.hash) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Skip Link for Accessibility */}
      <SkipLink />

      {/* Background flowing wave decoration */}
      <FlowingWave />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <main id="main-content">
        {/* Section 1: About - Center layout with image in middle */}
        <ContentSection
          id="about"
          number="01"
          title="關於悦納"
          subtitle="about"
          layoutVariant="center"
          moreLink="/about"
          description={
            <>
              悦納，把生活過成喜歡的樣子
              <br /><br />
              選擇，提供身體需要的
              <br />
              自在，如家一樣的溫馨
              <br />
              心意，時間熬出的清甜
            </>
          }
          imageElement={
            <OrganicImage
              src={leavesCloseup}
              srcSet={leavesCloseupSrcSet}
              alt="陽光下的綠葉"
              variant="oval"
              className="w-full max-w-sm mx-auto"
            />
          }
        />

        {/* Section 2: Dining - Image on right, text on left */}
        <ContentSection
          id="dining"
          number="02"
          title="餐飲體驗"
          subtitle="Dining"
          layoutVariant="image-right"
          moreLink="/dining"
          description={
            <>
              感恩大自然帶給我們的美好！
              <br />
              每一口，都是與土地的對話，
              <br />
              純粹、天然，回歸本真。
            </>
          }
          imageElement={
            <OrganicImage
              src={tomatoHand}
              srcSet={tomatoHandSrcSet}
              alt="手持新鮮番茄"
              variant="blob"
              className="w-full max-w-sm mx-auto"
            />
          }
        />

        {/* Section 3: Space - Wide image on left, text on right */}
        <ContentSection
          id="space"
          number="03"
          title="人文空間"
          subtitle="Space"
          layoutVariant="image-left-wide"
          moreLink="/space"
          description={
            <>
              不論獨處或相聚，
              <br />
              在如家的溫暖裡，
              <br />
              陪你實踐健康、有愛的
              <br />
              有生命的生命。
            </>
          }
          imageElement={
            <OrganicImage
              src={restaurantInterior}
              srcSet={restaurantInteriorSrcSet}
              sizes="(max-width: 768px) 100vw, 60vw"
              alt="溫馨的用餐空間"
              variant="capsule-left"
              className="w-full max-w-sm mx-auto"
            />
          }
        />

        {/* Section 4: Life - Image on right, text on left */}
        <ContentSection
          id="life"
          number="04"
          title="生活美學"
          subtitle="Life"
          layoutVariant="image-right"
          moreLink="/life"
          description={
            <>
              每一次相聚，
              <br />
              都是生活美好的提案。
              <br /><br />
              在這裡，我們交換智慧，
              <br />
              共寫生命的律動。
            </>
          }
          imageElement={
            <OrganicImage
              src={teaCeremony}
              srcSet={teaCeremonySrcSet}
              alt="茶道儀式"
              variant="overlap"
              className="w-full max-w-sm mx-auto"
            />
          }
        />

        {/* Section 5: Shop - Overlay layout with text beside image */}
        <ContentSection
          id="shop"
          number="05"
          title="優質選物"
          subtitle="Shop"
          layoutVariant="overlay"
          moreLink="/shop"
          description={
            <>
              延續幸福的質地。
              <br /><br />
              讓悦納的純淨與心意，
              <br />
              陪你回到日常，好好生活。
            </>
          }
          imageElement={
            <OrganicImage
              src={gatheringFriends}
              srcSet={gatheringFriendsSrcSet}
              alt="朋友們的歡樂聚會"
              variant="blob"
              className="w-full max-w-sm mx-auto"
            />
          }
        />

        {/* Location Section */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
