---
layout: page
title: Robustness of Deep Learning Segmentation Models
description: Measuring the performance of segmentation models under image content variations.
img: assets/img/1.jpg
importance: 1
category: themes
related_publications: true
---

This is a WIP (Work-In-Progress): this message will be removed once sufficient progress has been made. 

-------------

Auto-segmentation or generally automating parts of the medical image segmentation process has been a long standing research problem over several decades. With deep learning models in the past decade, the accuracy of such methods have gotten much closer to human expert levels, with many models reporting results within the range of human inter-expert variations. What is a downside unfortunately with such massive performance gains in accuracy is a lack of understanding of how robust such models can be, when considering performance across a spectrum of difficulty levels in imaging data. 

One metric of difficulty (for humans) could be to rank images where the inter-expert variability is the largest, in which case the model would also be expected to perform worse as compared to a presumed ground truth standard. More broadly, it would be useful to come up with some level of performance bounds for the behavior of these systems - either through conformal predictions, or another probabilistic method where clinicians can then be given a confidence rating along with the actual result of the algorithm to indicate its trustworthiness. 

In this line of thought, what we do in this work involved trying to deconstruct parts of the architecture of well known segmentation models called the U-Net - which includes skip connections, and understanding how architecture changes can impact robustness of results across a variety of noise settings. The goal of this work is to come up with some kind of a recipe to demonstrate that if the distribution of input images contains a certain level of noise, then, a certain architecture of segmentation models is preferable to others (if it exists) {% cite kamath2023skipconnections %}. 

Furthermore, we analyze what happens when such models have a sliding window inference mechanism, where if the foreground to background ratio (smaller foreground pixels indicate that the haystack in which we try to find a needle is larger) varies, how do various architectures behave in such situations. Sliding window inference is now commonplace due to varying image volume sizes and GPU memory constraints in training such large models {% cite kamath2022contextvsfbr %}. 
