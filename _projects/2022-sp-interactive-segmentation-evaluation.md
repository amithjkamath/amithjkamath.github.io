---
layout: page
title: Segmentation Evaluator
description: an interactive exploration of segmentation metrics
img: assets/img/segmentation_evaluator.jpg
importance: 1
category: teaching
---

Image segmentation is one of the most fundamental tasks in the broad imaging field - with wide ranging applications. Over the past decade, thanks in part to Deep Neural Networks - the performance of algorithms/models that can achieve this has been astounding. A major cornerstone of this improvement related to how we measure the 'goodness' or quality of such segmentations. There are several motivations for measuring this - most obviously for training networks where a quantifiable measure of closeness to a 'ground truth' or 'reference' is needed to update weights during backpropagation. There are other motivations too, for example: correlating this quality to outcomes like clinical 'correctness', quantifying variance if multiple experts were to segment the same object, and so on. 

[Here](https://github.com/amithjkamath/segmentation-evaluator) is a simple UI that allows one to interactively draw boundaries around common objects of interest, and then evaluate how close you are to the "golden reference" ground truth using several metrics like Dice Score Coefficient, Hausdorff distance and pixel accuracy.

See it [here on MATLAB File Exchange](https://ch.mathworks.com/matlabcentral/fileexchange/112505-segmentation-evaluator).

