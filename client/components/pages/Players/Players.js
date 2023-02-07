import { React, useState } from 'react'
import {
  Center,
  Heading,
  Radio,
  Input,
  Stack,
  Button,
  ScrollView,
  VStack,
} from 'native-base'

const Players = (props) => {
  const [players, setPlayers] = useState('Maschio')

  console.log(props)
  return (
    <ScrollView>
      <Center>
        <VStack>
          <Stack direction="row" mb="2.5" mt="1.5" space={3}>
            <Center>
              <Heading my={100}>Aggiungi giocatori</Heading>
              <Input size="2xl" placeholder="Nome" />
              <Radio.Group
                name="myRadioGroup"
                accessibilityLabel="favorite number"
                value={players}
                onChange={(nextValue) => {
                  setPlayers(nextValue)
                }}
              >
                <Stack
                  direction={{
                    base: 'column',
                    md: 'row',
                  }}
                  alignItems={{
                    base: 'flex-start',
                    md: 'center',
                  }}
                  space={4}
                  w="75%"
                  maxW="300px"
                >
                  <Radio value="one" my={1}>
                    One
                  </Radio>
                  <Radio value="two" my={1}>
                    Two
                  </Radio>
                </Stack>
              </Radio.Group>
            </Center>
          </Stack>
        </VStack>
        <Button bg="indigo.500" onPress={() => console.log('hello world')}>
          Aggiungi
        </Button>
      </Center>
    </ScrollView>
  )
}

export default Players
