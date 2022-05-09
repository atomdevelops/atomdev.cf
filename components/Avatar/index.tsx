import {
  Box,
  Image as ChkImage,
  Text,
  Link,
  SkeletonCircle,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { avatarAnimation } from 'config/animations'

const AvatarImages = {
  DarkMode: './atom.png',
  LightMode: './atom.png',
}

declare global {
  interface Window {
    preloadedPictures?: HTMLImageElement[]
  }
}

const Avatar = () => {
  const MotionBox = motion(Box)
  const imgAvatar = useColorModeValue(
    AvatarImages.LightMode,
    AvatarImages.DarkMode
  )
  useEffect(() => {
    // Some nice preloading and caching
    const images = [AvatarImages.DarkMode, AvatarImages.LightMode]
    const preloadedImages = images.map((imageSrc) => {
      const img = new Image()
      img.src = imageSrc
      return img
    })
    window.preloadedPictures = preloadedImages
  }, [])
  return (
    <AnimatePresence>
      <MotionBox
        id="klAvatar"
        boxSize={{ base: 64, lg: 'sm' }}
        padding={{ base: 8 }}
        marginBottom={{ base: 10, md: 0, lg: 0 }}
        initial="initial"
        animate={'animate'}
        variants={avatarAnimation}
        exit={{ opacity: 0 }}
      >
        <ChkImage
          src={imgAvatar}
          alt="Atom Avatar"
          htmlWidth="250"
          htmlHeight="250"
          margin="auto"
          borderRadius="full"
          border="2px"
          borderColor="blue.200"
          fallback={<SkeletonCircle height="100%" width="100%" />}
        />
        <Text
          mt={3}
          textAlign="center"
          fontSize="smaller"
          variant="description"
        >
          Art by{' '}
          <Link
            href="https://github.com/atomdevelops"
            target="_blank"
            aria-label="Atom"
            rel="noreferrer"
          >
            myself
          </Link>
        </Text>
      </MotionBox>
    </AnimatePresence>
  )
}

export default Avatar
