import NoteFilter from "./Note.filter";
import NoteCard from "./Note.card";
import { useState, useEffect, useReducer } from "react";
import noteService from "../../Services/note.services";
import NoteSideForm from "./Note.side.form";
import { AnimatePresence } from "framer-motion";

/**
 * React component that displays a list of notes and allows the user to filter and interact with them.
 */
const NoteSide = () => {
  // State variables
  const [notes, setNotes] = useState([]);
  const [filterNotes, setFilterNotes] = useState([]);
  const [screenResolution, setScreenResolution] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Reducer
  const initialState = {
    showAll: true,
    showImportant: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_SHOW_ALL":
        return { ...state, showAll: action.payload };
      case "SET_SHOW_IMPORTANT":
        return { ...state, showImportant: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { showAll, showImportant } = state;

  // Fetch initial notes from server
  useEffect(() => {
    noteService
      .getAll()
      .then((initialNotes) => {
        setNotes(initialNotes);
      })
      .catch((error) => {
        // Handle the error using a proper error handling mechanism or library
        // For example, display an error message to the user or log the error in a centralized location
        handleError(error);
      });
  }, []);

  // Update screen resolution on window resize
  useEffect(() => {
    const updateScreenResolution = () => {
      setScreenResolution({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", updateScreenResolution);
    return () => {
      window.removeEventListener("resize", updateScreenResolution);
    };
  }, []);

  // Handle updates and additions to notes
  const notesUpdateOndAdd = (updatedNote) => {
    setNotes((prevNotes) => [...prevNotes, updatedNote]);
    if (updatedNote.important) {
      setFilterNotes((prevFilterNotes) => [...prevFilterNotes, updatedNote]);
    }
  };

  // Handle note deletion
  const onDelete = (id) => {
    noteService
      .remove(id)
      .then(() => {
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
        setFilterNotes((prevFilterNotes) =>
          prevFilterNotes.filter((note) => note.id !== id)
        );
      })
      .catch((error) => {
        console.error("Error al eliminar la nota:", error);
      });
  };

  // Toggle important filter and filter notes accordingly
  const importantFilter = () => {
    dispatch({ type: "SET_SHOW_IMPORTANT", payload: !showImportant });
    const filteredNotes = showImportant
      ? []
      : notes.filter((note) => note.important);
    setFilterNotes(filteredNotes);
  };

  // Toggle show all filter and filter notes accordingly
  const showAllFilter = () => {
    dispatch({ type: "SET_SHOW_ALL", payload: !showAll });
    const filteredNotes = showImportant
      ? notes.filter((note) => note.important)
      : [];
    setFilterNotes(filteredNotes);
  };

  // Determine which notes to show based on showAll state
  const notesToShow = showAll ? notes : filterNotes;

  return (
    <div>
      <div className="flex justify-between py-3">
        <NoteFilter
          showAll={showAll}
          showImportant={showImportant}
          importantFilter={importantFilter}
          showAllFilter={showAllFilter}
        />
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 overflow-y-scroll py-10 min-h-[280px] place-items-center"
        style={{
          maxHeight: screenResolution.height - screenResolution.height / 2,
        }}
      >
        <AnimatePresence>
          {notesToShow.map((note, index) => (
            <NoteCard
              key={note.id}
              index={index}
              note={note}
              onDelete={onDelete}
            />
          ))}
        </AnimatePresence>
      </div>
      <div>
        <NoteSideForm notes={notes} notesUpdateOndAdd={notesUpdateOndAdd} />
      </div>
    </div>
  );
};

export default NoteSide;
