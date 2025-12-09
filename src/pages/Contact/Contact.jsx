// src/pages/Contact/Contact.jsx
import ContactHero from "../../components/contact/ContactHero";
import ContactInfoCard from "../../components/contact/ContactInfoCard";
import ContactForm from "../../components/contact/ContactForm";
import AvailabilityBadge from "../../components/contact/AvailabilityBadge"; // ← ADD THIS

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-200">
      <main>
        <ContactHero />

        <section className="py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Side */}
              <div className="space-y-12">
                <div className="rounded-3xl overflow-hidden border-8 border-gradient-to-r from-cyan-500 to-purple-500 shadow-2xl">
                  <img src="../../src/assets/images/profile 2.jpg" alt="Robel Yisehak" className="w-full h-auto object-cover" />
                  <div className="p-10 bg-gradient-to-t from-black/80">
                    <h2 className="text-4xl font-bold text-white">Robel Yisehak</h2>
                    <p className="text-xl text-cyan-400 mt-2">Frontend Web Developer</p>
                    <p className="text-lg text-gray-300 mt-1">Addis Ababa, Ethiopia</p>
                  </div>
                </div>

                <ContactInfoCard />
                <AvailabilityBadge />   {/* ← ADD THIS HERE */}
              </div>

              {/* Right Side */}
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}