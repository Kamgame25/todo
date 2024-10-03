import '../../App.css'
function Main(){
    return (
        <main className="flex-grow p-4 w-1/2 self-center">
            <div className="bg-gray-100 rounded-lg shadow-md p-4 w-full">
                <ul className="space-y-8">
                <li className="flex items-center justify-between border-b border-gray-300 pb-2">
                    <span>Sample Task 1</span>
                    <button className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                </li>
                <li className="flex items-center justify-between border-b border-gray-300 pb-2">
                    <span>Sample Task 2</span>
                    <button className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                </li>
                <li className="flex items-center justify-between border-b border-gray-300 pb-2">
                    <span>Sample Task 3</span>
                    <button className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                </li>
                </ul>
            </div>
        </main>
    )
}
export default Main;