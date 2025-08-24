---
layout: page
title: Radiation Oncologists vs Deep Learning Dose Prediction
description: Comparative study of expert clinicians and AI models for dosimetric impact assessment in radiotherapy
img: assets/img/midl-radonc-vs-dldp.png
importance: 1
category: papers
---

## Overview

[![Project Repository](https://img.shields.io/badge/GitHub-Repository-blue?style=flat-square&logo=github)](https://github.com/ubern-mia/radonc-vs-dldp)
[![Video Presentation](https://img.shields.io/badge/Video-MIDL%202024-red?style=flat-square&logo=youtube)](https://youtu.be/Co9yUIAw6H0?t=3587)
[![MIDL Paper](https://img.shields.io/badge/Paper-MIDL%202024-blue?style=flat-square)](https://openreview.net/forum?id=SlMMyPqQTm)
[![Journal Paper](https://img.shields.io/badge/Journal-Green%20Journal-green?style=flat-square)](https://www.sciencedirect.com/science/article/pii/S0167814025045037)

This research compares the performance of radiation oncologists with deep learning-based dose prediction models for estimating the dosimetric impact of segmentation variations in brain tumor radiotherapy planning.

**Published at:** Medical Imaging with Deep Learning Conference (MIDL) 2024 *(Oral - 18% acceptance rate)*  
**Extended Journal:** Radiotherapy and Oncology (Green Journal) 2025

## Clinical Problem

Current segmentation quality evaluation in radiotherapy relies primarily on **geometric correctness metrics** that fail to capture the true **clinical consequences** of segmentation variations. This creates a significant gap between quality assessment and actual treatment impact, where:

- Geometry-driven metrics cannot characterize potentially detrimental dosimetric effects
- Manual expert evaluation is time-intensive and shows high inter-evaluator variability  
- Clinical decision-making lacks quantitative dose-based feedback
- Automated segmentation tools require clinically meaningful quality assessment

## Key Innovations

### MIDL 2024 Study
- **AI vs Expert Comparison**: First systematic comparison of deep learning dose prediction with clinical expert assessment
- **Dosimetric Quality Metrics**: Novel evaluation framework based on actual dose impact rather than geometric similarity
- **Clinical Validation**: 54 contour variants across brain tumor treatment planning scenarios
- **Efficiency Analysis**: Quantified time savings and accuracy improvements

### Extended Journal Study
- **Large-Scale Survey**: 4 radiation oncologists and 3 medical physicists
- **Inter-Evaluator Analysis**: Comprehensive investigation of clinical decision-making variability
- **Systematic Evaluation**: 54 glioblastoma target volume variations across 14 patients
- **Decision Pattern Analysis**: Understanding of expert assessment inconsistencies

## Methodology

**Deep Learning Pipeline**: Trained dose prediction model on clinical treatment planning data  
**Expert Evaluation**: Systematic assessment by experienced radiation oncologists and medical physicists  
**Ground Truth Validation**: Standardized treatment plans generated using clinical TPS (Eclipse)  
**Statistical Analysis**: Cohen's Kappa for inter-evaluator agreement, correlation analysis

## Key Results

### MIDL 2024 Findings
- **Superior Performance**: Deep learning model outperformed clinical experts in estimating dosimetric impact
- **Accuracy Improvement**: Higher correlation with ground truth dose distributions
- **Significant Time Savings**: Automated assessment vs. manual expert review
- **Consistent Evaluation**: Reduced variability compared to human experts

### Extended Journal Results
- **Substantial Variability**: Cohen's Kappa values ranging from weak to moderate (0.33–0.74)
- **Systematic Overestimation**: 46% of "no change" variations misclassified as "worse"
- **Conservative Bias**: No evaluator identified any contour variations as "better" despite 4 cases being objectively better
- **Clinical Inefficiency**: Potential for unnecessary contour corrections due to overestimation

## Clinical Impact

This research provides compelling evidence for integrating **AI-based dose prediction** into radiotherapy quality assurance workflows:

- **Objective Assessment**: Quantitative, dose-based evaluation replacing subjective geometric metrics
- **Workflow Efficiency**: Automated assessment reduces review time and clinical burden
- **Improved Consistency**: Standardized evaluation reduces inter-evaluator variability
- **Enhanced Safety**: More accurate identification of clinically significant segmentation errors
- **Cost-Effectiveness**: Reduced unnecessary corrections and improved resource utilization

## Citations

### MIDL 2024 Paper
```bibtex
@inproceedings{Kamath2024Comparing,
    title={Comparing the Performance of Radiation Oncologists versus a Deep Learning Dose Predictor to Estimate Dosimetric Impact of Segmentation Variations for Radiotherapy},
    author={Kamath, Amith and Mercado, Zahira and Poel, Robert and Willmann, Jonas and Ermi{\c{s}}, Ekin and Riggenbach, Elena and Andratschke, Nicolaus and Reyes, Mauricio},
    booktitle={Medical Imaging with Deep Learning},
    year={2024},
    organization={PMLR},
    howpublished={\url{https://openreview.net/forum?id=SlMMyPqQTm}}
}
```

### Radiotherapy and Oncology 2025
```bibtex
@article{Willmann2025Predicting,
    title={Predicting the impact of target volume contouring variations on the organ at risk dose: results of a qualitative survey},
    author={Willmann, Jonas and Kamath, Amith and Poel, Robert and Riggenbach, Elena and Mose, Lucas and Bertholet, Jenny and Muller, Silvan and Schmidhalter, Daniel and Andratschke, Nicolaus and Ermi{\c{s}}, Ekin and others},
    journal={Radiotherapy and Oncology},
    pages={110999},
    year={2025},
    publisher={Elsevier}
}
```
