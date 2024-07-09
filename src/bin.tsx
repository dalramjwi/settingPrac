import React from "react";
interface BinProps {
  h1TextNode: string;
}
const Bin: React.FC<BinProps> = ({ h1TextNode }) => {
  let style: React.CSSProperties = {
    color: "white",
    backgroundColor: "black",
    fontSize: "48px",
  };
  return (
    <div>
      <h1 style={style}>{h1TextNode}</h1>
    </div>
  );
};
export default Bin;
