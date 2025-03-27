# 🏀 Basketball RAG Chatbot - Pinecone + OpenAI + Next.js + Flask + Langchain 
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
1. Knowledge Base: A collection of PDFs or text documents 
containing the information your chatbot will access
2. Index/ Vector Database: A database to store embeddings of your 
knowledge base for efficient retrieval 
3. Retrieval: A method to find relevant information from the index based on a 
user query. 
4. Augmentation: Enhancing the retrieved information to make it more suitable for the LLM 
5. LLM(GPT-3.5 Turbo): A language model to generate human-like text based on the provided 
information. -> I do not think that I have to use this language model 
6. React Frontend: A user interface for interacting with the chatbot -> 
Have to figure out how to connect react with python



 Click on the link to view the basketball - chatbot
 
 https://youtube.com/shorts/ZRn_r5SnRzg
