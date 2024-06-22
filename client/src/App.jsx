import "./App.css";
import SideBar from "./pages/SideBar/SideBar";
import TopBar from "./pages/TopBar/TopBar";
function App({ page }) {
  return (
    <>
      <TopBar />
      <div className="h-100 flex w-full flex-row">
        <SideBar />
        {page}
      </div>
    </>
  );
}

export default App;
