import TaskCard from "../other/TaskCard"


const FailedTask = ({ data, idx }) => {
  return (
    <div className={`shrink-0 h-full w-75 p-5 bg-pink-400 rounded-xl flex justify-between flex-col`} >
      <TaskCard tasks={data} key={idx} />

      <div className="mt-2">
        <button className="w-full bg-red-500 py-1 px-2 text-sm">Failed</button>
      </div>

    </div>


  )
}

export default FailedTask
