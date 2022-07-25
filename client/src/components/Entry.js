import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Entry(props, { setEntries }) {
  const deleteProject = async (brand, product) => {
    try {
      const response = await fetch("/deleteMaterial", {
        method: "delete",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          brand: brand,
          product: product,
        }),
      });
      const data = await response.json();
      console.log(data);
      // location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Entry">
      <ul className="materials px-3">
        <li className="material">
          <span>{props.brand}</span>
          <span>{props.product}</span>
          <span>{props.amount}</span>
        </li>
        <FontAwesomeIcon className="add-one-icon" icon={faThumbsUp} />
        <FontAwesomeIcon
          onClick={(e) => deleteProject(props.brand)}
          className="delete-icon"
          icon={faTrashCan}
        />
      </ul>
    </div>
  );
}

export default Entry;
