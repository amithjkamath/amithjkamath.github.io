---
layout: page
title:
description:
img: assets/img/dose-awareness.png
importance: 2
category: themes
related_publications: Willmann2025Predicting, Kamath2024Comparing, Mercado2024AutoDoseRank
---

<div class="text-center mt-5">
  <h1 class="display-4 mb-4">Personalized Contour Review and Correction</h1>
  <h3 class="mb-4">Representing plausible clinical variation while helping clinicians find and correct consequential errors</h3>

  <div class="mt-4 mb-4">
    <span class="badge bg-primary me-2">Inter-rater Variability</span>
    <span class="badge bg-secondary me-2">Human-AI Workflow</span>
    <span class="badge bg-success me-2">Interactive Correction</span>
  </div>
</div>

---

## The Research Question

Automatic segmentation saves time only when its outputs can be reviewed and corrected efficiently. Yet review is not simply a comparison against one perfect reference: experts can disagree, several contours may be clinically defensible, and the importance of a difference depends on the patient and treatment context.

This axis therefore combines two questions that belong in the same workflow:

1. **What should the model represent?** Learn from multiple expert annotations, preserve clinically meaningful variation, and produce plausible alternatives or context-conditioned outputs rather than collapsing every disagreement into annotation noise.
2. **How should a clinician act on it?** Identify consequential differences, focus attention, support correction, and re-evaluate an edit without requiring exhaustive voxel-by-voxel inspection.

The aim is a better division of work: models expose plausible alternatives and clinically grounded evidence; clinicians retain control over interpretation and correction.

## Connection to the PhD Thesis

This axis grows from [Part One of my PhD thesis](/dose-aware-contour-qa/partone/), which showed substantial variation in expert judgements of contour changes and tested automated assessment and ranking. [Part Two](/dose-aware-contour-qa/parttwo/) supplied the fast dose-prediction signal needed to localize consequential regions.

The thesis produced two complementary proof-of-concept tools:

- **AutoDoseRank** prioritizes candidate segmentations by dosimetric quality.
- **ASTRA** highlights local surface regions where a contour edit is likely to change dose.

The continuing work moves earlier and later in that loop: model architectures should represent genuine observer and patient variation, while correction interfaces should help clinicians resolve the remaining uncertainty efficiently.

## What the Completed Work Established

- Geometric similarity to one reference is an incomplete proxy for clinical consequence.
- Expert assessment of contour variations can be inconsistent, so disagreement must be characterized rather than silently averaged away.
- Fast dose prediction can triage alternatives and localize consequential regions without a full treatment-planning recalculation for every edit.
- Combining geometric and dosimetric checks provides a more useful review structure than either alone.

The supporting studies and tools are listed once on the [publications page](/publications/#personalized-contour-review-and-correction); their linked project pages contain the study-specific results.

## Current Directions

I am investigating:

- architectures and objectives that learn from multiple expert annotations;
- generation or preservation of several plausible contours;
- conditioning on patient, task, institution, observer, or treatment context;
- separation of clinically meaningful ambiguity from model failure;
- interactive workflows connecting detection, prioritization, correction, and re-evaluation;
- local guidance that explains why a region deserves attention; and
- evaluation based on coverage of plausible outputs, calibration, time saved, edits avoided, and consequential errors resolved.

## Relationship to the Other Axes

- **[Segmentation robustness](/projects/Theme-Robustness/)** seeks invariance to irrelevant acquisition and deployment variation. Personalized correction instead preserves variation that is clinically meaningful.
- **[Fast and sensitive dose prediction](/projects/Theme-Dose-Proposal/)** supplies a treatment-aware signal for deciding whether an alternative is harmless, preferable, or in need of correction.

The combined goal is sensitivity to meaningful variation, stability to nuisance variation, and an efficient workflow for resolving what remains.

<div class="mt-4">
  <a href="/dose-aware-contour-qa/" class="btn btn-sm btn-outline-primary me-2">Read the thesis</a>
  <a href="/publications/#personalized-contour-review-and-correction" class="btn btn-sm btn-outline-primary">See related publications</a>
</div>
