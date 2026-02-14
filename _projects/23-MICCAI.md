---
layout: page
title:
description:
img: assets/img/miccai-skip-connections.png
importance: 1
category: papers
---

<div class="text-center mt-5">
  <h1 class="display-4 mb-4">Do we really need that skip-connection?</h1>
  <h3 class="mb-4">Understanding its interplay with task complexity</h3>
  
  <div class="authors mb-3">
    <span>Amith Kamath<sup>1</sup></span>, 
    <span>Jonas Willmann<sup>1,2</sup></span>, 
    <span>Nicolaus Andratschke<sup>2</sup></span>, 
    <span>Mauricio Reyes<sup>1</sup></span>
  </div>
  
  <div class="affiliations mb-4">
    <p><sup>1</sup>University of Bern, <sup>2</sup>University Hospital Zurich</p>
  </div>
  
  <div class="publication-links mb-5">
    <a href="https://link.springer.com/chapter/10.1007/978-3-031-43901-8_29" class="btn btn-primary btn-sm" target="_blank">
      <i class="fas fa-file-pdf"></i> MICCAI 2023 Paper
    </a>
    <a href="https://www.sciencedirect.com/science/article/pii/S0010482524014951" class="btn btn-success btn-sm" target="_blank">
      <i class="fas fa-file-pdf"></i> Journal Extension
    </a>
    <a href="https://github.com/amithjkamath/to_skip_or_not" class="btn btn-dark btn-sm" target="_blank">
      <i class="fab fa-github"></i> Code
    </a>
    <a href="https://www.youtube.com/watch?v=YreG6vC64aw" class="btn btn-danger btn-sm" target="_blank">
      <i class="fab fa-youtube"></i> Video
    </a>
  </div>
  
  <p class="text-muted"><em>International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI) 2023</em></p>
</div>

---

## Abstract

Skip connections are considered essential in U-Net architectures for medical image segmentation, preserving fine details by bridging encoder and decoder layers. But are they always necessary? This work provides the **first systematic analysis** investigating when skip connections truly provide benefit and when they introduce vulnerabilities.

We developed a novel task complexity framework based on texture similarity, enabling quantitative measurement of segmentation difficulty. Across controlled synthetic experiments and diverse medical imaging datasets (breast ultrasound, colon histology, cardiac MRI), we reveal a surprising finding: **skip connections provide minimal benefit in low-to-medium complexity scenarios** but become essential for high complexity tasks.

Critically, we uncovered a **performance versus robustness trade-off**—skip connections improve performance but reduce robustness to distribution shifts. Our MICCAI 2023 study established these core findings. The extended Computers in Biology and Medicine 2025 journal expanded validation across four anatomies and multiple imaging modalities, confirming that No-Skip models often outperform their Skip-enabled counterparts in both performance and robustness.

<div class="row mt-4 mb-4">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/miccai-skip-connections.png" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  Understanding the interplay between skip connections and task complexity.
</div>

## Introduction

### Motivation

The U-Net architecture has become the de facto standard for medical image segmentation, with skip connections widely considered essential for their ability to preserve spatial details. However, this conventional wisdom lacks systematic investigation:

- **When are skip connections truly beneficial?**
- **How do they interact with task complexity?**
- **What robustness trade-offs exist in clinical scenarios?**

These questions have significant practical implications for architecture design in medical imaging, where both performance and reliability are critical for clinical deployment.

### Our Contribution

We provide the first systematic analysis of skip connections through:

1. **Novel task complexity framework** offering quantitative measurement based on texture similarity
2. **Comprehensive architecture comparison** across Standard U-Net, No-Skip U-Net, and Attention-Gated U-Net
3. **Robustness analysis** investigating performance degradation in out-of-domain scenarios  
4. **Clinical validation** across diverse medical imaging datasets

## Methods

### Task Complexity Framework

We developed a **novel texture-based complexity metric** that quantifies segmentation difficulty:

