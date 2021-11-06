import React from "react";
import ListDetail from "./ListDetail";

const Lists = ({ lists, removeItems, handleEditList }) => {
  return (
    <div className="grocery-list">
      {lists.map((item) => {
        return (
          <ListDetail
            key={item.id}
            item={item}
            removeItems={removeItems}
            handleEditList={handleEditList}
          />
        );
      })}
    </div>
  );
};

export default Lists;
