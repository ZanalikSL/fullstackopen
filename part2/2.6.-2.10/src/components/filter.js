const Filter = ({ filter, handleChangeFilter }) => {
  return (
    <div>
      Filter shown with: <input value={filter} onChange={handleChangeFilter} />
    </div>
  );
};

export default Filter;
