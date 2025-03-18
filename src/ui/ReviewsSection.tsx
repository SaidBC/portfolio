export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="row-start-5 col-span-12 mt-20 flex flex-col gap-10"
    >
      <h1 className="text-4xl text-center">REVIEWS</h1>
      <div className="w-full flex flex-col gap-8">
        <h1 className="text-5xl md:text-7xl text-center text-[#3F3F3F] font-bold">
          NO REVIEWS YET
        </h1>
        <h3 className="text-3xl md:text-4xl text-center text-[#3F3F3F] font-bold">
          BE FIRST
        </h3>
      </div>
    </section>
  );
}
