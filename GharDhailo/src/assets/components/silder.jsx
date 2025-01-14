
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css"; // Make sure to include this

const products = [
  { id: 1, image: './public/images/product1.jpg' }, // Corrected image path
  { id: 2, image: './public/images/product1.jpg' },
  { id: 3, image: './public/images/product1.jpg'},
  { id: 4, image: './public/images/product1.jpg' },
  { id: 5, image: './public/images/product1.jpg'},
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
          <div key={product.id}>
            <img src={product.image} alt={`product-${product.id}`} className="w-full h-96 object-fill" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
