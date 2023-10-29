import AuthButton from '@/components/AuthButton'
import { PersonAdd } from '@/components/PersonAdd'
import { PersonsList } from '@/components/PersonsList'
import { createClient } from '@/utils/supabase/server'
import { Box } from '@chakra-ui/react'
import { cookies } from 'next/headers'

export default async function Index() {
  const cookieStore = cookies()

  const canInitSupabaseClient = () => {
    try {
      createClient(cookieStore)
      return true
    } catch (e) {
      return false
    }
  }

  const isSupabaseConnected = canInitSupabaseClient()

  return (
    <Box>
      <Box as="nav">
        <Box>{isSupabaseConnected && <AuthButton />}</Box>
      </Box>
      <Box>
        <PersonAdd />
        <PersonsList />
      </Box>
    </Box>
  )
}
