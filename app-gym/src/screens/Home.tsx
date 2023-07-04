import { Group } from '@components/Group'
import { HomeHeader } from '@components/HomeHeader'
import { Center, HStack, Text, VStack } from 'native-base'


export function Home() {
  return (
    <VStack flex={1}>
      <HomeHeader />

      <HStack>
        <Group name="costa" />
        <Group name="ombro" />
      </HStack>

    </VStack>
  )
}