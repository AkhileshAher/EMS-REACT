import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider";
import TaskStatusCard from "./TaskStatusCard";


const AllTask = () => {

  const authData = useContext(AuthContext);
  console.log(authData.employees[0].firstname);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded text-white h-55 overflow-auto">
      <div className="bg-gray-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="bg-red-200">Employee Name</h2>
        <h2 className=" bg-red-200">New Task</h2>
        <h2 className="bg-red-200">Active Task</h2>
        <h2 className="bg-red-200">Completed Task</h2>
        <h2 className="bg-red-200">Failed</h2>
      </div>
      <div className="h-[80%] overflow-auto">
        {authData.employees.map((elem, idx) =>
          <TaskStatusCard empData={elem} key={idx} />
        )}
      </div>
    </div>
  )
}

export default AllTask
