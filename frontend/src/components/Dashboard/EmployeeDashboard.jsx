import Header from "../other/Header"
import TaskListNumbers from "../other/TaskListNumbers"
import TaskList from "../TaskList/TaskList"


function EmployeeDashboard({ data, changeUser }) {
    return (
        <div className="p-18 bg-[#1c1c1c] h-screen text-white">
            <Header data={data} changeUser={changeUser} />
            <TaskListNumbers data={data} />
            <TaskList data={data} />
        </div>
    )
}

export default EmployeeDashboard
