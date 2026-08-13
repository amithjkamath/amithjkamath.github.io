---
layout: page
title:
description:
img: assets/img/skip-connections.png
importance: 1
category: themes
related_publications: Kamath2025SkipConnections, Kamath2023DoWe, Kamath2022ContextVsFBR
_styles: >
  .demo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.75rem;
    margin: 1.5rem 0 2.5rem;
  }
  .demo-card { margin: 0; }
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
  <h1 class="display-4 mb-4">Robust Segmentation Models</h1>
  <h3 class="mb-4">Designing models that remain reliable when clinical data differ from the training distribution</h3>

  <div class="mt-4 mb-4">
    <span class="badge bg-primary me-2">Distribution Shift</span>
    <span class="badge bg-secondary me-2">Architecture Design</span>
    <span class="badge bg-success me-2">Clinical Reliability</span>
  </div>

  <a href="#demos" class="btn btn-sm btn-outline-primary">Watch the demos</a>
</div>

---

## The Research Question

High benchmark accuracy does not guarantee dependable behavior across scanners, protocols, institutions, anatomies, or image-quality changes. This research axis asks which architectural and training choices make segmentation models reliable across that variation, and how robustness should be measured before clinical deployment.

The emphasis is on the **shape of model behavior**, not only its mean test score: degradation under shift, worst-case performance, consistency across subgroups, and the trade-off between peak accuracy and stability.

<a id="demos"></a>

## Demos: watching robustness break

These videos are the moving version of the MICCAI 2023 and Computers in Biology and Medicine 2025 papers. Each one puts the **same six models** through the **same test images**, then slowly makes the object harder to tell apart from its surroundings, further and further from anything the models saw while learning. The point is to watch where each one gives up.

Read a panel from left to right. First the **clean image**. Then the **ground truth**, which is what the model should produce. Then the **image it actually sees**, after we have made things difficult. Then its **prediction laid over the truth**, with a Dice score underneath (1.000 is a perfect match, 0.000 means it found nothing). Cyan is what a human expert drew, magenta is what the model guessed.

Each row is a different model. They are arranged so that the ones with skip connections, which are shortcuts that pass fine detail straight from the input side to the output side, sit next to near-identical models built without them. That pairing is the whole experiment.

<p class="demo-hint text-muted"><i class="fa-solid fa-expand"></i> The panels are dense, so use the fullscreen button on any video if you want to read the Dice scores.</p>

### Made-up images, where we control everything

The clearest way to see the effect. A textured blob sits on a textured background, and a dial called α slowly mixes one texture into the other. At α = 0.10 the images look like the ones the models trained on. By α = 0.88 the blob and the background are nearly the same stuff, and a model that has learned to lean on fine detail has nothing left to lean on.

<div class="demo-grid">
  <figure class="demo-card">
    <video controls loop muted playsinline preload="none" poster="{{ '/assets/video/robustness/synthetic_foreground-poster.jpg' | relative_url }}">
      <source src="{{ '/assets/video/robustness/synthetic_foreground.mp4' | relative_url }}" type="video/mp4" />
      Your browser does not support embedded video.
    </video>
    <figcaption class="caption">
      <strong>The blob starts looking like its background</strong>
      As the dial turns, the object takes on the texture around it. The models with skip connections are the first to fall over: at high α, U-Net++ and V-Net drop to a Dice of 0.000, while the versions without skips still find roughly the right shape.
    </figcaption>
  </figure>
  <figure class="demo-card">
    <video controls loop muted playsinline preload="none" poster="{{ '/assets/video/robustness/synthetic_background-poster.jpg' | relative_url }}">
      <source src="{{ '/assets/video/robustness/synthetic_background.mp4' | relative_url }}" type="video/mp4" />
      Your browser does not support embedded video.
    </video>
    <figcaption class="caption">
      <strong>The background starts looking like the blob</strong>
      The same trick in reverse, and the models fail in a completely different way. Instead of losing the object, they start seeing it everywhere. Two failures this different can produce the same average score, which is exactly why an average score is not enough.
    </figcaption>
  </figure>
</div>

### Real patient scans, four of them

The same experiment on real medical images, covering four parts of the body and four kinds of scanner. Each video steps through four difficulty settings: **easier** (the background is blurred out), **unperturbed** (the images the models trained on), **harder** and **hardest** (increasing amounts of grain, at σ² = 0.1 and σ² = 0.3). It then repeats this over a run of cases the models had never seen.

