---
layout: page
title: AutoDoseRank: Dosimetry-informed Segmentation Ranking
description: More details about our CaPTion@MICCAI '24 workshop paper.
img: assets/img/miccaiw-autodoserank.png
importance: 1
category: papers
---

This is a WIP (Work-In-Progress): this message will be removed once sufficient progress has been made. 

This page includes additional details around our CaPTion@MICCAI '24 paper: *"AutoDoseRank: Automated Dosimetry-informed Segmentation Ranking for Radiotherapy"*.

Segmentation is a critical step in radiotherapy (RT) for glioblastoma, an aggressive brain tumor. With increasing reliance on automated segmentation tools, clinical focus is shifting from manual contouring to verifying the quality of segmentation proposals. However, traditional metrics such as Dice score fail to capture the true clinical consequences of contouring errors, particularly in how they affect dose distributions across organs-at-risk (OARs).

**AutoDoseRank** is a new framework for ranking segmentation candidates using their predicted **dosimetric impact**, rather than geometric similarity alone. It combines a deep learning-based dose predictor with a novel ranking metric that incorporates:
- Organ-specific dose constraints,
- Clinical prioritization of organs,
- Patient-level dose impact estimates.

AutoDoseRank is evaluated on segmentation variants from 13 glioblastoma patients. For each case, four candidate segmentations were manually created and compared with the original. We calculated dose maps for each using both Eclipse (clinical TPS) and a trained dose prediction model. Then, AutoDoseRank ranked the segmentations by dose impact. Its rankings were compared to those of four experienced radiation oncologists.

Our results show that **AutoDoseRank outperforms three out of four experts**, and performs comparably to the most experienced one. Evaluation metrics such as **Kendall's Tau** and **Normalized Distance-based Performance Measure (NDPM)** demonstrate strong agreement with ground truth dosimetric rankings, and better consistency than inter-expert agreement. Ablation studies confirm the value of incorporating OAR priorities in ranking.

These findings support the use of AutoDoseRank as a clinically relevant quality assurance tool for automated segmentation systems in RT workflows, helping reduce clinician workload and enhance safety.

#See [the project repository](https://github.com/amithjkamath/autodoserank) to reproduce these results.

Citation
------

If you find this work useful, please cite it as:

    @inproceedings{mercado2024autodoserank,
        title={AutoDoseRank: Automated Dosimetry-Informed Segmentation Ranking for Radiotherapy},
        author={Mercado, Zahira and Kamath, Amith and Poel, Robert and Willmann, Jonas and Ermis, Ekin and Riggenbach, Elena and Mose, Lucas and Andratschke, Nicolaus and Reyes, Mauricio},
        booktitle={MICCAI Workshop on Cancer Prevention through Early Detection},
        pages={221--230},
        year={2024},
        organization={Springer}
    }