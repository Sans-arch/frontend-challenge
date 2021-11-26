import React, { useContext } from 'react';

import { itemContext } from '../../contexts/ItemContext';
import { generateId } from '../../helpers/idGenerator';

import { Wrapper, Input, Button } from './styles';

export default function ItemAddBar() {
  const { itemText, handleText, handleItemCollection } = useContext(itemContext);

  function addItem() {
    if (!itemText) return;

    const itemModel = {
      id: generateId(),
      content: itemText,
      isPending: true
    }

    handleItemCollection(itemModel);
    handleText('');
  }

  function addByPressEnter(e) {
    if (e.key === 'Enter') {
      addItem();
      handleText('');
    }
  }

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Add new item..."
        onChange={e => handleText(e.target.value)}
        value={itemText}
        onKeyUp={addByPressEnter}
      />
      <Button
        onClick={addItem}
      >
        <div id="border">
          +
        </div>
      </Button>
    </Wrapper>
  );
}
