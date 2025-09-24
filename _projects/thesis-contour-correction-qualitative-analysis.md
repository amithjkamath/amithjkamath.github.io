---
layout: page
title: Dosimetric-Aware Quality Assessment of Medical Image Segmentation
description: Evaluating radiotherapy contour quality by linking geometric accuracy to clinical outcomes.
img: assets/img/dose-awareness.png
importance: 1
category: themes
related_publications: true
---

Medical image segmentation quality assessment in radiotherapy is pivotal, merging computer vision, medical physics, and clinical practice. Traditional geometric metrics are giving way to dosimetric-aware methods that prioritize clinical impact. This overview examines current approaches, their limitations, and emerging techniques revolutionizing segmentation evaluation in radiation oncology.

---

## Table of Contents

- [Introduction and Clinical Context](#introduction-and-clinical-context)
- [The Traditional Geometric Paradigm](#the-traditional-geometric-paradigm)
  - [Overlap-Based Metrics](#overlap-based-metrics)
  - [Distance-Based Metrics](#distance-based-metrics)
  - [Fundamental Limitations](#fundamental-limitations)
- [The Dosimetric Impact Perspective](#the-dosimetric-impact-perspective)
  - [Clinical Consequences of Contour Variations](#clinical-consequences-of-contour-variations)
  - [Dosimetric Evaluation Methodologies](#dosimetric-evaluation-methodologies)
  - [Toward Clinically Relevant Assessment](#toward-clinically-relevant-assessment)
- [Current Quality Assurance Frameworks](#current-quality-assurance-frameworks)
  - [Clinical Acceptability Criteria](#clinical-acceptability-criteria)
  - [Automated Segmentation Validation](#automated-segmentation-validation)
- [Our Research Contributions](#our-research-contributions)
  - [Human Expert Performance in Dosimetric Impact Prediction](#human-expert-performance-in-dosimetric-impact-prediction)
  - [Automated Dosimetric Quality Assessment](#automated-dosimetric-quality-assessment)
- [Future Directions and Research Opportunities](#future-directions-and-research-opportunities)

---

## Introduction and Clinical Context

Radiation therapy demands precise contouring of anatomical structures to optimize tumor targeting while sparing healthy tissues. Segmentation quality directly affects treatment outcomes, yet traditional geometric metrics often fail to reflect clinical relevance. Dosimetric-aware assessment, focusing on dose distribution impacts, is emerging as a critical approach, especially as AI-driven segmentation tools gain prominence. This shift addresses inter-observer variability and supports personalized, clinically relevant quality assurance.

---

## The Traditional Geometric Paradigm

Geometric metrics have long dominated segmentation evaluation but are increasingly inadequate for clinical needs.

### Overlap-Based Metrics

- **Dice Similarity Coefficient (DSC)**: Measures overlap as DSC = 2|A ∩ B| / (|A| + |B|). Sensitive to structure size, it often misrepresents clinical significance.
- **Jaccard Index**: Jaccard = |A ∩ B| / |A ∪ B|. Closely related to DSC, it is more conservative.
- **Sensitivity and Specificity**: Highlight under- or over-segmentation but struggle with class imbalance in medical images.

### Distance-Based Metrics

- **Hausdorff Distance (HD)**: Captures maximum boundary distance, overly sensitive to outliers.
- **95th Percentile Hausdorff Distance (HD95)**: More robust, focusing on the 95th percentile of distances.
- **Mean Surface Distance (MSD)**: Averages boundary distances for balanced assessment.

### Fundamental Limitations

Geometric metrics suffer from scale dependency, clinical irrelevance, and ignorance of spatial context. They are sensitive to image resolution and lack universal thresholds, limiting their utility in clinical settings.

---

## The Dosimetric Impact Perspective

Dosimetric-aware evaluation prioritizes clinical outcomes over geometric accuracy, assessing contour variations' effects on dose distributions.

### Clinical Consequences of Contour Variations

Contour errors impact dose-volume histograms, tumor control, and normal tissue risks. Inter-observer variability varies by structure, with clearer organs like the bladder showing higher agreement than complex targets like the prostate. Dosimetric impact depends on a structure’s proximity to high-dose regions, with subtle errors in critical areas potentially causing significant clinical consequences.

### Dosimetric Evaluation Methodologies

- **Standard Metrics**: Include V95%, Homogeneity Index (D5/D95), and Conformity Index, adhering to ICRU, RTOG, and QUANTEC guidelines.
- **Novel Metrics**: Coverage with Dosimetric Concordance Index and generalized conformity indices link contour variations to dosimetric outcomes.
- **Automated Assessment**: AI-driven tools achieve dose differences (~4.8%) comparable to human variability, enhancing efficiency.

### Toward Clinically Relevant Assessment

Dosimetric-aware methods integrate multi-scale data, quantify uncertainty, and correlate with outcomes, enabling personalized and automated quality assurance.

---

## Current Quality Assurance Frameworks

### Clinical Acceptability Criteria

Clinical acceptability balances precision with practicality, guided by ICRU, RTOG, and QUANTEC standards. A three-tier framework categorizes contours as acceptable, minorly editable, or unacceptable. Structure-specific variability and target vs. OAR differences necessitate tailored protocols.

### Automated Segmentation Validation

AI-generated contours reduce delineation time (25.9 to 5.4 minutes) while maintaining dosimetric accuracy. Validation focuses on structures near high-dose regions, incorporating uncertainty quantification and adaptive protocols to optimize expert review.

---

## Our Research Contributions

### Human Expert Performance in Dosimetric Impact Prediction

{% cite Willmann2025Predicting %}

Our study revealed that radiation oncologists struggle to predict dosimetric impact from contour variations, overestimating insignificant errors and underestimating critical ones. This highlights the need for automated tools over visual inspection.

### Automated Dosimetric Quality Assessment

{% cite Mercado2024AutoDoseRank %}

Our AutoDoseRank system uses deep learning to rank segmentations by dosimetric impact, achieving high accuracy (ρ > 0.8) and sub-second inference. It integrates with clinical workflows, offering interpretable outputs and scalability.

---

## Future Directions and Research Opportunities

Future work includes multi-modal and temporal integration, advanced uncertainty quantification, and AI-driven real-time assessment. Personalized protocols, outcome correlations, and global standardization will enhance clinical impact. Interdisciplinary efforts in human factors, economics, and ethics are crucial for successful implementation, aiming for integrated, predictive, and precision-focused quality assurance.