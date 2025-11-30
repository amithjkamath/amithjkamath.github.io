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
  },{id: "nav-updates",
          title: "Updates",
          description: "Latest research publications, awards, conference organization, and professional milestones.",
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
        },{id: "dropdown-projects",
              title: "Projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/";
              },
            },{id: "dropdown-publications",
              title: "Publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/";
              },
            },{id: "dropdown-academic-service",
              title: "Academic Service",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/service/";
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
      },{id: "post-about-us-quot-i-would-like-to-convert-my-research-into-a-useful-tool-for-clinicians-quot-center-for-artificial-intelligence-in-medicine-caim",
        
          title: 'About Us: &quot;I would like to convert my research into a useful tool... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
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
      },{id: "news-pre-conference-workshop-delivered-a-workshop-on-deep-learning-at-mit-manipal-as-part-of-the-ieee-discover-2019-pre-conference-tutorials-and-workshops-the-session-covered-foundational-concepts-and-practical-applications-of-deep-learning-for-more-details-visit-ieee-discover-2019-workshops",
          title: 'Pre-Conference Workshop: Delivered a workshop on deep learning at MIT Manipal as part...',
          description: "",
          section: "News",},{id: "news-conference-tutorial-delivered-a-mathworks-hosted-tutorial-at-ieee-tencon-2019-which-was-the-most-attended-tutorial-among-all-those-offered-at-the-conference-for-more-details-visit-ieee-tencon-2019-tutorials",
          title: 'Conference Tutorial: Delivered a MathWorks hosted tutorial at IEEE Tencon 2019, which was...',
          description: "",
          section: "News",},{id: "news-invited-short-talk-delivered-an-invited-short-talk-at-mit-manipal-online-during-the-i-true-webinar-on-ai-in-urology-for-more-details-watch-the-youtube-recording",
          title: 'Invited Short Talk: Delivered an invited short talk at MIT Manipal (online) during...',
          description: "",
          section: "News",},{id: "news-academic-milestone-completed-master-s-degree-in-computer-science-omscs-from-georgia-institute-of-technology-with-3-7-4-0-gpa-got-out-with-distinction",
          title: 'Academic Milestone: Completed Master’s degree in Computer Science (OMSCS) from Georgia Institute of...',
          description: "",
          section: "News",},{id: "news-conference-presentation-delivered-a-short-talk-jointly-with-julia-hoerner-at-mathworks-on-brain-tumor-segmentation-with-matlab-at-the-miua-2021-conference-held-virtually-for-more-details-visit-miua-2021",
          title: 'Conference Presentation: Delivered a short talk jointly with Julia Hoerner at MathWorks on...',
          description: "",
          section: "News",},{id: "news-phd-journey-begins-started-doctoral-studies-in-biomedical-engineering-at-the-medical-image-analysis-lab-university-of-bern-under-prof-mauricio-reyes",
          title: 'PhD Journey Begins: Started doctoral studies in Biomedical Engineering at the Medical Image...',
          description: "",
          section: "News",},{id: "news-conference-presentation-poster-presentation-at-bern-data-science-day-2022-view-poster",
          title: 'Conference Presentation: Poster presentation at Bern Data Science Day 2022. View poster.',
          description: "",
          section: "News",},{id: "news-competition-success-won-the-miccai-hackathon-2022-demonstrating-innovative-approaches-to-medical-image-analysis-challenges-repository-presentation",
          title: 'Competition Success: Won the MICCAI Hackathon 2022, demonstrating innovative approaches to medical image...',
          description: "",
          section: "News",},{id: "news-public-engagement-demonstrated-ai-games-ki-spiele-at-nacht-der-forschung-university-of-bern-s-night-of-research-public-outreach-event-activity-details",
          title: 'Public Engagement: Demonstrated AI games (KI-Spiele) at Nacht der Forschung - University of...',
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
          section: "News",},{id: "news-research-presentation-our-work-on-comparing-the-performance-of-radiation-oncologists-versus-a-deep-learning-dose-predictor-was-presented-at-the-uni-bern-gcb-symposium-2024-in-the-full-talk-track-read-more",
          title: 'Research Presentation: Our work on “Comparing the Performance of Radiation Oncologists versus a...',
          description: "",
          section: "News",},{id: "news-research-publication-our-paper-comparing-the-performance-of-radiation-oncologists-versus-a-deep-learning-dose-predictor-accepted-for-oral-presentation-at-midl-2024-18-acceptance-rate-36-217-submissions-read-more",
          title: 'Research Publication: Our paper “Comparing the Performance of Radiation Oncologists versus a Deep...',
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
          section: "News",},{id: "news-conference-success-successfully-organized-bart-2025-the-inaugural-bern-ai-in-radiotherapy-symposium-featured-3-keynote-speakers-2-industry-sponsors-9-research-posters-and-100-international-attendees",
          title: 'Conference Success: Successfully organized BART 2025 - the inaugural Bern AI in RadioTherapy...',
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
          section: "News",},{id: "news-invited-talk-i-was-at-sasro-2025-the-annual-scientific-association-of-swiss-radiation-oncology-at-davos-to-talk-about-fast-and-reliable-dosimetric-contour-qa-which-was-a-15-minute-version-of-my-phd-thesis",
          title: 'Invited Talk: I was at SASRO 2025, the Annual Scientific Association of Swiss...',
          description: "",
          section: "News",},{id: "projects-context-versus-foreground-to-background-ratio-trade-off",
          title: 'Context versus Foreground-to-Background Ratio Trade-off',
          description: "Analyzing 3D segmentation network behavior across context and class imbalance dimensions",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2022-medneurips-contextvsfbr-tradeoff/";
            },},{id: "projects-astra-atomic-surface-transformations-for-radiotherapy-qa",
          title: 'ASTRA - Atomic Surface Transformations for Radiotherapy QA',
          description: "Deep learning-based dose-aware sensitivity mapping for segmentation quality assurance",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2023-embc-astra/";
            },},{id: "projects-sensitivity-of-deep-learning-dose-prediction-to-contour-variability",
          title: 'Sensitivity of Deep Learning Dose Prediction to Contour Variability',
          description: "Evaluating robustness and sensitivity of dose prediction models for quality assurance in radiotherapy",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2023-isbi-deepdosesens/";
            },},{id: "projects-do-we-really-need-that-skip-connection",
          title: 'Do We Really Need That Skip Connection?',
          description: "Understanding the interplay between skip connections and task complexity in medical image segmentation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2023-miccai-skip-connections/";
            },},{id: "projects-autodoserank-dosimetry-informed-segmentation-ranking",
          title: 'AutoDoseRank - Dosimetry-informed Segmentation Ranking',
          description: "Automated ranking system for radiotherapy segmentation candidates using clinical dose impact",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2024-miccaiw-autodoserank/";
            },},{id: "projects-radiation-oncologists-vs-deep-learning-dose-prediction",
          title: 'Radiation Oncologists vs Deep Learning Dose Prediction',
          description: "Comparative study of expert clinicians and AI models for dosimetric impact assessment in radiotherapy",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2024-midl-radonc-vs-dldp/";
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
            },},{id: "projects-clinician-ai-performance-comparison",
          title: 'Clinician-AI Performance Comparison',
          description: "Evaluating how deep learning models compare to human experts in predicting clinical impact of segmentation variations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/thesis-contour-correction-qualitative-analysis/";
            },},{id: "projects-accelerated-dose-prediction-for-radiotherapy",
          title: 'Accelerated Dose Prediction for Radiotherapy',
          description: "Machine learning models that predict dosimetric outcomes to enable rapid quality assessment in treatment planning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/thesis-dose-prediction-for-contour-evaluation/";
            },},{id: "projects-segmentation-model-robustness",
          title: 'Segmentation Model Robustness',
          description: "Understanding how architectural choices affect model reliability across diverse clinical conditions and distribution shifts.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/thesis-robustness-of-image-segmentation-models/";
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
