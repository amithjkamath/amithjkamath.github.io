---
layout: page
title:
description:
img: assets/img/dose-prediction.png
importance: 2
category: themes
related_publications: Poel2023Deep, Kamath2023HowSensitive
---

<div class="text-center mt-5">
  <h1 class="display-4 mb-4">Accelerated Dose Prediction for Radiotherapy Quality Assurance</h1>
  <h3 class="mb-4">Machine learning models that predict dosimetric outcomes to enable rapid quality assessment in treatment planning</h3>
  
  <div class="mt-4 mb-4">
    <span class="badge bg-primary me-2">Dose Prediction</span>
    <span class="badge bg-secondary me-2">Deep Learning</span>
    <span class="badge bg-success me-2">Quality Assurance</span>
  </div>
</div>

---

## Abstract

Traditional radiotherapy planning requires time-consuming dose calculations for each contour variation, creating a bottleneck in quality assurance workflows. Each segmentation change potentially alters radiation dose distribution, affecting tumor coverage and normal tissue exposure. 

This research explores how machine learning can predict dosimetric outcomes directly from segmentation data, enabling rapid quality assessment. We developed cascaded 3D U-Net architectures achieving 0.906 Gy mean absolute error with strong correlation (0.921) between predicted and actual dose differences. Critically, our models demonstrate reliable sensitivity to contour variations—the precise capability needed for automated quality assurance.

Our work establishes that deep learning dose prediction can accurately assess the clinical impact of segmentation errors within seconds, providing a foundation for efficient, dose-informed quality assurance in modern radiotherapy workflows.

<div class="row mt-4 mb-4">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/dose-prediction.png" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  Deep learning framework for accelerated dose prediction enabling rapid quality assessment.
</div>

## Introduction

## Introduction

### The Computational Bottleneck

Traditional radiation therapy planning involves computationally intensive dose calculations where treatment planning systems simulate dose distributions based on patient anatomy, beam configurations, and tissue properties. When evaluating segmentation quality or comparing alternative contours, each variation requires a separate calculation—a process that can take minutes to hours.

This computational burden creates critical limitations:
- **Limited quality assurance**: Clinicians must decide which contours to evaluate in detail
- **Constrained validation**: Automated segmentation systems require extensive dose calculations
- **Research limitations**: Studies of contour variability face computational constraints

### The Machine Learning Solution

Machine learning offers a transformative approach: learn patterns connecting anatomical information to dosimetric outcomes. Rather than performing full physics-based simulations, trained models can predict dose distributions in seconds. However, for clinical utility, models must accurately capture how dose distributions **change in response to contour variations**, precisely the information needed for quality assessment.

## Key Research Contributions

### 1. Sensitive Dose Prediction Models

We developed cascaded 3D U-Net architectures {% cite Poel2023Deep %} specifically designed to be sensitive to contour variations:

**Architecture Innovation:**
- Cascaded framework: First estimates dose, then refines based on detailed anatomy
- Captures both global dose patterns and local variations from segmentation changes
- Maintains spatial sensitivity crucial for quality assessment

**Performance Achievements:**
- **0.906 Gy mean absolute error** (ISBI 2023)
- **0.94 Gy MAE** (Cancers 2023 journal extension)
- Strong DVH correlation: 1.942-1.95 Gy mean DVH score
- Prediction time: Seconds vs minutes/hours

### 2. Systematic Sensitivity Analysis

Through rigorous sensitivity evaluation {% cite Kamath2023HowSensitive %}, we demonstrated that models truly respond to clinically meaningful contour changes:

**Critical Validation:**
- **0.921 correlation** between predicted and reference dose differences
- Accurate across different anatomical structures (focus: left optic nerve)
- Prediction dose MAE (2.315 Gy) comparable to inter-expert MAE (2.443 Gy)
- Models perform comparably to human experts

**Robustness Testing:**
- Out-of-distribution scenario evaluation
- Targeted training updates for robustness enhancement
- Validation across realistic clinical variations

