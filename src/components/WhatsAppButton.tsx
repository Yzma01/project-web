"use client";
import React, { useState } from "react";
import personIcon from "../images/person.jpg";
import messageIcon from "../images/message.png";
import Image from "next/image";

export default function WhatsAppButton() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      {!showPopup && (
        <div className="fixed bottom-5 left-7 z-50">
          <div
            className="transition-transform duration-300 hover:scale-110"
            onClick={togglePopup}
          >
            <div className="bg-green-500 rounded-full p-3 text-white w-12 h-12 md:w-16 md:h-16 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="currentColor"
                className="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {showPopup && (
        <div className="fixed bottom-0 left-0 mb-4 ml-4 z-50">
          <div className="max-w-md w-full">
            <div className="bg-white shadow-md rounded-lg max-w-lg w-full border border-black md:max-w-md">
              <div className="p-2 md:p-4 border-b bg-green-500 text-white rounded-t-lg flex justify-between items-center">
                <p className="text-sm md:text-lg font-semibold">Admin Bot</p>
                <button
                  id="close-chat"
                  className="text-red-600 hover:text-red-500 focus:outline-none focus:text-red-500"
                  onClick={togglePopup}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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
              <div id="chatbox" className="p-2 md:p-4 h-32 overflow-y-auto">
                <div className="mb-2 flex items-center">
                  <p className="bg-gray-200 text-gray-700 rounded-lg py-3 px-5 inline-block">
                    Hola, ¿en qué puedo ayudarte?
                  </p>
                  <Image
                    src={personIcon}
                    alt="Phone"
                    width={45}
                    height={45}
                    className="rounded-full ml-2"
                  />
                </div>
              </div>
              <div className="p-2 md:p-4 border-t flex items-center">
                <Image
                  src={messageIcon}
                  alt="Phone"
                  width={30}
                  height={30}
                  className="mr-2"
                />
                <button
                  id="send-button"
                  className="bg-green-500 text-black px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
                >
                  Open chat
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}