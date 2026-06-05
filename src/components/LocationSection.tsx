import { ChevronDown, Clock, MapPin, Phone } from "lucide-react";
import signboard from "@/assets/signboard.png?w=800&format=webp";
import {
  BUSINESS_HOURS,
  CLOSED_DAYS,
  PHONE_DISPLAY,
  PHONE_TEL_HREF,
} from "@/lib/businessInfo";

export const LocationSection = () => {
  return (
    <section id="location" className="py-20 relative z-10 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Location Section */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-primary text-xl mb-8">地理位置</h2>

          <div className="space-y-3 text-foreground/80 font-sans text-base">
            <p className="flex items-center justify-center gap-2">
              <MapPin size={16} className="text-primary shrink-0" />
              新北市板橋區文聖街131號
            </p>
            <p className="text-muted-foreground text-sm">
              近捷運江子翠站（步行 10-12 分鐘）
            </p>
            <a
              href={PHONE_TEL_HREF}
              className="inline-flex items-center justify-center gap-2 py-1 text-primary hover:text-zen-green transition-colors"
            >
              <Phone size={16} strokeWidth={1.5} className="shrink-0" />
              {PHONE_DISPLAY}
            </a>
            <div className="space-y-1 pt-2">
              <p className="flex items-center justify-center gap-2 text-foreground/80">
                <Clock size={16} strokeWidth={1.5} className="text-primary shrink-0" />
                營業時間
              </p>
              {BUSINESS_HOURS.map(({ label, time }) => (
                <p key={label} className="text-muted-foreground">
                  {label} {time}
                </p>
              ))}
              <p className="text-muted-foreground text-sm">（{CLOSED_DAYS}公休）</p>
            </div>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="max-w-2xl mx-auto mb-12 rounded-lg overflow-hidden shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.5!2d121.47822!3d25.028745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a94d17bc0517%3A0x88c1a24b258f67f7!2z5oKF57SN6JSt6aOf55Sf5rS76aSo!5e0!3m2!1szh-TW!2stw!4v1706400000000!5m2!1szh-TW!2stw"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="悦納蔬食生活館地圖"
          />
        </div>

        {/* Signboard Photo */}
        <div className="max-w-2xl mx-auto mb-12">
          <img
            src={signboard}
            alt="悦納招牌"
            className="w-full h-auto rounded-sm"
          />
        </div>

        {/* Tagline */}
        <p className="text-center font-serif text-primary text-lg mb-8">
          悦納，隨時歡迎你回家坐坐。
        </p>

        {/* Arrow */}
        <div className="flex justify-center text-primary/40">
          <ChevronDown size={28} strokeWidth={1.5} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};