- **Texture Distance Metric:** Quantitative measurement of foreground-background similarity
- **Controlled Experiments:** Synthetic texture images with systematically varied complexity
- **Clinical Validation:** Breast ultrasound, colon histology, cardiac MRI datasets

### Architecture Comparison

We evaluated three architecture families:

- **Standard U-Net:** Traditional architecture with skip connections
- **No-Skip U-Net:** Variants without skip connections
- **Attention-Gated U-Net:** Enhanced architecture with attention mechanisms

### Robustness Testing

Systematic evaluation included training-test distribution mismatches to assess real-world deployment reliability.

## Results

### Task Complexity Dependency

**Key Finding:** Skip connections provide minimal benefit in low-to-medium complexity scenarios but become essential for high complexity tasks. This non-linear relationship suggests architectural complexity should match task complexity.

**Attention Mechanisms:** Attention-Gated U-Net showed the largest improvements in complex scenarios, confirming that enhanced architectures provide greatest value when distinguishing foreground from background is most challenging.

### Robustness Trade-offs

**Critical Discovery:** Skip connections improve performance but **reduce robustness** to distribution shifts. Models with skip connections showed greater performance degradation in out-of-domain scenarios compared to No-Skip counterparts.

**Clinical Implication:** For safety-critical medical applications, architecture selection must carefully balance performance gains against robustness requirements.

### Extended Journal Results

The CIBM 2025 journal expanded validation to four anatomies (breast, colon, heart, spleen) and multiple modalities (ultrasound, histology, MRI, CT):

- **No-Skip models performed best** in 5/8 cases for Dice coefficient and 7/8 cases for Hausdorff distance in texture scenarios
- **Robustness assessment:** No-Skip group superior in 7/16 cases vs Enhanced (6/16) and Standard (3/16)
- **Consistent pattern:** Confirms performance-robustness trade-off across diverse datasets

## Conclusion

This research challenges the universal adoption of skip connections in medical image segmentation, providing evidence-based guidelines for architecture selection:

1. **Assess task complexity** using texture-based metrics before choosing architecture
2. **Consider robustness requirements** for clinical deployment—No-Skip models may be preferable for safety-critical applications  
3. **Balance performance and reliability** based on specific clinical needs

Our findings demonstrate that simpler architectures can outperform complex ones, particularly when robustness to distribution shifts is paramount. This has important implications for developing reliable medical AI systems that perform consistently across diverse clinical environments.

### Journal Extension Highlights

The Computers in Biology and Medicine 2025 journal significantly expanded the MICCAI 2023 work with:

- **Expanded validation** across four anatomies and multiple imaging modalities
- **Enhanced architecture coverage** including V-Net, UNet++, and additional variants
- **Comprehensive robustness analysis** with systematic cross-dataset evaluation
- **Statistical validation** providing robust evidence for architecture selection guidelines

These contributions establish a comprehensive framework for evidence-based architecture design in medical image segmentation.

---

## Citations

### Journal Paper (Computers in Biology and Medicine, 2025)
```bibtex
@article{Kamath2025SkipConnections,
    title={The impact of U-Net architecture choices and skip connections on the robustness of segmentation across texture variations},
    author={Kamath, Amith and Willmann, Jonas and Andratschke, Nicolaus and Reyes, Mauricio},
    journal={Computers in Biology and Medicine},
    volume={184},
    pages={109364},
    year={2025},
    publisher={Elsevier},
    howpublished={\url{https://www.sciencedirect.com/science/article/pii/S0010482524014951}}
}
```

### MICCAI 2023 Paper (Conference Version)
```bibtex
@inproceedings{Kamath2023DoWe,
    title={Do we really need that skip-connection? understanding its interplay with task complexity},
    author={Kamath, Amith and Willmann, Jonas and Andratschke, Nicolaus and Reyes, Mauricio},
    booktitle={International Conference on Medical Image Computing and Computer-Assisted Intervention},
    pages={302--311},
    year={2023},
    organization={Springer},
    howpublished={\url{https://link.springer.com/chapter/10.1007/978-3-031-43901-8_29}}
}
```
