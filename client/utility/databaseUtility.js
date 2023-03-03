import * as SQLite from 'expo-sqlite'
import * as FileSystem from 'expo-file-system'
import { Asset } from 'expo-asset'
import * as converter from './convertUtility'

async function openDatabase() {
  if (
    !(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite'))
      .exists
  ) {
    await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite')
  }
  await FileSystem.downloadAsync(
    Asset.fromModule(require('../assets/database.db')).uri,
    FileSystem.documentDirectory + 'SQLite/database.db'
  )
  return SQLite.openDatabase('database.db')
}

export const getQuestions = (
  tableName,
  playerGender,
  maximumNumberOfQuestionsPerPlayer
) => {
  return new Promise((resolve, reject) => {
    openDatabase().then((db) => {
      playerGender = converter.convertGender(playerGender)

      db.transaction((transaction) => {
        transaction.executeSql(
          `SELECT ${playerGender} FROM ${tableName} WHERE ? IS NOT NULL AND ${playerGender} != "" ORDER BY RANDOM() LIMIT ?;`,
          [playerGender, maximumNumberOfQuestionsPerPlayer],
          (transaction, result) => {
            resolve(result.rows['_array'])
          },
          (transaction, err) => {
            reject(err)
          }
        )
      })
    })
  })
}
