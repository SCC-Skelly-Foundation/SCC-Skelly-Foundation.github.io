import CodeBlock from "./CodeBlock"


const Introduction = () => {
    return (
        <div data-aos="fade-left" data-aos-delay="700" className="w-full flex justify-center items-center flex-col lg:flex-row">
            <div className="text-center w-1/2 font-sans my-12">
            We are the Skelly team. Providing modern tools to help developers create high end cross platform products for users. We want to ehance your experience with developing systems while giving you all the control you need.
            <br />
            <hr className="h-0.5 bg-black"/>
            We aim to provide cross platform development tools with the ease of controlling memory at your desire or to let the compiler handle it for you. We want to give a mix of freedom and support with our programming language. We primarily want to focus on creating Skelly as a multi-purpose tool that can be used anywhere. Specifically in middle-level areas or such content where Skelly could provide better functionality than other languages such as JavaScript, etc.
            </div>
            <CodeBlock/>
        </div>
    )
}

export default Introduction