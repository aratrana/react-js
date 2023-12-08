import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorite from "./pages/Favorites";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" Component={AllMeetupsPage}></Route>
          <Route path="/new-meetup" Component={NewMeetup}></Route>
          <Route path="/favorite" Component={Favorite}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
