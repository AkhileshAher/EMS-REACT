
const TaskStatusCard = ({ empData }) => {
    console.log(empData.tasks);
    return (
        <>
            {empData.tasks.map((task) => {
                return (
                    // <div className="bg-amber-400 mb-2 py-1 px-2 flex justify-start rounded items-center">
                    //     <h2 className="w-1/5 bg-green-400 px-4">{empData.firstname}</h2>
                    //     <h3 className="w-1/5 bg-green-400 px-8">{task.taskTitle}</h3>
                    //     <h5 className="w-1/5 bg-green-400">{task.active ? "ACTIVE" : (task.completed ? "COMPLETED" : "FAILED")}</h5>
                    //     <h2 className="w-1/5 bg-green-400">Failed</h2>
                    //     <h2 className="w-1/5 bg-green-400">Failed</h2>
                    // </div>
                    
                )
            })}
        </>
    )
}

export default TaskStatusCard
