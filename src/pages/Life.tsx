import { SkipLink } from "@/components/SkipLink";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Import images with srcset for responsive loading
import teaCeremony from "@/assets/tea-ceremony.jpg";
import teaCeremonySrcSet from "@/assets/tea-ceremony.jpg?w=600;1200;1800&format=webp&as=srcset";

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
            src={teaCeremony}
            srcSet={teaCeremonySrcSet}
            sizes="100vw"
            alt="茶道美學"
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

        {/* Life Gallery Section - Bento Grid Layout */}
        <section className="py-8 px-4 md:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            {/* Bento Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {/* Large image - spans 2 columns and 2 rows */}
              <div className="col-span-1 md:col-span-2 row-span-2 aspect-square md:aspect-auto relative overflow-hidden rounded-lg">
                <LifeImagePlaceholder className="w-full h-full" />
              </div>

              {/* Top right image */}
              <div className="col-span-1 md:col-span-2 aspect-[4/3] relative overflow-hidden rounded-lg">
                <LifeImagePlaceholder className="w-full h-full" />
              </div>

              {/* Bottom row - 4 small images on mobile, 2 on the right side on desktop */}
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <LifeImagePlaceholder className="w-full h-full" />
              </div>
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <LifeImagePlaceholder className="w-full h-full" />
              </div>
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <LifeImagePlaceholder className="w-full h-full" />
              </div>
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <LifeImagePlaceholder className="w-full h-full" />
              </div>

              {/* Wide image at bottom */}
              <div className="col-span-2 aspect-[2/1] relative overflow-hidden rounded-lg">
                <LifeImagePlaceholder className="w-full h-full" />
              </div>
              <div className="col-span-2 row-span-2 aspect-auto relative overflow-hidden rounded-lg">
                <LifeImagePlaceholder className="w-full h-full min-h-[200px]" />
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

// Placeholder component for life images (to be replaced with actual images)
const LifeImagePlaceholder = ({ className = "" }: { className?: string }) => (
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

export default Life;
