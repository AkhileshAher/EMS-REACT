
import { removeLocalStorageItem } from "../../utils/localStorage"
import Avatar from "./Avatar";

const Header = ({ data, changeUser }) => {

    const handleLogout = () => {
        removeLocalStorageItem('loggedInUser', 'userData');
        changeUser("");
    }

    return (
        <div className="flex flex-row items-center justify-between text-white">
            <div className="flex gap-10">
                <Avatar />
                <h1 className="text-2xl">Hello, <br /><span className="text-2xl font-semibold">{data ? (data?.firstname) : "admin"} 👋</span> </h1>
            </div>
            <button className="bg-red-500 text-white px-5 py-2 rounded-sm text-lg font-medium" onClick={handleLogout}>Log Out</button>
        </div>
    )
}

export default Header
