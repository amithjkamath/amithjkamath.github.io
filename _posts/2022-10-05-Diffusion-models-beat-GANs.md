---
layout: post
title: 'Paper Summary: Diffusion models beat GANs on Image Synthesis'
date: 2022-10-05 00:00:00
categories: paper-summary, computer-vision, mia
---

This paper shows that diffusion models can achieve image sample quality superior to the current state-of-the-art generative models. This is achieved in unconditional image synthesis by finding a better architecture through a series of ablations. For conditional image synthesis, sample quality is improved with classifier guidance: compute-efficient method for trading off diversity for fidelity using gradients from a classifier (which is one of the advantages of GANs). 

Major contributions of this work include:
    - Introducing adaptive group normalization (AdaGN), which incorporates the timestep and class embedding into each residual block after a group normalization operation
    - Using classifier guidance, so that as few as 25 forward passes can generate samples maintaining FIDs (Frechet Inception Distance) comparable to BigGAN.
    - Architecture improvements: more heads or fewer channels per head improves FID; 64 channels is best for wall-clock time, hence 64 channels per head is used as default.

Major Learning Points
======

1. Diffusion models are a class of likelihood-based models which have recently been shown to produce high-quality images while offering desirable properties such as distribution coverage, a stationary training objective, and easy scalability. These models generate samples by gradually removing noise from a signal, and their training objective can be expressed as a reweighted variational lower-bound. It is hypothesized that the gap between diffusion models and GANs stems from at least two factors: first, that the model architectures used by recent GANs have been heavily explored and refined; second, that GANs are able to trade off diversity for fidelity, producing high quality samples but not covering the whole distribution.

2. The proposed diffusion model obtains the best FID on each task, and the best sFID on all but one task (among LSUN and ImageNet data sets). With the improved architecture, state-of-the-art image generation results are obtained on LSUN and ImageNet 64×64. For higher resolution ImageNet, classifier guidance allows these models to substantially outperform the best GANs. These models obtain perceptual quality similar to GANs, while maintaining a higher coverage of the distribution as measured by recall, and can even do so using only 25 diffusion steps.

Interesting bits
======

1. (from the Wikipedia entry) The Fréchet inception distance (FID) is a metric used to assess the quality of images created by a generative model, like a generative adversarial network (GAN). Unlike the earlier inception score (IS), which evaluates only the distribution of generated images, the FID compares the distribution of generated images with the distribution of a set of real images ("ground truth"). The FID metric was introduced in 2017, and is the current standard metric for assessing the quality of generative models as of 2020. It has been used to measure the quality of many recent models including the high-resolution StyleGAN1 and StyleGAN2 networks. Rather than directly comparing images pixel by pixel (for example, as done by the L2 norm), the FID compares the mean and standard deviation of the deepest layer in Inception v3. These layers are closer to output nodes that correspond to real-world objects such as a specific breed of dog or an airplane, and further from the shallow layers near the input image. 

2. Diffusion models are an extremely promising direction for generative modeling, but they are still slower than GANs at sampling (inference) time due to the use of multiple denoising steps (and therefore forward passes). Luhman and Luhman explore a way to distill the DDIM (Denoising Diffusion Implicit Models) sampling process into a single step model. The samples from the single step model are not yet competitive with GANs, but are much better than previous single-step likelihood-based models. Future work in this direction might be able to completely close the sampling speed gap between diffusion models and GANs without sacrificing image quality.

References
------

[Paper link on Arxiv](https://arxiv.org/abs/2105.05233)

[Paper code](https://github.com/openai/guided-diffusion)