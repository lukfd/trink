var express = require('express')
var router = express.Router()
var ourConvertUtility = require('../utility/convertUtility')

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('../database/database.db')

function queryDatabase(tableName, player, maximumNumberOfQuestionsPerPlayer) {
    return new Promise((resolve, reject) => {
        var playerName = player.split(':')[0]
        var playerGender = ourConvertUtility.convertGender(player.split(':')[1])
        // SELECT * FROM easyTable WHERE MASCHIO is not '' or UNISEX is not '' ORDER BY RANDOM() LIMIT 20;
        var genderSelection = "UNISEX is not ''"

        if (playerGender === "MASCHIO") {
            genderSelection += " OR MASCHIO is not ''"
        } else if (playerGender === "FEMMINA") {
            genderSelection += " OR FEMMINA is not ''"
        }

        const query = `SELECT * FROM ${tableName} WHERE ${genderSelection} ORDER BY RANDOM() LIMIT ${maximumNumberOfQuestionsPerPlayer};`
        db.all(query, (err, rows) => {
            if (err) { reject(err) }
            var toReturn = { playerName: playerName, playerGender: playerGender }
            toReturn.questions = rows
            resolve(toReturn)
        })
    })
}

/* GET a new set of questions. 
    Parameters:
    typeOfGame = 'classic' or 'truthOrDare'
    modality = 'easy', 'flirt', 'hot'
    players = 'player1:male', 'player2:female' ...


    Response:
    [
        {
            playerName: 'player1',
            playerGender: 'MASCHIO',
            questions: [ {}, ... ]
        }
    ]
*/
router.get('/', function(req, res, next) {
    const typeOfGame = req.query?.typeOfGame
    const modality = req.query?.modality
    const players = req.query?.players
    const numberOfPlayers = req.query.players?.length
    const maximumNumberOfQuestionsPerPlayer = 30 / numberOfPlayers
    var tableName

    // Check for typeOfGame
    if (! typeOfGame) {
        res.status(500).send({ error: 'No type of game selected. Possible type of games are classic or truthOrDare' })
    }

    // Set table name
    switch(modality) {
        case 'easy':
            tableName = 'easyTable'
            break
        case 'flirt':
            tableName = 'flirtTable'
            break
        case 'hot':
            tableName = 'hotTable'
            break
        default:
            res.status(500).send({ error: 'Improper modality of game. Accepted only easy, flirt or hot.' })
    }

    // Generate the list of questions
    var response = []
    var promises = []
    for (let i = 0; i < numberOfPlayers; i++) {
        promises.push( queryDatabase(tableName, players[i], maximumNumberOfQuestionsPerPlayer).then((result)=> {
                response.push(result)
            }).catch((err)=> {
                res.status(500).send({ error: err })
            })
        )
    }

    Promise.allSettled(promises).then(() => {
        res.send(response)
    })
})

module.exports = router;
