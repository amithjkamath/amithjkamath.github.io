---
layout: post
title: 'Paper Summary: Deep Orthogonal Fusion: Multimodal Prognostic Biomarker Discovery Integrating Radiology, Pathology, Genomic, and Clinical Data'
date: 2022-03-09 00:00:00
categories: paper-summary, computer-vision
---

This paper proposes a new method called 'Deep Orthogonal Fusion' - a deep learning framework that generates a multimodal risk score using - radiology scans (MRI exams), molecular profiles, histopathology slides and other clinical factors - to predict overall survival of glioma patients. Most prior studies focused on fusion of biopsy-based modalities; others have focused on late-stage fusion, relying on hand-crafted features and simple multimodal classifiers - not benefiting from efficiently combining all of them.


Major Learning Points
======
The fusion works by combining embeddings from each modality using attention-gated tensor fusion (what does this mean?), and introduces a multimodal orthogonalization loss (to incentivize individual embeddings to be complementary). 

1. The models are first trained on individual embeddings using a Cox partial likelihood loss function. Then they are combined through an attention-gated tensor fusion, trained simultaneously to predict Overall Survival (OS). Integrating radiology scans into deep multimodal models conferred the greatest performance increase - indicating their complementary use in future studies.

2. The paper introduces a multimodal orthogonalization loss function - penalizing correlations between unimodal embeddings, while encouraging each to provide independent information. 

3. The implementation details are particularly interesting: the sigmoid activation applied to the final layer of each network is scaled to -3 to 3, to function as a prognostic risk score. Also, the individual unimodal layers are frozen for 5 epochs initially - so that the fusion layers evolve, after which the unimodal layers also evolve. It would be interesting to know how these choices impact the training convergence.


Interesting bits
======
1. This part: "we stipulate that unimodal embeddings preceding fusion should be orthogonal. This criterion enforces that each modality introduced contributes unique information to outcome prediction, rather than relying on signal redundancy between modalities." - is interesting. Playing devils' advocate, using redundant features as a means to further strengthen confidence in an outcome would appear to make sense, but this radically different approach seems to also pay strong dividends, based on the results. 

2. It is sobering to think that the subjects/patients who are data points in this study are really categorized as observed (dead) or censored (alive). Not having thought too much about the eventual progression of diseases from a humanitarian perspective as much as I should have, it is a grim outlook overall. 


References
------

[Paper link on Arxiv](https://arxiv.org/abs/2107.00648)

Paper code - none I could extract from the paper, although their website: https://www.tempus.com has some more details about what they're up to.