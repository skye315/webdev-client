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
          id="1234"
          title="CS1234 React JS"
          subtitle="Full Stack software developer"
          image="/images/react_image.png"
        />
        <CourseCard
          id="2345"
          title="CS2345 Node JS"
          subtitle="Server side JavaScript"
          image="/images/nodejs.jpeg"
        />
        <CourseCard
          id="3456"
          title="CS3456 MongoDB"
          subtitle="NoSQL Databases"
          image="/images/mongodb.png"
        />
        <CourseCard
          id="CS9999"
          title="CS9999 Sample Course"
          subtitle="Assistant-generated sample — not my course"
          image="/images/reactjs.jpg"
        />
      </div>
    </div>
  );
}
