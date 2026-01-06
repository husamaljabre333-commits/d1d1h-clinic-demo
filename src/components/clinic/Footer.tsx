import { clinicInfo } from "./data";

export default function Footer() {
  return (
<footer className="mt-10 bg-[#2b2b2b] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-2">
        <div>
          <div className="text-xl font-extrabold text-[#b19566]">
            {clinicInfo.name}
          </div>
          <p className="mt-2 text-white/75 text-sm leading-relaxed">
            {clinicInfo.tagline}
          </p>
        </div>

        <div className="md:text-left">
          <div className="font-bold">روابط</div>
          <div className="mt-3 grid gap-2 text-sm">
            <a className="text-white/75 hover:text-[#b19566] transition" href="#services">الخدمات</a>
            <a className="text-white/75 hover:text-[#b19566] transition" href="#booking">حجز موعد</a>
            <a className="text-white/75 hover:text-[#b19566] transition" href="#contact">تواصل</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-white/70">
          © {new Date().getFullYear()} {clinicInfo.name} — جميع الحقوق محفوظة
        </div>
      </div>
    </footer>
  );
}
