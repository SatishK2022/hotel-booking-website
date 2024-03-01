import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components";
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <div>
        <Header />
        <Toaster position="top-center" reverseOrder={false} />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
