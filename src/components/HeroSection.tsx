import { ChevronDown } from "lucide-react";
import heroCafe from "@/assets/hero-cafe.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroCafe}
          alt="Injoy 悅納 明亮溫馨的空間"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background/60" />
      </div>

      {/* Decorative Logo Element - Top Right */}
      <div className="absolute top-24 right-8 lg:right-16 opacity-30">
        <div className="font-serif text-primary text-6xl lg:text-8xl font-light italic tracking-widest">
          悅納
        </div>
        <div className="font-serif text-primary/60 text-2xl lg:text-3xl italic -mt-2">
          injoy
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="font-serif text-primary text-2xl md:text-3xl lg:text-4xl leading-relaxed max-w-2xl mx-auto">
          <span className="block mb-2">滋養會生活的生命，</span>
          <span className="block mb-2">實踐有生命的生活。</span>
          <span className="block text-lg md:text-xl lg:text-2xl mt-6 font-light">
            悅納，隨時歡迎你回家。
          </span>
        </h1>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary/60 hover:text-primary transition-colors group"
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
