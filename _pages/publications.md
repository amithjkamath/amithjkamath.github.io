---
layout: page
title: Publications
permalink: /publications/
description:
nav: false
nav_order: 4
---

<!-- _pages/publications.md -->

My research is organized around a common question: **how can medical image segmentation and radiotherapy planning become reliable, clinically meaningful, and efficient to review?** My [PhD thesis on dose-aware contour quality assurance](/dose-aware-contour-qa/) established the clinical and technical foundation. I am continuing this work along three connected axes:

1. **[Robust segmentation models](/projects/Theme-Robustness/)** — designing and evaluating models that remain dependable across scanners, protocols, anatomies, image quality, and other distribution shifts.
2. **[Personalized contour review and correction](/projects/Theme-Correction/)** — treating observer variation as useful information, representing multiple plausible outputs, and helping clinicians identify and correct consequential errors efficiently.
3. **[Fast and sensitive dose prediction](/projects/Theme-Dose-Proposal/)** — predicting treatment dose quickly while preserving sensitivity to contour changes, so alternatives can be evaluated by clinical consequence.

These are not separate pipelines. Robustness determines whether a model can be trusted on a new case. Personalized correction determines which outputs are plausible and how a clinician should act on them. Dose prediction supplies a fast, clinically meaningful signal for comparing those outputs and guiding review.

---

<a id="robust-segmentation-models"></a>

### Robust Segmentation Models

This work studies how architecture and data composition shape reliability under distribution shift. The [research thread](/projects/Theme-Robustness/) connects the completed studies to ongoing work on deployment-oriented robustness.

**The impact of U-Net architecture choices and skip connections on the robustness of segmentation across texture variations**  
Amith Kamath, Jonas Willmann, Nicolaus Andratschke, Mauricio Reyes  
*Computers in Biology and Medicine*, 2025 | Impact Factor: 6.3 (2024), Acceptance Rate: 12%

