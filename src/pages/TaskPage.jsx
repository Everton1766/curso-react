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
          <div className="relative h-[60px] flex items-center justify-center">
            <button
              onClick={() => navigate(-1)}
              className=" absolute left-0 p-3 bg-slate-200 rounded-md "
            >
              <ChevronLeftIcon />
            </button>
            <Title className="text-2xl font-bold text-center text-slate-100">
              Detalhe da Tarefa
            </Title>
          </div>
          <div className="bg-slate-200 p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className=" mt-2">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TaskPage;
