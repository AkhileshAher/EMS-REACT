
const TaskStatusCard = ({ empData }) => {
    console.log(empData.tasks)
    return (
        <>
            {empData.tasks.map((task) => {
                return (
                    <div className="w-full max-w-88 space-y-4 rounded-md border border-gray-200 bg-gray-200 p-3 text-black transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-1 flex-col justify-center">
                                <h2 className="bg-yellow-300 p-1 rounded text-black font-medium flex justify-center">{task.category}</h2>
                                <h2 className="text-base font-bold text-black">{task.taskTitle}</h2>
                            </div>
                            <p>{task.taskDate}</p>
                        </div>
                        <p>{task.taskDescription}</p>
                        <div className="flex items-center gap-2 pt-3 justify-center">
                            <h2 className={` p-1 rounded-full text-black font-medium w-1/2 flex justify-center ${task.active ? "active" : (task.completed ? "completed" : "failed")}`}>{task.active ? "Active" : (task.completed ? "Completed" : "Failed")}</h2>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default TaskStatusCard
