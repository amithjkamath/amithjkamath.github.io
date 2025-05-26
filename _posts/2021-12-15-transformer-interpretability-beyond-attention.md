---
layout: post
title: 'Paper Summary: Transformer Interpretability beyond Attention Visualization'
date: 2021-12-15 00:00:00
categories: paper-summary, computer-vision, transformers, explainability
---

This paper proposes a novel way to compute relevancy (for interpretation) for Transformer networks in the vision classification context. 


Major Learning Points
======
Given the recent interest in transformer architectures for vision tasks (like classification), there is a need to build tools to visualize their decision process - for debugging and verification. This paper includes a novel method - based on the Deep Taylor Decomposition principle. They maintain 'total relevancy' across layers - which is an improvement over existing methods.

Self-attention layers are the main building blocks of transformer networks - that assign pairwise attention values. In vision, patches are the equivalent of a word/word-part that associates with a token. 

Existing methods rely on - obtained attention maps or heuristic propagation along the attention graph. Attention operators and skip connections (due to mixing of attention maps) pose challenges to heuristic propagation - which this paper addresses.

This method has three ideas: 

(1) propagate both positive and negative attributions, 

(2) normalize for non-parametric layers like add, and 

(3) integrate attention and relevancy scores (rather than use just one of the two). 

Most existing explainability methods are either gradient or attribution based. Gradient based typically multiply inputs with gradients, and can smooth/average in different ways. These are class-agnostic mostly. Attribution based methods decompose decisions recursively to contributions from previous layers. Other methods are saliency based - which can run on black box models with no dependence on gradients or activations. The drawback with these is that they are computationally expensive. 

This is an attribution based method (see below for gradient based), where non-linear combinations of attentions from one layer to another is challenging. Existing method called 'rollout' assumes linear combinations - which doesn't also allow negative attentions (if non-ReLU activations are used, for example). 

GradCAM is a gradient based approach, which uses only the deepest layers - and hence is coarse, since it is upsampling the low-spatial resolution layers. When users indicate that the results of GradCAM are 'blocky' or fairly broad - this is likely why!

Layer-wise Relevance Propagation (LRP) propagates relevance per class for each attention head using the Deep Taylor Decomposition principle. The initial relevance is set to one-hot true for the target class, and propagated in a recursive fashion through the network - accounting for the three ideas above. The main challenge in assigning attributions to attention is that they combine non-linearly between layers - something that rollout (a prior explainability method) does not consider. 

The innovation here to handle negative values is to multiply the inputs and weights, and ignore the ones that are negative after multiplication - for the corresponding relevance locations. I don't fully understand how this resolves the issue - it almost means if negative, ignore - and hence handle negative too, but I may be oversimplifying it. 

Interesting bits
======

* I didn't know most interpretation techniques are not class-specific. This means all methods produce the same saliency map for all classes. GradCAM is an exception (while the results not being convincing) and not the norm, at least based on the alternatives in this paper! This is currently the only transformer based method that can do class-specific heatmaps :o 
* "Our approach is a mechanistic one and avoids controversial issues" - is a great way to steer clear of unnecessary criticism - good to emulate such diplomatic language :-)

References
------

[Transformer Interpretability on Arxiv](https://arxiv.org/abs/2012.09838)

[GitHub implementation](https://github.com/hila-chefer/Transformer-Explainability)