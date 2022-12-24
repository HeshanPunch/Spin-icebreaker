import React, { useState } from "react";
import {
  Button,
  Box,
  Center,
  Heading,
  Spinner as SpinnerIcon,
} from "@chakra-ui/react";
import { TbRotateClockwise2 } from "react-icons/tb";

type SpinnerProps = {
  dataSet: string[];
  spinnerType: string;
  large?: boolean;
};

//helper
const spinWheel = (numberOfItemsInArray: number) => {
  return Math.floor(Math.random() * numberOfItemsInArray);
};

//component
const Spinner = ({ dataSet, spinnerType, large }: SpinnerProps) => {
  const [displayedItem, setDisplayedItem] = useState("Click to Spin");
  const [loading, setLoading] = useState(false);

  const clickHandler = () => {
    setLoading(true);
    setTimeout(() => {
      setDisplayedItem(dataSet[spinWheel(dataSet.length)]);
      setLoading(false);
    }, 250);
  };

  return (
    <Box>
      <Center h="2em" w="100%">
        <Button
          onClick={clickHandler}
          leftIcon={<TbRotateClockwise2 size={20} />}
          colorScheme="teal"
          variant="outline"
        >
          Spin for {spinnerType}
        </Button>
      </Center>

      <Box h="4em" w={large ? "800px" : "200px"} color="gray" mt="1em">
        <Center>
          {loading ? (
            <SpinnerIcon color="red.500" />
          ) : (
            <Heading
              as="h4"
              size={large ? "md" : "sm"}
              noOfLines={4}
              textAlign="center"
            >
              {displayedItem}
            </Heading>
          )}
        </Center>
      </Box>
    </Box>
  );
};

export default Spinner;
