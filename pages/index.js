import Image from "next/image";
import { useState } from "react";

const CircleCheckImage = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={21} height={21} fill="none">
    <circle cx={10.5} cy={10.5} r={10.5} fill="#FF6155" />
    <path stroke="#fff" strokeWidth={2} d="M6 11.381 8.735 14 15 8" />
  </svg>
);

export default function Home() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [successModal, setSuccessModal] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      setEmailError("Valid email required");
    } else {
      setSuccessModal(true);
    }
  };

  return (
    <main>
      <div
        className={`bg-[#36384D] flex justify-center items-center min-h-screen relative`}>
        <div
          className={`w-[928px] bg-white md:rounded-[36px] flex flex-col md:flex-row z-10`}>
          <div
            className={`flex-1 px-5 md:px-5 lg:px-16 py-10 md:py-24 order-2 md:order-none`}>
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
            <div className="flex flex-col">
              <div className={`flex justify-between`}>
                <label
                  htmlFor="customerEmail"
                  className={`text-[#242742] text-xs font-bold`}>
                  Email Address
                </label>
                {emailError && (
                  <label
                    htmlFor="customerEmail"
                    className={`text-[#FF6155] text-xs font-bold`}>
                    {emailError}
                  </label>
                )}
              </div>
              <input
                onChange={handleEmailChange}
                type="email"
                id="customerEmail"
                placeholder="email@company.com"
                className={` h-[56px] border ${
                  !emailError
                    ? "border-[#19182b80] rounded-lg placeholder:text-[#242742] placeholder:opacity-50"
                    : "border-[#FF6155] rounded-lg placeholder:text-[#FF6155] placeholder:opacity-100 bg-[#ff615526] text-[#FF6155]"
                } px-6 py-4 mb-4`}
              />
              <button
                onClick={handleSubmit}
                className={` bg-[#242742] rounded-lg text-white min-w-full py-4 active:bg-gradient-to-br active:from-[#FF6A3A] active:to-[#FF527B] active:shadow-[#ff615580] active:shadow-lg`}>
                Subscribe to monthly newsletter
              </button>
            </div>
          </div>
          <div className={`flex-1 p-0 md:p-6 order-1 md:order-none relative`}>
            <div
              className={`min-h-[320px] overflow-x-hidden relative rounded-b-2xl md:rounded-2xl bg-gradient-to-br from-[#FF6A3A] to-[#FF527B] h-full flex items-center justify-center`}>
              <div className={`w-[475px] h-[230px] absolute`}>
                <Image
                  src={"/images/home-img.png"}
                  fill
                  alt="Home page image"
                />
              </div>
            </div>
          </div>
        </div>

        {/* succes pop up for mobile */}
        <div
          className={`px-4 absolute md:hidden flex flex-col justify-center items-center space-y-6 w-full min-h-full overflow-hidden transition-all bg-white z-30 ${
            !successModal ? "right-full" : "right-0"
          }`}>
          <div className={` w-full text-[#242742] space-y-7`}>
            <Image
              src={"/images/check.png"}
              width={64}
              height={64}
              alt="Check Image"
            />
            <h1 className={` text-[40px] leading-tight`}>
              Thanks for subscribing!
            </h1>
            <p>
              A confirmation email has been sent to{" "}
              <span className={``}>{email}</span>. Please opent it and click the
              button inside to confirm your subscription
            </p>
          </div>
          <button
            onClick={() => setSuccessModal((prev) => !prev)}
            className={` bg-[#242742] rounded-lg text-white min-w-full p-4 active:bg-gradient-to-br active:from-[#FF6A3A] active:to-[#FF527B] active:shadow-[#ff615580] active:shadow-lg`}>
            Dismiss message
          </button>
        </div>
        {/* END OF succes pop up for mobile */}

        {/* succes pop up for tablet to desktop */}
        {successModal && (
          <>
            <div
              className={`absolute hidden md:flex w-[504px] h-[520px] px-16 rounded-3xl flex-col justify-center items-center space-y-6 overflow-hidden transition-all bg-white z-50`}>
              <div className={` w-full text-[#242742] space-y-7`}>
                <Image
                  src={"/images/check.png"}
                  width={64}
                  height={64}
                  alt="Check Image"
                />
                <h1 className={` text-[40px] leading-tight`}>
                  Thanks for subscribing!
                </h1>
                <p>
                  A confirmation email has been sent to{" "}
                  <span className={``}>{email}</span>. Please opent it and click
                  the button inside to confirm your subscription
                </p>
              </div>
              <button
                onClick={() => setSuccessModal((prev) => !prev)}
                className={` bg-[#242742] rounded-lg text-white min-w-full p-4 active:bg-gradient-to-br active:from-[#FF6A3A] active:to-[#FF527B] active:shadow-[#ff615580] active:shadow-lg`}>
                Dismiss message
              </button>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black hidden md:block"></div>
          </>
        )}
        {/* END OF succes pop up for tablet to desktop */}
      </div>
    </main>
  );
}
