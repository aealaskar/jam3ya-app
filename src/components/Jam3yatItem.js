import { Card, Button } from "react-bootstrap";
export default function Jam3yatItem(props) {
  const jam3ya = props.jam3ya;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={jam3ya.image} />
        <Card.Body>
          <Card.Title>{jam3ya.title}</Card.Title>
          <Card.Title>{jam3ya.amount}</Card.Title>
          <Card.Title>{jam3ya.limit}</Card.Title>
          <Card.Title>{jam3ya.startDate}</Card.Title>
          <Card.Title>{jam3ya.endDate}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

// export default function CourseItem(props) {
//   const course = props.course;
//   return (
//     <div class="col-xl-4 col-lg-4 col-md-6">
//       <div class="single-course wow fadeInUp" data-wow-delay=".2s">
//         <div class="course-img">
//           <a href="course-single.html">
//             <img src={course.image} alt="" />
//           </a>
//         </div>
//         <div class="course-info">
//           <h4>
//             <a href="course-single.html">{course.title}</a>
//           </h4>
//           <div class="course-meta">Instructor : {course.instructor}</div>
//         </div>
//       </div>
//     </div>
//   );
// }
