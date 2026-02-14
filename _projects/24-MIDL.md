---
layout: page
title:
description:
img: assets/img/midl-radonc-vs-dldp.png
importance: 1
category: papers
---

<div class="text-center mt-5">
  <h1 class="display-4 mb-4">Comparing the Performance of Radiation Oncologists versus a Deep Learning Dose Predictor</h1>
  <h3 class="mb-4">Estimating Dosimetric Impact of Segmentation Variations for Radiotherapy</h3>
  
  <div class="authors mb-3">
    <span>Amith Kamath<sup>1</sup></span>, 
    <span>Zahira Mercado<sup>1</sup></span>, 
    <span>Robert Poel<sup>1</sup></span>, 
    <span>Jonas Willmann<sup>1,2</sup></span>, 
    <span>Ekin Ermis<sup>2</sup></span>, 
    <span>Elena Riggenbach<sup>1</sup></span>, 
    <span>Nicolaus Andratschke<sup>2</sup></span>, 
    <span>Mauricio Reyes<sup>1</sup></span>
  </div>
  
  <div class="affiliations mb-4">
    <p><sup>1</sup>University of Bern, <sup>2</sup>University Hospital Zurich</p>
  </div>
  
  <div class="publication-links mb-5">
    <a href="https://openreview.net/forum?id=SlMMyPqQTm" class="btn btn-primary btn-sm" target="_blank">
      <i class="fas fa-file-pdf"></i> MIDL 2024 Paper
    </a>
    <a href="https://www.sciencedirect.com/science/article/pii/S0167814025045037" class="btn btn-success btn-sm" target="_blank">
      <i class="fas fa-file-pdf"></i> Journal Extension
    </a>
    <a href="https://github.com/ubern-mia/radonc-vs-dldp" class="btn btn-dark btn-sm" target="_blank">
      <i class="fab fa-github"></i> Code
    </a>
    <a href="https://youtu.be/Co9yUIAw6H0?t=3587" class="btn btn-danger btn-sm" target="_blank">
      <i class="fab fa-youtube"></i> Video
    </a>
  </div>
  
  <p class="text-muted"><em>Medical Imaging with Deep Learning Conference (MIDL) 2024 <strong>(Oral - 18% acceptance rate)</strong></em></p>
</div>

---

## Abstract

Current segmentation quality evaluation in radiotherapy relies on **geometric correctness metrics** that fail to capture true **clinical consequences**. This creates a dangerous gap between quality assessment and treatment impact. Can deep learning models provide more accurate, consistent evaluation of dosimetric impact than expert clinicians?

Our MIDL 2024 study represents the **first systematic comparison** of deep learning dose prediction with clinical expert assessment, introducing novel dosimetric quality metrics based on actual dose impact rather than geometric similarity. Evaluated on 54 contour variants across brain tumor cases, our deep learning model outperformed clinical experts in estimating dosimetric impact, achieving higher correlation with ground truth and substantially reduced variability.

The extended Radiotherapy and Oncology 2025 journal significantly expanded this work through a large-scale survey with 4 radiation oncologists and 3 medical physicists, revealing concerning patterns: Cohen's Kappa values of 0.33–0.74 indicate poor consistency among experts, with 46% of truly equivalent variations incorrectly classified as "worse." These findings provide compelling evidence for integrating AI-based dose prediction into clinical workflows.

<div class="row mt-4 mb-4">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/midl-radonc-vs-dldp.png" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  Comparing radiation oncologists versus deep learning dose prediction for dosimetric impact assessment.
</div>

## Introduction

### Clinical Challenge

Segmentation quality evaluation in radiotherapy currently faces critical limitations:

- **Geometric metrics** (Dice, Hausdorff) fail to characterize dosimetric effects
- **Manual expert evaluation** is time-intensive with high inter-evaluator variability
- **Subjective assessment** lacks quantitative dose-based feedback
- **Automated tools** require clinically meaningful quality assessment

