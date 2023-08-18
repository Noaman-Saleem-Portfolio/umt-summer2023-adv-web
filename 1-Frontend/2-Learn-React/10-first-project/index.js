const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <img src="react-logo.png" />
        <p>ReactFacts</p>
      </div>
      <div className="nav-text">React Course - Project 1</div>
    </nav>
  );
};

function MainContent() {
  return (
    <div className="main-content">
      <h1>Fun Facts About React</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
        <li>Item 6</li>
      </ul>
    </div>
  );
}

const Page = () => {
  return (
    <div>
      <Nav />
      <MainContent />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
