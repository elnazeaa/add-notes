import React from "react";
import { FiEdit, FiTrash } from "react-icons/fi";

const ListDetail = ({ item, removeItems, handleEditList }) => {
  return (
    <article className="grocery-item">
      <p className="title">{item.name}</p>
      <div className="btn-container">
        <button
          type="button"
          className="edit-btn"
          onClick={() => handleEditList(item.id, item.name)}
        >
          <FiEdit />
        </button>
        <button
          type="button"
          className="delete-btn"
          onClick={() => removeItems(item.id)}
        >
          <FiTrash />
        </button>
      </div>
    </article>
  );
};

export default ListDetail;
