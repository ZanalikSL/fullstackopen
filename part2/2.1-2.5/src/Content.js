const Content = ({ parts }) => {
  const total = parts.reduce((s, p) => {
    return s + p.exercises;
  }, 0);
  return (
    <>
      {parts.map((part) => {
        return (
          <div>
            <p>
              {part?.name} {part?.exercises}
            </p>
          </div>
        );
      })}
      <strong>{`Total of ${total} exercises`}</strong>
    </>
  );
};

export default Content;
