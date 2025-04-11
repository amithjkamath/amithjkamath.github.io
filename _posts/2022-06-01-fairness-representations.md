---
layout: post
title: 'Paper Summary: On the Fairness of Disentangled Representations'
date: 2022-06-01 00:00:00
categories: paper-summary, computer-vision, mia
---

This paper explores the relationship between fairness of downstream prediction tasks and disentangling representations of distributions of data. The hypothesis - which is empirically supported by extensive experimentation - is that disentangled (where high dimensional observations include both dependence on the target variable, as well as unobserved sensitive variables) versions of representations that do not differentiate between unobserved sensitive variables encourage building fairer models, although they may not necessarily be the ones with the highest accuracy.

The contributions of this work include:

-  predictions can be unfair even if we use the Bayes optimal classifier and if the target variable and the sensitive variable are independent. Furthermore, there are considerable dissimilarities between different representations in terms of fairness, indicating that the representation used matters.
- disentanglement, in particular when measured using the DCI Disen- tanglement score (DCI stands for Disentanglement, Completeness and Informativeness), appears to be consistently correlated with increased fairness.
- The fairness of the prediction also appears to be correlated to the accuracy of the downstream predictions, 

Major Learning Points
======

1. Fundamentally, disentanglement involves treating the generative mechanisms as latent variables and aims at finding a representation r(x) with independent components where a change in a dimension of z corresponds to a change in a dimension of r(x).

2. disentanglement promises to capture information about different generative factors in different latent dimensions. This limits the mutual information between different code dimensions and encourages the predictions to depend only on the latent dimensions corresponding to the target variable and not to the one corresponding to the sensitive ground-truth factor of variation.

3. In practice, training a large number of models with different losses and hyperparameters will result in a large number of different representations, some of which might be more disentangled than others. Optimizing for accuracy on a fixed representation does not guarantee to learn a fair classifier as the demographic parity theoretically depends on the representation when the sensitive variable is not observed.


Interesting bits
======

1. Demographic parity is one measure of fairness, and states that the proportion of each segment of a protected class (e.g. gender) should receive the positive outcome at equal rates. A positive outcome is the preferred decision, such as “getting to university”, “getting a loan” or “being shown the ad”. As mentioned earlier, the difference should be ideally zero, but this is usually not the case.

2. The number of experiments conducted as part of this work is astonishing: they claim to have analyzed the representations of more than 12600 trained state-of- the-art disentangled models: one has to wonder what the compute budget for such extensive experiments were, and, if it is something that's only possible with the backing of massive research organizations like Google, or, it is still possible for a small research lab to do something similar (in the spirit of fairness and equal opportunity).


References
------

[Paper link on Arxiv](https://arxiv.org/abs/1905.13662)

Paper code - none I could find, from arxiv.