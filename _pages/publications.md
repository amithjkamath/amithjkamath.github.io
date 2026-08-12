---
layout: page
title: Publications
permalink: /publications/
description:
nav: false
nav_order: 4
_styles: >
  .pub-list { list-style: none; padding-left: 0; margin: 0 0 2rem; }
  .pub-list li { margin-bottom: 1.6rem; }
  .pub-id {
    font-family: var(--global-theme-font-family, monospace);
    font-weight: 700;
    font-size: 0.8rem;
    letter-spacing: 0.04em;
    color: var(--global-theme-color);
    margin-right: 0.4rem;
  }
  .pub-title { font-weight: 600; }
  .pub-meta { font-size: 0.88rem; color: var(--global-text-color-light); }
  .pub-links { font-size: 0.85rem; }
  .theme-lead { margin-bottom: 1.2rem; }
  .pub-key { font-size: 0.82rem; color: var(--global-text-color-light); }
---

<!-- _pages/publications.md -->

**When can you trust a computer's outline of a tumour, and how does a busy clinician check it quickly?** Everything below is one of three attempts at an answer.

<span class="pub-id">T2</span> **[Fast and Reliable Dosimetric Contour QA](/dose-aware-contour-qa/)**, PhD thesis, University of Bern, 2025.

<p class="pub-key"><span class="pub-id">C</span> conference &middot; <span class="pub-id">J</span> journal &middot; <span class="pub-id">W</span> workshop &middot; <span class="pub-id">T</span> thesis, numbered oldest to newest.</p>

---

<a id="robust-segmentation-models"></a>

## [Robust Segmentation Models](/projects/Theme-Robustness/)

<p class="theme-lead">Which design choices survive a scan from a different hospital, and which quietly break. <a href="/projects/Theme-Robustness/#demos">Watch them break</a>.</p>

<ul class="pub-list">
<li>
<span class="pub-id">J5</span> <span class="pub-title">The impact of U-Net architecture choices and skip connections on the robustness of segmentation across texture variations</span><br />
<span class="pub-meta"><b>A. Kamath</b>, J. Willmann, N. Andratschke, M. Reyes · <i>Computers in Biology and Medicine</i>, 2025</span><br />
<span class="pub-links"><a href="https://www.sciencedirect.com/science/article/pii/S0010482524014951">paper</a> · <a href="https://github.com/amithjkamath/to_skip_or_not">code</a> · <a href="https://amithjkamath.github.io/to_skip_or_not/">project page</a></span>
</li>
<li>
<span class="pub-id">J4</span> <span class="pub-title">DreamOn: a data augmentation strategy to narrow the robustness gap between expert radiologists and deep learning classifiers</span><br />
<span class="pub-meta">L. Lerch, L. S. Huber, <b>A. Kamath</b>, A. Pöllinger, A. Pahud de Mortanges, V. C. Obmann, F. Dammann, W. Senn, M. Reyes · <i>Frontiers in Radiology</i>, 2024</span><br />
<span class="pub-links"><a href="https://www.frontiersin.org/journals/radiology/articles/10.3389/fradi.2024.1420545/pdf">paper</a></span>
</li>
<li>
<span class="pub-id">C7</span> <span class="pub-title">Do we really need that skip-connection? Understanding its interplay with task complexity</span><br />
<span class="pub-meta"><b>A. Kamath</b>, J. Willmann, N. Andratschke, M. Reyes · <i>MICCAI</i>, 2023 · early accept, 14% · 🏆 Uni Bern BME Club Travel Award</span><br />
<span class="pub-links"><a href="https://link.springer.com/chapter/10.1007/978-3-031-43901-8_29">paper</a> · <a href="https://github.com/amithjkamath/to_skip_or_not">code</a> · <a href="https://www.youtube.com/watch?v=YreG6vC64aw">talk</a> · <a href="https://amithjkamath.github.io/to_skip_or_not/">project page</a></span>
</li>
<li>
<span class="pub-id">W2</span> <span class="pub-title">How do 3D image segmentation networks behave across the context versus foreground ratio trade-off?</span><br />
<span class="pub-meta"><b>A. Kamath</b>, Y. Suter, S. You, M. Mueller, J. Willmann, N. Andratschke, M. Reyes · <i>Medical Imaging Meets NeurIPS Workshop</i>, 2022</span><br />
<span class="pub-links"><a href="http://www.cse.cuhk.edu.hk/~qdou/public/medneurips2022/72.pdf">paper</a> · <a href="https://github.com/amithjkamath/context_vs_fbr">code</a> · <a href="/projects/22-MedNeurIPS/">project page</a></span>
</li>
</ul>

---

<a id="personalized-contour-review-and-correction"></a>

## [Personalized Contour Review and Correction](/projects/Theme-Correction/)

<p class="theme-lead">Two experts outline the same tumour differently and both can be right. Telling genuine errors apart from reasonable disagreement.</p>

