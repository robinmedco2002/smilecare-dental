

const DentalCareTips= () => {
    return(
          <section className="py-16 px-4 sm:px-8 bg-gray-50 text-gray-800">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-10 items-start">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Dental Care Tips</h2>
            <p className="text-gray-600 mb-6">
              Stay informed with short actionable tips to keep your mouth healthy.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="bg-white rounded-lg shadow p-5">
                <h3 className="font-semibold mb-2">Tip: Brush Twice Daily</h3>
                <p className="text-sm">
                  Use a soft-bristle brush and fluoride toothpaste. Brush gently for two minutes.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-5">
                <h3 className="font-semibold mb-2">Tip: Floss Regularly</h3>
                <p className="text-sm">
                  Flossing removes plaque between teeth that brushing can miss.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="/smilecare-dental/images/dental-tip.jpg"
              alt="Dental tips"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>
    );
};

export default DentalCareTips;