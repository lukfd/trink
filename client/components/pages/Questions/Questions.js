import React from 'react'
import { Center, View, ScrollView, Button } from 'native-base'

const Questions = (props) => {
  console.log(props)
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
