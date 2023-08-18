function temporaryName() {
  return (
    <div>
      <img src="./react-logo.png" width="40px" />
      <h1>Fun facts about React...</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

// ReactDOM.render(temporaryName(), document.getElementById("root"));
ReactDOM.createRoot(document.getElementById("root")).render(temporaryName());

////////////////////////////////////////////////////////////////////////////////////////////////////

// function TemporaryName() {
//   return (
//     <div>
//       <img src="./react-logo.png" width="40px" />
//       <h1>Fun facts about React</h1>
//       <ul>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100K stars on GitHub</li>
//         <li>Is maintained by Facebook</li>
//         <li>Powers thousands of enterprise apps, including mobile apps</li>
//       </ul>
//     </div>
//   );
// }

// ReactDOM.render(<TemporaryName />, document.getElementById("root"));
// ReactDOM.createRoot(document.getElementById("root")).render(<TemporaryName />);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx development. All rights reserved."
 */

//SOLUTION

// function Page() {
//   return (
//     <div>
//       <header>
//         <nav>
//           <img src="./react-logo.png" width="40px" />
//         </nav>
//       </header>
//       <h1>Reasons I'm excited to learn React</h1>
//       <ol>
//         <li>
//           It's a popular library, so I'll be able to fit in with the cool kids!
//         </li>
//         <li>I'm more likely to get a job as a developer if I know React</li>
//       </ol>
//       <footer>
//         <small>© 2021 SherKhan development. All rights reserved.</small>
//       </footer>
//     </div>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Page />);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Quiz!

// 1. What is a React component?

// 2. What's wrong with this code?
// ```
// function myComponent() {
//     return (
//         <small>I'm tiny text!</small>
//     )
// }
// ```

// 3. What's wrong with this code?
// ```
// function Header() {
//     return (
//         <header>
//             <nav>
//                 <img src="./react-logo.png" width="40px" />
//             </nav>
//         </header>
//     )
// }

// ReactDOM.render(Header(), document.getElementById("root"))
// ```

//SOLUTION
// Quiz!

// 1. What is a React component?
// A function that returns React elements. (UI)

// 2. What's wrong with this code?
// ```
// function MyComponent() {
//     return (
//         <small>I'm tiny text!</small>
//     )
// }
// ```

// 3. What's wrong with this code?
// ```
// function Header() {
//     return (
//         <header>
//             <nav>
//                 <img src="./react-logo.png" width="40px" />
//             </nav>
//         </header>
//     )
// }

// ReactDOM.render(<Header />, document.getElementById("root"))
// ```
