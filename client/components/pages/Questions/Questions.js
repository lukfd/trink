import { useEffect } from 'react'
import { Center, View, ScrollView, Button } from 'native-base'
import { getQuestions } from '../../../utility/databaseUtility'

const Questions = (props) => {
  useEffect(() => {
    // props is made of gameSettings (composed by type and modality) and players
    async function loadData() {
      try {
        const questions = await getQuestions(
          `${props.gameSettings[1].modality}Table`,
          props.players[0].gender,
          10
        )
        console.log(questions)
      } catch (e) {}
    }

    loadData()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <ScrollView></ScrollView>
      <View mb={20}>
        <Center>
          <Button
            onPress={() => {
              setIsShowPlayersPage(false)
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
