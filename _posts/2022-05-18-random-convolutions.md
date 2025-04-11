---
layout: post
title: 'Paper Summary: Robust and generalizable visual representation learning via random convolutions'
date: 2022-05-18 00:00:00
categories: paper-summary, computer-vision, mia
---

This paper attempts to address the problem of improving robustness in visual representation learning from a single domain of data: and adds inductive bias towards global shape information rather than local textures using a simple idea: the first layer of a DNN is a random convolution, simulating domain shifts and minor perturbations. 

There is documented evidence that models trained on large scale data sets like image net tend to learn superficial local features rather than global shape information: this augmentation method aims to perturb data sets with such variations to focus more on global shapes.

Furthermore, they ask this pertinent question on pre-training and how it can translate across tasks: "Can a more robust pretrained model make hte finetuned model more robust on downstream tasks?"

Their contributions are as follows:
    
- RandConv: a multi-scale random convolution based data augmentation technique is presented, with mixing (alpha blending) and a consistency loss to enforce invariance.
- extensive experiments on real and synthetic data sets + ImageNet, to demonstrate advantages. Specific application of generalizing to sketch domain shows marked improvement.
- exploration of transferability of robust features while finetuning using a pre-trained network.

Major Learning Points
======

1. This is multi-scale and includes a mixing variant: meaning that kernels of different sizes can change the distribution of features, while an alpha blend with the original can also retain details at various frequencies. The alpha is interestingly set to be random as well: not settable fixed values (they show it only for illustration). This is implemented as a layer in the DNN, and is typically the first: so that low-level features are obfuscated (while maintaining global shape). The assumption is that the filter sizes are sufficiently small compared to image/object shape dimensions. 

2. Many flavors of these layers: simple RC_img: for augmenting with random textures; RC_mix for a mixing variant (alpha blend with the original image); Multi-scale corruptions: sample randomly from a pool of filters if various sizes (1, 3, 5, ... ). Additionally, there's a consistency loss idea: which encourages the network to predict consistent results for the same RandConv augmented image: when randomized with conv weights. KL divergence is used to measure consistency.

3. The improvements in pretraining and transfer appears to depend on the domain of the image data: photo, art, cartoon or sketch. Accuracy on photo drops, art is in the same range, sketch is significantly better, and cartoon is improved as well. Overall, on average, the RC_img 1-7 is the best performing variant. This supports the claim that pretraining with RandConv does help - depending on the kind of distribution. Where do medical images fall into - in the PACS categories?


Interesting bits
======
1. Random convolution is shape preserving, just like random linear projection is distance preserving. The proof is in Appendix B (rather involved), but the take away is that if we want the network to specifically focus on shape rather than texture (which may not really apply to medical image data, for example), this is a good augmentation strategy to use.

2. For future work, they make interesting points about Gabor filters as a potential augmentation: is there a RandGabor that could help? They also indicate that connections between biological mechanisms in the human visual system versus this kind of work is promising. This is quite exciting as well! 


References
------

[Paper link on Arxiv](https://arxiv.org/abs/2007.13003)

[Code on GitHub](https://github.com/wildphoton/RandConv)