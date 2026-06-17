

const TaskListNumbers = ({ data }) => {
    return (
        <div className="flex mt-10 justify-between gap-5 flex-wrap sm:flex-nowrap">
            <div className="w-[45%] p-10 bg-blue-400 py-6 px-9 rounded-xl">
                <h2 className="text-3xl font-semibold">{data.taskNumber.newTask}</h2>
                <h3 className="text-sm sm:text-xl font-medium">New Task</h3>
            </div>
            <div className="w-[45%] p-10 bg-green-400 py-6 px-9 rounded-xl">
                <h2 className="text-3xl font-semibold">{data.taskNumber.completed}</h2>
                <h3 className="text-sm sm:text-xl font-medium">Completed Task</h3>
            </div>
            <div className="w-[45%] p-10 bg-yellow-400 py-6 px-9 rounded-xl">
                <h2 className="text-3xl font-semibold">{data.taskNumber.active}</h2>
                <h3 className="text-sm sm:text-xl font-medium text-black">Accepted Task</h3>
            </div>
            <div className="w-[45%] p-10 bg-red-400 py-6 px-9 rounded-xl">
                <h2 className="text-3xl font-semibold">{data.taskNumber.failed}</h2>
                <h3 className="text-sm sm:text-xl font-medium">Failed Task</h3>
            </div>

        </div>
    )
}

export default TaskListNumbers
