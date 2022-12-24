import React from "react";
import { names, questions } from "../assets/constants";
import Spinner from "../components/Spinner/Spinner";
import { Center, Box, Button, Heading } from "@chakra-ui/react";

const Home = () => {
  return (
    <Center h="100vh" w="100vw" color="tomato">
      <Box w="100%" p={8} h="auto">
        <Center h="8em">
          <Heading
            as="h1"
            size="xl"
            noOfLines={1}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
          >
            Spin To Play!
          </Heading>
        </Center>

        <Center mb="3em" mt="2em">
          <Spinner dataSet={names} spinnerType="Names" />
        </Center>

        <Center mb="3em" mt="2em">
          <Spinner dataSet={questions} spinnerType="Questions" large={true} />
        </Center>
      </Box>
    </Center>
  );
};

export default Home;
