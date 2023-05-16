import DefaultPage from "./modules/default";
import Sidebar from "./modules/sidebar";

function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">
        <DefaultPage />
      </div>
    </div>
  );
}

export default App;
