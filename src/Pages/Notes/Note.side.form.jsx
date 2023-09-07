import { useState } from "react";
import ImportantButton from "./ImportantButton";
import noteService from "../../Services/note.services";
import { v4 as uuidv4 } from "uuid";

const NoteSideForm = ({ notesUpdateOndAdd }) => {
  const [noteImportant, setNoteImportant] = useState(false);
  const [newNote, setNewNote] = useState("");
  const [newTitle, setNewTitle] = useState("");

  const addNote = (event) => {
    event.preventDefault();
    const isContentEmpty = newNote.length === 0;
    const isTitleEmpty = newTitle.length === 0;
    const currentDate = new Date();
    const noteObject = {
      id: uuidv4(),
      title: isTitleEmpty ? "sin titulo" : newTitle,
      content: isContentEmpty ? "Sin contenido" : newNote,
      createdAt: currentDate.toISOString(),
      modified: currentDate.toISOString(),
      important: noteImportant,
      isDone: false,
    };

    if (!isContentEmpty || !isTitleEmpty) {
      noteService
        .create(noteObject)
        .then((returnedNote) => {
          notesUpdateOndAdd(returnedNote);
          setNewNote("");
          setNewTitle("");
          noteImportant && setNoteImportant(false);
        })
        .catch((error) => {
          console.error("Error al agregar la nota:", error);
        });
    }
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };
  const handleTitleChange = (event) => {
    setNewTitle(event.target.value);
  };

  return (
    <>
      <div>
        <form onSubmit={addNote}>
          <div className="py-3 space-y-2">
            <input
              placeholder="Title"
              value={newTitle}
              onChange={handleTitleChange}
              className="input input-bordered border-solid input-md w-full"
            />

            <textarea
              placeholder="Note..."
              value={newNote}
              onChange={handleNoteChange}
              className="textarea textarea-bordered textarea-lg w-full h-[150px] resize-none"
            />
          </div>
          <button type="submit" className="btn btn-neutral w-full">
            save
          </button>
        </form>
      </div>
      <div className="py-2">
        <ImportantButton
          isChecked={noteImportant}
          setChecked={setNoteImportant}
        />
      </div>
    </>
  );
};

export default NoteSideForm;
