import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider";
import TaskStatusCard from "./TaskStatusCard";


const AllTask = () => {

  const authData = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded text-white h-150 overflow-auto">
      <div className="mb-2  px-4 flex justify-between rounded">
        <h2 className="bg-green-500 text-black p-2 rounded-2xl px-4">TASKS : </h2>
      </div>
      <div className="h-[80%] overflow-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto m-4">
          {authData.employees.map((elem, idx) =>
            <TaskStatusCard empData={elem} key={idx} />
          )}
        </div>
      </div>
    </div>
  )
}

export default AllTask
