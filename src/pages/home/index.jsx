import Header from "../../components/header";
import Nav from "../../components/nav";
import Card from "../../components/card";
import "./home.css";
import ProductCard from "../../components/productcard";
import Footer from "../../components/footer";

function HomePage() {
  return (
    <>
      <Nav />
      <Header />

      <div className="cards">
        <Card
          h1="Сувенирные изделия"
          li1="Разделочные"
          li2="Разделочные"
          li3="Разделочные"
          img={"./images/1029762 1.png"}
        />
        <Card
          h1="Сувенирные изделия"
          li1="Разделочные"
          li2="Разделочные"
          li3="Разделочные"
          img={"./images/1029762 1.png"}
        />
        <Card
          h1="Сувенирные изделия"
          li1="Разделочные"
          li2="Разделочные"
          li3="Разделочные"
          img={"./images/1029762 1.png"}
        />
        <Card
          h1="Сувенирные изделия"
          li1="Разделочные"
          li2="Разделочные"
          li3="Разделочные"
          img={"./images/1029762 1.png"}
        />
        <Card
          h1="Сувенирные изделия"
          li1="Разделочные"
          li2="Разделочные"
          li3="Разделочные"
          img={"./images/1029762 1.png"}
        />
        <Card
          h1="Сувенирные изделия"
          li1="Разделочные"
          li2="Разделочные"
          li3="Разделочные"
          img={"./images/1029762 1.png"}
        />
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
      <Footer />
    </>
  );
}
export default HomePage;
