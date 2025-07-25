---
layout: page
title: Qualitative survey predicting dosimetric impact and comparing with dose prediction models
description: More details about our MIDL '24 paper and Green Journal '25 journal.
img: assets/img/midl-radonc-vs-dldp.png
importance: 1
category: papers
---

[![Oral talk at MIDL 2024:](https://img.youtube.com/vi/Co9yUIAw6H0/0.jpg)](https://youtu.be/Co9yUIAw6H0?t=3587)

See [the project repository](https://github.com/ubern-mia/radonc-vs-dldp) to reproduce these results.

This page includes some additional details around the paper: "Comparing the Performance of Radiation Oncologists versus a Deep Learning Dose Predictor to Estimate Dosimetric Impact of Segmentation Variations for Radiotherapy", as [presented at the Medical Imaging with Deep Learning Conference](https://openreview.net/forum?id=SlMMyPqQTm), 2024 {% cite Kamath2024Comparing %}. The abstract of this work is reproduced here:

Current evaluation methods for quality control of manual/automated tumor and organs-at- risk segmentation for radiotherapy are driven mostly by geometric correctness. It is however known that geometry-driven segmentation quality metrics cannot characterize potentially detrimental dosimetric effects of sub-optimal tumor segmentation. 

In this work, we build on prior studies proposing deep learning-based dose prediction models to extend its use for the task of contour quality evaluation of brain tumor treatment planning. Using a test set of 54 contour variants and their corresponding dose plans, we show that our model can be used to dosimetrically assess the quality of contours and can outperform clinical expert radiation oncologists while estimating sub-optimal situations. 

We compare results against three such experts and demonstrate improved accuracy in addition to time savings.

This work was extended into a larger survey, now [published in the Green Journal of Radiotherapy and Oncology](https://www.sciencedirect.com/science/article/pii/S0167814025045037), 2025. The abstract of this work is reproduced here:

Purpose: Integrating auto-contouring in radiotherapy workflows is shifting the role of radiation oncologists from manual delineation to reviewing and correcting automatically generated contours. However, we postulate that this process is hindered by significant inter-evaluator variability in assessing the dosimetric impact of contour variations. This study investigates how radiation oncologists and medical physicists evaluate the impact of glioblastoma target volume (TV) variations on the dose to organs at risk (OARs), focusing on understanding inter-evaluator variability and decision-making patterns.

Methods: A qualitative survey was conducted involving four radiation oncologists and three medical physicists. Participants classified 54 glioblastoma TV contour variations using up to four changes each across 14 patients as “better,” “no change,” or “worse” regarding their expected impact on the dose to OARs. The corresponding ground truth labels were derived from standardized treatment plans. Inter-evaluator variability was analyzed using Cohen’s Kappa.

Results: Substantial variability was observed, with Cohen’s Kappa values ranging from weak to moderate agreement (0.33–0.74). Evaluators frequently overestimated the negative impact of contour variations, misclassifying 46% of “no change” variations as “Worse.” No evaluator judged contour variations as resulting in “better” doses to OARs, despite this being the case for 4 variations.

Conclusion: Significant variability in estimating the dosimetric impact of contour variations underscores the critical need for standardized guidelines to reduce inconsistencies and allow for the assessment of automatically generated contours based on clinically meaningful factors. Evaluators frequently overestimated the negative impact of contour variations, potentially leading to inefficiencies and unnecessary contour corrections in clinical practice.

Citation
------

If you find these works useful, please cite them as:

    @inproceedings{Kamath2024Comparing,
    title     = {Comparing the Performance of Radiation Oncologists versus a Deep Learning Dose Predictor to Estimate Dosimetric Impact of Segmentation Variations for Radiotherapy},
    author    = {Kamath, Amith and Mercado, Zahira and Poel, Robert and Willmann, Jonas and Ermi{\c{s}}, Ekin and Riggenbach, Elena and Andratschke, Nicolaus and Reyes, Mauricio},
    booktitle = {Medical Imaging with Deep Learning},
    year      = {2024},
    howpublished = {\url{https://openreview.net/forum?id=SlMMyPqQTm}},
    organization = {PMLR}
    }

    @article{Willmann2025Predicting,
    title     = {Predicting the impact of target volume contouring variations on the organ at risk dose: results of a qualitative survey},
    author    = {Willmann, Jonas and Kamath, Amith and Poel, Robert and Riggenbach, Elena and Mose, Lucas and Bertholet, Jenny and Muller, Silvan and Schmidhalter, Daniel and Andratschke, Nicolaus and Ermi{\c{s}}, Ekin and others},
    journal   = {Radiotherapy and Oncology},
    pages     = {110999},
    year      = {2025},
    publisher = {Elsevier},
    howpublished = {\url{https://www.sciencedirect.com/science/article/pii/S0167814025045037}},
    }