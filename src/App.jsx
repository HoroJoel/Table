import "./App.css";
import AccountTable from "./components/AccountTable/";
import { data } from "./mock";

function App() {
  return (
    <>
      <h1 className=" text-lg  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 m-4">
        List account
      </h1>
      <AccountTable data={data} />
    </>
  );
}

export default App;
