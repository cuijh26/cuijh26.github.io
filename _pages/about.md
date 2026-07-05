---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: + /about/
  + /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am currently a first-year Ph.D. student at the [AI3 Institute](https://ai3.fudan.edu.cn/) of Fudan University, supervised by [Prof. Siyu Zhu](https://sites.google.com/site/zhusiyucs/home). Prior to this, I obtained my bachelor’s degree from the [School of Software Engineering](https://sse.sysu.edu.cn/), Sun Yat-sen University. My research focuses on **Vision Generative Models**, **World Models**, and **Vision-Language-Action Models**.

# 🔥 News

- _2026.02_: &nbsp; 🎉🎉&nbsp; WAM-Flow is accepted by [CVPR 2026](https://cvpr.thecvf.com/Conferences/2026).
- _2025.08_: &nbsp; 🎉🎉&nbsp; Hallo4 is accepted by [SIGGRAPH Asia 2025](https://asia.siggraph.org/2025).
- _2025.02_: &nbsp; 🎉🎉&nbsp; Hallo3 is accepted by [CVPR 2025](https://cvpr.thecvf.com/Conferences/2025).
- _2025.01_: &nbsp; 🎉🎉&nbsp; Hallo2 is accepted by [ICLR 2025](https://iclr.cc/Conferences/2025).

# 📝 Publications
<!-- WAM-Diff -->
<div class='paper-box'>
    <div class='paper-box-image'>
        <div>
            <div class="badge">arXiv 2026</div>
            <img src='https://raw.githubusercontent.com/fudan-generative-vision/WAM-Diff/main/assets/main_arch.png' alt="WAM-Diff teaser" width="100%">
        </div>
    </div>
<div class='paper-box-text' markdown="1">

<a class="paper-title" href="https://arxiv.org/abs/2512.11872">WAM-Diff: A Masked Diffusion VLA Framework with MoE and Online Reinforcement Learning for Autonomous Driving</a>

Mingwang Xu<sup>\*</sup>, **Jiahao Cui<sup>\*</sup>**, Feipeng Cai<sup>\*</sup>, Hanlin Shang<sup>\*</sup>, Zhihao Zhu, Shan Luan, Yifang Xu, Neng Zhang, Yaoyi Li, Jia Cai, Siyu Zhu

<div class="paper-links">
    <a class="paper-link" href="https://arxiv.org/abs/2512.11872">paper</a>
    <a class="paper-link" href="https://github.com/fudan-generative-vision/WAM-Diff">code</a>
    <a class="github-stars" href="https://github.com/fudan-generative-vision/WAM-Diff" data-repo="fudan-generative-vision/WAM-Diff" aria-label="GitHub stars for WAM-Diff">
        <span class="github-stars-label"><i class="fab fa-github" aria-hidden="true"></i> stars</span><span class="github-stars-count" aria-live="polite">...</span>
    </a>
</div>

- WAM-Diff is a masked-diffusion VLA framework for autonomous driving, achieving 91.0 PDMS on NAVSIM-v1 and 89.7 EPDMS on NAVSIM-v2.
</div>
</div>

<!-- WAM-Flow -->
<div class='paper-box'>
    <div class='paper-box-image'>
        <div>
            <div class="badge">CVPR 2026</div>
            <img src='https://raw.githubusercontent.com/fudan-generative-vision/WAM-Flow/main/assets/Figure_1.png' alt="WAM-Flow teaser" width="100%">
        </div>
    </div>
<div class='paper-box-text' markdown="1">

<a class="paper-title" href="https://arxiv.org/abs/2512.06112">WAM-Flow: Parallel Coarse-to-Fine Motion Planning via Discrete Flow Matching for Autonomous Driving</a>

Yifang Xu<sup>\*</sup>, **Jiahao Cui<sup>\*</sup>**, Zhihao Zhu<sup>\*</sup>, Hanlin Shang, Shan Luan, Mingwang Xu, Feipeng Cai, Neng Zhang, Yaoyi Li, Jia Cai, Siyu Zhu

<div class="paper-links">
    <a class="paper-link" href="https://arxiv.org/abs/2512.06112">paper</a>
    <a class="paper-link" href="https://github.com/fudan-generative-vision/WAM-Flow">code</a>
    <a class="github-stars" href="https://github.com/fudan-generative-vision/WAM-Flow" data-repo="fudan-generative-vision/WAM-Flow" aria-label="GitHub stars for WAM-Flow">
        <span class="github-stars-label"><i class="fab fa-github" aria-hidden="true"></i> stars</span><span class="github-stars-count" aria-live="polite">...</span>
    </a>
</div>

- WAM-Flow is a VLA planner that uses discrete flow matching for parallel coarse-to-fine trajectory generation, achieving 90.3 PDMS on NAVSIM v1.
</div>
</div>

<!-- Hallo4 -->
<div class='paper-box'>
    <div class='paper-box-image'>
        <div>
            <div class="badge">SIGGRAPH Asia 2025</div>
            <img src='https://fusion-lab.oss-cn-shanghai.aliyuncs.com/hallo4/teasers.jpg' alt="sym" width="100%">
        </div>
    </div>
<div class='paper-box-text' markdown="1">

<a class="paper-title" href="https://arxiv.org/abs/2505.23525">Hallo4: High-Fidelity Dynamic Portrait Animation via Direct Preference Optimization</a>

**Jiahao Cui<sup>\*</sup>**, Yan Chen<sup>\*</sup>, Mingwang Xu<sup>\*</sup>, Hanlin Shang, Yuxuan Chen, Yun Zhan, Zilong Dong, Yao Yao, Jingdong Wang, Siyu Zhu

<div class="paper-links">
    <a class="paper-link" href="https://xyz123xyz456.github.io/hallo4/#/">project</a>
    <a class="paper-link" href="https://arxiv.org/abs/2505.23525">paper</a>
    <a class="paper-link" href="https://github.com/fudan-generative-vision/hallo4">code</a>
    <a class="github-stars" href="https://github.com/fudan-generative-vision/hallo4" data-repo="fudan-generative-vision/hallo4" aria-label="GitHub stars for Hallo4">
        <span class="github-stars-label"><i class="fab fa-github" aria-hidden="true"></i> stars</span><span class="github-stars-count" aria-live="polite">...</span>
    </a>
</div>

- Powered by DPO, Halla4 generates lifelike audio-driven avatar videos with rich emotional expression and highly accurate lip synchronization.
</div>
</div>

<!-- Hallo3 -->
<div class='paper-box'>
    <div class='paper-box-image'>
        <div>
            <div class="badge">CVPR 2025</div>
            <table align='center' border="0" style="width: 100%; text-align: center;">
                <tr>
                    <td>
                        <video align='center'
                               src="https://github.com/user-attachments/assets/f14bf935-ceaa-4dae-98b9-d7e54633475d"
                               muted
                               autoplay
                               loop
                               style="width: 100%; max-width: 600px; display: block; margin: 0 auto;">
                        </video>
                    </td>
                </tr>
            </table>
        </div>
    </div>
<div class='paper-box-text' markdown="1">

<a class="paper-title" href="https://arxiv.org/abs/2412.00733">Hallo3: Highly Dynamic and Realistic Portrait Image Animation with Video Diffusion Transformer</a>

**Jiahao Cui**, Hui Li, Yun Zhan, Hanlin Shang, Kaihui Cheng, Yuqi Ma, Shan Mu, Hang Zhou, Jingdong Wang, Siyu Zhu

<div class="paper-links">
    <a class="paper-link" href="https://fudan-generative-vision.github.io/hallo3/#/">project</a>
    <a class="paper-link" href="https://arxiv.org/abs/2412.00733">paper</a>
    <a class="paper-link" href="https://github.com/fudan-generative-vision/hallo3">code</a>
    <a class="github-stars" href="https://github.com/fudan-generative-vision/hallo3" data-repo="fudan-generative-vision/hallo3" aria-label="GitHub stars for Hallo3">
        <span class="github-stars-label"><i class="fab fa-github" aria-hidden="true"></i> stars</span><span class="github-stars-count" aria-live="polite">...</span>
    </a>
</div>

- Hallo3 can generate highly realistic avatars with dynamic backgrounds, expressive foregrounds, and various head orientations, which collectively contribute to creating remarkably vivid and lifelike talking head.
</div>
</div>

<!-- Hallo2 -->
<div class='paper-box'>
    <div class='paper-box-image'>
        <div>
            <div class="badge">ICLR 2025</div>
            <img src='https://raw.githubusercontent.com/fudan-generative-vision/hallo2/main/assets/framework_2.jpg' alt="sym" width="100%">
        </div>
    </div>
<div class='paper-box-text' markdown="1">

<a class="paper-title" href="https://arxiv.org/pdf/2410.07718">Hallo2: Long-Duration and High-Resolution Audio-driven Portrait Image Animation</a>

**Jiahao Cui<sup>\*</sup>**, Hui Li<sup>\*</sup>, Yao Yao, Hao Zhu, Hanlin Shang, Kaihui Cheng, Hang Zhou, Siyu Zhu, Jingdong Wang

<div class="paper-links">
    <a class="paper-link" href="https://fudan-generative-vision.github.io/hallo2/#/">project</a>
    <a class="paper-link" href="https://arxiv.org/pdf/2410.07718">paper</a>
    <a class="paper-link" href="https://github.com/fudan-generative-vision/hallo2">code</a>
    <a class="github-stars" href="https://github.com/fudan-generative-vision/hallo2" data-repo="fudan-generative-vision/hallo2" aria-label="GitHub stars for Hallo2">
        <span class="github-stars-label"><i class="fab fa-github" aria-hidden="true"></i> stars</span><span class="github-stars-count" aria-live="polite">...</span>
    </a>
</div>

- A new avatar video generative model capable of generating stunning 4K resolution videos for up to 1 hour!
</div>
</div>

# 🎖 Honors and Awards

- _2025.12_: National Scholarship for Ph.D. Students
- _2023.12_: National Scholarship
- _2023.11_: Sun Yat-sen University Outstanding Student Scholarship, First Class
- _2022.12_: National Scholarship
- _2022.12_: Sun Yat-sen University Outstanding Student Scholarship, First Class

# 📖 Educations

- _2025.09 - present_: Ph.D student, AI3 Institute, Fudan University.
- _2021.09 - 2025.06_: Undergraduate student, School of Software Engineering, Sun Yat-sen University.

# 💻 Internships

- _2025.09 - present_: 2030 Lab, YINWANG, China.
- _2025.06 - 2025.09_: PCG ARCLab, Tencent, China.

# 💬 Services

- **Reviewer**: SIGGRAPH Asia 2025, CVPR 2026, ECCV 2026.
