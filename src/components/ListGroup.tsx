function ListGroup() {
  let items = ["New Yourk", "San Frincico", "Tokyo", "London"];

  // items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item, index)}
          >
            {item}
          </li>
        ))}
        s
      </ul>
    </>
  );
}

export default ListGroup;
