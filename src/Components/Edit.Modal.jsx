import { useState } from "react";
import noteService from "../Services/notes.services";
import ImportantButton from "../Pages/Notes/ImportantButton";

const EditModal = ({ note, modalOpen, closeModal, onUpdateNote }) => {
  const [newTitle, setNewTitle] = useState(note.title);
  const [newContent, setNewContent] = useState(note.content);
  const [noteImportant, setNoteImportant] = useState(note.important);

  const handleContent = (event) => {
    setNewContent(event.target.value);
  };
  const handleTitle = (event) => {
    setNewTitle(event.target.value);
  };

  const handleFormSubmit = () => {
    const isContentEmpty = note.length === 0;
    const isTitleEmpty = note.length === 0;
    const currentDate = new Date();
    const noteData = {
      id: note.id,
      title: newTitle,
      content: newContent,
      important: noteImportant,
      isDone: note.isDone,
      modified: currentDate.toISOString(),
    };

    if (isContentEmpty && isTitleEmpty) {
      null;
    } else {
      noteService
        .update(note.id, noteData)
        .then((returnedNote) => {
          onUpdateNote(returnedNote);
          setNewContent(returnedNote.content);
          setNewTitle(returnedNote.title);
          setNoteImportant(returnedNote.important);
        })
        .catch((error) => {
          console.error("Error al editar la nota:", error);
        });
      closeModal();
    }
  };
  const CloseModal = () => {
    closeModal();
    setNoteImportant(note.important);
  };

  return (
    <>
      {modalOpen && (
        <div
          id="my_modal_1"
          className="modal backdrop-blur-sm"
          open={modalOpen}
          onClick={CloseModal}
        >
          <form
            method="dialog"
            className="modal-box bg-gradient-to-t from-inherit to-violet-500 opacity-70 hover:opacity-95 text-inherit rounded-md shadow-lg shadow-accent/50 border border-accent/50"
            onClick={(e) => e.stopPropagation()}
            onSubmit={handleFormSubmit}
          >
            <div className="space-y-4 max-w-lg font-regular text-lg">
              <div className="space-x-5">
                <span className="font-semibold">Title</span>
                <input
                  value={newTitle}
                  onChange={handleTitle}
                  className="input join-item border-black/20 overscroll-y-contain bg-black/10 hover:bg-black/20 focus:bg-black/30 text-sm rounded-md"
                />
              </div>
              <div>
                <textarea
                  value={newContent}
                  onChange={handleContent}
                  className="textarea textarea-lg border border-black/20 w-full min-h-[200px] max-h-[200px] overscroll-y-contain bg-black/10 hover:bg-black/20 focus:bg-black/30 text-sm rounded-md resize-none"
                />
              </div>

              <div className="flex justify-start">
                <ImportantButton
                  isChecked={noteImportant}
                  setChecked={setNoteImportant}
                />
              </div>
              <div className="modal-action">
                <button className="btn" onClick={CloseModal}>
                  Close
                </button>
                <button type="submit" className="btn btn-accent text-white">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default EditModal;
