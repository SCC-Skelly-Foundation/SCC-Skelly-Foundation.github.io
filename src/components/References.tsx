import SCCHead from "../assets/scchead.png"

const References = () => {
    return (
        <div className="w-full bg-white h-12 py-8 flex flex-row justify-between items-center">
            <a>
                <img className="h-7 pl-5 w-24" src={SCCHead}/>
            </a>
            <a className="font-mono text-xl pr-6 underline-offset-4 hover:underline" href="https://github.com/SCC-Skelly-Foundation/OpenSkelly">
                GitHub
            </a>
        </div> 
    )
}

export default References