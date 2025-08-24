---
layout: page
title: Context versus Foreground-to-Background Ratio Trade-off
description: Analyzing 3D segmentation network behavior across context and class imbalance dimensions
img: assets/img/medneurips-context-vs-fbr-idea.png
importance: 2
category: papers
related_publications: true
---

## Overview

[![Project Repository](https://img.shields.io/badge/GitHub-Repository-blue?style=flat-square&logo=github)](https://github.com/amithjkamath/context_vs_fbr)

This work investigates a fundamental trade-off in 3D medical image segmentation: balancing global context against foreground-to-background ratio when using sliding window approaches due to GPU memory constraints. While larger context windows provide more global information, they also introduce severe class imbalance between background and foreground voxels.

**Published at:** Medical Imaging meets NeurIPS Workshop, NeurIPS 2022

## Key Contributions

- **Novel Analysis Framework**: First systematic study of the context vs. foreground ratio trade-off in 3D medical segmentation
- **Multi-Architecture Comparison**: Evaluated vanilla U-Net, Attention U-Net, and UNETR across this trade-off spectrum
- **Robustness Insights**: Discovered that attention-based models are less robust to training/test distribution shifts in foreground ratios
- **Practical Guidelines**: Demonstrated that all architectures prefer more global context over balanced foreground ratios

## Methodology

**Synthetic Experiments**: Controlled texture-based synthetic datasets to isolate the trade-off effects  
**Medical Validation**: Spleen segmentation from Medical Segmentation Decathlon to confirm findings  
**Architecture Coverage**: Comprehensive evaluation across traditional CNN and Transformer-based approaches

## Key Findings

1. **Context Preference**: All three network types consistently favor larger context windows over balanced class ratios
2. **Robustness Differences**: UNETR and Attention U-Net show greater sensitivity to foreground ratio variations compared to vanilla U-Net
3. **Performance Trade-offs**: Optimal performance requires careful balance between sufficient context and manageable class imbalance

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