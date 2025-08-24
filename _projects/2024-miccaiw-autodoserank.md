---
layout: page
title: AutoDoseRank - Dosimetry-informed Segmentation Ranking
description: Automated ranking system for radiotherapy segmentation candidates using clinical dose impact
img: assets/img/miccaiw-autodoserank.png
importance: 2
category: papers
---

## Overview

[![Project Repository](https://img.shields.io/badge/GitHub-Repository-blue?style=flat-square&logo=github)](https://github.com/amithjkamath/autodoserank)
[![Paper](https://img.shields.io/badge/Paper-Springer-green?style=flat-square)](https://link.springer.com/chapter/10.1007/978-3-031-73376-5_21)

AutoDoseRank introduces a novel framework for ranking segmentation candidates in radiotherapy based on their **predicted dosimetric impact** rather than geometric similarity metrics. This approach addresses the critical gap between traditional segmentation evaluation and clinical consequences in radiation therapy planning.

**Published at:** MICCAI Workshop on Cancer Prevention through Early Detection (CaPTion) 2024

## Clinical Challenge

Traditional segmentation quality metrics like Dice score fail to capture the true clinical impact of contouring variations in radiotherapy. With increasing reliance on automated segmentation tools, clinical focus has shifted from manual contouring to **quality assessment of segmentation proposals**. Current evaluation methods don't account for:

- **Organ-specific dose constraints** and clinical priorities
- **Patient-specific anatomy** and treatment planning requirements  
- **True dosimetric consequences** of segmentation variations
- **Clinical relevance** of different types of segmentation errors

## Key Innovations

- **Dosimetric Impact Prediction**: Deep learning-based dose predictor estimates dose distributions from segmentation variants
- **Clinical Priority Integration**: Incorporates organ-specific importance and dose constraints into ranking
- **Patient-Level Assessment**: Provides comprehensive dose impact estimates across all organs-at-risk
- **Expert Validation**: Systematic comparison with experienced radiation oncologists

## Methodology

**Deep Learning Pipeline**: Trained dose prediction model generates dose maps for segmentation candidates  
**Ranking Framework**: Novel metric combining dose impact, organ priorities, and clinical constraints  
**Clinical Validation**: Evaluation on 13 glioblastoma patients with manual segmentation variants  
**Expert Comparison**: Head-to-head comparison with four experienced radiation oncologists

## Results

- **Superior Performance**: AutoDoseRank outperformed 3 out of 4 radiation oncology experts
- **Consistency**: Better inter-rater agreement than human experts (Kendall's Tau evaluation)
- **Clinical Relevance**: Strong correlation with ground truth dosimetric rankings
- **Efficiency**: Automated ranking provides instant feedback compared to time-intensive expert review

## Validation Metrics

**Kendall's Tau**: Measures ranking correlation with ground truth dosimetric impact  
**NDPM**: Normalized Distance-based Performance Measure for ranking quality assessment  
**Ablation Studies**: Confirmed value of incorporating organ-at-risk priorities

## Clinical Impact

AutoDoseRank represents a significant advancement toward **clinically relevant quality assurance** for automated segmentation in radiotherapy. The framework:

- **Reduces clinician workload** through automated, dose-informed ranking
- **Enhances patient safety** by prioritizing clinically significant segmentation variations
- **Improves workflow efficiency** with instant, consistent quality assessment
- **Supports clinical decision-making** with quantitative, dose-based feedback

## Citation

```bibtex
@inproceedings{Mercado2024AutoDoseRank,
    title={AutoDoseRank: Automated Dosimetry-Informed Segmentation Ranking for Radiotherapy},
    author={Mercado, Zahira and Kamath, Amith and Poel, Robert and Willmann, Jonas and Ermi{\c{s}}, Ekin and Riggenbach, Elena and Mose, Lucas and Andratschke, Nicolaus and Reyes, Mauricio},
    booktitle={MICCAI Workshop on Cancer Prevention through Early Detection},
    pages={221--230},
    year={2024},
    organization={Springer},
    howpublished={\url{https://link.springer.com/chapter/10.1007/978-3-031-73376-5_21}}
}
```