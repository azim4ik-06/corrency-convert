import { ReactNode } from "react";

interface Box {
  children: ReactNode;
}

export default function Box({ children }: Box) {
  return (
    <div className="bg-white max-w-4xl mx-auto my-10 p-5 rounded-lg shadow-md container">
      {children}
    </div>
  );
}
