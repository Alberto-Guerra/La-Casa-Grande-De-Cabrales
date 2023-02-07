import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import NextLink from 'next/link'



export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box 
    position={"sticky"}
    top={"0"}
    zIndex={99}>
      <Flex
        bg={useColorModeValue("#F2F2F2", "gray.800")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }} 
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        justify={"center"}
        boxShadow={" 0px 3px 3px 0px rgba(0, 0, 0, 0.3)"}
        
      >
        <Flex flex={{ base: 1 }} justify={"space-between"} align ={"baseline"}
        >
          <Link as={NextLink} href={"/"}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily="Lusitana"
            fontWeight="extrabold"
            letterSpacing="-0.05em"
            color="#192E23"
            fontSize={useBreakpointValue({ base: "1.3em", lg:"2xl"  })}
          >
            LA CASA GRANDE DE CABRALES
          </Text>
          </Link>
          <Flex display={{ base: "none", lg: "flex" }}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Flex

          display={{ base: "flex", lg: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("#192E23", "gray.200");
  const linkHoverColor = useColorModeValue("gray.200", "#192E23");
  const linkHoverBg = useColorModeValue("#192E23", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                as={NextLink}
                rounded={"full"}
                fontFamily="Lato"
                fontWeight="extrabold"
                color="#192E23"
                p={2}
                href={navItem.href ?? "#"}
                fontSize={useBreakpointValue({ base: "1.3em", lg:"2xl"  })}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                  bg: linkHoverBg
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("#F2F2F2", "gray.800")}
      p={4}
      display={{ md: "none" }}
      textAlign={"right"}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"righ"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontFamily="Lato"
          fontWeight="extrabold"
          color="#192E23"
          fontSize={"xl"}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Casas",
    href: "/#casas",
  },
  {
    label: "Entorno",
    href: "/entorno",
  },
  {
    label: "Actividades",
    href: "/actividades",
  },
  
];
