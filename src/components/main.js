export const Item = ({ data: { id, title, thumbnail, price, quantity, total, discountPercentage, discountedTotal } }) => {
  const discountResult = discountedTotal.toFixed(2);

  return (
    <div className='card'>
      <div className='image'>
        <img alt="" src={thumbnail} />
      </div>
      <div className='content'>
        <div className='header'>
          {title}
        </div>
        <div className='meta'>
          <span className='price'> {price}</span>
        </div>
        <div className='description'>
          Quantity: {quantity} <br />
          Total: {total.toFixed(2)}$ <br />
          <span className={discountResult > 15 ? "discount" : ""}>
            Discount: {discountResult}% <br />
          </span>
          Discounted Total: {discountedTotal.toFixed(2)}$ <br />
        </div>
        <div className='extra-content'>
          <span className='right floated'>ID: {id}</span>
        </div>
      </div>
    </div>
  );
};

export const Main = ({ items }) => {
  return (
    <div className='ui link cards'>
      {items.map((item) => (
        <Item data={item} key={item.id} />
      ))}
    </div>
  );
};
