---
layout: page
title: Radiation Oncology for Developers and Researchers
description: An overview of Radiation Oncology for the AI practitioner
img: assets/img/3.jpg
importance: 1
category: others
related_publications: false
---

The not-so-random initial state of this text is courtesy [Ai2 Scholar QA](https://scholarqa.allen.ai/), and it has been reasonably cross-checked and improved by a human. This is a WIP (Work-In-Progress): this message will be removed once sufficient progress has been made.

-------------

## Introduction to Radiation Oncology

Radiation oncology is an important component of cancer treatment, with more than half of all cancer patients undergoing radiotherapy during the course of their illness [(Belanger et al., 2019)](https://iopscience.iop.org/article/10.1088/1361-6560/ab1817)[(Delaney et al., 2005)](https://acsjournals.onlinelibrary.wiley.com/doi/10.1002/cncr.21324). Among medical specialties, it is uniquely technology-intensive and computer-dependent, making it particularly well-suited for computational approaches and data science methods [(Vogelius et al., 2020)](https://febs.onlinelibrary.wiley.com/doi/10.1002/1878-0261.12685).

Radiotherapy (RT) employs high-energy radiation, such as photons, electrons, or protons, to target and destroy cancer cells by damaging their DNA, thus preventing them from growing and dividing [(Gao et al., 2024)](https://arxiv.org/abs/2406.01853). While the fundamental goal of radiation therapy can be stated simply as "irradiating the tumor while minimizing dose to healthy tissue," achieving this goal requires numerous complex calculations and computational methods [(Barragan-Montero et al., 2022)](https://iopscience.iop.org/article/10.1088/1361-6560/ac678a/pdf).

Radiation therapy can be delivered through different modalities, with External Beam Radiation Therapy (EBRT) and internal radiation therapy (brachytherapy) being the primary approaches [(Belanger et al., 2019)](https://iopscience.iop.org/article/10.1088/1361-6560/ab1817). Within external beam treatments, sophisticated delivery techniques such as Intensity-Modulated Radiation Therapy (IMRT) and Volumetric Modulated Arc Therapy (VMAT) allow for precise dose delivery through optimized beam angles and intensities [(Gao et al., 2024).](https://arxiv.org/abs/2406.01853)

The radiotherapy planning process involves defining treatment targets like the Planning Target Volume (PTV), which encompasses the tumor and surrounding margins to account for positioning uncertainties [(Gao et al., 2024)](https://arxiv.org/abs/2406.01853). This planning process represents a mathematical optimization problem that must balance the conflicting objectives of delivering high doses to tumors while minimizing exposure to healthy organs [(Belanger et al., 2019)](https://iopscience.iop.org/article/10.1088/1361-6560/ab1817).

While significant advances have been made in the physical aspects of treatment planning, such as improved dosimetry and dose distribution, further improvements in radiotherapy outcomes to enable more personalized treatment approaches will require deeper understanding of fundamental radiobiological mechanisms through computational modeling [(Dionysiou et al., 2008)](https://www.semanticscholar.org/paper/Critical-Parameters-Determining-Standard-Treatment-Dionysiou-Stamatakos/cb2fe240fc974d38e17c411b219004a331f65c6b). 

A [glossary](../_pages/glossary.md) of terms has been compiled to help demystify the acronyms and keywords in this field.

## AI In radiation oncology

Artificial Intelligence (AI) and Machine Learning (ML) have emerged as transformative technologies in radiation oncology, offering solutions to many of the field's computational challenges and clinical workflows. At its foundation, AI encompasses computer systems capable of performing tasks at a level comparable to human intelligence, with applications ranging from image analysis to treatment optimization [(Thomas et al., 2020)](https://pubmed.ncbi.nlm.nih.gov/32305726/). Radiation oncology has historically been at the forefront of adopting therapeutic technologies, positioning the field to be revolutionized by advances in artificial intelligence (AI), particularly machine learning and deep learning [(Kiser et al., 2019)](https://jmai.amegroups.org/article/view/4996/html). The radiotherapy workflow is inherently dependent on information technologies and computational methods, making it a natural domain for AI integration. From image reconstruction and analysis to locate tumors and organs, to plan optimization for determining machine parameters that deliver the desired dose, computational algorithms form the backbone of modern radiotherapy treatments [(Barragan-Montero et al., 2022)](https://iopscience.iop.org/article/10.1088/1361-6560/ac678a/pdf). As AI continues to evolve, its applications in radiation oncology will expand, offering radiation oncologists and medical physicists powerful tools to enhance patient care. Understanding the intersection of AI with radiation therapy positions practitioners to better harness these technologies for improved outcomes [(Huang et al., 2024)](https://pubmed.ncbi.nlm.nih.gov/39105746/).

The clinical workflow of radiation therapy encompasses several steps: consultation, imaging simulation, contouring, treatment planning, quality assurance, treatment delivery, and follow-up assessment [(Liu et al., 2023)](https://www.sciencedirect.com/science/article/pii/S2667005423000479). Use-cases for AI-based tooling can be found across this entire spectrum, especially in image segmentation, treatment planning, quality assurance, and outcome prediction [(Barragan-Montero et al., 2022)](https://iopscience.iop.org/article/10.1088/1361-6560/ac678a/pdf). These tools are reshaping traditional paradigms in radiation oncology and medical physics by automating labor-intensive tasks while maintaining or even improving quality standards [(Wang et al., 2019)](https://journals.sagepub.com/doi/pdf/10.1177/1533033819873922).

AI applications in radiation oncology can be broadly categorized into two key areas. First, in the practical aspects of radiation planning and delivery, where image analysis algorithms can automate tumor and normal tissue segmentation, and ML models can develop treatment plans based on prior cases. Second, these systems can provide quality assurance and remote review services for treatment plans [(Thomas et al., 2020)](https://pubmed.ncbi.nlm.nih.gov/32305726/). Deep learning approaches have demonstrated particular promise for contouring organs at risk (OARs) in head and neck cancer treatment planning, achieving high accuracy while reducing clinical workload [(Lastrucci et al., 2024)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11083654/) [(Liu et al., 2023)](https://biomedical-engineering-online.biomedcentral.com/articles/10.1186/s12938-023-01159-y).

Treatment planning, in particular, has become increasingly sophisticated but also more labor intensive, often requiring hours or days of planner effort to optimize an individual case [(Wang et al., 2019)](https://journals.sagepub.com/doi/pdf/10.1177/1533033819873922). AI algorithms can automate and improve this process, focusing on automated planning and optimizing dosimetric trade-offs, which positively impacts both planning efficiency and consistency in plan quality [(Jones et al., 2023)](https://onlinelibrary.wiley.com/doi/pdfdirect/10.1002/jmrs.729).

AI techniques are especially promising for online treatment planning and adaptive radiotherapy [(Boon et al., 2018)](https://www.mdpi.com/2305-6320/5/4/131). They can provide fast reconstruction of CT or MR images, generate CT-like images from MRI for dose calculations, and enable autocontouring of organs at risk and tumors [(Fiorino et al., 2020)](https://febs.onlinelibrary.wiley.com/doi/pdfdirect/10.1002/1878-0261.12659). Deep learning methods, particularly convolutional neural networks, have shown superior performance in these applications [(Sahiner et al., 2018)](https://aapm.onlinelibrary.wiley.com/doi/pdfdirect/10.1002/mp.13264).

Beyond these technical applications, AI has the potential to standardize and improve clinical practice by mitigating variability and suboptimality related to human factors [(Wang et al., 2020)](https://www.frontiersin.org/articles/10.3389/fonc.2020.580919/pdf). It can also facilitate knowledge transfer from more experienced to less experienced centers, helping disseminate expertise in planning new or emerging treatments and supporting radiation oncology practice in developing countries [(Barragan-Montero et al., 2022)](https://iopscience.iop.org/article/10.1088/1361-6560/ac678a/pdf).

The integration of AI in radiation oncology extends beyond automating existing processes. It enables the analysis of multisource data that integrate variables from time-dependent sources, such as sequential quantitative imaging or genetic biomarkers. This capability could dramatically change radiotherapy approaches and play a central role in developing personalized, precision medicine [(Kazmierska et al., 2020)](https://www.thegreenjournal.com/article/S0167-8140(20)30829-X/pdf). 

The vision for AI in radiation oncology extends beyond targeted applications toward fully integrated data management systems with continuous feedback loops between patient outcomes and model inputs. This integration aims to improve clinical decision-making, enable accurate prediction of treatment outcomes and quality of life, and support efficient treatment planning and delivery [(Field et al., 2021)](https://pubmed.ncbi.nlm.nih.gov/34307915/). Recent innovations include foundation models like RO-LMM, which demonstrate proficiency across multiple tasks in the radiation oncology workflow, including clinical report summarization, treatment plan suggestion, and 3D target volume segmentation [(Kim et al., 2023)](https://arxiv.org/abs/2311.15876). The Radiation Oncology NLP Database (ROND) is the first dedicated NLP dataset for the specialty, which has historically received limited attention from the NLP community [(Liu et al., 2024)](https://arxiv.org/abs/2401.10995). As NLP technology matures, its integration into clinical settings can focus on high-priority tasks and contribute to assembling clinical corpora with appropriate guidelines and performance metrics [(Lin et al., 2024)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10874185/). 

Despite these advances, it's important to recognize that AI currently excels at replicating, automating, and standardizing human behavior on manual tasks, while conceptual clinical challenges related to definition, evaluation, and judgment remain in the realm of human intelligence [(Jarrett et al., 2019)](https://academic.oup.com/bjr/article/92/1100/20190001/7449195?login=true). Significant challenges therefore remain in implementing AI solutions in radiation oncology. These include the complexity of patient-specific disease characteristics, interplay with systemic therapies, inconsistent data recording methods, and limitations in treatment outcome reporting [(Field et al., 2021)](https://pubmed.ncbi.nlm.nih.gov/34307915/). Studies often lack information about the confidence levels associated with AI predictions and rarely assess how these technologies impact clinical outcomes [(Lastrucci et al., 2024)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11083654/)[(Franzese et al., 2023)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10301548/). The full potential of AI in radiation oncology and medical physics will require addressing challenges related to data privacy, bias, and the continued need for human expertise [(Fionda et al., 2024)](https://pubmed.ncbi.nlm.nih.gov/39381628/)[(Alowais et al., 2023)](https://bmcmededuc.biomedcentral.com/articles/10.1186/s12909-023-04698-z).


The successful integration of AI into radiation oncology practice will require interdisciplinary collaboration between radiation oncologists and computer scientists. Such partnerships are essential for aligning AI technologies with clinical needs, establishing acceptable performance metrics, and ensuring that developments address meaningful clinical problems [(Lin et al., 2024)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10874185/)[(Lastrucci et al., 2024)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11083654/). As these collaborative efforts progress, they have the potential to automate significant portions of the radiotherapy workflow, transforming this traditionally labor-intensive specialty.

## Open Source Software tools

### Python Packages for Medical Physics:

* [pydicom](https://pydicom.github.io): An open-source Python package specifically designed for reading and writing radiotherapy DICOM files, enabling easy manipulation of medical imaging data
* [dicompyler](https://www.dicompyler.com): An extensible open-source radiation therapy research platform that provides tools for working with DICOM-RT data.

### Imaging and Visualization Libraries:

* [ITK-Snap](https://www.itksnap.org/pmwiki/pmwiki.php): A software tool for segmentation of three-dimensional medical images.
* [3D Slicer](https://www.slicer.org) with [SlicerRT](https://slicerrt.github.io) extension: A comprehensive platform for medical image informatics, image processing, and three-dimensional visualization with radiation therapy capabilities.
* [ImageJ](https://imagej.net/ij/): A widely used open-source image processing program designed for scientific multidimensional images.

Quality Assurance Tools:

* [QATrack+](https://qatrackplus.com): An open-source radiotherapy quality assurance management system built with Python, designed for machine quality control (as opposed to patient specific quality control).

Integration Components:

* [Eclipse Scripting Application Programming Interface](https://docs.developer.varian.com/articles/index.html): While not open-source itself, this API allows integration with the Eclipse treatment planning system and has been used alongside open-source libraries to develop clinical applications.
* [XiO Python Package](https://www.proquest.com/docview/2576611722?sourcetype=Scholarly%20Journals): An open-source package that adds scripting capability to the Elekta CMS XiO treatment planning system through an external interface, enabling users to script radiotherapy plans.
* CERR: 
* MatRAD: