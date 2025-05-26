---
layout: post
title: 'Paper Summary: Label fusion and training methods for reliable representation of inter-rater uncertainty'
date: 2022-04-20 00:00:00
categories: paper-summary, computer-vision, variability
---

This paper attempts to address the inter-rater variability problem for segmentation by finding the best way to fuse a variety of ground truths. They run a good set of comparisons using conventional training (segmentation as categorical classification per pixel) and another new method called 'softseg': which treats segmentation as a regression problem. Fusion methods include STAPLE (Simultaneous Truth and Performance Level Estimation), average rating (for soft-labels), and random sampling during training (use individual segmentations randomly while training so that the uncertainty is encoded that way).


Major Learning Points
======

1. "For instance, the multiple sclerosis (MS) brain dataset annotated by 7 experts reported an inter-expert agreement ranging between experts from 0.66 to 0.76 of median Dice score with the consensus" from the MICCAI 2016 challenge. This is sufficient proof that there is considerable variations (at least from a Dice perspective) amongst experts. The paper indicates the possible causes for this: including image quality, expert experience, and possibly low clarity on guidelines itself (for OAR contouring in some of our research, as an example). With segmentation networks these days achieving very high accuracies, it is possible that we are now in the stage of modeling segmentation variations (differences) rather than learning "true" boundaries/distributions of regions of interest.

2. The authors hypothesize that "soft or random sampling methods and the "SoftSeg framework" will better reflect the inter-rater variability, will generate more calibrated predictions, and will yield improved segmentation performances than hard fusion and conventional training methods.". For reference, the "SoftSeg framework" has the following differences: 

    - (1) no binarization during the preprocessing and data augmentation, 
    - (2) soft final activation function (Normalized ReLU), and     
    - (3) training using a regression loss function (Adaptive Wing loss).

3. Their results indicate that "SoftSeg" outperforms the conventional training methods for all metrics, and that "SoftSeg + Random Sampling" and "SoftSeg + STAPLE" are the best performing candidates. However, the honest and detailed discussion section points out that there are limitations to several of these: the Dice metric is possibly not the best measure, the need for more exhaustive evaluation: potential task-specific nature of some of these methods, and so on. 


Interesting bits
======
1. They cite Alain Jungo's work, which claims that "The random sampling method yielded uncertainty that was able to reflect the underlying expert disagreement on synthetic data and on subjects with a Dice score superior to the median of a brain tumor dataset, but no positive impact was noticed for subjects with a low segmentation performance.". This is an important point: in that for situations where the disagreement is low, the random sampling method performed well, but in case of higher disagreement - the impact was now. This points to special attention being required for situations where the disagreements are high: because that is really where such methods should flag/highlight issues. 

2. A very under-represented but extremely important point made refers to the importance of traning repetitions and variability between data split(tings): where they report that the variance of their model results can be as high as 12.8% (std. deviation of Dice scores). Reporting this variance is not done enough, and the authors rightly share this concern and voice their opinions about needing to show this (and account for it) more often.


References
------

[Paper link on Arxiv](https://arxiv.org/abs/2202.07550)

[Code on GitHub](https://ivadomed.org)