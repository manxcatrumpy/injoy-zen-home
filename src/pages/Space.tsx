import { SkipLink } from "@/components/SkipLink";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Import images with srcset for responsive loading
import restaurantInterior from "@/assets/restaurant-interior.png";
import restaurantInteriorSrcSet from "@/assets/restaurant-interior.png?w=600;1200;1800&format=webp&as=srcset";

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
          <h1 className="font-serif text-primary text-3xl md:text-4xl lg:text-5xl tracking-[0.3em] text-center">
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

        {/* Space Gallery Section - Bento Grid Layout */}
        <section className="py-8 px-4 md:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            {/* Bento Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {/* Large image - spans 2 columns and 2 rows */}
              <div className="col-span-1 md:col-span-2 row-span-2 aspect-square md:aspect-auto relative overflow-hidden rounded-lg">
                <SpaceImagePlaceholder className="w-full h-full" />
              </div>

              {/* Top right image */}
              <div className="col-span-1 md:col-span-2 aspect-[4/3] relative overflow-hidden rounded-lg">
                <SpaceImagePlaceholder className="w-full h-full" />
              </div>

              {/* Bottom row - 4 small images on mobile, 2 on the right side on desktop */}
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <SpaceImagePlaceholder className="w-full h-full" />
              </div>
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <SpaceImagePlaceholder className="w-full h-full" />
              </div>
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <SpaceImagePlaceholder className="w-full h-full" />
              </div>
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <SpaceImagePlaceholder className="w-full h-full" />
              </div>

              {/* Wide image at bottom */}
              <div className="col-span-2 aspect-[2/1] relative overflow-hidden rounded-lg">
                <SpaceImagePlaceholder className="w-full h-full" />
              </div>
              <div className="col-span-2 row-span-2 aspect-auto relative overflow-hidden rounded-lg">
                <SpaceImagePlaceholder className="w-full h-full min-h-[200px]" />
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

// Placeholder component for space images (to be replaced with actual images)
const SpaceImagePlaceholder = ({ className = "" }: { className?: string }) => (
  <div className={`bg-gradient-to-b from-sky-100 to-sky-50 flex items-end justify-center ${className}`}>
    {/* Rolling Hills SVG */}
    <svg
      viewBox="0 0 400 200"
      className="w-full h-auto"
      preserveAspectRatio="xMidYMax slice"
    >
      {/* Cloud */}
      <ellipse cx="280" cy="50" rx="40" ry="20" fill="white" opacity="0.9" />
      <ellipse cx="300" cy="45" rx="30" ry="15" fill="white" opacity="0.9" />
      <ellipse cx="260" cy="48" rx="25" ry="12" fill="white" opacity="0.9" />

      {/* Back hill - lighter green */}
      <path
        d="M0 200 Q100 100 200 140 Q300 180 400 120 L400 200 Z"
        fill="#6B8E4E"
      />

      {/* Front hill - darker green */}
      <path
        d="M0 200 Q80 140 160 170 Q240 200 320 160 Q380 130 400 150 L400 200 Z"
        fill="#4A7C3A"
      />
    </svg>
  </div>
);

export default Space;
