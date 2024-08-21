import React from 'react';
import { Container, Row, Col, Form, Card, Image } from 'react-bootstrap';
import './JobPortal.css'; // Ensure this CSS file is correctly imported
import BottomNavBar from './BottomNavBar';

const JobPortal = () => {
  return (
    <>
    <div className="job-portal-container">
    <div className="job-portal-container-inner">
      <Container fluid className="p-3">
        {/* Header */}
        <Row className="mb-4">
          <Col>
            <div className="search-header">
              <h1 className="search-title">Search,<br />Find & Apply</h1>
              <i className="fas fa-bell notification-icon"></i>
            </div>
            <div className="search-bar-container">
              <Form.Control className="search-bar" type="text" placeholder="Search location..." />
              <i className="fas fa-filter filter-icon"></i>
            </div>
          </Col>
        </Row>

        {/* Popular Jobs Section */}
        <Row className="mb-4">
          <Col>
            <h2 className="popular-title">Popular Jobs</h2>
            <div className="cards-container">
              <Card className="job-card">
                <Card.Body>
                  <div className="card-header">
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXsAFkHCM6h9O0GD-kJd5YbrBxoBCrFwhlkw&s" roundedCircle className="avatar" />
                    <span className="price">$10k</span>
                  </div>
                  <Card.Title style={{ marginTop: '4px' }}>UX Designer</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Dhaka, Bangladesh</Card.Subtitle>
                  <span className="preferred-tag">Preferred by Boys</span>
                </Card.Body>
              </Card>

              <Card className="job-card">
                <Card.Body>
                  <div className="card-header">
                    <Image src="https://lh5.googleusercontent.com/proxy/U47y8_8HB4T3IGrTq8aLyb7mvbHtMoRG5fgKPx1OnadMmRBGrSUbtLhKQXUE3RondLGoaq13Zn5cFIjWXyDaykiaJe_QbDFpfbEE2hz_itTaOS7alvigY8-WZA" roundedCircle className="avatar" />
                    <span className="price">$8k</span>
                  </div>
                  <Card.Title style={{ marginTop: '4px' }}>Shopify Developer</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Dhaka, Bangladesh</Card.Subtitle>
                  <span className="preferred-tag">Preferred by Girls.</span>
                </Card.Body>
              </Card>

              {/* Add more cards as needed */}
            </div>
          </Col>
        </Row>
      </Container>

      {/* Jobs For You Section */}
      <section className="jobs-for-you">
        <h2 className="jobs-for-you-title">Jobs for You</h2>
        <div className="jobs-container">

          <div className="job-item">
            <div className="upper-section">
              <Image src="https://media.dev.to/cdn-cgi/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwhh1lpihw7h587pb2iuc.png" roundedCircle className="job-avatar" />
              <div className="job-details">
                <h5 className="job-title">Frontend Developer</h5>
                <p className="job-subtitle">Remote</p>
              </div>
            </div>
            <div className="lower-section">
              <span className="preferred-tag">Boys</span>
              <span className="slot">Slots Available</span>
              <span className="job-price">₹5000</span>
            </div>
          </div>

          <div className="job-item">
            <div className="upper-section">
              <Image src="https://media.dev.to/cdn-cgi/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwhh1lpihw7h587pb2iuc.png" roundedCircle className="job-avatar" />
              <div className="job-details">
                <h5 className="job-title">Frontend Developer</h5>
                <p className="job-subtitle">Remote</p>
              </div>
            </div>
            <div className="lower-section">
              <span className="preferred-tag">Boys</span>
              <span className="slot">Slots Available</span>
              <span className="job-price">₹5000</span>
            </div>
          </div>

          {/* Repeat the above div.job-item for more job listings */}
        </div>
      </section>

      <BottomNavBar />
      </div>
      </div>
    </>
  );
};

export default JobPortal;
