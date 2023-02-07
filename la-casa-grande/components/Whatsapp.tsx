import { Link, Image } from "@chakra-ui/react";

import whats from "../public/images/whatsapp.png";

export default function whatsapp() {
  return (
    <Link zIndex={1}>
      <Image src={whats.src} width={"30px"} height={"auto"} 
      top={"90%"}/>
    </Link>
  );
}
