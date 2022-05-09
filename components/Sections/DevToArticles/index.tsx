import { memo } from 'react'
import {
  Heading,
  Text,
  Link,
  Stack,
  SimpleGrid,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react'
import { Article } from 'types/article'

// export interface Article {
//   id: string
//   type_of: string
//   title: string
//   description: string
//   readable_publish_date: string
//   slug: string
//   url: string
//   tag_list: string[]
//   social_image: string
// }

const articles = [
  {
    id: 'Python 101',
    type_of: 'h',
    title: 'Python 101: Getting Started With Python',
    description: 'Get started with Python',
    readable_publish_date: 'May 7, 2022',
    slug: 'getting-started-with-python',
    url: 'https://atomdevelops.hashnode.dev/python-101-getting-started-with-python',
    tag_list: ['algorithms', 'learn-coding', 'python', 'python-beginner'],
    social_image: 'none',
  },
  {
    id: 'Python 101',
    type_of: 'h',
    tag_list: ['algorithms', 'learn-coding', 'python', 'python-beginner'],
    title:
      'Python 101: Syntax, Comments, Variables, Data Types, Numbers, and Type Casting',
    description:
      'Learn about Python syntax, comments, variabes, types, numbers, and casting in one tutorial!',
    readable_publish_date: 'May 8, 2022',
    slug: 'basic-beginner-topics',
    url: 'https://atomdevelops.hashnode.dev/python-101-syntax-comments-variables-data-types-numbers-and-type-casting',
    social_image: 'None',
  },
]

const DevToArticles = () => {
  const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.100')
  const borderColor = useColorModeValue('blackAlpha.300', 'whiteAlpha.100')
  const alphaHover = useColorModeValue(
    'rgba(49, 151, 149, 0.06)',
    'rgba(157, 236, 249, 0.06)'
  )
  return (
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
        Blog
      </Heading>
      <Text variant="description">
        I recently have started blogging and have a Python beginner series and
        am starting a JavaScript one.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, md: 10 }}>
        {articles.map((item) => (
          <Link
            aria-label={item.title}
            target="_blank"
            rel="noreferrer"
            key={item.id}
            href={item.url}
            color="currentcolor"
            _hover={{ textDecoration: 'none' }}
            transition="all 0.5s ease"
            role="group"
          >
            <Stack
              spacing={3}
              borderWidth="1px"
              borderColor={borderColor}
              borderRadius="1em"
              padding={{ base: '1em', '2xl': '1.5em' }}
              height="100%"
              transition="all 0.2s ease-in-out"
              backgroundColor={bg}
              _hover={{
                background: alphaHover,
              }}
              as="article"
            >
              <Heading fontSize="larger" paddingX={2}>
                {item.title}
              </Heading>
              <Divider borderColor="#A6A6A6" width="95%" />
              <Stack spacing={1}>
                <Heading
                  fontSize="small"
                  paddingX={2}
                  variant="accentAlternative"
                >
                  {item.tag_list.join(', ')}
                </Heading>
                <Heading fontSize="smaller" variant="description" paddingX={2}>
                  {item.readable_publish_date}
                </Heading>
              </Stack>
              <Text fontSize="smaller" variant="description" paddingX={2}>
                {item.description}
              </Text>
            </Stack>
          </Link>
        ))}
      </SimpleGrid>
    </Stack>
  )
}

export default memo(DevToArticles)
