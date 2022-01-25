import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Link to= "/">AllMeetups</Link>
      <Link to= "/new-meetup">New Meet Up</Link>
      <Link to= "/favorites">Favorites</Link>

    </div>
  );
}

export default App;
// function Users() {
//   /* All <Route path> and <Link to> values in this
//      component will automatically be "mounted" at the
//      /users URL prefix since the <Users> element is only
//      ever rendered when the URL matches /users/*
//   */
//   return (
//     <div>
//       <nav>
//         <Link to="me">My Profile</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<UsersIndex />} />
//         <Route path=":id" element={<UserProfile />} />
//         <Route path="me" element={<OwnUserProfile />} />
//       </Routes>
//     </div>
//   );
// }
