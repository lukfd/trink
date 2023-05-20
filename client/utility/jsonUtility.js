import * as converter from './convertUtility'
import * as questionsJsonFormat from '../json/questions'

export const getQuestions = (
  tableName,
  playerGender,
  maximumNumberOfQuestionsPerPlayer
) => {
  return new Promise((resolve, reject) => {
    const convertedPlayerGender = converter
      .convertGender(playerGender)
      .toLowerCase()
    const questionArray =
      questionsJsonFormat.default[tableName].default[convertedPlayerGender]

    // Shuffle array
    const shuffled = questionArray.sort(() => 0.5 - Math.random())

    // Get sub-array of first n elements after shuffled
    let selected = shuffled.slice(0, maximumNumberOfQuestionsPerPlayer)

    resolve(selected)
  })
}
