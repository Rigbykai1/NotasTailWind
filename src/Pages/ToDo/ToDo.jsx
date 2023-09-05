import { useEffect, useState } from "react";
import todoServices from "../../Services/todo.services";
import { v4 as uuidv4 } from "uuid";
import TaskRender from "./ToDo.taskRender";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    todoServices
      .getAll()
      .then((initialTasks) => {
        setTasks(initialTasks);
      })
      .catch((error) => {
        console.error("Error al mostrar las tareas:", error);
      });
  }, []);

  const addTask = (event) => {
    event.preventDefault();
    const isContentEmpty = content.length === 0;
    const currentDate = new Date();
    const newTask = {
      id: uuidv4(),
      content: content,
      createdAt: currentDate.toISOString(),
      modified: currentDate.toISOString(),
      limitDate: "",
      important: false,
      isDone: false,
    };

    if (!isContentEmpty) {
      todoServices
        .create(newTask)
        .then((returnedNote) => {
          setTasks(tasks.concat(returnedNote));

          setContent("");
        })
        .catch((error) => {
          console.error("Error al agregar la nota:", error);
        });
    }
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <div className="flex flex-col lg:flex-row px-4 py-4 min-h-screen justify-around">

      <div className="flex-col join join-vertical grow-0">
        <h1 className="text-3xl">Controles</h1>
        <button className="btn join-item">Añadir tarea</button>
        <button className="btn join-item">editar</button>
        <button className="btn join-item">eliminar</button>
      </div>

      <div className="flex flex-col grow place-items-center">
        <h1 className="text-3xl text-center">Tasks</h1>
        <ul>
          {tasks.map((task) => (
            <TaskRender key={task.id} task={task} />
          ))}
        </ul>
        <div>
          <form onSubmit={addTask}>
            <div className="py-3 space-y-2">
              <textarea
                placeholder="Note..."
                value={content}
                onChange={handleContentChange}
                className="textarea textarea-bordered textarea-lg w-full h-[150px] resize-none"
              />
            </div>
            <button type="submit" className="btn btn-neutral w-full">
              save
            </button>
          </form>
        </div>
      </div>

      <div className="flex-col grow">
        <h1 className="text-3xl text-center">Tools</h1>
      </div>
      
    </div>
  );
};

export default ToDo;
