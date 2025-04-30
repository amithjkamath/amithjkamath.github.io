---
layout: post
title: 'Paper Summary: Quality Assurance for AI-Based Applications in Radiation Therapy'
date: 2024-01-01 00:00:00
categories: paper-summary, computer-vision, mia
---

AI algorithms are typically data-driven, may be continuously evolving, and their behavior has a degree of (acceptable) uncertainty due to inherent noise in training data and the substantial number of parameters that are used in the algorithms.

QA for AI-based systems is an emerging area, which has not been intensively explored and requires interactive collaborations between medical doctors, medical physics experts, and commercial/research AI institutions.

Given their unique role as a bridge between the clinical environment and new technologies, medical physics experts are most likely the main frontiers to implementing these automated systems to improve efﬁciency, quality, standardization, and acceleration of the workﬂow leading to more safe and accurate radiation administration.

It is, therefore, crucial to provide clear guidance for understanding and tackling the difﬁculties inherent in high-quality AI systems. This has been recognized by different societies in medical physics, which have recently published a detailed Checklist for AI in Medical Physics (CLAMP).

Case-speciﬁc QA refers to all checks that verify the output of an AI-based application generated for each patient or machine.10 When QA results are satisfactory, the output can be used in the RT workﬂow. When the case-speciﬁc QA check fails, the output is subject to a second veriﬁcation. Depending on the application, the quality of the model’s output can be monitored in multiple ways. Currently, human supervision of the output, in combination with quantitative/qualitative measures, is seen as one of the most important tools. Automatic case-speciﬁc QA methods can be utilized to highlight divergent behavior. When too frequent failures are detected during case-specific QA, a routine QA is carried out to determine whether a recommissioning of the deployed model is needed.

Routine QA is dedicated to the regular supervision of the AI model validity with the intention to monitor if the model’s output changes unexpectedly after clinical workﬂow changes (eg, software update, etc.). For this purpose, a periodical end-to-end performance should be completed on a reference test dataset. When routine QA tests do not meet expectations, a model re-commissioning may be necessary.

References
------

Claessens, M., Oria, C. S., Brouwer, C. L., Ziemer, B. P., Scholey, J. E., Lin, H., Witztum, A., Morin, O., Naqa, I. el, van Elmpt, W., & Verellen, D. (2022). Quality Assurance for AI-Based Applications in Radiation Therapy. In Seminars in Radiation Oncology (Vol. 32, Issue 4, pp. 421–431). W.B. Saunders.

[Paper link on DOI](https://doi.org/10.1016/j.semradonc.2022.06.011)