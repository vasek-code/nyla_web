import React, { ReactNode } from "react";
import { Footer } from "./Footer";

export const Wrapper: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};
