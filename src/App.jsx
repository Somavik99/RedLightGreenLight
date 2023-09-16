const App = () => {
  function AppE() {
    let h1 = document.querySelector("#h1");
    h1.addEventListener("click", () => {
      return setTimeout(() => {
        console.log("GetValue");
        console.log(Math.random() * 1.5);
      }, Math.random() * 1.5);
    });
  }
  AppE();
  return (
    <>
      <div className="text-center">
        <h1 id="h1" className="text-[80px]">
          Red Light Green Light
        </h1>
      </div>
    </>
  );
};

export default App;
