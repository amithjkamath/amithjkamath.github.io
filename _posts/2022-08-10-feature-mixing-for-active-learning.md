---
layout: post
title: 'Paper Summary: Active learning by Feature mixing'
date: 2022-08-10 00:00:00
categories: paper-summary, computer-vision
---

This paper introduces a novel method for batch Active Learning (AL) called ALFA-Mix. It is used to identify unlabelled instances with sufficiently-distinct features by seeking inconsistencies in predictions resulting from interventions on their representations. It proposes to  do this by forming linear combinations (i.e. interpolations or mixing) of the features of an unlabelled instance and of labelled ones (presumably from two separate categories). The interpolated features are passed through the current classifier. Inconsistencies in the predicted labels appear to indicate that the unlabelled instance may have novel features to learn from.

The main contributions of this work include:

-   Instead of interrogating an unlabelled instance directly, this work interpolates the representation features from the labelled instances to uncover its hidden traits. This is the first of its kind in Active Learning.
-   Optimal interpolation/mixing for each instance that underscores the novel features with which the model could change prediction, has a closed-form solution making our approach efficient and scalable. This theoretical support of such methods helps trust its' application rather than using a trial-and-error scheme. 
-   A first investigation into using AL in vision
transformers: we demonstrate the effectiveness of ALFA- Mix on a self-trained vision transformer, performing better than random selection in all tests, and 43% better than the state-of-the-art.

Major Learning Points
======

1.  Active learning (AL) aims to actively select the most valuable samples to be labelled in the training process iteratively, to boost the predictive performance. A popular setting called "batch AL" fixes a budget on the size of the batch of instances to be sent to an oracle for labelling. The process is repeated over multiple rounds, allowing the model to be updated iteratively. The challenge is therefore to iden- tify the most valuable instances to be included in this batch at each round, depending on the current model. Recent deep learning based AL techniques include the use of an auxiliary network to estimate the loss of unlabelled instances, generative models like VAEs to capture distributional differences, and graph convolutional networks to relate unlabelled and labelled instances.

2. The big idea is that the characteristics of the latent space plays a crucial role in identifying the most valuable samples to be labelled (as this is what is the distilled vector of information that the image is meant to contain, and at this level is where the "features" are understood by the classifier). The intuition in this paper is that the model’s incorrect prediction is mainly due to novel "features" in the input that are not recognisable. Thus, the approach to the AL problem is by first probing the features learned by the model, rather than the predicted class likelihoods themselves.


Interesting bits
======

1. There's an extensive list of baselines of Batch AL methods they list already: 
    -    Random: a simple baseline that randomly selects B samples from the unlabelled pool at each round.
        
    -    Entropy: A conventional AL approach that picks unlabelled instances with highest entropy.
    -    BALD: An uncertainty model relying on Bayesian approaches that selects a set of samples with the highest mutual information between label predictions and posterior of the model approximated using dropout.
    -    Coreset: An approach based on the core-set technique that chooses a batch of diverse representative samples of the whole unlabelled set.
    -    Adversarial Deep Fool: An uncertainty method that utilises deep fool attacks to select a batch of unlabelled samples whose predictions flip with small perturbations.
    -    GCNAL: A model-based approach that learns a graph convolutional network to measures the relation between labelled and unlabelled instances.
    -    BADGE: A hybrid approach that queries the centroids obtained from the clustering of the gradient embeddings.
    -    CDAL: A hybrid approach that exploits the contextual information in the predicted probabilities to choose samples with varied contexts.

2. This is a nice touch: "AL consciously selects a small subset of a large pool of unlabelled samples to be labelled and used to train a model. AL will be essential in catastrophes, like pandemics, where the time to reach a model at a particular level of accuracy becomes vital and would directly impact the lives of people. In spite of that, its a common practice to evaluate AL in a simulated environment mainly due to financial constraints. However, AL community at large and our approach in particular could heavily benefit from real- world evaluations." It underscores the importance of knowing the difference between evaluating a new method on simulated or toy data sets as compared to practical applications like pandemics and so on.


References
------

[Paper link on Arxiv](https://arxiv.org/abs/2203.07034)

[Paper code](https://github.com/aminparvaneh/alpha_mix_active_learning)