---
layout: page
title: ASTRA - Atomic Surface Transformations for Radiotherapy QA
description: Deep learning-based dose-aware sensitivity mapping for segmentation quality assurance
img: assets/img/embc-astra-idea.png
importance: 2
category: papers
---

## Overview

[![Project Repository](https://img.shields.io/badge/GitHub-Repository-blue?style=flat-square&logo=github)](https://github.com/amithjkamath/astra)
[![Video Abstract](https://img.shields.io/badge/Video-Abstract-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=vghlJh8ACOY)

ASTRA (Atomic Surface Transformations for Radiotherapy quality Assurance) is an automated deep learning method that predicts the dosimetric impact of local segmentation variations in radiotherapy planning. This approach serves as a dose-aware sensitivity map, enabling clinicians to understand how segmentation corrections affect radiation dose distributions.

**Published at:** IEEE Engineering in Medicine and Biology Conference (EMBC) 2023

## Clinical Problem

Glioblastoma treatment relies heavily on precise radiotherapy planning, where human errors and inter-expert variability in tumor and organ-at-risk segmentation directly impact treatment outcomes. Erroneous segmentations translate to suboptimal dose distributions and clinical outcomes, while time-intensive review processes reduce radiation oncology team efficiency. Current workflows lack dose-informed feedback for segmentation corrections.

## Key Contributions

ASTRA provides dose-aware quality assessment as the first automated method to predict dosimetric impact of segmentation variations, along with localized sensitivity mapping that provides spatial understanding of which segmentation regions most affect dose distributions. The system is designed for clinical integration in real-world radiotherapy planning workflows and includes comprehensive validation evaluated on 100 glioblastoma patients with quantitative dose impact analysis.

## Methodology

**Deep Learning Framework**: End-to-end prediction of dose changes from segmentation modifications  
**Atomic Transformations**: Local surface perturbations to simulate realistic segmentation variations  
**Dose Impact Modeling**: Direct prediction of organ-at-risk dose distribution changes  
**Visualization System**: Interactive sensitivity maps for clinical decision support

## Results

The evaluation included a dataset of 100 glioblastoma patients with complete dose planning data, demonstrating strong performance with correlation between predicted and actual dose impacts. The system provides clinical value by enabling prioritized review of segmentation regions with highest dosimetric consequences and offers workflow integration potential for automated quality assurance within radiotherapy planning systems.

## Impact

ASTRA represents a significant step toward **dose-informed segmentation quality assurance**, moving beyond geometric metrics to clinically meaningful dose-based evaluation. This approach has strong potential for integration into broader automated QA systems in radiotherapy workflows.

## Citation

```bibtex
@inproceedings{kamath2023astra,
    title={ASTRA: Atomic Surface Transformations for Radiotherapy quality Assurance},
    author={Kamath, Amith and Poel, Robert and Willmann, Jonas and Ermis, Ekin and Andratschke, Nicolaus and Reyes, Mauricio},
    booktitle={45th IEEE Engineering in Medicine and Biology Conference (EMBC)},
    year={2023},
    organization={IEEE}
}
```