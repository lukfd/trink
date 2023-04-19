import { React, useState } from 'react'
import { Center, VStack, Heading, Button, View, IconButton } from 'native-base'
import { AntDesign } from '@expo/vector-icons'
import Players from '../Players/Players'

const GameSettings = () => {
  const [isShowTypePage, setIsShowTypePage] = useState(true)
  const [isShowPlayersPage, setIsShowPlayersPage] = useState(false)
  const [gameSettings, setGameSettings] = useState([])

  function typePage() {
    return (
      <Center flex={1}>
        <Heading my={100}>Scegli il tipo di gioco</Heading>
        <VStack space={4} alignItems="center">
          <Button
            w="64"
            h="20"
            bg="indigo.300"
            rounded="md"
            shadow={3}
            onPress={() => {
              setIsShowTypePage(false)
              setGameSettings([...gameSettings, { type: 'classic' }])
            }}
          >
            Classico
          </Button>
          <Button
            w="64"
            h="20"
            bg="indigo.500"
            rounded="md"
            shadow={3}
            onPress={() => {
              setIsShowTypePage(false)
              setGameSettings([...gameSettings, { type: 'truthOrDare' }])
            }}
          >
            Obbligo o Verità
          </Button>
        </VStack>
      </Center>
    )
  }

  function modalityPage() {
    return (
      <Center flex={1}>
        <Heading my={100}>Scegli la modalità</Heading>
        <IconButton
          size="lg"
          variant="ghost"
          _icon={{
            as: AntDesign,
            name: 'back',
          }}
          onPress={() => {
            setIsShowTypePage(true)
            setGameSettings([])
          }}
        />
        <VStack space={4} alignItems="center">
          <Button
            w="64"
            h="20"
            bg="indigo.300"
            rounded="md"
            size="lg"
            shadow={3}
            onPress={() => {
              setIsShowPlayersPage(true)
              setGameSettings([...gameSettings, { modality: 'easy' }])
            }}
          >
            Easy
          </Button>
          <Button
            w="64"
            h="20"
            bg="indigo.500"
            rounded="md"
            size="lg"
            shadow={3}
            onPress={() => {
              setIsShowPlayersPage(true)
              setGameSettings([...gameSettings, { modality: 'flirt' }])
            }}
          >
            Flirt
          </Button>
          <Button
            w="64"
            h="20"
            bg="indigo.700"
            rounded="md"
            size="lg"
            shadow={3}
            onPress={() => {
              setIsShowPlayersPage(true)
              setGameSettings([...gameSettings, { modality: 'hot' }])
            }}
          >
            Hot
          </Button>
        </VStack>
      </Center>
    )
  }

  function playersPage() {
    return <Players gameSettings={gameSettings} />
  }

  if (isShowTypePage) {
    return typePage()
  } else if (isShowPlayersPage) {
    return playersPage()
  } else {
    return modalityPage()
  }
}

export default GameSettings
