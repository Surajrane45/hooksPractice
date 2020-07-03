import React from "react";
import { Counter } from "./example";
import { MyTodoList } from "./Todos";
import CustomHook from "./customHook";
import "./App.css";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

export const MyThemeContext = React.createContext(themes.light);

function App() {
  return (
    <div>
      <MyThemeContext.Provider value={themes.dark}>
        <h1>Hooks Practice</h1>
        <Counter />
        <MyTodoList />
        <CustomHook />
      </MyThemeContext.Provider>
    </div>
  );
}

export default App;
