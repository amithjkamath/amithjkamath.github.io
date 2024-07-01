---
layout: post
title: 'Paper Summary: Embracing the disharmony in medical imaging: A Simple and effective framework for domain adaptation'
date: 2022-03-02 00:00:00
categories: paper-summary, computer-vision, mia
---

This paper proposes a novel method to address domain shift by building a pre-trained classifier on source data, and adapting/fine-tuning this to new target data for better classification accuracy using auxiliary training tasks.


Major Learning Points
======
Deep learning models tend to have poor reproducibility because of variations in hospital scanners, patient cohorts and so on. More data could help, but can lead to generalization challenges - models would sacrifice accuracy to attempt to generalize better. Hence, domain adaptation is important - and this paper shows how it can be done in both intra-study, as well as inter-study situations. The contributions of note are:

1. Demonstrating necessity of adaptation instead of learning invariant representations - introducing a regularization term for fine-tuning domain adaptation. The interesting theoretical bit here is that there's an upper bound to accuracy, which depends on the size of the training set (on which the fine-tuning is done - more the better, while also inversely depending on the model complexity - less the better), while also depending on the diversity between the source domain and the target (larger domain shifts are obviously harder to improve on). 

2. Novel auxiliary task-based domain generalization, to adapt a model to unseen studies without accessing prediction labels. Demographic information is used as the auxiliary task - estimating sex, age, and so on - which are easily obtained from patient information. Fig. 1 shows this very well, where the flow of source data, target data (new domain), how the feature extractor weights are trained first along with the primary and auxiliary tasks - followed by training only the feature extractor on the auxiliary task (so that it learns the features for that particular subset of situations), after which the feature extractor weights are frozen to focus on the primary task again (trained on the source data this time). Descriptive, clear, and simple illustrations really help in understanding the big-picture idea. 

3. Demonstrations on iSTAGING and PHENOM datasets - 2614 3D T1 weighted MRI scans across geography, and targeting alzheimers as well as schizophrenia classification. Sex and age classifications are shown as exemplars, and interestingly, a classical SVM performs reasonably well in comparison! The tables were slightly harder to read and follow along, but there's a wealth of data in it to glean through!


Interesting bits
======
1. The authors mention that the only data augmentation they do is a gaussian blur filter - this is odd, given how ubiquitous more complex augmentation strategies have become nowadays, especially in the context of generalizing better to domain shifts. 

2. Interesting also is the simplicity of the networks trained - the feature extractor is a simple five blocks of conv + ReLU + Batch Norm and Max pooling. The classifier after, is an MLP with ReLU, with three layers. This is fairly simple (see point earlier about simpler model complexity - maybe this made the authors choose such a 'small' network?). 


References
------

[Paper link on Science Direct](https://www.sciencedirect.com/science/article/abs/pii/S1361841521003546)

Paper code - none shared as far as I could make out. 