import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { handlePageChange } from "../../Redux/Products_Reducer/action";
import "./Pagination.css";

const Pagination = () => {
  const products = useSelector((store)=>store.ProReducer.products);
  const activePage = useSelector((store) => store.ProReducer.activePage);
  const perPage = useSelector((store) => store.ProReducer.perPage);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const totalPages = Math.ceil(products?.length / perPage);
  const currentPageFromParams = searchParams.get("page");

  const handleChangePage = (newPage) => {
     //console.log("hiii");
    dispatch(handlePageChange(newPage));
    const params = {
      page: newPage,
    };
    setSearchParams(params);
  };

  useEffect(() => {
    if (Number(currentPageFromParams)) {
      dispatch(handlePageChange(Number(currentPageFromParams)));
    }
  }, []);

  return (
    <div className="pagination" >
      {activePage !== 1 && (
        <button
          className="prevBtn"
          
          onClick={() => handleChangePage(activePage - 1)}
        >
          Prev
        </button>
      )}

      {totalPages &&
        Array(totalPages)
          .fill("")
          .map((item, index) => {
            return (
              <button
                key={index}
                className={index + 1 === activePage ? `activeBtn` : ""}
                onClick={() => handleChangePage(index + 1)}
              >
                {index + 1}
              </button>
            );
          })}
      {activePage !== totalPages && (
        <button
          className="nextBtn"
          
          onClick={() => handleChangePage(activePage + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
