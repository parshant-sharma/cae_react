import React from "react";

import Header from "./Header";
import RectangleHome from "../images/home_img.png";
import techIcon from "../images/Vector.png";
import teamIcon from "../images/Vector(1).png";
import trophyIcon from "../images/Vector(2).png";
import Slider from "react-slick";
import exploreImg from "../images/exploreImg.png";
import crousal_bg from "../images/crousal_bg.png";
import Footer from "./Footer";
import CoreValuePic from "../images/coreValuePic.png";
import ratingImg from "../images/ratings.png";
import doubleQuoteopen from "../images/doubleQuote1.png";
import doubleQuoteclose from "../images/doubleQuote2.png";
import testimoniesProfileImg from "../images/testimonies_profile_img.png";

const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "5%",
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: "5%",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          centerMode: true,
          centerPadding: "5%",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0",
        },
      },
    ],
  };

  var settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: "5%",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          centerMode: true,
          centerPadding: "5%",
        },
      },
      {
        breakpoint: 480,
        settings: {
          // Corrected from settings1 to settings
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <>
      <Header />
      <div style={{ justifyItems: "center" }}>
        <div className="Home">
          <div className="flex flex-col  items-start justify-center  ">
            <h1 className="Home_heading text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Transforming <br /> Education For the <br /> Digital Age
            </h1>
            <p className="font-normal text-sm sm:text-sm md:text-base lg:text-lg leading-tight tracking-normal mt-2 mb-6 sm:mb-8 w-full sm:w-3/4 lg:w-2/3">
              At CAE 21, we’re redefining learning with innovative, scalable
              solutions for students, educators, and institutions worldwide.
            </p>

            <button className="bg-blue-800 text-white font-medium text-xs sm:text-sm md:text-base lg:text-lg py-2 px-8 rounded-md">
              Get Started
            </button>
          </div>

          <div>
            <img src={RectangleHome} alt="Home Rectangle" />
          </div>
        </div>

        <div className="mt-12 w-4/5 flex justify-around bg-gray-200 p-5">
          <div className="flex flex-col items-center">
            <h1 className="text-gray-800 font-bold text-2xl text-center md:text-6xl lg:text-7xl xl:text-8xl">
              150<span className="text-blue-500">+</span>
            </h1>
            <h1 className="text-gray-600 text-[10px] md:text-base">Clients</h1>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-gray-800 font-bold text-2xl text-center md:text-6xl lg:text-7xl xl:text-8xl">
              100<span className="text-blue-500">k</span>
            </h1>
            <h1 className="text-gray-600 text-[10px] md:text-base">
              Students worldwide
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-gray-800 font-bold text-2xl text-center md:text-6xl lg:text-7xl xl:text-8xl">
              45<span className="text-blue-500">k</span>
            </h1>
            <h1 className="text-gray-600 text-[10px] md:text-base">
              Educators
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-gray-800 font-bold text-2xl text-center md:text-6xl lg:text-7xl xl:text-8xl">
              99<span className="text-blue-500">%</span>
            </h1>
            <h1 className="text-gray-600 text-[10px] md:text-base">
              Student satisfactions
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 mt-10 px-6 py-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-center py-8">
          Our Facilities
        </h1>
        <div className="our_facilities">
          <div className="bg-white p-10 pb-8 flex flex-col w-full ">
            <img src={techIcon} className="w-16 mb-6" alt="Tech Icon" />
            <h1 className="facilites_heading text-lg sm:text-xl font-semibold ">
              Innovative Technology
            </h1>
            <p className="facilities_desc text-sm sm:text-base ">
              - Leveraging AI, VR, AR, and blockchain to stay ahead of the
              curve.
            </p>
          </div>
          <div className="bg-white p-10 pt-8 pb-8 flex flex-col w-full ">
            <img src={teamIcon} className="w-16 h-16 mb-5" alt="Team Icon" />
            <h1 className="facilites_heading text-lg sm:text-xl font-semibold ">
              Expert Team
            </h1>
            <p className="facilities_desc text-sm sm:text-base ">
              - A passionate team of educators, developers, and innovators
              driving impactful change.
            </p>
          </div>
          <div className="bg-white p-10 pt-8 pb-8 flex flex-col w-full ">
            <img
              src={trophyIcon}
              className="w-16 h-16 mb-5"
              alt="Trophy Icon"
            />
            <h1 className="facilites_heading text-lg sm:text-xl font-semibold ">
              Award-Winning Results
            </h1>
            <p className="facilities_desc text-sm sm:text-base ">
              - Recognized for excellence and innovative educational solutions.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${crousal_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative"
      >
        <h1 className="text-white text-center text-4xl font-medium pt-10">
          Explore Our Services
        </h1>
        <Slider {...settings} className="pt-16 pb-24">
          <div className="slick-slide bg-white m-2">
            <img
              src={exploreImg}
              className="bg-white p-5"
              alt="Online Learning Platform"
            />
            <h1 className="bg-white pl-5 pb-5">Online Learning Platform</h1>
          </div>
          <div className="slick-slide bg-white m-2">
            <img
              src={exploreImg}
              className="bg-white p-5"
              alt="Virtual Classrooms"
            />
            <h1 className="bg-white pl-5 pb-5">Virtual Classrooms</h1>
          </div>
          <div className="slick-slide bg-white m-2">
            <img
              src={exploreImg}
              className="bg-white p-5"
              alt="AI-Powered Personalization"
            />
            <h1 className="bg-white pl-5 pb-5">AI-Powered Personalization</h1>
          </div>
          <div className="slick-slide bg-white m-2">
            <img src={exploreImg} className="bg-white p-5" alt="Service 1" />
            <h1 className="bg-white pl-5 pb-5">Service 1</h1>
          </div>
          <div className="slick-slide bg-white m-2">
            <img src={exploreImg} className="bg-white p-5" alt="Service 2" />
            <h1 className="bg-white pl-5 pb-5">Service 2</h1>
          </div>
        </Slider>
      </div>

      <div className="bg-gray-200 my-8">
        <h1 className="text-center text-4xl font-extrabold py-12">
          Core Values
        </h1>
        <div className="flex justify-center mx-auto relative">
          <div className="relative">
            <img
              src={CoreValuePic}
              className="block mx-auto relative w-full max-w-[80vw] sm:max-w-[70vw] md:max-w-[60vw]"
              alt="Core Values"
            />

            {/* Innovation */}
            <div className="absolute top-12 left-[0px]  md:left-[-200px] md:p-6  bg-white rounded-lg ">
              <h1 className=" text-xl  font-semibold text-lg  text-base md:text-sm">
                Innovation
              </h1>
              <p className=" text-sm sm:text-xs text-[10px]  pr-6 md:text-xs">
                Pushing the boundaries of what's <br /> possible in education.
              </p>
            </div>

            {/* Accessibility */}
            <div className="absolute bottom-12  left-[0px] md:left-[-200px] md:p-6 bg-white rounded-lg ">
              <h1 className=" text-xl font-semibold text-lg sm:text-base md:text-sm">
                Accessibility
              </h1>
              <p className=" text-sm sm:text-xs text-[10px] md:text-xs">
                Ensuring quality learning opportunities <br /> for everyone,
                everywhere.
              </p>
            </div>

            {/* Excellence */}
            <div className="absolute top-12 right-[0px] md:right-[-200px] md:p-6 bg-white rounded-lg ">
              <h1 className=" text-xl font-semibold text-lg sm:text-base md:text-sm">
                Excellence
              </h1>
              <p className=" text-sm sm:text-xs text-[10px] md:text-xs">
                Striving for the highest standards in <br /> technology and
                pedagogy.
              </p>
            </div>

            {/* Collaboration */}
            <div className="absolute bottom-12 right-[0px] md:right-[-200px] md:p-6 bg-white rounded-lg ">
              <h1 className=" text-xl font-semibold text-lg sm:text-base md:text-sm">
                Collaboration
              </h1>
              <p className=" text-sm sm:text-xs text-[10px] md:text-xs">
                Building meaningful partnerships to <br /> maximize impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          background: "#E8E8E8",
          paddingTop: "50px",
          marginBottom: "-20px",
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "48px",
            fontWeight: "500",
          }}
        >
          Testimonies
        </h1>

        <div>
          <Slider
            {...settings1}
            style={{ paddingTop: "60px", paddingBottom: "90px" }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  background: "white",
                  padding: "20px",
                }}
              >
                <h1 style={{ fontSize: "13px", fontWeight: "500" }}>
                  2 Mar, 2025
                </h1>
                <img src={ratingImg} />
              </div>
              <div style={{ background: "white", padding: "20px" }}>
                <img src={doubleQuoteopen} style={{ marginBottom: "-5px" }} />
                <p
                  className="testimonies_para"
                  style={{
                    fontWeight: "500",
                    fontSize: "15px",
                    textAlign: "justify",
                    display: "inline",
                  }}
                >
                  {" "}
                  CAE 21 has transformed the way I teach. The interactive
                  platform keeps students engaged, and the AI-powered
                  personalization ensures they learn at their own pace. Virtual
                  classrooms make online sessions seamless, and the LMS
                  simplifies course management. It's a complete package for
                  modern educators, making teaching more effective and
                  enjoyable!.CAE 21 has transformed the way I teach. The
                  interactive platform keeps students engaged, and the
                  AI-powered personalization ensures they learn at their own
                  pace. Virtual classrooms make online sessions seamless, and
                  the LMS simplifies course management. It's a complete package
                  for modern educators, making teaching more effective and
                  enjoyable!{" "}
                </p>
                <img
                  src={doubleQuoteclose}
                  style={{ display: "inline", paddingTop: "7px" }}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingTop: "30px",
                  }}
                >
                  <img src={testimoniesProfileImg} />
                  <div style={{ paddingLeft: "15px" }}>
                    <h1 style={{ fontWeight: "500", fontSize: "13px" }}>
                      Ram Prasad
                    </h1>
                    <p style={{ fontWeight: "500", fontSize: "8px" }}>
                      Student
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  background: "white",
                  padding: "20px",
                }}
              >
                <h1 style={{ fontSize: "13px", fontWeight: "500" }}>
                  2 Mar, 2025
                </h1>
                <img src={ratingImg} />
              </div>
              <div style={{ background: "white", padding: "20px" }}>
                <img src={doubleQuoteopen} style={{ marginBottom: "-5px" }} />
                <p
                  className="testimonies_para"
                  style={{
                    fontWeight: "500",
                    fontSize: "15px",
                    textAlign: "justify",
                    display: "inline",
                  }}
                >
                  {" "}
                  CAE 21 has transformed the way I teach. The interactive
                  platform keeps students engaged, and the AI-powered
                  personalization ensures they learn at their own pace. Virtual
                  classrooms make online sessions seamless, and the LMS
                  simplifies course management. It's a complete package for
                  modern educators, making teaching more effective and
                  enjoyable!.CAE 21 has transformed the way I teach. The
                  interactive platform keeps students engaged, and the
                  AI-powered personalization ensures they learn at their own
                  pace. Virtual classrooms make online sessions seamless, and
                  the LMS simplifies course management. It's a complete package
                  for modern educators, making teaching more effective and
                  enjoyable!{" "}
                </p>
                <img
                  src={doubleQuoteclose}
                  style={{ display: "inline", paddingTop: "7px" }}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingTop: "30px",
                  }}
                >
                  <img src={testimoniesProfileImg} />
                  <div style={{ paddingLeft: "15px" }}>
                    <h1 style={{ fontWeight: "500", fontSize: "13px" }}>
                      seta devi
                    </h1>
                    <p style={{ fontWeight: "500", fontSize: "8px" }}>
                      Educator
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  background: "white",
                  padding: "20px",
                }}
              >
                <h1 style={{ fontSize: "13px", fontWeight: "500" }}>
                  2 Mar, 2025
                </h1>
                <img src={ratingImg} />
              </div>
              <div style={{ background: "white", padding: "20px" }}>
                <img src={doubleQuoteopen} style={{ marginBottom: "-5px" }} />
                <p
                  className="testimonies_para"
                  style={{
                    fontWeight: "500",
                    fontSize: "15px",
                    textAlign: "justify",
                    display: "inline",
                  }}
                >
                  CAE 21 has transformed the way I teach. The interactive
                  platform keeps students engaged, and the AI-powered
                  personalization ensures they learn at their own pace. Virtual
                  classrooms make online sessions seamless, and the LMS
                  simplifies course management. It's a complete package for
                  modern educators, making teaching more effective and
                  enjoyable!.CAE 21 has transformed the way I teach. The
                  interactive platform keeps students engaged, and the
                  AI-powered personalization ensures they learn at their own
                  pace. Virtual classrooms make online sessions seamless, and
                  the LMS simplifies course management. It's a complete package
                  for modern educators, making teaching more effective and
                  enjoyable!{" "}
                </p>
                <img
                  src={doubleQuoteclose}
                  style={{ display: "inline", paddingTop: "7px" }}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingTop: "30px",
                  }}
                >
                  <img src={testimoniesProfileImg} />
                  <div style={{ paddingLeft: "15px" }}>
                    <h1 style={{ fontWeight: "500", fontSize: "13px" }}>
                      Jamiyu Aliyu
                    </h1>
                    <p style={{ fontWeight: "500", fontSize: "8px" }}>
                      Educator
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      {/* footer  */}

      <Footer />
    </>
  );
};

export default Home;
