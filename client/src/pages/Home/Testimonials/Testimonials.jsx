import { Container, Badge } from "react-bootstrap";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./Testimonials.css";

const Testimonials = () => {
  const reviews = [
    {
      text: "The booking process was incredibly smooth. I managed to get an appointment with a specialist in less than 2 minutes. Truly life-saving service!",
      name: "A. Rahman",
      status: "Verified Patient",
      rating: 5
    },
    {
      text: "As an elderly person, I found the interface very easy to use. The digital reports feature is a great way to keep track of my health history.",
      name: "S. Begum",
      status: "Premium Member",
      rating: 5
    },
    {
      text: "Top-notch medical team and support. The doctors are highly professional and the platform's security gave me peace of mind.",
      name: "M. Hossain",
      status: "Verified Patient",
      rating: 4
    },
    {
      text: "I love how I can see my prescription and billings in one place. No more lost papers or messy files. Highly recommended!",
      name: "K. Ahmed",
      status: "Regular User",
      rating: 5
    }
  ];

  return (
    <section className="testimonials-modern-section py-5">
      {/* Background Ambient Glow */}
      <div className="testimonial-glow"></div>

      <Container className="py-5 position-relative">
        <div className="text-center mb-5">
          <Badge bg="info" className="bg-opacity-10 text-info px-3 py-2 rounded-pill mb-3">User Feedback</Badge>
          <h2 className="display-5 fw-bold text-dark playfair">What Our <span className="text-primary">Patients Say</span></h2>
          <p className="text-muted">Real experiences from people who trusted our medical services.</p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-swiper pb-5"
        >
          {reviews.map((rev, i) => (
            <SwiperSlide key={i}>
              <div className="testimonial-card-premium shadow-sm">
                <div className="quote-icon-box">
                  <FaQuoteLeft />
                </div>
                
                <div className="rating-row mb-3">
                  {[...Array(rev.rating)].map((_, index) => (
                    <FaStar key={index} className="text-warning me-1" />
                  ))}
                </div>

                <p className="testimonial-text mb-4 italic">"{rev.text}"</p>

                <div className="pt-3 border-top border-light">
                  <h6 className="fw-bold mb-0 text-dark">{rev.name}</h6>
                  <small className="text-primary fw-medium">{rev.status}</small>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Testimonials;