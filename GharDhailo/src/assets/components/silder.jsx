import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const products = [
  { id: 1, image: './public/images/product1.png' },
  { id: 2, image: './public/images/product2.png' },
  { id: 3, image: './public/images/product3.png' },
  { id: 4, image: './public/images/product4.png' },
  { id: 5, image: './public/images/product5.png' },
];

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-4 px-6 max-w-7xl mx-auto overflow-hidden">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="relative w-full h-0 pb-[35.25%] overflow-hidden">
            <img
              src={product.image}
              alt={`product-${product.id}`}
              className="absolute top-0 left-0 w-full h-full object-fill"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
