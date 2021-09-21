import { useState, useContext } from "react";
import { ThemeContext, ThemeType } from "../ThemeContext";
import { useSelector, useDispatch } from "react-redux";
import { AddNote } from "../actions";
import { RootReducerType } from "../Reducers";

function NotesList() {
  const [Inp, setInp] = useState<string>("");
  const { theme } = useContext<ThemeType>(ThemeContext);

  const Note = useSelector((state: RootReducerType) => state.note);
  const dispatch = useDispatch();
  return (
    <div className="TodoList">
      <div className="Search">
        <input
          type="text"
          value={Inp}
          placeholder="Enter a Todo"
          onChange={(e) => {
            setInp(e.target.value);
          }}
        />
        <button
          className={theme ? "" : "Dark"}
          onClick={() => {
            Inp.length > 0
              ? dispatch(AddNote(Inp))
              : alert("Please enter a todo");
            setInp("");
          }}
        >
          Add Todo
        </button>
      </div>
      <div className="NotesList">
        {Note.length > 0
          ? Note.map((note: string, index: number) => (
              <div key={index} className="Notes">
                {note}
              </div>
            ))
          : [...Array(3)].map((_, i) =>
              i === 1 ? <h1>No Note</h1> : <div></div>
            )}
      </div>
    </div>
  );
}

export default NotesList;
