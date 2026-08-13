// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "dropdown-publications",
              title: "Publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/";
              },
            },{id: "dropdown-leadership",
              title: "Leadership",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/leadership/";
              },
            },{id: "dropdown-teaching",
              title: "Teaching",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/teaching/";
              },
            },{id: "post-market-need-for-auto-contouring-solutions",
        
          title: "Market need for Auto-Contouring Solutions",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/autocontour-need/";
          
        },
      },{id: "post-paper-summary-quality-assurance-for-ai-based-applications-in-radiation-therapy",
        
          title: "Paper Summary: Quality Assurance for AI-Based Applications in Radiation Therapy",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/qa-for-ai-in-radiotherapy/";
          
        },
      },{id: "post-paper-summary-deep-learning-in-medical-imaging-and-radiation-therapy",
        
          title: "Paper Summary: Deep learning in medical imaging and radiation therapy",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/deep-learning-in-radiation-therapy/";
          
        },
      },{id: "post-unibe-error",
        
          title: 'UniBE: Error <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.caim.unibe.ch/about_us/people/interviews/amith_kamath/index_eng.html", "_blank");
          
        },
      },{id: "post-paper-summary-which-explanation-should-i-choose-a-function-approximation-perspective-to-characterizing-post-hoc-explanations",
        
          title: "Paper Summary: Which Explanation Should I Choose? A Function Approximation Perspective to Characterizing...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/Which-explanation-should-I-choose/";
          
        },
      },{id: "post-paper-summary-volumetric-memory-network-for-interactive-medical-image-segmentation",
        
          title: "Paper Summary: Volumetric memory network for interactive medical image segmentation",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/Volumetric-memory-networks/";
          
        },
      },{id: "post-paper-summary-calibrating-segmentation-networks-with-margin-based-label-smoothing",
        
          title: "Paper Summary: Calibrating Segmentation Networks with Margin Based Label Smoothing",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/Calibrating-segmentation-networks/";
          
        },
      },{id: "post-paper-summary-diffusion-models-beat-gans-on-image-synthesis",
        
          title: "Paper Summary: Diffusion models beat GANs on Image Synthesis",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/Diffusion-models-beat-GANs/";
          
        },
      },{id: "post-paper-summary-radimagenet-an-open-radiologic-deep-learning-research-dataset-for-effective-transfer-learning",
        
          title: "Paper Summary: RadImageNet: An open radiologic deep learning research dataset for effective transfer...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/RadImageNet-open-radiologic-dataset/";
          
        },
      },{id: "post-paper-summary-interpretability-guided-inductive-bias-for-deep-learning-based-medical-image",
        
          title: "Paper Summary: Interpretability-guided inductive bias for deep learning based medical image",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/Interpretability-guided-inductive-bias/";
          
        },
      },{id: "post-paper-summary-active-learning-by-feature-mixing",
        
          title: "Paper Summary: Active learning by Feature mixing",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/feature-mixing-for-active-learning/";
          
        },
      },{id: "post-paper-summary-aminn-autoencoder-based-multiple-instance-neural-network-improves-outcome-prediction-in-multifocal-liver-metastases",
        
          title: "Paper Summary: AMINN: Autoencoder-Based Multiple Instance Neural Network Improves Outcome Prediction in Multifocal...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/autoencoder-multiple-instance-neural-network/";
          
        },
      },{id: "post-paper-summary-unetformer-a-unified-vision-transformer-model-and-pre-training-framework-for-3d-medical-image-segmentation",
        
          title: "Paper Summary: UNetFormer: A Unified Vision Transformer Model and Pre-Training Framework for 3D...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/unetformer-unified-vision-transformer/";
          
        },
      },{id: "post-paper-summary-on-the-fairness-of-disentangled-representations",
        
          title: "Paper Summary: On the Fairness of Disentangled Representations",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/fairness-representations/";
          
        },
      },{id: "post-paper-summary-robust-and-generalizable-visual-representation-learning-via-random-convolutions",
        
          title: "Paper Summary: Robust and generalizable visual representation learning via random convolutions",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/random-convolutions/";
          
        },
      },{id: "post-paper-summary-label-fusion-and-training-methods-for-reliable-representation-of-inter-rater-uncertainty",
        
          title: "Paper Summary: Label fusion and training methods for reliable representation of inter-rater uncertainty...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/label-fusion-methods/";
          
        },
      },{id: "post-paper-summary-do-explanations-explain-model-knows-best",
        
          title: "Paper Summary: Do Explanations Explain? Model Knows Best",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/do-explanations-explain/";
          
        },
      },{id: "post-paper-summary-learning-debiased-and-disentangled-representations-for-semantic-segmentation",
        
          title: "Paper Summary: Learning Debiased and Disentangled Representations for Semantic Segmentation",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/learning-debiased-disentangled-representation/";
          
        },
      },{id: "post-paper-summary-deep-orthogonal-fusion-multimodal-prognostic-biomarker-discovery-integrating-radiology-pathology-genomic-and-clinical-data",
        
          title: "Paper Summary: Deep Orthogonal Fusion: Multimodal Prognostic Biomarker Discovery Integrating Radiology, Pathology, Genomic,...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/deep-orthogonal-fusion/";
          
        },
      },{id: "post-paper-summary-embracing-the-disharmony-in-medical-imaging-a-simple-and-effective-framework-for-domain-adaptation",
        
          title: "Paper Summary: Embracing the disharmony in medical imaging: A Simple and effective framework...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/embracing-disharmony-domain-adaptation/";
          
        },
      },{id: "post-paper-summary-understanding-and-visualizing-generalization-in-unets",
        
          title: "Paper Summary: Understanding and Visualizing Generalization in UNets",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/understanding-generalization-unet/";
          
        },
      },{id: "post-paper-summary-learnable-test-time-augmentation-for-source-free-medical-image-segmentation-under-domain-shift",
        
          title: "Paper Summary: Learnable Test-Time Augmentation for Source-Free Medical Image Segmentation Under Domain Shift...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/learnable-test-time-augmentation-segmentation/";
          
        },
      },{id: "post-paper-summary-medical-image-segmentation-automatic-quality-control-a-multi-dimensional-approach",
        
          title: "Paper Summary: Medical image segmentation automatic quality control: a multi-dimensional approach",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/automatic-quality-control-multi-dimensional/";
          
        },
      },{id: "post-paper-summary-transformer-interpretability-beyond-attention-visualization",
        
          title: "Paper Summary: Transformer Interpretability beyond Attention Visualization",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/transformer-interpretability-beyond-attention/";
          
        },
      },{id: "post-paper-summary-masked-autoencoders-are-scalable-vision-learners",
        
          title: "Paper Summary: Masked Autoencoders are Scalable Vision Learners",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/masked-autoencoders-are-scalable-vision-learners/";
          
        },
      },{id: "post-paper-summary-realistic-image-normalization-for-multi-domain-segmentation",
        
          title: "Paper Summary: Realistic Image Normalization for Multi-domain Segmentation",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/realistic-image-normalization/";
          
        },
      },{id: "post-paper-summary-patches-are-all-you-need",
        
          title: "Paper Summary: Patches are all you need",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/patches-are-all-you-need/";
          
        },
      },{id: "news-bachelor-s-degree-graduated-with-a-b-tech-in-electrical-amp-amp-electronics-engineering-from-nit-karnataka-surathkal-8-34-10-0-ranked-12th-of-67-in-the-graduating-class-the-institute-placed-8th-among-engineering-colleges-in-india-the-year-i-joined",
          title: 'Bachelor’s Degree: Graduated with a B.Tech in Electrical &amp;amp;amp; Electronics Engineering from NIT...',
          description: "",
          section: "News",},{id: "news-new-role-started-as-a-research-assistant-at-the-center-for-magnetic-resonance-research-university-of-minnesota-working-on-diffusion-mri-reconstruction-and-acquisition-protocol-analysis-with-prof-christophe-lenglet-and-prof-tryphon-georgiou",
          title: 'New Role: Started as a Research Assistant at the Center for Magnetic Resonance...',
          description: "",
          section: "News",},{id: "news-workshop-paper-generalized-constant-solid-angle-odf-and-optimal-acquisition-protocol-for-fiber-orientation-mapping-accepted-at-cdmri-2012-the-computational-diffusion-mri-workshop-at-miccai-2012-in-nice-as-an-oral-presentation-in-the-diffusion-modelling-and-experimental-design-session-read-the-paper",
          title: 'Workshop Paper: “Generalized constant solid angle ODF and optimal acquisition protocol for fiber...',
          description: "",
          section: "News",},{id: "news-master-s-degree-completed-an-ms-in-electrical-amp-amp-computer-engineering-at-the-university-of-minnesota-twin-cities-with-a-3-68-4-0-gpa-on-a-thesis-about-diffusion-mri-fiber-orientation-mapping-at-the-center-for-magnetic-resonance-research-minnesota-ranked-26th-in-the-world-in-engineering-technology-and-computer-sciences-the-year-i-enrolled",
          title: 'Master’s Degree: Completed an MS in Electrical &amp;amp;amp; Computer Engineering at the University...',
          description: "",
          section: "News",},{id: "news-conference-abstract-optimal-acquisition-protocol-for-white-matter-fiber-orientation-mapping-using-generalized-csa-odf-reconstruction-accepted-at-the-21st-ismrm-annual-meeting-in-salt-lake-city-read-the-abstract",
          title: 'Conference Abstract: “Optimal acquisition protocol for white matter fiber orientation mapping using generalized...',
          description: "",
          section: "News",},{id: "news-new-role-started-as-a-software-engineer-on-the-image-processing-and-computer-vision-toolbox-team-at-mathworks-in-natick-ma-shipping-features-including-nifti-file-i-o-and-lane-boundary-detection",
          title: 'New Role: Started as a Software Engineer on the Image Processing and Computer...',
          description: "",
          section: "News",},{id: "news-pre-conference-workshop-delivered-a-workshop-on-deep-learning-at-mit-manipal-as-part-of-the-ieee-discover-2019-pre-conference-tutorials-and-workshops-the-session-covered-foundational-concepts-and-practical-applications-of-deep-learning-for-more-details-visit-ieee-discover-2019-workshops",
          title: 'Pre-Conference Workshop: Delivered a workshop on deep learning at MIT Manipal as part...',
          description: "",
          section: "News",},{id: "news-conference-tutorial-delivered-a-mathworks-hosted-tutorial-at-ieee-tencon-2019-which-was-the-most-attended-tutorial-among-all-those-offered-at-the-conference-for-more-details-visit-ieee-tencon-2019-tutorials",
          title: 'Conference Tutorial: Delivered a MathWorks hosted tutorial at IEEE Tencon 2019, which was...',
          description: "",
          section: "News",},{id: "news-invited-short-talk-delivered-an-invited-short-talk-at-mit-manipal-online-during-the-i-true-webinar-on-ai-in-urology-for-more-details-watch-the-youtube-recording",
          title: 'Invited Short Talk: Delivered an invited short talk at MIT Manipal (online) during...',
          description: "",
          section: "News",},{id: "news-academic-milestone-completed-master-s-degree-in-computer-science-omscs-from-georgia-institute-of-technology-with-3-7-4-0-gpa-got-out-with-distinction-georgia-tech-ranked-8th-in-the-world-for-computer-science-the-year-i-enrolled",
          title: 'Academic Milestone: Completed Master’s degree in Computer Science (OMSCS) from Georgia Institute of...',
          description: "",
          section: "News",},{id: "news-conference-presentation-delivered-a-short-talk-jointly-with-julia-hoerner-at-mathworks-on-brain-tumor-segmentation-with-matlab-at-the-miua-2021-conference-held-virtually-for-more-details-visit-miua-2021",
          title: 'Conference Presentation: Delivered a short talk jointly with Julia Hoerner at MathWorks on...',
          description: "",
          section: "News",},{id: "news-phd-journey-begins-started-doctoral-studies-in-biomedical-engineering-at-the-medical-image-analysis-lab-university-of-bern-under-prof-mauricio-reyes-a-field-in-which-bern-placed-66th-in-the-world-that-year",
          title: 'PhD Journey Begins: Started doctoral studies in Biomedical Engineering at the Medical Image...',
          description: "",
          section: "News",},{id: "news-competition-success-won-the-miccai-hackathon-2022-demonstrating-innovative-approaches-to-medical-image-analysis-challenges-repository-presentation",
          title: 'Competition Success: Won the MICCAI Hackathon 2022, demonstrating innovative approaches to medical image...',
          description: "",
          section: "News",},{id: "news-summer-school-attended-the-university-of-cambridge-s-online-ccaim-ai-and-machine-learning-in-healthcare-summer-school-organized-by-the-cambridge-centre-for-ai-in-medicine-directed-by-prof-mihaela-van-der-schaar-the-five-day-program-covered-topics-including-data-interpretation-clinical-trials-graph-neural-networks-and-synthetic-data",
          title: 'Summer School: Attended the University of Cambridge’s online CCAIM AI and Machine Learning...',
          description: "",
          section: "News",},{id: "news-conference-presentation-presented-deep-dose-predictor-research-at-swiss-society-for-radiobiology-and-medical-physics-ssrmp-advancing-ai-applications-in-radiotherapy-planning-presentation-highlights",
          title: 'Conference Presentation: Presented “Deep Dose Predictor” research at Swiss Society for Radiobiology and...',
          description: "",
          section: "News",},{id: "news-research-recognition-awarded-the-2022-caim-research-award-in-the-translational-category-for-outstanding-contributions-to-medical-ai-research-grateful-for-support-from-be-advanced",
          title: 'Research Recognition: Awarded the 2022 CAIM Research Award in the “Translational” category for...',
          description: "",
          section: "News",},{id: "news-workshop-paper-abstract-accepted-at-medical-imaging-meets-neurips-2022-exploring-context-vs-foreground-background-ratio-trade-offs-in-3d-segmentation-read-more",
          title: 'Workshop Paper: Abstract accepted at Medical Imaging meets NeurIPS 2022 exploring context vs....',
          description: "",
          section: "News",},{id: "news-entrepreneurship-training-attended-innosuisse-s-business-concept-module-2-course-in-bern-building-a-practical-business-toolbox-spanning-business-models-financial-planning-intellectual-property-team-development-and-pitching",
          title: 'Entrepreneurship Training: Attended Innosuisse’s Business Concept (Module 2) course in Bern, building a...',
          description: "",
          section: "News",},{id: "news-event-organization-leading-bias-2023-bern-interpretable-ai-symposium-featuring-distinguished-keynote-speakers-research-posters-and-industry-collaboration-140-attendees-from-5-countries-event-highlights",
          title: 'Event Organization: Leading BIAS 2023 - Bern Interpretable AI Symposium featuring distinguished keynote...',
          description: "",
          section: "News",},{id: "news-research-publication-how-sensitive-are-deep-learning-based-radiotherapy-dose-prediction-models-to-variability-in-organs-at-risk-segmentation-accepted-at-ieee-isbi-2023-in-cartagena-learn-more-i-am-also-delighted-to-attend-the-ieee-embs-sps-summer-school-on-biomedical-imaging-co-organized-with-isbi-2023-in-sunny-cartagena-read-more",
          title: 'Research Publication: “How sensitive are deep learning based radiotherapy dose prediction models to...',
          description: "",
          section: "News",},{id: "news-conference-presentation-presented-dose-prediction-model-sensitivity-research-at-bern-data-science-day-2023-advancing-clinical-ai-validation-methodologies-event-highlights",
          title: 'Conference Presentation: Presented dose prediction model sensitivity research at Bern Data Science Day...',
          description: "",
          section: "News",},{id: "news-speaking-engagement-invited-to-share-young-researchers-tales-at-the-8x8-event-haus-der-universität-organized-by-mvub-event-highlights",
          title: 'Speaking Engagement: Invited to share “Young Researchers Tales” at the 8x8 event, Haus...',
          description: "",
          section: "News",},{id: "news-research-recognition-awarded-2nd-place-best-student-paper-at-ieee-embc-2023-for-astra-atomic-surface-transformations-for-radiotherapy-quality-assurance-award-announcement-astra-atomic-surface-transformations-for-radiotherapy-quality-assurance-was-accepted-for-oral-presentation-at-ieee-embc-2023-in-sydney-learn-more",
          title: 'Research Recognition: Awarded 2nd place Best Student Paper at IEEE EMBC 2023 for...',
          description: "",
          section: "News",},{id: "news-research-publications-two-papers-accepted-at-miccai-2023-vancouver-do-we-really-need-that-skip-connection-early-accept-top-14-and-dose-guidance-for-radiotherapy-oriented-deep-learning-segmentation-read-more",
          title: 'Research Publications: Two papers accepted at MICCAI 2023 (Vancouver) - “Do we really...',
          description: "",
          section: "News",},{id: "news-conference-abstracts-two-abstracts-accepted-at-ieee-isbi-2024-congratulations-to-zahira-mercado-for-outstanding-presentation-as-part-of-her-master-s-thesis-research",
          title: 'Conference Abstracts: Two abstracts accepted at IEEE ISBI 2024! Congratulations to Zahira Mercado...',
          description: "",
          section: "News",},{id: "news-research-publication-our-paper-comparing-the-performance-of-radiation-oncologists-versus-a-deep-learning-dose-predictor-accepted-for-oral-presentation-at-midl-2024-18-acceptance-rate-36-217-submissions-read-more",
          title: 'Research Publication: Our paper “Comparing the Performance of Radiation Oncologists versus a Deep...',
          description: "",
          section: "News",},{id: "news-doctoral-symposium-participated-in-the-midl-2024-doctoral-symposium-at-sorbonne-université-in-paris-a-dedicated-event-for-master-s-and-ph-d-trainees-featuring-sessions-on-science-communication-diversity-in-research-and-networking",
          title: 'Doctoral Symposium: Participated in the MIDL 2024 Doctoral Symposium at Sorbonne Université in...',
          description: "",
          section: "News",},{id: "news-workshop-paper-autodoserank-automated-dosimetry-informed-segmentation-ranking-for-radiotherapy-accepted-at-caption-miccai-workshop-learn-more",
          title: 'Workshop Paper: “AutoDoseRank: Automated Dosimetry-Informed Segmentation Ranking for Radiotherapy” accepted at CaPTion@MICCAI Workshop....',
          description: "",
          section: "News",},{id: "news-international-recognition-research-presentation-selected-as-one-of-100-lab-pitches-from-researchers-across-60-countries-at-the-falling-walls-science-summit-2024-commemorating-the-35th-anniversary-of-the-fall-of-the-berlin-wall",
          title: 'International Recognition: Research presentation selected as one of 100 “lab” pitches from researchers...',
          description: "",
          section: "News",},{id: "news-student-achievement-zahira-mercado-my-master-s-student-advisee-won-the-caim-research-award-in-the-translation-category-for-her-outstanding-contributions-to-contouraid-congratulations-zahira",
          title: 'Student Achievement: Zahira Mercado (my Master’s student advisee) won the CAIM Research Award...',
          description: "",
          section: "News",},{id: "news-event-organization-successfully-organized-bart-2025-the-inaugural-bern-ai-in-radiotherapy-symposium-featured-3-keynote-speakers-2-industry-sponsors-9-research-posters-and-100-international-attendees",
          title: 'Event Organization: Successfully organized BART 2025 - the inaugural Bern AI in RadioTherapy...',
          description: "",
          section: "News",},{id: "news-educational-content-new-video-tutorial-on-integrating-monai-and-matlab-published-on-the-mathworks-youtube-channel-demonstrating-cross-platform-deep-learning-workflows-full-tutorial",
          title: 'Educational Content: New video tutorial on integrating MONAI and MATLAB published on the...',
          description: "",
          section: "News",},{id: "news-innovation-fellowship-selected-as-one-of-five-university-of-bern-venture-fellows-for-2025-26-supporting-entrepreneurial-initiatives-in-technology-transfer-and-innovation",
          title: 'Innovation Fellowship: Selected as one of five University of Bern Venture Fellows for...',
          description: "",
          section: "News",},{id: "news-journal-publication-predicting-the-impact-of-target-volume-contouring-variations-on-the-organ-at-risk-dose-results-of-a-qualitative-survey-accepted-in-radiotherapy-and-oncology-green-journal-read-more",
          title: 'Journal Publication: “Predicting the impact of target volume contouring variations on the organ...',
          description: "",
          section: "News",},{id: "news-journal-publication-the-impact-of-u-net-architecture-choices-and-skip-connections-on-the-robustness-of-segmentation-across-texture-variations-accepted-in-computers-in-biology-and-medicine-read-more",
          title: 'Journal Publication: “The impact of U-Net architecture choices and skip connections on the...',
          description: "",
          section: "News",},{id: "news-invited-talk-i-was-at-sasro-2025-the-annual-scientific-association-of-swiss-radiation-oncology-at-davos-to-talk-about-fast-and-reliable-dosimetric-contour-qa-which-was-a-15-minute-version-of-my-phd-thesis-you-can-read-more-about-my-phd-research",
          title: 'Invited Talk: I was at SASRO 2025, the Annual Scientific Association of Swiss...',
          description: "",
          section: "News",},{id: "news-event-organization-i-am-part-of-the-program-chairs-for-miart-2026-the-first-version-of-a-satellite-workshop-at-miccai-2026-focused-on-ai-and-radiation-therapy-it-features-3-keynote-speakers-and-is-a-great-upgrade-over-bart-25",
          title: 'Event Organization: I am part of the program chairs for MIART 2026, the...',
          description: "",
          section: "News",},{id: "news-innovation-fellowship-i-m-grateful-as-one-of-eighteen-bridge-proof-of-concept-fellows-in-the-37th-call-supporting-entrepreneurial-initiatives-in-technology-transfer-and-innovation",
          title: 'Innovation Fellowship: I’m grateful as one of eighteen Bridge Proof of Concept Fellows...',
          description: "",
          section: "News",},{id: "news-invited-talk-i-was-invited-to-present-at-the-data-science-colloquium-at-the-university-of-utrecht-about-my-research-and-experience-in-data-science-medical-imaging-and-generally-research-in-this-space-thanks-wilson-and-angelos-for-the-invite",
          title: 'Invited Talk: I was invited to present at the Data Science colloquium at...',
          description: "",
          section: "News",},{id: "news-thesis-recognition-my-phd-thesis-fast-and-reliable-ai-based-dosimetric-contour-quality-assurance-for-radiotherapy-was-selected-as-a-finalist-for-the-gcb-best-thesis-award-2025-my-phd-degree-was-also-awarded-summa-cum-laude-the-highest-of-the-latin-honors",
          title: 'Thesis Recognition: My PhD thesis, “Fast and Reliable AI-based Dosimetric Contour Quality Assurance...',
          description: "",
          section: "News",},{id: "projects-context-versus-foreground-ratio",
          title: 'Context versus foreground ratio',
          description: "How 3D segmentation networks trade spatial context against class balance — Medical Imaging meets NeurIPS 2022",
          section: "Projects",handler: () => {
              window.location.href = "/projects/22-MedNeurIPS/";
            },},{id: "projects-23-embc",
          title: '23 Embc',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/23-EMBC/";
            },},{id: "projects-how-sensitive-is-a-dose-predictor-to-the-contours-you-feed-it",
          title: 'How sensitive is a dose predictor to the contours you feed it?',
          description: "Dose prediction sensitivity to organ-at-risk segmentation variability — ISBI 2023 and Cancers 2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/23-ISBI/";
            },},{id: "projects-24-miccaiw",
          title: '24 Miccaiw',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/24-MICCAIw/";
            },},{id: "projects-24-midl",
          title: '24 Midl',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/24-MIDL/";
            },},{id: "projects-theme-correction",
          title: 'Theme Correction',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Theme-Correction/";
            },},{id: "projects-theme-dose-proposal",
          title: 'Theme Dose Proposal',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Theme-Dose-Proposal/";
            },},{id: "projects-theme-robustness",
          title: 'Theme Robustness',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Theme-Robustness/";
            },},{id: "projects-interactive-image-registration-explorer",
          title: 'Interactive Image Registration Explorer',
          description: "Educational tool for understanding affine transformations through real-time image manipulation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/teach-2022-interactive-image-registration/";
            },},{id: "projects-interactive-segmentation-quality-evaluator",
          title: 'Interactive Segmentation Quality Evaluator',
          description: "Educational tool for understanding segmentation metrics through hands-on boundary drawing and evaluation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/teach-2022-interactive-segmentation-evaluation/";
            },},{id: "projects-interactive-template-matching-explorer",
          title: 'Interactive Template Matching Explorer',
          description: "Educational tool demonstrating template matching algorithms through visual &quot;Where&#39;s Waldo&quot; gameplay",
          section: "Projects",handler: () => {
              window.location.href = "/projects/teach-2023-interactive-template-matching/";
            },},{id: "projects-interactive-monty-hall-problem-explorer",
          title: 'Interactive Monty Hall Problem Explorer',
          description: "Educational game demonstrating conditional probability through interactive MATLAB app",
          section: "Projects",handler: () => {
              window.location.href = "/projects/teach-2023-understanding-monty-hall/";
            },},{id: "projects-monai-with-matlab-integration-guide",
          title: 'MONAI with MATLAB Integration Guide',
          description: "Cross-platform workflow enabling MONAI deep learning models within MATLAB environments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/teach-2024-monai-with-matlab/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6D%69%74%68%6A%6B%61%6D%61%74%68@%6F%75%74%6C%6F%6F%6B.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/amithjkamath", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/amithjkamath", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-7243-8883", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=clej42kAAAAJ", "_blank");
        },
      },{
        id: 'social-semanticscholar',
        title: 'Semantic Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/9083011", "_blank");
        },
      },{
        id: 'social-stackoverflow',
        title: 'Stackoverflow',
        section: 'Socials',
        handler: () => {
          window.open("https://stackoverflow.com/users/1704995/akamath", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/amithjkamath", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@amithjkamath", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
