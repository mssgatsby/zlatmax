import "./card.css";

export default function Card({ h1, li1, li2, li3, img }) {
  return (
    <>
      <div className="whole-card">
        <div className="text">
          <h1>{h1}</h1>
          <ul>
            <li>{li1}</li>
            <li>{li2}</li>
            <li>{li3}</li>
          </ul>
        </div>
        <img src={img} alt="" />
      </div>
    </>
  );
}
