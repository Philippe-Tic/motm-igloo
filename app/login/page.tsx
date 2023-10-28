import Link from 'next/link'
import Messages from './messages'

export default function Login() {
  return (
    <div>
      <Link href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{' '}
        Back
      </Link>

      <form action="/auth/sign-in" method="post">
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input name="email" placeholder="you@example.com" required />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <button>Sign In</button>
        <button formAction="/auth/sign-up">Sign Up</button>
        <Messages />
      </form>
    </div>
  )
}
