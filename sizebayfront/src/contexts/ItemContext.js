import React, { useState, createContext } from 'react';
import { generateId } from '../helpers/idGenerator';

export const itemContext = createContext();

export function ItemProvider(props) {
  const [itemsCollection, setItemsCollection] = useState([]);

  const [filterControl, setFilterControl] = useState({ clean: true, done: false, pending: false });
  const [isSearch, setIsSearch] = useState(false);
  const [searchText, setSearchText] = useState('');

  function handleAddItem(itemText) {
    const itemModel = {
      id: generateId(),
      content: itemText,
      isPending: true
    }

    setItemsCollection(prevState => {
      return [...prevState, itemModel]
    });
  }

  function handleChangeItemName(itemModified) {
    const updatedCollection = itemsCollection.map(itemCol => itemCol.id === itemModified.id ? itemModified : itemCol);
    setItemsCollection(updatedCollection);
  }

  function handleRemoveItem(arr) {
    setItemsCollection(arr);
  }

  function handleItemPending(newArr) {
    setItemsCollection(newArr);
  }

  function handleClickDone() {
    if (filterControl.clean && !filterControl.done && !filterControl.pending) {
      setFilterControl({ clean: false, done: true, pending: false });
    }
  }

  function handleClickPending() {
    if (filterControl.clean && !filterControl.done && !filterControl.pending) {
      setFilterControl({ clean: false, done: false, pending: true });
    }
  }

  function handleIsSearch(value) {
    setIsSearch(value);
  }

  function handleSearchText(text) {
    setSearchText(text);
  }

  return (
    <itemContext.Provider
      value={{
        itemsCollection,
        handleAddItem,
        handleRemoveItem,
        handleItemPending,
        filterControl,
        handleClickDone,
        handleClickPending,
        isSearch,
        handleIsSearch,
        searchText,
        handleSearchText,
        handleChangeItemName,
      }}
    >
      {props.children}
    </itemContext.Provider>
  );
}
