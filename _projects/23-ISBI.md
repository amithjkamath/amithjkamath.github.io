---
layout: page
title: 
description: 
img: assets/img/isbi-problem-statement.png
importance: 1
category: papers
---

<div class="text-center mt-5">
  <h1 class="display-4 mb-4">How sensitive are Deep Learning based Radiotherapy Dose Prediction Models to Variability in Organs at Risk Segmentation?</h1>
  
  <div class="authors mb-3">
    <span>Amith Kamath<sup>1</sup></span>, 
    <span>Robert Poel<sup>1</sup></span>, 
    <span>Jonas Willmann<sup>1,2</sup></span>, 
    <span>Nicolaus Andratschke<sup>2</sup></span>, 
    <span>Mauricio Reyes<sup>1</sup></span>
  </div>
  
  <div class="affiliations mb-4">
    <p><sup>1</sup>University of Bern, <sup>2</sup>University Hospital Zurich</p>
  </div>
  
  <div class="publication-links mb-5">
    <a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10230559" class="btn btn-primary btn-sm" target="_blank">
      <i class="fas fa-file-pdf"></i> ISBI 2023 Paper
    </a>
    <a href="https://www.mdpi.com/2072-6694/15/17/4226" class="btn btn-success btn-sm" target="_blank">
      <i class="fas fa-file-pdf"></i> Journal Extension
    </a>
    <a href="https://github.com/amithjkamath/deepdosesens" class="btn btn-dark btn-sm" target="_blank">
      <i class="fab fa-github"></i> Code
    </a>
    <a href="https://www.youtube.com/watch?v=Lz5-n4lA3QM" class="btn btn-danger btn-sm" target="_blank">
      <i class="fab fa-youtube"></i> Video
    </a>
  </div>
  
  <p class="text-muted"><em>IEEE International Symposium on Biomedical Imaging (ISBI) 2023</em></p>
</div>

---

## Abstract

Deep learning models for dose prediction show promise for accelerating radiotherapy planning, but their sensitivity to realistic segmentation variations—a critical factor for clinical deployment—remains poorly understood. This research evaluates whether these AI systems can reliably predict dosimetric impact without requiring time-intensive full dose recalculation.

We trained a cascaded 3D U-Net architecture on 125 glioblastoma patients with clinical VMAT plans, achieving dose prediction accuracy of 0.906 Gy mean absolute error. Critically, our models demonstrated strong correlation (0.921) between predicted and actual dose differences when segmentation varied, suggesting reliable sensitivity assessment for automated quality assurance.

Our ISBI 2023 study established the foundational methodology and results. The extended Cancers 2023 journal expanded this work with comprehensive robustness testing across out-of-distribution scenarios and strategies for model improvement, demonstrating that targeted training updates can significantly enhance clinical reliability.

<div class="row mt-4 mb-4">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/isbi-problem-statement.png" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  Evaluating sensitivity of deep learning dose prediction models to contour variability.
</div>

## Introduction

### Clinical Challenge

Radiotherapy planning for brain tumors confronts persistent challenges from **segmentation variability** that directly impact treatment quality and patient outcomes:

- **Inter-expert variability** in organ-at-risk and target volume delineation
- **Protocol differences and human errors** in segmentation processes
- **Time-intensive re-planning procedures** when errors are discovered
- **Lack of automated quality assurance** with dose-aware sensitivity assessment

Traditional geometric metrics (Dice, Hausdorff distance) fail to capture the true clinical significance of segmentation variations. What matters clinically is not whether a segmentation looks different, but whether that difference affects the radiation dose delivered to critical structures.

### Our Contribution

This research represents the **first systematic evaluation** of dose prediction model sensitivity to realistic contour variations. We demonstrate that deep learning models can predict dosimetric impact with accuracy comparable to inter-expert variability, establishing the foundation for dose-aware quality assurance in clinical radiotherapy workflows.

## Methods

### Model Architecture

We employed a **cascaded 3D U-Net architecture** specifically designed for volumetric dose prediction:

- **Training Data:** 125 glioblastoma patients with clinical VMAT plans
- **Data Split:** 60 training, 15 validation, 20 test patients
- **Clinical Relevance:** Real patient data ensuring practical applicability

### Sensitivity Testing

We implemented **realistic inter-expert segmentation variations** reflecting true clinical variability rather than artificial perturbations. The focus on left optic nerve segmentation provided a clinically relevant test case with significant consequences for treatment outcomes.

### Robustness Evaluation

Systematic testing of **worst-case scenarios** with out-of-distribution data provided insights into model behavior under challenging clinical conditions. We developed strategies for targeted training set updates to improve robustness when deployment scenarios differ from training conditions.

## Results

### Dose Prediction Accuracy

Our models achieved strong performance across standardized evaluation metrics:

- **ISBI Study:** 0.906 Gy mean absolute error, 1.942 Gy DVH score
- **Cancers Study:** 0.94 Gy MAE, 1.95 Gy DVH score
- **Consistency:** Comparable performance across both evaluations

### Sensitivity Prediction

Critical finding: **0.921 correlation** between predicted and reference dose differences demonstrates reliable dosimetric impact assessment without full recalculation.

Average prediction dose MAE (2.315 Gy) remarkably close to inter-expert MAE (2.443 Gy), suggesting our automated approach performs comparably to human experts.

### Robustness Improvements

Through targeted training updates, we achieved **significant robustness enhancement** for out-of-distribution performance—a critical requirement for clinical deployment where data characteristics may differ from training conditions.

## Conclusion

This research establishes the foundation for **dose-aware quality assurance** in radiotherapy by enabling:

- **Automated sensitivity assessment** providing real-time dose impact evaluation
- **Workflow integration** through fast, automated evaluation replacing manual review
- **Clinical validation** demonstrating accuracy comparable to inter-expert variability
- **Robustness strategies** for handling out-of-distribution scenarios

Our work demonstrates that deep learning models can reliably assess the dosimetric impact of segmentation variations, providing a pathway toward automated, objective quality assurance that improves both safety and efficiency in radiotherapy planning.

### Journal Extension Highlights

The Cancers 2023 journal significantly expanded the ISBI work by adding:

- **Comprehensive robustness testing** across diverse out-of-distribution scenarios
- **Model improvement strategies** demonstrating targeted training enhancement
- **Extended clinical validation** with additional evaluation metrics
- **Quality assurance framework** for practical clinical deployment

These contributions provide the depth needed for confident clinical translation of AI-based dose prediction and quality assurance systems.

---

## Citations

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

### ISBI 2023 (Conference version)
```
@inproceedings{Kamath2023HowSensitive,
    title={How sensitive are Deep Learning based Radiotherapy Dose Prediction Models to Variability in Organs at Risk Segmentation?},
    author={Kamath, Amith and Poel, Robert and Willmann, Jonas and Andratschke, Nicolaus and Reyes, Mauricio},
    booktitle={20th IEEE International Symposium on Biomedical Imaging (ISBI)},
    year={2023},
    organization={IEEE}
}
```