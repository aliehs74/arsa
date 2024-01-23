export let cardData = {
  1: ["SwitZerland", "COUNTRY", 1],
  2: ["Full-Time", "COOPRATION TYPE", "none"],
  3: ["Designer", "CATEGORY", "none"],
  4: ["Montenegro", "CITY", 1],
  5: ["Male", "GENDER", "none"],
  6: ["24 Months", "MIN EXPERIENCE", "none"],
  7: ["Montenegro", "NATIVE LANGUAGE", 1],
  8: ["$ 12.00 Hour", "MINIMUM SALARY", "none"],
  9: ["8:00 AM GMT +2", "STARTING HOURS", "none"],
  10: ["In Person", "CONTRACT TYPE", "none"],
  11: ["$ 24.00 Hour", "MAXIMUM SALARY", "none"],
  12: ["17:00 PM GMT +2", "ENDING HOURS", "none"],
  13: ["Montenegro", "REQUIRED SKILLS", 1],
  14: ["Montenegro", "", 1],
  15: ["Montenegro", "", 1],
};

const cardDataLenght = Object.keys(cardData).length;

let cardItems = [];
for (let i = 1; i <= cardDataLenght; i++) {
  cardItems.push(
    <li key={i} className={`cardItem cardItem-${i}`}>
      <div className="logo-desc">
        <div className="swissLogo" style={{ display: cardData[i][2] }}></div>
        <p className="description">{cardData[i][0]}</p>
      </div>
      <p className={`title title-${i}`}>{cardData[i][1]}</p>
    </li>
  );
}

export default cardItems;
