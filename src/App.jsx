import "./App.css";

function App() {
  return (
    <>
      <div className="bg-white py-0 md:py-[65px] pr-0 md:pr-[95px] min-w-[327px] rounded-lg md:flex relative md:gap-10">
        <div className="">
          <div className="flex-justify-center hidden md:block">
            <img src="/mention-half.svg" alt="mention image" />
          </div>
          <div className="block md:hidden absolute top-[-110px] left-10">
            <img src="/mention-full.png" alt="mention image" />
          </div>
          <div className="absolute top-[-30px] left-[35px] md:top-[220px] md:left-[-70px]">
            <img
              src="/box.svg"
              alt="box image"
              className="w-[80px] md:w-[150px]"
            />
          </div>
        </div>
        <div className="mt-40">
          <h1 className="">FAQ</h1>
          <div className="flex items-center justify-center w-full gap-4 mt-10">
            <p className="flex items-center">
              How many team members can I invite?
            </p>
            <img src="/arrow.png" alt="arrow" className="w-4 h-2" />
          </div>
          <p className="mt-3">
            No more than 1GB. All files in your account must fit your allotted
            storage space.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
