import { useEffect, useState } from 'react'
import { Center, View, ScrollView, Button } from 'native-base'
import { getQuestions } from '../../../utility/databaseUtility'
// import { End } from '../End/End'

const Questions = (props) => {
  // props is made of gameSettings (composed by type and modality) and players
  const totalNumberOfQuestions = 30 / props.players.length
  const [questions, setQuestions] = useState([])
  var [playerPlaying, setPlayerPlaying] = useState(0)
  var [questionNumber, setQuestionNumber] = useState(totalNumberOfQuestions - 1)
  var [questionToDisplay, setQuestionToDisplay] = useState('')
  var [playerNameToDisplay, setPlayerNameToDisplay] = useState('')

  useEffect(() => {
    props.players.forEach((player) => {
      getQuestions(
        `${props.gameSettings[1].modality}Table`,
        player.gender,
        totalNumberOfQuestions
      ).then((data) => {
        var questionsToAdd = []

        data.forEach((element) => {
          questionsToAdd.push(Object.values(element)[0])
        })

        setQuestions([
          ...questions,
          { playerName: player.playerName, questions: questionsToAdd },
        ])
      })
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

  return (
    <View style={{ flex: 1 }}>
      <ScrollView mt={200}>
        <Center>{playerNameToDisplay}</Center>
        <Center>{questionToDisplay}</Center>
      </ScrollView>

      <View mb={20}>
        <Center>
          <Button
            onPress={() => {
              // console.log('PLAYER PLAYING', playerPlaying)
              // console.log('QUESTION NUMBER', questionNumber)
              // console.log('Questions', questions[playerPlaying])
              console.log(playerPlaying)

              // increase playerPlaying
              if (playerPlaying + 1 < questions.length) {
                setPlayerPlaying(playerPlaying + 1)
              } else {
                setPlayerPlaying(0)
              }

              setPlayerNameToDisplay(questions[playerPlaying].playerName)

              if (questionNumber - 1 >= 0) {
                setQuestionNumber(questionNumber - 1)
                setQuestionToDisplay(
                  questions[playerPlaying].questions[questionNumber - 1]
                )
              } else {
                console.log('DONE')
              }
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
