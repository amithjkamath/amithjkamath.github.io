---
layout: post
title: 'Paper Summary: RadImageNet: An open radiologic deep learning research dataset for effective transfer learning'
date: 2022-09-07 00:00:00
categories: paper-summary, computer-vision
---

This paper introduces a large scale dataset which demonstrates the value of pretraining with millions of radiologic images (within, or at least closer to the domain the eventual model is being trained on) compared with ImageNet photographic images (which could be quite a large semantic jump) on downstream medical applications when using transfer learning. They show that RadImageNet pretrained models could be an effective starting point for transfer learning in radiologic imaging artificial intelligence applications (where all the images are grayscale, for example).

The main contributions of this work include:

-   The RadImageNet database : a large-scale dataset consisting of 1.35 million radiologic images covering CT, MRI, and US modalities and 11 anatomic regions, annotated by fellowship-trained and board-certified radiologists.
-   RadImageNet pretrained models show superior performance in the classification of eight independent medical applications as compared with ImageNet pretrained models, showing improvements from 0.9% to 9.4% for AuROC curve.
-   RadImageNet pretrained models were also able to interpret results more consistently compared with ImageNet pretrained models in thyroid and breast applications, demonstrating Dice score gains of 64.6% and 16.4% in segmenting the lesions, respectively (these are significant improvements!).

Major Learning Points
======

1.  The RadImageNet dataset was collected between January 2005 and January 2020 from 131872 patients at an outpatient radiology facility. This is a tremendous data curation effort spanning more than a decade, and it goes to show how important proper data curation and management is to building efficient models that learn what is actually meant to be learnt. 20 board-certified, fellowship- trained radiologists participated in the original clinical interpretation, who each had between 1 and 40 years of postfellowship experience. This also goes to show how much 'knowledge transfer' has to happen from well trained humans to such models via the dataset.

2. This study was conducted in four phases: 
    - First, key images and associated diagnoses were annotated by radiologists. 
    - Second, the images and diagnoses were grouped by modalities, anatomic regions, and labels according to their imaging patterns to construct the medical imaging–only database. 
    - Third, four neural networks (Inception-ResNet-v2, ResNet50, DenseNet121, and InceptionV3) as pretrained models were trained from scratch based on RadImageNet and ImageNet (already existing in public domain). 
    - Finally, the pretrained models from RadImageNet and ImageNet were used and compared on eight medical imaging applications using AUC and Dice scores if ground truth segmentation masks were available.


Interesting bits
======

1. All images were resized to 224 x 224 pixels and used as the inputs to these neural networks: I wonder if this is a good idea, as resizing without caring for the aspect ratio is one of the drawbacks in some sense of the ImageNet models. Now this may not impact classification models very much, but it should impact segmentation models. 

2. Each downstream application dataset was split into 75% training set, 10% validation set, and 15% test set. Images in one patient were always in the same set. Binary cross-entropy was selected as the loss function. The input images were downscaled to 256 x 256 pixels for the trade-off between accuracy and efficiency: the part about "images from one patient were always in the same set (training/val/test)" is a very important consideration that is unique to medical image analysis (can't think of an analogy to general computer vision datasets), and is important that the authors have taken care of this.

References
------

[Paper link on RSNA](https://pubs.rsna.org/doi/10.1148/ryai.210315)

[Paper code](https://github.com/BMEII-AI/RadImageNet)