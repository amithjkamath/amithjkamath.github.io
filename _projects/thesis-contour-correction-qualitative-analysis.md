---
layout: page
title: Qualitative analysis of Radiation Oncology Contour Corrections
description: Understanding what human-experts think about the impact of contour evaluations
img: assets/img/7.jpg
importance: 1
category: themes
related_publications: true
---

The not-so-random initial state of this text is courtesy [Ai2 Scholar QA](https://scholarqa.allen.ai/), and it has been reasonably cross-checked and improved by a human. This is a WIP (Work-In-Progress): this message will be removed once sufficient progress has been made.

-------------

## Impact of contour variations 

Contouring variations in radiation therapy have substantial clinical implications that extend beyond mere geometric differences. Studies have shown that variations in contouring of targets and organs at risk (OARs) can significantly impact dose-volume histogram (DVH) calculations, tumor control probability (TCP), and normal tissue complication probability (NTCP), with the magnitude depending on the degree of variation and the plan dose gradient (Zhu et al., 2019). The accuracy of primary gross tumor contouring can positively influence tumor control and patient survival outcomes (Zhu et al., 2019)(Lin et al., 2019).

Inter-observer variability in contouring remains a persistent challenge in radiation oncology despite uniform training and the use of standardized contouring guidelines (Upreti et al., 2020)(Vinod et al., 2016). This variability is not uniform across all structures; research has demonstrated that inter-observer variability is generally low for clearly defined organs like the bladder but increases significantly for structures without well-defined borders, such as the prostate, seminal vesicles, and rectum (Liu et al., 2021). This finding has important implications for quality assurance protocols, suggesting that structures with inherently higher variability may require more rigorous review.

The relationship between geometric and dosimetric impact varies by structure type. For target volumes, strong to moderate correlations exist between geometric indicators for structure agreement and target coverage, suggesting that target delineation accuracy directly influences dose distribution (Liu et al., 2021). Conversely, OAR indicators often show little to no correlation with final dosimetry, indicating that small geometric differences in OAR delineation may not necessarily translate to clinically significant dosimetric variations (Liu et al., 2021). This pattern was confirmed by Xian et al., who found that differences between geometric indices and dosimetric indices were inconsistent, highlighting that clinical acceptability of contouring results cannot be judged by geometric indices alone (Xian et al., 2020).

The dosimetric impact of contouring variations depends on the specific structure and its location relative to high-dose regions. Stockinger et al. demonstrated this using cardiac substructures, finding that while contouring agreement for the complete heart was high (89% Jaccard similarity coefficient) with a corresponding low dose coefficient of variation (4.2%), structures with lower spatial agreement like the pulmonary valve showed poor dosimetric agreement (Stockinger et al., 2021). For some deep structures, however, dosimetric agreement remained good despite higher spatial variation, illustrating the complex relationship between geometric and dosimetric agreement (Stockinger et al., 2021).

Target volume delineation errors can have particularly significant consequences. Smolders et al. demonstrated that using propagated target contours instead of manual ones for plan optimization clearly influences dose distribution, affecting both target coverage and dose to OARs (Smolders et al., 2023). This finding emphasizes the critical importance of manual verification and adjustment of target contours in adaptive workflows, even when automated methods are employed (Smolders et al., 2023).

The coherence between geometric and dosimetric variations has been quantified in several studies. Zhang et al. evaluated different deformable image registration algorithms and found corresponding patterns in both geometric metrics (Dice coefficient) and dosimetric parameters (Homogeneity Index), with variations observed in both large and small organs (Zhang et al., 2018). This coherence suggests that in some contexts, geometric metrics may serve as reasonable proxies for dosimetric impact, though this relationship is not universally applicable.

To address the dosimetric impact of inter-observer variability, researchers have proposed specialized metrics such as the "coverage with dosimetric concordance index" (CDCI) (Upreti et al., 2020). Similarly, for quantifying agreement among multiple observers, generalized conformity indices have been developed that remain unbiased regardless of the number of delineations being compared (Upreti et al., 2020)(Kouwenhoven et al., 2009). These metrics attempt to bridge the gap between geometric evaluation and clinical relevance by more directly connecting contour variations to their dosimetric implications.

## Geometric evaluation metrics

The 2015 review by Taha and Hanbury [1] segments (pun unintended) image segmentation metrics into six categories: 

1. Overlap: this is based on the four quadrants of True/False Positive/Negative, and are by far the most popular metrics used (especially Dice). Essentially, they measure some ratio of overlap versus the overall set. Unfortunately, in practice - these metrics could be very biased. Specifically, for objects that are larger, the scores are typically not very sensitive to errors, while for smaller objects, the scores become much more sensitive.

Well known varieties: Dice, Jaccard, F1

2. Volume: this too depends on the True/False Positive/Negative quadrants, however, it does not consider the intersection at all. It is defined as: 1 - (|False Negative - False Positive|)/(Sum of GT and Estimate). Interestingly, this metric can be 1 even when the overlap is empty! 

3. Pair counting: This family involves looking at each segmentation as a set, and then defining the score based on the belonging-ness of each element (imagine as a pixel) in each of the two sets (ground truth or estimate, or both). In the context of image segmentation, this could be reframed as (TP + TN) / (TP + TN + FP + FN), and hence in some way, becomes an overlap metric. 

4. Information theoretic:

Mutual Information

5. Probabilistic:

AUC, Cohen's Kappa

6. Spatial distance: 

These include the rather well known Hausdorff, Average, and Mahalanobis distances.

A drawback (which is likely a consequence of how close these metrics are to actual image properties) is that they are not normalized. This makes interpretation and comparison more challenging than otherwise. It could be argued that a 'true' numerical measure helps in interpretation, but it then involves more complications like what the pixel dimensions are, are there discretization effects, and so on. 

Geometric evaluation metrics for assessing contour quality in radiation oncology can be broadly categorized into two main types: distance-based metrics and overlap-based (volumetric) metrics.

Distance-Based Metrics

Distance-based metrics measure the spatial difference between contour boundaries and include:

Hausdorff Distance (HD): Measures the maximum distance between two contours' boundaries, with lower values indicating better agreement (Lee et al., 2019)(Haq et al., 2020)(Zhong et al., 2023)
95th Percentile Hausdorff Distance (HD95): The 95th percentile of surface distances, less sensitive to outliers than maximum HD (Haq et al., 2020)(Xian et al., 2021)
Mean Distance to Agreement (MDA): The average distance between contour boundaries (Wang et al., 2024)(Zhong et al., 2023)
Overlap-Based Metrics

Overlap metrics quantify the volumetric similarity between contours:

Dice Similarity Coefficient (DSC): Measures the overlap between two contours, ranging from 0 (no overlap) to 1 (perfect overlap) (Lee et al., 2019)(Haq et al., 2020)(Zhong et al., 2023)
Jaccard Index: Another overlap metric mathematically related to DSC (Stockinger et al., 2021)(Xian et al., 2021)
Surface Dice (sDSC): A variant of DSC that focuses on boundary agreement (Marquez et al., 2024)
These geometric metrics are widely used in literature and segmentation challenges to evaluate contour accuracy (Cao et al., 2020)(Raudaschl et al., 2017). A comprehensive review of segmentation evaluation metrics by Taha et al. identified 20 different metrics used in the field (Taha et al., 2015).

There is ongoing debate about the most appropriate metrics for contour evaluation. Earlier studies primarily used volume ratios (Collier et al., 2003), but there has been a shift toward using multiple complementary metrics for a more comprehensive evaluation. In a review of 69 contouring studies, Jameson et al. found that volume metrics were used 59 times, dimension and shape metrics 36 times, and center of volume metrics 19 times, with 67 of 69 studies using multiple metrics (Jameson et al., 2010).

For evaluating automated segmentation approaches, both distance-based and overlap-based metrics are commonly employed, as seen in various head and neck, thoracic, and other anatomical site studies (Raudaschl et al., 2017)(Men et al., 2017)(Yang et al., 2020).

However, it's important to note that these purely geometric metrics do not necessarily reflect the clinical impact of contour differences (Simoes et al., 2019)(Sharp et al., 2014). Studies have shown that geometric indices alone may be insufficient for assessing contouring accuracy in a clinically relevant manner (Xian et al., 2020)(Zhong et al., 2023), highlighting the need for dosimetric evaluation to complement geometric assessment.

## Limitations of geometric evaluation methods

While geometric metrics are widely used to evaluate contour quality in radiation therapy, they have significant limitations that affect their clinical relevance. Studies have consistently shown that purely geometric measures such as Dice Similarity Coefficient (DSC) and Hausdorff Distance (HD) do not necessarily reflect the actual clinical impact of contour differences (Simoes et al., 2019)(Sharp et al., 2014). The fundamental issue is that geometric indices evaluate contours at an early stage of the radiotherapy workflow, whereas the clinical implications of geometrical deviations should be assessed downstream at the dose level (Simoes et al., 2019).

One of the major challenges in implementing automated contour segmentation in clinical practice is the lack of effective validation approaches that consider more than just geometric accuracy (Cao et al., 2020). Treatment plans containing contouring deviations of a few millimeters may still produce similar dose distributions, demonstrating that the relationship between geometric agreement and dosimetric impact is not straightforward (Cao et al., 2020). This disconnect between geometric metrics and clinical relevance creates uncertainty about the quality and acceptability of auto-segmented contours in clinical practice.

Research by Xian et al. confirms that clinical acceptability of contouring results cannot be judged by geometric indices alone, as differences between geometric and dosimetric indices are often inconsistent (Xian et al., 2020). A comprehensive evaluation should combine both geometric and dosimetric assessments to provide a complete picture of contour quality (Xian et al., 2020).

This limitation becomes particularly evident when considering target volumes versus organs at risk (OARs). A recent study by Smolders et al. demonstrated that propagated target contours significantly impact both target coverage and OAR dose, indicating that manual verification of target contours remains essential in adaptive workflows (Smolders et al., 2023). Similarly, for OARs near planning target volumes (PTVs), geometric agreement metrics can be misleading indicators of contour quality, as demonstrated by Marquez et al., who found that 97% of OARs exhibiting significant dose differences between manually edited and auto-contours were within 2.5 cm of the PTV, regardless of their geometric agreement scores (Marquez et al., 2024).

Zhong et al. reinforced this point, noting that relying solely on geometric metrics like DSC, Jaccard Index, and HD may not be sufficient for assessing ROI delineation accuracy in radiotherapy (Zhong et al., 2023). They argued that dosimetric metrics should be considered to evaluate the quality of automatic delineation results, which would help to understand the dose-response relationship more precisely from a clinical perspective (Zhong et al., 2023).

These limitations highlight the need for a more comprehensive approach to contour evaluation that extends beyond geometric indices to include dosimetric impact, particularly as automated segmentation methods become more prevalent in clinical practice (Sharp et al., 2014).

### What are the characteristics of an ideal metric?

This is a difficult question to have a generic answer, but here are some high-level expectations:

1. It is invariant to resolution/size changes (something DSC for example is not)
2. This is not strictly necessary, but a normalized metric is better than one with an undefined range. This is especially important for comparisons across images.
3. It is consistent from an outcome perspective. Specifically, for a normalized measure, 0.9 should have a well understood meaning outside the image-space, and should provide some guarantees in the outcome.

## Dosimetric evaluation methods

While geometric metrics measure the spatial accuracy of contours, dosimetric evaluation methods focus on how contouring variations affect the actual radiation dose distribution—a more direct measure of clinical impact. Researchers have increasingly recognized that purely geometric evaluations may not reflect the clinical consequences of contour differences (Simoes et al., 2019)(Sharp et al., 2014). Dosimetric analysis represents a more comprehensive approach to understanding how contouring variations influence treatment outcomes.

Several standard dosimetric parameters are commonly used to evaluate target coverage and plan quality:

Target Coverage Metrics:

Percentage of Planning Target Volume (PTV) receiving at least 95% of the prescription dose (V95%) (Lobefalo et al., 2013)
Homogeneity Index (HI), calculated as the ratio of doses covering 5% and 95% of the PTV (D5/D95) (Choi et al., 2019)(Gong et al., 2010)
Plan Quality Indices:

Conformity Index (CI)
Coverage Index
Dose Gradient Index
Plan Quality Metric (PQM) percentage (Choi et al., 2019)
These metrics adhere to guidelines established by various bodies including the International Commission on Radiation Units and Measurements (ICRU), Radiation Therapy Oncology Group (RTOG), and Quantitative Analyses of Normal Tissue Effects in the Clinic (QUANTEC) (Krishnan et al., 2022).

Dosimetric evaluation has become particularly important in assessing automated contouring tools. Recent studies have demonstrated that AI-predicted organ-at-risk (OAR) contours can lead to dose differences averaging 4.8% compared to clinical reference contours, which is comparable to or better than inter-observer contouring variations (Jin et al., 2022). Another study found that AI-generated contours were dosimetrically non-inferior to manual delineations after limited edits, while reducing total delineation time from 25.9 minutes to 5.4 minutes (Berenato et al., 2024).

However, dosimetric evaluation of target contours reveals different considerations than for OARs. Research has shown that using propagated target contours instead of manual ones for plan optimization significantly affects both target coverage and OAR dose, indicating that manual verification of target contours remains essential in adaptive workflows (Smolders et al., 2023).

The accuracy of external body contouring also impacts dosimetric calculations. One study demonstrated that fluctuations in external contour affected calculated volume and thus dose calculations, with errors ranging from -2.8% to +2.5% (Banaee et al., 2024).

Despite the clear clinical relevance of dosimetric evaluation, challenges remain. This approach requires treatment planning data, and there is currently no standard method or agreed threshold for acceptable dosimetric variation (Alzahrani et al., 2024). Additionally, conventional quality assurance procedures in radiation therapy typically rely on point and planar dosimeters, which may not capture the full three-dimensional impact of contouring variations (Ibbott et al., 2019).