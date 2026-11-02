// ============ EDIT YOUR DETAILS HERE ============
// Phone is NOT stored as plain text. It is base64-encoded and only decoded when
// the visitor clicks the "Call me" button. To change it, run in a browser console:
//   btoa("+91XXXXXXXXXX")   and paste the result below.
export const PHONE_B64 = "KzkxNzMzODA2NzgyOA==";

export const profile = {
  name: "Abhishek Kattimani",
  firstName: "Abhishek",
  role: "AI/ML Engineer",
  tagline:
    "Electronics & Communication graduate building production-minded AI: computer vision, deep learning, GenAI/RAG and LLM agents.",
  email: "Abhishek.kattimani2244@gmail.com",
  github: "https://github.com/Abhishek-sorts",
  linkedin: "https://www.linkedin.com/in/abhishek-kattimani",
  linkedinPosts: "https://www.linkedin.com/in/abhishek-kattimani/recent-activity/all/",
  location: "Vijayapura, Karnataka, India - 586101",
  photo: "/profile.png",
  resume: "/Abhishek_Kattimani_Resume.pdf",
  status: "Available for Full-Time & Internship Roles",
  // Contact form: paste a Formspree endpoint (https://formspree.io/f/xxxx) to receive
  // messages directly. Empty = falls back to opening the visitor's mail app.
  formEndpoint: "",
};

export const stats = [
  { label: "B.E. CGPA", value: "7.46" },
  { label: "Projects", value: "10" },
  { label: "Certifications", value: "9" },
  { label: "Internships", value: "3" },
];

export const pillars = [
  { title: "Computer Vision Builder", text: "YOLO, CNN and segmentation pipelines taken from dataset to deployed Flask apps." },
  { title: "GenAI & Agents", text: "RAG assistants with LangChain + FAISS and tool-using research agents." },
  { title: "Healthcare-minded AI", text: "ECG, chest X-ray and physiological-signal models aimed at clinical decision support." },
];

// Skills organized with vertical list items
export const skillGroups = [
  {
    title: "Programming & Databases",
    subtitle: "Core development & querying",
    icon: "Code2",
    bars: [
      { name: "Python (Pandas, NumPy, Scikit-Learn)", level: 88 },
      { name: "SQL (Queries, Joins, Aggregations)", level: 75 },
      { name: "C++ (Algorithms & Optimization)", level: 65 },
      { name: "C (Systems & Embedded)", level: 62 },
    ],
  },
  {
    title: "Machine Learning & AI",
    subtitle: "Algorithms & deep learning",
    icon: "Brain",
    items: [
      { name: "Supervised Learning", icon: "TrendingUp" },
      { name: "Unsupervised Learning", icon: "Network" },
      { name: "Neural Networks & Deep Learning", icon: "Cpu" },
      { name: "Convolutional Neural Nets (CNNs)", icon: "Layers" },
      { name: "LLMs & Prompt Engineering", icon: "Sparkles" },
      { name: "Retrieval-Augmented Generation (RAG)", icon: "Bot" },
      { name: "Model Tuning & Evaluation", icon: "CheckCircle2" },
      { name: "LangChain & Agentic Workflows", icon: "Workflow" },
    ],
  },
  {
    title: "Computer Vision & Edge",
    subtitle: "Real-time detection & segmentation",
    icon: "ScanEye",
    items: [
      { name: "OpenCV & Image Processing", icon: "Scan" },
      { name: "YOLOv8 & YOLOv26 Object Detection", icon: "Target" },
      { name: "Instance & Semantic Segmentation", icon: "Layers" },
      { name: "Edge AI & TFLite on Android", icon: "Smartphone" },
      { name: "Transfer Learning (MobileNetV2)", icon: "Cpu" },
      { name: "Roboflow 3.0 Annotation Pipelines", icon: "Boxes" },
    ],
  },
  {
    title: "Libraries & Ecosystem",
    subtitle: "Scientific computing & ML frameworks",
    icon: "Boxes",
    items: [
      { name: "Scikit-Learn", icon: "Binary" },
      { name: "TensorFlow & Keras", icon: "Cpu" },
      { name: "PyTorch", icon: "Flame" },
      { name: "Pandas & NumPy", icon: "FileSpreadsheet" },
      { name: "Matplotlib & Seaborn", icon: "BarChart3" },
      { name: "Hugging Face & FAISS", icon: "Sparkles" },
    ],
  },
  {
    title: "Tools & Deployment",
    subtitle: "Version control, APIs & platforms",
    icon: "Wrench",
    items: [
      { name: "Git & GitHub", icon: "GitBranch" },
      { name: "Flask & FastAPI", icon: "Server" },
      { name: "Streamlit", icon: "Layout" },
      { name: "n8n Automation", icon: "Workflow" },
      { name: "Docker & Containerization", icon: "Box" },
      { name: "VS Code & Google Colab", icon: "Terminal" },
    ],
  },
];

