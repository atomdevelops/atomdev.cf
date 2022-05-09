import { memo } from 'react'
import { Heading, Text, Stack, Link } from '@chakra-ui/react'
import ExperienceTab from './ExperienceTab'
const DetailSection = () => (
  <Stack
    width={{ base: '99%', lg: '60%', xl: '75%' }}
    height="100%"
    spacing={{ base: 6, xl: 8 }}
  >
    <Heading
      size="2xl"
      style={{
        fontVariantCaps: 'small-caps',
      }}
    >
      Places where I&apos;ve contributed.
    </Heading>
    <Text variant="description">
      During the past year, I was able to contribute to different places. Such
      as, Wyvern, PebbleHost, HyeHosting, SuppoHost, etc.
    </Text>
  </Stack>
)

export default memo(DetailSection)
