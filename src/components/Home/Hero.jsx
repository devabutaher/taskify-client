const Hero = () => {
  return (
    <section>
      <div className="max-w-screen-xl gap-12 px-4 mx-auto text-gray-600 py-28 md:px-8">
        <div className="max-w-4xl mx-auto space-y-5 text-center">
          <h1 className="text-sm font-medium text-indigo-600">
            Build products for everyone
          </h1>
          <h2 className="mx-auto text-4xl font-extrabold text-gray-800 md:text-5xl">
            Design your projects faster with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
              the largest figma UI kit
            </span>
          </h2>
          <p className="max-w-2xl mx-auto">
            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          </p>
          <div className="items-center justify-center space-y-3 gap-x-3 sm:flex sm:space-y-0">
            <a
              href="javascript:void(0)"
              className="block px-4 py-2 font-medium text-white duration-150 bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-500 active:bg-indigo-700 hover:shadow-none"
            >
              Browse courses
            </a>
            <a
              href="javascript:void(0)"
              className="block px-4 py-2 font-medium text-gray-700 duration-150 border rounded-lg hover:text-gray-500 active:bg-gray-100"
            >
              Get access
            </a>
          </div>
        </div>
        <div className="mt-14">
          <img
            src="/hero-image.png"
            className="w-full border rounded-lg shadow-lg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
