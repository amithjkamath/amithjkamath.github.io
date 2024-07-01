---
layout: post
title: 'Paper Summary: Medical image segmentation automatic quality control: a multi-dimensional approach'
date: 2021-12-29 00:00:00
categories: paper-summary, computer-vision, mia, quality-assurance
---

This paper describes a multi-level QC for image segmentation quality in 2D and 3D, and reports results on the UK BioBank data.


Major Learning Points
======
This paper highlights the need for MISAQC (Medical Image Segmentation Automatic Quality Control) - where the quality of AI based segmentation is assessed using metrics like Dice, Hausdorff and so on. Past methods have included using a regression model to estimate DSC from a segmentation, and it has shown good correlation with 'real' DSC when compared to expert ground truth. Further, high performance (under a few seconds to run) models have estimated 3D DSC, but as DSC is volume-based, localization of errors in 2D contours has been difficult to pin-point. The proposed method focuses on 2D slice identification where segmentations are erroneous, and, can combine across slices to generate a 3D aggregate measure as well. 

The images come from a cardiovascular MR dataset, with 4290 2D slices from 449 subjects. There are four segmentation classes + a background, labeled by a single expert with > 5 years of experience. For analysis, 12 networks (much like Robinson et al does) were used to generate 12 segmentation masks for each slice, leading to 12 DSC estimates for each slice.

Interesting bits
======



References
------

[Automatic quality control link on Sciencedirect](https://www.sciencedirect.com/science/article/abs/pii/S1361841521002589)

No associated code reported; 