// src/components/contact/ContactForm.jsx
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, Clock } from "lucide-react";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_uyngrha",               // Your Service ID
        "template_9qbefpt",              // Your Template ID
        formData,
        "qquz2KSgxFG5lj8XB"              // Your Public Key
      )
      .then(
        () => {
          setIsSubmitted(true);
          setFormData({
            from_name: "",
            from_email: "",
            subject: "",
            message: "",
          });

          setTimeout(() => {
            setIsSubmitted(false);
          }, 4000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Message failed to send.");
        }
      );
  };

  return (
    <div className="p-10 rounded-3xl bg-gray-800/70 border border-purple-500/30 backdrop-blur-md shadow-2xl">
      <h2 className="text-4xl font-bold text-center mb-4 text-cyan-400">
        Send Me a Message
      </h2>
      <p className="text-center text-gray-400 mb-10 text-lg">
        Let's discuss your project or opportunity
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="px-6 py-4 bg-gray-900/70 border border-gray-700 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
          />

          <input
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            required
            placeholder="Your Email"
            className="px-6 py-4 bg-gray-900/70 border border-gray-700 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
          />
        </div>

        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder="Subject"
          className="w-full px-6 py-4 bg-gray-900/70 border border-gray-700 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="6"
          placeholder="Tell me about your project..."
          className="w-full px-6 py-4 bg-gray-900/70 border border-gray-700 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors resize-none"
        />

        <button
          type="submit"
          className="w-full py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all flex items-center justify-center gap-4 group"
        >
          {isSubmitted ? (
            <>
              <CheckCircle className="w-8 h-8" /> Message Sent Successfully!
            </>
          ) : (
            <>
              Send Message{" "}
              <Send className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </>
          )}
        </button>
      </form>

      <div className="mt-8 text-center p-6 rounded-2xl bg-gradient-to-r from-cyan-900/30 to-purple-900/30 border border-cyan-500/30">
        <Clock className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
        <p className="text-lg font-bold text-cyan-300">Typical Response Time</p>
        <p className="text-3xl font-bold text-white mt-2">Within 2 Hours</p>
        <p className="text-gray-400 mt-2">
          I'm very responsive and excited to hear from you!
        </p>
      </div>
    </div>
  );
}
