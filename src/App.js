import { Link } from "react-router-dom";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query);
  //const filteredPosts = filterPosts(posts, searchQuery);

  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/services">Services</Link>
        <Link to="/shop">Shop</Link>

        <search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
    </Router>
  );
}

export default App;
