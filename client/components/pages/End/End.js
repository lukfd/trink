import { Center, View, ScrollView, Button } from 'native-base'
import { useState } from 'react'
import GameSettings from '../GameSettings/GameSettings'

const End = () => {
  var [showEndPage, setShowEndPage] = useState(true)

  function EndPage() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView mt={200}>
          <Center>Chi ha vinto?</Center>
        </ScrollView>

        <View mb={20}>
          <Center>
            <Button
              onPress={() => {
                setShowEndPage(false)
              }}
            >
              Gioca di nuovo
            </Button>
          </Center>
        </View>
      </View>
    )
  }

  if (showEndPage) {
    return EndPage()
  } else {
    return <GameSettings />
  }
}

export default End
