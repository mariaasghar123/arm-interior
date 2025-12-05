// WhatsAppButton.jsx
"use client";

import React from "react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/1234567890" // replace with your number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 z-50"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-14 h-14 hover:scale-110 transition-transform"
      />
    </a>
  );
}
