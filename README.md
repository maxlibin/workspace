# workspace
## AI Research Canvas 🌟

<img width="1772" alt="Screenshot 2025-02-13 at 3 10 19 PM" src="https://github.com/user-attachments/assets/fbe782e2-af62-4dfc-8b78-9dc2357018b2" />


AI-Powered Visual Research and Collaboration Tool

AI Research Canvas is an open-source project that redefines the way we research, organize, and synthesize information. Combining a dynamic visual canvas for data organization with an AI-powered editor, this tool makes knowledge work smarter, more intuitive, and highly collaborative.

## 🚀 Vision

Modern researchers, writers, and knowledge workers deal with an overwhelming amount of information from diverse sources. Traditional tools often fail to offer seamless organization or insights, requiring users to spend hours synthesizing their findings.

Our mission is to build a free and open platform where users can:

- Organize their thoughts visually.
- Use AI to generate meaningful insights in real-time.
- Collaborate effortlessly with teams.

By making this tool open source, we aim to empower the community to shape it into the ultimate research assistant.

## 🛠️ Installation

1. Clone the repository:

`git clone git@github.com:maxlibin/workspace.git`
`cd workspace`


2. Install dependencies:

`npm install`


3. Set up environment variables:
/Create a `.env` file in the root directories with the following:

`OPENAI_API_KEY=Your openAi Api key`

4. Start the development servers:

`cd frontend && npm run dev`


Open your browser and navigate to http://localhost:3000.


## ✨ Features

#### Dynamic Visual Canvas

- Organize data using nodes for:
- Text: Notes and ideas.
- URLs: Fetch page summaries and metadata automatically.
- Documents: Import PDFs or Word files and extract key points.
- Images: Annotate and connect visual resources.
- Connect nodes visually to map relationships and ideas.
- Real-time collaboration, allowing multiple users to brainstorm together.

#### AI-Assisted Editor

- Summarize selected nodes or entire clusters on the canvas.
- Generate insights, draft articles, or answer research-related questions.
- Synchronize seamlessly with the canvas for dynamic workflows.

#### Rich Media Support

- Embed videos, presentations, and more.
- Extract key information from media using AI tools.

#### Open Source Extensibility

- Fully open to customization and extension.
- Build plugins or integrate your favorite APIs for added functionality.

## 💡 Use Cases

- Research: Organize papers, articles, and findings visually while summarizing content with AI.
- Content Creation: Gather references and let the AI assist with writing drafts.
- Business Analysis: Map market data, reports, and insights for strategic planning.
- Education: Facilitate collaborative projects or personal knowledge management.

## 🏗️ Architecture

### Frontend

- Next.js: Handles the UI, server-side rendering, and some API routes.
- ShadCN: For accessible, modern component design.
- Tailwind CSS: For customizable, responsive styling.
- React Flow: For the dynamic canvas to visualize and link data.
- Tiptap: A rich-text editor to build the AI-assisted editor.

### API

- Hono.js: Lightweight and blazing-fast framework for API routes, providing a separate layer for handling AI requests and database queries.

### Database

- MongoDB/PostgreSQL: Stores user data, relationships, and settings.

### AI Integration

- OpenAI GPT: For summarization, insight generation, and language understanding.
- Google Vertex AI (Optional): For clustering and advanced analysis.

### Hosting

- Frontend and API Routes: Deployed with Vercel for fast, scalable hosting.
- Hono.js APIs: Deployed on Cloudflare Workers or similar edge services for low-latency API responses.

## 🎯 Why Open Source?

By open-sourcing AI Research Canvas, we aim to:

Democratize access to powerful research tools.
Leverage the creativity and innovation of the developer community.
Encourage transparency and community-driven improvement.

## 🤝 Contributing

We welcome contributions from developers, designers, and researchers! Here’s how you can help:

1. Fork the repo and create your branch:

`git checkout -b feature/YourFeatureName`


2. Make changes and test thoroughly.
3. Submit a pull request with a clear description of your changes.

Check out our CONTRIBUTING.md for detailed guidelines.

## 📚 Documentation

•	Getting Started
•	API Reference
•	Developer Guide

## 💬 Community

Join our community channels:

- Slack
- Discord
- Discussions

## 📜 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 🌟 Support the Project

If you find this project valuable, please consider:

- Giving us a ⭐ on GitHub!
- Sharing it with your network.
- Contributing code, feedback, or ideas.
