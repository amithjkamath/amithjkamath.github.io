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

Radiotherapy planning for brain tumors faces significant challenges from **segmentation variability** including inter-expert variability in organ-at-risk and target volume delineation, protocol differences and human errors in segmentation, time-intensive re-planning due to segmentation quality issues, delayed treatment impacting patient outcomes, and the need for automated quality assurance with dose-aware sensitivity.

## Key Contributions

### ISBI 2023 Study
The study represents the first systematic evaluation of dose prediction model sensitivity to realistic contour variations, with clinical validation focusing on left optic nerve segmentation due to high clinical relevance. The research included quantitative metrics through comprehensive evaluation using openKBP challenge metrics and correlation analysis showing strong correlation (0.921) between predicted and reference dose differences.

### Extended Cancers Journal
The extended journal study included comprehensive robustness testing with evaluation of out-of-distribution cases and model improvement through targeted training set updates to enhance robustness. The research followed clinical protocols using VMAT planning according to established clinical guidelines and developed a quality assurance framework for practical implementation of dose-aware contouring evaluation.

## Methodology

**Deep Learning Architecture**: Cascaded 3D U-Net for volumetric dose prediction  
**Training Dataset**: 125 glioblastoma patients with clinical VMAT plans  
**Validation Strategy**: 60 training, 15 validation, 20 test cases  
**Sensitivity Testing**: Realistic inter-expert segmentation variations  
**Robustness Evaluation**: Worst-case scenarios with out-of-distribution data

## Key Results

### Model Performance
The system achieved strong performance with dose scores of 0.906 Gy mean absolute error (ISBI) and 0.94 Gy (Cancers), DVH scores of 1.942 Gy mean DVH score (ISBI) and 1.95 Gy (Cancers), sensitivity prediction with dose changes having mean error of 1.38 Gy (Cancers), and correlation showing 0.921 correlation coefficient between predicted and reference dose differences.

### Clinical Validation
The validation demonstrated DVH matching where predicted dose-volume histograms closely matched reference curves, inter-expert comparison showing average prediction dose MAE (2.315 Gy) close to inter-expert MAE (2.443 Gy), robustness improvement through targeted training updates that enhanced out-of-distribution performance, and quality assurance potential demonstrating feasibility for automated contouring evaluation.

## Clinical Impact

This research establishes the foundation for **dose-aware quality assurance** in radiotherapy through automated sensitivity enabling real-time assessment of dose impact from segmentation variations. The approach supports workflow integration with fast, automated evaluation replacing time-intensive manual review, provides clinical validation with demonstrated accuracy comparable to inter-expert variability, ensures robustness through systematic approaches to handling out-of-distribution scenarios, and enables quality improvement with enhanced safety and efficiency in radiotherapy planning.

## Technical Innovation

The work introduces novel approaches for quantitative sensitivity measurement of AI models to clinical variations, robustness testing protocols for medical AI deployment, quality assurance frameworks combining AI prediction with clinical validation, and dose-aware evaluation metrics for segmentation quality assessment.

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
