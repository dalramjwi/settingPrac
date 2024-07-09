import React from "react";
interface BinProps {
  h1TextNode: string;
  styles: React.CSSProperties;
}
let styles: React.CSSProperties = {
  color: "white",
  backgroundColor: "black",
  fontSize: "48px",
};
const Bin: React.FC<BinProps> = ({ h1TextNode, styles }) => {
  return (
    <div>
      <h1 style={styles}>{h1TextNode}</h1>
    </div>
  );
};
export default Bin;
