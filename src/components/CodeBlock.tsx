import Highlight from "react-syntax-highlighter"

const CodeBlock = () => {
    return (
        <div className="bg-slate-800 text-white mx-5 min-w-fit w-28">
            <Highlight>
                {`
// Import Skelly's std library
#bring <sstd>

// Main Entry Point
int main() {
    // Print hello world to the console
    skelly::out("Hello, World!");
    // Return success
    return 0;
}
                `}
            </Highlight>
        </div>
    )
}

export default CodeBlock