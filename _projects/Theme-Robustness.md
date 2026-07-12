---
layout: page
title:
description:
img: assets/img/skip-connections.png
importance: 1
category: themes
related_publications: Kamath2025SkipConnections, Kamath2023DoWe
---

<div class="text-center mt-5">
  <h1 class="display-4 mb-4">Robust Segmentation Models</h1>
  <h3 class="mb-4">Designing models that remain reliable when clinical data differ from the training distribution</h3>

  <div class="mt-4 mb-4">
    <span class="badge bg-primary me-2">Distribution Shift</span>
    <span class="badge bg-secondary me-2">Architecture Design</span>
    <span class="badge bg-success me-2">Clinical Reliability</span>
  </div>
</div>

---

## The Research Question

High benchmark accuracy does not guarantee dependable behavior across scanners, protocols, institutions, anatomies, or image-quality changes. This research axis asks which architectural and training choices make segmentation models reliable across that variation, and how robustness should be measured before clinical deployment.

The emphasis is on the **shape of model behavior**, not only its mean test score: degradation under shift, worst-case performance, consistency across subgroups, and the trade-off between peak accuracy and stability.

## Connection to the PhD Thesis

[Part Three of my PhD thesis](/dose-aware-contour-qa/partthree/) established the starting point for this program. It studied how skip connections, task complexity, texture, context, and foreground ratio affect U-Net-family models under controlled distribution shifts.

That work supports a broader principle used throughout the thesis: dose-aware contour QA is only trustworthy when the segmentation and dose-prediction components remain sensitive to meaningful changes without becoming brittle to irrelevant ones.

## What the Completed Work Established

- **Architecture choices are conditional.** Skip connections are most useful as task complexity increases; they are not automatically beneficial for every segmentation problem.
- **Accuracy and robustness can diverge.** The architecture with the strongest in-distribution result may degrade more sharply under texture or domain shift.
- **Data composition matters.** Spatial context and foreground-to-background balance change model behavior, especially for attention-based and transformer architectures.
- **Evaluation must expose failure behavior.** Mean Dice alone obscures variability, tail risk, and deployment-relevant degradation.

The supporting studies are listed once on the [publications page](/publications/#robust-segmentation-models), with detailed methods and results on the linked paper project pages.

## Current Directions

I am continuing this axis through:

- robustness evaluation across natural rather than only synthetic shifts;
- architecture and training choices that balance accuracy, calibration, and stability;
- subgroup- and case-level analysis that exposes who or what a model fails on;
- uncertainty signals that lead to useful review decisions rather than generic confidence scores; and
- robustness criteria for models that can produce more than one plausible segmentation.

The last direction connects directly to [personalized contour review and correction](/projects/Theme-Correction/): a model should represent genuine clinical ambiguity while remaining stable to irrelevant acquisition variation.

## Role in the Wider Research Program

Robustness is the reliability axis of a three-part program. [Personalized contour review and correction](/projects/Theme-Correction/) determines which outputs are plausible and how clinicians act on them, while [fast and sensitive dose prediction](/projects/Theme-Dose-Proposal/) provides a treatment-aware signal for comparing alternatives. Together they aim to make segmentation systems not merely accurate, but safe and useful in practice.

<div class="mt-4">
  <a href="https://huggingface.co/spaces/amithjkamath/segroc" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-warning me-2">Try the SegRoC robustness demo</a>
  <a href="/publications/#robust-segmentation-models" class="btn btn-sm btn-outline-primary">See related publications</a>
</div>
