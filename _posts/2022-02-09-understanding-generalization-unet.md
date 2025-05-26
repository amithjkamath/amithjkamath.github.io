---
layout: post
title: 'Paper Summary: Understanding and Visualizing Generalization in UNets'
date: 2022-02-09 00:00:00
categories: paper-summary, computer-vision
---

This paper proposes techniques for understanding and visualizing generalization performance of UNets w.r.t. dataset shift.


Major Learning Points
======
The traditional approach to evaluating a models' robustness/generalization is to collect a variety of examples and evaluate test accuracy - this depends on sampling and annotation availability. It also does not address what distinguishes networks that generalizes well from others that don't. Recent work in approximation theory do not depend on test annotations, or the accuracy of the models - the structure and intermediate computations could help in distinguishing/explaining generalization capability. The insight here is: strong performance guarantes in lower dimensional 'dense' spaces can be applied, even if data is sparse in the original space. This paper contains:

1. Extend interior-feature based analysis of DNNs to fully convolutional networks (like UNet, beyond classification).

2. a novel receptive-field analysis of internal feature maps - improving performance on label-dependent measures and clustering metrics that are computationally prohibitive + extends to arbitrarily large image sizes. 

3. Derive label-free "roughness" and "confidence" metrics that provide a geometric interpretation for internal feature maps, without ground truth annotations - which enables efficient computation of local class separability, correlating well with test accuracy. 

Class separability of intermediate features is often misleading : a better separability - via a higher Davies Bouldin index does not always translate to higher test accuracy. Internal layer features are also sometimes larger than the original image dimension (reduction to 3D via PCA may not be reasonable, then). 

With the receptive-field based analysis, followed by the carry-over of downsampled labels, clustering metrics can then be evaluated. Three are indicated here - the Davies Bouldin (DB) score - with labels, "roughness" and "confidence" - without labels. Roughness is computed by using clusters corresponding to the pseudo-labels (using kmeans on layer l) to measure the cluster separability in layer l-1. 

Interesting bits
======
1. Uncertainty and OOD methods like Monte Carlo dropout, are simple, but computationally expensive, and furthermore, not robust to networks trained with regularization, and can show false high-confidence values. 

2. The real benefit of CNNs is that they effectively increase the data rate by using the same interaction kernel over different image patches. Hence, the map from convolutional layer l-1 to l is focused on the receptive field, independent of size of the input data. This reduces the compression by PCA from an already lower dimension to d (3 for visualization), rather than a large input image dimension - hence, being computationally more efficient. To bring back image level labels, pseudo-labels are created by downsampling ground truth to the resolution of the internal features. 


References
------

[Paper link on Open Review](https://openreview.net/forum?id=V-a5DJCh4Hk)

[Paper code on GitLab](https://gitlab.com/abhe/UNet-Generalization_MIDL2021)