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

Traditional segmentation quality metrics like Dice score fundamentally fail to capture the true clinical impact of contouring variations in radiotherapy, creating a significant disconnect between evaluation measures and patient safety. As healthcare increasingly relies on automated segmentation tools, the clinical focus has shifted from manual contouring to **quality assessment of segmentation proposals**, requiring evaluation frameworks that understand clinical consequences rather than geometric similarity.

Current evaluation methods demonstrate critical limitations by failing to account for organ-specific dose constraints and clinical priorities that vary significantly between patients and treatment sites. They also cannot incorporate patient-specific anatomy and treatment planning requirements that influence the clinical significance of segmentation variations. Most importantly, these methods fail to capture the true dosimetric consequences of segmentation variations and lack clinical relevance in distinguishing between different types of segmentation errors based on their treatment impact.

## Key Innovations

AutoDoseRank employs a **deep learning-based dose predictor** that estimates dose distributions directly from segmentation variants, eliminating the need for time-intensive full dose recalculation while maintaining clinical accuracy. The system incorporates clinical priority integration that considers organ-specific importance and dose constraints into the ranking process, ensuring that the most clinically significant variations receive appropriate attention.

The framework provides comprehensive patient-level assessment with dose impact estimates across all organs-at-risk, enabling holistic evaluation of segmentation quality from a treatment planning perspective. Expert validation through systematic comparison with experienced radiation oncologists ensures that our automated approach aligns with clinical decision-making patterns while offering improved consistency and efficiency.

## Methodology

Our **deep learning pipeline** utilizes a trained dose prediction model that generates accurate dose maps for segmentation candidates without requiring full treatment planning system recalculation. The ranking framework implements a novel metric that combines dose impact assessment, organ-specific priorities, and clinical constraints into a unified scoring system that reflects real-world clinical decision-making.

Clinical validation involved evaluation on 13 glioblastoma patients with manual segmentation variants, providing realistic test scenarios that reflect the types of variations encountered in clinical practice. Expert comparison studies included head-to-head evaluation against four experienced radiation oncologists, measuring both accuracy and consistency of ranking decisions.

## Results

AutoDoseRank demonstrated **superior performance** by outperforming 3 out of 4 radiation oncology experts in ranking accuracy, while showing better inter-rater agreement than human experts as measured by Kendall's Tau evaluation. The system maintained strong correlation with ground truth dosimetric rankings across diverse patient scenarios and anatomical variations.

The clinical relevance of our approach was validated through its ability to identify clinically significant segmentation variations while efficiently filtering out changes with minimal dose impact. Significant efficiency gains were achieved through automated ranking that provides instant feedback compared to time-intensive expert review processes, potentially transforming clinical workflows in radiotherapy planning departments.

## Validation Metrics

Our evaluation employed **Kendall's Tau** to measure ranking correlation with ground truth dosimetric impact, providing a robust assessment of how well our automated system reproduces clinically relevant ranking decisions. We also utilized the Normalized Distance-based Performance Measure (NDPM) for comprehensive ranking quality assessment that accounts for both accuracy and ranking consistency.

Ablation studies confirmed the significant value of incorporating organ-at-risk priorities into the ranking framework, demonstrating that clinical context substantially improves ranking quality compared to purely dose-based metrics. These studies validated our hypothesis that clinical priorities must be integrated into automated evaluation systems to achieve clinically meaningful results.

## Clinical Impact

AutoDoseRank represents a significant advancement toward **clinically relevant quality assurance** for automated segmentation in radiotherapy, moving beyond geometric accuracy to dose-based evaluation that directly relates to patient safety and treatment outcomes. The framework reduces clinician workload through automated, dose-informed ranking that eliminates the need for manual review of every segmentation candidate.

Patient safety is enhanced through systematic prioritization of clinically significant segmentation variations, ensuring that variations with the greatest potential impact receive immediate attention. Workflow efficiency improvements include instant, consistent quality assessment that replaces subjective manual evaluation with objective, quantitative feedback based on predicted dose consequences.

The system supports clinical decision-making by providing quantitative, dose-based feedback that helps clinicians understand not just whether a segmentation is different, but whether those differences matter for treatment outcomes. This capability is particularly valuable in busy clinical environments where time constraints require efficient prioritization of quality assurance efforts.

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