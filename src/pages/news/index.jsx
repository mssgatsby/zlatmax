import "./news.css";
import ProductCard from "../../components/productcard";
import Nav from "../../components/nav";
import Article from "../../components/article";
import Card from "../../components/card";
import Footer from "../../components/footer";

export default function News() {
  return (
    <>
      <Nav />
      <div className="divident">
        <h2>Хиты продаж</h2>
        <p>
          <a href="">Перейти в каталог</a>
        </p>
      </div>
      <div className="product-cards">
        <a href="">
          <ProductCard />
        </a>
        <a href="">
          <ProductCard />
        </a>
        <a href="">
          <ProductCard />
        </a>
        <a href="">
          <ProductCard />
        </a>
      </div>
      <div className="divident">
        <h2>Хиты продаж</h2>
        <p>
          <a href="">Перейти в каталог</a>
        </p>
      </div>
      <div className="product-cards">
        <a href="">
          <ProductCard />
        </a>
        <a href="">
          <ProductCard />
        </a>
        <a href="">
          <ProductCard />
        </a>
        <a href="">
          <ProductCard />
        </a>
      </div>
      <div className="news">
        <div className="text">
          <h2>Новинки</h2>
          <p>
            Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине
            представлен наиболее широкий выбор Златоустовских ножей от
            Златоустовских Оружейных Фабрик и компаний, мы являемся официальными
            поставщиками.
          </p>
          <a href="">Больше новинок</a>
        </div>
        <a href="">
          <ProductCard />
        </a>
        <a href="">
          <ProductCard />
        </a>
        <a href="">
          <ProductCard />
        </a>
      </div>
      <div className="divident">
        <h2>Хиты продаж</h2>
        <p>
          <a href="">Перейти в каталог</a>
        </p>
      </div>
      <div className="product-cards">
        <a href="">
          <ProductCard />
        </a>
        <a href="">
          <ProductCard />
        </a>
        <a href="">
          <ProductCard />
        </a>
        <a href="">
          <ProductCard />
        </a>
      </div>
      <div className="divident">
        <h2>Хиты продаж</h2>
        <p>
          <a href="">Перейти в каталог</a>
        </p>
      </div>
      <div className="product-cards">
        <a href="">
          <ProductCard />
        </a>
        <a href="">
          <ProductCard />
        </a>
        <a href="">
          <ProductCard />
        </a>
        <a href="">
          <ProductCard />
        </a>
      </div>
      <Footer />
    </>
  );
}
