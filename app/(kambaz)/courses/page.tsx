import CourseCard from "../dashboard/CourseCard";

export default function CoursesPage() {
  return (
    <div id="wd-courses">
      <h1 id="wd-courses-title">Courses</h1>
      <hr />
      <h2 id="wd-courses-published">Published Courses (4)</h2>
      <hr />
      <div
        id="wd-courses-list"
        className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        <CourseCard
          _id="1234"
          name="CS1234 React JS"
          description="Full Stack software developer"
          image="/images/react_image.png"
        />
        <CourseCard
          _id="2345"
          name="CS2345 Node JS"
          description="Server side JavaScript"
          image="/images/nodejs.jpeg"
        />
        <CourseCard
          _id="3456"
          name="CS3456 MongoDB"
          description="NoSQL Databases"
          image="/images/mongodb.png"
        />
        <CourseCard
          _id="CS9999"
          name="CS9999 Sample Course"
          description="Assistant-generated sample — not my course"
          image="/images/reactjs.jpg"
        />
      </div>
    </div>
  );
}
