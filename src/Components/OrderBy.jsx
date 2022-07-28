function OrderBy(props) {
  const { action, order } = props;
  const label = order ? 'DESC' : 'ASC';

  return (
    <p>Order list: <button onClick={action}>{label}</button></p>
  );
}

export default OrderBy;