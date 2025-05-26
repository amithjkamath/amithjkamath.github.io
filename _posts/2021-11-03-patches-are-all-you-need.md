---
layout: post
title: 'Paper Summary: Patches are all you need'
date: 2021-11-03 00:00:00
categories: paper-summary, computer-vision, transformers
---

The general claim here is that re-casting inputs into patches can inherently improve network performance.

Major Learning Points
======

Deep Learning models based on the Transformer family of architectures have now gained more relevance in the Vision space (in addition to their predominance in the Text/time-series space). This means that images now need to be tokenized in some way - in the form of patches, to avoid quadratic runtime. The central question of this paper is then - is the accuracy gains due to the choice of architecture, or, due to re-casting the inputs as patches? Their experiments and results appear to support the latter - and they show an implementation called the 'ConvMixer' which seems to outperform Vision Transformers, as well as classical models like ResNet on the ImageNet top 1% task. 

This ConvMixer model is simple - creating patch embeddings, followed by repeated fully convolutional blocks. The first step is to generate patch embeddings, described as:

`z0 = batch_norm(non_linear{conv(X, stride=p, kernel_size=p)})`

where `p` is the patch size parameter (set to 7). Next comes the ConvMixer layers itself - which is repeated multiple times - in their experiments, 20 or 32 times (while still having few parameters, compared to ResNets, for example).

`zl′ = BN (σ{ConvDepthwise(zl−1)}) + zl−1`

`zl+1 = BN (σ{ConvPointwise(zl′)})`

ConvDepthwise is a grouped convolution with number of groups equal to number of channels, and ConvPointwise is a 1x1 convolution. The kernel size for depthwise convolutions are unusually large - 7, 9 and even 15. 

These layers (and blocks of them when repeated) are followed by a global pooling, and then a softmax classifier. 

The name ConvMixer comes from the general class of models called MLPMixer. They use depth convolution to mix spatial locations and pointwise convolution to mix channel locations to generate arbitrarily large receptive fields. A more general term introduced is "Isotropic architecture", where after patches are generated, shape and size of activations remain constant through the network.

What is unique about their contribution is that it is fully convolutional (and hence have no Transformer-like layers) - supporting their claim that patches may be all one needs!


Interesting bits
======

* This is the only paper I've read where the appendix is longer than the text of the actual paper. This goes to show how simple the idea is, but how extensive the experiments are. This comes up in the review as well, and has been addressed by the authors with "thus hopefully demonstrate that some conference-level ML research can be communicated effectively via short papers". This is commendable!
* The last page includes a punchy challenge - build a model with an implementation length in code that fits into a tweet, while also achieving 80% top-1 accuracy on the ImageNet dataset. I wonder what the motivation for these goals are - terse implementations do not help either the reader or the developer. It is indeed an impressive way to convey the simplicity of the idea. 
* What isn't really focused on is the throughout runtime performance. To the previous point, an even more ambitious goal could be to have the model representable in a tweet, have greater than 80% accuracy, and also, have throughput that matches SoTA. This trifecta is probably the hardest to optimize for. 
* The training times were mindblowing as well - 10x-RTX 8000s took 9 days to train for 150 epochs. Although they do mention no hyperparameter optimization - most research groups won't have such infrastructure for experiments, as far as I can say. Would be interesting to know the energy consumption for training such models too!


References
------

[Patches are all you need on Open Review](https://openreview.net/forum?id=TVHS5Y4dNvM)

[GitHub implementation with an anonymized username](https://github.com/tmp-iclr/convmixer)