---
layout: post
title: 'Paper Summary: Learning Debiased and Disentangled Representations for Semantic Segmentation'
date: 2022-03-23 00:00:00
categories: paper-summary, computer-vision, mia
---

This paper attempts to tackle biased and entangled feature representations in semantic segmentation - specifically in cases where teh class-imbalance is severe - by extracting class-specific information. This is achieved by randomly sampling a class, suppressing its' features - hence reducing feature dependence on classes. 

The paper also highlights extreme class imbalance in real-world problems like autonomous driving (they don't explore medical imaging, but this domain is highly impacted as well) - for example - the cityscapes dataset has 19 classes, 10 of them have pixel percentages < 1%! This implies that classifiers (per pixel, of course) learn contextual information that may not truly represent the broader space of the presence of these categories.

Major Learning Points
======

1. They devise a new training scheme (fairly complex, but apparently effective) called "dropClass" - modeled on dropOut - which is model agnostic, and can learn debiased feature representations. The big idea is - generate importance scores for each class - using something like gradCAM - and then drop the class-specific feature maps for a random class - while averaging maps from all the others. Doing this randomly over all the classes appears to improve performance for weakly represented classes!

2. The more complex part of this is the modified loss function - there's a linearly increasing effect of the dropped class cross entropy - where all the pixel-wise losses at locations corresponding to the dropped class are removed. The component of this loss is increased linearly over training iterations - while the standard cross-entropy loss is lowered in importance. There's also a term that suppresses the output probability of the dropped class - leading to two training hyperparameters that need to be modified over iterations. 

3. The performance is evaluated on the ctyscapes dataset, as well as the pascal VoC dataset. High-resolution Net (multiple versions), DeepLab (V3) are used as the architectures - and MobilenetV3, imagenet pre-training are made use of. The semantic segmentation IoU scores per category are improved significantly for the classes that are least represented (0.1% of the pixels, for example) - but there are also some drops in IoU - which are not easy to explain. 


Interesting bits
======
1. The correlation analysis is quite interesting - it plots the cosine similarity between weight vectors of each class in the final classification layer. Evidently, the most frequent class has low similarity with other classes, and the least frequent has high similarity with many others. The gradCAM visualizations are quite appealing as well - the heatmaps are slightly more convincing than otherwise - and could help make the interpretability better.

2. It is heartening to see an honest limitation section in the conclusion section - where they do concede that more training iterations are needed with the usage of dropClass. In some sense, this is like what I call "the heisenberg's principle of Deep Networks": faster to train/infer inversely relates to interpretability (with whatever braod definition you'd like to apply).


References
------

[Paper link on Arxiv](https://arxiv.org/abs/2111.00531)

Paper code - none I could find, from arxiv.