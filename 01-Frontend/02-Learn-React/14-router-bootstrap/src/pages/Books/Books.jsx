import React from "react";
import BookItem from "../../components/BookItem/BookItem";

import booksData from "../../booksData"
import BookItemPropWala from "../../components/BookItem/BookItemPropWala";

const Books = () => {
    // console.log(booksData);
  return (
    <div className="books-div">
      <div className="container">
        <h2>Books for Sale</h2>
        <div className="row">
          {/* <BookItem /> */}
          {booksData.map((item) => {
            // console.log(item);
          return <BookItemPropWala image={item.image} title={item.title} price={item.price}/>
          } )}
        </div>
        {/* row */}
      </div>
      {/* container */}
    </div>
    // books-div
  );
};

export default Books;
