import React from "react";

interface textNode {
  textNode: string;
}
const li: React.FC<textNode> = ({ textNode }) => {
  return <li>{textNode}</li>;
};
export default li;
