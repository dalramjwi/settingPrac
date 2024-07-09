import React from "react";
interface BinProps {
  h1TextNode: string;
}
const Bin: React.FC<BinProps> = ({ h1TextNode }) => {
  let style: React.CSSProperties = {
    color: "blue",
  };
  return (
    <div>
      <h1 style="color: red;">{h1TextNode}</h1>
    </div>
  );
};
export default Bin;
