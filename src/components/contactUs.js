export default function ContactUsComponent() {
  return (
    <div className="bg-peach py-16 px-6 text-white text-center md:rounded-xl lg:flex lg:text-start lg:items-center lg:gap-24 lg:px-24">
      <div>
        <p className="text-3xl lg:text-5xl font-medium">Contact Us</p>
        <p className="my-6 text-base">
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>
      <div>
        <input
          type="name"
          placeholder="Name"
          className="my-4 bg-transparent w-full placeholder:text-white border-b border-b-white placeholder:font-medium p-3 focus-visible:outline-none"
        ></input>
        <input
          type="email"
          placeholder="Email Address"
          className="my-4 bg-transparent w-full placeholder:text-white border-b border-b-white placeholder:font-medium p-3 focus-visible:outline-none"
        ></input>
        <input
          type="phone"
          placeholder="Phone"
          className="my-4 bg-transparent w-full placeholder:text-white border-b border-b-white placeholder:font-medium p-3 focus-visible:outline-none"
        ></input>
        <textarea
          placeholder="Your Message"
          className="my-4 bg-transparent w-full placeholder:text-white border-b border-b-white placeholder:font-medium p-3 focus-visible:outline-none"
        ></textarea>
        <div className="flex justify-center md:justify-end lg:my-6">
          <button className="mt-8 lg:mt-0 bg-white rounded-md text-black uppercase py-4 px-12 tracking-[1px] hover:bg-secondary-peach hover:text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
