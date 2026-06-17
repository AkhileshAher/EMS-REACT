

const CreateTask = () => {
    return (

        <div>
            <form className="flex w-full bg-mist-900 items-center justify-between mr-6 mt-10 text-white">
                <div className="w-1/2 flex flex-col mr-30 m-5 gap-4">

                    <div>
                        <h3 className="text-lg font-medium pb-1">Task Title</h3>
                        <input type="text" className="border-2 border-gray-200 w-full p-2 rounded" placeholder="Make a UI Design" />
                    </div>

                    <div>
                        <h3 className="text-lg font-medium pb-1">Date</h3>
                        <input type="date" className="border-2 border-gray-200 w-full p-2 rounded" />
                    </div>

                    <div className="te">
                        <h3 className="text-lg font-medium pb-1">Assign To</h3>
                        <input type="text" className="border-2 border-gray-200 w-full p-2 rounded" placeholder="Employee Name" />
                    </div>

                    <div>
                        <h3 className="text-lg font-medium pb-1">Category</h3>
                        <input type="text" className="border-2 border-gray-200 w-full p-2 rounded" placeholder="design, dev, etc" />
                    </div>

                </div>

                <div className="w-1/2 flex flex-col">
                    <h3 className="text-lg font-medium pb-1">Description</h3>
                    <textarea name="" id="" className="border-2 border-gray-100 rounded" rows={10}></textarea>
                    <button className="w-full bg-emerald-400 p-3 mt-2 rounded-sm">Create Task</button>
                </div>


            </form>
        </div>

    )
}

export default CreateTask
