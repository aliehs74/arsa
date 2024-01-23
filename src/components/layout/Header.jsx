import NavItems from "./Navitems";

export default function Header() {
  return (
    //  {/* Header */}
    <>
      <nav className="nav">
        {/* logo */}
        <div className="logo"></div>

        {/* navItems */}
        <ul className="navItems">{NavItems}</ul>
      </nav>
    </>
  );
}
