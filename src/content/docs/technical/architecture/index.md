---
title: System Architecture
description: AAIE Technical Architecture Overview
---

# AAIE System Architecture

## Overview

AAIE consists of two core AI models working together to support educational assessment:

## AI Detection Model

**Technology**: BERT-based binary classifier  
**Purpose**: Detect AI-generated content in student submissions  
**Features**:
- High accuracy (>85%) with low false positives
- Educational context awareness
- Confidence scoring for teacher review
- Real-time processing (<500ms response)

## Feedback Generation Model

**Technology**: TinyLLaMA-based text generator  
**Purpose**: Generate rubric-aligned feedback for students  
**Features**:
- Context-aware feedback generation
- Rubric alignment and customization
- Explainable AI features
- Multi-format support (essays, code, reports)

## System Flow

```
Student Submission → AI Detection → Feedback Generation → Teacher Review
```

## Integration Points

- **CloudDeakin**: Primary LMS integration
- **OnTrack**: Secondary deployment option
- **API Endpoints**: RESTful APIs for model access
- **Database**: PostgreSQL for user data and logs

## Technology Stack

- **Backend**: Python, FastAPI, PyTorch
- **Models**: BERT, TinyLLaMA, Custom Tokenizers
- **Deployment**: Docker, Cloud Platforms
- **Documentation**: Astro + Starlight
- **Version Control**: Git with Git LFS
