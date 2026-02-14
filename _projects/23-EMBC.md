---
layout: page
title:
description:
img: assets/img/embc-astra-idea.png
importance: 2
category: papers
---

<div class="text-center mt-5">
  <h1 class="display-4 mb-4">ASTRA: Atomic Surface Transformations for Radiotherapy quality Assurance</h1>
  
  <div class="authors mb-3">
    <span>Amith Kamath<sup>1</sup></span>, 
    <span>Robert Poel<sup>1</sup></span>, 
    <span>Jonas Willmann<sup>1,2</sup></span>, 
    <span>Ekin Ermis<sup>2</sup></span>, 
    <span>Nicolaus Andratschke<sup>2</sup></span>, 
    <span>Mauricio Reyes<sup>1</sup></span>
  </div>
  
  <div class="affiliations mb-4">
    <p><sup>1</sup>University of Bern, <sup>2</sup>University Hospital Zurich</p>
  </div>
  
  <div class="publication-links mb-5">
    <a href="https://ieeexplore.ieee.org/document/10340837" class="btn btn-primary btn-sm" target="_blank">
      <i class="fas fa-file-pdf"></i> Paper
    </a>
    <a href="https://github.com/amithjkamath/astra" class="btn btn-dark btn-sm" target="_blank">
      <i class="fab fa-github"></i> Code
    </a>
    <a href="https://www.youtube.com/watch?v=vghlJh8ACOY" class="btn btn-danger btn-sm" target="_blank">
      <i class="fab fa-youtube"></i> Video
    </a>
  </div>
  
  <p class="text-muted"><em>IEEE Engineering in Medicine and Biology Conference (EMBC) 2023</em></p>
</div>

---

## Abstract

ASTRA (Atomic Surface Transformations for Radiotherapy quality Assurance) introduces an automated deep learning method that predicts the dosimetric impact of local segmentation variations in radiotherapy planning. Our approach generates dose-aware sensitivity maps that enable clinicians to understand which segmentation regions most critically affect radiation dose distributions, facilitating prioritized quality assurance review.

We validated ASTRA on 100 glioblastoma patients with complete dose planning data, demonstrating high correlation between predicted and actual dose impacts. This represents a fundamental shift from geometric-based to clinically meaningful dose-based segmentation quality assessment.

<div class="row mt-4 mb-4">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/embc-astra-idea.png" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  ASTRA framework for dose-aware sensitivity mapping in radiotherapy quality assurance.
</div>

## Introduction

### Clinical Motivation

Glioblastoma treatment relies heavily on precise radiotherapy planning, where the accuracy of tumor and organ-at-risk segmentation directly influences treatment outcomes and patient safety. However, human errors and inter-expert variability in segmentation are common challenges that can lead to suboptimal dose distributions.

Current quality assurance workflows face significant limitations:
- **Time-intensive review processes** reduce radiation oncology team effectiveness
- **Lack of dose-informed feedback** for segmentation corrections
- **Geometric metrics** fail to capture true clinical impact

Traditional approaches focus on geometric accuracy that fails to capture the clinical consequences of segmentation variations—the disconnect between spatial correctness and dosimetric impact.

### Our Contribution

ASTRA addresses these limitations by introducing **dose-aware quality assessment** as the first automated method specifically designed to predict dosimetric impact of segmentation variations. The system provides localized sensitivity mapping with spatial understanding of which regions most critically affect dose, enabling clinicians to prioritize their review efforts where they matter most.

## Methods

### Deep Learning Framework

Our system employs an **end-to-end deep learning architecture** that predicts dose changes directly from segmentation modifications, eliminating time-intensive full dose recalculation. The framework consists of:

**Atomic Transformations:** Local surface perturbations that simulate realistic segmentation variations, ensuring predictions reflect clinically relevant scenarios.

**Dose Impact Modeling:** Direct prediction of organ-at-risk dose distribution changes, providing immediately actionable clinical information.

**Sensitivity Mapping:** Interactive visualization system highlighting regions where segmentation accuracy is most critical for dose outcomes.

### Validation

We evaluated ASTRA on 100 glioblastoma patients with complete VMAT dose planning data, using clinical treatment plans to establish ground truth dosimetric impact for various segmentation modifications.

## Results

### Performance

Our evaluation demonstrated **strong predictive performance** with high correlation between predicted and actual dose impacts across various segmentation modification scenarios. The system successfully identifies regions where segmentation errors would have the most significant dosimetric consequences.

### Clinical Value

ASTRA enables **prioritized quality assurance review** by highlighting segmentation regions with the highest dosimetric impact. This allows radiation oncology teams to focus their time on areas where precision matters most, significantly improving workflow efficiency without compromising safety.

### Workflow Integration

The system shows promise for automated quality assurance within radiotherapy planning systems, potentially serving as a real-time advisory tool during contouring. This capability could provide immediate feedback about dose implications of segmentation decisions.

## Conclusion

ASTRA represents a significant step toward **dose-informed segmentation quality assurance** in radiotherapy. By moving beyond geometric metrics to clinically meaningful dose-based evaluation, this approach has strong potential for integration into broader automated QA systems in radiotherapy workflows.

The ability to predict dosimetric impact without full dose recalculation, combined with spatial sensitivity mapping, provides clinicians with the tools needed for efficient, effective quality assurance that prioritizes patient safety while respecting time constraints in busy clinical environments.

---

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