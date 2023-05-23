//import { Fragment } from "react";
//import { MouseEvent } from "react";

import { useState } from "react";

// { items: [], heading: string }
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //items = [];

  //let selectedIndex = 0;

  // Hook
  //const arr = useState(-1);
  //arr[0]; // variable (selectedIndex)
  //arr[1]; // updater function
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //const message = items.length === 0 ? <p>No item found</p> : null;
  //{items.length === 0 && <p>No item found</p>} // Using logical and to perform the same task.
  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  // Event Handler
  //const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
