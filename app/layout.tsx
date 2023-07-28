import React, { ReactNode } from "react";
import "../styles/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="max-w-[1000px] m-auto pb-4 overflow-visible">{children}</body>
    </html>
  );
}
