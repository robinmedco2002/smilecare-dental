import { FaCheckCircle } from "react-icons/fa";

function WhyChooseUs() {
  return (
   
    <section className="py-16 px-4 sm:px-8 bg-gray-50 text-gray-800">
        <div className="max-w-[1100px] mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Why Choose SmileCare?</h2>
          <p className="text-gray-600">
            We blend expertise, technology, and care to give you the smile you deserve.
          </p>
        </div>
        <div className="max-w-[1400px] mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Advanced Technology",
            "Certified Specialists",
            "Comfort-first Experience",
            "Aftercare Support",
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="text-3xl mb-3 text-blue-600">
                <FaCheckCircle />
              </div>
              <h4 className="font-semibold mb-1">{feature}</h4>
              <p className="text-gray-600 text-sm">
                {feature === "Advanced Technology"
                  ? "Latest dental tools for precision treatment."
                  : feature === "Certified Specialists"
                  ? "Highly trained dentists with years of experience."
                  : feature === "Comfort-first Experience"
                  ? "Gentle care to minimize anxiety and pain."
                  : "Ongoing support after procedures."}
              </p>
            </div>
          ))}
        </div>
      </section>

  );
}

export default WhyChooseUs;