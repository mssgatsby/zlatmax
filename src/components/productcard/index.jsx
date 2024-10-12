import "./pcard.css";

export default function ProductCard({ img, h3 }) {
  return (
    <>
      <div className="card">
        <img src="./images/01s 1.png" alt="" />
        <h3>Нож Лиса</h3>
        <div className="escape">
          <p>95х18</p>
          <p>Орех, Алюминий</p>
        </div>
        <div className="escape">
          <p>
            <img src="./images/Star 1.png" alt="" />
            <img src="./images/Star 1.png" alt="" />
            <img src="./images/Star 1.png" alt="" />
            <img src="./images/Star 1.png" alt="" />
            <img src="./images/Star 1.png" alt="" />
            <img src="./images/Star 1.png" alt="" />
          </p>
          <p>12 отзывов</p>
        </div>
        <hr />
        <div className="escape">
          <p>2 719 р.</p>
          <div className="img">
            <img src="./images/Group (2).png" alt="" />
            <img src="./images/Group (2).png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
