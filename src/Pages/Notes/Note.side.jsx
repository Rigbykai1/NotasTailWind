import NoteFilter from "./Note.filter";
import NoteCard from "./Note.card";
import { useState, useEffect } from "react";
import noteService from "../../Services/note.services";
import NoteSideForm from "./Note.side.form";
import { AnimatePresence } from "framer-motion";

const NoteSide = () => {
  const [notes, setNotes] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [showImportant, setShowImportant] = useState(false);
  const [filterNotes, setFilterNotes] = useState([]);

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

  const notesUpdateOndAdd = (updatedNote) => {
    setNotes(notes.concat(updatedNote));
    if (updatedNote.important === true) {
      setFilterNotes(filterNotes.concat(updatedNote));
    }
  };

  const onDelete = (id) => {
    noteService
      .remove(id)
      .then(() => {
        const updateDelete = notes.filter((note) => note.id !== id);
        setNotes(updateDelete);
        setFilterNotes(
          updateDelete.filter((notes) => notes.important === true)
        );
      })
      .catch((error) => {
        console.error("Error al eliminar la nota:", error);
      });
  };

  const importantFilter = () => {
    setShowImportant(!showImportant);
    const filteredNotes = showImportant
      ? []
      : notes.filter((note) => note.important === true);
    setFilterNotes(filteredNotes);
  };

  const showAllFilter = () => {
    setShowAll(!showAll);
    const filteredNotes = showImportant
      ? notes.filter((note) => note.important === true)
      : [];
    setFilterNotes(filteredNotes);
  };

  const [screenResolution, setScreenResolution] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const updateScreenResolution = () => {
    setScreenResolution({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenResolution);
    return () => {
      window.removeEventListener("resize", updateScreenResolution);
    };
  }, []);

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
