export interface Item {
  title: string
  company?: string
  period?: string
  description: string
  details: string[]
}

export type ItemType = 'experience' | 'project'