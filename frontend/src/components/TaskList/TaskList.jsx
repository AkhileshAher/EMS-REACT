import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
    return (
        <div id="tasklist" className="flex flex-col sm:flex-row items-center justify-start overflow-y-auto sm:overflow-x-auto gap-5 flex-nowrap h-[55%] w-full py-5 mt-10">
            {data.tasks.map((taskInfo, idx) => {
                if (taskInfo.active) {
                    return <AcceptTask key={idx} data={taskInfo} idx={idx} />
                }
                if (taskInfo.newTask) {
                    return <NewTask key={idx} data={taskInfo} idx={idx} />
                }

                if (taskInfo.completed) {
                    return <CompleteTask key={idx} data={taskInfo} idx={idx} />
                }

                if (taskInfo.failed) {
                    return <FailedTask key={idx} data={taskInfo} idx={idx} />
                }
            })}
        </div>
    )
}

export default TaskList
