import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { useItem } from '../../contexts/item';

import Item from '../../components/Item';
import { ItemsArea } from '../../components/Item/styles';

import { Container } from './styles';

export default function Done() {
  const history = useHistory();

  const { itemsCollection, isSearch, searchText, setDisableDone, foundedCollection, handleDoneTasks } = useItem();
  const [filteredCollection, setFilteredCollection] = useState([]);

  const disableFilter = () => {
    history.push('/');
    setDisableDone(true);
  };

  useEffect(() => {
    document.title = 'Done Items';
 });

  useEffect(() => {
    const filtered = itemsCollection.filter(item => item.isPending === false);
    setFilteredCollection(filtered);
  }, [])

  // useEffect(() => {
  //   const foundItemsArray = filteredCollection.push(itemCollection => itemCollection.content.toLowerCase().includes(searchText.toLowerCase()));
  //   setSearchedItems(foundItemsArray);

  //   return () => {
  //     setDisableDone(false);
  //   }
  // }, [searchText]);
  useEffect(() => {
    return () => {
      setDisableDone(false);
    }
  }, [])

  return (
    <Container>
      <ItemsArea>
        {!filteredCollection.length && (
          <p>
            There are no items marked as done. <span onClick={disableFilter}>Clear the filter here</span> to see all items.
          </p>
        ) ||
          isSearch && (
            ((itemsCollection.filter(item => item.isPending === false)).filter(item => item.content.toLowerCase().includes(searchText.toLowerCase()))).map((item, index) => (
              <Item key={index} data={item} />
            ))
          )
          ||
          (
            (itemsCollection.filter(item => item.isPending === false)).map((item, index) => (
              <Item key={index} data={item} />
            ))
          )}
      </ItemsArea>
    </Container>
  );
}
