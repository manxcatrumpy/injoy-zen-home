import { ChevronDown } from "lucide-react";
import heroCafeWebp from "@/assets/hero-cafe.png?w=1600&format=webp";
import heroCafeSrcSet from "@/assets/hero-cafe.png?w=800;1600;2400&format=webp&as=srcset";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroCafeWebp}
          srcSet={heroCafeSrcSet}
          sizes="100vw"
          alt="Injoy 悦納 明亮溫馨的空間"
          className="w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/70" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1
          className="font-iansui text-primary text-2xl md:text-3xl lg:text-4xl leading-relaxed max-w-2xl mx-auto"
          style={{ textShadow: '0 1px 8px hsl(50 20% 96% / 0.6)' }}
        >
          <span className="block mb-2">滋養會生活的生命</span>
          <span className="block mb-2">實踐有生命的生活</span>
          <span className="block text-lg md:text-xl lg:text-2xl mt-6 font-light">
            悦納，隨時歡迎你回家
          </span>
        </h1>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary/80 hover:text-primary transition-colors group"
      >
        <span className="text-xs font-sans tracking-widest">探索</span>
        <ChevronDown 
          size={24} 
          className="animate-bounce-gentle group-hover:translate-y-1 transition-transform" 
        />
      </a>
    </section>
  );
};
