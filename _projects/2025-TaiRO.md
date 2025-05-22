---
layout: post
title: TaiRO - Training in AI for Radiation Oncology
description: A work-in-progress set of content tailored for this niche field.
img: assets/img/ai-in-rt-course.png
importance: 1
category: teaching
---

TaiRO (also inspired by Tyro, which means beginner or learner) is a heavily borrowed (from ChatGPT and other online sources) structure for a short course on AI in Radiation Oncology. This is a WIP (Work-In-Progress): this message will be removed once sufficient progress has been made. 

### [1: Introduction]({% link _posts/2025-01-01-01-TaiRO-Intro.md %})

* Overview of AI: Definition, history, and evolution of AI in healthcare.​
* Relevance to Radiation Oncology: The role and potential of AI in enhancing radiation therapy workflows.​
* Current Landscape: Review of existing AI applications in medical imaging and radiation therapy.​

### [2: Fundamentals of Artificial Intelligence through Deep Learning]({% link _posts/2025-02-01-02-TaiRO-Fundamentals.md %})

* Machine Learning Basics: Supervised vs. unsupervised learning, key algorithms, and model evaluation metrics.​
* Deep Learning Introduction: Neural networks, convolutional neural networks (CNNs), and their relevance to image analysis.​
* Tools and Frameworks: Introduction to popular AI development tools and platforms.​

### [3: Medical Imaging in Radiation Oncology]({% link _posts/2025-03-01-03-TaiRO-Imaging.md %})

* Imaging Modalities: CT, MRI, PET, and their roles in radiation therapy planning.​
* Image Acquisition and Reconstruction: Understanding the technical aspects and challenges.​
* Image Preprocessing Techniques: Noise reduction, normalization, and enhancement methods.​

### [4: AI for Contouring]({% link _posts/2025-04-01-04-TaiRO-Contouring.md %})

* Contouring Techniques: Traditional methods vs. AI-driven approaches.​
* Deep Learning for Contouring: Application of CNNs and U-Net architectures.​
* Case Studies: Automated tumor and organ-at-risk delineation.​

## 5: AI in Image Registration and Fusion

* Concepts of Image Registration: Aligning images from different modalities or time points.​
* AI-enhanced Registration Methods: Learning-based approaches for improved accuracy.​
* Clinical Applications: Integrating multimodal imaging data for comprehensive analysis.​

## 6: Radiomics and Feature Extraction

* Introduction to Radiomics: Quantitative analysis of imaging features.​
* Feature Extraction and Selection: Techniques for identifying relevant imaging biomarkers.​
* Predictive Modeling: Using radiomic features for outcome prediction and personalized therapy.​

### [7: AI for Treatment Planning]({% link _posts/2025-07-01-07-TaiRO-Treatment-Planning.md %})

