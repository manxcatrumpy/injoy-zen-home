import { SkipLink } from "@/components/SkipLink";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Import images with srcset for responsive loading
import signboard from "@/assets/signboard.png";
import signboardSrcSet from "@/assets/signboard.png?w=600;1200;1800&format=webp&as=srcset";

const Location = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden font-sans">
      {/* Skip Link for Accessibility */}
      <SkipLink />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={signboard}
            srcSet={signboardSrcSet}
            sizes="100vw"
            alt="悦納招牌"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background" />
        </div>

        {/* Hero Title */}
        <div className="absolute bottom-32 left-0 right-0 z-10 text-center">
          <h1 className="font-serif text-primary text-3xl md:text-4xl lg:text-5xl tracking-widest">
            交通資訊
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main id="main-content">
        {/* Map and Info Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            {/* Google Map Embed */}
            <div className="w-full max-w-md mx-auto aspect-square rounded-lg overflow-hidden shadow-lg mb-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.5!2d121.4647!3d25.0247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9a0a0a0a0a0%3A0x0!2zMjXCsDAxJzI5LjAiTiAxMjHCsDI3JzUzLjAiRQ!5e0!3m2!1szh-TW!2stw!4v1600000000000!5m2!1szh-TW!2stw"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="悦納蔬食生活館地圖"
                className="w-full h-full"
              />
            </div>

            {/* Address Info */}
            <div className="text-center space-y-6">
              {/* Address */}
              <div>
                <p className="text-foreground font-medium text-lg tracking-wide">
                  新北市板橋區文聖街131號
                </p>
                <p className="text-muted-foreground text-base tracking-wide mt-1">
                  近捷運江子翠站（步行 10-15 分鐘）
                </p>
              </div>

              {/* Phone */}
              <p className="text-muted-foreground italic tracking-wider">
                tel. +886-2-2250-0166
              </p>

              {/* Business Hours */}
              <div className="pt-4">
                <p className="text-foreground font-medium text-base tracking-wide mb-3">
                  營業時間
                </p>
                <div className="text-muted-foreground text-base space-y-1">
                  <p>午餐 11:30-14:00</p>
                  <p>午茶 14:30-16:30</p>
                  <p>晚餐 17:30-20:00</p>
                  <p className="mt-2">（週三公休）</p>
                </div>
              </div>

              {/* Welcome Message */}
              <p className="text-primary font-serif text-xl md:text-2xl tracking-widest pt-8">
                悦納，隨時歡迎你回家坐坐
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Location;