🏷️ *Themes:* Robustness, Architecture Design, Clinical Deployment  
[pdf](https://www.sciencedirect.com/science/article/pii/S0010482524014951) | [code](https://github.com/amithjkamath/to_skip_or_not) | [project page](/projects/23-MICCAI/)

**Do we really need that skip-connection? understanding its interplay with task complexity**  
Amith Kamath, Jonas Willmann, Nicolaus Andratschke, Mauricio Reyes  
*MICCAI 2023* | International Conference on Medical Image Computing and Computer-Assisted Intervention | Early accept: 14%<br>
🏆 **Uni Bern BME Club Travel Award Winner**

🏷️ *Themes:* Robustness, Architecture Design, Task Complexity  
[pdf](https://link.springer.com/chapter/10.1007/978-3-031-43901-8_29) | [code](https://github.com/amithjkamath/to_skip_or_not) | [video](https://www.youtube.com/watch?v=YreG6vC64aw) | [project page](/projects/23-MICCAI/)

**How do 3D image segmentation networks behave across the context versus foreground ratio trade-off?**  
Amith Kamath, Yannick Suter, Suhang You, Michael Mueller, Jonas Willmann, Nicolaus Andratschke, Mauricio Reyes  
*Medical Imaging Meets NeurIPS Workshop*, NeurIPS 2022

🏷️ *Themes:* Robustness, 3D Segmentation, Context vs Class Balance  
[pdf](http://www.cse.cuhk.edu.hk/~qdou/public/medneurips2022/72.pdf) | [code](https://github.com/amithjkamath/context_vs_fbr) | [project page](/projects/22-MedNeurIPS/)

---

<a id="personalized-contour-review-and-correction"></a>

### Personalized Contour Review and Correction

This axis moves beyond asking whether a contour overlaps a single reference. It asks which differences are true errors, which reflect defensible variation between experts, how models can represent multiple plausible outputs, and where clinical review should be focused. The [research thread](/projects/Theme-Correction/) connects observer variability, model personalization, evaluation methods, and correction tools.

**Predicting the impact of target volume contouring variations on the organ at risk dose: results of a qualitative survey**  
Jonas Willmann, Amith Kamath, Robert Poel, Elena Riggenbach, Lucas Mose, Jenny Bertholet, Silvan Muller, Daniel Schmidhalter, Nicolaus Andratschke, Ekin Ermiş, et al.  
*Radiotherapy and Oncology*, 2025 | Impact Factor: 5.3

🏷️ *Themes:* Inter-rater Variability, Clinical Validation, Expert Assessment<br>
[pdf](https://www.sciencedirect.com/science/article/pii/S0167814025045037) | [project page](/projects/24-MIDL/)

**Efficient review of automatic contouring of OARs in the brain: A dual-layer quality assurance approach combining geometric and dosimetric validation**<br>
*Radiotherapy and Oncology*, 2025

🏷️ *Themes:* Contour Review, Geometric QA, Dosimetric QA<br>
[publication](https://scholar.google.com/citations?user=clej42kAAAAJ)

**AutoDoseRank: Automated Dosimetry-Informed Segmentation Ranking for Radiotherapy**  
Zahira Mercado, Amith Kamath, Robert Poel, Jonas Willmann, Ekin Ermiş, Elena Riggenbach, Lucas Mose, Nicolaus Andratschke, Mauricio Reyes  
*MICCAI Workshop on Cancer Prevention through Early Detection*, 2024

🏷️ *Themes:* Quality Assurance, Automated Ranking, Clinical Workflow<br>
[pdf](https://link.springer.com/chapter/10.1007/978-3-031-73376-5_21) | [code](https://github.com/amithjkamath/autodoserank) | [project page](/projects/24-MICCAIw/)

**Comparing the Performance of Radiation Oncologists versus a Deep Learning Dose Predictor to Estimate Dosimetric Impact of Segmentation Variations for Radiotherapy**  
Amith Kamath, Zahira Mercado, Robert Poel, Jonas Willmann, Ekin Ermiş, Elena Riggenbach, Nicolaus Andratschke, Mauricio Reyes  
*MIDL 2024* | Medical Imaging with Deep Learning<br>
**Oral presentation — 18% acceptance rate**

🏷️ *Themes:* Dose Prediction, Human-AI Comparison, Clinical Decision Making  
[pdf](https://openreview.net/forum?id=SlMMyPqQTm) | [code](https://github.com/ubern-mia/radonc-vs-dldp) | [video](https://youtu.be/Co9yUIAw6H0?t=3587) | [project page](/projects/24-MIDL/)

**Dose Guidance for Radiotherapy-oriented Deep Learning Segmentation**<br>
*MICCAI 2023*

🏷️ *Themes:* Dose Guidance, Segmentation, Quality Assurance<br>
[publication](https://scholar.google.com/citations?user=clej42kAAAAJ)

**ASTRA: Atomic Surface Transformations for Radiotherapy Quality Assurance**<br>
Amith Kamath, Robert Poel, Jonas Willmann, Ekin Ermiş, Nicolaus Andratschke, Mauricio Reyes  
*IEEE EMBC 2023* | 45th IEEE Engineering in Medicine and Biology Conference  
🏆 **2nd Best Student Paper Award Winner**

🏷️ *Themes:* Contour Correction, Dose-Aware Evaluation, Sensitivity Maps<br>
[pdf](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10341062) | [code](https://github.com/amithjkamath/astra) | [video](https://www.youtube.com/watch?v=vghlJh8ACOY) | [project page](/projects/23-EMBC/)

---

<a id="fast-and-sensitive-dose-prediction"></a>

### Fast and Sensitive Dose Prediction

This axis asks whether treatment dose can be predicted quickly without losing sensitivity to clinically meaningful contour variation. It supports rapid planning, model evaluation, and interactive review. The [dose-prediction research thread](/projects/Theme-Dose-Proposal/) connects the completed studies to ongoing questions, while the [thesis documentation](/dose-aware-contour-qa/) provides the complete chapter structure.

**Deep-learning-based dose predictor for glioblastoma–assessing the sensitivity and robustness for dose awareness in contouring**<br>
Robert Poel, Amith J. Kamath, Jonas Willmann, Nicolaus Andratschke, Ekin Ermiş, Daniel M. Aebersold, Peter Manser, Mauricio Reyes<br>
*Cancers*, 2023

🏷️ *Themes:* Dose Prediction, Model Sensitivity, Robustness  
[pdf](https://www.mdpi.com/2072-6694/15/17/4226) | [project page](/projects/23-ISBI/)

**How sensitive are Deep Learning based Radiotherapy Dose Prediction Models to Variability in Organs at Risk Segmentation?**  
Amith Kamath, Robert Poel, Jonas Willmann, Nicolaus Andratschke, Mauricio Reyes  
*IEEE ISBI 2023* | 20th IEEE International Symposium on Biomedical Imaging

🏷️ *Themes:* Dose Prediction, Contour Variability, Sensitivity<br>
[pdf](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10230559) | [code](https://github.com/amithjkamath/deepdosesens) | [video](https://www.youtube.com/watch?v=Lz5-n4lA3QM) | [project page](/projects/23-ISBI/)

**Evaluating a deep learning based 3D dose prediction model for quality assurance of organ at risk contours**<br>
*55th Swiss Society for Radiobiology and Medical Physics*, 2022<br>
[publication](https://scholar.google.com/citations?user=clej42kAAAAJ)

---

### Software and Tools

**PyRaDiSe: A Python package for DICOM-RT-based auto-segmentation pipeline construction and DICOM-RT data conversion**  
Elias Rüfenacht, Amith Kamath, Yannick Suter, Robert Poel, Ekin Ermiş, Stefan Scheib, Mauricio Reyes  
*Computer Methods and Programs in Biomedicine*, 2023  
**More than 50 GitHub stars as of 2026**

🏷️ *Themes:* Software Development, Clinical Tools, DICOM-RT  
[pdf](https://www.sciencedirect.com/science/article/pii/S0169260722006551) | [code](https://github.com/ubern-mia/pyradise)

---

### Additional Publications and Earlier Work

- **Orchestrating explainable artificial intelligence for multimodal and longitudinal data in medical imaging.** *NPJ Digital Medicine*, 2024. [publication](https://scholar.google.com/citations?user=clej42kAAAAJ)
- **DreamOn: a data augmentation strategy to narrow the robustness gap between expert radiologists and deep learning classifiers.** *Frontiers in Radiology*, 2024. [publication](https://scholar.google.com/citations?user=clej42kAAAAJ)
- **A novel device to monitor mobilization of fingers during treatment for stiffness of tendons.** *5th International Conference on Industrial and Information Systems*, 2010. [publication](https://scholar.google.com/citations?user=clej42kAAAAJ)
- **Optimal Acquisition Protocol for White Matter Fiber Orientation Mapping Using Generalized CSA-ODF Reconstruction.** *21st Annual Meeting and Exhibition of the ISMRM*, 2013. [publication](https://scholar.google.com/citations?user=clej42kAAAAJ)
- **Generalized constant solid angle ODF and optimal acquisition protocol for fiber orientation mapping.** *MICCAI Workshop on Computational Diffusion MRI*, 2012. [publication](https://scholar.google.com/citations?user=clej42kAAAAJ)

### Theses

- **[Fast and Reliable Dosimetric Contour QA](/dose-aware-contour-qa/).** PhD thesis, University of Bern, 2025.
- **A generalized CSA-ODF model for Fiber Orientation Mapping.** Master's thesis, University of Minnesota, 2012. [record](https://scholar.google.com/citations?user=clej42kAAAAJ)

---

<div class="alert alert-info" role="alert">
  <i class="fa-brands fa-google-scholar"></i> For citation exports and the most up-to-date publication record, please visit my <a href="https://scholar.google.com/citations?user=clej42kAAAAJ" target="_blank" rel="noopener noreferrer" class="alert-link" style="text-decoration: underline;">Google Scholar profile</a>.
</div>

---
