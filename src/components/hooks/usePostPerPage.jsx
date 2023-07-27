import { useState } from "react";
import useProductApi from "./useProductApi";

const usePostPerPage = () => {
  const liveBid = useProductApi();
  const [currentPage, setCurrentPage] = useState([2]);
  const [postPerPage, setPostPerPage] = useState([4]);

  const lastItem = currentPage * postPerPage;
  const firstItem = lastItem - postPerPage;
  const liveItems = liveBid.slice(firstItem, lastItem);

  return liveItems;
};

export default usePostPerPage;
