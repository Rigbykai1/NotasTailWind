import { MdFilterAlt } from "react-icons/md";

const NoteFilter = ({
  showAll,
  showImportant,
  importantFilter,
  showAllFilter,
}) => {
  return (
    <div className="dropdown dropdown-right">
      <label tabIndex={0} className="btn">
        <MdFilterAlt className="inline-block w-6 h-6 stroke-current" />
      </label>
      <div
        tabIndex={0}
        className="dropdown-content z-20 menu shadow-xl bg-base-100 rounded-box gap-1"
      >
        <h6 className="px-6 py-2 text-2xl font-thin text-center">Filtros</h6>
        <li>
          <div className="form-control px-1 py-2">
            <label className="cursor-pointer label">
              <input
                type="checkbox"
                checked={showAll === true}
                className="toggle toggle-accent mr-2"
                onChange={showAllFilter}
              />
              <span className="label-text">ShowAll</span>
            </label>
          </div>
        </li>
        <li>
          <div className="form-control px-1 py-2">
            <label className="cursor-pointer label">
              <input
                type="checkbox"
                checked={showImportant === true}
                className="toggle toggle-accent mr-2"
                onChange={importantFilter}
              />
              <span className="label-text">Important</span>
            </label>
          </div>
        </li>
      </div>
    </div>
  );
};

export default NoteFilter;
