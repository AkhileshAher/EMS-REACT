
import { removeLocalStorageItem } from "../../utils/localStorage"

const Header = ({ data }) => {

    const handleLogout = () => {
        removeLocalStorageItem('loggedInUser', 'userData');
        window.location.reload();
    }

    return (
        <div className="flex items-end justify-between text-white">
            <h1 className="text-2xl">Hello, <br /><span className="text-2xl font-semibold">{data.firstname} 👋</span> </h1>
            <button className="bg-red-500 text-white px-5 py-2 rounded-sm text-lg font-medium" onClick={handleLogout}>Log Out</button>
        </div>
    )
}

export default Header