const GH = "https://github.com/Abhishek-sorts";

export const projects = [
  {
    tag: "Generative AI",
    title: "RAG-Based Knowledge Assistant",
    description: "Document Q&A assistant that answers questions grounded in custom PDFs.",
    bullets: [
      "LangChain + FAISS vector search over uploaded PDFs for accurate, source-grounded answers",
      "Hugging Face embeddings and LLM pipeline with retrieval evaluation",
    ],
    stack: ["Python", "LangChain", "FAISS", "Hugging Face", "RAG"],
    github: "https://github.com/Abhishek-sorts/rag-knowledge-assistant",
    linkedin: "https://lnkd.in/p/g4fKJFn7",
  },
  {
    tag: "LLM Pipeline",
    title: "LLM Contract Analysis (CUAD)",
    description: "LLM document-processing pipeline that extracts clauses and generates summaries from legal contracts.",
    bullets: [
      "Built on a 50-contract subset of the CUAD dataset",
      "Structured clause extraction plus contract-level summaries",
    ],
    stack: ["Python", "LLMs", "CUAD", "Prompt Engineering"],
    github: GH + "/LLM-Contract-Analysis",
    linkedin: "https://lnkd.in/p/gngJCZm3",
  },
  {
    tag: "GenAI · Evaluation",
    title: "AI Response Quality Gate",
    description: "Proof-of-concept gate that validates AI-generated answers against their source content.",
    bullets: [
      "Checks grounding, completeness and contradiction/hallucination, with retry, fallback and repair",
      "FastAPI-style execution APIs and a React debugger UI; Gemini primary, Groq fallback",
    ],
    stack: ["Gemini", "Groq", "React", "Python", "LLM Evals"],
    github: GH + "/ai-response-quality-gate",
    linkedin: profile.linkedinPosts,
  },
  {
    tag: "LLM Agents",
    title: "Autonomous Research Agent",
    description: "Agent that turns a topic into a structured report using live web data.",
    bullets: [
      "LangChain ReAct agent with Tavily search to gather and synthesise live sources",
      "n8n workflow integration for email-triggered, scheduled report generation",
    ],
    stack: ["LangChain", "ReAct", "Tavily", "n8n", "Python"],
    github: "https://github.com/Abhishek-sorts/Autonomous-Reasearch-agent",
    linkedin: profile.linkedinPosts,
  },
  {
    tag: "Healthcare AI · Computer Vision",
    title: "Tuberculosis Detection from Chest X-rays",
    description: "Instance-segmentation system that highlights infected lung regions.",
    bullets: [
      "Roboflow 3.0 instance segmentation trained on 2,700 chest X-ray images",
      "Outputs affected-area percentage to make TB screening faster and more interpretable",
      "Served as a Flask web app",
    ],
    stack: ["Roboflow 3.0", "Segmentation", "Flask", "Python"],
    github: "https://github.com/Abhishek-sorts/Tuberculosis-Detection-System",
    linkedin: profile.linkedinPosts,
  },
  {
    tag: "Deep Learning · Edge CV",
    title: "AI Insert Classification System",
    description: "Classifies metal-cutting inserts as Usable, Reusable or Scrap to cut tool waste.",
    bullets: [
      "MobileNetV2 transfer learning (ImageNet) with data augmentation for a small image set",
      "88.5 - 92% F1-score across the three classes on the held-out test split",
      "Presented at Venture Vibe 2.0, KLE BVB Hubli (funding interest)",
    ],
    stack: ["MobileNetV2", "Transfer Learning", "TensorFlow", "OpenCV"],
    github: GH, // TODO
    linkedin: profile.linkedinPosts,
  },
  {
    tag: "Machine Learning · Signals",
    title: "Sleep Apnea Detection",
    description: "Classical ML benchmark for early sleep-apnea screening.",
    bullets: [
      "Random Forest reached 97.94% accuracy; compared with SVM, KNN and AdaBoost",
      "Feature extraction across multiple signal attributes, confusion-matrix based evaluation",
    ],
    stack: ["Scikit-learn", "Random Forest", "SVM", "Pandas"],
    github: "https://github.com/Abhishek-sorts/Machine-Learning-Approach-to-Detect-Sleep-Apnea",
    linkedin: "https://lnkd.in/p/gFggDi2v",
  },
  {
    tag: "Deep Learning · Signals",
    title: "Stress Detection & Mindfulness System",
    description: "Classifies stress (Low / Moderate / High) from HR, EEG Alpha/Beta and skin temperature.",
    bullets: [
      "Compared LSTM, CNN, Transformer and MLP; LSTM (128/64 units, dropout, batch-norm) chosen as best",
      "Flask web UI with real-time prediction, confidence score and mindfulness advice",
      "Trained on a 5,000-sample synthetic dataset",
    ],
    stack: ["LSTM", "TensorFlow", "Flask", "Scikit-learn"],
    github: "https://github.com/Abhishek-sorts/Deep-Learning-Approch-for-Stress-detection",
    linkedin: "https://lnkd.in/p/g4fKJFn7",
  },
  {
    tag: "Speech AI · Automation",
    title: "AI Voice Expense Tracker",
    description: "Hands-free Telegram bot that transcribes voice notes and logs structured expenses to Google Sheets in real time.",
    bullets: [
      "Local speech-to-text pipeline using Faster-Whisper to transcribe Telegram audio with near-zero latency",
      "Regex & NLP parsing extracts amount and description, auto-updating daily & monthly totals via Google Sheets API (gspread)",
    ],
    stack: ["Python", "Faster-Whisper", "Telegram Bot API", "Google Sheets API", "FFmpeg", "NLP"],
    github: "https://github.com/Abhishek-sorts/Expenses-Tracker.git",
    linkedin: "https://lnkd.in/gAFhmUHy",
  },
  {
    tag: "Agentic AI · Automation",
    title: "AI-Powered Email Automation",
    description: "Autonomous email agent built in n8n that reasons over natural language prompts to compose and send emails via Gmail.",
    bullets: [
      "n8n AI Agent workflow with tool calling to interpret chat instructions and generate contextual subject and body copy",
      "Integrated OpenAI Chat Model and Gmail service nodes for seamless, hands-off email dispatch without manual mapping",
    ],
    stack: ["n8n", "AI Agent", "OpenAI", "Tool Calling", "Gmail API", "Workflow Automation"],
    github: "",
    linkedin: profile.linkedinPosts,
  },
];

