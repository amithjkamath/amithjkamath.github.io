---
layout: page
title: Dose Prediction for Contour Quality Evalution
description: The need for understanding downstream tasks in relation to measuring quality of AI model automation.
img: assets/img/1.jpg
importance: 2
category: themes
related_publications: true
---

This is a WIP (Work-In-Progress): this message will be removed once sufficient progress has been made. 

-------------

The broad idea here is to show that in the radiotherapy process, it is multi-step, which means that the output of the the initial steps can impact cumulative errors for the entire process differently than outputs of later stages. This also means that while estimating the quality of all these individual stages, it makes sense to understand how it impacts the outcome of the subsequent stages. 

For example, if the imaging step is measured for quality purely by standard noise characteristics, one could miss out factors that affect how easily the structures can be segmented even in the presence of noise. A holistic sense of what is quality needs to be measured.

In this line of thought, this post considers what happens between the contouring (or auto-segmentation) and the treatment dose planning steps - where traditionally, the contouring quality has been measured purely geometrically. Specifically, if the segmentation step was done in isolation, with the end goal of the entire process being just the labels at each pixel/voxel, it could be considered feasible to measure accuracy using a suitable geometric measure. Since this is not the case, our thesis is to introduce measures from the subsequent steps of treatment to guide the quality of previous steps - in this case, treatment planning.

Specifically, it is known for example that non-smooth contours around the target volumes are not well handled by dose planning tools due to the physical constraints of the multi-leaf collimators and the speed at which these can move while treating complex shaped tumors through an arc. This means that deliberately smoothing the surface of the tumor segmentation (even if it does not make anatomic sense at times) can help design better plans - thereby meaning that a smoothness constraint for measuring the quality of tumor contours would help make the overall plan better.

In our research, we attempt to incorporate dosimetric measures into the segmentation process - thereby hoping to come up with a better overall outcome rather than optimizing metrics for each sub-stage of the pipeline, which sometimes may not cumulatively lead to the optimal outcome {% cite kamath2023sensitivitydoseprediction %} {% cite kamath2023astra %} {% cite kamath2024radoncvsdldp %}.