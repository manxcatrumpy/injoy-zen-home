import { Header } from "@/components/Header";
import { FlowingWave } from "@/components/FlowingWave";
import { HeroSection } from "@/components/HeroSection";
import { ContentSection } from "@/components/ContentSection";
import { OrganicImage } from "@/components/OrganicImage";
import { Footer } from "@/components/Footer";

// Import images
import leavesCloseup from "@/assets/leaves-closeup.jpg";
import tomatoHand from "@/assets/tomato-hand.jpg";
import restaurantInterior from "@/assets/restaurant-interior.jpg";
import teaCeremony from "@/assets/tea-ceremony.jpg";
import gatheringFriends from "@/assets/gathering-friends.jpg";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Background flowing wave decoration */}
      <FlowingWave />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Section 1: About */}
      <ContentSection
        id="about"
        number="01"
        title="關於悅納"
        subtitle="about"
        description={
          <>
            <p>
              悅納，把生活過成喜歡的樣子。
            </p>
            <p>
              這裡，提供身體需要的自在、如家一樣的溫馨心意，
              時間煮出的湯品。
            </p>
          </>
        }
        imageElement={
          <OrganicImage
            src={leavesCloseup}
            alt="陽光下的綠葉"
            variant="oval"
            className="w-full max-w-sm mx-auto aspect-[3/4]"
          />
        }
      />

      {/* Section 2: Dining */}
      <ContentSection
        id="dining"
        number="02"
        title="餐飲體驗"
        subtitle="dining"
        description={
          <>
            <p>
              感恩大自然帶給我們的美好！
            </p>
            <p>
              我們珍惜每一份食材，用心料理，讓每一口都能嚐到
              來自土地的真實滋味。
            </p>
          </>
        }
        imageElement={
          <OrganicImage
            src={tomatoHand}
            alt="手持新鮮番茄"
            variant="blob"
            className="w-full max-w-sm mx-auto aspect-square"
          />
        }
        reverse
      />

      {/* Section 3: Space */}
      <ContentSection
        id="space"
        number="03"
        title="人文空間"
        subtitle="space"
        description={
          <>
            <p>
              不論獨處或相聚，在如家的溫暖裡，
            </p>
            <p>
              陪你享健康、有愛的有生命的生活。
            </p>
          </>
        }
        imageElement={
          <OrganicImage
            src={restaurantInterior}
            alt="溫馨的用餐空間"
            variant="elongated"
            className="w-full max-w-xl mx-auto aspect-[2/1]"
          />
        }
      />

      {/* Section 4: Life */}
      <ContentSection
        id="life"
        number="04"
        title="生活美學"
        subtitle="life"
        description={
          <>
            <p>
              每一次相聚，都是生活美好的提案。
            </p>
            <p>
              在這裡，我們交換智慧，共育生命的律動。
            </p>
          </>
        }
        imageElement={
          <OrganicImage
            src={teaCeremony}
            alt="茶道儀式"
            variant="overlap"
            className="w-full max-w-sm mx-auto aspect-square"
          />
        }
        reverse
      />

      {/* Section 5: Shop */}
      <ContentSection
        id="shop"
        number="05"
        title="優質選物"
        subtitle="shop"
        description={
          <>
            <p>
              延續幸福的質地。
            </p>
            <p>
              讓悅納的純淨與心意，陪你回到日常，好好生活。
            </p>
          </>
        }
        imageElement={
          <OrganicImage
            src={gatheringFriends}
            alt="朋友們的歡樂聚會"
            variant="arch"
            className="w-full max-w-sm mx-auto aspect-[3/4]"
          />
        }
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
