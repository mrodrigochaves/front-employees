import { Box, Center, Flex, Avatar, Heading, Card, CardHeader, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from 'react';
import api from "./service/api";

export default function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    api.get("/employees")
      .then((response) => setEmployees(response.data))
      .catch((err) => {
        console.error("Oops! An error occurred: " + err);
      });
  }, []);

  return (
    <Box h="100vh">
      <Center
        as="header"
        h={150}
        bg="blue.500"
        color="white"
        fontWeight="bold"
        fontSize="4xl"
        pb="8"
      >
        Employees Directory
      </Center>
      <Flex
        align="center"
        justify="center"
        bg="blackAlpha.200"
        h="calc(100vh - 150px)"
      >
        <Center
          w="100%"
          maxW={840}
          bg="white"
          top={100}
          position="absolute"
          borderRadius={5}
          p="6"
          boxShadow="0 1px 2px #ccc"
        >
          {employees.map((employee) => (
            <Card maxW="md" key={employee.id}>
              <CardHeader>
                <Flex spacing="4">
                  <Flex
                    flex="1"
                    gap="4"
                    alignItems="center"
                    flexWrap="wrap"
                  >
                    <Avatar name='Marcio Rodrigo' src='https://sttotv8prodmedia.blob.core.windows.net/mediacache/4/e/4/8/3/4/4e483472bd85797f16c1dbd376df2783a826e593.jpg' />
                    <Box>
                      <Heading size="sm">{employee.title}</Heading>
                    </Box>
                    <Box>
                      <Text>Name: {employee.name}</Text>
                      <Text>Last Name: {employee.lastName}</Text>
                      <Text>Department: {employee.department}</Text>
                    </Box>
                  </Flex>
                </Flex>
              </CardHeader>
            </Card>
          ))}
        </Center>
      </Flex>
    </Box>
  );
}