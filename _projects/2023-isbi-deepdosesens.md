---
layout: page
title: Deep Dose Predictor Sensitivity
description: More details about our ISBI '23 poster.
img: assets/img/isbi-problem-statement.png
importance: 1
category: papers
---

This is a WIP (Work-In-Progress): this message will be removed once sufficient progress has been made. 

This page includes some additional details around the paper: "How sensitive are deep learning based radiotherapy dose prediction models to variability in Organs At Risk segmentation?", as presented at the International Symposium for Biomedical Imaging, 2023 {% cite kamath2023sensitivitydoseprediction %}. 

[![2 minute video abstract](https://img.youtube.com/vi/Lz5-n4lA3QM/0.jpg)](https://www.youtube.com/watch?v=Lz5-n4lA3QM)

Radiotherapy is a critical component of treatment for brain tumors. Inter-expert variability, differences in protocols, and human errors in segmentation of organ-at-risk (OAR) and target volume contours may necessitate re-planning treatment. This is time-consuming, significantly reduces the efficiency of radiation oncology teams, and hampers timely intervention to curb tumor growth. Hence, automated quality assurance of segmentation results hold much potential. However, such a quality assurance method must be fast and have good levels of sensitivity to radiation dose changes due to contour variations. 

In this paper, we evaluated a Cascaded 3D UNet deep neural network for dose prediction in brain tumors. Using metrics defined in the openKBP challenge, we report a promising mean dose score or mean absolute error (MAE) of 0.906 and a mean Dose Volume Histogram (DVH) score of 1.942, between predicted versus reference 3D dose volumes on 20 clinical test cases. We further tested the sensitivity of these dose predictions to realistic inter-expert variability in segmentation of the left optic nerve, chosen due to its clinical relevance. 

We found that the predicted DVH curves for such variations match well with the reference, average prediction dose MAE of 2.315 was close to average inter-expert dose MAE of 2.443, and the correlation coefficient between the predicted and reference dose differences was 0.921, indicating strong sensitivity to contour variations. These encouraging results show the potential of employing such models within a broader automated quality assurance system in the radiotherapy planning workflow.

See [the project repository](https://github.com/amithjkamath/deepdosesens) to reproduce these results.

Citation
------

If you find this work useful, please cite it as:

    @inproceedings{kamath2023sensitivitydoseprediction,
    title={How sensitive are Deep Learning based Radiotherapy Dose Prediction Models to Variability in Organs at Risk Segmentation?},
    author={Kamath, Amith and Poel, Robert and Willmann, Jonas and Andratschke, Nicolaus and Reyes, Mauricio},
    booktitle={20th IEEE International Symposium on Biomedical Imaging (ISBI)},
    year={2023}
    }