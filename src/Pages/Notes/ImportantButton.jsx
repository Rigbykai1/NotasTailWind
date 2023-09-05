import { MdCheckCircleOutline, MdOutlineCancel } from "react-icons/md";

const ImportantButton = ({ isChecked, setChecked }) => {
  return (
    <div
      className="tooltip tooltip-accent overflow-visible"
      data-tip={isChecked ? "No important" : "Important"}
    >
      <label tabIndex={0} className="btn swap swap-rotate">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setChecked(!isChecked)}
        />
        <MdCheckCircleOutline className="swap-off fill-current w-5 h-5" />
        <MdOutlineCancel className="swap-on fill-current w-5 h-5" />
      </label>
    </div>
  );
};

export default ImportantButton;
