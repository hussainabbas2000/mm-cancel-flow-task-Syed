"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function CancelPage() {
  const router = useRouter();
  const [modalState, setModalState] = useState("initial"); // initial, got-job-survey, feedback, conditional
  const [surveyAnswers, setSurveyAnswers] = useState({
    question1: "", // yes/no question
    question2: "", // 4 options
    question3: "", // 4 options
    question4: "", // 4 options
  });
  const [feedback, setFeedback] = useState("");

  const handleBackToProfile = () => {
    router.push("/");
  };

  const handleYesClick = () => {
    setModalState("got-job-survey");
  };

  const handleNoClick = () => {
    router.push("/");
  };

  const handleSurveySubmit = () => {
    setModalState("feedback");
  };

  const handleFeedbackSubmit = () => {
    setModalState("conditional");
  };

  const handleBackToSurvey = () => {
    setModalState("got-job-survey");
  };

  const handleBackToInitial = () => {
    setModalState("initial");
  };

  // Survey Step 1: 4 Questions
  const renderSurveyStep = () => (
    <div className="flex h-full w-full">
      <div className=" flex flex-row h-full">
        <div className="w-full flex flex-col lg:flex-row min-h-[300px] sm:h-[373px] h-full">
          {/* Left Column: Survey Content */}
          <div className="w-full lg:w-[540px] flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 mt-24">
            <div className="w-full flex flex-col">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-700 mb-4">
                Congrats on the new role 🎉
              </h3>
              <hr className="block sm:hidden mb-4 border-gray-200" />

              {/* Question 1: Yes/No */}
              <div className="mb-4 flex flex-col">
                <p className="text-xs font-bold text-gray-700 mb-2">
                  Did you find the job with Migrate Mate?{" "}
                  <span className="text-black">*</span>
                </p>
                <div className="flex space-x-2">
                  <button
                    onClick={() =>
                      setSurveyAnswers({ ...surveyAnswers, question1: "yes" })
                    }
                    className={`lg:px-26.25 py-2 rounded-lg border-2 transition-colors text-xs ${
                      surveyAnswers.question1 === "yes"
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-200 bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() =>
                      setSurveyAnswers({ ...surveyAnswers, question1: "no" })
                    }
                    className={`lg:px-27 py-2 rounded-lg border-2 transition-colors text-xs ${
                      surveyAnswers.question1 === "no"
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-200 bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>

              {/* Question 2: 4 Options */}
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  How many roles did you apply for through Migrate Mate?{" "}
                  <span className="text-black">*</span>
                </p>
                <div className="grid grid-cols-4 gap-1">
                  {["0", "1-5", "6-20", "20+"].map((option) => (
                    <button
                      key={option}
                      onClick={() =>
                        setSurveyAnswers({
                          ...surveyAnswers,
                          question2: option,
                        })
                      }
                      className={`px-3 py-2 rounded-lg border-2 transition-colors text-sm ${
                        surveyAnswers.question2 === option
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-gray-200 bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 3: 4 Options */}
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  How many companies did you email directly?{" "}
                  <span className="text-black">*</span>
                </p>
                <div className="grid grid-cols-4 gap-1">
                  {["0", "1-5", "6-20", "20+"].map((option) => (
                    <button
                      key={option}
                      onClick={() =>
                        setSurveyAnswers({
                          ...surveyAnswers,
                          question3: option,
                        })
                      }
                      className={`px-3 py-2 rounded-lg border-2 transition-colors text-sm ${
                        surveyAnswers.question3 === option
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-gray-200 bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 4: 4 Options */}
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  How many different companies did you interview with?{" "}
                  <span className="text-black">*</span>
                </p>
                <div className="grid grid-cols-4 gap-1">
                  {["0", "1-2", "3-5", "5+"].map((option) => (
                    <button
                      key={option}
                      onClick={() =>
                        setSurveyAnswers({
                          ...surveyAnswers,
                          question4: option,
                        })
                      }
                      className={`px-3 py-2 rounded-lg border-2 transition-colors text-sm ${
                        surveyAnswers.question4 === option
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-gray-200 bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              <hr />
              <br />

              {/* Navigation Buttons */}
              <div className="flex justify-center">
                <button
                  onClick={handleSurveySubmit}
                  disabled={
                    !surveyAnswers.question1 ||
                    !surveyAnswers.question2 ||
                    !surveyAnswers.question3 ||
                    !surveyAnswers.question4
                  }
                  className={`w-full py-2 rounded-lg transition-colors disabled:cursor-not-allowed text-xs ${
                    !surveyAnswers.question1 ||
                    !surveyAnswers.question2 ||
                    !surveyAnswers.question3 ||
                    !surveyAnswers.question4
                      ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                      : "bg-blue-500 text-white hover:bg-blue-700"
                  }`}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>

                     {/* Image */}
            
           
             <div className="flex-1 items-center justify-center min-h-0 h-full md:block hidden lg:pr-4 lg:mt-4">
               <Image
                 src="/eState.jpg"
                 alt="Empire-State-Building"
                 width={400}
                 height={400}
                 className="w-full h-full object-cover rounded-lg"
               />
             </div>
           
        </div>
      </div>
    </div>
  );

  // Feedback Step 2: Paragraph Input
  const renderFeedbackStep = () => (
    <div className="w-full lg:w-[540px] flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
      <div className="w-full flex flex-col mt-2 pt-8">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-700 mb-6">
          We&apos;d love to hear more from you
        </h3>

        <div className="mb-6">
          <p className="text-sm sm:text-base font-medium text-gray-700 mb-3">
            What could we do better to help others find jobs?
          </p>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Share your thoughts, suggestions, or feedback..."
            className="w-full h-32 p-3 border-2 border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={handleBackToSurvey}
            className="px-4 py-2 border-2 border-gray-200 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Back
          </button>
          <button
            onClick={handleFeedbackSubmit}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );

  // Conditional Step 3: Based on Question 1 Answer
  const renderConditionalStep = () => (
    <div className="w-full lg:w-[540px] flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
      <div className="w-full flex flex-col mt-2 pt-8">
        {surveyAnswers.question1 === "yes" ? (
          // If they found job through platform
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-700 mb-6">
              That&apos;s fantastic! 🎉
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              We&apos;re thrilled that our platform helped you find your job.
              Your success story inspires us to help more people like you.
            </p>
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-green-700">
                <strong>Next steps:</strong> We&apos;ll send you a follow-up
                email with resources for your new role and ways to stay
                connected with our community.
              </p>
            </div>
          </div>
        ) : (
          // If they didn't find job through platform
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-700 mb-6">
              Thanks for your feedback
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              We understand that every job search journey is different. Your
              input helps us improve our services for future users.
            </p>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-700">
                <strong>Stay connected:</strong> We&apos;d love to keep you
                updated on new features and opportunities that might be helpful
                in the future.
              </p>
            </div>
          </div>
        )}

        {/* Final Navigation */}
        <div className="flex justify-center">
          <button
            onClick={handleBackToInitial}
            className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  // Main Modal Content based on state
  const renderModalContent = () => {
    switch (modalState) {
      case "got-job-survey":
        return renderSurveyStep();
      case "feedback":
        return renderFeedbackStep();
      case "conditional":
        return renderConditionalStep();
      default:
        return (
          // Initial state content
          <>
            {/* Flexbox A: Content and Options */}
            <div className="w-full lg:w-[540px] flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
              <div className="w-full flex flex-col mt-2 pt-8">
                <p className="w-full text-gray-700 font-bold mb-0 sm:mt-8 leading-tight text-left text-xl sm:text-2xl lg:text-3xl">
                  Hey mate,
                  <br />
                  Quick one before you go.
                </p>
                <br />
                <p className="w-full italic text-gray-700 font-bold leading-tight text-xl sm:text-2xl lg:text-3xl">
                  Have you found a job yet?
                </p>
              </div>
              <br />
              <p className="w-full text-gray-500 font-bold mb-0 leading-tight mt-4 text-xs sm:text-sm">
                Whatever your answer, we just want to help you take the next
                step. With visa support, or by hearing how we can do better.
              </p>
              <br />
              <hr />
              <br />
              {/* Action Buttons */}
              <div className="flex flex-col lg:mb-20 sm:space-y-4 sm:mb-16 -mt-3">
                <button
                  onClick={handleYesClick}
                  className="w-full border-2 font-semibold border-gray-200 bg-white text-gray-700 text-xs sm:text-sm py-1.5 sm:py-2.5 px-4 rounded-lg hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Yes, I&apos;ve found a job
                </button>

                <button
                  onClick={handleNoClick}
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
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-2 sm:p-4">
      <div
        className={`w-full max-w-[1000px] ${
          modalState === "got-job-survey"
            ? "min-h-[500px] sm:h-[550px]"
            : "min-h-[400px] sm:h-[433px]"
        }`}
      >
        <div className="bg-white shadow-lg rounded-2xl sm:rounded-3xl overflow-hidden h-full">
          {/* Title Section */}
          <div className="w-full h-16 sm:h-[60px] relative text-center flex items-center justify-center border-b border-gray-200 px-4">
            {/* Back Button - Only show when not in initial state */}
            {modalState !== "initial" && (
              <button
                onClick={handleBackToInitial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 px-3 py-1 text-gray-600 hover:text-gray-800 transition-colors text-sm flex items-center space-x-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Back</span>
              </button>
            )}
            
            <h2
              className="text-sm sm:text-base font-semibold text-gray-900"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              {modalState === "initial"
                ? "Subscription Cancellation"
                : modalState === "got-job-survey"
                ? (
                    <div className="flex items-center justify-center space-x-2">
                      <span>Subscription Cancellation</span>
                      <div className="w-8 h-2 bg-violet-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <span className="text-gray-700 font-medium text-xs">Step 1 of 3</span>
                    </div>
                  )
                : modalState === "feedback"
                ? (
                    <div className="flex items-center justify-center space-x-2">
                      <span>Subscription Cancellation</span>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <div className="w-8 h-2 bg-violet-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <span className="text-gray-700 font-medium text-xs">Step 2 of 3</span>
                    </div>
                  )
                : modalState === "conditional"
                ? (
                    <div className="flex items-center justify-center space-x-2">
                      <span>Subscription Cancellation</span>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <div className="w-8 h-2 bg-violet-300 rounded-full"></div>
                      <span className="text-gray-700 font-medium text-xs">Step 3 of 3</span>
                    </div>
                  )
                : "Thank You"}
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
          <div
            className={`w-full h-full flex flex-col lg:flex-row ${
              modalState === "got-job-survey"
                ? "min-h-[400px] sm:h-[373px]"
                : "min-h-[300px] sm:h-[373px]"
            }`}
          >
            {renderModalContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
