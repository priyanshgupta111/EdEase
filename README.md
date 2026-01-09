# 🧠 EdEase | Inclusive Learning Assistant

**Learning, explained the way you understand.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-brightgreen)](https://edease.netlify.app/)
[![Demo Video](https://img.shields.io/badge/Demo%20Video-Watch%20Now-red)](https://youtu.be/w5q0S1g0K2k)

## 🚀 Project Overview

EdEase is an accessibility-first educational platform designed to democratize learning by adapting complex content into formats that match individual cognitive preferences. Unlike traditional "one-size-fits-all" education, EdEase puts the learner in control, offering personalized explanations without labels or diagnosis.

### 🎯 Problem Statement
Standard educational materials often present information in dense, jargon-heavy blocks that can be overwhelming for neurodivergent learners or anyone experiencing cognitive overload. This lack of flexibility creates unnecessary barriers to understanding and retention.

### 💡 Our Solution
EdEase bridges this gap with an intelligent adaptation engine that:
- **Simplifies Complexity**: Breaks down dense paragraphs into clear, digestible chunks.
- **Reduces Cognitive Load**: Uses a calm, distraction-free interface designed to minimize overwhelm.
- **Empowers Choice**: Allows users to self-select their learning mode (Simple, Step-by-Step, Audio, etc.) instantly.

## ✨ Key Features

### 🧠 Adaptation Engine
- **Cognitive Customization**: Instantly rewrites content to be simpler, list-based, or analogy-rich based on user preference.
- **Real-World Analogies**: Automatically generates relatable examples to ground abstract concepts (e.g., explaining Quantum Physics using a spinning coin).
- **Comparison View**: A side-by-side toggle to see the transformation from the original source text.

### 🔊 Multi-Sensory Support
- **Text-to-Speech**: Integrated audio support for auditory learners.
- **Visual Aids**: Context-aware visualizations to support textual explanations.

### 🎨 Accessibility-First Design
- **Calm Interface**: Soft light-blue and off-white palette (`#F8FAFC`) to reduce visual stress.
- **Readable Typography**: Large, clear fonts (Epilogue & Inter) optimized for legibility.
- **Focus Mode**: Minimalist layout that hides distractions while reading.

## 🛠️ Technical Architecture

### Frontend Stack
- **HTML5** - Semantic structure for maximum accessibility compatibility.
- **CSS3** - Custom variable-based design system with Flexbox/Grid layouts.
- **JavaScript (ES6+)** - Modular vanilla JS for high performance and lightweight execution.
- **Web Speech API** - Native browser API for consistent text-to-speech support.

### Design System
- **Responsive Layout**: Mobile-first architecture that adapts to any screen size.
- **Accessible Components**: ARIA-labeling and keyboard navigation support throughout.
- **SaaS Aesthetics**: Professional, clean, and trustworthy visual identity.

## 🏗️ Project Structure

```
src/
├── index.html         # Main application structure (SPA architecture)
├── style.css          # Global design system and responsive styles
├── script.js          # Core application logic, text processing, and DOM manipulation
└── assets/            # Project images and resources
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Edge, Firefox, Safari)
- No server installation required (Client-side architecture)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/edease.git
   cd edease
   ```

2. **Run Locally**
   Simply open `index.html` in your browser.
   
   OR use a local server:
   ```bash
   npx serve .
   ```

3. **Explore**
   - Click "Try a demo" to see pre-loaded examples.
   - Or paste your own text to test the adaptation engine.

## 🌟 Future Roadmap

- [ ] **Backend Integration**: Connect to LLM APIs for dynamic generation on any topic.
- [ ] **User Accounts**: Cloud implementation for saving learning preferences and history.
- [ ] **Document Upload**: Support for PDF and Image analysis (OCR).
- [ ] **Classroom Mode**: Teacher tools to generate accessible variations of lesson plans.

## 📱 Demo & Links

- **🌐 Live Website**: [edease.netlify.app](https://edease.netlify.app/)
- **🎥 Demo Video**: [Watch on YouTube](https://youtu.be/w5q0S1g0K2k)

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

**Empowering education through inclusive design.**
