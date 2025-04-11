---
layout: post
title: 'Paper Summary: Calibrating Segmentation Networks with Margin Based Label Smoothing'
date: 2022-10-19 00:00:00
categories: paper-summary, computer-vision, mia
---

This paper tackles the problem of models that are poorly calibrated, which result in over-confident predictions. The problem with cross entropy based loss functions is that it promotes the predicted softmax probabilities to match the one-hot label assignments, which means that the correct label activation should be significantly larger than the remaining activations. 

Major contributions of this work include:
    - A unifying constrained-optimization perspective of current state-of-the-art calibration losses, which are approximations of a linear penalty (or a Lagrangian term) imposing equality constraints on logit distances.
    - A simple and flexible generalization based on inequality constraints, which imposes a controllable margin on logit distances.
    - Comprehensive experiments on a variety of public medical image segmentation benchmarks demonstrate novel state-of-the-art results for calibration, while also improving the discriminative performance.

Major Learning Points
======

1. There are many existing methods of improving calibration, including focal loss and label smoothing. The authors show in this paper that these could be viewed as different penalty functions for imposing the same logit-distance equality constraint "d(l) = 0" (where d is the logit distance to the winning class). The proposed margin-based generalization (d(l) ≤ m) of this logit-distance constraint is shown to have desirable properties like gradient dynamics for calibrating neural networks. 

2. The experiments are rather comprehensive, however some of the data sets are really small. For example the MRBrainS18 data set has 7 subjects and 5 are used as training, 2 as test. The ACDC data set is split into 70 training, 10 validation and 20 test, which could have better power to make reasonable inferences. With this context, the results cannot hence be compared apples to apples (in my opinion at least) with each other, as BRATS (which has 4x the subjects as ACDC) should be equally highly weighted while evaluating the metrics. 

Interesting bits
======

1. The calibration performance metrics this paper uses include ECE (Expected Calibration Error) and CECE (Classwise ECE). These attempt to address the problem that pseudo-probability of the predicted class almost always over-estimates the actual probability of getting a correct answer. For example, if the largest pseudo-probability is 0.95 you don’t have a 95% chance of making a correct prediction — more like 75% or 85% chance of a correct prediction. (see [here](https://jamesmccaffrey.wordpress.com/2021/01/22/how-to-calculate-expected-calibration-error-for-multi-class-classification/) for a great explanation of how ECE is computed).

2. The networks chosen to test out this novel loss formulation to improve calibration include the now classic Unet, in addition to attention-Unet, Unet++, and TransUNet. What is interesting here is that the Unet somehow forms the basis of all subsequent networks and in spite of being nearly a decade old now, is still by far one of the best performing models. 


References
------

[Paper link on Arxiv](https://arxiv.org/abs/2209.09641)

[Paper code](https://github.com/Bala93/MarginLoss)