As automated segmentation becomes standard clinical practice, we need evaluation methods that bridge the gap between algorithmic output and clinical relevance by focusing on what truly matters: dose impact on patient treatment.

### Our Investigation

We conducted the first head-to-head comparison between deep learning dose prediction and expert clinical assessment, addressing fundamental questions:

1. Can AI models predict dosimetric impact more accurately than experienced clinicians?
2. How consistent are expert assessments compared to automated evaluation?
3. What systematic biases exist in human expert evaluation?

## Methods

### Deep Learning Pipeline

**Training:** Trained on clinical treatment planning data to enable accurate dose prediction without full dose recalculation, dramatically reducing assessment time while maintaining clinical accuracy.

**Evaluation:** Systematic assessment across 54 glioblastoma target volume variations by 4 radiation oncologists and 3 medical physicists, providing robust comparison data.

### Ground Truth Validation

Standardized treatment plans generated using clinical TPS (Eclipse) ensured reference standards reflect actual clinical practice rather than theoretical ideals.

### Statistical Analysis

- **Cohen's Kappa:** Inter-evaluator agreement assessment
- **Correlation Analysis:** Quantifying relationship between automated predictions and expert assessments
- **Pattern Analysis:** Identifying systematic biases in expert evaluation

## Results

### MIDL 2024 Findings

The deep learning model demonstrated **superior performance** across multiple dimensions:

**Accuracy:** Higher correlation with ground truth dose distributions compared to human expert assessments

**Efficiency:** Quality assessment completed in seconds vs minutes/hours for manual review

**Consistency:** Substantially reduced variability compared to human experts—critical for reliable quality assurance

### Extended Journal Findings

The Radiotherapy and Oncology 2025 journal revealed concerning patterns in expert assessment:

**Poor Inter-Expert Agreement:** Cohen's Kappa values ranging 0.33–0.74 indicate weak to moderate consistency among experienced clinicians

**Systematic Overestimation:** 46% of truly equivalent ("no change") variations incorrectly classified as "worse," leading to unnecessary clinical concern

**Conservative Bias:** No expert identified any variations as "better" despite 4 cases being objectively superior based on dosimetric analysis—leading to clinical inefficiency through unnecessary corrections

### Clinical Implications

These findings reveal that even experienced radiation oncology teams struggle with consistent, accurate dosimetric impact assessment—highlighting the urgent need for objective, automated evaluation tools.

## Conclusion

This research provides compelling evidence for integrating **AI-based dose prediction** into radiotherapy quality assurance workflows:

### Key Advantages

1. **Objective Assessment:** Quantitative, dose-based evaluation replacing subjective geometric metrics
2. **Workflow Efficiency:** Automated assessment dramatically reducing review time and clinical burden
3. **Improved Consistency:** Standardized evaluation reducing harmful inter-evaluator variability
4. **Enhanced Safety:** More accurate identification of clinically significant segmentation errors
5. **Cost-Effectiveness:** Reduced unnecessary corrections and improved resource utilization

### Clinical Translation

The demonstrated superiority of AI-based evaluation in both accuracy and consistency makes a strong case for clinical adoption. By providing reliable, instant feedback on dose impact, these systems can improve both the safety and efficiency of radiotherapy planning while allowing clinical experts to focus on complex cases requiring human judgment.

### Journal Extension Highlights

The Radiotherapy and Oncology 2025 journal significantly expanded the MIDL 2024 work by adding:

- **Large-scale expert survey** with 7 clinicians providing robust inter-evaluator data
- **Comprehensive pattern analysis** revealing systematic biases in human assessment
- **Extended statistical validation** demonstrating reproducibility across larger cohort
- **Clinical workflow insights** for practical integration of AI evaluation tools

These contributions provide the evidence base needed for confident clinical adoption of AI-based dosimetric quality assurance.

---

## Citation

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

### MIDL 2024 (Conference Version)
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