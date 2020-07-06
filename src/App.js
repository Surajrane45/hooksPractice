import React from "react";
import { Counter } from "./Hooks/hooksExample";
import { MyTodoList } from "./Hooks/Todos";
import CustomHook from "./Hooks/customHook";
import Practice from "./Immutable/immutableExamples";
import UserContainer from "./User/user";
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
        <Practice />
        <UserContainer />
      </MyThemeContext.Provider>
    </div>
  );
}

export default App;
