export default function Destructing() {
  const person = { name: "John", age: 25, city: "Boston" };
  const { name, age, city } = person;
  const numbers = ["four", "one", "two", "three"];
  const [first, second, third] = numbers;
  return (
    <div id="wd-destructing">
      <h2>Destructing</h2>
      <h3>Object Destructing</h3>
      const &#123; name, age, city &#125; = &#123; name: "John", age: 25, city: "Boston" &#125; <br /> <br />
      name = {name}     <br />
      age = {age}       <br />
      city = {city}
      <h3>Array Destructing</h3>
      const [first, second, third] = ["one","two","three"] <br /> <br />
      first = {first}   <br />
      second = {second} <br />
      third = {third}
      <hr />
    </div>
  );
}