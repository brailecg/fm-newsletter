import Image from "next/image";

const CircleCheckImage = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={21} height={21} fill="none">
    <circle cx={10.5} cy={10.5} r={10.5} fill="#FF6155" />
    <path stroke="#fff" strokeWidth={2} d="M6 11.381 8.735 14 15 8" />
  </svg>
);

export default function Home() {
  return (
    <main
      className={`bg-[#36384D] flex justify-center items-center min-h-screen`}>
      <div
        className={`w-[928px] bg-white rounded-[36px] flex flex-col md:flex-row`}>
        <div
          className={`flex-1 px-5 md:px-16 py-10 md:py-24 order-2 md:order-none`}>
          <h1 className={`text-[#242742] text-4xl md:text-6xl font-bold`}>
            Stay updated!
          </h1>
          <p className={` text-[#242742] my-6`}>
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <div className={` mb-10`}>
            <div className={`flex items-center space-x-4`}>
              <CircleCheckImage />
              <p className={`text-[#242742]`}>
                Product discovery and building what matters
              </p>
            </div>
            <div className={`flex items-center space-x-4 my-3`}>
              <CircleCheckImage />
              <p className={`text-[#242742]`}>
                Measuring to ensure updates are a success
              </p>
            </div>
            <div className={`flex items-center space-x-4`}>
              <CircleCheckImage />
              <p className={`text-[#242742]`}>And much more!</p>
            </div>
          </div>
          <div className="flex flex-col space-y-1 mb-4">
            <label
              htmlFor="customerEmail"
              className={`text-[#242742] text-xs font-bold`}>
              Email Address
            </label>
            <input
              type="text"
              id="customerEmail"
              placeholder="email@company.com"
              className={` h-[56px] border border-[#19182b80] rounded-lg placeholder:text-[#242742] placeholder:opacity-50 px-6 py-4`}
            />
          </div>
          <button
            className={` bg-[#242742] rounded-lg text-white min-w-full py-4`}>
            Subscribe to monthly newsletter
          </button>
        </div>
        <div className={`flex-1 p-0 md:p-6 order-1 md:order-none relative`}>
          <div
            className={`min-h-[320px] overflow-x-hidden relative rounded-b-2xl md:rounded-2xl bg-gradient-to-br from-[#FF6A3A] to-[#FF527B] h-full flex items-center justify-center`}>
            <div className={`w-[475px] h-[230px] absolute`}>
              <Image src={"/images/home-img.png"} fill />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
