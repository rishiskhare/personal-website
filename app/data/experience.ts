import { ExperienceItem } from '../types'

export const experienceData: ExperienceItem[] = [
  {
    company: "Berkeley AI Research (BAIR) Lab - Wagner Group",
    title: "Machine Learning Undergraduate Researcher",
    period: "September 2023–Present",
    details: [
      "(1) Implemented adaptive adversarial example attacks using PyTorch and evaluated them on CIFAR-10 and ImageNet, Developed counter-reaction stateful defenses inspired by honeypot defenses in networking",
      "(2) Developing on LLM automated parsing for large-scale modern system logs for anomoly detection and threat-hunting"
    ]
  },
  {
    company: "T-Mobile",
    title: "Generative AI Intern",
    period: "May 2024–Present",
    details: [
      "Developed and implemented computer vision object detection and proximity measurement methods using Intel Realsense depth cameras and OpenCV for RFID tag location detection",
      "Presented results to the VP and submitted two utility patents for RFID tag location detection systems using computer vision and audio machine learning",
      "Implemented RAFT synthetic dataset generation for RAG finetuning and deployed on internal company documents",
      "Evaluated question-answer pairs for an internal RAG system (LLM-as-a-judge approach) and improved safety guardrails",
      "Locally fine-tuned LLM models (Llama-3) for document retrieval and chat completion using NVIDIA A100 and H100 GPUs",
      "Worked for the Advanced Emerging Technology (Applied Research) Team in summer 2024 (full-time), continuing in fall 2024 (part-time)"
    ]
  },
  {
    company: "UC Berkeley Department of Electrical Engineering and Computer Science",
    title: "Undergraduate Course Staff",
    period: "June 2022–Present",
    details: [
      "UCS1 for DS 100: Principles and Techniques of Data Science (spring '24, fall '24)",
      "Served as TA for AI Alignment DeCal course for Berkeley's AI Safety group and facilitated course research reading group (fall '23)",
      "Academic Intern for CS 61C: Great Ideas in Computer Architecture (fall '22, spring '23)",
      "Academic Intern for CS 70: Discrete Mathematics and Probability Theory (summer '22)"
    ]
  }
]
