---
layout: post
title: 'Paper Summary: Deep learning in medical imaging and radiation therapy'
date: 2024-01-01 00:00:00
categories: paper-summary, computer-vision, mia
---

## Background and Introduction

The success of DL compared to traditional machine learning methods is primarily based on two interrelated factors: depth and compositionality. A function is said to have a compact expression if it has few computational elements used to represent it (“few” here is a relative term that depends on the complexity of the function). An architecture with sufficient depth can produce a compact representation, whereas an insufficiently deep one may require an exponentially larger architecture (in terms of the number of computational elements that need to be learned) to represent the same function.

A compact representation requires fewer training examples to tune the parameters and produces better generalization to unseen examples. This is critically important in complex tasks such as computer vision where each object class can exhibit many variations in appearance which would potentially require several examples per type of variation in the training set if a compact representation is not used. 

The second advantage of deep architectures has to do with how successive layers of the network can utilize the representations from previous layers to compose more complex representations that better capture critical characteristics of the input data and suppress the irrelevant variations (for instance, simple translations of an object in the image should result in the same classification). In image recognition, deep networks have been shown to capture simple information such as the presence or absence of edges at different locations and orientations in the first layer. Successive layers of the network assemble the edges into compound edges and corners of shapes, and then into more and more complex shapes that resemble object parts. 

Hierarchical representation learning is very useful in complicated tasks such as computer vision where adjacent pixels and object parts are correlated with each other and their relative locations provide clues about each class of object, or speech recognition and natural language processing where the sequence of words follow contextual and grammatical rules that can be learned from the data.

## Convolutional Neural Networks

The most successful and popular DL architecture in imaging is the convolutional neural network (CNN). Nearby pixels in an image are correlated with one another both in areas that exhibit local smoothness and areas consisting of structures (e.g., edges of objects or textured regions). These correlations typically manifest themselves in different parts of the same image. Accordingly, instead of having a fully connected network where every pixel is processed by a different weight, every location can be processed using the same set of weights to extract various repeating patterns across the entire image. These sets of trainable weights, referred to as kernels or filters, are applied to the image using a dot product or convolution and then processed by a nonlinearity (e.g., a sigmoid or tanh function). Each of these convolution layers can consist of many such filters resulting in the extraction of multiple sets of patterns at each layer.

## As applied to Medical Imaging 

In medical imaging, machine learning algorithms have been used for decades, starting with algorithms to analyze or help interpret radiographic images in the mid-1960s. Computer-aided detection/diagnosis (CAD) algorithms started to make advances in the mid 1980s, first with algorithms dedicated to cancer detection and diagnosis on chest radiographs and mammograms and then widening in scope to other modalities such as computed tomography (CT) and ultrasound. CAD algorithms in the early days predominantly used a data-driven approach as most DL algorithms do today. However, unlike most DL algorithms, most of these early CAD methods heavily depended on feature engineering.

DL for radiological images, and shows a very strong trend: For example, in the first 3 months of 2018, more papers were published on this topic than the whole year of 2016.

## Image Segmentation with Deep Learning

Image segmentation in medical imaging based on DL generally uses two different input methods: (a) patches of an input image and (b) the entire image. Both methods generate an output map that provides the likelihood that a given region is part of the object being segmented. While patch-based segmentation methods were initially used, most recent studies use the entire input image to give contextual information and reduce redundant calculations.

Lesion segmentation is a similar task to organ segmentation; however, lesion segmentation is generally more difficult than organ segmentation, as the object being segmented can have varying shapes and sizes.

## DL and Radiotherapy

The goals of DL in radiation oncology are to assist in treatment planning, assess response to therapy, and provide automated adaptation in treatments over time. Deep reinforcement learning using both prior treatment plans and methods for assessing tumor local control was used to automatically estimate dose protocols. Such adaptive radiotherapy methods may provide clinical decision support for dose adaptation.

Much of the needs in treatment planning relate to the segmentation of organs (discussed earlier) and in the prediction of dose distributions from contours. Nguyen et al used a U-net to predict dose from patient image contours on prostate intensity-modulated radiation therapy (IMRT) patients and demonstrated desired radiation dose distributions.

While DL methods are being developed to plan and predict radiation therapy to specific tumor sites, they are also being investigated to assess toxicity to normal organs tissue. 

## More to read from here:

281: Zhen et al. used a transfer learning strategy to predict rectum dose toxicity for cervical cancer radiotherapy.

283: Dose estimation was also the aim of Kajikawa et al. who investigated the feasibility of DL in the automated determination of dosimetric eligibility of prostate cancer patients undergoing intensity-modulated radiation therapy.

218: Lao et al. investigated MRI radiomic features and DL as a means to predict survival in glioblastoma multiforme.

## Challenges for Deep Learning methods

Robustness is a challenge: Robustness and repeatability are concerns with any machine learning approach,365 and even more so with DL. Since medical image datasets are so difficult to come by compared to those of natural images and generally are of limited size, researchers like to reuse the same data for different tasks. Hence, correction for multiple comparisons is crucial in the statistical evaluation of performance. The requirement that datasets need to be of sufficient size and quality is not unique to DL or medical imaging.


References
------

Sahiner, B., Pezeshk, A., Hadjiiski, L. M., Wang, X., Drukker, K., Cha, K. H., Summers, R. M., & Giger, M. L. (2019). Deep learning in medical imaging and radiation therapy. Medical Physics, 46(1), e1–e36. 

[Paper link on DOI](https://doi.org/10.1002/mp.13264)