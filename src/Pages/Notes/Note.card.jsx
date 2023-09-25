import { useState } from "react";
import {
  MdExpandMore,
  MdExpandLess,
  MdClose,
  MdOutlineMode,
  MdNotificationImportant,
} from "react-icons/md";

import dateConverter from "../../Services/dates.changer";

import EditModal from "../../Components/Edit.Modal";
import { motion } from "framer-motion";

const NoteCard = ({ note, onDelete }) => {
  const [newNote, setNewNote] = useState(note);
  const [showContent, setShowContent] = useState(false);

  const handleContent = () => {
    setShowContent(!showContent);
  };

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <EditModal
        modalOpen={modalOpen}
        closeModal={closeModal}
        note={newNote}
        onUpdateNote={setNewNote}
      />

      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        transition={{ duration: 0.3, ease: "linear" }}
        className="px-3 snap-y"
        style={{ minHeight: showContent ? "auto" : "100px" }}
      >
        <div className="flex flex-col p-2 bg-base-300 shadow-2xl indicator rounded-xl">
          <div className="flex flex-row bg-base-100 max-w-[250px] justify-between z-10 shadow-xl p-2 rounded-xl">
            <div>
              <button
                className="btn rounded-xl btn-ghost btn-md"
                onClick={openModal}
              >
                <MdOutlineMode className="w-5 h-5" />
              </button>
            </div>
            <div
              className="max-w-[110px] py-2 cursor-pointer"
              onClick={handleContent}
            >
              <h1
                className={`card-title  text-inherit overflow-hidden ${
                  showContent ? "" : "truncate"
                }`}
              >
                {newNote.title}
              </h1>
            </div>
            <div>
              <button
                className="btn rounded-xl btn-ghost btn-md"
                onClick={() => onDelete(newNote.id)}
              >
                <MdClose className="w-5 h-5" />
              </button>
            </div>
          </div>
          {showContent && newNote.content != "" && (
            <motion.div
              className="max-w-[250px] text-inherit px-5 z-0 bg-base-300 pb-2 pt-6"
              initial={{ y: -26, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -26, opacity: 0 }}
              transition={{ ease: "linear", duration: 0.3 }}
            >
              {newNote.content === "" ? (
                <p>Sin contenido</p>
              ) : (
                <>
                  <p className="text-end text-xs text-warning pb-4">
                    Last Modified: {dateConverter(newNote.modified)}
                  </p>
                  <p>{newNote.content}</p>
                </>
              )}
            </motion.div>
          )}
          <div className="flex flex-col self-center py-1">
            <div className="w-full min-w-[250px]">
              <label
                onChange={handleContent}
                className="btn rounded-xl btn-ghost swap swap-rotate w-full"
              >
                <input type="checkbox" />
                <MdExpandMore className="swap-off w-6 h-6 animate-bounce" />
                <MdExpandLess className="swap-on w-6 h-6" />
              </label>
            </div>
          </div>

          {newNote.important === false ? null : (
            <div>
              <div className="indicator-item indicator-bottom indicator-center badge text-inherit badge-accent">
                <MdNotificationImportant className="w-5 h-5 animate-pulse" />
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default NoteCard;
