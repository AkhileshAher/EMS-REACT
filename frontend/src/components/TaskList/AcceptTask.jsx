import TaskCard from "../other/TaskCard"


const AcceptTask = ({ data, idx }) => {
  return (
    <div className={`shrink-0 h-full w-75 p-5 bg-gray-400 rounded-xl flex justify-between flex-col`} >
      <TaskCard tasks={data} key={idx} />
      <div className="flex justify-between mt-4 ">
        <button className="bg-green-500 py-1 px-2 text-sm">Mark as Completed</button>
        <button className="bg-red-500 py-1 px-2 text-sm">Mark as Failed</button>
      </div>
    </div>
  )
}

export default AcceptTask
