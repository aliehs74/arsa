let navitemText = {
  1: (
    <>
      <span> ME</span>
      <span className="goldText">S</span>
      <span> SENGER</span>
    </>
  ),
  2: (
    <>
      <span>E</span>
      <span className="goldText">X</span>
      <span>PLORE</span>
    </>
  ),
  3: (
    <>
      <span className="goldText">PROJE</span>
      <span>C</span>
      <span className="goldText">T</span>
    </>
  ),
  4: (
    <>
      <span>PRO</span>
      <span className="goldText">F</span>
      <span>ILE</span>
    </>
  ),
  5: (
    <>
      <span className="goldText">W</span>
      <span>ALLET</span>
    </>
  ),
};

let NavItems = [];
for (let i = 1; i <= 5; i++) {
  NavItems.push(
    <li key={i}>
      <button>
        <div className={`navitem${i}`}></div>
        <div className={`navitemText${i}`}>{navitemText[i]}</div>
      </button>
    </li>
  );
}

export default NavItems;
