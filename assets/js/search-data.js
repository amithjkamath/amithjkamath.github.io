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
  },{id: "nav-projects",
          title: "Projects",
          description: "An ever-work-in-progress list of things that are documentation-worthy.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-notes",
          title: "Notes",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum Vitae and other details.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-publications",
              title: "Publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/";
              },
            },{id: "dropdown-teaching",
              title: "Teaching",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/teaching/";
              },
            },{id: "dropdown-glossary",
              title: "Glossary",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/glossary/";
              },
            },{id: "post-tairo-ai-for-treatment-planning",
        
          title: "TaiRO: AI for Treatment Planning",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/07-TaiRO-Treatment-Planning/";
          
        },
      },{id: "post-tairo-ai-for-contouring",
        
          title: "TaiRO: AI for Contouring",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/04-TaiRO-Contouring/";
          
        },
      },{id: "post-tairo-medical-imaging-in-radiation-oncology",
        
          title: "TaiRO: Medical Imaging in Radiation Oncology",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/03-TaiRO-Imaging/";
          
        },
      },{id: "post-tairo-fundamentals-of-deep-learning",
        
          title: "TaiRO: Fundamentals of Deep Learning",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/02-TaiRO-Fundamentals/";
          
        },
      },{id: "post-tairo-introduction",
        
          title: "TaiRO: Introduction",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/01-TaiRO-Intro/";
          
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
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-got-out-of-omscs-with-3-7-4-0",
          title: 'Got out of OMSCS with 3.7/4.0!',
          description: "",
          section: "News",},{id: "news-sparkles-back-to-school-this-time-in-biomedical-engineering-at-uni-bern",
          title: ':sparkles: Back to school - this time in Biomedical Engineering at Uni. Bern....',
          description: "",
          section: "News",},{id: "news-at-the-bern-data-science-day-see-here-for-our-poster",
          title: 'At the Bern Data Science Day. See here for our poster.',
          description: "",
          section: "News",},{id: "news-won-attend-the-miccai-hackathon-2022-see-repo-for-contributions-and-video-for-a-presentation",
          title: 'Won Attend the MICCAI Hackathon 2022! See repo for contributions, and video for...',
          description: "",
          section: "News",},{id: "news-demonstrated-ki-spiele-at-the-nacht-der-forschung-see-here-for-more",
          title: 'Demonstrated KI-Spiele at the Nacht der Forschung. See here for more.',
          description: "",
          section: "News",},{id: "news-presented-a-poster-on-our-deep-dose-predictor-at-the-ssrmp-see-here-for-more",
          title: 'Presented a poster on our “Deep Dose Predictor” at the SSRMP. See here...',
          description: "",
          section: "News",},{id: "news-mega-our-research-wins-the-2022-caim-research-award-in-the-translational-category-many-thanks-to-be-advanced",
          title: ':mega: Our research wins the 2022 CAIM Research Award in the “Translational” category....',
          description: "",
          section: "News",},{id: "news-scroll-accepted-abstract-at-medneurips-2022-read-more-here",
          title: ':scroll: Accepted abstract at MedNeurIPS 2022. Read more here.',
          description: "",
          section: "News",},{id: "news-mega-we-are-hosting-bias-2023-bern-interpretable-ai-symposium-with-a-stellar-lineup-of-keynotes-and-engaging-posters-industry-participation-see-here-for-more",
          title: ':mega: We are hosting BIAS 2023 - Bern Interpretable AI Symposium with a...',
          description: "",
          section: "News",},{id: "news-mega-pleased-to-attend-the-ieee-embs-sps-summer-school-on-biomedical-imaging-co-organized-with-isbi-2023-see-here-for-more",
          title: ':mega: Pleased to attend the IEEE EMBS-SPS Summer School on Biomedical Imaging co-organized...',
          description: "",
          section: "News",},{id: "news-scroll-our-paper-titled-how-sensitive-are-deep-learning-based-radiotherapy-dose-prediction-models-to-variability-in-organs-at-risk-segmentation-is-accepted-at-isbi-2023-in-cartagena-read-more-here",
          title: ':scroll: Our paper titled “How sensitive are deep learning based radiotherapy dose prediction...',
          description: "",
          section: "News",},{id: "news-mega-at-the-bern-data-science-day-presenting-again-our-work-on-dose-prediction-model-sensitivity-see-here-for-more",
          title: ':mega: At the Bern Data Science Day, presenting again our work on dose...',
          description: "",
          section: "News",},{id: "news-mega-delighted-to-be-invited-to-share-my-young-researchers-tales-story-in-the-8x8-event-hosted-at-haus-der-universität-organized-by-the-mvub-see-here-for-more",
          title: ':mega: Delighted to be invited to share my “Young Researchers Tales” story in...',
          description: "",
          section: "News",},{id: "news-scroll-our-paper-titled-astra-atomic-surface-transformations-for-radiotherapy-quality-assurance-is-accepted-as-an-oral-presentation-at-embc-2023-in-sydney-read-more-here",
          title: ':scroll: Our paper titled “ASTRA: Atomic Surface Transformations for Radiotherapy quality Assurance” is...',
          description: "",
          section: "News",},{id: "news-mega-elated-to-win-the-2nd-place-best-student-paper-award-at-embc-2023",
          title: ':mega: Elated to win the 2nd place - best student paper award! at...',
          description: "",
          section: "News",},{id: "news-scroll-our-papers-titled-do-we-really-need-that-skip-connection-understanding-its-interplay-with-task-complexity-and-dose-guidance-for-radiotherapy-oriented-deep-learning-segmentation-are-both-early-top-14-accepted-at-miccai-2023-in-vancouver-read-more-here",
          title: ':scroll: Our papers titled “Do we really need that skip connection? Understanding its...',
          description: "",
          section: "News",},{id: "news-scroll-two-abstracts-accepted-at-isbi-2024-congratulations-to-zahira-mercado-for-presenting-this-as-part-of-her-master-thesis",
          title: ':scroll: Two abstracts accepted at ISBI 2024! Congratulations to Zahira Mercado for presenting...',
          description: "",
          section: "News",},{id: "news-scroll-our-paper-comparing-the-performance-of-radiation-oncologists-versus-a-deep-learning-dose-predictor-is-accepted-as-an-oral-presentation-at-midl-2024-18-acceptance-for-oral-36-217-read-more-here",
          title: ':scroll: Our paper “Comparing the Performance of Radiation Oncologists versus a Deep Learning...',
          description: "",
          section: "News",},{id: "news-scroll-our-paper-autodoserank-automated-dosimetry-informed-segmentation-ranking-for-radiotherapy-is-accepted-at-the-caption-miccai-workshop",
          title: ':scroll: Our paper “AutoDoseRank: Automated Dosimetry-Informed Segmentation Ranking for Radiotherapy” is accepted at...',
          description: "",
          section: "News",},{id: "news-mega-our-research-is-one-of-100-lab-pitches-from-researchers-all-over-the-world-60-countries-at-the-35th-anniversary-of-the-fall-of-the-berlin-wall-at-the-falling-walls-science-summit-2024",
          title: ':mega: Our research is one of 100 “lab” pitches from researchers all over...',
          description: "",
          section: "News",},{id: "news-mega-zahira-master-student-advisee-won-the-caim-research-award-in-the-translation-category-for-her-contributions-to-contouraid-way-to-go-zahira",
          title: ':mega: Zahira (master student advisee) won the CAIM Research Award in the Translation...',
          description: "",
          section: "News",},{id: "news-mega-we-organized-bart-the-first-bern-ai-in-radiotherapy-symposium-on-the-14th-of-march-2025-we-had-three-keynote-speakers-two-sponsors-nine-posters-and-100-registrations",
          title: ':mega: We organized BART - the first Bern AI in RadioTherapy symposium on...',
          description: "",
          section: "News",},{id: "news-mega-a-short-video-on-using-monai-and-matlab-together-is-now-live-on-the-mathworks-youtube-channel-read-more-here",
          title: ':mega: A short video on using MONAI and MATLAB together is now live...',
          description: "",
          section: "News",},{id: "news-mega-grateful-to-be-named-one-of-five-university-of-bern-venture-fellows-for-2025-26",
          title: ':mega: Grateful to be named one of five University of Bern Venture Fellows...',
          description: "",
          section: "News",},{id: "projects-image-registration",
          title: 'Image Registration',
          description: "an interactive overview of affine transformations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2022-fa-interactive-image-registration/";
            },},{id: "projects-template-matching",
          title: 'Template Matching',
          description: "a simple interactive visual explainer for Template Matching",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2022-fa-interactive-template-matching/";
            },},{id: "projects-context-versus-foreground-to-background-ratio",
          title: 'Context versus Foreground-to-Background Ratio',
          description: "More details about our MedNeurIPS &#39;22 abstract.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2022-medneurips-contextvsfbr-tradeoff/";
            },},{id: "projects-segmentation-evaluator",
          title: 'Segmentation Evaluator',
          description: "an interactive exploration of segmentation metrics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2022-sp-interactive-segmentation-evaluation/";
            },},{id: "projects-monty-hall",
          title: 'Monty Hall',
          description: "an interactive game to understand conditional probability",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2022-sp-understanding-monty-hall/";
            },},{id: "projects-astra-for-radiotherapy-quality-assurance",
          title: 'ASTRA - for Radiotherapy quality Assurance',
          description: "More details about our EMBC &#39;23 poster.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2023-embc-astra/";
            },},{id: "projects-deep-dose-predictor-sensitivity",
          title: 'Deep Dose Predictor Sensitivity',
          description: "More details about our ISBI &#39;23 poster.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2023-isbi-deepdosesens/";
            },},{id: "projects-do-we-really-need-that-skip-connection",
          title: 'Do we really need that skip connection?',
          description: "More details about our MICCAI &#39;23 work.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2023-miccai-skip-connections/";
            },},{id: "projects-monai-with-matlab",
          title: 'MONAI with MATLAB',
          description: "a getting started guide for using both MONAI and MATLAB",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2024-fa-monai-with-matlab/";
            },},{id: "projects-comparing-the-performance-of-radiation-oncologists-versus-a-deep-learning-dose-predictor",
          title: 'Comparing the Performance of Radiation Oncologists versus a Deep Learning Dose Predictor',
          description: "More details about our MIDL &#39;24 work.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2024-midl-radonc-vs-dldp/";
            },},{id: "projects-tairo-training-in-ai-for-radiation-oncology",
          title: 'TaiRO - Training in AI for Radiation Oncology',
          description: "A work-in-progress set of content tailored for this niche field.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2025-TaiRO/";
            },},{id: "projects-dosimetric-awareness-of-radiation-oncology-professionals",
          title: 'Dosimetric Awareness of Radiation Oncology Professionals',
          description: "Understanding what human-experts think about the impact of contour evaluations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/thesis-contour-correction-qualitative-analysis/";
            },},{id: "projects-dose-prediction-for-contour-quality-evalution",
          title: 'Dose Prediction for Contour Quality Evalution',
          description: "bring forward clinical outcome-knowledge into preceding workflow steps.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/thesis-dose-prediction-for-contour-evaluation/";
            },},{id: "projects-radiation-oncology-for-developers-and-researchers",
          title: 'Radiation Oncology for Developers and Researchers',
          description: "An overview of Radiation Oncology for the AI practitioner",
          section: "Projects",handler: () => {
              window.location.href = "/projects/thesis-review-ai-radiotherapy/";
            },},{id: "projects-robustness-of-deep-learning-segmentation-models",
          title: 'Robustness of Deep Learning Segmentation Models',
          description: "Measuring the performance of segmentation models under image content variations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/thesis-robustness-of-image-segmentation-models/";
            },},{id: "projects-literature-review-for-a-business-plan-on-automated-contouring",
          title: 'Literature review for a business plan on automated contouring',
          description: "Broad overview of components of a business plan for automated contouring",
          section: "Projects",handler: () => {
              window.location.href = "/projects/translate-business-plan-contouraid/";
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
