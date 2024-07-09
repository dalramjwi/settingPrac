import React from "react";
interface BinProps {
  h1TextNode: string;
}
const Bin: React.FC<BinProps> = ({ h1TextNode }) => {
  return (
    <div>
      <h1>{h1TextNode}</h1>
    </div>
  );
};
export default Bin;
