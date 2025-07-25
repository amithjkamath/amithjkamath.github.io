---
layout: page
title: Sensitivity of dose prediction models to contour variability
description: More details about our ISBI '23 poster and Cancers '23 manuscript.
img: assets/img/isbi-problem-statement.png
importance: 1
category: papers
---

[![2 minute video abstract](https://img.youtube.com/vi/Lz5-n4lA3QM/0.jpg)](https://www.youtube.com/watch?v=Lz5-n4lA3QM)

See [the project repository](https://github.com/amithjkamath/deepdosesens) for more information.

This page includes some additional details around our work titled: "How sensitive are deep learning based radiotherapy dose prediction models to variability in Organs At Risk segmentation?", as [presented at the International Symposium for Biomedical Imaging](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10230559), 2023 {% cite Kamath2023HowSensitive %}. The abstract of this work is reproduced here:

Radiotherapy is a critical component of treatment for brain tumors. Inter-expert variability, differences in protocols, and human errors in segmentation of organ-at-risk (OAR) and target volume contours may necessitate re-planning treatment. This is time-consuming, significantly reduces the efficiency of radiation oncology teams, and hampers timely intervention to curb tumor growth. Hence, automated quality assurance of segmentation results hold much potential. However, such a quality assurance method must be fast and have good levels of sensitivity to radiation dose changes due to contour variations. 

In this paper, we evaluated a Cascaded 3D UNet deep neural network for dose prediction in brain tumors. Using metrics defined in the openKBP challenge, we report a promising mean dose score or mean absolute error (MAE) of 0.906 and a mean Dose Volume Histogram (DVH) score of 1.942, between predicted versus reference 3D dose volumes on 20 clinical test cases. We further tested the sensitivity of these dose predictions to realistic inter-expert variability in segmentation of the left optic nerve, chosen due to its clinical relevance. 

We found that the predicted DVH curves for such variations match well with the reference, average prediction dose MAE of 2.315 was close to average inter-expert dose MAE of 2.443, and the correlation coefficient between the predicted and reference dose differences was 0.921, indicating strong sensitivity to contour variations. These encouraging results show the potential of employing such models within a broader automated quality assurance system in the radiotherapy planning workflow.

This work was extended into a [journal paper at Cancers, 2023](https://www.mdpi.com/2072-6694/15/17/4226) {% cite Poel2023Deep %}. The abstract of this paper is reproduced here:

External beam radiation therapy requires a sophisticated and laborious planning procedure. To improve the efficiency and quality of this procedure, machine-learning models that predict these dose distributions were introduced. The most recent dose prediction models are based on deep-learning architectures called 3D U-Nets that give good approximations of the dose in 3D almost instantly. Our purpose was to train such a 3D dose prediction model for glioblastoma VMAT treatment and test its robustness and sensitivity for the purpose of quality assurance of automatic contouring. 

From a cohort of 125 glioblastoma (GBM) patients, VMAT plans were created according to a clinical protocol. The initial model was trained on a cascaded 3D U-Net. A total of 60 cases were used for training, 15 for validation and 20 for testing. The prediction model was tested for sensitivity to dose changes when subject to realistic contour variations. Additionally, the model was tested for robustness by exposing it to a worst-case test set containing out-of-distribution cases. 

The initially trained prediction model had a dose score of 0.94 Gy and a mean DVH (dose volume histograms) score for all structures of 1.95 Gy. In terms of sensitivity, the model was able to predict the dose changes that occurred due to the contour variations with a mean error of 1.38 Gy. We obtained a 3D VMAT dose prediction model for GBM with limited data, providing good sensitivity to realistic contour variations. We tested and improved the model’s robustness by targeted updates to the training set, making it a useful technique for introducing dose awareness in the contouring evaluation and quality assurance process.


Citation
------

If you find these works useful, please cite them as:

    @inproceedings{Kamath2023HowSensitive,
    title={How sensitive are Deep Learning based Radiotherapy Dose Prediction Models to Variability in Organs at Risk Segmentation?},
    author={Kamath, Amith and Poel, Robert and Willmann, Jonas and Andratschke, Nicolaus and Reyes, Mauricio},
    booktitle={20th IEEE International Symposium on Biomedical Imaging (ISBI)},
    year={2023}
    }

    @article{Poel2023Deep,
    title={Deep-learning-based dose predictor for glioblastoma--assessing the sensitivity and robustness for dose awareness in contouring},
    author={Poel, Robert and Kamath, Amith J and Willmann, Jonas and Andratschke, Nicolaus and Ermi{\c{s}}, Ekin and Aebersold, Daniel M and Manser, Peter and Reyes, Mauricio},
    journal={Cancers},
    volume={15},
    number={17},
    pages={4226},
    year={2023},
    publisher={MDPI}
    }