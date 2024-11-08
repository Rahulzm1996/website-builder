import { ElementContainer } from "./ElementContainer";

const DynamicElementContainer = ({ component: Component, ...props }) => {
  const { sectionIdx, rowIdx, columnIdx, elementIdx, elementId, type } = props;

  return (
    <ElementContainer
      key={columnIdx}
      sectionIdx={sectionIdx}
      rowIdx={rowIdx}
      columnIdx={columnIdx}
      elementIdx={elementIdx}
      elementId={elementId}
      type={type}
    >
      <Component {...props} />
    </ElementContainer>
  );
};

export default DynamicElementContainer;
