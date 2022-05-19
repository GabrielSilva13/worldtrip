import { Box, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

export function SliderItem() {
  return (
    <Box h={["xl", "2xl"]}>
      {" "}
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
        hashNavigation
      >
        <SwiperSlide>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            backgroundPosition="center"
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
            backgroundImage="url('/north-america.webp')"
            h={["lg", "xl"]}
            fontFamily="Poppins"
          >
            <Link href={"/country/north-america"}>
              <Text
                color="#F5F8FA"
                fontSize={[24, 24, 48]}
                fontWeight="700"
                zIndex="9999"
                cursor={"pointer"}
                as={motion.div}
                whileHover={{ scale: 1.05 }}
                transition="0.3s linear"
              >
                América do Norte
              </Text>
            </Link>
            <Text fontWeight="700" fontSize={[14, 14, 24]} color="#DADADA">
              O continente mais rico
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            backgroundImage="url('/south-america.webp')"
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
            backgroundPosition="center"
            h={["lg", "xl"]}
            fontFamily="Poppins"
          >
            <Link href={"/country/south-america"}>
              <Text
                color="#F5F8FA"
                fontSize={[24, 24, 48]}
                fontWeight="700"
                zIndex="9999"
                cursor={"pointer"}
                as={motion.div}
                whileHover={{ scale: 1.05 }}
                transition="0.3s linear"
              >
                América do Sul
              </Text>
            </Link>
            <Text fontWeight="700" fontSize={[14, 14, 24]} color="#DADADA">
              O continente com a maior flora
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            backgroundImage="url('/asia.webp')"
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
            backgroundPosition="bottom"
            h={["lg", "xl"]}
            fontFamily="Poppins"
          >
            <Link href={"/country/asia"}>
              <Text
                color="#F5F8FA"
                fontSize={[24, 24, 48]}
                fontWeight="700"
                zIndex="9999"
                cursor={"pointer"}
                as={motion.div}
                whileHover={{ scale: 1.05 }}
                transition="0.3s linear"
              >
                Ásia
              </Text>
            </Link>
            <Text fontWeight="700" fontSize={[14, 14, 24]} color="#DADADA">
              O continente mais cultura
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            backgroundImage="url('/africa.webp')"
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
            backgroundPosition="center"
            h={["lg", "xl"]}
            fontFamily="Poppins"
          >
            <Link href={"/country/africa"}>
              <Text
                color="#F5F8FA"
                fontSize={[24, 24, 48]}
                fontWeight="700"
                zIndex="9999"
                cursor={"pointer"}
                as={motion.div}
                whileHover={{ scale: 1.05 }}
                transition="0.3s linear"
              >
                África
              </Text>
            </Link>
            <Text fontWeight="700" fontSize={[14, 14, 24]} color="#DADADA">
              O continente mais diversidade
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            backgroundImage="url('/europe.webp')"
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
            backgroundPosition="center"
            h={["lg", "xl"]}
            fontFamily="Poppins"
          >
            <Link href={"/country/europe"}>
              <Text
                color="#F5F8FA"
                fontSize={[24, 24, 48]}
                fontWeight="700"
                zIndex="9999"
                cursor={"pointer"}
                as={motion.div}
                whileHover={{ scale: 1.05 }}
                transition="0.3s linear"
              >
                Europa
              </Text>
            </Link>

            <Text fontWeight="700" fontSize={[14, 14, 24]} color="#DADADA">
              O continente mais antigo
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            backgroundImage="url('/oceania.webp')"
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
            backgroundPosition="center"
            h={["lg", "xl"]}
            fontFamily="Poppins"
          >
            <Link href={"/country/oceania"}>
              <Text
                color="#F5F8FA"
                fontSize={[24, 24, 48]}
                fontWeight="700"
                zIndex="9999"
                cursor={"pointer"}
                as={motion.div}
                whileHover={{ scale: 1.05 }}
                transition="0.3s linear"
              >
                Oceania
              </Text>
            </Link>

            <Text fontWeight="700" fontSize={[14, 14, 24]} color="#DADADA">
              O continente com mais arquipélagos
            </Text>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
