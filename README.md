# chatbot
🏀 Basketball RAG Chatbot - Pinecone + OpenAI + Next.js + Flask + Langchain 

An end-to-end AI chatbot that uses RAG to answer basketball-related questions with contextually accurate responses. Built using Pinecone, OpenAI's GPT-4, Flask, and Next.js frontend

How it works: 
1. User inputs a basketball-related question via the Next.js frontend
2. Flask API recieves the question and generates an embedding using OpenAI's embedding model
3. Flask queries Pinecone for semantically similar chunks of pre-embedded basketball content
4. The retrieved content is injected into a prompt and sent to OpenAI GPT-4
5. GPT responds with a context-aware answer, which is displayed back to the frontend React UI

Example Prompts: 
"How do you play as a point guard?" 
"Where are some of the best spots that one should position themselves if they were a power forward?" 

Inspiration: 
The inspiration came from a friend named Alex, who separately worked on this concept and introduced me to the idea of what a RAG based chatbot is. While, he is still advancing to turn this concept into a product of his own, I simply just wanted to understand the basic conceptual process so that I could help him in his journey. 

Thought Process: 


 Click on the link to view the basketball - chatbot
 
 https://youtube.com/shorts/ZRn_r5SnRzg
