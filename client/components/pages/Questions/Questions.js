import { useEffect, useState } from 'react'
import { Center, View, ScrollView, Button, IconButton } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'
import { getQuestions } from '../../../utility/databaseUtility'
import End from '../End/End'

const Questions = (props) => {
  // props is made of gameSettings (composed by type and modality) and players
  const totalNumberOfPlayers = props.players.length
  const totalNumberOfQuestions = 30 / totalNumberOfPlayers
  const [questions, setQuestions] = useState([])
  var [playerPlaying, setPlayerPlaying] = useState(0)
  var [questionNumber, setQuestionNumber] = useState(totalNumberOfQuestions - 1)
  var [questionToDisplay, setQuestionToDisplay] = useState('')
  var [playerNameToDisplay, setPlayerNameToDisplay] = useState('')
  var [showQuestionsPage, setShowQuestionsPage] = useState(true)

  useEffect(() => {
    props.players.forEach((player) => {
      try {
        getQuestions(
          `${props.gameSettings[1].modality}Table`,
          player.gender,
          totalNumberOfQuestions
        ).then((data) => {
          var questionsToAddForSignlePlayer = []

          data.forEach((element) => {
            questionsToAddForSignlePlayer.push(Object.values(element)[0])
          })

          setQuestions((previousQuestions) => [
            ...previousQuestions,
            {
              playerName: player.playerName,
              questions: questionsToAddForSignlePlayer,
            },
          ])
        })
      } catch (error) {
        console.error(error)
      }
    })
  }, [])

  if (questions.length > 0 && questionToDisplay === '') {
    setQuestionNumber(questions[playerPlaying].questions.length - 1)
    setQuestionToDisplay(
      questions[playerPlaying].questions[
        questions[playerPlaying].questions.length - 1
      ]
    )
    setPlayerNameToDisplay(questions[playerPlaying].playerName)
  }

  function QuestionsPage() {
    return (
      <View style={{ flex: 1 }}>
        <View mt={20} ml={80}>
          <IconButton
            size="lg"
            variant="ghost"
            _icon={{
              as: MaterialIcons,
              name: 'close',
            }}
            onPress={() => {
              setShowQuestionsPage(false)
            }}
          />
        </View>

        <ScrollView mt={200}>
          <Center>{playerNameToDisplay}</Center>
          <Center px={4}>{questionToDisplay}</Center>
        </ScrollView>

        <View mb={20}>
          <Center>
            <Button
              onPress={() => {
                console.log('PRESSED')
                console.log(playerPlaying, questionNumber)

                // increase playerPlaying
                if (playerPlaying + 1 < questions.length) {
                  setPlayerPlaying(playerPlaying + 1)
                  setQuestionToDisplay(
                    questions[playerPlaying].questions[questionNumber]
                  )
                } else {
                  setPlayerPlaying(0)
                  if (questionNumber - 1 >= 0) {
                    setQuestionNumber(questionNumber - 1)
                    setQuestionToDisplay(
                      questions[playerPlaying].questions[questionNumber - 1]
                    )
                  } else {
                    setShowQuestionsPage(false)
                  }
                }
                setPlayerNameToDisplay(questions[playerPlaying].playerName)
              }}
            >
              Prossima domanda
            </Button>
          </Center>
        </View>
      </View>
    )
  }

  if (showQuestionsPage) {
    return QuestionsPage()
  } else {
    return <End />
  }
}

export default Questions
