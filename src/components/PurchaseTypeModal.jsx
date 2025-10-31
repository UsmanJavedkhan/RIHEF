import React from "react";
import QuestionIcon from "../assets/images/stash_exclamation-circle.svg"; 

export default function PurchaseTypeModal({ isOpen, onClose, onSwitch }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-[200]">
      <div
        className="bg-white rounded-xl shadow-xl w-[90%] max-w-md p-8 text-center relative"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={QuestionIcon}
          alt="question"
          className="w-12 h-12 mx-auto mb-4 opacity-70"
        />
        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          Looks like a company purchase
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          You are buying multiple seats. Switch to <b>Company</b> so we can
          capture business details and issue proper invoices.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
          >
            Stay Individual
          </button>
          <button
            onClick={onSwitch}
            className="px-6 py-2 bg-[rgba(86,64,150,1)] text-white rounded-md hover:bg-[rgba(80,64,150,1)] transition"
          >
            Switch to Company
          </button>
        </div>
      </div>
    </div>
  );
}
