---
layout: page
title: Do we really need that skip connection?
description: More details about our MICCAI '23 work.
img: assets/img/miccai-skip-connections.png
importance: 1
category: papers
---

[![2 minute video abstract](https://img.youtube.com/vi/YreG6vC64aw/0.jpg)](https://www.youtube.com/watch?v=YreG6vC64aw)

See [the project repository](https://github.com/amithjkamath/to_skip_or_not) to reproduce these results.

This page includes some additional details around the paper: "Do we really need that skip connection? Understanding its' interplay with task complexity", as [presented at the International Conference on Medical Image Computing and Computer-Assisted Intervention](https://link.springer.com/chapter/10.1007/978-3-031-43901-8_29), 2023 {% cite Kamath2023DoWe %}. The abstract of this work is reproduced here:

The UNet architecture has become the preferred model used for medical image segmentation tasks. Since its inception, several variants have been proposed. An important component of the UNet architecture is the use of skip-connections, said to carry over image details on its decoder branch at different scales.  However, beyond this intuition, not much is known as to what extent skip-connections of the UNet are necessary, nor what their interplay is in terms of model robustness when they are subjected to different levels of task complexity. 

In this study we analyzed these questions using three variants of the UNet architecture (the standard UNet, a ``No-Skip'' UNet, and an Attention-Gated UNet) using controlled experiments on varying synthetic texture images, and evaluated these findings on three medical image data sets. We measured task complexity as a function of texture-based similarities between foreground and background distributions. Using this scheme, our findings suggest that the benefit of employing skip-connections is small for low-to-medium complexity tasks, and its benefit appear only when the task complexity becomes large. 

We report that such incremental benefit is non-linear, with the Attention-Gated UNet yielding larger improvements. Furthermore, we find that these benefits also bring along robustness degradations on clinical data sets, particularly in out-of-domain scenarios. These results suggest a dependency between task complexity and the choice/design of noise-resilient skip-connections, indicating the need for careful consideration while using these skip-connections.

This work is currently under review in an extended journal version, the abstract of which is included below:

Background: Since its introduction in 2015, the U-Net architecture has become popular for medical image segmentation. U-Net is known for its "skip connections," which transfer image details directly to its decoder branch at various levels. However, it’s unclear how these skip connections affect the model's performance when the texture of input images varies.

Methods: To explore this, we tested six types of U-Net-like architectures in three groups: Standard (U-Net and V-Net), No-Skip (U-Net and V-Net without skip connections), and Enhanced (AGU-Net and UNet++, which have extra skip connections). Because convolutional neural networks (CNNs) are known to be sensitive to texture, we defined a novel texture distance (TD) metric and ran experiments with synthetic images, adjusting this measure. We then applied these findings to four real medical imaging datasets, covering different anatomies (breast, colon, heart, and spleen) and imaging types (ultrasound, histology, MRI, and CT). The goal was to understand how the choice of architecture impacts the model's ability to handle varying TD between foreground and background. For each dataset, we tested the models with five categories of TD, measuring their performance using the Dice Score Coefficient (DSC), Hausdorff distance, surface distance, and surface DSC.

Results: Our results on synthetic data with varying textures show differences between the performance of architectures with and without skip connections, especially when trained in hard textural conditions. When translated to medical data, it indicates that training data sets with a narrow texture range negatively impact the robustness of architectures that include more skip connections. The robustness gap between architectures reduces when trained on a larger TD range. In the harder TD categories, models from the No-Skip group performed the best in 5/8 cases (based on DSC) and 7/8 (based on Hausdorff distances). When measuring robustness using the coefficient of variation metric on the DSC, the No-Skip group performed the best in 7 out of 16 cases, showing superior results than the Enhanced (6/16) and Standard groups (3/16). 

Conclusions: These findings suggest that skip connections offer performance benefits, usually at the expense of robustness losses, depending on the degree of texture distance between the foreground and background, and the range of texture variations present in the training set. This indicates careful evaluation of their use for robustness-critical tasks like medical image segmentation. Combinations of texture-aware architectures must be investigated to achieve better performance-robustness characteristics.

Citation
------

If you find these works useful, please cite them as:

    @inproceedings{Kamath2023DoWe,
    title        = {Do we really need that skip-connection? understanding its interplay with task complexity},
    author       = {Kamath, Amith and Willmann, Jonas and Andratschke, Nicolaus and Reyes, Mauricio},
    booktitle    = {International Conference on Medical Image Computing and Computer-Assisted Intervention},
    pages        = {302--311},
    year         = {2023},
    organization = {Springer},
    howpublished = {\url{https://link.springer.com/chapter/10.1007/978-3-031-43901-8_29}},
    }