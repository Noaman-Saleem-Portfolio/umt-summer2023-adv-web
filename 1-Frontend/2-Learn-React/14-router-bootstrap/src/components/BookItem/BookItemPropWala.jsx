import React from 'react'

const BookItemPropWala = ({image,title,price}) => {
    // console.log(prop);
  return (
    <div className="text-center col-lg-4 col-sm-6 book-item-column">
        <div className="book-item">
          <img src={image} />
          <p>{title}</p>
          <p className="book-price">${price}</p>
        </div>
      </div>
  )
}

export default BookItemPropWala