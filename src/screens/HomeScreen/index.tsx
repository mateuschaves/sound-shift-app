import React from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { Container, Content, StreamingItem, StreamingList, StreamingTitle, Title } from './styles'

interface Streaming {
  id: string
  title: string
  icon: string
  color: string
}

const streamings: Streaming[] = [
  {
    id: '1',
    icon: 'spotify',
    title: 'Spotify',
    color: '#1DB954',
  },
  {
    id: '2',
    icon: 'applemusic',
    title: 'Apple Music',
    color: 'red',
  },
]

export default function HomeScreen() {
  return (
    <Container>
      <Content>
        <Title>Qual a origem da sua playlist?</Title>
        <StreamingList
          numColumns={2}
          data={streamings}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <StreamingItem>
              <Fontisto name={item.icon} size={42} color={item.color} />
              <StreamingTitle>{item.title}</StreamingTitle>
            </StreamingItem>
          )}
        />
      </Content>
    </Container>
  )
}