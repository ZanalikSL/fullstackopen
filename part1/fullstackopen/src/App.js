const Header = ({ course }) => {
  return <h1>{course}</h1>;
};
const Content = ({ parts, exercises }) => {
  const { part1, part2, part3 } = parts;
  const { exercises1, exercises2, exercises3 } = exercises;

  return (
    <div>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
    </div>
  );
};
const Total = ({ exercises }) => {
  const { exercises1, exercises2, exercises3 } = exercises;
  return (
    <>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </>
  );
};

const App = () => {
  // Data for main page
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  // Objects for main page
  const parts = { part1, part2, part3 };
  const exercises = { exercises1, exercises2, exercises3 };

  return (
    <>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Total exercises={exercises} />
    </>
  );
};

export default App;
