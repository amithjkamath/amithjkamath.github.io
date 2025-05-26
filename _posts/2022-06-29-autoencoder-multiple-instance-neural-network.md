---
layout: post
title: 'Paper Summary: AMINN: Autoencoder-Based Multiple Instance Neural Network Improves Outcome Prediction in Multifocal Liver Metastases'
date: 2022-06-29 00:00:00
categories: paper-summary, computer-vision
---

This paper introduces an end-to-end autoencoder-based multiple instance neural network (AMINN) for the prediction of survival outcomes in multifocal colorectal cancer liver metastases (CRLM) patients using radiomic features extracted from contrast-enhanced MRIs. Colorectal cancer is the fourth most common non-skin cancer and the second leading cause of cancer deaths in the United States. 50–70% of patients eventually develop liver metastases, which then becomes the predominant cause of death. 

The contributions of this work include:

-   Jointly training an autoencoder to reconstruct input features and a multiple instance network to make predictions by aggregating information from all tumour lesions (multi-focal) of a patient, rather than just the largest one. 
-    Incorporating a two-step normalization technique to improve the training of deep neural networks, based on the fact that distributions of radiomic features are almost always severely skewed.
-    Improvement of the area under the ROC curve (AUC) of 0.70, which is 11.4% higher than the then best baseline method.

Major Learning Points
======

1. Most medical-imaging-based prognostic models (not limited to CRLM) focus solely on the largest lesion when dealing with multifocality. Incorporating features from multiple lesions in modeling is difficult because it’s unknown how each tumor contributes to patient outcome. This is a rather under-appreciated point in medical image analysis: it would be interesting to understand how the number of lesions impact outcome, and how image analysis techniques behave in such situations. 

2. The distribution of most radiomic features are severely skewed, calling for normalization. However, Z-score normalization, one of the most commonly-used techniques for radiomic feature normalization, is less informative for data that is not approximately normally distributed. As an example, after Z-score normalization of tumor volume, above 90% of samples are packed in the range [−0.5, 0], while the largest lesions have Z-value up to 8. The handcrafted solution to this is: 𝑙𝑖𝑗=log(𝑓𝑖𝑗−2min(𝐹𝑗)+median(𝐹𝑗)), which appears to do a very good job for such distributions.


Interesting bits
======

1. Ideally, an automated segmentation tool (like nn-UNet) should have been employed for tumor segmentation in order to avoid inter- / intra-observer variability and to automate the analysis pipeline. Although high accuracy in segmenting the whole liver using deep learning is observed, the results for liver tumor segmentation were found to be unsatisfactory: which is a sobering reminder that there are several problems in segmentation that are not yet 'solved' from a Deep Learning perspective. 

2. "There is no public imaging dataset curated for outcome prediction of multifocal patients in any tumor type. One of the goals of this study is to draw attention to multifocal diseases in the medical image computing community.": this is surprising, and is probably a unique problem in medical imaging. Multiple instances of an object in an autonomous driving scenario is probably not going to be handled the same way as this: which leads to important questions around how such domain knowledge can be incorporated into generic deep network models. 


References
------

[Paper link on Arxiv](https://arxiv.org/abs/2012.06875)

[Paper code](https://github.com/martellab-sri/AMINN)