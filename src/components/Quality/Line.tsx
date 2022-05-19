import { Box, Divider, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

export function Line() {
  const bg = useColorModeValue("#47585B", "#fff");
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      display="flex"
      mt={[12, 24]}
    >
      <Divider
        bg={bg}
        height="2px"
        w="100px"
        as={motion.div}
        whileHover={{ width: 150 }}
        transition="0.3s linear"
      />
    </Box>
  );
}
