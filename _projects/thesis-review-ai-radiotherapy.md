---
layout: page
title: Radiation Oncology for Developers and Researchers
description: An overview of Radiation Oncology for the AI practitioner
img: assets/img/3.jpg
importance: 1
category: others
related_publications: true
---

This is a WIP (Work-In-Progress): this message will be removed once sufficient progress has been made. 

This post goes over some current discussions around what A.I. (really Deep Learning systems) means in the context of Radiation Oncology.

-------------

In 2017, Geoffrey Hinton claimed that ["people should stop training radiologists now"](https://www.youtube.com/watch?v=2HMPRXstSvQ). It has been 5 years since, and this statement is still rather inaccurate and overstates the promise of A.I. Unfortunately, the well intentioned response of building automated systems to detect COVID-19 [made little, if any impact](https://www.technologyreview.com/2021/07/30/1030329/machine-learning-ai-failed-covid-hospital-diagnosis-pandemic/). The reasons ascribed are poor quality 'frankenstein' datasets, bias in the labels/subjects used to train such systems, and shockingly odd behavior of models, like focusing on text in the images to derive outputs. One way to look at this is - that Deep Learning systems may have generated out-of-the-park accuracies as compared to classical methods, but we really need to know why, how, and what are their bounds of performance, especially for critical applications like health. 

Nearly half of all FDA approved systems that involve A.I. in medicine, come under the radiology and imaging space! 

Image segmentation and quantification of radiological biomarkers are probably less valuable from a patient point-of-view, but are very important for the clinical workflow. 

Robustness (on out of ditribution data, as well as adversarial attacks), validation (technical and clinical) and verification (formal, and bounds-based) of A.I. systems is a major challenge - and could help improve the reliability of such systems going forward. 

Of note is Curt Langlotz' statement with regard to this - that "will A.I. replace radiologists? No, but radiologists who do A.I. will replace radiologists who don't". 


References
------

[1] Sahiner, B., Pezeshk, A., Hadjiiski, L. M., Wang, X., Drukker, K., Cha, K. H., Summers, R. M., & Giger, M. L. (2019). Deep learning in medical imaging and radiation therapy. Medical Physics, 46(1), e1–e36. https://doi.org/10.1002/mp.13264