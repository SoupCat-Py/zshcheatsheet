export default function Aside() {
    return (
        <div className="d-flex flex-col bg-norm r1 p2 g1">
            <h3 className="h3 color-primary size3 padding0 margin0">Sections</h3>
            <div className="d-flex flex-col bg-norm g05">
                <a className="color-text size4" href="#section1">Navigate & Display</a>
                <a className="color-text size4" href="#section2">Move, Copy, Delete</a>
                <a className="color-text size4" href="#section3">Dir & File Creation</a>
                <a className="color-text size4" href="#section4">Combining Commands</a>
                <a className="color-text size4" href="#section5">Miscellaneous</a>
            </div>
        </div>
    )
}