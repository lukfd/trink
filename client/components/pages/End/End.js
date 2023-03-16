import { Center, View, ScrollView, Button, Text } from 'native-base'

const Questions = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView mt={200}>
        <Center>Done</Center>
      </ScrollView>

      <View mb={20}>
        <Center>
          <Button
            onPress={() => {
              console.log('PRESSED')
            }}
          >
            Gioca di nuovo
          </Button>
        </Center>
      </View>
    </View>
  )
}

export default Questions
