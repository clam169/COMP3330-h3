import {Route, Link} from 'react-router-dom';
import Course from './Course';

function List() {
  return (
    <>
      <h1>List of courses</h1>
			<ul>
        <li>
					<Link to="/courses/mdia2106">MDIA 2106: Design 1</Link>
				</li>
				<li>
					<Link to="/courses/comp3514">COMP 3514: Web C# Application Development</Link>
				</li>
				<li>
					<Link to="/courses/blaw3205">BLAW 3205: Internet and IT Law</Link>
				</li>
        <li>
					<Link to="/courses/busa3455">BUSA 3455: Introduction to E-commerce</Link>
				</li>
        <li>
					<Link to="/courses/idsp3380">IDSP 3380: Web Projects 2</Link>
				</li>
        <li>
					<Link to="/courses/mktg1352">MKTG 1352: Digital Marketing</Link>
				</li>
				<li>
					<Link to="/courses/comp3330">COMP 3330: Javascript frameworks and server</Link>
				</li>
			</ul>
      <Route path="/courses/:courseCode" component={Course} />
    </>
  );
}

export default List;