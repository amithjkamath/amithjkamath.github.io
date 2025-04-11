---
layout: post
title: 'Paper Summary: Interpretability-guided inductive bias for deep learning based medical image'
date: 2022-08-24 00:00:00
categories: paper-summary, computer-vision, mia
---

This paper proposes an interpretability-guided inductive bias approach (called SIBnet: salient inductive bias network) enforcing that learned features yield more distinctive and spatially consistent saliency maps for different class labels of trained models, leading to improved model performance. It is essential that trained models extract clinically relevant features for downstream tasks as, otherwise, shortcut learning and generalization issues can occur. In the medical field, trustability and transparency of current deep learning systems is a much desired property. These objectives are achieved by incorporating a class-distinctiveness loss and a spatial-consistency regularization loss term.

The main contributions of this work include:

-   Introduction of class distinctiveness and spatial coherence loss terms for saliency maps as part of the training process to improve interpretability while also improving model performance through better inductive bias.
-   Extensive experiments comparing this loss formulation to existing state of the art methods like Convolutional Block Attention Module (CBAM) and Squeeze and Excitation models, showing marked improvement.
-    A recipe for extending this formulation to the segmentation problem, where the encoder is used as is (where it is trained using the SIBnet loss), but the decoder is re-trained for the segmentation task.

Major Learning Points
======

1. "A trained radiologist learns to perform differential diagnosis on medical images based on disease-specific image patterns or characteristics. Consequently, during model training we propose to incorporate a novel inductive bias in the loss term of the model such that learned features yield more class-distinctive and spatially coherent interpretability saliency maps" - this is an interesting way to translate human intuition behind classifications to how a model should do it. 

2. In an attempt to quantify the models robustness to noise Gaussian noise of μ=0 and different σ ∈ {0.005,0.01,0.05,0.1} were added to input images. For the CheXpert dataset, the AUCROC values indicate that SIBNet performs more robustly to noise variations than others - and this is a good above-and-beyond example of ablation studies where robustness is explicitly tested for.


Interesting bits
======

1. "Our study was limited to classification and segmentations tasks, and although we foresee interesting advantages, we cannot guarantee similar findings on tasks such localization and other regression tasks. We also limited our study to medical imaging datasets, but we see interesting applications to other medical multiomics scenarios" is a good disclaimer that one cannot be biased and go with the assumption that loss terms that work for classification adn segmentation may not work for other tasks. No undue bias here! 

2. It is interesting to observe the variety of metrics used here: Dice Coefficient (DC), Hausdorff Distance 95%(HD95), and Structural Similarity Index Measure (SSIM). To calculate these metrics, a binarized saliency map using the ConvexHull function of SciPy with default parameters was used. This detail to allow reproducibility (obviously with code shared as well) is a good practice to emulate.

References
------

[Paper link on PubMed](https://pubmed.ncbi.nlm.nih.gov/35932546/)