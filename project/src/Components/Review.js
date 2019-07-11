import React from "react";
import Maria from "../assets/img/testimonial/2.jpg";
import Hh from "../assets/img/testimonial/1.jpg";
import Pp from "../assets/img/testimonial/3.jpg";
import Back from "../assets/img/201.png";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer
} from "mdbreact";

const CarouselPage = () => {
  return (
    <MDBContainer>
      <center>
        <h1>What Our Customers are Saying...</h1>
      </center>
      <MDBCarousel
        style={{ width: "1150px" }}
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://cdn.inspirationhut.net/wp-content/uploads/2013/05/13.png"
                alt="First slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <div
                style={{
                  borderRadius: "50%",
                  width: "70px",
                  height: "70px",
                  backgroundColor: "white",
                  marginLeft: "314px",
                  overflow: "hidden"
                }}
              >
                <img
                  src={Hh}
                  style={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    marginleft: "20 px"
                  }}
                />
              </div>
              <h3 className="h3-responsive">Youssef Chbinou</h3>
              <p>
                I tried it before and I loved it. Very good idea that really
                helps and allows many people to live their retirement to the
                fullest.
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://cdn.inspirationhut.net/wp-content/uploads/2013/05/13.png"
                alt="Second slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <div
                style={{
                  borderRadius: "50%",
                  width: "70px",
                  height: "70px",
                  backgroundColor: "white",
                  marginLeft: "314px",
                  overflow: "hidden"
                }}
              >
                <img
                  src={Maria}
                  style={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    marginleft: "20 px"
                  }}
                />
              </div>
              <h3 className="h3-responsive">Maria Smith</h3>
              <p>
                I tried it before and I loved it. Very good idea that really
                helps and allows many people to live their retirement to the
                fullest.
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://cdn.inspirationhut.net/wp-content/uploads/2013/05/13.png"
                alt="Third slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <div
                style={{
                  borderRadius: "50%",
                  width: "70px",
                  height: "70px",
                  backgroundColor: "white",
                  marginLeft: "314px",
                  overflow: "hidden"
                }}
              >
                <img
                  src={Pp}
                  style={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    marginleft: "20 px"
                  }}
                />
              </div>
              <h3 className="h3-responsive">John Wick</h3>
              <p>
                I tried it before and I loved it. Very good idea that really
                helps and allows many people to live their retirement to the
                fullest.
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default CarouselPage;
