import type { ProjectIdea } from '../types';

export const projectsData: ProjectIdea[] = [
  {
    id: 'proj-micrograd-autograd',
    title: 'Autograd & Micro-Neural Net Engine',
    phase: 'Phase 1: Foundations',
    difficulty: 'Beginner',
    description:
      'Build a reverse-mode automatic differentiation engine from scratch in pure Python with support for scalar operations, backprop graphs, and train a 2-layer MLP on synthetic classification data.',
    techStack: ['Python', 'Graphviz', 'PyTest', 'Math'],
    datasetName: 'Synthetic Moons / Circles dataset',
    learningOutcomes: [
      'Understand the mathematical mechanics of the Chain Rule in computation graphs',
      'Implement topological sorting for DAG gradient propagation',
      'Build an intuition for SGD, learning rate, and weight updates without relying on PyTorch magic',
    ],
  },
  {
    id: 'proj-eda-dashboard',
    title: 'Financial Market & Crypto Volatility EDA Dashboard',
    phase: 'Phase 2: Data Science',
    difficulty: 'Beginner',
    description:
      'Ingest 5 years of historical stock and cryptocurrency tick data, clean outliers, calculate rolling Sharpe ratios and drawdowns, and build an interactive Plotly/Streamlit dashboard.',
    techStack: ['Python', 'Pandas', 'Polars', 'Plotly', 'Streamlit', 'DuckDB'],
    datasetName: 'Yahoo Finance & Binance Public API',
    learningOutcomes: [
      'Master vectorized time-series window aggregations and resamplings',
      'Optimize memory usage by transitioning from Pandas to Polars and DuckDB',
      'Design clean, intuitive interactive dashboards with dynamic date filters',
    ],
  },
  {
    id: 'proj-customer-churn-ml',
    title: 'Customer Churn Predictor with SHAP Explainability',
    phase: 'Phase 3: Machine Learning',
    difficulty: 'Intermediate',
    description:
      'Train, cross-validate, and tune gradient boosted models (XGBoost & LightGBM) to forecast customer churn. Prevent leakage with Scikit-Learn Pipelines and generate individual prediction explanations via SHAP force plots.',
    techStack: ['Scikit-Learn', 'XGBoost', 'Optuna', 'SHAP', 'FastAPI'],
    datasetUrl: 'https://www.kaggle.com/datasets/blastchar/telco-customer-churn',
    datasetName: 'Telco Customer Churn Dataset',
    learningOutcomes: [
      'Construct leak-free preprocessing pipelines combining numerical scaling and one-hot encoding',
      'Automate Bayesian hyperparameter optimization with Optuna',
      'Present model explanations to stakeholders using SHAP summary and waterfall plots',
    ],
  },
  {
    id: 'proj-pytorch-vision',
    title: 'Medical Scan Classifier with PyTorch & Transfer Learning',
    phase: 'Phase 4: Deep Learning',
    difficulty: 'Intermediate',
    description:
      'Build an end-to-end medical chest X-ray classifier distinguishing pneumonia from normal scans using pre-trained ResNet/ConvNeXt, Albumentations data augmentation, and Grad-CAM attention visualizations.',
    techStack: ['PyTorch', 'Torchvision', 'Albumentations', 'Grad-CAM', 'Gradio'],
    datasetUrl: 'https://www.kaggle.com/datasets/paultimothymooney/chest-xray-pneumonia',
    datasetName: 'Chest X-Ray Images (Pneumonia)',
    learningOutcomes: [
      'Implement fine-tuning and differential learning rates across backbone layers',
      'Generate Grad-CAM heatmaps showing which regions of the image influenced the neural network prediction',
      'Package an interactive web demonstration on Hugging Face Spaces using Gradio',
    ],
  },
  {
    id: 'proj-rag-multidoc-agent',
    title: 'Enterprise Document RAG & Autonomous Research Agent',
    phase: 'Phase 5: GenAI & LLMs',
    difficulty: 'Advanced',
    description:
      'Build a production RAG system that ingests PDF research papers, indexes them into ChromaDB with semantic chunking, performs BM25 + dense hybrid retrieval with Cohere reranking, and features a LangGraph agent with tool execution.',
    techStack: ['LangChain', 'LangGraph', 'ChromaDB', 'FastAPI', 'Ollama / OpenAI API', 'Streamlit'],
    datasetName: 'ArXiv Machine Learning Papers Collection',
    learningOutcomes: [
      'Compare naive chunking against semantic and hierarchical markdown chunking',
      'Implement reciprocal rank fusion (RRF) combining keyword search with dense vector embeddings',
      'Orchestrate tool calling and fallback routing in stateful agent graphs',
    ],
  },
  {
    id: 'proj-production-mlops-service',
    title: 'High-Throughput ML Microservice with CI/CD & Drift Monitoring',
    phase: 'Phase 6: MLOps',
    difficulty: 'Advanced',
    description:
      'Dockerize an ML prediction service with FastAPI, orchestrate asynchronous batching, log experiments and versions to MLflow, track data distribution drift with Evidently AI, and deploy with GitHub Actions CI/CD.',
    techStack: ['Docker', 'FastAPI', 'MLflow', 'Evidently AI', 'GitHub Actions', 'Prometheus'],
    datasetName: 'Kaggle Credit Card Fraud Detection',
    learningOutcomes: [
      'Architect resilient Docker containers with multi-stage builds and security best practices',
      'Implement automated model regression tests in GitHub Actions CI pipelines',
      'Detect covariate and concept drift in live production inference payloads',
    ],
  },
];
