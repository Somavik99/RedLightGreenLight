function useColor({CLickCallBackRed,CLickCallBackGreen}){
    const DivTags = [
        {
          red: (
            <div
              style={{
                width: "20vw",
                height: "20vw",
                backgroundColor: "red",
                margin: "auto",
                padding: "8%",
                paddingTop: "20%",
              }}
              onClick={CLickCallBackRed}
            >
              Change Color
            </div>
          ),
        },
        {
          green: (
            <div
              style={{
                width: "20vw",
                height: "20vw",
                backgroundColor: "light-green",
                margin: "auto",
                padding: "8%",
                paddingTop: "20%",
              }}
              onClick={CLickCallBackGreen}
            >
              Change Color
            </div>
          ),
        },
      ];
     return{DivTags} 
}

export default useColor;
