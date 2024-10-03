import '../../App.css'
function Header(){
    return (
        <header class="flex items-center justify-center gap-24 p-6 bg-white shadow-md">
            <h1 class="text-xl font-semibold">To-Do List</h1>
            <input class="  bg-slate-400 placeholder:text-black font-sans font-normal   text-sm px-3 py-2.5 rounded-[7px] focus:bg-blue-300 " placeholder="Write your task"></input>
            <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Add Task</button>
        </header>
    )
}
export default Header;