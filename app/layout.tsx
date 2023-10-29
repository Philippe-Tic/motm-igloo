import { Document } from '@/app/Document'
import { PropsWithChildren } from 'react'

export const metadata = {
  title: 'Next.js and Supabase Starter Kit',
  description: 'The fastest way to build apps with Next.js and Supabase',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return <Document>{children}</Document>
}