<ul class="pub-list">
<li>
<span class="pub-id">J7</span> <span class="pub-title">Predicting the impact of target volume contouring variations on the organ at risk dose: results of a qualitative survey</span><br />
<span class="pub-meta">J. Willmann, <b>A. Kamath</b>, R. Poel, E. Riggenbach, L. Mose, J. Bertholet, S. Muller, D. Schmidhalter, N. Andratschke, E. Ermiş, et al. · <i>Radiotherapy and Oncology</i>, 2025</span><br />
<span class="pub-links"><a href="https://www.sciencedirect.com/science/article/pii/S0167814025045037">paper</a> · <a href="/projects/24-MIDL/">project page</a></span>
</li>
<li>
<span class="pub-id">J6</span> <span class="pub-title">Efficient review of automatic contouring of OARs in the brain: a dual-layer quality assurance approach combining geometric and dosimetric validation</span><br />
<span class="pub-meta">R. Poel, <b>A. Kamath</b>, E. Ermiş, E. Rüfenacht, N. Andratschke, P. Manser, D. M. Aebersold, M. Reyes · <i>Radiotherapy and Oncology</i>, 2025</span><br />
<span class="pub-links"><a href="https://scholar.google.com/citations?user=clej42kAAAAJ">paper</a></span>
</li>
<li>
<span class="pub-id">W3</span> <span class="pub-title">AutoDoseRank: automated dosimetry-informed segmentation ranking for radiotherapy</span><br />
<span class="pub-meta">Z. Mercado, <b>A. Kamath</b>, R. Poel, J. Willmann, E. Ermiş, E. Riggenbach, L. Mose, N. Andratschke, M. Reyes · <i>MICCAI Workshop on Cancer Prevention through Early Detection</i>, 2024</span><br />
<span class="pub-links"><a href="https://link.springer.com/chapter/10.1007/978-3-031-73376-5_21">paper</a> · <a href="https://github.com/amithjkamath/autodoserank">code</a> · <a href="/projects/24-MICCAIw/">project page</a></span>
</li>
<li>
<span class="pub-id">C8</span> <span class="pub-title">Comparing the performance of radiation oncologists versus a deep learning dose predictor to estimate dosimetric impact of segmentation variations</span><br />
<span class="pub-meta"><b>A. Kamath</b>, Z. Mercado, R. Poel, J. Willmann, E. Ermiş, E. Riggenbach, N. Andratschke, M. Reyes · <i>MIDL</i>, 2024 · oral, 18% acceptance</span><br />
<span class="pub-links"><a href="https://openreview.net/forum?id=SlMMyPqQTm">paper</a> · <a href="https://github.com/ubern-mia/radonc-vs-dldp">code</a> · <a href="https://youtu.be/Co9yUIAw6H0?t=3587">talk</a> · <a href="/projects/24-MIDL/">project page</a></span>
</li>
<li>
<span class="pub-id">C6</span> <span class="pub-title">Dose guidance for radiotherapy-oriented deep learning segmentation</span><br />
<span class="pub-meta">E. Rüfenacht, <b>A. Kamath</b>, et al. · <i>MICCAI</i>, 2023</span><br />
<span class="pub-links"><a href="https://scholar.google.com/citations?user=clej42kAAAAJ">paper</a></span>
</li>
<li>
<span class="pub-id">C5</span> <span class="pub-title">ASTRA: atomic surface transformations for radiotherapy quality assurance</span><br />
<span class="pub-meta"><b>A. Kamath</b>, R. Poel, J. Willmann, E. Ermiş, N. Andratschke, M. Reyes · <i>IEEE EMBC</i>, 2023 · 🏆 2nd Best Student Paper Award</span><br />
<span class="pub-links"><a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10341062">paper</a> · <a href="https://github.com/amithjkamath/astra">code</a> · <a href="https://www.youtube.com/watch?v=vghlJh8ACOY">talk</a> · <a href="/projects/23-EMBC/">project page</a></span>
</li>
</ul>

---

<a id="fast-and-sensitive-dose-prediction"></a>

## [Fast and Sensitive Dose Prediction](/projects/Theme-Dose-Proposal/)

<p class="theme-lead">Predicting the radiation dose an outline would produce in seconds rather than hours, without losing the sensitivity that makes it worth having.</p>

