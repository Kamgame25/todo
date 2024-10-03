import '../../App.css'
function Header(){
    return (
        <header class="flex items-center justify-between p-6 bg-white shadow-md">
            <h1 class="text-xl font-semibold">To-Do List</h1>
            <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">Add Task</button>
        </header>
    )
}
export default Header;