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

Glioblastoma treatment relies heavily on precise radiotherapy planning, where the accuracy of tumor and organ-at-risk segmentation directly influences treatment outcomes and patient safety. Unfortunately, human errors and inter-expert variability in segmentation are common challenges that can lead to suboptimal dose distributions and compromised clinical outcomes. The current workflow presents significant inefficiencies as time-intensive review processes reduce the effectiveness of radiation oncology teams, while existing systems lack dose-informed feedback mechanisms for segmentation corrections.

Traditional quality assurance approaches focus on geometric accuracy metrics that fail to capture the true clinical impact of segmentation variations. This disconnect between geometric correctness and dosimetric consequences represents a critical gap in current radiotherapy planning workflows, where clinicians need to understand not just whether a segmentation is geometrically accurate, but how variations will affect the actual radiation dose delivered to patients.

## Key Contributions

ASTRA introduces **dose-aware quality assessment** as the first automated method specifically designed to predict the dosimetric impact of segmentation variations in radiotherapy planning. This represents a fundamental shift from geometric-based evaluation to clinically meaningful dose-based assessment. The system provides localized sensitivity mapping that offers spatial understanding of which segmentation regions most critically affect dose distributions, enabling clinicians to prioritize their review efforts where they matter most.

The method is designed for seamless clinical integration into real-world radiotherapy planning workflows, addressing practical deployment concerns that often prevent research innovations from reaching clinical practice. Our comprehensive validation evaluated the system on 100 glioblastoma patients with complete dose planning data, providing robust evidence for clinical effectiveness through quantitative dose impact analysis.

## Methodology

Our deep learning framework enables end-to-end prediction of dose changes directly from segmentation modifications, eliminating the need for time-intensive full dose recalculation. The system employs atomic transformations that simulate realistic segmentation variations through local surface perturbations, ensuring that our predictions reflect clinically relevant scenarios rather than artificial edge cases.

The dose impact modeling component directly predicts organ-at-risk dose distribution changes, providing clinicians with immediately actionable information about the consequences of segmentation decisions. Additionally, our visualization system creates interactive sensitivity maps that support clinical decision-making by highlighting regions where segmentation accuracy is most critical for dose outcomes.

## Results

Our evaluation on 100 glioblastoma patients with complete dose planning data demonstrated strong performance, with high correlation between predicted and actual dose impacts across various segmentation modification scenarios. The system provides clear clinical value by enabling prioritized review of segmentation regions with the highest dosimetric consequences, allowing radiation oncology teams to focus their limited time on areas where precision matters most.

The workflow integration potential shows promise for automated quality assurance within radiotherapy planning systems, where ASTRA could serve as a real-time advisory tool during the contouring process. This capability could significantly enhance both the efficiency and safety of radiotherapy planning by providing immediate feedback about the dose implications of segmentation decisions.

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