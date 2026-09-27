import type { RoadmapPhase } from '../types';

export const roadmapData: RoadmapPhase[] = [
  {
    id: 'phase-1',
    phaseNumber: 1,
    title: 'Foundations & Math for ML',
    tagline: 'The mathematical bedrock of algorithms and scientific computing',
    duration: '4-6 Weeks',
    difficulty: 'Beginner',
    color: 'from-blue-500 to-cyan-500',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    iconName: 'Binary',
    overview: 'Build intuition for linear algebra, multivariable calculus, probability, and modern Python.',
    topics: [
      {
        id: 'p1-python',
        name: 'Modern Python 3.11+ & Tooling',
        summary: 'OOP, type hinting, virtual environments (uv, poetry), and clean code structure.',
        keySkills: ['OOP & Typing', 'uv & Virtual Envs', 'Git Workflow'],
        recommendedResources: [
          { title: 'Python for Everybody', url: 'https://www.freecodecamp.org/news/python-for-everybody/', type: 'Course' },
          { title: 'MIT Missing Semester', url: 'https://missing.csail.mit.edu/', type: 'Course' },
        ],
      },
      {
        id: 'p1-linear-algebra',
        name: 'Linear Algebra',
        summary: 'Vectors, matrix multiplications, dot products, eigenvalues, and SVD decomposition.',
        keySkills: ['Matrix Transformations', 'Eigenvectors & SVD', 'Dot Products & Projections'],
        recommendedResources: [
          { title: 'Essence of Linear Algebra (3B1B)', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab', type: 'Video' },
          { title: 'Gilbert Strang MIT 18.06', url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/', type: 'Course' },
        ],
      },
      {
        id: 'p1-calculus',
        name: 'Multivariable Calculus & Optimization',
        summary: 'Partial derivatives, gradient vectors, chain rule, and gradient descent dynamics.',
        keySkills: ['Partial Derivatives', 'Gradients & Chain Rule', 'Loss Minimization'],
        recommendedResources: [
          { title: 'Essence of Calculus (3B1B)', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr', type: 'Video' },
        ],
      },
      {
        id: 'p1-probability',
        name: 'Probability & Statistics',
        summary: 'Distributions, Bayes theorem, expectation, variance, and hypothesis testing.',
        keySkills: ['Gaussian & Bayes Rule', 'Maximum Likelihood (MLE)', 'Hypothesis Testing'],
        recommendedResources: [
          { title: 'StatQuest Statistics Fundamentals', url: 'https://www.youtube.com/c/joshstarmer', type: 'Video' },
        ],
      },
    ],
    milestoneProject: {
      title: 'Autograd Engine from Scratch',
      description: 'Implement a minimal micro-autograd engine in pure Python with reverse-mode automatic differentiation and unit tests.',
      deliverables: ['Custom Value class with autograd', 'Reverse-mode backpropagation', 'Unit tests verified against PyTorch'],
    },
  },
  {
    id: 'phase-2',
    phaseNumber: 2,
    title: 'Data Science & Wrangling',
    tagline: 'Transform raw, dirty data into features and statistical insights',
    duration: '4-5 Weeks',
    difficulty: 'Beginner',
    color: 'from-emerald-500 to-teal-500',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    iconName: 'Database',
    overview: 'Vectorized computing, tabular manipulations with Pandas/Polars, SQL queries, and visual analytics.',
    topics: [
      {
        id: 'p2-numpy',
        name: 'NumPy Vectorized Computing',
        summary: 'N-dimensional arrays, vectorization, memory strides, and broadcasting rules.',
        keySkills: ['Vectorized Arrays', 'Broadcasting Rules', 'Linear Algebra Subroutines'],
        recommendedResources: [
          { title: 'NumPy Quickstart', url: 'https://numpy.org/doc/stable/user/quickstart.html', type: 'Documentation' },
          { title: '100 NumPy Exercises', url: 'https://github.com/rougier/numpy-100', type: 'GitHub' },
        ],
      },
      {
        id: 'p2-pandas',
        name: 'Pandas & Polars DataFrames',
        summary: 'High-speed tabular manipulation, aggregations, joins, and handling missing data.',
        keySkills: ['Cleaning & Imputation', 'Groupby Aggregations', 'Polars LazyFrames'],
        recommendedResources: [
          { title: 'Pandas User Guide', url: 'https://pandas.pydata.org/docs/getting_started/intro_tutorials/', type: 'Documentation' },
          { title: 'Polars Fast Guide', url: 'https://docs.pola.rs/', type: 'Documentation' },
        ],
      },
      {
        id: 'p2-eda-viz',
        name: 'EDA & Visual Storytelling',
        summary: 'Correlation matrices, distribution plots, and interactive dashboards with Plotly.',
        keySkills: ['Distribution Analysis', 'Correlation & Outliers', 'Plotly Dashboards'],
        recommendedResources: [
          { title: 'Python Data Science Handbook', url: 'https://jakevdp.github.io/PythonDataScienceHandbook/', type: 'Book' },
        ],
      },
      {
        id: 'p2-sql',
        name: 'Advanced SQL for Analytics',
        summary: 'Window functions, CTEs, subqueries, and analytical joins for large datasets.',
        keySkills: ['Window Functions', 'CTEs & Subqueries', 'DuckDB Fast Analytics'],
        recommendedResources: [
          { title: 'Mode SQL Tutorial', url: 'https://mode.com/sql-tutorial/', type: 'Guide' },
        ],
      },
    ],
    milestoneProject: {
      title: 'Exploratory Data Analysis Dashboard',
      description: 'End-to-end data cleaning, feature analysis, and interactive dashboard built on real-world dataset.',
      deliverables: ['Jupyter analysis notebook', 'Feature distribution & correlation report', 'Interactive Streamlit/Plotly dashboard'],
    },
  },
  {
    id: 'phase-3',
    phaseNumber: 3,
    title: 'Classical Machine Learning',
    tagline: 'Core algorithms that power production predictive models',
    duration: '6-8 Weeks',
    difficulty: 'Intermediate',
    color: 'from-amber-500 to-orange-500',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    iconName: 'Cpu',
    overview: 'Supervised and unsupervised models, Scikit-Learn pipelines, hyperparameter tuning, and XGBoost.',
    topics: [
      {
        id: 'p3-supervised',
        name: 'Supervised Learning',
        summary: 'Linear/Logistic regression, SVMs, decision trees, and regularized cost functions.',
        keySkills: ['Linear & Logistic Regression', 'L1/L2 Regularization', 'Decision Trees'],
        recommendedResources: [
          { title: 'Andrew Ng ML Specialization', url: 'https://www.deeplearning.ai/courses/machine-learning-specialization/', type: 'Course' },
        ],
      },
      {
        id: 'p3-ensembles',
        name: 'Ensemble Learning & Gradient Boosting',
        summary: 'Random Forests, XGBoost, and LightGBM with residual boosting mechanics.',
        keySkills: ['Random Forests', 'XGBoost & LightGBM', 'Feature Importance & SHAP'],
        recommendedResources: [
          { title: 'XGBoost Docs', url: 'https://xgboost.readthedocs.io/', type: 'Documentation' },
        ],
      },
      {
        id: 'p3-unsupervised',
        name: 'Unsupervised & Dimensionality Reduction',
        summary: 'K-Means clustering, DBSCAN, and PCA for dimensionality reduction and visualization.',
        keySkills: ['K-Means & DBSCAN', 'PCA Decomposition', 't-SNE & UMAP'],
        recommendedResources: [
          { title: 'Hands-On Machine Learning', url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/', type: 'Book' },
        ],
      },
      {
        id: 'p3-evaluation',
        name: 'Validation & Scikit-Learn Pipelines',
        summary: 'Cross-validation, ROC-AUC, preventing data leakage, and automated tuning with Optuna.',
        keySkills: ['Stratified K-Fold', 'Leak-Free Pipelines', 'Optuna Tuning'],
        recommendedResources: [
          { title: 'Optuna Framework', url: 'https://optuna.org/', type: 'Documentation' },
        ],
      },
    ],
    milestoneProject: {
      title: 'Customer Churn Predictor with SHAP',
      description: 'Train gradient boosted model pipeline with Optuna hyperparameter optimization and SHAP explainability.',
      deliverables: ['Scikit-Learn / XGBoost pipeline', 'SHAP feature impact visualizations', 'FastAPI prediction microservice'],
    },
  },
  {
    id: 'phase-4',
    phaseNumber: 4,
    title: 'Deep Learning & Neural Networks',
    tagline: 'From multi-layer perceptrons to PyTorch vision and sequence models',
    duration: '6-8 Weeks',
    difficulty: 'Intermediate',
    color: 'from-violet-500 to-purple-500',
    badgeColor: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
    iconName: 'Network',
    overview: 'Neural network representations, PyTorch tensors, autograd, CNNs for vision, and sequence models.',
    topics: [
      {
        id: 'p4-neural-nets',
        name: 'Neural Net Fundamentals & PyTorch',
        summary: 'MLPs, backpropagation, activation functions, optimizers (AdamW), and custom PyTorch training loops.',
        keySkills: ['PyTorch Tensors & CUDA', 'Custom Modules & Loss', 'Training & Early Stopping'],
        recommendedResources: [
          { title: 'Karpathy: Zero to Hero', url: 'https://karpathy.ai/zero-to-hero.html', type: 'Video' },
          { title: 'PyTorch Tutorials', url: 'https://pytorch.org/tutorials/', type: 'Documentation' },
        ],
      },
      {
        id: 'p4-computer-vision',
        name: 'Computer Vision & CNNs',
        summary: 'Convolutions, pooling, ResNet residual connections, data augmentation, and Vision Transformers.',
        keySkills: ['CNNs & ResNet', 'Transfer Learning', 'Data Augmentation'],
        recommendedResources: [
          { title: 'Stanford CS231n', url: 'http://cs231n.stanford.edu/', type: 'Course' },
        ],
      },
      {
        id: 'p4-nlp-seq',
        name: 'NLP & Sequence Models',
        summary: 'Word embeddings, RNNs, LSTMs, and the foundational Attention mechanism.',
        keySkills: ['Tokenization & Embeddings', 'RNNs & LSTMs', 'Attention Mechanism'],
        recommendedResources: [
          { title: 'Illustrated Transformer', url: 'https://jalammar.github.io/illustrated-transformer/', type: 'Guide' },
        ],
      },
    ],
    milestoneProject: {
      title: 'Medical Image Classifier with PyTorch',
      description: 'Transfer learning model trained on chest scans with Grad-CAM visual explainability.',
      deliverables: ['PyTorch training loop with AMP', 'Grad-CAM attention heatmap visualization', 'Gradio web demo'],
    },
  },
  {
    id: 'phase-5',
    phaseNumber: 5,
    title: 'Generative AI, LLMs & Agents',
    tagline: 'Transformers, RAG systems, LoRA fine-tuning, and autonomous agents',
    duration: '6-8 Weeks',
    difficulty: 'Advanced',
    color: 'from-pink-500 to-rose-500',
    badgeColor: 'bg-pink-500/10 text-pink-400 border-pink-500/30',
    iconName: 'Sparkles',
    overview: 'Build with Transformers, hybrid RAG with vector DBs, PEFT/LoRA fine-tuning, and LangGraph agents.',
    topics: [
      {
        id: 'p5-transformers',
        name: 'Transformers & Self-Attention',
        summary: 'Self-attention math, multi-head attention, RoPE positional encoding, and KV-cache mechanics.',
        keySkills: ['Self-Attention Math', 'Decoder Architecture', 'KV-Cache Optimization'],
        recommendedResources: [
          { title: 'Build GPT from Scratch (Karpathy)', url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY', type: 'Video' },
          { title: 'Hugging Face NLP Course', url: 'https://huggingface.co/learn/nlp-course/', type: 'Course' },
        ],
      },
      {
        id: 'p5-rag',
        name: 'Production RAG Systems',
        summary: 'Semantic chunking, vector databases (Chroma, Pinecone), hybrid search, and cross-encoder re-ranking.',
        keySkills: ['Chunking & Embeddings', 'Vector Indexing (HNSW)', 'Hybrid Search & Reranking'],
        recommendedResources: [
          { title: 'LangChain Guides', url: 'https://python.langchain.com/', type: 'Documentation' },
          { title: 'LlamaIndex Docs', url: 'https://docs.llamaindex.ai/', type: 'Documentation' },
        ],
      },
      {
        id: 'p5-finetuning',
        name: 'LoRA & QLoRA Fine-Tuning',
        summary: 'Parameter-efficient fine-tuning (PEFT), 4-bit NF4 quantization, and Unsloth acceleration.',
        keySkills: ['Instruction Datasets', 'LoRA & QLoRA Quantization', 'Unsloth Fast Tuning'],
        recommendedResources: [
          { title: 'Hugging Face PEFT', url: 'https://huggingface.co/docs/peft/index', type: 'Documentation' },
        ],
      },
      {
        id: 'p5-agents',
        name: 'Autonomous AI Agents',
        summary: 'Function calling, ReAct pattern loops, tool routing, and stateful multi-agent graphs with LangGraph.',
        keySkills: ['Tool Calling & Schemas', 'ReAct Reasoning Loop', 'LangGraph Stateful Workflows'],
        recommendedResources: [
          { title: 'LangGraph Tutorial', url: 'https://langchain-ai.github.io/langgraph/', type: 'Documentation' },
        ],
      },
    ],
    milestoneProject: {
      title: 'Agentic Research Assistant with Hybrid RAG',
      description: 'Autonomous research agent with PDF ingestion, hybrid vector retrieval, and tool execution.',
      deliverables: ['Dense + BM25 hybrid search pipeline', 'LangGraph agent with web search tool', 'Citations and chat history UI'],
    },
  },
  {
    id: 'phase-6',
    phaseNumber: 6,
    title: 'MLOps & Production Serving',
    tagline: 'Ship models to reliable, monitored production microservices',
    duration: '4-6 Weeks',
    difficulty: 'Advanced',
    color: 'from-amber-600 to-red-500',
    badgeColor: 'bg-amber-600/10 text-amber-400 border-amber-600/30',
    iconName: 'Server',
    overview: 'Deploy with FastAPI and Docker, serve LLMs with vLLM, track experiments with MLflow, and monitor data drift.',
    topics: [
      {
        id: 'p6-serving',
        name: 'Inference Serving & Optimization',
        summary: 'FastAPI asynchronous APIs, vLLM for high-throughput LLM serving, and ONNX runtime optimizations.',
        keySkills: ['FastAPI Microservices', 'vLLM High-Throughput Serving', 'ONNX Quantization'],
        recommendedResources: [
          { title: 'vLLM Documentation', url: 'https://docs.vllm.ai/', type: 'Documentation' },
        ],
      },
      {
        id: 'p6-containers',
        name: 'Docker & CI/CD Pipelines',
        summary: 'Multi-stage Docker builds, GPU passthrough containerization, and automated GitHub Actions CI/CD.',
        keySkills: ['Multi-Stage Dockerfiles', 'GPU Container Toolkit', 'GitHub Actions Automation'],
        recommendedResources: [
          { title: 'Made With ML Course', url: 'https://madewithml.com/', type: 'Course' },
        ],
      },
      {
        id: 'p6-tracking-monitoring',
        name: 'Tracking & Drift Monitoring',
        summary: 'MLflow experiment logging, model registry, and Evidently AI for live concept and data drift detection.',
        keySkills: ['MLflow Experiment Tracking', 'Model Registry Versioning', 'Evidently AI Drift Detection'],
        recommendedResources: [
          { title: 'MLflow Docs', url: 'https://mlflow.org/docs/latest/index.html', type: 'Documentation' },
        ],
      },
    ],
    milestoneProject: {
      title: 'Production CI/CD ML Microservice',
      description: 'Containerized model served with FastAPI, automated GitHub Actions testing, and live drift telemetry.',
      deliverables: ['Production Dockerfile with GPU/CPU support', 'GitHub Actions test & deploy pipeline', 'Live OpenAPI Swagger docs'],
    },
  },
];