<div class="demo-grid">
  <figure class="demo-card">
    <video controls loop muted playsinline preload="none" poster="{{ '/assets/video/robustness/busi-poster.jpg' | relative_url }}">
      <source src="{{ '/assets/video/robustness/busi.mp4' | relative_url }}" type="video/mp4" />
      Your browser does not support embedded video.
    </video>
    <figcaption class="caption">
      <strong>Breast ultrasound (BUSI)</strong>
      Finding a lesion in ultrasound, which is grainy to begin with. Adding grain here is not an artificial test, it is what a poorer scan on a busy day actually looks like.
    </figcaption>
  </figure>
  <figure class="demo-card">
    <video controls loop muted playsinline preload="none" poster="{{ '/assets/video/robustness/glas-poster.jpg' | relative_url }}">
      <source src="{{ '/assets/video/robustness/glas.mp4' | relative_url }}" type="video/mp4" />
      Your browser does not support embedded video.
    </video>
    <figcaption class="caption">
      <strong>Colon histology (GLaS)</strong>
      Outlining glands under a microscope. Here the edge of a gland is defined by its texture rather than its brightness, which makes it the cruellest test for a model that relies on fine detail.
    </figcaption>
  </figure>
  <figure class="demo-card">
    <video controls loop muted playsinline preload="none" poster="{{ '/assets/video/robustness/heart-poster.jpg' | relative_url }}">
      <source src="{{ '/assets/video/robustness/heart.mp4' | relative_url }}" type="video/mp4" />
      Your browser does not support embedded video.
    </video>
    <figcaption class="caption">
      <strong>Left atrium (heart MRI)</strong>
      A chamber of the heart, which has a consistent and recognisable shape. The models cope better here, and they stay closer together as things get harder.
    </figcaption>
  </figure>
  <figure class="demo-card">
    <video controls loop muted playsinline preload="none" poster="{{ '/assets/video/robustness/spleen-poster.jpg' | relative_url }}">
      <source src="{{ '/assets/video/robustness/spleen.mp4' | relative_url }}" type="video/mp4" />
      Your browser does not support embedded video.
    </video>
    <figcaption class="caption">
      <strong>Spleen (CT)</strong>
      A big organ on a CT scan, where brightness values mean the same thing from one hospital to the next. Included to check whether the pattern still holds when texture is not the main clue.
    </figcaption>
  </figure>
</div>

<p class="demo-hint text-muted">
  These clips come from the skip-connection study. Its full write-up, with the method, the numbers for every architecture and the code, lives on its own page: <a href="https://amithjkamath.github.io/to_skip_or_not/" target="_blank" rel="noopener noreferrer">Do we really need that skip-connection?</a> You can also try it yourself on <a href="https://huggingface.co/spaces/amithjkamath/segroc" target="_blank" rel="noopener noreferrer">Hugging Face Spaces</a>.
</p>

### The same question, asked of the patch size

A 3D network never sees a whole scan, only a cropped patch, and the size of that crop sets two things at once that pull against each other: a bigger patch shows more surrounding anatomy, and at the same time buries the object in background. All three architectures tested prefer the context. But the crop size also fixes how *wide* a range of foreground-to-background ratios the model is ever shown — at a 96³ patch it is about a tenth as wide as at 32³ — and outside that range UNETR and attention-Unet lose 0.26 to 0.84 Dice where a vanilla U-Net loses 0.014 to 0.023. The same divergence between accuracy and robustness, reached through a different knob.

<p class="demo-hint text-muted">
  Its own page has the videos, the numbers and the code: <a href="https://amithjkamath.github.io/context_vs_fbr/" target="_blank" rel="noopener noreferrer">Context versus foreground ratio</a>.
</p>

---

## Connection to the PhD Thesis

[Part Three of my PhD thesis](/dose-aware-contour-qa/partthree/) established the starting point for this program. It studied how skip connections, task complexity, texture, context, and foreground ratio affect U-Net-family models under controlled distribution shifts.

That work supports a broader principle used throughout the thesis: dose-aware contour QA is only trustworthy when the segmentation and dose-prediction components remain sensitive to meaningful changes without becoming brittle to irrelevant ones.

## What the Completed Work Established

- **Architecture choices are conditional.** Skip connections are most useful as task complexity increases; they are not automatically beneficial for every segmentation problem.
- **Accuracy and robustness can diverge.** The architecture with the strongest in-distribution result may degrade more sharply under texture or domain shift.
- **Data composition matters.** Spatial context and foreground-to-background balance change model behavior, especially for attention-based and transformer architectures.
- **Evaluation must expose failure behavior.** Mean Dice alone obscures variability, tail risk, and deployment-relevant degradation.

Each study keeps its own write-up next to its code, rather than being restated here:

- **[Do we really need that skip-connection?](https://amithjkamath.github.io/to_skip_or_not/)**, MICCAI 2023 and its Computers in Biology and Medicine 2025 journal extension. Method, all six architectures, four datasets, and the videos above in their full context.
- **[Context versus foreground ratio](https://amithjkamath.github.io/context_vs_fbr/)**, Medical Imaging Meets NeurIPS 2022. How 3D networks trade spatial context against class balance, and why the patch size also decides how much foreground-ratio drift a model survives.
- **DreamOn**, Frontiers in Radiology 2024. Data augmentation to close the gap between expert radiologists and deep learning classifiers.

The full list, with links, is on the [publications page](/publications/#robust-segmentation-models).

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
  <a href="https://amithjkamath.github.io/to_skip_or_not/" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-primary me-2">Read the skip-connection study</a>
  <a href="https://amithjkamath.github.io/context_vs_fbr/" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-primary me-2">Read the context-versus-FBR study</a>
  <a href="https://huggingface.co/spaces/amithjkamath/segroc" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-warning me-2">Try the SegRoC demo</a>
  <a href="/publications/#robust-segmentation-models" class="btn btn-sm btn-outline-primary">All publications</a>
</div>
