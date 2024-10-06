import { Item } from '../types/types'

export const projects: Item[] = [
  {
    title: 'Gitlet Version Control System',
    description: 'Designed and implemented a Git version-control system in Java.',
    details: [
      'Implemented core Git functionalities: add, commit, branch, checkout, and merge',
      'Developed efficient data structures for storing and managing file versions',
      'Implemented serialization for persistent storage of repository data',
      'Created a command-line interface for interacting with the version control system'
    ]
  },
  {
    title: 'CoursePath',
    description: 'Built and hosted course selection planning website for my high school district (FUHSD)',
    details: [
      'Developed a full-stack web application using Node.js and MySQL',
      'Implemented user authentication and personalized course recommendations',
      'Created an intuitive interface for students to plan their academic path',
      'Integrated with the school district\'s curriculum database for up-to-date course information',
      'Pitched and marketed the product to families of the school district, my school\'s principal, and guidance counselors'
    ]
  },
]