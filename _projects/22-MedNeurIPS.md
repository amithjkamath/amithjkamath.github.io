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
    <span>Jonas Willmann<sup>2,3</sup></span>, 
    <span>Nicolaus Andratschke<sup>2</sup></span>, 
    <span>Mauricio Reyes<sup>1</sup></span>
  </div>
  
  <div class="affiliations mb-4">
    <p><sup>1</sup>University of Bern, <sup>2</sup>University Hospital Zurich, <sup>3</sup>Paul Scherrer Institut</p>
  </div>
  
  <div class="publication-links mb-5">
    <a href="https://amithjkamath.github.io/context_vs_fbr/" class="btn btn-success btn-sm" target="_blank">
      <i class="fas fa-globe"></i> Project Website
    </a>
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

<p class="text-muted">
  <i class="fas fa-arrow-right"></i> The full write-up lives next to its code, on its own page: <a href="https://amithjkamath.github.io/context_vs_fbr/" target="_blank" rel="noopener noreferrer">Context versus foreground ratio</a>. It has the videos, both results tables recomputed from the released per-case metrics, and the setup in full. What follows is the summary.
</p>

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

Context and foreground ratio cannot be varied independently — one knob, the patch size, sets both, which is precisely what makes this a trade-off rather than two separate design choices. The experiments therefore sweep that single knob and watch both quantities move together:

**Synthetic Dataset:** 100 volumes of 96³ voxels, each a single sphere of foreground on a background of uniform noise. Training spheres have radii of 25–35 voxels; an independent 100-volume test set uses radii of 5–48, reaching well past the foreground ratios training ever showed the network.

**Real Medical Data:** Spleen segmentation from the Medical Segmentation Decathlon, chosen for its wide range of foreground ratio, to validate that synthetic insights translate to clinical scenarios.

**Architecture Coverage:** Vanilla U-Net (pure CNN), Attention U-Net (CNN with attention), and UNETR (Transformer-based) representing the spectrum of 3D segmentation approaches. The first two share every hyperparameter they can, so the only difference between them is the attention gating on the skip connections.

### Evaluation Protocol

We swept five patch sizes (32, 48, 64, 80, 96), symmetric in 3D, with three seeds per configuration. Crucially, we also logged the foreground ratio of every training patch actually drawn, which bounds the range each network was exposed to. Test cases are then split into those inside that range and those outside it, so robustness to foreground-ratio drift is measured directly rather than inferred.

## Results

### Main Findings

**Context Wins Over Balance:** All three network types consistently favor larger context windows over balanced class ratios, suggesting that spatial information outweighs class imbalance challenges. This finding held across both synthetic and real medical imaging datasets.

**Architecture-Specific Robustness:** UNETR and Attention U-Net showed markedly greater sensitivity to foreground ratio variations than vanilla U-Net. On test cases outside the training range, they lose 0.26 to 0.84 Dice; the vanilla U-Net in the same setting loses 0.014 to 0.023 — more than an order of magnitude less. While attention mechanisms and transformers may match the CNN under ideal conditions, they are far more vulnerable to distribution shift.

**Accuracy and robustness are not the same ranking:** at a 96³ patch, UNETR matches the vanilla U-Net in-range on the synthetic task, both at 0.994 Dice, and loses fifteen times as much outside it.

**The patch size sets the range, not just the ratio:** at 32³ the training patches span the full range of foreground ratios; at 96³ they span roughly a tenth of it, and 249 of the 300 test cases then fall outside. Choosing a patch size is therefore also choosing how much test-time drift the model will tolerate.

### Practical Guidelines

For practitioners designing segmentation pipelines:
- Take the largest patch size memory allows; across three architectures and two tasks, context beat class balance every time
- Then check what foreground-ratio range that leaves you, by logging the ratio of every training patch — it costs nothing and tells you which part of the test distribution you are extrapolating into
- Report performance against foreground ratio rather than a single mean; a model at 0.99 in-range and near zero just outside it averages to something respectable and is not
- Treat the vanilla U-Net as a real baseline for deployment across scanners and sites

## Conclusion

This work provides the first systematic analysis of the context versus foreground ratio trade-off in 3D medical segmentation. Our findings challenge conventional wisdom about class balance importance, demonstrating that spatial context consistently provides greater value across architectures.

Importantly, we reveal robustness differences between architectures that have practical implications for clinical deployment. These insights provide concrete guidance for practitioners designing segmentation systems under real-world constraints.

<div class="mt-4 mb-4">
  <a href="https://amithjkamath.github.io/context_vs_fbr/" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-success me-2">Project website, with the videos and both tables</a>
  <a href="/projects/Theme-Robustness/" class="btn btn-sm btn-outline-primary">Robust segmentation models</a>
</div>

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