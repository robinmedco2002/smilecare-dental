import { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // 'success'|'error'|null

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }
    try {
      // Example using formsubmit.co endpoint; replace with real email
      await fetch("https://formsubmit.co/ajax/youremail@example.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, _subject: "Newsletter Signup" }),
      }).then((res) => {
        if (res.ok) {
          setStatus("success");
          setEmail("");
        } else throw new Error("Failed");
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-16 px-4 sm:px-8 bg-blue-600 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Get Dental Tips & Offers</h2>
        <p className="mb-6">Subscribe to our newsletter for exclusive health tips and special discounts.</p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded text-gray-800"
            required
          />
          <button
            type="submit"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
          >
            Subscribe
          </button>
        </form>
        {status === "success" && (
          <p className="mt-4 text-green-200">Thank you! You’re subscribed.</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-200">Please enter a valid email or try again.</p>
        )}
      </div>
    </section>
  );
};

export default NewsletterSignup;
