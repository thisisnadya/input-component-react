import "./Sidebar.css";

const Sidebar = () => {
  const navs = ["Colors", "Typography", "Spaces", "Buttons", "Inputs", "Grid"];
  return (
    <div className="p-5">
      <h6 className="pb-5 sidebar">
        <span>Dev</span>challenges.io
      </h6>
      <ul>
        {navs.map((nav) => (
          <li className={`py-2 ${nav === "Inputs" ? "bold" : ""}`}>{nav}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
