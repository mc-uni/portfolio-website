import AnimateOnView from "../components/AnimateOnView";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

emailjs.init("jmRWPqKUrbTTJQ32O");

const ContactSection = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_koytqsk",
        "template_v77lk9m",
        formRef.current
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-6 max-w-xl mx-auto"
        >
          <input name="name" required placeholder="Your Name" className="w-full border px-4 py-3 rounded"/>
          <input name="email" type="email" required placeholder="Your Email" className="w-full border px-4 py-3 rounded"/>
          <textarea name="message" required placeholder="Your Message" className="w-full border px-4 py-3 rounded"/>

          <button type="submit" className="w-full bg-gray-500 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

/*import { useRef } from "react";
import emailjs from "@emailjs/browser";

emailjs.init("jmRWPqKUrbTTJQ32O");

const ContactSection = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_koytqsk",
        "template_v77lk9m",
        formRef.current,
        "jmRWPqKUrbTTJQ32O"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        () => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-600 mb-10">
          Have a project or question? Send me a message.
        </p>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-6 max-w-xl mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border px-4 py-3 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border px-4 py-3 rounded"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full border px-4 py-3 rounded"
          />

          <button
            type="submit"
            className="w-full bg-gray-500 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

/*const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <AnimateOnView>
        <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-600 mb-10">
          Have a project, collaboration, or question? Let’s talk.
        </p>

        <form className="space-y-6 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border px-4 py-3 rounded"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border px-4 py-3 rounded"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border px-4 py-3 rounded"
          />

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
      </AnimateOnView>
      
    </section>
  );
};

export default ContactSection;*/
