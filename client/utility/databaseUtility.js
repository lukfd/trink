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

export const getQuestions = async (
  tableName,
  playerGender,
  maximumNumberOfQuestionsPerPlayer
) => {
  const db = await openDatabase()
  playerGender = await converter.convertGender(playerGender)

  await db.exec(
    [
      {
        sql: 'SELECT * FROM easyTable;',
        args: [tableName],
      },
    ],
    true,
    (data, err) => {
      if (err) {
        throw err
      } else {
        return data
      }
    }
  )
}
