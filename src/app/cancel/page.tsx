"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CancelPage() {
  const router = useRouter();

  const handleBackToProfile = () => {
    router.push("/");
  };

  const handleYesClick = () => {
    console.log("Yes clicked - proceed with cancellation");
  };

  const handleNoClick = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-2 sm:p-4">
      <div className="w-full max-w-[1000px] h-auto min-h-[400px] sm:h-[433px]">
        <div className="bg-white shadow-lg rounded-2xl sm:rounded-3xl overflow-hidden h-full">
          {/* Title Section */}
          <div className="w-full h-16 sm:h-[60px] relative text-center flex items-center justify-center border-b border-gray-200 px-4">
            <h2
              className="text-sm sm:text-base font-semibold text-gray-900"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Subscription Cancellation
            </h2>
            <button
              onClick={handleBackToProfile}
              className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded-full"
              aria-label="Close modal"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Main Modal Content */}
          <div className="w-full flex flex-col lg:flex-row min-h-[300px] sm:h-[373px]">
            {/* Flexbox A: Content and Options */}
            <div className="w-full lg:w-[540px] flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
              <div className="w-full flex flex-col mt-2 pt-8">
                <p
                  className="w-full text-gray-700 font-bold mb-0 sm:mt-8 leading-tight text-left text-xl sm:text-2xl lg:text-3xl"
                >
                  Hey mate,
                  <br />
                  Quick one before you go.
                </p>
                <br />
                <p
                  className="w-full italic text-gray-700 font-bold leading-tight text-xl sm:text-2xl lg:text-3xl"
                >
                  Have you found a job yet?
                </p>
              </div>
              <br />
              <p
                className="w-full text-gray-500 font-bold mb-0 leading-tight mt-4 text-xs sm:text-sm"
              >
                Whatever your answer, we just want to help you take the next
                step. With visa support, or by hearing how we can do better.
              </p>
              <br/>
              <hr/>
              <br/>
              {/* Action Buttons */}
              <div className="flex flex-col lg:mb-20 sm:space-y-4 sm:mb-16 -mt-3">
                <button
                  onClick={handleNoClick}
                  className="w-full border-2 font-semibold border-gray-200 bg-white text-gray-700 text-xs sm:text-sm py-1.5 sm:py-2.5 px-4 rounded-lg hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Yes, I&apos;ve found a job
                </button>
                
                <button
                  onClick={handleYesClick}
                  className="w-full border-2 border-gray-200 bg-white text-gray-700 py-1.5 sm:py-2.5 px-4 text-xs sm:text-sm rounded-lg font-semibold hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Not yet - I&apos;m still looking
                </button>
              </div>
            </div>

            {/* Flexbox B: Image */}
            <div className="w-full lg:flex-1 sm:p-6 lg:p-4 order-first lg:order-last">
              <Image
                src="/eState.jpg"
                alt="Empire-State-Building"
                width={400}
                height={333}
                className="w-full h-48 sm:h-64 lg:h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