<ul class="pub-list">
<li>
<span class="pub-id">J2</span> <span class="pub-title">Deep-learning-based dose predictor for glioblastoma: assessing the sensitivity and robustness for dose awareness in contouring</span><br />
<span class="pub-meta">R. Poel, <b>A. Kamath</b>, J. Willmann, N. Andratschke, E. Ermiş, D. M. Aebersold, P. Manser, M. Reyes · <i>Cancers</i>, 2023</span><br />
<span class="pub-links"><a href="https://www.mdpi.com/2072-6694/15/17/4226">paper</a> · <a href="/projects/23-ISBI/">project page</a></span>
</li>
<li>
<span class="pub-id">C4</span> <span class="pub-title">How sensitive are deep learning based radiotherapy dose prediction models to variability in organs at risk segmentation?</span><br />
<span class="pub-meta"><b>A. Kamath</b>, R. Poel, J. Willmann, N. Andratschke, M. Reyes · <i>IEEE ISBI</i>, 2023</span><br />
<span class="pub-links"><a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10230559">paper</a> · <a href="https://github.com/amithjkamath/deepdosesens">code</a> · <a href="https://www.youtube.com/watch?v=Lz5-n4lA3QM">talk</a> · <a href="/projects/23-ISBI/">project page</a></span>
</li>
<li>
<span class="pub-id">C3</span> <span class="pub-title">Evaluating a deep learning based 3D dose prediction model for quality assurance of organ at risk contours</span><br />
<span class="pub-meta"><b>A. Kamath</b>, R. Poel, J. Willmann, N. Andratschke, M. Reyes · <i>55th Swiss Society for Radiobiology and Medical Physics</i>, 2022</span><br />
<span class="pub-links"><a href="https://scholar.google.com/citations?user=clej42kAAAAJ">paper</a></span>
</li>
</ul>

---

## Other Work

<p class="theme-lead">Outside the three axes above. The older entries are from a previous life in diffusion MRI.</p>

<ul class="pub-list">
<li>
<span class="pub-id">J3</span> <span class="pub-title">Orchestrating explainable artificial intelligence for multimodal and longitudinal data in medical imaging</span><br />
<span class="pub-meta">A. Pahud de Mortanges, H. Luo, S. Z. Shu, <b>A. Kamath</b>, Y. Suter, M. Shelan, A. Pöllinger, M. Reyes · <i>npj Digital Medicine</i>, 2024</span><br />
<span class="pub-links"><a href="https://www.nature.com/articles/s41746-024-01190-w">paper</a></span>
</li>
<li>
<span class="pub-id">J1</span> <span class="pub-title">PyRaDiSe: a Python package for DICOM-RT-based auto-segmentation pipeline construction and DICOM-RT data conversion</span><br />
<span class="pub-meta">E. Rüfenacht, <b>A. Kamath</b>, Y. Suter, R. Poel, E. Ermiş, S. Scheib, M. Reyes · <i>Computer Methods and Programs in Biomedicine</i>, 2023 · over 50 stars on GitHub</span><br />
<span class="pub-links"><a href="https://www.sciencedirect.com/science/article/pii/S0169260722006551">paper</a> · <a href="https://github.com/ubern-mia/pyradise">code</a></span>
</li>
<li>
<span class="pub-id">C2</span> <span class="pub-title">Optimal acquisition protocol for white matter fiber orientation mapping using generalized CSA-ODF reconstruction</span><br />
<span class="pub-meta"><b>A. Kamath</b>, I. Aganj, J. Xu, E. Yacoub, K. Ugurbil, G. Sapiro, C. Lenglet · <i>21st Annual Meeting and Exhibition of the ISMRM</i>, 2013</span><br />
<span class="pub-links"><a href="https://archive.ismrm.org/2013/0059.html">paper</a></span>
</li>
<li>
<span class="pub-id">W1</span> <span class="pub-title">Generalized constant solid angle ODF and optimal acquisition protocol for fiber orientation mapping</span><br />
<span class="pub-meta"><b>A. Kamath</b>, I. Aganj, J. Xu, E. Yacoub, K. Ugurbil, G. Sapiro, C. Lenglet · <i>MICCAI Workshop on Computational Diffusion MRI</i>, 2012</span><br />
<span class="pub-links"><a href="https://citeseerx.ist.psu.edu/document?repid=rep1&amp;type=pdf&amp;doi=dea85ae121334b35da1cdb81537f6b0683e7250b">paper</a></span>
</li>
<li>
<span class="pub-id">T1</span> <span class="pub-title">A generalized CSA-ODF model for fiber orientation mapping</span><br />
<span class="pub-meta"><b>A. Kamath</b> · Master's thesis, University of Minnesota, 2012</span><br />
<span class="pub-links"><a href="https://conservancy.umn.edu/handle/11299/140183">record</a></span>
</li>
<li>
<span class="pub-id">C1</span> <span class="pub-title">A novel device to monitor mobilization of fingers during treatment for stiffness of tendons</span><br />
<span class="pub-meta">J. Gonda, <b>A. Kamath</b>, V. Prasad, J. Kamath · <i>5th International Conference on Industrial and Information Systems</i>, 2010</span><br />
<span class="pub-links"><a href="https://ieeexplore.ieee.org/document/5578682">paper</a></span>
</li>
</ul>

<div class="alert alert-info" role="alert">
  <i class="fa-brands fa-google-scholar"></i> For citation counts and export-ready references, my <a href="https://scholar.google.com/citations?user=clej42kAAAAJ" target="_blank" rel="noopener noreferrer" class="alert-link" style="text-decoration: underline;">Google Scholar profile</a> is kept up to date.
</div>
