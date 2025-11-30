---
layout: page
title: Clinically-Aware Quality Assessment for Medical Image Segmentation
description: Bridging the gap between geometric accuracy and clinical impact in radiotherapy treatment planning.
img: assets/img/dose-awareness.png
importance: 1
category: themes
related_publications: true
---

In radiation therapy, the accuracy of anatomical structure delineation directly impacts treatment outcomes. While automated segmentation methods promise increased efficiency and consistency, evaluating their quality remains a fundamental challenge. Traditional approaches rely on geometric metrics that measure spatial overlap and boundary distances, but these measures often fail to capture what matters most in clinical practice: how segmentation errors affect the actual radiation dose delivered to patients.

Our research addresses this critical gap by developing and validating methods that assess segmentation quality through the lens of clinical dosimetry. Rather than treating all errors equally, we focus on understanding and predicting which segmentation variations will meaningfully affect treatment planning and patient outcomes. This work combines insights from computer vision, medical physics, and clinical practice to create quality assessment tools that are both technically rigorous and clinically relevant.

## From Geometric Metrics to Clinical Impact

The field of medical image segmentation has traditionally relied on geometric metrics to quantify the quality of contour delineations. Measures such as the Dice Similarity Coefficient, which quantifies the overlap between two segmented regions, or the Hausdorff Distance, which captures the maximum boundary discrepancy, have become standard evaluation tools. These metrics offer mathematical precision and computational efficiency, making them attractive for algorithm development and validation.

However, geometric metrics suffer from an inherent limitation: they assume that all spatial errors carry equal clinical significance. In reality, a small contour variation in a region exposed to high radiation doses may have profound clinical consequences, while a larger error in a low-dose area might be clinically insignificant. The relationship between geometric accuracy and clinical impact is complex and highly context-dependent, influenced by the treatment technique, the anatomical structure involved, and the spatial distribution of planned radiation doses.

Our work demonstrates that radiation oncologists themselves struggle to visually predict which contour variations will result in clinically significant dosimetric changes {% cite Willmann2025Predicting %}. This finding underscores the need for automated computational approaches that can accurately assess the clinical implications of segmentation errors. By focusing on dose distribution changes rather than purely geometric measures, we can provide quality assessments that directly inform clinical decision-making and resource allocation.

## Developing Automated Dosimetric Quality Assessment

Building on these insights, we developed AutoDoseRank {% cite Mercado2024AutoDoseRank %}, a deep learning system designed to evaluate segmentation quality based on predicted dosimetric impact. The system learns to rank different contour variations according to how they would affect radiation dose distributions, enabling rapid quality assessment without requiring full dose calculations for every contour version.

The technical approach combines convolutional neural networks with radiotherapy planning knowledge, training the system to recognize patterns that correlate with clinically meaningful dose differences. By achieving ranking accuracy above 0.8 (Spearman's ρ) with sub-second inference times, the system demonstrates that automated dosimetric quality assessment can be both accurate and clinically practical. The approach is particularly valuable for validating AI-generated segmentations, where understanding the clinical acceptability of automated contours is essential for safe clinical deployment.

## Clinical Integration and Quality Assurance

Modern radiation therapy workflows increasingly incorporate automated segmentation tools to improve efficiency and reduce inter-observer variability. However, the introduction of these tools requires robust quality assurance frameworks that can identify when automated contours meet clinical acceptability standards and when expert review is necessary. Our research contributes to this challenge by developing criteria and tools that prioritize clinical relevance over geometric precision.

We have worked to understand what makes a contour clinically acceptable from the perspective of treatment planning and delivery. This involves recognizing that different anatomical structures have different tolerance levels for segmentation errors, and that the clinical context—such as treatment intent and prescription dose—influences acceptability criteria. By incorporating dosimetric evaluation into quality assurance workflows, we can focus expert attention on the cases where it matters most, potentially reducing manual review time while maintaining or improving treatment quality.

The integration of uncertainty quantification further enhances these frameworks. When automated systems can indicate their confidence in specific predictions, clinicians can make more informed decisions about when to accept automated contours and when additional verification is warranted. This creates a more efficient, adaptive workflow that balances automation benefits with appropriate human oversight.

## Future Directions and Broader Impact

Looking forward, several promising directions emerge from this work. The integration of multi-modal imaging data and temporal information from previous treatment sessions could enhance prediction accuracy and enable more personalized quality assessment. Advanced uncertainty quantification methods may improve clinical trust and adoption by providing interpretable confidence estimates. Real-time assessment tools could enable immediate feedback during contouring, potentially improving efficiency and accuracy.

Beyond technical advances, this research highlights the importance of outcome-based validation. While dosimetric correlation provides a more clinically relevant evaluation than geometric metrics alone, the ultimate measure of success is the impact on patient outcomes. Establishing connections between segmentation quality, treatment plan quality, and clinical outcomes represents an important frontier for future investigation.

The broader vision is to develop quality assessment frameworks that are integrated, predictive, and precision-focused—tools that not only evaluate current segmentations but also guide improvements and adaptations based on individual patient characteristics and treatment contexts. By continuing to bridge the gap between computational methods and clinical needs, we can enhance the safety, efficiency, and effectiveness of modern radiation therapy.
