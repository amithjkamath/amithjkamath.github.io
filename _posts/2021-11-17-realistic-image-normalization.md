---
layout: post
title: 'Paper Summary: Realistic Image Normalization for Multi-domain Segmentation'
date: 2021-11-17 00:00:00
categories: paper-summary, computer-vision, mia
---

The major idea here is to build a Deep Learning based normalization method that generalizes to multiple data sets, rather than using classical fixed techniques that don't.

Major Learning Points
======
The big idea here is to use an adversarial task-driven setting to find the optimal transfer function to simultaneously improve training accuracy and the realism of generated 'normalized' images. The gap this attempts to solve is to enable using data from multiple sites for training segmentation algorithms by standardizing them somehow. Naive methods like 'standardization' or histogram equalization may not work because intensity distributions within regions are not maintained. This dual goal is achieved with a Generative Adversarial setup, where the discriminator attempts to not only identify the source of the image (specific site), but also checks if it is from a 'generated' class - which enforces realism in the output. These two distinct tasks are handled by the same network, and there appears to be a theoretical basis behind this - to minimize the KL divergence between the mean distribution and that of each domain/site. 


Interesting bits
======
* I would imagine a reviewer to ask - if we are learning a normalization technique which is data dependent, what is the real need to make it realistic? When the idea is to improve performance of segmentation, how bad is a non-realistic pre-processing step? If clinical interpretation is the motivation, would the experts not look at the original images directly, rather than the normalized versions? It is possible that I do not appreciate the motivation for this paper entirely - and these are fairly naive. 
* The plotting of intensity histograms of pixels by class (white matter, gray matter, ...) across data sets (or, within but stratified by age or another parameter) is interesting! Summary statistics of datasets that show variations that otherwise are not apparent is not something I see often.
* Another interesting bit was the sizes of the data sets that was tested on: the iSEG data set had 10 images, the MRBrainS dataset had 5 images, but the ABIDE dataset had 1112 images. This means that the ABIDE data set likely more than overpowers any special distribution in the other two. I wonder if a balancing in the three data sets purely for evaluation would be useful to demonstrate? 

References
------

[Realistic Image Normalization on Arxiv](https://arxiv.org/abs/2009.14024)

[GitHub implementation](https://github.com/sami-ets/DeepNormalize)