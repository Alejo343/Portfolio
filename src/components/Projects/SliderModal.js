import React from "react";
import { Modal } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./modal.css";

function SliderModal({ show, onHide, images }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="xl"
      className="fullscreen-modal"
    >
      {/* <Modal.Header closeButton>
      </Modal.Header> */}
      <Modal.Body>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          style={{ height: "80vh" }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="image-container">
                <img
                  src={image}
                  alt={`Project slide ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Modal.Body>
    </Modal>
  );
}

export default SliderModal;
