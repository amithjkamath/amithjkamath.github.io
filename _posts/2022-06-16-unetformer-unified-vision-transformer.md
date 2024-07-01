---
layout: post
title: 'Paper Summary: UNetFormer: A Unified Vision Transformer Model and Pre-Training Framework for 3D Medical Image Segmentation'
date: 2022-06-16 00:00:00
categories: paper-summary, computer-vision, mia
---

This paper introduces a unified framework consisting of two architectures: a 3D Swin (Sliding Window) Transformer based encoder, and a CNN (or, a Transformer) based decoder. Vision Transformers (ViT) learn more uniform representations and can better model long-range dependencies (as compared to CNNs). Swin transformers solve some drawbacks the original ViT: by relaxing requirements of fixed token resolution and better inductive bias. This architecture uses a 3D Swin transformer for the encoder, and a choice of either a CNN (called UNetFormer) or a Swin transformer (called UNetFormer+, not sure what the '+' nomenclature indicates) decoder, both of which are capable of being pre-trained, and also trained with deep-supervision (loss terms not just at the output, but at intermediate stages). The pre-training framework helps with a common medical image analysis condition of very small sample size and expensive annotations. 

The contributions of this work include:

-   Supporting a larger range of trade-off requirements between accuracy and computation cost. 
-   Describing a self-supervised pre-training of the encoder backbone via predicting randomly masked volumetric tokens using contextual information of visible tokens. 
-   Outperforming other SoTA segmentation models using the Dice Score for the BraTS 21 challenge, and the liver segmentation data set on the Medical Segmentation Decathlon.

Major Learning Points
======

1. Based on the results in Table 1., it is interesting to see how UNetFormer outperforms UNetFormer+ in accuracy, at the expense of parameter count and GFLOPS, by a fairly large margin. This appears to be a supporting point for CNNs to live for another day, on the face of increasingly dominant Transformer model results. It would be interesting to measure the GPU memory utilization of UNetFormer versus UNetFormer+, and if there are more considerations beyond #Params and GFLOPs that distinguish these choices further. 

2. The deep-supervision scheme employed is very interesting, in that the feature maps are up-sampled to the image resolution to then be compared against the same probability maps at the original resolution. The 'drop schedule' of the contribution: 1 for the final layer, 0.5 for the preceeding, and 0.25 for the next deeper one is also an interesting choice. I wonder if this choice is guided by theory (maybe related to the resolutions otherwise in these layers), or it is hyperparameter tuning art. 

3. The ablation study around the token masking ratio and patch size is very well presented: there is a clear choice in both parameters, with demonstrated drops either side of these values (0.4 and 16). With ablation studies, it is sometimes unclear if there is a linear trend and then the experiments stop at a specific value - would it have helped if a larger/smaller value was tested? Fortunately, these experiments have a fairly clear winner, and a large enough range of parameter values were experimented with.


Interesting bits
======

1. The BraTS 21 results show only the Dice score, but do not indicate the Hausdorff distances. It is interesting that these two metrics can indicate fairly disparate performance levels. Advocating presenting both simultaneously could provide a reasonable degree of robustness already. Beyond these two metrics, it would have been nice to have the standard deviation of these metrics reported in addition to the mean value, especially since these results are otherwise quite close to each other. 

2. This is not directly related to this paper in particular, but we had an animated discussion about the conventions used to describe how transformers work is presented in derivative work like this one - especially about the context of what Queries, Keys and Values are in the medical imaging space. Is there scope for simplifying the presentation (relate it to autocorrelation, which is commonly understood in the signal or image processing community as opposed to NLP)? 


References
------

[Paper link on Arxiv](https://arxiv.org/abs/2204.00631)

[Paper code](https://github.com/project-monai/research-contributions) - although I could not find the specific location for this paper. I see folders for Swin-UNETR and DiNTS, but not for UNetFormer :-(