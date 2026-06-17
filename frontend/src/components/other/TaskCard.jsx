


const TaskCard = ({ tasks }) => {
    return (
        <>
            <div className="flex justify-between items-center">
                <h3 className="text-sm px-3 py-1 rounded bg-red-600 ">{tasks.category}</h3>
                <h4 className="text-sm">{tasks.taskDate}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">{tasks.taskTitle}</h2>
            <p className="text-sm mt-2">{tasks.taskDescription}</p>
        </>
    )
}

export default TaskCard
