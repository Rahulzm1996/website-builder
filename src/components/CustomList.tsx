import React from "react";
import PropTypes from "prop-types";

interface CustomListProps {
  items: string[];
  ordered?: boolean;
  className?: string;
  styles?: React.CSSProperties;
}
const CustomList = ({
  items,
  ordered = false,
  styles,
  className = "",
}: CustomListProps) => {
  const ListTag = ordered ? "ol" : "ul";

  return (
    <ListTag className={className} style={{ ...styles }}>
      {items.map((item, index) => (
        <li key={index}>{item ?? "list item"}</li>
      ))}
    </ListTag>
  );
};

export default CustomList;
