import { useContext } from "react";
import { StatsCard } from "../StatsCard/StatsCard";
import styles from "./styles.module.scss";
import { TaskContext } from "../../context/TaskContent";
export const Header: React.FC = () => {
  const { tasks } = useContext(TaskContext);

  const totalTasks = tasks.length;
  const totalPending = tasks.reduce((total, task) => {
    if (!task.done) return total + 1;
    return total;
  }, 0);
  const totalDone = totalTasks - totalPending;
  return (
    <header className={styles.header}>
      <div className={styles.conteiner}>
        <div>
          <h1>MyTodo</h1>
          <span>Seja Bem-vindo!</span>
        </div>

        <div className={styles.stats}>
          <StatsCard title="Total de Tarefas" value={totalTasks} />
          <StatsCard title="Tarefas Pendentes" value={totalPending} />
          <StatsCard title="Tarefas concluídas" value={totalDone} />
        </div>
      </div>
    </header>
  );
};