### 3. Local Dosimetric Impact Visualization

Beyond global predictions, we developed visualization methods quantifying local dosimetric impact:

**Spatial Analysis Tools:**
- Detailed heatmaps highlighting critical regions
- Identifies which contour areas most influence dose
- Supports targeted quality assurance focus

**Clinical Applications:**
- Guides QA by focusing on dosimetrically sensitive regions
- Supports clinician training showing geometry-dose relationships
- Provides interpretability for automated assessments
- Builds clinical trust through transparent feature importance

## Methods and Technical Approach

### Model Architecture

**Cascaded 3D U-Net Design:**
- First stage: Global dose distribution prediction
- Second stage: Refinement incorporating detailed anatomical features
- Volumetric processing: Full 3D context for spatial relationships

**Training Strategy:**
- Dataset: 125 glioblastoma patients with clinical VMAT plans
- Split: 60 training, 15 validation, 20 test patients
- Ground truth: Clinical treatment planning system (Eclipse)

### Sensitivity Evaluation

**Realistic Variation Testing:**
- Inter-expert segmentation variations
- Simulates true clinical variability
- Systematic worst-case scenario evaluation

**Robustness Enhancement:**
- Identified out-of-distribution weaknesses
- Developed targeted training strategies
- Demonstrated significant robustness improvements

### Validation Metrics

- OpenKBP challenge metrics for standardized evaluation
- Dose-volume histogram (DVH) correlation analysis
- Mean absolute error (MAE) on dose predictions
- Correlation analysis for sensitivity assessment

## Results and Impact

### Performance Summary

**Accuracy Achievements:**
- Mean absolute error: 0.906-0.94 Gy
- DVH score: 1.942-1.95 Gy
- Sensitivity correlation: 0.921 with ground truth
- Comparable to inter-expert variability (2.315 Gy vs 2.443 Gy)

**Efficiency Gains:**
- Prediction time: Seconds vs hours
- Enables real-time quality feedback
- Supports large-scale validation studies
- Facilitates iterative contour refinement

### Clinical Applications

**Immediate Applications:**
- Automated segmentation validation
- Rapid contour quality assessment
- Prioritized expert review guidance
- Research study acceleration

**Workflow Integration:**
- API development for TPS integration
- Interactive visualization interfaces
- Real-time feedback capabilities
- Uncertainty quantification support

## Conclusion

### Key Achievements

This research establishes that **deep learning can accurately and efficiently predict radiation dose distributions with clinically relevant sensitivity to contour variations**. Key achievements include:

1. **Cascaded 3D U-Net architecture** achieving sub-Gy dose prediction accuracy
2. **Demonstrated sensitivity** with 0.921 correlation to ground truth dose changes
3. **Comparable performance** to inter-expert variability levels
4. **Robust validation** across out-of-distribution scenarios
5. **Practical efficiency** enabling real-time clinical feedback

### Clinical Translation

The integration of accelerated dose prediction into radiotherapy workflows enables:

- **Rapid quality assurance**: Instant dose-informed segmentation evaluation
- **Automated validation**: Systematic assessment of automated segmentation tools
- **Efficient research**: Large-scale contour variability studies
- **Interactive contouring**: Real-time dosimetric feedback during planning
- **Resource optimization**: Focus expert time on critical cases

### Future Directions

Promising research directions include:

- **Physics-informed neural networks**: Incorporating radiation transport principles for improved accuracy and generalization
- **Multi-modal integration**: Leveraging functional imaging and treatment history
- **Temporal modeling**: Accounting for anatomical changes during treatment
- **Real-time contouring tools**: Interactive dose-aware editing systems
- **Integrated planning assistance**: Combining segmentation, dose prediction, and quality assessment
- **Uncertainty quantification**: Enhanced confidence estimation for clinical deployment

By advancing the speed, accuracy, and interpretability of dose prediction models, we enable the vision of AI-assisted radiotherapy planning that is both efficient and maintains the dosimetric quality essential for effective cancer treatment.
