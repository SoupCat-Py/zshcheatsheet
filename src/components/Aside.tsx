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
        href={`#${section}`}
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
        <AsideLink section="navigate-display" label="Navigate & Display" />
        <AsideLink section="dir-file-creation" label="Dir & File Creation" />
        <AsideLink section="move-copy-delete" label="Move, Copy, Delete" />
        <AsideLink section="combining-commands" label="Combining Commands" />
        <AsideLink section="miscellaneous" label="Miscellaneous" />
      </ul>
    </div>
  );
}
