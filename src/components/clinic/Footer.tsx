import { clinicInfo } from "./data";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-white/15 bg-white/5 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/75">
        <div>© {new Date().getFullYear()} {clinicInfo.name} — {clinicInfo.tagline}</div>

        <div className="flex items-center gap-3">
          <a href={clinicInfo.facebookUrl} target="_blank" rel="noreferrer" className="hover:text-white">فيسبوك</a>
          <span className="text-white/30">|</span>
          <a href={clinicInfo.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-white">إنستغرام</a>
          <span className="text-white/30">|</span>
            <a href={clinicInfo.googleMapsUrl} target="_blank" rel="noreferrer">
            الخريطة
            </a>

        </div>
      </div>
    </footer>
  );
}
