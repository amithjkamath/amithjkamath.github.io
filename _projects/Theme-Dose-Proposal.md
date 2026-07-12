---
layout: page
title:
description:
img: assets/img/dose-prediction.png
importance: 3
category: themes
related_publications: Poel2023Deep, Kamath2023HowSensitive
---

<div class="text-center mt-5">
  <h1 class="display-4 mb-4">Fast and Sensitive Dose Prediction</h1>
  <h3 class="mb-4">Predicting treatment dose quickly while preserving the effects of clinically meaningful contour variation</h3>

  <div class="mt-4 mb-4">
    <span class="badge bg-primary me-2">Dose Prediction</span>
    <span class="badge bg-secondary me-2">Model Sensitivity</span>
    <span class="badge bg-success me-2">Treatment Planning</span>
  </div>
</div>

---

## The Research Question

Radiotherapy planning depends on accurate three-dimensional dose calculation, but repeated treatment-planning calculations are too slow for large evaluation studies, rapid comparison of contour alternatives, or interactive review. This axis asks whether learned models can predict dose fast enough for those settings while remaining accurate, robust, and—crucially—sensitive to clinically meaningful contour changes.

Sensitivity is distinct from overall prediction accuracy. A model can reproduce the broad dose distribution yet smooth away the local effect of the contour variation that a quality-assurance workflow needs to detect.

## Connection to the PhD Thesis

[Part Two of my PhD thesis](/dose-aware-contour-qa/parttwo/) established the technical foundation for this axis. It evaluated dose-prediction accuracy, sensitivity to inter-expert contour variation, behavior on unusual cases, and the translation of local sensitivity into ASTRA's review maps.

The completed work established that:

- learned dose prediction can operate on a timescale suitable for rapid evaluation;
- sensitivity to contour changes must be tested separately from global dose accuracy;
- out-of-distribution behavior requires deliberate validation and mitigation; and
- local dose sensitivity can guide attention to consequential contour regions.

The associated studies are listed once in the [dose-prediction section of the publications page](/publications/#fast-and-sensitive-dose-prediction), while their linked project pages provide study-specific methods and results.

## Current Directions

I am continuing this axis through:

- architectures that preserve fine-grained anatomical sensitivity while modeling global treatment context;
- robust prediction across tumour sites, institutions, planning systems, and treatment techniques;
- calibrated uncertainty for unusual anatomies and out-of-distribution cases;
- faster feedback for iterative or adaptive treatment planning;
- evaluation of contour alternatives by predicted dose and treatment objectives; and
- integration of dose prediction with personalized contour proposals and interactive correction.

## Relationship to the Other Axes

- **[Segmentation robustness](/projects/Theme-Robustness/)** helps ensure that the anatomical inputs and learned representations remain dependable under deployment shifts.
- **[Personalized contour review and correction](/projects/Theme-Correction/)** uses dose prediction to distinguish harmless variation from alternatives that materially change treatment.

Dose prediction is therefore both a major modeling problem in its own right and the clinical bridge connecting segmentation output to radiotherapy decisions.

<div class="mt-4">
  <a href="/dose-aware-contour-qa/parttwo/" class="btn btn-sm btn-outline-primary me-2">Read Part Two of the thesis</a>
  <a href="/publications/#fast-and-sensitive-dose-prediction" class="btn btn-sm btn-outline-primary">See related publications</a>
</div>
