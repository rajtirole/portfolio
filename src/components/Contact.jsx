import React from "react";

const Contact = () => {
  return (
    <div className=" py-44 bg-white">
      <div
        className="mx-auto max-w-screen-lg px-4 flex flex-col  justify-center gap-4"
        id="contact"
      >
        <p className="text-[#147efb] text-lg font-bold mb-2 uppercase">
          Contact
        </p>
        <p className="text-2xl font-medium mt-2">Feel free to reach out! 👇</p>
        <div className="flex flex-wrap gap-10 mt-10">
          <div className="items-center flex gap-6">
            <span className="items-center bg-white rounded-full shadow-md text-[#147efb] flex h-14 justify-center w-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="tabler-icon tabler-icon-map-search"
              >
                <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                <path d="M9 4v13"></path>
                <path d="M15 7v5"></path>
                <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M20.2 20.2l1.8 1.8"></path>
              </svg>
            </span>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-lg">Location</p>
              <p>Madhya Pradesh, India</p>
            </div>
          </div>
          <div className="items-center flex gap-6">
            <span className="items-center bg-white rounded-full shadow-md text-[#147efb] flex h-14 justify-center w-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="tabler-icon tabler-icon-mail"
              >
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                <path d="M3 7l9 6l9 -6"></path>
              </svg>
            </span>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-lg">Mail</p>
              <a href="mailto:rajtirole23454@gmail.com">
                rajtirole23454@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
