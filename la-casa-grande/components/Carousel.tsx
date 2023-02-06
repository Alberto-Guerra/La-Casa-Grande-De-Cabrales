import React from "react";
import {
  Box,
  IconButton,
  AspectRatio,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

interface carInfo {
  cards: string[];
}

export default function Carousel({ cards }: carInfo) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = {base: "10%", md: "25%"}
  const side = {base: "10px",md: "5%", xl: "20%"}


  return (
    <>
      <Box  maxHeight={"70vh"} width={"full"} overflow={"hidden"}>
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          boxShadow={" 0px 6px 6px 0px rgba(0, 0, 0, 0.7)"}
          aria-label="left-arrow"
          bgColor={"#FFFFFF"}
          color={"#192E23"}
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          _hover={{ bgColor: "#192E23", color: "#FFFFFF" }}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          boxShadow={" 0px 6px 6px 0px rgba(0, 0, 0, 0.7)"}
          aria-label="right-arrow"
          bgColor={"#FFFFFF"}
          color={"#192E23"}
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={1}
          _hover={{ bgColor: "#192E23", color: "#FFFFFF" }}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((url, index) => (
            <AspectRatio ratio={16 / 10}>
              <Image key={index} src={url} />
            </AspectRatio>
          ))}
        </Slider>
      </Box>
    </>
  );
}
