import TaskCard from "../other/TaskCard"


const CompleteTask = ({ data, idx }) => {
  return (
    <div className={`shrink-0 h-full w-75 p-5 bg-violet-400 rounded-xl flex justify-between flex-col`} >
      <TaskCard tasks={data} key={idx} />
      <div className="flex justify-between mt-4 ">
        <button className="w-full bg-green-500">Completed</button>
      </div>
    </div>
  )
}

export default CompleteTask
