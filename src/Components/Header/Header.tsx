import { StatsCard } from "../StatsCard/StatsCard";
import styles from "./styles.module.scss";
export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.conteiner}>
        <div>
          <h1>MyTodo</h1>
          <span>Bem-vindo, Alexandre!</span>
        </div>

        <div>
          <StatsCard title="Total de Tarefas" value={5} />
          <StatsCard title="Tarefas Pendentes" value={4} />
          <StatsCard title="Tarefas concluidas" value={1} />
        </div>
      </div>
    </header>
  );
};
