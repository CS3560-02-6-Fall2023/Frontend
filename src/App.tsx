// import SignInForm from "./components/signInForm";
import Chat from "./components/chat";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Userlist from "./components/userlist";
function App() {
  return (
      <div className="flex h-screen overflow-hidden">
        <Navbar />
        <Sidebar />
        <Chat/>
        <Userlist />
      </div>
  );
}

export default App;
