import { FormEvent, useContext, useState } from "react";
import styles from "./styles.module.scss";
import { TaskContext } from "../../context/TaskContent";

export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");

  const { tasks, setTasks } = useContext(TaskContext);

  //funçao que valida se ira adicionar a tarefa nova.
  function handleSubmitAddTask(event: FormEvent) {
    event.preventDefault();

    if (taskTitle.length < 3) {
      alert("Impossível registrar tarefa com menos de 3 letras.");
      return;
    }

    //funcao que adiciona a tarefa
    const newTasks = [
      ...tasks,
      { id: new Date().getTime(), title: taskTitle, done: false },
    ];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));

    setTaskTitle("");
  }
  function handleToggleTaskStatus(taskId: number) {
    const newTasks = tasks.map((task) => {
      if (taskId === task.id) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });

    setTasks(newTasks);
  }

  function handleRemoveTask(taskId: number) {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);

    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }
  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmitAddTask}>
        <div>
          <label htmlFor="task-title">Adicionar nova tarefa:</label>
          <input
            value={taskTitle}
            onChange={(event) => {
              setTaskTitle(event.target.value);
            }}
            type="text"
            id="task-title"
            placeholder="Título da tarefa"
          />
        </div>

        <button type="submit">Adicionar Tarefa </button>
      </form>

      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <input
                type="checkbox"
                id={`task-${task.id}`}
                onChange={() => handleToggleTaskStatus(task.id)}
              />
              <label
                className={task.done ? styles.done : ""}
                htmlFor={`task-${task.id}`}
              >
                {" "}
                {task.title}
              </label>

              <button onClick={() => handleRemoveTask(task.id)}>Remover</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