export const experience = [
  {
    role: "Machine Learning & Computer Vision Intern",
    company: "UILATECH LLP",
    type: "Internship",
    location: "Belagavi, Karnataka",
    period: "Jan 12, 2026 - Apr 30, 2026",
    points: [
      "Specialized in Machine Learning for Computer Vision on Edge Devices.",
      "Built a Smart Waste Detection system with YOLOv8 (~72 mAP) and deployed to Android smartphones via TensorFlow Lite (TFLite).",
      "Researched and implemented Mushroom Growth Monitoring and species classification pipelines with YOLO.",
      "Benchmarked and improved model quantization and latency for real-time edge deployment.",
    ],
    certificate: "",
  },
  {
    role: "GenAI & Data Analytics Intern",
    company: "Tata iQ · Forage",
    type: "Virtual Internship",
    location: "Remote / Virtual",
    period: "Jun 2026",
    points: [
      "Completed an AI-powered data analytics and strategic advisory simulation for the Financial Services team at Tata iQ.",
      "Conducted exploratory data analysis (EDA) leveraging GenAI tools to assess credit portfolio data quality, uncover risk indicators, and structure predictive features.",
      "Formulated and defended a predictive delinquency modeling framework, applying GenAI for structured model logic and evaluation criteria.",
      "Architected an end-to-end AI-driven collections strategy incorporating agentic AI automation, ethical AI guardrails, and regulatory compliance standards.",
    ],
    certificate: "/certs/tata-forage-genai.pdf",
    verificationCode: "TR7dyhTBYYhfDDACK",
  },
  {
    role: "Machine Learning Intern",
    company: "Future Interns",
    type: "Virtual Internship",
    location: "Remote / Virtual",
    period: "Dec 31, 2025 - Jan 31, 2026",
    points: [
      "Selected for the Machine Learning Fellowship Program (Ref: FIT/DEC25/ML4541) focused on production-ready ML engineering.",
      "Developed machine learning pipelines, structured data preprocessing workflows, and model evaluation benchmarks.",
      "Engineered predictive modeling solutions and algorithmic problem-solving workflows.",
    ],
    offerLetter: "/certs/future-interns-offer-letter.pdf",
  },
];

