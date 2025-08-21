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
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-4">
      <div className="w-[1000px] h-[433px]">
        <div className="bg-white shadow-lg rounded-3xl overflow-hidden h-full">
          {/* Title Section */}
          <div className="w-[1000px] h-[60px] relative text-center flex items-center justify-center border-b border-gray-200">
            <h2
              className="text-base font-semibold text-gray-900"
              style={{ fontFamily: "DM Sans, sans-serif" , fontSize: "14px" }}
            >
              Subscription Cancellation
            </h2>
            <button
              onClick={handleBackToProfile}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded-full"
              aria-label="Close modal"
            >
              <svg
                className="w-5 h-5"
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
          <div className="w-[1000px] h-[373px] flex">
            {/* Flexbox A: Content and Options */}
            <div className="w-[540px] h-[333px] flex flex-col justify-center px-8 py-32 ml-0">
              <div className="w-[540px] h-[135px] flex flex-col">
                <p
                  className="w-[540px] h-[72px] text-gray-700 font-bold mb-0 mt-8 leading-none text-left"
                  style={{ fontSize: "30px" }}
                >
                  Hey mate,
                  <br />
                  Quick one before you go.
                </p>
                <br />
                <p
                  className="w-[540px] h-[47px] italic text-gray-700 font-bold leading-tight"
                  style={{ fontSize: "30px" }}
                >
                  Have you found a job yet?
                </p>
              </div>
              <br />
              <p
                className="w-[469px] h-[42px] text-gray-500 font-bold mb-0 leading-tight mt-4"
                style={{ fontSize: "14px" }}
              >
                Whatever your answer, we just want to help you take the next
                step. With visa support, or by hearing how we can do better.
              </p>
              <br/>
              <hr/>
              <br/>
              {/* Action Buttons */}
              <div className="flex flex-col space-y-4">
                <button
                  onClick={handleNoClick}
                  className="flex-1 border-2 font-semibold border-gray-200 bg-white text-gray-700 text-sm py-1.5 px-4 rounded-lg hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Yes, I&apos;ve found a job
                </button>
                
                <button
                  onClick={handleYesClick}
                  className="flex-1 border-2 mt-0 border-gray-200 bg-white text-gray-700 py-1.5 px-4 text-sm rounded-lg font-semibold hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Not yet - I&apos;m still looking
                </button>
              </div>
            </div>

            {/* Flexbox B: Image */}
            <div className="flex-1 p-8">
              <Image
                src="/eState.jpg"
                alt="Empire-State-Building"
                width={400}
                height={333}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
