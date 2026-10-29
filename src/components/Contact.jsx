
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const sendEmail = async (event) => {
    event.preventDefault();

    if (status === "sending") return;

    setStatus("sending");
    setFeedback("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus("success");
      setFeedback("Your message was sent successfully!");
      formRef.current.reset();
    } catch (error) {
  console.error("EmailJS error details:", {
    status: error?.status,
    text: error?.text,
    message: error?.message,
  });

  setStatus("error");
  setFeedback(
    `Failed (${error?.status ?? "network error"}): ${
      error?.text ?? error?.message ?? "Check the browser console."
    }`
  );
}
  };

  return (
    <section
      id="contact"
      className="bg-gray-900 text-white py-24 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-500 font-semibold mb-2">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Work Together
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project, opportunity, or just want to say hello?
            Feel free to reach out.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">

              {/* Email */}
              <div>
                <p className="text-gray-500 text-sm mb-1">
                  Email
                </p>

                <a
                  href="mailto:badnyaneshwar74@gmail.com"
                  className="text-gray-300 hover:text-blue-500 transition break-all"
                >
                  badnyaneshwar74@gmail.com
                </a>
              </div>

              {/* GitHub */}
              <div>
                <p className="text-gray-500 text-sm mb-1">
                  GitHub
                </p>

                <a
                  href="https://github.com/DnyaneshwarBajad"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-blue-500 transition break-all"
                >
                  github.com/DnyaneshwarBajad ↗
                </a>
              </div>

              {/* LinkedIn */}
              <div>
                <p className="text-gray-500 text-sm mb-1">
                  LinkedIn
                </p>

                <a
                  href="https://www.linkedin.com/in/dnyaneshwar-bajad/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-blue-500 transition break-all"
                >
                  linkedin.com/in/dnyaneshwar-bajad ↗
                </a>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-5"
          >

            {/* Name */}
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm text-gray-400 mb-2"
              >
                Name
              </label>

              <input
                id="contact-name"
                type="text"
                name="from_name"
                autoComplete="name"
                placeholder="Your name"
                minLength={2}
                maxLength={100}
                required
                className="w-full bg-gray-950 border border-gray-800
                           rounded-lg px-4 py-3 outline-none
                           focus:border-blue-500 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm text-gray-400 mb-2"
              >
                Email
              </label>

              <input
                id="contact-email"
                type="email"
                name="reply_to"
                autoComplete="email"
                placeholder="Your email address"
                maxLength={254}
                required
                className="w-full bg-gray-950 border border-gray-800
                           rounded-lg px-4 py-3 outline-none
                           focus:border-blue-500 transition"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm text-gray-400 mb-2"
              >
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows={5}
                minLength={10}
                maxLength={5000}
                placeholder="Write your message..."
                required
                className="w-full bg-gray-950 border border-gray-800
                           rounded-lg px-4 py-3 outline-none
                           resize-y focus:border-blue-500 transition"
              />

            </div>

            {/* Success / Error Feedback */}
            {feedback && (
              <p
                role="status"
                aria-live="polite"
                className={
                  status === "success"
                    ? "text-green-400 text-sm"
                    : "text-red-400 text-sm"
                }
              >
                {feedback}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-blue-600 py-3 rounded-lg
                         font-semibold hover:bg-blue-700
                         disabled:opacity-60 disabled:cursor-not-allowed
                         transition"
            >
              {status === "sending"
                ? "Sending..."
                : status === "success"
                  ? "Send Another Message"
                  : "Send Message"}
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;
