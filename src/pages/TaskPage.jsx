import { useSearchParams, useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="h-screen w-screen  bg-slate-500 p-6">
      <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
        <div className="w-[500px] space-y-4">
          <div className="flex items-center justify-between relative">
            <button
              onClick={() => navigate(-1)}
              className="p-3 bg-slate-400 rounded-md text-white"
            >
              <ChevronLeftIcon />
            </button>
            <Title>Detalhe da Tarefa</Title>
          </div>
          <div className="bg-slate-400 p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className=" mt-2">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TaskPage;