* Automated Treatment Planning: Leveraging AI for plan optimization and dose calculation.​
  * [IMRT](/glossary/#IMRT), [VMAT](/glossary/#VMAT) and others.
* Knowledge-based Planning: Utilizing historical data to inform new treatment plans.​
* Case Studies: Examples of AI-driven treatment planning systems.​

## 8: AI for Quality Assurance and Safety

* Quality Assurance Processes: Ensuring accuracy and safety in radiation therapy.​
* AI Applications in QA: Automated error detection and workflow optimization.​
* Regulatory Considerations: Compliance with standards and guidelines for AI tools.​

## 9: Validation and Evaluation of AI Models

* Performance Metrics: Assessing accuracy, sensitivity, specificity, and robustness.​
* Clinical Validation: Translating AI models from research to practice.​
* Continuous Monitoring: Post-deployment evaluation and model updating.​

## 10: Integration of AI into Clinical Workflow

* Workflow Analysis: Identifying points of integration for AI tools.​
* User Training and Acceptance: Strategies for effective implementation and adoption by clinical staff.​
* Change Management: Overcoming barriers to integrating AI into existing systems.​

## Open Source Software tools

### Image loading and saving:

* [pydicom](https://pydicom.github.io): An open-source Python package specifically designed for reading and writing radiotherapy DICOM files, enabling easy manipulation of medical imaging data
* [pydicer](https://australiancancerdatanetwork.github.io/pydicer/index.html): a tool to ease the process of converting Radiotherapy DICOM data objects into a format typically used for research purposes. In addition to data conversion, functionality is provided to help analyse the data. This includes computing radiomic features, radiotherapy dose metrics and auto-segmentation metrics. 
* [pyradise](https://pyradise.readthedocs.io/en/latest/): is an open-source Python package for building clinically applicable radiotherapy-oriented auto-segmentation solutions. This package addresses two main challenges of auto-segmentation in clinical radiotherapy: data handling and conversion from and to DICOM-RTSS.
* [dicompyler](https://www.dicompyler.com): An extensible open-source radiation therapy research platform that provides tools for working with DICOM-RT data.

### Imaging and Visualization Libraries:

* [ITK-Snap](https://www.itksnap.org/pmwiki/pmwiki.php): A software tool for segmentation of three-dimensional medical images.
* [3D Slicer](https://www.slicer.org) with [SlicerRT](https://slicerrt.github.io) extension: A comprehensive platform for medical image informatics, image processing, and three-dimensional visualization with radiation therapy capabilities.
* [ImageJ](https://imagej.net/ij/): A widely used open-source image processing program designed for scientific multidimensional images.

### Treatment planning systems

* [MatRad](https://aapm.onlinelibrary.wiley.com/doi/10.1002/mp.12251): A MATLAB-based, comprehensive toolkit for 3D intensity-modulated radiation therapy with validated clinical accuracy.
* [OpenTPS](https://www.opentps.org): open-source treatment planning system (TPS) for research in radiation therapy and proton therapy. It was developed in Python with a special focus on simplifying contribution to the core functions to let the user develop their own feature 
* [JulianA.jl](https://arxiv.org/abs/2407.03858): a novel Julia package for radiotherapy, aiming to provide a modular and flexible foundation for the development and efficient implementation of algorithms and workflows for radiotherapy researchers and clinicians.
* [FoCa](https://iopscience.iop.org/article/10.1088/0031-9155/59/23/7341): a modular treatment planning system for proton radiotherapy with research and educational purposes.
* [KiT-RT (C++)](https://github.com/KiT-RT/kitrt_code): targets kinetic equation solutions for therapy.
* Pencil beam algorithms for proton therapy integrated into 3D Slicer environment.

### Quality Assurance Tools:

* [QATrack+](https://qatrackplus.com): An open-source radiotherapy quality assurance management system built with Python, designed for machine quality control (as opposed to patient specific quality control).
* [CERR](https://github.com/cerr/CERR) and [pyCERR](https://github.com/cerr/pyCERR): stands for Computational Environment for Radiological Research. CERR/pyCERR is MATLAB/python based software platform for developing and sharing research results using radiation therapy treatment planning and imaging informatics.

### Integration Components:

* [Eclipse Scripting Application Programming Interface](https://docs.developer.varian.com/articles/index.html): While not open-source itself, this API allows integration with the Eclipse treatment planning system and has been used alongside open-source libraries to develop clinical applications.
* [XiO Python Package](https://www.proquest.com/docview/2576611722?sourcetype=Scholarly%20Journals): An open-source package that adds scripting capability to the Elekta CMS XiO treatment planning system through an external interface, enabling users to script radiotherapy plans.
* [eIMRT](https://aapm.onlinelibrary.wiley.com/doi/10.1120/jacmp.v10i3.2998): is a remote distributed computing tool that provides users with Internet access to three different services: Monte Carlo optimization of treatment plans, CRT & IMRT treatment optimization, and a database of relevant radiation treatments/clinical cases.

## Further reading

[Michener course on AI in Radiation Therapy](https://michener.ca/ce_course/ai-foundations-medical-imaging-radiation-therapy)

[Stanmore course on AI in Radiation Oncology](https://www.stanmoreuk.org/Home/CourseDetail?courseId=22954)

[ESTRO Advanced Imaging in RT course](https://www.estro.org/Courses/2024/Advanced-Imaging-in-Radiotherapy-Current-use%2C-Futu)

[Symposium on Practical AI in Radiation Oncology](https://www.medschool.umaryland.edu/radonc/education/educational-courses--events/symposium-on-practical-ai-in-radiation-oncology/)

[National Cancer Institute workshop on AI in Radiation Oncology](https://pmc.ncbi.nlm.nih.gov/articles/PMC7293478/)