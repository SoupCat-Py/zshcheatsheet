import Card from "./Card";

export default function CardContainer() {
    return (
        <div className="d-flex flex-col g1">
            <Card command="test" description="this is a test" />
        </div>
    )
}