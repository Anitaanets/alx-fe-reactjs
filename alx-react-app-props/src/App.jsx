import ProfilePage from "./ProfilePage";
import UserContext from "./components/UserContext";

function App() {
  const userData = { name: "Jane Doe", email: "anetsanita7@gmal.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
