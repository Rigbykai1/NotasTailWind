import noteService from "../Services/note.services";
import { useState, useEffect } from "react";

const useNotes = (newNote) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    noteService
      .getAll()
      .then((initialNotes) => {
        setNotes(initialNotes);
      })
      .catch((error) => {
        console.error("Error al mostrar las notas:", error);
      });
  }, []);

  const concatNotes = () => {
    setNotes(notes.concat(newNote));
  };

  return [notes, concatNotes];
};
export default useNotes;
