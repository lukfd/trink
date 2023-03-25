import { React, useState } from 'react'
import {
  Center,
  Heading,
  Radio,
  Input,
  Button,
  ScrollView,
  HStack,
  Container,
  Box,
  View,
} from 'native-base'
import Questions from '../Questions/Questions'

const Players = (props) => {
  const [showPlayersPage, setIsShowPlayersPage] = useState(true)
  const [playerName, setPlayerName] = useState('')
  const [gender, setGender] = useState('male')
  const [players, addPlayer] = useState([])

  function PlayersPage() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Center>
            <Heading my={100}>Aggiungi giocatori</Heading>
          </Center>
          <Center>
            <Container>
              <Center w="xs">
                <Input
                  value={playerName}
                  w="100%"
                  onChangeText={setPlayerName}
                  placeholder="Nome giocatore"
                />
              </Center>
              <HStack space={2} justifyContent="center" mt={3}>
                <Center mx={3}>
                  <Radio.Group
                    name="settingGeneder"
                    accessibilityLabel="Select your gender"
                    value={gender}
                    onChange={(nextValue) => {
                      setGender(nextValue)
                    }}
                  >
                    <HStack>
                      <Radio value="male" mx={2}>
                        Maschio
                      </Radio>
                      <Radio value="female" mx={2}>
                        Femmina
                      </Radio>
                    </HStack>
                  </Radio.Group>
                </Center>
                <Center>
                  <Button
                    isDisabled={playerName === ''} //TODO Should also check for uniqness (try using the some method)
                    onPress={() => {
                      addPlayer([
                        ...players,
                        { playerName: playerName, gender: gender },
                      ])
                      setPlayerName('')
                    }}
                  >
                    Aggiungi
                  </Button>
                </Center>
              </HStack>
            </Container>
          </Center>
          <Center>
            {players.map((value, index) => {
              return (
                <HStack key={index + 10000000} padding={4}>
                  <Box
                    w="64"
                    h="20"
                    borderColor="coolGray.200"
                    alignItems="center"
                    alignContent="center"
                    rounded="md"
                    key={index}
                  >
                    {value.playerName}
                  </Box>
                  <Button
                    key={index + 10000}
                    h="10"
                    alignContent="center"
                    colorScheme="danger"
                    onPress={() => {
                      addPlayer(
                        players.filter((player) => {
                          return player.playerName !== value.playerName
                        })
                      )
                    }}
                  >
                    Rimuovi
                  </Button>
                </HStack>
              )
            })}
          </Center>
        </ScrollView>
        <View mb={20}>
          <Center>
            <Button
              isDisabled={players.length === 0}
              onPress={() => {
                setIsShowPlayersPage(false)
              }}
            >
              Inizia a giocare
            </Button>
          </Center>
        </View>
      </View>
    )
  }

  if (showPlayersPage) {
    return PlayersPage()
  } else {
    return <Questions gameSettings={props.gameSettings} players={players} />
  }
}

export default Players
