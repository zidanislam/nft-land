import { useState } from 'react';
import useProductApi from './useProductApi';

const useTopItems = () => {
    const allItems = useProductApi();
  const [currentPage, setCurrentPage] = useState([4]);
  const [postPerPage, setPostPerPage] = useState([4]);

  const lastItem = currentPage * postPerPage;
  const firstItem = lastItem - postPerPage;
  const topItems = allItems.slice(firstItem, lastItem);

  return topItems;
};

export default useTopItems;