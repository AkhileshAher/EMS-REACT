import AllTask from "../other/AllTask"
import CreateTask from "../other/CreateTask"
import Header from "../other/Header"


const AdminDashboard = ({data,changeUser}) => {
  return (
    <div className="h-screen w-full p-10">
      <Header data={data} changeUser={changeUser} />
      <CreateTask data={data} />
      <AllTask data={data} />
    </div>
  )
}

export default AdminDashboard
