interface textNode {
  textNode: string;
}
const ul: React.FC<textNode> = ({ textNode }) => {
  return <ul>{textNode}</ul>;
};
export default ul;
