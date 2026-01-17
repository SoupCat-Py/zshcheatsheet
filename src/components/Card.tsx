
type CardProp = {
    command: string;
    description: string;
}

export default function Card({command, description}: CardProp) {
    return (
        <div className="bg-norm r1 p05">
            <h3>{command}</h3>
            <span>{description}</span>
        </div>
    )
}