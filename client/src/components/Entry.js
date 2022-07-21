import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
function Entry(props) {
  return (
    <div className="Entry">
      <ul className="materials px-3">
        <li className="material">
          <span>{props.brand}</span>
          <span>{props.product}</span>
          <span>{props.amount}</span>
        </li>
        <FontAwesomeIcon className="fa-thumbs-up" icon={faThumbsUp} />
        <span className="fa fa-trash"></span>
      </ul>
    </div>
  );
}

export default Entry;
