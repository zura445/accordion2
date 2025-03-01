import "./App.css";
import Images from "./components/images";
import MainBox from "./components/MainBox";

function App() {
  return (
    <>
      <div className="bg-white py-0 md:py-[65px] md:pr-[95px] min-w-[327px] rounded-lg md:flex relative md:gap-[88px] p-5 md:p-0">
        <Images />
        <MainBox />
      </div>
    </>
  );
}

export default App;
