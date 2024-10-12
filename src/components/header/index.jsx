import "./header.css";
import Button from "../button";

function Header() {
  return (
    <>
      <div className="header">
        <div className="mainPart">
          <div className="text">
            <h1>Интернет магазин сертифицированных златоустовских ножей</h1>
            <p>
              Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине
              представлен наиболее широкий выбор Златоустовских ножей от
              Златоустовских Оружейных Фабрик и компаний, мы являемся
              официальными поставщиками.
            </p>
            <Button text="Подробнее" />
          </div>
          <img
            src="./images/artage-io-thumb-3eb7dc9f044a998d2aab1b457afe81cb 1.png"
            alt=""
          />
        </div>
        <div className="lowPart">
          <div className="card1">
            <img src="./images/Group 73.png" alt="" />
            <p>Гарантия 100% возврата денежных средств</p>
          </div>
          <div className="card1">
            <img src="./images/Group 73.png" alt="" />
            <p>Гарантия 100% возврата денежных средств</p>
          </div>
          <div className="card1">
            <img src="./images/Group 73.png" alt="" />
            <p>Гарантия 100% возврата денежных средств</p>
          </div>
          <div className="card1">
            <img src="./images/Group 73.png" alt="" />
            <p>Гарантия 100% возврата денежных средств</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
