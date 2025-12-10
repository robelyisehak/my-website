// src/components/home/HomeHero.jsx
import { ArrowRight } from "lucide-react";
import { homeData } from "./homeData";
import profileAbout from "../../assets/images/profile_about.jpg";  // ✅ Correct import

export default function HomeHero() {
  const { name, title, tagline } = homeData.hero;

  return (
    <section className="pt-32 pb-20 px-6 md:px-12 lg:pt-40">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left - Profile Photo */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-end">
            <div className="relative group">
              <img 
                src={profileAbout}     // ✅ Use imported image
                alt="Robel Yisehak"
                className="w-80 h-80 md:w-96 md:h-96 rounded-3xl object-cover shadow-2xl border-4 border-cyan-500/30 
                           group-hover:border-cyan-400 transition-all duration-500 
                           group-hover:scale-105 group-hover:rotate-2"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/30 to-purple-600/30 blur-xl opacity-70 group-hover:opacity-90 transition-opacity" />
            </div>
          </div>

          {/* Right - Text */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-wider mb-4">
              {name}
            </h1>
            <p className="text-2xl md:text-4xl text-cyan-400 font-bold tracking-wide mb-6">
              {title}
            </p>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
              {tagline}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <a 
                href="/portfolio"
                className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
              >
                View My Work <ArrowRight className="group-hover:translate-x-2 transition" />
              </a>
              <a 
                href="/contact"
                className="px-10 py-5 border-2 border-cyan-500 rounded-xl font-bold text-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                Hire Me
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
