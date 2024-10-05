import { Item } from '../types/types'

export const experiences: Item[] = [
  {
    title: 'Machine Learning Undergraduate Researcher',
    company: 'Berkeley AI Research (BAIR) Lab',
    period: 'September 2023–Present',
    description: 'Developing security and robustness for deep computer vision neural network architectures.',
    details: [
      '(1) Implemented adaptive adversarial example attacks using PyTorch and evaluated them on CIFAR-10 and ImageNet, Developed counter-reaction stateful defenses inspired by honeypot defenses in networking',
      '(2) Developing on LLM automated parsing for large-scale modern system logs for anomoly detection and threat-hunting'
    ]
  },
  {
    title: 'Generative AI Intern',
    company: 'T-Mobile',
    period: 'May 2024–Present',
    description: 'Fine-tuned internal LLM tooling and implemented RAFT synthetic dataset generation and automated LLM output evaluation',
    details: [
      'Developed and implemented computer vision object detection and proximity measurement methods using Intel Realsense depth cameras and OpenCV for RFID tag location detection',
      'Presented results to the VP and submitted two utility patents for RFID tag location detection systems using computer vision and audio machine learning',
      'Implemented a RAG framework (with online evaluations) using LangGraph and created a vector database on ChromaDB for document retrieval and chat completion on network engineering and telecom standards documents (3GPP)',
      'Implemented RAFT synthetic dataset generation for RAG finetuning and deployed on internal company documents',
      'Evaluated question-answer pairs for an internal RAG system (LLM-as-a-judge approach) and improved safety guardrails',
      'Locally fine-tuned LLM models (Llama-3) for document retrieval and chat completion using NVIDIA A100 and H100 GPUs',
      'Worked for the Advanced Emerging Technology (Applied Research) Team in summer 2024 (full-time), continuing in fall 2024 (part-time)'
    ]
  },
  {
    title: 'Undergraduate Course Staff',
    company: 'UC Berkeley Department of Electrical Engineering and Computer Sciences',
    period: 'June 2022–Present',
    description: 'Served as a teaching assistant for various computer science courses',
    details: [
      'Spring 2024, Fall 2024: Tutor for DS 100: Principles and Techniques of Data Science',
      'Fall 2023: DeCal TA for AI Alignment course and facilitated research reading group',
      'Fall 2022, Spring 2023: Academic intern for CS 61C: Great Ideas in Computer Architecture',
      'Summer 2022: Academic intern for CS 70: Discrete Mathematics and Probability Theory'
    ]
  },
]