function SortBy(props) {
  const { action, sort } = props;

  const options = [
    {
      label: 'Title',
      value: 'title',
    },
    {
      label: 'Author',
      value: 'author',
    },
    {
      label: 'Popularity',
      value: 'votes',
    },
    {
      label: 'Published Date',
      value: 'created_at',
    },
    {
      label: 'Number of comments',
      value: 'comment_count',
    },
  ];

  return (
    <>
      <label htmlFor="sort-by-list">Sort list by:</label>
      <select value={sort} id="sort-by-list" onChange={action}>
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </>
  );
}

export default SortBy;