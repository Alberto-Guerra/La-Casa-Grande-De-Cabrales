import { Flex, Box } from "@chakra-ui/react";
import Carousel from "../../components/Carousel";
import Nav from "../../components/Nav";
import InfoCasa from "../../components/InfoCasa";
import Footer from "@/components/Footer"

import pic1 from "../../public/images/casa.jpg";
import pic2 from "../../public/images/casa1-1.jpeg";
import pic3 from "../../public/images/casa1-2.jpeg";
import pic4 from "../../public/images/casa1-3.jpeg";
import pic5 from "../../public/images/casa1-4.jpeg";

let cardsCasa1: string[] = [pic1.src, pic2.src, pic3.src, pic4.src, pic5.src];

export default function casa1() {
  return (
    <>
      <Nav />
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent="center"
        bgColor={"#F2F2F2"}
        marginBottom={"20px"}
      >
        <Box width={"full"} maxWidth={"1000px"}>
          <Carousel cards={cardsCasa1} />
        </Box>
        <Flex justifyContent={"space-around"} marginTop={"20px"} maxWidth={"1000px"}>
          <Box>
            <InfoCasa
              nombre={"LA CASA GRANDE 1"}
              personas={"8"}
              habitaciones={"4"}
              precio={"110€"}
              descripción={
                "La Casa Grande de Cabrales es un antiguo casar rehabilitado en el año 1996, da lugar a dos Casas Rurales adosadas con entrada independiente. Su capacidad va desde un mínimo de dos personas hasta un máximo de catorce. Se sitúa a los pies de los Picos de Europa. En nuestras Casas Rurales en Cabrales encontrarás todos los detalles para descansar, el silencio y la tranquilidad, las inmejorables vistas y por supuesto un completo equipamiento. La Casa Grande de Cabrales I tiene una capacidad para un mínimo de 4 personas y un máximo de 8 ya que cuenta con 4 habitaciones dobles, cuatro cuartos de baño, un salón- cocina, chimenea, terraza, barbacoa y garaje."
              }
              equipamiento={[
                "Calefacción y agua caliente",
                "Baño completo",
                "Amplias terrazas",
                "Jardín con barbacoa",
                "Salón con TV y chimenea",
                "Cocina completamente equipada",
                "Garaje",
              ]}
            />
          </Box>
        </Flex>
      </Flex>
      <Footer  />
    </>
  );
}
