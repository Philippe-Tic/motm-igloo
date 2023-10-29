import prisma from '@/prisma/db'
import { Box } from '@chakra-ui/react'

export const PersonsList = async () => {
  const persons = await prisma.persons.findMany({
    select: { id: true, name: true },
  })

  return (
    <Box>
      {persons.map((person) => (
        <Box key={person.id}>{person.name}</Box>
      ))}
    </Box>
  )
}
