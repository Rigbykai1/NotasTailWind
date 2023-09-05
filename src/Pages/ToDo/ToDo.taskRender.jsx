const TaskRender = ({ task }) => {
  return (
    <div className="flex">
      <li>{task.content}</li>
    </div>
  );
};

export default TaskRender;
