import SSC from "../assets/scc.png"

const phrases : string[] = [
    "Introducing Safe Raw Pointers",
    "Two things at once",
    "A step closer to memory safety",
    "It's like C++ but not",
    "Hello Memory, Goodbye Limitation",
    "The Freedom to Innovate"
]

const Heading = () => {
    return (
        <div className="bg-black h-96 w-full flex justify-center items-center">
            <img data-aos="fade-in" className="h-36 w-36 rounded-md" src={SSC}/>
            <span data-aos="fade-right" data-aos-delay="500" className="text-white font-rubik text-2xl px-5">{ phrases[Math.floor(Math.random() * phrases.length)] }</span>
        </div>  
    )
}

export default Heading