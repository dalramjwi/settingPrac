interface textNode {
  textNode: React.ReactNode;
}
const ul: React.FC<textNode> = ({ textNode }) => {
  return <ul>{textNode}</ul>;
};
export default ul;
