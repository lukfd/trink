import { useCallback, useEffect, useState } from 'react'
import { Center, View, ScrollView, Button, Text } from 'native-base'
import { getQuestions } from '../../../utility/databaseUtility'

const Questions = (props) => {
  // props is made of gameSettings (composed by type and modality) and players
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    getQuestions(
      `${props.gameSettings[1].modality}Table`,
      props.players[0].gender,
      10
    ).then((data) => {
      console.log('IN USE EFFECT!', data)
    })
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <ScrollView mt={200}>
        <Center>
          {questions?.map((value) => {
            {
              value
            }
          })}
        </Center>
      </ScrollView>

      <View mb={20}>
        <Center>
          <Button
            onPress={() => {
              console.log('PRESSED')
            }}
          >
            Prossima domanda
          </Button>
        </Center>
      </View>
    </View>
  )
}

export default Questions
