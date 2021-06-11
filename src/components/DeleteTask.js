import React from 'react';

const [Items, setItems] = useState([]);

const DeleteTask = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      })
    })
};

export default DeleteTask;