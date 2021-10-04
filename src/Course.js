import store from "./store";
import * as actions from "./actions";

function Course(props) {
  console.log(props)
  let courseSelection;
  console.log(`i am props.match.params.courseCode from course.js ${props.match.params.courseCode}`)
  store.dispatch(actions.selectCourse(props.match.params.courseCode));
  courseSelection = store.getState();

  // switch (props.match.params.course) {
  //   case "mdia2106":
  //     Store.dispatch(actions.showMDIA2106());
  //     break;
  //   case "comp3514":
  //     Store.dispatch(actions.showCOMP3514());
  //     break;
  //   case "blaw3205":
  //     Store.dispatch(actions.showBLAW3205());
  //     break;
  //   case "busa3455":
  //     Store.dispatch(actions.showBUSA3455());
  //     break;
  //   case "idsp3380":
  //     Store.dispatch(actions.showIDSP3380());
  //     break;
  //   case "mktg1352":
  //     Store.dispatch(actions.showMKTG1352());
  //     break;
  //   default:
  //     Store.dispatch(actions.showCOMP3330());
  //     break;
  // }
  console.log(courseSelection)
  return (
    <>
    <h1>COURSE PAGE</h1>
      <h3>{courseSelection.course}</h3>
      {courseSelection.description}
    </>
  );
}

export default Course;