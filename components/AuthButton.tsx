import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import Link from 'next/link'

export default async function AuthButton() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return user ? (
    <div>
      Hey, {user.email}!
      <form action="/auth/sign-out" method="post">
        <button>Logout</button>
      </form>
    </div>
  ) : (
    <Link href="/login">Login</Link>
  )
}
