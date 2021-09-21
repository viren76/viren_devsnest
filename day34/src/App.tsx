import "./App.css";
import Mode from "./components/Mode";
import NotesList from "./components/NotesList";
import { ThemeContext } from "./ThemeContext";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState<boolean>(false);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme ? "App Dark" : "App"}>
        <NotesList />
        <Mode />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
