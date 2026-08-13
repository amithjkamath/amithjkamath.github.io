---
layout: page
title:
description:
permalink: /projects/Theme-Dose-Proposal/
nav: false
related_publications: Poel2023Deep, Kamath2023HowSensitive
_styles: >
  .demo-stack { margin: 1.5rem 0 2.5rem; }
  .demo-card { margin: 0 0 1.75rem; }
  .demo-card video {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 6px;
    background: #0d1117;
  }
  .demo-card figcaption {
    margin-top: 0.6rem;
    font-size: 0.85rem;
    line-height: 1.45;
  }
  .demo-card figcaption strong { display: block; }
  .demo-hint { font-size: 0.85rem; }
---

<div class="text-center mt-5">
  <h1 class="display-4 mb-4">Fast and Sensitive Dose Prediction</h1>
  <h3 class="mb-4">Predicting treatment dose quickly while preserving the effects of clinically meaningful contour variation</h3>

  <div class="mt-4 mb-4">
    <span class="badge bg-primary me-2">Dose Prediction</span>
    <span class="badge bg-secondary me-2">Model Sensitivity</span>
    <span class="badge bg-success me-2">Treatment Planning</span>
  </div>

  <a href="#demos" class="btn btn-sm btn-outline-primary">Watch the demos</a>
</div>

---

## The Research Question

Radiotherapy planning depends on accurate three-dimensional dose calculation, but repeated treatment-planning calculations are too slow for large evaluation studies, rapid comparison of contour alternatives, or interactive review. This axis asks whether learned models can predict dose fast enough for those settings while remaining accurate, robust, and above all sensitive to clinically meaningful contour changes.

Sensitivity is distinct from overall prediction accuracy. A model can reproduce the broad dose distribution yet smooth away the local effect of the contour variation that a quality-assurance workflow needs to detect.

<a id="demos"></a>

## Demos: dose prediction in motion

A treatment plan says how much radiation lands where. Producing one properly takes a planning system and hours of work, which is why nobody re-plans a treatment just to check whether an organ was outlined well. These clips come from a model that predicts the same dose distribution in about fifteen seconds, close enough to be useful while the contours are still editable.

In every clip the planning CT is the grey background, the heat map is dose in Gy, and the outlined structures are the tumour target and the organs at risk being protected.

<p class="demo-hint text-muted"><i class="fa-solid fa-expand"></i> Use the fullscreen control on any clip to read the per-panel numbers.</p>

### Does the prediction move when a contour moves?

This is the question the whole idea rests on. Ten plausible outlines of the left optic nerve are drawn in turn. The left panel is the plan a treatment planning system re-optimised for each one, and the right is the model's prediction for the same outline.

<div class="demo-stack">
  <figure class="demo-card">
    <video controls loop muted playsinline preload="none" poster="{{ '/assets/video/dose/optic_nerve_sensitivity-poster.jpg' | relative_url }}">
      <source src="{{ '/assets/video/dose/optic_nerve_sensitivity.mp4' | relative_url }}" type="video/mp4" />
      Your browser does not support embedded video.
    </video>
    <figcaption class="caption">
      <strong>Sensitivity to left optic nerve contour variation</strong>
      Each frame is one redrawing of the nerve, solid, with the original dashed beside it. Under each panel is the mean dose that outline receives; the subtitle gives the shift from the original for the plan and for the prediction. Across the ten outlines those two shifts correlate at 0.926, while the Dice overlap between outlines correlates at only &minus;0.471 &mdash; geometry alone does not tell you which edits matter. Full details on the <a href="https://amithjkamath.github.io/deepdosesens/">project page</a>.
    </figcaption>
  </figure>
</div>

### What happens on anatomy the model never saw

Targets that wrap around a structure, or that break into several separate lesions, were absent from the training set. Each clip shows the treatment plan, the original model, and the same model retrained with six such cases.

