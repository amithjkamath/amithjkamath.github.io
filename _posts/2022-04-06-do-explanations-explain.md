---
layout: post
title: 'Paper Summary: Do Explanations Explain? Model Knows Best'
date: 2022-04-06 00:00:00
categories: paper-summary, computer-vision, mia, interpretability
---

This paper attempts to tackle the feature attribution problem - which input features contribute to a neural networks' output? The answer they emphatically claim is best known to the model/network itself. They propose an empirical framework for axiomatic evalution of explanation (or saliency) methods and compare with several well known methods including GradCAM and IBA.


Major Learning Points
======

1. It is interesting that there is no ground truth for explainability: what is important for the human observer may not be important for the model. "But how do we know what is important for a human is also important for the model? There is no guarantee (or reason) that the model would use the same features as humans. To resolve this issue, we need to take a step back and ask what it means for a feature to be “important” for an output." - this bit is very important from the context of the difference between interpretability and explainability. Interpretability is likely a limitation of human understanding: something that an unconstrained neural network that can handle large semantic gaps differently than humanss does not ahere to. This furthermore leads to their assertion: "The concept of importance can thus be further chiseled by specifying desirable properties that an importance assignment method ought to satisfy. Such desirable proper- ties are formalized via axioms.".

2. The various flavors of explainability include gradient based methods like Guided Backprop, perturbation based methods like extremal perturbations, latent features using activation maps like GradCAM (which they show is one of the oldest, but also the most successful methods), or game theory based (like Shapley value based: deepSHAP, which is unfortunately not very well performing in their metrics). They hence devise situations called: null feature (where they test for features that should not contribute to the output score), single feature (where there is one instance that generates an output score for that category, but should not impact other categories of classification), and double feature (where the output score for each of two features must correspond to them, and not to each other, or, other outputs). 

3. The test figures they showcase (with random noise in the background, but known regions of categories randomly placed in the foreground) look rather contrived and are not really anywhere close to "real life situations". This however is again a human interpretation bias: for us, the background is noise, but for the models that attempt to explain their behavior, it could still be as "meaningful" as anything that is "natural" to us humans. This is quite a thought-provoking idea - that we are limited/biased in our understanding of interpretability itself.


Interesting bits
======
1. Interestingly, GradCAM performs well for null feature, single feature, and also double feature tests: only to be beaten by the Extremal Perturbation method in the Null and Single feature tests. The only other method that comes close is the IBA method, and others like GradCAM++ (which should have been an improvement over GradCAM) perform worse. This is quite interesting - to evaluate explanation methods objectively using another set of axioms or methods and compare them to each other. Visual explanation methods that correspond to human expectations are hence not always correlated to "true explainability" if that makes sense at all.

2. "Our current experiments in the proposed framework can be used to evaluate upcoming explanation methods. Furthermore, researchers can add more creative experiments to the proposed framework to assess explanations from other perspectives." - this is an interesting conclusion in that more complex axiomatic experiments could be designed for specific situations: like medical imaging, for example where certain distributions of noise/features could be used to confound explanation methods: to evaluate their robustness.


References
------

[Paper link on Arxiv](https://arxiv.org/abs/2203.02269)

[Code on GitHub](https://github.com/CAMP-eXplain-AI/Do-Explanations-Explain)