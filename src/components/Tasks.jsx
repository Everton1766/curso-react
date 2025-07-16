import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onTaskDelete }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const qyuery = new URLSearchParams();
    qyuery.set("title", task.title);
    qyuery.set("description", task.description);
    navigate(`/task?${qyuery.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow-md">
      {tasks.map((task) => (
        <li key={task.id} className=" flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 w-full text-left text-white p-2 rounded-md
            ${task.isCompleted && "line-through"}`}
          >
            {task.title}
          </button>
          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => onTaskDelete(task.id)}>
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
