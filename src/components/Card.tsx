type CardProp = {
  command: string;
  description: React.ReactNode;
};

export default function Card({ command, description }: CardProp) {
  return (
    <div className="d-flex flex-col bg-norm r1 p1 g1">
      <h3 className="bg-base color-primary size3 margin0 p05 r05 code">
        <span className="color-success size3">$&nbsp;&nbsp;</span>
        {command}
      </h3>
      <span className="m1 color-text size4">
        {description}
      </span>
    </div>
  );
}
