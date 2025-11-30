---
layout: page
title: Interactive Segmentation Quality Evaluator
description: Educational tool for understanding segmentation metrics through hands-on boundary drawing and evaluation
img: assets/img/segmentation_evaluator.jpg
importance: 2
category: teaching
---

## Overview

[![Project Repository](https://img.shields.io/badge/GitHub-Repository-blue?style=flat-square&logo=github)](https://github.com/amithjkamath/segmentation-evaluator)
[![MATLAB File Exchange](https://img.shields.io/badge/MATLAB-File%20Exchange-orange?style=flat-square)](https://ch.mathworks.com/matlabcentral/fileexchange/112505-segmentation-evaluator)

An interactive MATLAB application that teaches image segmentation evaluation metrics through hands-on boundary drawing and real-time quality assessment against ground truth references.

**Educational Focus:** Image Segmentation, Quality Metrics, Computer Vision Fundamentals

## How It Works

The tool provides:
- **Interactive drawing**: Draw segmentation boundaries directly on images
- **Real-time metrics**: See Dice score, Hausdorff distance, and pixel accuracy update as you draw
- **Visual overlays**: Color-coded display shows agreement and disagreement with ground truth
- **Multiple examples**: Practice with simple shapes and complex anatomical structures

## Why Interactive Demos Matter

Segmentation metrics like Dice coefficient and Hausdorff distance are formulas until you see them in action. This tool makes metrics tangible—draw a boundary and instantly see how different metrics respond to your segmentation decisions.

## Using the Tool

1. **Select an image** with provided ground truth segmentation
2. **Draw your segmentation** using mouse-based boundary tools
3. **Observe metrics** updating in real-time as you draw
4. **Compare visually** with color overlays showing errors
5. **Iterate** to understand how boundary precision affects each metric

## Technical Background

- **Dice Score**: Measures overlap (2|A∩B|/(|A|+|B|)). Values near 1 indicate good agreement.
- **Hausdorff Distance**: Maximum distance between boundary points. Sensitive to outliers.
- **Pixel Accuracy**: Fraction of correctly classified pixels. Can be misleading with class imbalance.

These metrics are standard for evaluating automated segmentation algorithms and serve as loss functions in deep learning.

## Educational Value

Students gain:
- **Metric intuition**: Understand what different measures actually evaluate
- **Practical skills**: Experience manual segmentation challenges
- **Quality trade-offs**: See speed versus accuracy in real-time
- **Clinical context**: Learn acceptable quality standards for medical applications

This foundation connects to deep learning, where segmentation quality drives loss function design and model evaluation.

## Repository & Resources

Complete source code, sample images, and educational materials available on [GitHub](https://github.com/amithjkamath/segmentation-evaluator) and [MATLAB File Exchange](https://ch.mathworks.com/matlabcentral/fileexchange/112505-segmentation-evaluator), enabling widespread adoption in educational settings.

