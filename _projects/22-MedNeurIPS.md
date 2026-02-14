---
layout: page
title:
description:
img: assets/img/medneurips-context-vs-fbr-idea.png
importance: 2
category: papers
related_publications: true
---

<div class="text-center mt-5">
  <h1 class="display-4 mb-4">How do 3D image segmentation networks behave across the context versus foreground ratio trade-off?</h1>
  
  <div class="authors mb-3">
    <span>Amith Kamath<sup>1</sup></span>, 
    <span>Yannick Suter<sup>1</sup></span>, 
    <span>Suhang You<sup>1</sup></span>, 
    <span>Michael Mueller<sup>1</sup></span>, 
    <span>Jonas Willmann<sup>1,2</sup></span>, 
    <span>Nicolaus Andratschke<sup>2</sup></span>, 
    <span>Mauricio Reyes<sup>1</sup></span>
  </div>
  
  <div class="affiliations mb-4">
    <p><sup>1</sup>University of Bern, <sup>2</sup>University Hospital Zurich</p>
  </div>
  
  <div class="publication-links mb-5">
    <a href="http://www.cse.cuhk.edu.hk/~qdou/public/medneurips2022/72.pdf" class="btn btn-primary btn-sm" target="_blank">
      <i class="fas fa-file-pdf"></i> Paper
    </a>
    <a href="https://github.com/amithjkamath/context_vs_fbr" class="btn btn-dark btn-sm" target="_blank">
      <i class="fab fa-github"></i> Code
    </a>
  </div>
  
  <p class="text-muted"><em>Medical Imaging meets NeurIPS Workshop, NeurIPS 2022</em></p>
</div>

---

## Abstract

This work investigates a fundamental trade-off in 3D medical image segmentation: balancing global context against foreground-to-background ratio when using sliding window approaches due to GPU memory constraints. While larger context windows provide more global information, they also introduce severe class imbalance between background and foreground voxels.

We present the **first systematic study** analyzing how vanilla U-Net, Attention U-Net, and UNETR architectures behave across this trade-off spectrum. Our experiments reveal that all architectures consistently favor larger context windows over balanced class ratios, and that attention-based models are less robust to distribution shifts in foreground ratios compared to traditional CNNs.

<div class="row mt-4 mb-4">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/medneurips-context-vs-fbr-idea.png" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  Context versus foreground-to-background ratio trade-off in 3D medical image segmentation.
</div>

## Introduction

3D medical image segmentation networks face a fundamental constraint: GPU memory limitations require processing images through sliding windows rather than whole volumes. This constraint introduces a critical trade-off—larger windows provide more spatial context but dramatically increase the ratio of background to foreground voxels, leading to severe class imbalance.

Despite the ubiquity of this trade-off in clinical applications, its systematic investigation has been missing from the literature. How do different network architectures navigate this balance? Is global context more important than class balance? Are attention mechanisms and transformer architectures equally robust to these variations?

Our study addresses these questions through controlled experiments on both synthetic and real medical imaging data, providing practical guidance for designing segmentation pipelines under memory constraints.

## Methods

### Experimental Design

We designed controlled experiments to systematically isolate the effects of context window size and foreground ratio. Our approach combines:

**Synthetic Dataset:** Texture-based synthetic volumes allowing precise control over both context and foreground ratio independently, ensuring we can attribute performance changes to specific factors.

**Real Medical Data:** Spleen segmentation from the Medical Segmentation Decathlon to validate that synthetic insights translate to clinical scenarios.

**Architecture Coverage:** Vanilla U-Net (pure CNN), Attention U-Net (CNN with attention), and UNETR (Transformer-based) representing the spectrum of 3D segmentation approaches.

### Evaluation Protocol

We systematically varied context window sizes and foreground ratios, evaluating each network's performance across this 2D trade-off space. Additionally, we conducted robustness testing by training on one foreground ratio distribution and testing on others, simulating clinical distribution shifts.

## Results

### Main Findings

**Context Wins Over Balance:** All three network types consistently favor larger context windows over balanced class ratios, suggesting that spatial information outweighs class imbalance challenges. This finding held across both synthetic and real medical imaging datasets.

**Architecture-Specific Robustness:** UNETR and Attention U-Net showed greater sensitivity to foreground ratio variations compared to vanilla U-Net. While attention mechanisms and transformers may offer superior performance under ideal conditions, they are more vulnerable to distribution shifts.

**Performance Trade-offs:** Optimal performance requires careful balance between sufficient context and manageable class imbalance, particularly under GPU memory constraints.

### Practical Guidelines

For practitioners designing segmentation pipelines:
- Prioritize larger context windows when facing memory constraints
- Consider vanilla U-Net for scenarios with expected distribution shifts
- Use attention-based models when training and test distributions are well-matched

## Conclusion

This work provides the first systematic analysis of the context versus foreground ratio trade-off in 3D medical segmentation. Our findings challenge conventional wisdom about class balance importance, demonstrating that spatial context consistently provides greater value across architectures.

Importantly, we reveal robustness differences between architectures that have practical implications for clinical deployment. These insights provide concrete guidance for practitioners designing segmentation systems under real-world constraints.

---

## Citation

```bibtex
@inproceedings{kamath2022contextvsfbr,
    title={How do 3D image segmentation networks behave across the context versus foreground ratio trade-off?},
    author={Kamath, Amith and Suter, Yannick and You, Suhang and Mueller, Michael and Willmann, Jonas and Andratschke, Nicolaus and Reyes, Mauricio},
    booktitle={Medical Imaging Meets NeurIPS Workshop, Neural Information Processing Systems},
    year={2022},
    howpublished={\url{http://www.cse.cuhk.edu.hk/~qdou/public/medneurips2022/72.pdf}}
}
```