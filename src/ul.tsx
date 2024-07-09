interface ChildrenProps {
  children: React.ReactNode;
}
const Ul: React.FC<ChildrenProps> = ({ children }) => {
  return <ul>{children}</ul>;
};
export default Ul;
