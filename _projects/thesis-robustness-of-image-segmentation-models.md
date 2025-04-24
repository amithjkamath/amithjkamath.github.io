---
layout: page
title: Robustness of Deep Learning Segmentation Models
description: Measuring the performance of segmentation models under image content variations.
img: assets/img/4.jpg
importance: 3
category: themes
related_publications: true
---

This is a WIP (Work-In-Progress): this message will be removed once sufficient progress has been made. 

-------------

Auto-segmentation or generally automating parts of the medical image segmentation process has been a long standing research problem over several decades. With deep learning models in the past decade, the accuracy of such methods have gotten much closer to human expert levels, with many models reporting results within the range of human inter-expert variations. What is a downside unfortunately with such massive performance gains in accuracy is a lack of understanding of how robust such models can be, when considering performance across a spectrum of difficulty levels in imaging data. 

One metric of difficulty (for humans) could be to rank images where the inter-expert variability is the largest, in which case the model would also be expected to perform worse as compared to a presumed ground truth standard. More broadly, it would be useful to come up with some level of performance bounds for the behavior of these systems - either through conformal predictions, or another probabilistic method where clinicians can then be given a confidence rating along with the actual result of the algorithm to indicate its trustworthiness. 

In this line of thought, what we do in this work involved trying to deconstruct parts of the architecture of well known segmentation models called the U-Net - which includes skip connections, and understanding how architecture changes can impact robustness of results across a variety of noise settings. The goal of this work is to come up with some kind of a recipe to demonstrate that if the distribution of input images contains a certain level of noise, then, a certain architecture of segmentation models is preferable to others (if it exists) {% cite kamath2023skipconnections %}. 

Furthermore, we analyze what happens when such models have a sliding window inference mechanism, where if the foreground to background ratio (smaller foreground pixels indicate that the haystack in which we try to find a needle is larger) varies, how do various architectures behave in such situations. Sliding window inference is now commonplace due to varying image volume sizes and GPU memory constraints in training such large models {% cite kamath2022contextvsfbr %}. 


## Image Segmentation Metrics

The 2015 review by Taha and Hanbury [1] segments (pun unintended) image segmentation metrics into six categories: 

1. Overlap: this is based on the four quadrants of True/False Positive/Negative, and are by far the most popular metrics used (especially Dice). Essentially, they measure some ratio of overlap versus the overall set. Unfortunately, in practice - these metrics could be very biased. Specifically, for objects that are larger, the scores are typically not very sensitive to errors, while for smaller objects, the scores become much more sensitive.

Well known varieties: Dice, Jaccard, F1

2. Volume: this too depends on the True/False Positive/Negative quadrants, however, it does not consider the intersection at all. It is defined as: 1 - (|False Negative - False Positive|)/(Sum of GT and Estimate). Interestingly, this metric can be 1 even when the overlap is empty! 

3. Pair counting: This family involves looking at each segmentation as a set, and then defining the score based on the belonging-ness of each element (imagine as a pixel) in each of the two sets (ground truth or estimate, or both). In the context of image segmentation, this could be reframed as (TP + TN) / (TP + TN + FP + FN), and hence in some way, becomes an overlap metric. 

4. Information theoretic:

Mutual Information

5. Probabilistic:

AUC, Cohen's Kappa

6. Spatial distance: 

These include the rather well known Hausdorff, Average, and Mahalanobis distances.

A drawback (which is likely a consequence of how close these metrics are to actual image properties) is that they are not normalized. This makes interpretation and comparison more challenging than otherwise. It could be argued that a 'true' numerical measure helps in interpretation, but it then involves more complications like what the pixel dimensions are, are there discretization effects, and so on. 

## What are the characteristics of an ideal metric?

This is a difficult question to have a generic answer, but here are some high-level expectations:

1. It is invariant to resolution/size changes (something DSC for example is not)
2. This is not strictly necessary, but a normalized metric is better than one with an undefined range. This is especially important for comparisons across images.
3. It is consistent from an outcome perspective. Specifically, for a normalized measure, 0.9 should have a well understood meaning outside the image-space, and should provide some guarantees in the outcome.

## Further reading

https://www.kaggle.com/yassinealouini/all-the-segmentation-metrics is a good implementation focused treatment.

https://medium.com/@stefan.herdy/how-to-evaluate-semantic-segmantation-models-cd2539673701  is another good starting point to explore this space. 


## References

[1] Taha, A.A., Hanbury, A. Metrics for evaluating 3D medical image segmentation: analysis, selection, and tool. BMC Med Imaging 15, 29 (2015). https://doi.org/10.1186/s12880-015-0068-x