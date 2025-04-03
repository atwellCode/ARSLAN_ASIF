import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../../assets/testimonial/r1.jpg";
import img2 from "../../assets/testimonial/r2.jpg";
import img3 from "../../assets/testimonial/r3.jpg";
import img4 from "../../assets/testimonial/r4.jpg";
import img5 from "../../assets/testimonial/r5.jpg";
import HeadingText from "../../components/HeadingText";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Saleem Akbar",
      image: img1,
      review:
        "Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus.",
    },
    {
      name: "John Smith",
      image: img2,
      review:
        "Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus.",
    },
    {
      name: "Johnny Lawrance",
      image: img3,
      review:
        "Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus.",
    },
    {
      name: "Sam Larousso",
      image: img4,
      review:
        "Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus.",
    },
    {
      name: "Saleeha Akram",
      image: img5,
      review:
        "Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus.",
    },
  ];
  const sectionStyle = {
    background: "#313741",
    minHeight: "100vh",
    textAlign: "center",
    padding: "20px",
  };

  const testimonialCard = {
    background: "#222831",
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 0 15px #00F29A",
    margin: "2rem",
  };
  const testimonialImg = {
    width: "100px",
  height: "100px",
  objectFit: "cover",
  borderRadius: "50%",
  position: "relative",
  padding: "3px",
  background: "linear-gradient(135deg, rgba(0, 255, 170, 0.8), rgba(0, 132, 255, 0.8))",
}
  return (
    <section style={sectionStyle}>
      <HeadingText header="Testimonial" subHeader="View my diverse projects demonstrating creactivity, expertise and innovations." />
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={38}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 10000 }}
          className="swiper-container"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="card p-4 text-white" style={testimonialCard}>
                <p className="p-5 fs-6 text-light">
                  &quot;{testimonial.review}&quot;
                </p>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-circle mx-auto d-block mb-3"
                  style={testimonialImg}
                />
                <h4
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                    color: "#fff",
                  }}
                >
                  {testimonial.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
