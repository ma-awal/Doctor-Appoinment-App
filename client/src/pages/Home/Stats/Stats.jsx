import { Container, Row, Col } from "react-bootstrap";
import { FaUserPlus, FaUserMd, FaHeadset } from "react-icons/fa";
 import "./Stat.css"

const Stats = () => {
  const statsData = [
    { 
      icon: <FaUserPlus />, 
      count: "15k+", 
      label: "Happy Patients", 
      desc: "Trusting our expert care daily" 
    },
    { 
      icon: <FaUserMd />, 
      count: "80+", 
      label: "Specialist Doctors", 
      desc: "Top rated board-certified MDs" 
    },
    { 
      icon: <FaHeadset />, 
      count: "24/7", 
      label: "Emergency Support", 
      desc: "Always available when you need" 
    }
  ];

  return (
    <section className="stats-gradient-wrapper">
      <Container>
        <div className="stats-glass-container">
          <Row className="g-4">
            {statsData.map((stat, i) => (
              <Col md={4} key={i} className="stats-item">
                <div className="d-flex align-items-center justify-content-center stats-content">
                  <div className="stats-icon-box me-4">
                    {stat.icon}
                  </div>
                  <div className="text-start">
                    <h2 className="stats-number mb-0">{stat.count}</h2>
                    <h6 className="stats-label fw-bold mb-1">{stat.label}</h6>
                    <p className="stats-desc mb-0 opacity-75">{stat.desc}</p>
                  </div>
                  {i < statsData.length - 1 && <div className="stats-divider d-none d-md-block"></div>}
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Stats;