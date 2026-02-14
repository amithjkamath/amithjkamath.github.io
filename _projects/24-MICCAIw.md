---
layout: page
title:
description:
img: assets/img/miccaiw-autodoserank.png
importance: 2
category: papers
---

<div class="text-center mt-5">
  <h1 class="display-4 mb-4">AutoDoseRank: Automated Dosimetry-Informed Segmentation Ranking for Radiotherapy</h1>
  
  <div class="authors mb-3">
    <span>Zahira Mercado<sup>1</sup></span>, 
    <span>Amith Kamath<sup>1</sup></span>, 
    <span>Robert Poel<sup>1</sup></span>, 
    <span>Jonas Willmann<sup>1,2</sup></span>, 
    <span>Ekin Ermis<sup>2</sup></span>, 
    <span>Elena Riggenbach<sup>1</sup></span>, 
    <span>Lucas Mose<sup>1</sup></span>, 
    <span>Nicolaus Andratschke<sup>2</sup></span>, 
    <span>Mauricio Reyes<sup>1</sup></span>
  </div>
  
  <div class="affiliations mb-4">
    <p><sup>1</sup>University of Bern, <sup>2</sup>University Hospital Zurich</p>
  </div>
  
  <div class="publication-links mb-5">
    <a href="https://link.springer.com/chapter/10.1007/978-3-031-73376-5_21" class="btn btn-primary btn-sm" target="_blank">
      <i class="fas fa-file-pdf"></i> Paper
    </a>
    <a href="https://github.com/amithjkamath/autodoserank" class="btn btn-dark btn-sm" target="_blank">
      <i class="fab fa-github"></i> Code
    </a>
  </div>
  
  <p class="text-muted"><em>MICCAI Workshop on Cancer Prevention through Early Detection (CaPTion) 2024</em></p>
</div>

---

## Abstract

AutoDoseRank introduces a novel framework for ranking segmentation candidates in radiotherapy based on **predicted dosimetric impact** rather than geometric similarity. As automated segmentation tools become prevalent in clinical practice, the focus shifts from manual contouring to quality assessment of algorithmic proposals—yet traditional metrics like Dice score fail to capture true clinical consequences.

Our system employs deep learning-based dose prediction to estimate dose distributions for segmentation variants, incorporating organ-specific priorities and clinical constraints into a unified ranking metric. Validated on 13 glioblastoma patients, AutoDoseRank outperformed 3 of 4 radiation oncology experts in ranking accuracy while demonstrating better inter-rater agreement, measured by Kendall's Tau.

This work represents a paradigm shift toward clinically relevant quality assurance, replacing geometric evaluation with dose-based assessment that directly relates to patient safety and treatment outcomes.

<div class="row mt-4 mb-4">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/miccaiw-autodoserank.png" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  AutoDoseRank framework for dosimetry-informed segmentation ranking.
</div>

## Introduction

### Clinical Problem

Traditional segmentation quality metrics fundamentally fail to capture clinical impact in radiotherapy:

- **Dice score** measures spatial overlap but ignores dosimetric consequences
- **Geometric metrics** cannot distinguish clinically significant from insignificant variations
- **Current evaluation** lacks patient-specific context and organ-specific priorities
- **Manual expert review** is time-intensive with high inter-evaluator variability

As automated segmentation becomes standard, clinicians need tools that evaluate proposals based on their treatment impact—not just spatial accuracy.

### Our Innovation

AutoDoseRank addresses these challenges through:

1. **Deep learning dose prediction** eliminating need for time-intensive dose recalculation
2. **Clinical priority integration** considering organ-specific importance and dose constraints
3. **Patient-level assessment** providing holistic evaluation across all organs-at-risk
4. **Expert validation** demonstrating performance comparable to radiation oncologists

## Methods

### Deep Learning Pipeline

**Dose Prediction Model:** Trained on clinical treatment planning data to generate accurate dose maps for segmentation candidates without requiring full TPS recalculation.

**Ranking Framework:** Novel metric combining:
- Dose impact assessment across organs-at-risk
- Organ-specific clinical priorities
- Patient-specific constraints

### Clinical Validation

- **Dataset:** 13 glioblastoma patients with manual segmentation variants
- **Expert Comparison:** Head-to-head evaluation against 4 experienced radiation oncologists
- **Metrics:** Kendall's Tau for ranking correlation, NDPM for comprehensive ranking quality

### Evaluation Metrics

**Kendall's Tau:** Measures ranking correlation with ground truth dosimetric impact, providing robust assessment of automated system performance.

**Normalized Distance-based Performance Measure (NDPM):** Comprehensive ranking quality assessment accounting for both accuracy and consistency.

**Ablation Studies:** Validated the value of incorporating organ-at-risk priorities, demonstrating clinical context substantially improves ranking quality.

## Results

### Performance

AutoDoseRank demonstrated **superior performance** by outperforming 3 of 4 radiation oncology experts in ranking accuracy. The system showed **better inter-rater agreement** than human experts as measured by Kendall's Tau, indicating more consistent evaluation compared to manual assessment.

### Clinical Relevance

The system successfully:
- Identified clinically significant segmentation variations
- Efficiently filtered changes with minimal dose impact  
- Provided instant feedback vs time-intensive expert review
- Maintained strong correlation with ground truth dosimetric rankings

### Ablation Results

Studies confirmed **significant value of organ-at-risk priorities**—incorporating clinical context substantially improved ranking quality compared to purely dose-based metrics, validating that clinical priorities must be integrated for meaningful automated evaluation.

## Conclusion

AutoDoseRank represents a significant advancement toward **clinically relevant quality assurance** for automated segmentation in radiotherapy. By shifting from geometric accuracy to dose-based evaluation, the framework provides:

- **Reduced clinician workload** through automated, dose-informed ranking
- **Enhanced patient safety** via systematic prioritization of significant variations  
- **Improved workflow efficiency** with instant, consistent quality assessment
- **Clinical decision support** through quantitative, dose-based feedback

This work demonstrates that AI-based evaluation can match or exceed human expert performance while offering greater consistency and efficiency—critical advantages for busy clinical environments where time constraints require intelligent prioritization of quality assurance efforts.

---

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