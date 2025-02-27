export const Introduction = () => {
 
// p - padding
// px - padding x being top/bttom/left/right
// text-9xl - text size
// hover:color - hover activity
// mt - margin top mx x being top/bottom/left/right


    return(
        <div>
            <div class="p-14 outline-4 outline-emerald-400 mt-5 flex justify-center items-center rounded-b-2xl rounded-t-full">
                <h1 class="text-9xl mr-10 text-blue-200"></h1>
                <h1 class="text-9xl hover:bg-purple-700 text-blue-200">Hello World!</h1>
                <h1 class="text-8xl ml-10 text-blue-200">()</h1>
            </div>
            <button class="bg-blend-color-burn bg-amber-300 text-white px-4 py-2 rounded-2xl hover:bg-blue-500 mt-5 max-w-full text-2xl"> What ? </button>
        </div>
    )
}


export default Introduction;