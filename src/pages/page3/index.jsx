import Footer from "../../components/footer";
import Header from "../../components/header";
import Nav from "../../components/nav";
import "./page3.css";
import Article from "../../components/article";
import Card from "../../components/card";
import ProductCard from "../../components/productcard";

export default function Page3() {
  return (
    <>
      <Nav />

      <div className="articles">
        <a href="">
          <Article />
        </a>
        <a href="">
          <Article />
        </a>
        <a href="">
          <Article />
        </a>
        <a href="">
          <Article />
        </a>
      </div>
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
