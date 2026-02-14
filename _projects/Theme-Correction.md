---
layout: page
title:
description:
img: assets/img/dose-awareness.png
importance: 3
category: themes
related_publications: Willmann2025Predicting, Kamath2024Comparing, Mercado2024AutoDoseRank
---

<div class="text-center mt-5">
  <h1 class="display-4 mb-4">Clinician-AI Performance Comparison on Contour Corrections</h1>
  <h3 class="mb-4">Evaluating how deep learning models compare to human experts in predicting clinical impact of segmentation variations</h3>
  
  <div class="mt-4 mb-4">
    <span class="badge bg-primary me-2">Radiotherapy Quality Assurance</span>
    <span class="badge bg-secondary me-2">Deep Learning</span>
    <span class="badge bg-success me-2">Clinical Validation</span>
  </div>
</div>

---

## Abstract

In radiation therapy, segmentation accuracy directly impacts treatment outcomes. While automated segmentation methods promise efficiency and consistency, evaluating their quality remains challenging. Traditional geometric metrics (Dice, Hausdorff distance) fail to capture what matters clinically: how segmentation errors affect radiation dose delivery.

This research addresses this gap by developing and validating methods that assess segmentation quality through clinical dosimetry. We demonstrate that deep learning models can predict dosimetric impact more accurately and consistently than expert radiation oncologists, revealing concerning patterns in human expert assessment including poor inter-rater agreement (Cohen's κ: 0.33–0.74) and systematic conservative biases.

Our work establishes the foundation for AI-based quality assurance systems that provide objective, dose-informed segmentation evaluation for safer, more efficient radiotherapy planning.

<div class="row mt-4 mb-4">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/dose-awareness.png" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  Dose-aware quality assessment framework comparing clinician and AI performance.
</div>

## Introduction

### The Problem with Geometric Metrics

Medical image segmentation has traditionally relied on geometric metrics like Dice Similarity Coefficient and Hausdorff Distance. These metrics offer mathematical precision and computational efficiency, making them attractive for algorithm development. However, they suffer from an inherent limitation: **they assume all spatial errors carry equal clinical significance**.

In radiotherapy, this assumption is fundamentally flawed. A small contour variation in a high-dose region may have profound clinical consequences, while a larger error in a low-dose area might be insignificant. The relationship between geometric accuracy and clinical impact is complex, context-dependent, and influenced by treatment technique, anatomical structure, and dose distribution.

### The Clinical Challenge

Our research revealed a striking finding: **radiation oncologists themselves struggle to visually predict which contour variations will cause clinically significant dosimetric changes**. This underscores the urgent need for automated computational approaches that can accurately assess clinical implications of segmentation errors.

## Key Research Contributions

### 1. Clinician vs AI Performance Study

Our MIDL 2024 study {% cite Kamath2024Comparing %} and extended Radiotherapy & Oncology 2025 journal {% cite Willmann2025Predicting %} provided the **first systematic comparison** of deep learning dose prediction versus clinical expert assessment.

**Key Findings:**
- Deep learning models **outperformed radiation oncologists** in estimating dosimetric impact
- Higher correlation with ground truth dose distributions
- **Substantially reduced variability** compared to human experts
- Completed assessments in seconds vs minutes/hours

**Expert Variability Analysis:**
- Cohen's Kappa values: **0.33–0.74** (weak to moderate agreement)
- **46% false positive rate**: Equivalent variations incorrectly classified as "worse"
- **Conservative bias**: No expert identified objectively superior variations
- Implications for unnecessary clinical corrections and resource waste

### 2. AutoDoseRank Framework

AutoDoseRank {% cite Mercado2024AutoDoseRank %} introduced automated dosimetry-informed segmentation ranking for radiotherapy quality assurance.

**Innovation:**
- Deep learning-based dose predictor eliminating need for full dose recalculation
- Clinical priority integration considering organ-specific importance
- Patient-level assessment across all organs-at-risk

**Performance:**
- **Outperformed 3 of 4 radiation oncology experts** in ranking accuracy
- Better inter-rater agreement (Kendall's Tau) than human experts
- Sub-second inference enabling real-time clinical integration

### 3. Automated Quality Assurance Integration

Our work establishes frameworks for integrating AI-based dose prediction into clinical workflows:

- **Objective assessment** replacing subjective geometric metrics
- **Workflow efficiency** through instant, automated evaluation
- **Improved consistency** reducing harmful inter-evaluator variability
- **Enhanced safety** through accurate identification of significant errors
- **Cost-effectiveness** via reduced unnecessary corrections

## Methods and Approach

### Deep Learning Dose Prediction

Our approach employs deep learning models trained on clinical treatment planning data to predict dose distributions without requiring full physics-based simulation. This enables:

- **Rapid assessment**: Dose prediction in seconds vs hours
- **Accurate sensitivity**: Captures dosimetric impact of contour variations
- **Clinical validation**: Evaluated against ground truth treatment plans

### Clinical Validation Studies

**Multi-Institutional Survey:**
- 4 radiation oncologists and 3 medical physicists
- 54 glioblastoma target volume variations across 14 patients
- Statistical analysis: Cohen's Kappa, correlation analysis, pattern analysis

**Performance Benchmarking:**
- Head-to-head comparison: AI vs expert clinicians
- Kendall's Tau ranking correlation
- Normalized Distance-based Performance Measure (NDPM)

### Quality Assurance Framework

- Organ-specific priority integration
- Patient-level comprehensive assessment
- Uncertainty quantification for clinical confidence
- Real-time feedback capabilities

## Conclusion

### Key Achievements

This research establishes that **AI-based dose prediction provides more accurate and consistent dosimetric impact assessment than expert clinicians**, addressing a critical gap in radiotherapy quality assurance. Key achievements include:

1. **First systematic clinician-AI comparison** demonstrating AI superiority
2. **Identification of concerning patterns** in expert assessment (poor agreement, systematic biases)
3. **Practical framework** for automated, dose-informed quality assurance
4. **Clinical validation** across multiple institutions and expert clinicians

### Clinical Impact

The integration of AI-based dose prediction into radiotherapy workflows offers:

- **Objective evaluation** replacing subjective geometric assessment
- **Improved efficiency** through instant automated feedback
- **Enhanced safety** via consistent, accurate dosimetric evaluation
- **Resource optimization** by reducing unnecessary corrections
- **Clinical decision support** with quantitative dose-based insights

### Future Directions

Promising future research directions include:

- **Multi-modal integration**: Incorporating functional imaging and temporal data
- **Real-time contouring feedback**: Interactive dose-aware editing tools
- **Outcome-based validation**: Linking segmentation quality to patient outcomes
- **Adaptive quality assurance**: Personalized evaluation based on patient characteristics
- **Uncertainty quantification**: Enhanced confidence estimation for clinical trust

By continuing to bridge computational methods with clinical needs, we advance toward safer, more efficient, and more effective radiation therapy through intelligent quality assurance systems.
