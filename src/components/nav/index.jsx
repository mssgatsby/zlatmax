import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <>
      <div className="navUp">
        <ul>
          <li>
            <Link to={"/"}>О нас</Link>
          </li>
          <li>
            <Link to={"/news"}>Оплата и доставка</Link>
          </li>
          <li>
            <Link to={"/pay"}>Новости</Link>
          </li>
          <li>
            <a href="">Контакты</a>
          </li>
        </ul>
        <p>
          <a href="">Личный кабинет</a>
        </p>
      </div>
      <div className="navMid">
        <a href="">
          <img src="./images/logo (6).png" alt="" />
        </a>
        <input type="text" placeholder="Поиск" />
        <p>
          <a href="">Москва</a>
        </p>
        <div className="contact">
          <p>8-800-777-49-67</p>
          <a href="">Заказать звонок</a>
        </div>
        <div className="order">
          <p>0 р.</p>
          <a href="">Оформить заказ</a>
        </div>
      </div>
      <div className="navLow">
        <ul>
          <li>
            <a href="">Каталог ножей</a>
          </li>
          <li>
            <a href="">Каталог ножей</a>
          </li>
          <li>
            <a href="">Каталог ножей</a>
          </li>
          <li>
            <a href="">Каталог ножей</a>
          </li>
          <li>
            <a href="">Каталог ножей</a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Nav;
