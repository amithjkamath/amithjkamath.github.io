---
layout: post
title: 'Paper Summary: Learnable Test-Time Augmentation for Source-Free Medical Image Segmentation Under Domain Shift'
date: 2022-01-26 00:00:00
categories: paper-summary, computer-vision, mia
---

This paper describes a multi-level QC for image segmentation quality in 2D and 3D, and reports results on the UK BioBank data.


Major Learning Points
======
A common problem with deep learning methods is the training/test distribution shift. Several methods focus on improving model robustness from source (training) to target (test) domains. Practical problems with this include:

1. Unavailability of source data after model deployment (due to privacy reasons) - this is what 'source free' means. 
2. No apriori access to test domain samples. 

Hence, it has become important to investigate only using the source model to adapt to an unknown target domain, without source data. Test Time Augmentation (TTA) methods have shown improvement in robustness and accuracy without retraining the model by accumulating multiple augmented versions of test image predictions. More recently, policy search methods have also been used - but they require a separate validation set, and may not be optimal for each sample. This paper proposes the first learnable TTA policy, which is dynamically selected, and can be implemented in a streaming fashion. 

OptTTA has two phases: Exploration and Exploitation. In the exploration phase, the sub-policies (combinations of augmentations from a known set of variations) are optimized using gradient descent, followed by the selection of top-k. In the exploitation phase, the sub-policies are applied over the rest of the target images, by ensembling over multiple transformations. 

The evaluation criteria includes three loss functions (in the exploration phase) - the batch normalization statistics loss - to regularize feature distributions; entropy loss - to encourage high confidence predictions; and the divergence loss - to encourage uniform distribution among segmentation classes (and avoid converging to a single class).

As for results, three data sets are tested on - spinal cord, prostrate and heart (interestingly called M&M)

Interesting bits
======
1. This is very well written - for example, the use of opposing adjectives - other methods are static, their contribution is dynamic; bulleted list of contributions to clearly indicate what is new. 

2. How does one quantify domain shifts? Is there a measure of how different the source domain is from the target domain? Large shifts, minor/small shifts are rather subjective, and a quantitative measure around this could be useful to indicate! (this could be naive!). 

3. The original U-Net model does not include a batch normalization layer - and so it is interesting that their main loss function involves a term that depends on this assumption. 


References
------

[optTTA link on Open Review](https://openreview.net/pdf?id=B6HdQaY_iR)

[optTTA code on GitHub](https://github.com/devavratTomar/OptTTA)