import React from "react";
import { HStack, VStack, Image, Heading, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <HStack
      spacing={4}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      shadow="md"
      alignItems="center"
      p={4}
    >
      <Image src={imageSrc} alt={title} boxSize="100px" objectFit="cover" borderRadius="md" />
      <VStack align="start" spacing={2} flex={1}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text fontSize="sm" color="gray.600">
          {description}
        </Text>
      </VStack>
      <FontAwesomeIcon icon={faArrowRight} size="1x" color="gray" />
    </HStack>
  );
};

export default Card;
