import { React, useState } from "react";
import { Container, Center, Heading, Text, Button } from "native-base";
import GameSettings from '../GameSettings/GameSettings'

const Home = () => {
  const [isShowHomePage, setShowHomePage] = useState(true)

  function showHomePage() {
    return (
      <Center flex={1}>
        <Container>
          <Heading>
            <Text color="brand.primary">ATTENZIONE</Text>
          </Heading>
          <Text mt="3" fontWeight="medium">
          L’abuso di alcool è
          pericoloso per la salute. Per
          giocare a questo gioco
          consigliamo di bere acqua.
          Proseguendo confermate di
          essere maggiorenni e di
          essere consapevoli delle
          eventuali conseguenze che
          potrebbero generarsi
          dall’utilizzo di TrinKapp
          </Text>
          
        </Container>
        <Container>
          <Button my="5" color="brand.secondary" onPress={() => setShowHomePage(false)}>CONFERMO</Button>
        </Container>
      </Center>
    )
  }

  function showGameSettingsPage() {
    return <GameSettings />
  }

  if (isShowHomePage) {
    return showHomePage()
  } else {
    return showGameSettingsPage()
  }
  
};

export default Home;
