import React from "react";
import "../assets/styles/components/Loader.scss";

interface LoaderProps {
  positionValue: string;
}

const Loader: React.FC<LoaderProps> = ({ positionValue }) => {
  return (
    <div
      // Tailwind {z-20}
      style={{ zIndex: 100 }}
      className={`${positionValue} start-50`}
    >
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
