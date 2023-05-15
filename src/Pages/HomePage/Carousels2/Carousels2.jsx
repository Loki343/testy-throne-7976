import styles from "./Carousels2.module.css";
import { Link } from "react-router-dom";

export function MyCard({ src, cap }) {
  return (
    <div
      style={{
        minWidth: "230px",
        maxWidth: "300px",
        height: "311px",
        marginRight: "25px",
        color: "white",
        position: "relative",
        marginLeft: "-10px",
        border: "1px solid lightgray",
        borderRadius: "10px",
      }}
    >
      <img
        src={src}
        alt="i"
        style={{ borderRadius: "10px", height: "210px", margin: "auto",marginTop:'15px' }}
      />
      <div className={styles.myCardCaption}>
        <Link to="/">{cap}</Link>
      </div>
    </div>
  );
}

export function Carousels2() {
  const btnpressprev = () => {
    let box = document.querySelector(".productContainer");
    box.scrollLeft -= 300;
  };

  const btnpressnext = () => {
    let box = document.querySelector(".productContainer");
    box.scrollLeft += 300;
  };

  return (
    <div>
      <div className={styles.productCarousal}>
        <button onClick={btnpressprev} className={styles.preBtn}>
          <p>⇐</p>
        </button>
        <button onClick={btnpressnext} className={styles.nextBtn}>
          <p>⇒</p>
        </button>
        <div
          className="productContainer"
          style={{
            padding: "0 10px",
            display: "flex",
            overflowX: "hidden",
            scrollBehavior: "smooth",
          }}
        >
          <Link to="/men-product">
            <MyCard
              src="https://assets.burberry.com/is/image/Burberryltd/93FB0DD4-CC1E-4F10-8A59-975E389BA547?$BBY_V2_SL_1x1$&wid=1251&hei=1251"
              cap="Coats & Jackets"
            />
          </Link>
          <Link to="/men-product">
            <MyCard
              src="https://assets.burberry.com/is/image/Burberryltd/D669222C-897A-4D72-8C1F-6FA3FFAE5883?$BBY_V2_SL_1x1$&wid=1251&hei=1251"
              cap="Bag"
            />
          </Link>
          <Link to="/women-product">
            <MyCard
              src="https://assets.burberry.com/is/image/Burberryltd/9C2BA2E0-9207-421B-9C61-712A7F06C1EF?$BBY_V2_SL_1x1$&wid=1251&hei=1251"
              cap="Shoes"
            />
          </Link>
          <Link to="/women-product">
            <MyCard
              src="https://assets.burberry.com/is/image/Burberryltd/576346F0-CF31-4C7E-BD52-55FD0144E429?$BBY_V2_SL_1x1$&wid=1251&hei=1251"
              cap="Accessories"
            />
          </Link>
          <Link to="/women-product">
            <MyCard
              src="https://assets.burberry.com/is/image/Burberryltd/A9C10572-B14D-4FF7-9732-07346606BA16?$BBY_V2_SL_1x1$&wid=1251&hei=1251"
              cap="Clothing"
            />
          </Link>
          <Link to="/women-product">
            <MyCard
              src="https://assets.burberry.com/is/image/Burberryltd/5C61DA59-09FB-4F37-8C38-47FE852B2E1C?$BBY_V2_SL_1x1$&wid=1251&hei=1251"
              cap="Baby"
            />
          </Link>
          <Link to="/women-product">
            <MyCard
              src="https://assets.burberry.com/is/image/Burberryltd/B9A0EE11-0A57-4AEB-B421-F00B9263415E?$BBY_V2_SL_1x1$&wid=1251&hei=1251"
              cap="Fragrance"
            />
          </Link>
          <Link to="/women-product">
            <MyCard
              src="https://assets.burberry.com/is/image/Burberryltd/DB721713-E620-41A6-9CF6-C3504A5F5B82?$BBY_V2_SL_1x1$&wid=1251&hei=1251"
              cap="Gifts"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