export const education = [
  {
    degree: "B.E. in Electronics and Communication",
    school: "KLE Technological University, Dr. M.S. Sheshgiri CET, Belagavi",
    score: "CGPA 7.46",
    period: "2022 - 2026",
    note: "Focus: AI/ML, deep learning, computer vision, signal processing",
  },
  {
    degree: "Diploma in Electronics and Communication",
    school: "Government Polytechnic, Vijayapura",
    score: "CGPA 6.4",
    period: "2021",
    note: "",
  },
];

export const certifications = [
  {
    name: "GenAI Powered Data Analytics (Job Simulation)",
    issuer: "Tata · Forage",
    date: "Jun 2026",
    id: "Code TR7dyhTBYYhfDDACK",
    file: "/certs/tata-forage-genai.pdf",
    link: "https://www.theforage.com/simulations/tata/data-analytics-genai",
  },
  {
    name: "Machine Learning & AI",
    issuer: "PrepInsta Technologies",
    date: "Jun 2026",
    id: "UID 6a390f6136c6f6e0332722e2",
    file: "/certs/prepinsta-ml-ai.pdf",
  },
  {
    name: "Python",
    issuer: "PrepInsta Technologies",
    date: "Jun 2026",
    id: "UID 6a390fb136c6f6e0332722f1",
    file: "/certs/prepinsta-python.pdf",
  },
  {
    name: "SQL (Basic)",
    issuer: "HackerRank",
    date: "Aug 2026",
    id: "ID 8AD41FC82A2C",
    file: "/certs/hackerrank-sql-basic.pdf",
  },
  {
    name: "Understand RAG vs AI Agents vs Agentic AI",
    issuer: "Scaler",
    date: "Jul 2026",
    id: "",
    link: "https://moonshot.scaler.com/s/sl/9i7pWY8GGj",
  },
  {
    name: "Fundamentals of Docker & Kubernetes",
    issuer: "Scaler",
    date: "Jul 2026",
    id: "",
    link: "https://moonshot.scaler.com/s/sl/ZHHl2IM8gx",
  },
  {
    name: "Machine Learning using Python Bootcamp",
    issuer: "Let's Upgrade · NSDC",
    date: "Jul 2024",
    id: "No. LUEMLJUL124510",
    file: "/certs/letsupgrade-ml-python.pdf",
    link: "https://letsupgrade.in/verify",
  },
  {
    name: "Prompt Engineering Bootcamp",
    issuer: "Let's Upgrade · NSDC",
    date: "Aug 2024",
    id: "No. LUEPEJUL124507",
    file: "/certs/letsupgrade-prompt-engineering.pdf",
    link: "https://letsupgrade.in/verify",
  },
  {
    name: "ML for Computer Vision on Edge Devices (Internship)",
    issuer: "UILATECH LLP",
    date: "Apr 2026",
    id: "",
    file: "",
  },
];

export const achievements = [
  {
    title: "Venture Vibe 2.0",
    place: "KLE BVB, Hubli",
    text: "Pitched the AI Insert Classification System to a panel; investors expressed interest in funding the solution.",
  },
  {
    title: "SRISHTI Innovates",
    place: "Acharya Institute",
    text: "Presented an embedded-systems based solution at the innovation showcase.",
  },
];
