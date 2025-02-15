import { Link } from "react-router-dom";

const ListItem = (props) => {
  return (
    <Link to={props.link_to} className="h-10 flex flex-row justify-center items-center gap-2 mt-1 text-xs px-3 ml-3">

      <div className="flex items-center justify-center">
        {props.icon}
      </div>

      <div className="flex items-center ">
        {props.item}
      </div>
    </Link>

  )
};

export default ListItem;
