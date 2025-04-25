---
layout: page
title: Dose Prediction for Contour Quality Evalution
description: The need for understanding downstream tasks in relation to measuring quality of AI model automation.
img: assets/img/1.jpg
importance: 2
category: themes
related_publications: true
---

The not-so-random initial state of this text is courtesy [Ai2 Scholar QA](https://scholarqa.allen.ai/), and it has been reasonably cross-checked and improved by a human. This is a WIP (Work-In-Progress): this message will be removed once sufficient progress has been made.

-------------

## Introduction

Contouring quality in radiation oncology represents a critical aspect of treatment planning that directly influences treatment outcomes. Variations in how radiation oncologists delineate target volumes and organs at risk (OARs) can significantly impact dosimetric calculations, potentially affecting both tumor control probability (TCP) and normal tissue complication probability (NTCP) [(Zhu et al., 2019)](https://www.frontiersin.org/articles/10.3389/fonc.2019.00627/pdf). Research has demonstrated that accurate primary gross tumor contouring can positively influence tumor control and patient survival outcomes [(Zhu et al., 2019)](https://www.frontiersin.org/articles/10.3389/fonc.2019.00627/pdf)[(Lin et al., 2019)](https://pubmed.ncbi.nlm.nih.gov/30912722/). This is particularly important because contouring variations directly affect radiation treatment planning quality, especially regarding dose distribution to OARs.

Quality assurance (QA) for clinical contours represents an integral component of radiotherapy, both in routine clinical practice and in clinical trials. However, the process of manually reviewing contours is resource-intensive, requiring substantial anatomical knowledge, significant human and financial investment, and may itself be subject to the same inter-observer variability present in the initial contouring process [(Nijhuis et al., 2021)](https://www.tandfonline.com/doi/pdf/10.1080/0284186X.2020.1863463?needAccess=true)[(Loo et al., 2012)](https://pubmed.ncbi.nlm.nih.gov/22815411/). The importance of contour QA has increased with the widespread adoption of highly conformal treatment techniques, which magnify the dosimetric impact of delineation errors [(Nijhuis et al., 2021)](https://www.tandfonline.com/doi/pdf/10.1080/0284186X.2020.1863463?needAccess=true). Proper contour QA is particularly crucial for improving the validity and reliability of clinical trial outcomes, especially when analyzing relationships between radiation dose and treatment-related toxicity.

## Automated contour quality assurance

The implementation of automatic segmentation in clinical practice faces a significant challenge: how to effectively validate and evaluate the accuracy and reliability of auto-generated contours (Cao et al., 2020). Traditional manual review of contours is resource-intensive and susceptible to the same inter-observer variability that affects initial contouring. Automated quality assurance (QA) systems offer a solution by efficiently identifying contouring errors while improving consistency (Brooks et al., 2024)(Veen et al., 2020).

Several approaches to automated contour QA have been developed. One popular method uses knowledge-based outlier detection with one-class training, where features calculated from high-quality contours are used to classify contours of unknown quality (Brooks et al., 2024)(Altman et al., 2015). These features typically include contour volume, shape, orientation, position, and image characteristics. The models range from univariate statistical approaches to more sophisticated multivariate statistical and deep learning models (McIntosh et al., 2013).

Recent research has demonstrated impressive results with convolutional neural network (CNN)-based QA tools. Rhee et al. developed a CNN-based autocontouring tool that could detect errors in multiatlas-based autocontours with high accuracy for head and neck structures (Rhee et al., 2019). For most organs at risk, their system correctly identified clinically unacceptable contours with accuracy rates of 80-99%.

In a subsequent study focused on pelvic structures, researchers found that surface Dice Similarity Coefficient (DSC) with tolerances of 1-3 mm was the most accurate metric for distinguishing clinically acceptable from unacceptable contours, achieving accuracy rates above 90% for targets and critical structures in cervical cancer patients (Rhee et al., 2022).

Duan et al. further enhanced contour QA by using multiple geometric agreement metrics (27 in total) with machine learning classification models (Duan et al., 2023). This approach outperformed traditional methods based on only one or two metrics, with recall values ranging from 0.727 to 0.842 and precision values from 0.762 to 0.899 for various head and neck structures.

Clinical implementation of automated segmentation with QA components has shown promising results. In a multiuser study, 98% of AI-predicted organs at risk required no revision or only minor revisions before being deemed clinically acceptable, reducing manual contouring time by 90% (Jin et al., 2022). Similarly, Dai et al. conducted clinical evaluations of automatic delineation models by having groups of radiation oncologists review the auto-generated contours and categorize them as acceptable with no corrections, acceptable with minor corrections, or unacceptable (Dai et al., 2021).

The quality of automated QA systems depends on several factors, including the size and quality of the atlas or training dataset. Research has shown that performance generally increases with the size of the atlas library, but reaches a plateau beyond a certain point (Lee et al._1, 2019). Additionally, the choice of segmentation algorithm influences QA performance, with modern approaches like generative adversarial networks with shape constraints showing improvements over traditional methods (Tong et al., 2019).

As these automated QA systems continue to evolve, they offer significant potential to streamline the radiation therapy workflow, reduce the burden of manual review, and improve the consistency and quality of contours used in treatment planning (Sharp et al., 2014). However, it's worth noting that while automated QA can identify potential errors, human verification remains essential in many clinical settings, particularly for target volumes where errors can have significant dosimetric consequences (Hoque et al., 2023).

## Clinical applications and acceptability criteria

Clinical implementation of contour evaluation requires clear acceptability criteria to determine when a contour is suitable for treatment planning. Despite uniform training and the use of contouring guidelines, inter-observer variability remains a persistent challenge in radiation oncology (Upreti et al., 2020)(Vinod et al., 2016). This variability is particularly important in clinical trials, where contour quality directly affects the validity and reliability of outcomes, especially when analyzing dose-toxicity relationships (Nijhuis et al., 2021).

Several international standards guide treatment plan evaluation in clinical practice, including those established by the International Commission on Radiation Units and Measurements (ICRU), the Radiation Therapy Oncology Group (RTOG), and Quantitative Analyses of Normal Tissue Effects in the Clinic (QUANTEC). These standards recommend various indices for plan evaluation, including conformity index, coverage index, homogeneity index, and dose gradient index, along with dose-volume constraints like V107% and D95% (Krishnan et al., 2022).

The clinical acceptability of contours varies by anatomical structure. Research has shown that inter-observer variability is generally low for clearly defined organs like the bladder but increases significantly for structures without well-defined borders, such as the prostate, seminal vesicles, and rectum. Interestingly, for treatment plans, strong to moderate correlations exist between geometric indicators for target structure agreement and target coverage, while organ-at-risk (OAR) indicators show little correlation to final dosimetry (Liu et al., 2021). This supports the notion that target volume delineation accuracy is more critical for ensuring proper dose coverage than OAR delineation.

In clinical validation of automated contouring systems, radiation oncologists typically categorize auto-generated contours into three groups: acceptable with no corrections, acceptable with minor corrections, or unacceptable (Dai et al., 2021). This three-tier assessment approach has become a common method for evaluating contour quality in clinical settings, reflecting the practical need for efficient quality assurance that acknowledges the reality that minor edits are often acceptable in clinical workflows.

Recent research has emphasized the importance of adopting normalized plan quality metrics that integrate both geometric and dosimetric assessments. These comprehensive metrics can function as "virtual physicians" in evaluating plan quality. Studies have shown that plans using AI-generated contours differ from reference plans by 6.7-8.0% in overall plan quality, which generally falls within an acceptable range (Hoque et al., 2023). This indicates that while auto-segmented contours may not be identical to manual ones, they can produce dosimetrically acceptable plans.

To address the dosimetric impact of inter-observer variability, researchers have proposed novel metrics like the "coverage with dosimetric concordance index" (CDCI) (Upreti et al., 2020). Similarly, for evaluating the similarity of multiple delineations, generalized conformity indices have been developed to quantify agreement among any number of observers (Kouwenhoven et al., 2009).

Despite these advances, performing manual quality assurance on clinical contours remains time-consuming, requires substantial anatomical knowledge, and significant human and financial resources. Moreover, the review process itself may be influenced by the same inter-observer variability present in the initial contouring (Nijhuis et al., 2021)(Loo et al., 2012). This highlights the ongoing challenge of establishing objective, efficient, and clinically relevant criteria for contour acceptability.

## Our contributions and innovations

The broad idea here is to show that in the radiotherapy process, it is multi-step, which means that the output of the the initial steps can impact cumulative errors for the entire process differently than outputs of later stages. This also means that while estimating the quality of all these individual stages, it makes sense to understand how it impacts the outcome of the subsequent stages. 

For example, if the imaging step is measured for quality purely by standard noise characteristics, one could miss out factors that affect how easily the structures can be segmented even in the presence of noise. A holistic sense of what is quality needs to be measured.

In this line of thought, this post considers what happens between the contouring (or auto-segmentation) and the treatment dose planning steps - where traditionally, the contouring quality has been measured purely geometrically. Specifically, if the segmentation step was done in isolation, with the end goal of the entire process being just the labels at each pixel/voxel, it could be considered feasible to measure accuracy using a suitable geometric measure. Since this is not the case, our thesis is to introduce measures from the subsequent steps of treatment to guide the quality of previous steps - in this case, treatment planning.

Specifically, it is known for example that non-smooth contours around the target volumes are not well handled by dose planning tools due to the physical constraints of the multi-leaf collimators and the speed at which these can move while treating complex shaped tumors through an arc. This means that deliberately smoothing the surface of the tumor segmentation (even if it does not make anatomic sense at times) can help design better plans - thereby meaning that a smoothness constraint for measuring the quality of tumor contours would help make the overall plan better.

In our research, we attempt to incorporate dosimetric measures into the segmentation process - thereby hoping to come up with a better overall outcome rather than optimizing metrics for each sub-stage of the pipeline, which sometimes may not cumulatively lead to the optimal outcome {% cite kamath2023sensitivitydoseprediction %} {% cite kamath2023astra %} {% cite kamath2024radoncvsdldp %}.