<div class="demo-stack">
  <figure class="demo-card">
    <video controls loop muted playsinline preload="none" poster="{{ '/assets/video/dose/robustness_concave-poster.jpg' | relative_url }}">
      <source src="{{ '/assets/video/dose/robustness_concave.mp4' | relative_url }}" type="video/mp4" />
      Your browser does not support embedded video.
    </video>
    <figcaption class="caption">
      <strong>A concave target</strong>
      In this case the dose score improves from 0.67 to 0.60 Gy after retraining. The failure was in the training distribution rather than the architecture, and six extra cases recover most of the conformity that was lost.
    </figcaption>
  </figure>
  <figure class="demo-card">
    <video controls loop muted playsinline preload="none" poster="{{ '/assets/video/dose/robustness_multiple-poster.jpg' | relative_url }}">
      <source src="{{ '/assets/video/dose/robustness_multiple.mp4' | relative_url }}" type="video/mp4" />
      Your browser does not support embedded video.
    </video>
    <figcaption class="caption">
      <strong>A target split into several lesions</strong>
      The same three panels for the other unfamiliar shape. Curating the training set for shape coverage turns out to be cheaper than collecting more data in general.
    </figcaption>
  </figure>
</div>

### How close the prediction gets

Sweeping through a case from the base of the skull upwards, with the treatment plan on the left and the prediction on the right.

<div class="demo-stack">
  <figure class="demo-card">
    <video controls loop muted playsinline preload="none" poster="{{ '/assets/video/dose/dose_sweep_DLDP_086-poster.jpg' | relative_url }}">
      <source src="{{ '/assets/video/dose/dose_sweep_DLDP_086.mp4' | relative_url }}" type="video/mp4" />
      Your browser does not support embedded video.
    </video>
    <figcaption class="caption">
      <strong>The hardest case in the test set</strong>
      The largest target of the twenty test cases, with seven organs at risk receiving more than 20 Gy, and the worst dose score of the set. Even here the predicted distribution tracks the plan closely enough to reason with. Three more sweeps are on the <a href="https://amithjkamath.github.io/deepdosesens/#demos">project page</a>.
    </figcaption>
  </figure>
</div>

<p class="demo-hint text-muted">
  These clips come from the DeepDoseSens study. Its full write-up, covering both the ISBI 2023 conference paper and the Cancers 2023 journal extension, with the model, the per-organ results and the code, lives on its own page: <a href="https://amithjkamath.github.io/deepdosesens/" target="_blank" rel="noopener noreferrer">How sensitive is a dose prediction model to the contours you feed it?</a>
</p>

---

## Connection to the PhD Thesis

[Part Two of my PhD thesis](/dose-aware-contour-qa/parttwo/) established the technical foundation for this axis. It evaluated dose-prediction accuracy, sensitivity to inter-expert contour variation, behavior on unusual cases, and the translation of local sensitivity into ASTRA's review maps.

The completed work established that:

- learned dose prediction can operate on a timescale suitable for rapid evaluation;
- sensitivity to contour changes must be tested separately from global dose accuracy;
- out-of-distribution behavior requires deliberate validation and mitigation; and
- local dose sensitivity can guide attention to consequential contour regions.

Each study keeps its own write-up next to its code, rather than being restated here:

- **[How sensitive is a dose prediction model to the contours you feed it?](https://amithjkamath.github.io/deepdosesens/)**, IEEE ISBI 2023 and its Cancers 2023 journal extension. The cascaded 3D U-Net, the sensitivity experiment, the out-of-distribution stress tests, and every table recomputed from the archived volumes.
- **[ASTRA](https://amithjkamath.github.io/astra/)**, IEEE EMBC 2023. Turning local dose sensitivity into review maps that point a clinician at the contour regions worth checking.

The full list, with links, is on the [publications page](/publications/#fast-and-sensitive-dose-prediction).

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
  <a href="https://amithjkamath.github.io/deepdosesens/" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-primary me-2">Read the DeepDoseSens study</a>
  <a href="/dose-aware-contour-qa/parttwo/" class="btn btn-sm btn-outline-primary me-2">Read Part Two of the thesis</a>
  <a href="/publications/#fast-and-sensitive-dose-prediction" class="btn btn-sm btn-outline-primary">All publications</a>
</div>
