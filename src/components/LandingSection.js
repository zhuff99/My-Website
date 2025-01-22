import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profileImage from "../images/profile_.jpg";


const greeting = "Hello, I am Zachary!";
const bio1 = "An Aspiring Software Engineer";
const bio2 = "Welcome to my info page!";

const LandingSection = () => {
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
    >
      <VStack spacing={4} align="center">
      <Avatar src={profileImage} size="2xl" alt="Zachary's Profile Picture" />
        <Heading as="h1" size="xl" color="white">
          {greeting}
        </Heading>
        <Heading as="h2" size="md" color="white">
          {bio1}
        </Heading>
        <Heading as="h2" size="md" color="white">
          {bio2}
        </Heading>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
