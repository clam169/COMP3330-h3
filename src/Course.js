import store from "./store";
import * as actions from "./actions";

function Course(props) {
  let courseSelection;
  store.dispatch(actions.selectCourse(props.match.params.courseCode));
  courseSelection = store.getState();

  return (
    <>
      <h1>COURSE PAGE</h1>
      <h3>{courseSelection.course}</h3>
      <p>{courseSelection.description}</p>
    </>
  );
}

export default Course;