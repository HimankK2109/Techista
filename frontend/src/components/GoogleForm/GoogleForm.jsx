import React from "react";

const GoogleForm = () => {
  const googleFormLink = "https://forms.gle/96kws7DWLzp2MjZp9";
  return (
    <div className="w-full bg-black p-8 grid grid-cols-6 items-center rounded-md">
      <div className="col-span-5 mb-4 md:mb-0">
        <h2 className="text-3xl font-bold mb-2 text-orange-600">
          Welcome to Techista
        </h2>
        <p className="mb-1 text-base">
          We’d love to hear your feedback on how we can improve!.Let us know if
          there are any UI upgrades or additional features you'd like to see on
          our website.
        </p>
        <p className="mb-1 text-base">
          Your insights help us enhance both functionality and user experience
          .Please take a moment to fill out the attached
          Google form
        </p>
        <p className="mb-1 text-base">
          Thank you for being a valued member of the Techista community! 🥳🥳🥳
        </p>
      </div>

      {/* Right Section with a "Click Here" Button */}
      <div className="col-span-6 md:col-span-1 flex justify-center md:justify-end">
        <a href={googleFormLink} target="_blank" rel="noopener noreferrer">
          <button className="bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all duration-300">
            Click Here
          </button>
        </a>
      </div>
    </div>
  );
};

export default GoogleForm;
