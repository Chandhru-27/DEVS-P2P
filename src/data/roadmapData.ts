import type { RoadmapPhase } from '../types';

export const roadmapData: RoadmapPhase[] = [
  {
    id: 'phase-1',
    phaseNumber: 1,
    title: 'Foundations & Math for Machine Learning',
    tagline: 'The indispensable bedrock of all algorithms and scientific computing',
    duration: '4 - 6 Weeks',
    difficulty: 'Beginner',
    color: 'from-blue-500 to-cyan-500',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    iconName: 'Binary',
    overview:
      'Before jumping into deep models, establish deep intuition for linear algebra, multivariable calculus, probability, and fluent modern Python tooling.',
    topics: [
      {
        id: 'p1-python',
        name: 'Modern Python & Software Engineering for ML',
        summary: 'Fluency in modern Python 3.11+, OOP, decorators, generators, type hints, virtual envs (uv, poetry).',
        keySkills: ['Object-Oriented Programming (OOP)', 'Type Hinting & Pydantic basics', 'List & Dict Comprehensions', 'uv / poetry / virtualenv management', 'Git version control and GitHub workflow'],
        recommendedResources: [
          { title: 'Python for Everybody (FreeCodeCamp)', url: 'https://www.freecodecamp.org/news/python-for-everybody/', type: 'Course' },
          { title: 'Real Python - Modern Python Tutorials', url: 'https://realpython.com/', type: 'Guide' },
          { title: 'The Missing Semester of Your CS Education (MIT)', url: 'https://missing.csail.mit.edu/', type: 'Course' },
        ],
      },
      {
        id: 'p1-linear-algebra',
        name: 'Linear Algebra for Machine Learning',
        summary: 'Vectors, matrices, dot products, eigenvalues, eigenvectors, matrix decompositions (SVD, PCA foundations).',
        keySkills: ['Vector spaces & Linear transformations', 'Matrix multiplication & Inverses', 'Eigenvalues & Eigenvectors', 'Singular Value Decomposition (SVD)', 'Orthogonality & Projections'],
        recommendedResources: [
          { title: 'Essence of Linear Algebra (3Blue1Brown)', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab', type: 'Video' },
          { title: 'Linear Algebra by Gilbert Strang (MIT 18.06)', url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/', type: 'Course' },
        ],
      },
      {
        id: 'p1-calculus',
        name: 'Multivariable Calculus & Optimization',
        summary: 'Partial derivatives, gradients, chain rule, Hessian matrices, and gradient descent intuition.',
        keySkills: ['Derivatives & Partial Derivatives', 'The Gradient Vector & Directional Derivative', 'Chain Rule (Backpropagation foundation)', 'Convex vs Non-Convex Optimization', 'Taylor Series Approximations'],
        recommendedResources: [
          { title: 'Essence of Calculus (3Blue1Brown)', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr', type: 'Video' },
          { title: 'Khan Academy: Multivariable Calculus', url: 'https://www.khanacademy.org/math/multivariable-calculus', type: 'Course' },
        ],
      },
      {
        id: 'p1-probability',
        name: 'Probability, Statistics & Hypothesis Testing',
        summary: 'Random variables, probability distributions, Bayes theorem, maximum likelihood estimation, p-values.',
        keySkills: ['Discrete & Continuous Distributions (Gaussian, Poisson, Bernoulli)', 'Bayes Rule & Conditional Probability', 'Expectation, Variance & Covariance', 'Maximum Likelihood Estimation (MLE)', 'Hypothesis Testing & Confidence Intervals'],
        recommendedResources: [
          { title: 'StatQuest with Josh Starmer: Statistics Fundamentals', url: 'https://www.youtube.com/c/joshstarmer', type: 'Video' },
          { title: 'Introduction to Probability (Harvard Stat 110 by Joe Blitzstein)', url: 'https://projects.iq.harvard.edu/stat110/home', type: 'Course' },
        ],
      },
    ],
    milestoneProject: {
      title: 'Vector Math & Calculus Autograd Engine from Scratch',
      description: 'Implement a minimal micro-autograd engine in pure Python (like Andrej Karpathy micrograd) implementing scalar backpropagation and automatic differentiation with unit tests.',
      deliverables: ['Custom Value class with gradient tracking', 'Reverse-mode automatic differentiation', 'Unit tests verifying against PyTorch', 'Well-documented GitHub repository with README'],
    },
  },
  {
    id: 'phase-2',
    phaseNumber: 2,
    title: 'Data Science, Wrangling & Analytics',
    tagline: 'Transform raw, dirty real-world data into actionable features and insights',
    duration: '4 - 5 Weeks',
    difficulty: 'Beginner',
    color: 'from-emerald-500 to-teal-500',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    iconName: 'Database',
    overview:
      'Data is the lifeblood of AI. Master vectorized numerical calculations, high-performance data manipulation, exploratory data analysis (EDA), and relational queries.',
    topics: [
      {
        id: 'p2-numpy',
        name: 'NumPy: High-Performance Numerical Computing',
        summary: 'N-dimensional arrays, broadcasting, vectorization, indexing, linear algebra subroutines.',
        keySkills: ['ndarray memory layouts & Strides', 'Vectorized math operations', 'Array broadcasting rules', 'Matrix operations with np.linalg', 'Random sampling & Reproducibility (seeds)'],
        recommendedResources: [
          { title: 'NumPy Official Documentation & Quickstart', url: 'https://numpy.org/doc/stable/user/quickstart.html', type: 'Documentation' },
          { title: '100 NumPy Exercises', url: 'https://github.com/rougier/numpy-100', type: 'GitHub' },
        ],
      },
      {
        id: 'p2-pandas',
        name: 'Pandas & Polars: Tabular Data Wrangling',
        summary: 'DataFrames, Series, aggregation, groupby, merging, reshaping, and modern Polars for ultra-fast lazy frames.',
        keySkills: ['Data cleaning (handling NaNs, duplicates, outliers)', 'Groupby & Aggregation pipelines', 'Merging, Joining & Concatenation', 'Datetime & Categorical feature processing', 'Polars vs Pandas speed benchmarks'],
        recommendedResources: [
          { title: 'Pandas Official Tutorials', url: 'https://pandas.pydata.org/docs/getting_started/intro_tutorials/', type: 'Documentation' },
          { title: 'Polars: Blazingly Fast DataFrame Guide', url: 'https://docs.pola.rs/', type: 'Documentation' },
        ],
      },
      {
        id: 'p2-eda-viz',
        name: 'Data Visualization & Storytelling (Seaborn, Plotly)',
        summary: 'Distribution plots, correlation heatmaps, interactive charts with Plotly, detecting patterns.',
        keySkills: ['Matplotlib object-oriented plotting', 'Seaborn statistical graphics', 'Interactive dashboards with Plotly', 'Correlation matrices & Multicollinearity', 'Effective visual communication'],
        recommendedResources: [
          { title: 'Python Data Science Handbook (Jake VanderPlas)', url: 'https://jakevdp.github.io/PythonDataScienceHandbook/', type: 'Book' },
          { title: 'Plotly Python Open Source Graphing Library', url: 'https://plotly.com/python/', type: 'Documentation' },
        ],
      },
      {
        id: 'p2-sql',
        name: 'Advanced SQL for Data Science',
        summary: 'Window functions, CTEs, subqueries, complex aggregations, joining massive datasets.',
        keySkills: ['Common Table Expressions (WITH queries)', 'Window functions (RANK, DENSE_RANK, LAG, LEAD)', 'Index optimization and EXPLAIN ANALYZE', 'Aggregations & Filter conditions', 'Integrating SQL with Python (DuckDB, SQLAlchemy)'],
        recommendedResources: [
          { title: 'Mode Analytics: The SQL Tutorial for Data Analysis', url: 'https://mode.com/sql-tutorial/', type: 'Guide' },
          { title: 'DuckDB: Fast In-Process Analytical SQL', url: 'https://duckdb.org/', type: 'Documentation' },
        ],
      },
    ],
    milestoneProject: {
      title: 'Comprehensive Exploratory Data Analysis & Feature Pipeline',
      description: 'Perform end-to-end data analysis on a messy real-world dataset (e.g. NYC Taxi, Spotify streams, or e-commerce churn), build an interactive Plotly dashboard, and produce an automated data quality pipeline.',
      deliverables: ['Jupyter Notebook with deep statistical takeaways', 'Cleaned dataset & documented assumptions', 'Interactive web dashboard (Streamlit or Plotly)', 'Feature correlation and distribution analysis report'],
    },
  },
  {
    id: 'phase-3',
    phaseNumber: 3,
    title: 'Classical Machine Learning',
    tagline: 'Master the core algorithms that power 80% of production enterprise systems',
    duration: '6 - 8 Weeks',
    difficulty: 'Intermediate',
    color: 'from-amber-500 to-orange-500',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    iconName: 'Cpu',
    overview:
      'Learn how supervised and unsupervised algorithms work under the hood. Master Scikit-Learn pipelines, hyperparameter tuning, model evaluation, and ensemble gradient boosting (XGBoost, LightGBM).',
    topics: [
      {
        id: 'p3-supervised',
        name: 'Supervised Learning (Regression & Classification)',
        summary: 'Linear/Polynomial Regression, Logistic Regression, Ridge/Lasso Regularization, SVMs, Decision Trees.',
        keySkills: ['Cost functions (MSE, MAE, Cross-Entropy)', 'L1 (Lasso) vs L2 (Ridge) Regularization', 'Support Vector Machines (SVM) & Kernel trick', 'Decision Trees: Gini Impurity vs Entropy', 'Handling class imbalance (SMOTE, Class weights)'],
        recommendedResources: [
          { title: 'Machine Learning Specialization by Andrew Ng (Coursera / DeepLearning.AI)', url: 'https://www.deeplearning.ai/courses/machine-learning-specialization/', type: 'Course' },
          { title: 'StatQuest: Machine Learning Fundamentals', url: 'https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF', type: 'Video' },
        ],
      },
      {
        id: 'p3-ensembles',
        name: 'Ensemble Learning: Random Forests & Gradient Boosting',
        summary: 'Bagging, Boosting, Random Forests, AdaBoost, Gradient Boosted Decision Trees, XGBoost, LightGBM, CatBoost.',
        keySkills: ['Bootstrap Aggregation (Bagging)', 'Boosting mechanics: Residual fitting', 'XGBoost hyperparameter optimization', 'LightGBM histogram-based splitting', 'Feature importance & SHAP explainability'],
        recommendedResources: [
          { title: 'XGBoost Official Documentation and Tutorials', url: 'https://xgboost.readthedocs.io/', type: 'Documentation' },
          { title: 'Kaggle Courses: Intermediate Machine Learning', url: 'https://www.kaggle.com/learn/intermediate-machine-learning', type: 'Interactive' },
        ],
      },
      {
        id: 'p3-unsupervised',
        name: 'Unsupervised Learning & Dimensionality Reduction',
        summary: 'Clustering (K-Means, DBSCAN, Hierarchical), Principal Component Analysis (PCA), t-SNE, UMAP.',
        keySkills: ['K-Means & Elbow Method / Silhouette score', 'Density-based clustering with DBSCAN', 'PCA variance explained calculation', 'Dimensionality reduction for visualization (t-SNE, UMAP)', 'Anomaly detection with Isolation Forests'],
        recommendedResources: [
          { title: 'Scikit-Learn Clustering & Decomposition User Guide', url: 'https://scikit-learn.org/stable/modules/clustering.html', type: 'Documentation' },
          { title: 'Hands-On Machine Learning (Aurélien Géron)', url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/', type: 'Book' },
        ],
      },
      {
        id: 'p3-evaluation',
        name: 'Validation, Metrics & Scikit-Learn Pipelines',
        summary: 'Cross-validation, ROC-AUC, Precision-Recall curves, F1-score, data leakage prevention, leakage-free Pipelines.',
        keySkills: ['K-Fold & Stratified K-Fold Cross Validation', 'Precision, Recall, F1, PR-AUC vs ROC-AUC', 'Avoiding data leakage with sklearn.pipeline.Pipeline', 'Hyperparameter tuning with Optuna / GridSearchCV', 'Model interpretability with SHAP & LIME'],
        recommendedResources: [
          { title: 'Optuna: Hyperparameter Optimization Framework', url: 'https://optuna.org/', type: 'Documentation' },
          { title: 'SHAP (SHapley Additive exPlanations) Documentation', url: 'https://shap.readthedocs.io/', type: 'Documentation' },
        ],
      },
    ],
    milestoneProject: {
      title: 'End-to-End Enterprise Churn / Credit Risk Predictor',
      description: 'Build a production-grade churn or fraud prediction pipeline with feature engineering, Optuna hyperparameter tuning, model explainability with SHAP, and an interactive prediction API.',
      deliverables: ['Scikit-Learn / XGBoost pipeline code with cross-validation', 'SHAP feature importance plots and analysis', 'Benchmark comparison across 5 algorithms', 'FastAPI microservice returning predictions and probabilities'],
    },
  },
  {
    id: 'phase-4',
    phaseNumber: 4,
    title: 'Deep Learning & Neural Networks',
    tagline: 'From multi-layer perceptrons to modern PyTorch and Computer Vision & NLP',
    duration: '6 - 8 Weeks',
    difficulty: 'Intermediate',
    color: 'from-violet-500 to-purple-500',
    badgeColor: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
    iconName: 'Network',
    overview:
      'Dive into deep representations. Learn backpropagation from first principles, master the industry-standard PyTorch framework, and build modern vision (CNNs, ViTs) and sequence models.',
    topics: [
      {
        id: 'p4-neural-nets',
        name: 'Deep Learning Fundamentals & PyTorch Core',
        summary: 'Perceptrons, MLPs, backprop, activation functions (ReLU, GELU), loss functions, optimizers (AdamW), PyTorch tensors.',
        keySkills: ['Tensors, operations, GPU acceleration (CUDA)', 'torch.nn.Module, autograd & custom loss functions', 'DataLoader & Dataset abstractions', 'Training loops with validation & early stopping', 'Regularization: Dropout, Weight Decay, LayerNorm, BatchNorm'],
        recommendedResources: [
          { title: 'Neural Networks: Zero to Hero (Andrej Karpathy)', url: 'https://karpathy.ai/zero-to-hero.html', type: 'Video' },
          { title: 'Deep Learning Specialization (Andrew Ng)', url: 'https://www.deeplearning.ai/courses/deep-learning-specialization/', type: 'Course' },
          { title: 'PyTorch Official Deep Learning Tutorials', url: 'https://pytorch.org/tutorials/', type: 'Documentation' },
        ],
      },
      {
        id: 'p4-computer-vision',
        name: 'Computer Vision (CNNs & Vision Transformers)',
        summary: 'Convolutions, pooling, ResNet, modern transfer learning, object detection concepts (YOLO), ViT architecture.',
        keySkills: ['Convolutional filters, padding, stride, receptive field', 'ResNet architecture & Residual skip connections', 'Transfer learning & Fine-tuning pre-trained models (torchvision)', 'Data augmentation with Albumentations / torchvision.transforms', 'Vision Transformers (ViT) patch embedding intuition'],
        recommendedResources: [
          { title: 'Stanford CS231n: Deep Learning for Computer Vision', url: 'http://cs231n.stanford.edu/', type: 'Course' },
          { title: 'Timm: PyTorch Image Models (Ross Wightman)', url: 'https://huggingface.co/docs/timm/index', type: 'GitHub' },
        ],
      },
      {
        id: 'p4-nlp-seq',
        name: 'Natural Language Processing & Sequence Models',
        summary: 'Word embeddings (Word2Vec), RNNs, LSTMs, Attention Mechanism, encoder-decoder architecture.',
        keySkills: ['Tokenization (BPE, WordPiece, SentencePiece)', 'Word embeddings & semantic vector spaces', 'Recurrent Neural Networks (RNN) and LSTM gates', 'Sequence-to-sequence with Attention mechanism', 'Bahdanau & Luong attention formulation'],
        recommendedResources: [
          { title: 'Stanford CS224N: Natural Language Processing with Deep Learning', url: 'https://web.stanford.edu/class/cs224n/', type: 'Course' },
          { title: 'The Illustrated Transformer (Jay Alammar)', url: 'https://jalammar.github.io/illustrated-transformer/', type: 'Guide' },
        ],
      },
    ],
    milestoneProject: {
      title: 'PyTorch Image Classifier & Object Detector with Custom Dataset',
      description: 'Train a custom PyTorch model using transfer learning (e.g. EfficientNet or ConvNeXt) on a medical imaging or custom dataset, implement test-time augmentation, and export with ONNX.',
      deliverables: ['Custom PyTorch Dataset and training loop with Mixed Precision (AMP)', 'Confusion matrix and ROC curves', 'Model checkpoint weights and ONNX exported graph', 'Hugging Face Spaces demo with Gradio'],
    },
  },
  {
    id: 'phase-5',
    phaseNumber: 5,
    title: 'Generative AI, Large Language Models & Agents',
    tagline: 'The modern frontier: Transformers, RAG, Fine-tuning, and Autonomous AI Agents',
    duration: '6 - 8 Weeks',
    difficulty: 'Advanced',
    color: 'from-pink-500 to-rose-500',
    badgeColor: 'bg-pink-500/10 text-pink-400 border-pink-500/30',
    iconName: 'Sparkles',
    overview:
      'Build at the cutting edge. Understand Transformer internals, master prompt engineering, build multi-step RAG systems with vector databases, fine-tune models with LoRA/PEFT, and construct agentic workflows.',
    topics: [
      {
        id: 'p5-transformers',
        name: 'The Transformer Architecture from Scratch',
        summary: 'Self-Attention, Multi-Head Attention, Positional Encoding, causal masking, KV-cache, Decoder-only LLMs (GPT).',
        keySkills: ['Self-attention math (Q, K, V dot-product scaling)', 'Multi-Head Attention implementation in PyTorch', 'RoPE (Rotary Position Embeddings)', 'KV-Cache optimization for fast token generation', 'Decoder-only vs Encoder-Decoder paradigms'],
        recommendedResources: [
          { title: "Let's build GPT: from scratch, in code, spelled out (Andrej Karpathy)", url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY', type: 'Video' },
          { title: 'Attention Is All You Need (Original Paper)', url: 'https://arxiv.org/abs/1706.03762', type: 'Paper' },
          { title: 'Hugging Face NLP Course', url: 'https://huggingface.co/learn/nlp-course/', type: 'Course' },
        ],
      },
      {
        id: 'p5-rag',
        name: 'Advanced RAG (Retrieval-Augmented Generation)',
        summary: 'Chunking strategies, embedding models, vector databases (Chroma, Pinecone, Qdrant), re-ranking, hybrid search.',
        keySkills: ['Semantic chunking & contextual embeddings', 'Vector databases & indexing algorithms (HNSW, IVFFlat)', 'Hybrid search (BM25 keyword + dense vector search)', 'Cross-Encoder re-ranking with Cohere / BGE-Reranker', 'Evaluation with RAGAS (Faithfulness, Answer Relevance)'],
        recommendedResources: [
          { title: 'LangChain Documentation & Conceptual Guides', url: 'https://python.langchain.com/', type: 'Documentation' },
          { title: 'LlamaIndex: Framework for LLM Data & RAG', url: 'https://docs.llamaindex.ai/', type: 'Documentation' },
          { title: 'ChromaDB Open-Source Vector Database', url: 'https://docs.trychroma.com/', type: 'Documentation' },
        ],
      },
      {
        id: 'p5-finetuning',
        name: 'LLM Fine-Tuning & Quantization (LoRA, QLoRA)',
        summary: 'Parameter-Efficient Fine-Tuning (PEFT), LoRA, 4-bit/8-bit quantization (bitsandbytes), Unsloth, SFT & DPO.',
        keySkills: ['Instruction tuning dataset formatting (Alpaca, ChatML)', 'LoRA (Low-Rank Adaptation) math & hyperparameters (r, alpha)', 'QLoRA 4-bit NormalFloat (NF4) quantization', 'Direct Preference Optimization (DPO) and RLHF', 'Unsloth for 2-5x faster fine-tuning'],
        recommendedResources: [
          { title: 'Hugging Face PEFT Library', url: 'https://huggingface.co/docs/peft/index', type: 'Documentation' },
          { title: 'Unsloth AI: Fast LLM Fine-Tuning', url: 'https://github.com/unslothai/unsloth', type: 'GitHub' },
        ],
      },
      {
        id: 'p5-agents',
        name: 'Autonomous AI Agents & Tool Calling',
        summary: 'ReAct pattern, Function Calling, multi-agent frameworks (LangGraph, CrewAI, AutoGen), evaluation & guardrails.',
        keySkills: ['ReAct (Reasoning + Acting) loop pattern', 'Structured outputs & JSON schema function calling', 'Stateful graph agents with LangGraph', 'Multi-agent orchestration & human-in-the-loop', 'Guardrails with NeMo Guardrails & Llama Guard'],
        recommendedResources: [
          { title: 'LangGraph Official Tutorial & Graph Architecture', url: 'https://langchain-ai.github.io/langgraph/', type: 'Documentation' },
          { title: 'Building Systems with the ChatGPT API (DeepLearning.AI)', url: 'https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/', type: 'Course' },
        ],
      },
    ],
    milestoneProject: {
      title: 'Full-Stack Agentic AI Research Assistant with Hybrid RAG',
      description: 'Build an autonomous research agent capable of ingesting PDF technical papers, indexing them into a vector DB, performing hybrid retrieval with re-ranking, and orchestrating multi-step web searches with citations.',
      deliverables: ['Custom RAG pipeline with dense + BM25 hybrid search & reranker', 'LangGraph agent with tool calling (search, calculator, summary)', 'Evaluation metrics scored using RAGAS', 'Full web interface with source citations and chat history'],
    },
  },
  {
    id: 'phase-6',
    phaseNumber: 6,
    title: 'MLOps, Serving & Production Engineering',
    tagline: 'Bridging the chasm between experimental notebooks and resilient production systems',
    duration: '4 - 6 Weeks',
    difficulty: 'Advanced',
    color: 'from-amber-600 to-red-500',
    badgeColor: 'bg-amber-600/10 text-amber-400 border-amber-600/30',
    iconName: 'Server',
    overview:
      'A model in a notebook creates zero real-world value. Master high-throughput serving, model compression, Docker containerization, experiment tracking, and real-time monitoring.',
    topics: [
      {
        id: 'p6-serving',
        name: 'Model Serving & Inference Optimization',
        summary: 'FastAPI, vLLM for high-throughput LLMs, Triton Inference Server, ONNX Runtime, TensorRT.',
        keySkills: ['FastAPI asynchronous endpoint design & Pydantic schemas', 'High-throughput LLM serving with vLLM (PagedAttention)', 'ONNX conversion and graph optimization', 'Batching, concurrency, and latency profiling', 'Quantization formats (GGUF, AWQ, FP8)'],
        recommendedResources: [
          { title: 'vLLM: Easy, Fast, and Cheap LLM Serving for Everyone', url: 'https://docs.vllm.ai/', type: 'Documentation' },
          { title: 'FastAPI Official Documentation', url: 'https://fastapi.tiangolo.com/', type: 'Documentation' },
        ],
      },
      {
        id: 'p6-containers',
        name: 'Docker, Containerization & Orchestration',
        summary: 'Containerizing ML apps, multi-stage Docker builds, NVIDIA Container Toolkit (GPU passthrough), Kubernetes basics.',
        keySkills: ['Writing production Dockerfiles with minimal image size', 'NVIDIA Container Toolkit for GPU acceleration', 'Docker Compose for multi-container apps (API + DB + UI)', 'Environment reproducibility and dependency locking', 'CI/CD pipeline with GitHub Actions'],
        recommendedResources: [
          { title: 'Docker Official Getting Started Guide', url: 'https://docs.docker.com/get-started/', type: 'Documentation' },
          { title: 'Made With ML (Goku Mohandas) - MLOps Course', url: 'https://madewithml.com/', type: 'Course' },
        ],
      },
      {
        id: 'p6-tracking-monitoring',
        name: 'Experiment Tracking, Data Drift & Monitoring',
        summary: 'MLflow, Weights & Biases (W&B), Evidently AI for data/concept drift, Prometheus & Grafana.',
        keySkills: ['Experiment logging with MLflow and Weights & Biases', 'Model registry and versioning', 'Data drift & Concept drift detection with Evidently AI', 'Logging and telemetry with OpenTelemetry', 'Prometheus metrics and Grafana dashboards for latency and GPU memory'],
        recommendedResources: [
          { title: 'MLflow Official Documentation', url: 'https://mlflow.org/docs/latest/index.html', type: 'Documentation' },
          { title: 'Weights & Biases (W&B) Quickstart', url: 'https://docs.wandb.ai/quickstart', type: 'Documentation' },
          { title: 'Full Stack Deep Learning Course', url: 'https://fullstackdeeplearning.com/', type: 'Course' },
        ],
      },
    ],
    milestoneProject: {
      title: 'Production-Ready CI/CD ML Microservice on Cloud',
      description: 'Package an ML model with FastAPI and Docker, configure a GitHub Actions CI/CD pipeline with automated testing, deploy to cloud (AWS/GCP/Render), and set up MLflow experiment tracking.',
      deliverables: ['Multi-stage Dockerfile with GPU/CPU support', 'GitHub Actions workflow with linting and unit tests', 'MLflow experiment logs with model registry artifacts', 'Live hosted API endpoint with swagger documentation'],
    },
  },
];
