// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '@/prisma/db'
import type { NextApiRequest, NextApiResponse } from 'next'
import z from 'zod'

const PersonSchema = z
  .object({
    name: z.string(),
    id: z.string(),
    upvotes: z.number(),
    createdAt: z.date(),
  })
  .partial()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).end()
  }
  const body = PersonSchema.parse(JSON.parse(req.body))
  const person = await prisma.persons.create({
    data: {
      name: body.name,
    },
  })

  res.status(201).json({ person })
}
