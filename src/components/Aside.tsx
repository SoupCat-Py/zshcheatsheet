import { useState } from "react";

type asideLinkProp = {
  section: string;
  label: string;
};

const AsideLink = ({ section, label }: asideLinkProp) => {
  // init state
  const [isHovered, setHovered] = useState(false);

  // func to toggle state
  const toggleHovered = () => setHovered(!isHovered);

  return (
    <li>
      <a
        className={`size4 ${!isHovered ? "color-text nodeco" : "color-primary"}`}
        href={`#section${section}`}
        onMouseEnter={toggleHovered}
        onMouseLeave={toggleHovered}
      >
        {label}
      </a>
    </li>
  );
};

export default function Aside() {
  return (
    <div className="d-flex flex-col bg-norm border r1 p2 g05">
      <h3 className="h3 color-primary size3 p0 m0">Sections</h3>
      <ul className="d-flex flex-col bg-norm m0 g05 p1">
        <AsideLink section="1" label="Navigate & Display" />
        <AsideLink section="2" label="Dir & File Creation" />
        <AsideLink section="3" label="Move, Copy, Delete" />
        <AsideLink section="4" label="Combining Commands" />
        <AsideLink section="5" label="Miscellaneous" />
      </ul>
    </div>
  );
}
