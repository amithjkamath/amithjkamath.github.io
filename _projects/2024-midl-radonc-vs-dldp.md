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

Current segmentation quality evaluation in radiotherapy relies primarily on **geometric correctness metrics** that fundamentally fail to capture the true **clinical consequences** of segmentation variations. This creates a significant and dangerous gap between quality assessment and actual treatment impact, where traditional evaluation methods focus on spatial accuracy without considering how these variations translate to radiation dose delivery.

The clinical workflow faces several critical challenges that compromise both efficiency and safety. Geometry-driven metrics cannot characterize potentially detrimental dosimetric effects that may occur even when segmentations appear geometrically reasonable. Manual expert evaluation, while more clinically informed, proves time-intensive and demonstrates high inter-evaluator variability that undermines consistency in quality assessment.

Clinical decision-making currently lacks quantitative dose-based feedback, forcing clinicians to make subjective judgments about segmentation quality without understanding the dosimetric implications. As automated segmentation tools become increasingly prevalent in clinical practice, they require clinically meaningful quality assessment methods that can bridge the gap between algorithmic output and clinical relevance.

## Key Innovations

### MIDL 2024 Study
Our study represents the **first systematic comparison** of deep learning dose prediction with clinical expert assessment, establishing a new paradigm for evaluating automated systems against human expertise in radiotherapy planning. We introduced novel dosimetric quality metrics based on actual dose impact rather than geometric similarity, providing a more clinically relevant foundation for quality assessment.

The research included comprehensive clinical validation with 54 contour variants across brain tumor treatment planning scenarios, ensuring that our findings reflect real-world clinical conditions. Additionally, we conducted quantified efficiency analysis that measured both time savings and accuracy improvements, providing concrete evidence for the practical benefits of automated dose-based evaluation.

### Extended Journal Study
The extended study significantly expanded our investigation through a large-scale survey involving 4 radiation oncologists and 3 medical physicists, providing robust evidence for the variability in human expert assessment. Our comprehensive inter-evaluator analysis investigated the patterns and sources of clinical decision-making variability that affect current quality assurance practices.

The systematic evaluation encompassed 54 glioblastoma target volume variations across 14 patients, providing sufficient statistical power to draw meaningful conclusions about expert consistency and automated system performance. Our decision pattern analysis revealed important insights into expert assessment inconsistencies that highlight the need for more objective evaluation methods.

## Methodology

Our **deep learning pipeline** was trained on clinical treatment planning data to enable accurate dose prediction without requiring full dose recalculation, significantly reducing the time required for quality assessment. Expert evaluation involved systematic assessment by experienced radiation oncologists and medical physicists, providing the clinical standard against which our automated system was compared.

Ground truth validation employed standardized treatment plans generated using clinical TPS (Eclipse), ensuring that our reference standards reflect actual clinical practice rather than theoretical ideals. Statistical analysis included Cohen's Kappa for inter-evaluator agreement assessment and correlation analysis to quantify the relationship between automated predictions and expert assessments.

## Key Results

### MIDL 2024 Findings
The deep learning model demonstrated **superior performance** by outperforming clinical experts in estimating dosimetric impact across multiple evaluation scenarios. Accuracy improvements were evidenced by higher correlation with ground truth dose distributions compared to human expert assessments, suggesting that automated systems can provide more consistent and objective evaluation.

The automated approach delivered significant time savings compared to manual expert review, with quality assessment completed in seconds rather than minutes or hours. Most importantly, the system achieved consistent evaluation with substantially reduced variability compared to human experts, addressing a critical limitation of current clinical practice.

### Extended Journal Results
Our extended study revealed substantial and concerning variability in expert assessment, with Cohen's Kappa values ranging from weak to moderate (0.33–0.74), indicating poor consistency even among experienced clinicians. The results demonstrated systematic overestimation patterns, with 46% of "no change" variations incorrectly classified as "worse," leading to unnecessary clinical concern and potential over-treatment.

A conservative bias was evident across all evaluators, with no expert identifying any contour variations as "better" despite 4 cases being objectively superior based on dosimetric analysis. This systematic bias leads to clinical inefficiency through potential unnecessary contour corrections that consume valuable clinical time and resources without improving patient outcomes.

## Clinical Impact

This research provides compelling evidence for integrating **AI-based dose prediction** into radiotherapy quality assurance workflows, demonstrating clear advantages over traditional approaches in both accuracy and consistency. The objective assessment capability enables quantitative, dose-based evaluation that replaces subjective geometric metrics with clinically meaningful measures directly related to treatment outcomes.

Workflow efficiency improvements through automated assessment can dramatically reduce review time and clinical burden, allowing radiation oncology teams to focus their expertise on complex cases that truly require human judgment. The improved consistency achieved through standardized evaluation reduces harmful inter-evaluator variability that currently undermines quality assurance efforts in many clinical settings.

Enhanced safety measures result from more accurate identification of clinically significant segmentation errors, ensuring that variations with real dosimetric consequences receive appropriate attention while avoiding unnecessary corrections for geometrically different but dosimetrically equivalent segmentations. Cost-effectiveness is achieved through reduced unnecessary corrections and improved resource utilization, as clinical time is directed toward cases where intervention actually improves patient outcomes rather than merely geometric appearance.

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
