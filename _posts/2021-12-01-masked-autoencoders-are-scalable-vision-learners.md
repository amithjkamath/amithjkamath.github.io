---
layout: post
title: 'Paper Summary: Masked Autoencoders are Scalable Vision Learners'
date: 2021-12-01 00:00:00
categories: paper-summary, computer-vision, transformers
---

This landmark paper presents Masked Auto-Encoders (MAE), which are self-supervised learners for vision tasks. 


Major Learning Points
======
The two core designs (like they claim) are: 

(1) an asymmetric encoder-decoder architecture, with an encoder that operates only on the visible subset ofpatches (without mask tokens - this is important), along with a lightweight decoder that reconstructs the original image from the latent representation and mask tokens. 

(2) random patch masking (without replacement) a high proportion of the input image, e.g., 75%, yields a nontrivial and meaningful self-supervisory task. Both these enable training large models efficiently (accelerate training - 3× or more) and effectively (improve accuracy). 

Avoiding the need for labeled data implies building auto-regressive self-supervised models, which are already popular in the NLP world. Pixels are not the same as words in the semantic hierarchy - random blocks are closer approximations. 

Vision Transformers overcomes the obstacles of convolutional neural networks working with regular grids - such that positional embeddings can be inserted into it. 

Shifting the mask tokens reduces computation significantly - the mask tokens are introduced after the encoder: it sees only random patches without positional information. 


Interesting bits
======

* "Simple algorithms that scale well are the core of Deep Learning" - this is a deep deep statement. They go on to say, an autoencoder, a simple self-supervised method similar to techniques in NLP, provides scalable benefits. Self-supervision in vision is next!
* It is very considerate of the authors to acknowledge that this method can generate inexistent images, and the statistics can reflect biases in the training data. Ethical usage is implied.

References
------

[Masked Autoencoders on Arxiv](https://arxiv.org/abs/2111.06377)

[GitHub unofficial implementation](https://github.com/pengzhiliang/MAE-pytorch)