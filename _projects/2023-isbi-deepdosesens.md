---
layout: page
title: Sensitivity of Deep Learning Dose Prediction to Contour Variability
description: Evaluating robustness and sensitivity of dose prediction models for quality assurance in radiotherapy
img: assets/img/isbi-problem-statement.png
importance: 1
category: papers
---

## Overview

[![Project Repository](https://img.shields.io/badge/GitHub-Repository-blue?style=flat-square&logo=github)](https://github.com/amithjkamath/deepdosesens)
[![Video Abstract](https://img.shields.io/badge/Video-Abstract-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=Lz5-n4lA3QM)
[![ISBI Paper](https://img.shields.io/badge/Paper-ISBI%202023-blue?style=flat-square)](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10230559)
[![Journal Paper](https://img.shields.io/badge/Journal-Cancers-green?style=flat-square)](https://www.mdpi.com/2072-6694/15/17/4226)

This research evaluates the sensitivity and robustness of deep learning-based dose prediction models to realistic segmentation variations, establishing their potential for automated quality assurance in radiotherapy planning workflows.

**Published at:** IEEE International Symposium on Biomedical Imaging (ISBI) 2023  
**Extended Journal:** Cancers 2023

## Clinical Motivation

Radiotherapy planning for brain tumors faces significant challenges from **segmentation variability**:

- **Inter-expert variability** in organ-at-risk and target volume delineation
- **Protocol differences** and **human errors** in segmentation
- **Time-intensive re-planning** due to segmentation quality issues
- **Delayed treatment** impacting patient outcomes
- **Need for automated quality assurance** with dose-aware sensitivity

## Key Contributions

### ISBI 2023 Study
- **Sensitivity Analysis**: First systematic evaluation of dose prediction model sensitivity to realistic contour variations
- **Clinical Validation**: Focus on left optic nerve segmentation due to high clinical relevance
- **Quantitative Metrics**: Comprehensive evaluation using openKBP challenge metrics
- **Correlation Analysis**: Strong correlation (0.921) between predicted and reference dose differences

### Extended Cancers Journal
- **Robustness Testing**: Comprehensive evaluation with out-of-distribution cases
- **Model Improvement**: Targeted training set updates to enhance robustness
- **Clinical Protocol**: VMAT planning according to established clinical guidelines
- **Quality Assurance Framework**: Practical implementation for dose-aware contouring evaluation

## Methodology

**Deep Learning Architecture**: Cascaded 3D U-Net for volumetric dose prediction  
**Training Dataset**: 125 glioblastoma patients with clinical VMAT plans  
**Validation Strategy**: 60 training, 15 validation, 20 test cases  
**Sensitivity Testing**: Realistic inter-expert segmentation variations  
**Robustness Evaluation**: Worst-case scenarios with out-of-distribution data

## Key Results

### Model Performance
- **Dose Score**: 0.906 Gy mean absolute error (ISBI), 0.94 Gy (Cancers)
- **DVH Score**: 1.942 Gy mean DVH score (ISBI), 1.95 Gy (Cancers)
- **Sensitivity**: Predicted dose changes with mean error of 1.38 Gy (Cancers)
- **Correlation**: 0.921 correlation coefficient between predicted and reference dose differences

### Clinical Validation
- **DVH Matching**: Predicted dose-volume histograms closely matched reference curves
- **Inter-Expert Comparison**: Average prediction dose MAE (2.315 Gy) close to inter-expert MAE (2.443 Gy)
- **Robustness Improvement**: Targeted training updates enhanced out-of-distribution performance
- **Quality Assurance Potential**: Demonstrated feasibility for automated contouring evaluation

## Clinical Impact

This research establishes the foundation for **dose-aware quality assurance** in radiotherapy:

- **Automated Sensitivity**: Real-time assessment of dose impact from segmentation variations
- **Workflow Integration**: Fast, automated evaluation replacing time-intensive manual review
- **Clinical Validation**: Demonstrated accuracy comparable to inter-expert variability
- **Robustness Assurance**: Systematic approach to handling out-of-distribution scenarios
- **Quality Improvement**: Enhanced safety and efficiency in radiotherapy planning

## Technical Innovation

The work introduces novel approaches for:
- **Quantitative sensitivity measurement** of AI models to clinical variations
- **Robustness testing protocols** for medical AI deployment
- **Quality assurance frameworks** combining AI prediction with clinical validation
- **Dose-aware evaluation metrics** for segmentation quality assessment

## Citations

### ISBI 2023 Paper
```bibtex
@inproceedings{Kamath2023HowSensitive,
    title={How sensitive are Deep Learning based Radiotherapy Dose Prediction Models to Variability in Organs at Risk Segmentation?},
    author={Kamath, Amith and Poel, Robert and Willmann, Jonas and Andratschke, Nicolaus and Reyes, Mauricio},
    booktitle={20th IEEE International Symposium on Biomedical Imaging (ISBI)},
    year={2023},
    organization={IEEE}
}
```

### Cancers 2023 Journal
```bibtex
@article{Poel2023Deep,
    title={Deep-learning-based dose predictor for glioblastoma--assessing the sensitivity and robustness for dose awareness in contouring},
    author={Poel, Robert and Kamath, Amith J and Willmann, Jonas and Andratschke, Nicolaus and Ermi{\c{s}}, Ekin and Aebersold, Daniel M and Manser, Peter and Reyes, Mauricio},
    journal={Cancers},
    volume={15},
    number={17},
    pages={4226},
    year={2023},
    publisher={MDPI}
}
```
