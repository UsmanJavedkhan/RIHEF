import React, { useState, useEffect } from "react";

export default function ViewDetailsDialog({
  isOpen,
  onClose,
  title = "Courses Folders",
  tabs = [],
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (isOpen) setActiveIndex(0);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const { style: rootStyle } = document.documentElement;
    const prevHtmlOverflow = rootStyle.overflow;
    const prevBodyOverflow = document.body.style.overflow;

    rootStyle.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      rootStyle.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="courses-dialog-title"
    >
  
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Wrapper to center on desktop, full-screen on mobile */}
    {/* Overlay + Dialog wrapper */}
<div
  className="absolute inset-0 flex items-center justify-center p-0 sm:p-4"
  onClick={onClose} // ✅ close when clicking anywhere outside the dialog
>
  {/* Dialog container */}
  <div
    className="
      w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-5xl
      bg-white rounded-none sm:rounded-2xl shadow-2xl
      relative overflow-hidden flex flex-col
    "
    onClick={(e) => e.stopPropagation()} // ✅ prevent inside clicks from closing
  >
    {/* Header (sticky) */}
    <div className="px-6 pt-6 pb-4 sticky top-0 bg-white z-10">
      <h2
        id="courses-dialog-title"
        className="text-center text-2xl font-semibold"
      >
        {title}
      </h2>

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-5 text-gray-500 hover:text-gray-700"
        aria-label="Close"
      >
        ✕
      </button>
    </div>

    {/* Tabs */}
    <div className="px-4 sm:px-6 pt-2 sticky top-[68px] sm:top-[72px] bg-white z-10">
      <div className="flex items-center justify-between gap-3 overflow-x-auto no-scrollbar">
        {tabs.map((t, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={t.key || idx}
              onClick={() => setActiveIndex(idx)}
              className={[
                "whitespace-nowrap px-20 py-2 rounded-t-xl border transition text-sm",
                isActive
                  ? "bg-[rgba(86,64,150,1)] text-white border-[rgba(86,64,150,1)]"
                  : "bg-white text-gray-700 border-transparent hover:bg-gray-100",
              ].join(" ")}
            >
              {t.label}
            </button>
          );
        })}
      </div>
      <div className="h-[2px] w-full bg-gray-200" />
    </div>

    {/* Scrollable content */}
    <div className="flex-1 overflow-y-auto px-4 sm:px-6 pb-6 pt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {(tabs[activeIndex]?.items || []).map((item, i) => (
          <div
            key={i}
            className="border text-[rgba(0,0,0,0.8)] border-gray-200 rounded-lg px-4 py-3 text-xs bg-gray-50 hover:bg-gray-100"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


      {/* hide scrollbar styling for tabs row */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
