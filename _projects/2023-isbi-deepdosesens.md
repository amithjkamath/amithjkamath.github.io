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

Radiotherapy planning for brain tumors faces significant challenges due to **segmentation variability** that directly impacts treatment quality and patient outcomes. Inter-expert variability in organ-at-risk and target volume delineation remains a persistent problem, compounded by protocol differences and human errors in segmentation processes. These issues often necessitate time-intensive re-planning procedures that can delay treatment and impact patient outcomes.

The clinical workflow currently lacks adequate automated quality assurance mechanisms that can provide dose-aware sensitivity assessment. Traditional geometric metrics fail to capture the true clinical significance of segmentation variations, creating a critical gap between quality assessment and treatment impact. This disconnect highlights the urgent need for automated systems that can evaluate segmentation quality from a dose-impact perspective rather than purely geometric criteria.

## Key Contributions

### ISBI 2023 Study
Our research represents the **first systematic evaluation** of dose prediction model sensitivity to realistic contour variations, addressing a critical gap in understanding how these AI systems behave under clinical conditions. We focused our clinical validation on left optic nerve segmentation due to its high clinical relevance and the significant consequences of radiation exposure to this critical structure.

The study established quantitative metrics through comprehensive evaluation using openKBP challenge metrics, providing standardized benchmarks for model performance. Our correlation analysis revealed a strong correlation (0.921) between predicted and reference dose differences, demonstrating that our models can reliably predict the dosimetric impact of segmentation variations without requiring full dose recalculation.

### Extended Cancers Journal
The extended journal study significantly expanded our analysis to include comprehensive robustness testing with thorough evaluation of out-of-distribution cases that commonly occur in clinical practice. We developed strategies for model improvement through targeted training set updates designed to enhance robustness against realistic clinical variations.

Our research followed established clinical protocols using VMAT planning according to clinical guidelines, ensuring that our findings translate directly to real-world radiotherapy practice. Additionally, we developed a comprehensive quality assurance framework that provides practical guidance for implementing dose-aware contouring evaluation in clinical workflows.

## Methodology

Our approach employed a **cascaded 3D U-Net architecture** specifically designed for volumetric dose prediction, trained on a comprehensive dataset of 125 glioblastoma patients with clinical VMAT plans. The training strategy utilized 60 patients for training, 15 for validation, and 20 for testing, ensuring robust evaluation while maintaining clinical relevance through real patient data.

For sensitivity testing, we implemented realistic inter-expert segmentation variations that reflect the true variability observed in clinical practice rather than artificial perturbations. Our robustness evaluation included systematic testing of worst-case scenarios with out-of-distribution data, providing insights into model behavior under challenging clinical conditions that commonly arise in real-world deployment.

## Key Results

### Model Performance
Our system achieved impressive performance across multiple evaluation metrics. In the ISBI study, we demonstrated dose scores of 0.906 Gy mean absolute error, with the extended Cancers study showing 0.94 Gy. DVH scores reached 1.942 Gy mean DVH score in the ISBI evaluation and 1.95 Gy in the Cancers study, indicating consistent performance across both evaluations.

For sensitivity prediction, our models showed dose changes with a mean error of 1.38 Gy in the Cancers study, demonstrating clinically acceptable accuracy for practical deployment. The correlation analysis revealed a strong 0.921 correlation coefficient between predicted and reference dose differences, providing confidence in the model's ability to accurately assess dosimetric impact without full dose recalculation.

### Clinical Validation
Our validation demonstrated that predicted dose-volume histograms closely matched reference curves, providing clinicians with reliable information for treatment planning decisions. In inter-expert comparison studies, we found that the average prediction dose MAE (2.315 Gy) was remarkably close to inter-expert MAE (2.443 Gy), suggesting that our automated approach performs comparably to human experts.

Through targeted training updates, we achieved significant robustness improvement that enhanced out-of-distribution performance, addressing a critical requirement for clinical deployment. The results demonstrate clear quality assurance potential, showing the feasibility of automated contouring evaluation that could significantly streamline clinical workflows while maintaining safety standards.

## Clinical Impact

This research establishes the foundation for **dose-aware quality assurance** in radiotherapy by enabling automated sensitivity assessment that provides real-time evaluation of dose impact from segmentation variations. This capability represents a significant advancement over traditional geometric-based quality metrics, offering clinicians immediate insight into the clinical consequences of contouring decisions.

The approach supports seamless workflow integration through fast, automated evaluation that can replace time-intensive manual review processes, significantly improving efficiency without compromising safety. Our clinical validation demonstrates accuracy comparable to inter-expert variability, providing confidence that automated systems can match human expert performance while offering greater consistency and availability.

Systematic approaches to handling out-of-distribution scenarios ensure robustness for real-world deployment, where data characteristics may differ from training conditions. The framework enables quality improvement initiatives that enhance both safety and efficiency in radiotherapy planning, potentially reducing treatment delays and improving patient outcomes through more consistent, objective quality assessment.

## Technical Innovation

Our work introduces several novel approaches that advance the state of medical AI deployment. We developed quantitative sensitivity measurement techniques specifically designed for medical AI models under clinical variations, providing methodologies that extend beyond our specific application to broader medical AI systems.

Our robustness testing protocols establish standards for evaluating medical AI systems before clinical deployment, addressing critical safety concerns through systematic evaluation of edge cases and out-of-distribution scenarios. The quality assurance frameworks we developed combine AI prediction capabilities with clinical validation requirements, ensuring that automated systems meet the rigorous standards required for medical applications.

Additionally, we pioneered dose-aware evaluation metrics for segmentation quality assessment that bridge the gap between geometric accuracy and clinical relevance. These metrics provide the foundation for developing AI systems that truly understand and optimize for clinical outcomes rather than abstract mathematical measures.

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
