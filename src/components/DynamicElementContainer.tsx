import { ElementContainer } from "./ElementContainer";

const DynamicElementContainer = ({ component: Component, ...props }) => {
  const { sectionIdx, rowIdx, columnIdx, type } = props;

  return (
    <ElementContainer
      key={columnIdx}
      sectionIdx={sectionIdx}
      rowIdx={rowIdx}
      columnIdx={columnIdx}
      type={type}
    >
      <Component {...props} />
    </ElementContainer>
  );
};

export default DynamicElementContainer;
