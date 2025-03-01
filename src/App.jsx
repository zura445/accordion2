import "./App.css";
import ImagesBox from "./components/ImagesBox";
import MainBox from "./components/MainBox";

function App() {
  return (
    <>
      <div className="bg-white py-0 md:py-[65px] md:pr-[95px] min-w-[327px] rounded-lg md:flex relative md:gap-[88px] p-5 md:p-0">
        <ImagesBox />
        <MainBox />
      </div>
    </>
  );
}

export default App;
