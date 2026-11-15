---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: + /about/
  + /about.html
---

<span class='anchor' id='about-me'></span>

I am currently a second-year Ph.D. student at the [AI3 Institute](https://ai3.fudan.edu.cn/) of Fudan University, supervised by [Prof. Siyu Zhu](https://sites.google.com/site/zhusiyucs/home). Prior to this, I obtained my bachelor’s degree from the [School of Software Engineering](https://sse.sysu.edu.cn/), Sun Yat-sen University. My research focuses on **Vision Generative Models**, **World Models**, and **Vision-Language-Action Models**.

<section class="news-layout" aria-labelledby="-news">
<div class="news-panel" data-visible-count="5">
<h1 id="-news" class="news-heading"><i class="fas fa-newspaper" aria-hidden="true"></i>News</h1>

<div class="news-viewport" id="news-window" role="region" aria-label="News updates" tabindex="0">
<ul class="news-timeline" id="news-list">
    <li class="news-item">
        <time class="news-date" datetime="2026-11">November 2026</time>
        <div class="news-text">Our work <a href="https://arxiv.org/abs/2611.07939">WAM-Sim0.1</a> is now available.</div>
    </li>
    <li class="news-item">
        <time class="news-date" datetime="2026-02">February 2026</time>
        <div class="news-text">🎉🎉 <a href="https://arxiv.org/abs/2512.06112">WAM-Flow</a> is accepted by <a href="https://cvpr.thecvf.com/Conferences/2026">CVPR 2026</a>.</div>
    </li>
    <li class="news-item">
        <time class="news-date" datetime="2025-08">August 2025</time>
        <div class="news-text">🎉🎉 <a href="https://arxiv.org/abs/2505.23525">Hallo4</a> is accepted by <a href="https://asia.siggraph.org/2025">SIGGRAPH Asia 2025</a>.</div>
    </li>
    <li class="news-item">
        <time class="news-date" datetime="2025-02">February 2025</time>
        <div class="news-text">🎉🎉 <a href="https://arxiv.org/abs/2412.00733">Hallo3</a> is accepted by <a href="https://cvpr.thecvf.com/Conferences/2025">CVPR 2025</a>.</div>
    </li>
    <li class="news-item">
        <time class="news-date" datetime="2025-01">January 2025</time>
        <div class="news-text">🎉🎉 <a href="https://arxiv.org/pdf/2410.07718">Hallo2</a> is accepted by <a href="https://iclr.cc/Conferences/2025">ICLR 2025</a>.</div>
    </li>
</ul>
</div>

</div>

<aside class="research-focus" aria-labelledby="research-focus-title">
    <h2 id="research-focus-title">Research Focus</h2>
    <p>My research connects world models, vision-language-action models, and portrait video generation through diffusion, flow matching, and reinforcement learning.</p>
    <div class="research-topics">
        <a class="research-topic" href="#wam-sim">
            <span class="research-topic-title">World Model <i class="fas fa-arrow-right" aria-hidden="true"></i></span>
            <span class="research-topic-description">Persistent world-anchored memory and online RL for consistent, realistic driving simulation in WAM-Sim.</span>
        </a>
        <a class="research-topic" href="#wam-diff">
            <span class="research-topic-title">VLA <i class="fas fa-arrow-right" aria-hidden="true"></i></span>
            <span class="research-topic-description">Masked diffusion and flow matching for autonomous driving in WAM-Diff and WAM-Flow.</span>
        </a>
        <a class="research-topic" href="#hallo4">
            <span class="research-topic-title">Portrait Video Generation <i class="fas fa-arrow-right" aria-hidden="true"></i></span>
            <span class="research-topic-description">Audio-driven avatars with diffusion transformers and preference optimization in the Hallo series.</span>
        </a>
    </div>
</aside>
</section>

# 📝 Publications
<!-- WAM-Sim0.1 -->
<div class='paper-box' id="wam-sim">
    <div class='paper-box-image'>
        <div>
            <video src="https://cdn.aondata.work/WAM-Sim/assets/hero.mp4"
                   poster="https://cdn.aondata.work/WAM-Sim/assets/hero.jpg"
                   muted
                   autoplay
                   loop
                   playsinline
                   preload="metadata"
                   aria-label="WAM-Sim driving world model demo">
            </video>
        </div>
    </div>
<div class='paper-box-text' markdown="1">

<a class="paper-title" href="https://arxiv.org/abs/2611.07939">WAM-Sim0.1: World Anchored Memory Meets Online RL for Consistent and Realistic Driving Simulation</a>

<div class="paper-venue">arXiv 2026</div>

**Jiahao Cui<sup>\*</sup>**, Jiaye Li<sup>\*</sup>, Wenhao Zhang<sup>\*</sup>, Yaoyi Li<sup>\*</sup>, Shan Luan<sup>\*</sup>, Quanhui Tang, Jianhua Han, Lin Cheng, Hang Xu, Siyu Zhu<sup>†</sup>

<div class="paper-links">
    <a class="paper-link" href="https://fudan-generative-vision.github.io/WAM-Sim/">project</a>
    <a class="paper-link" href="https://arxiv.org/abs/2611.07939">paper</a>
</div>

<p class="paper-summary">WAM-Sim combines persistent hierarchical memory with online flow-matching RL to improve long-horizon consistency and realism in driving simulation.</p>
</div>
</div>

<!-- WAM-Diff -->
<div class='paper-box' id="wam-diff">
    <div class='paper-box-image'>
        <div>
            <img src='https://raw.githubusercontent.com/fudan-generative-vision/WAM-Diff/main/assets/main_arch.png' alt="WAM-Diff teaser" width="100%">
        </div>
    </div>
<div class='paper-box-text' markdown="1">

<a class="paper-title" href="https://arxiv.org/abs/2512.11872">WAM-Diff: A Masked Diffusion VLA Framework with MoE and Online Reinforcement Learning for Autonomous Driving</a>

<div class="paper-venue">arXiv 2026</div>

Mingwang Xu<sup>\*</sup>, **Jiahao Cui<sup>\*</sup>**, Feipeng Cai<sup>\*</sup>, Hanlin Shang<sup>\*</sup>, Zhihao Zhu, Shan Luan, Yifang Xu, Neng Zhang, Yaoyi Li, Jia Cai, Siyu Zhu

<div class="paper-links">
    <a class="paper-link" href="https://arxiv.org/abs/2512.11872">paper</a>
    <a class="paper-link paper-code" href="https://github.com/fudan-generative-vision/WAM-Diff" data-repo="fudan-generative-vision/WAM-Diff" aria-label="WAM-Diff code on GitHub">
        code <i class="fab fa-github" aria-hidden="true"></i><span class="github-stars-count" hidden></span>
    </a>
</div>

<p class="paper-summary">WAM-Diff is a masked-diffusion VLA framework for autonomous driving, achieving 91.0 PDMS on NAVSIM-v1 and 89.7 EPDMS on NAVSIM-v2.</p>
</div>
</div>

<!-- WAM-Flow -->
<div class='paper-box'>
    <div class='paper-box-image'>
        <div>
            <img src='https://raw.githubusercontent.com/fudan-generative-vision/WAM-Flow/main/assets/Figure_1.png' alt="WAM-Flow teaser" width="100%">
        </div>
    </div>
<div class='paper-box-text' markdown="1">

<a class="paper-title" href="https://arxiv.org/abs/2512.06112">WAM-Flow: Parallel Coarse-to-Fine Motion Planning via Discrete Flow Matching for Autonomous Driving</a>

<div class="paper-venue">CVPR 2026</div>

Yifang Xu<sup>\*</sup>, **Jiahao Cui<sup>\*</sup>**, Zhihao Zhu<sup>\*</sup>, Hanlin Shang, Shan Luan, Mingwang Xu, Feipeng Cai, Neng Zhang, Yaoyi Li, Jia Cai, Siyu Zhu

<div class="paper-links">
    <a class="paper-link" href="https://arxiv.org/abs/2512.06112">paper</a>
    <a class="paper-link paper-code" href="https://github.com/fudan-generative-vision/WAM-Flow" data-repo="fudan-generative-vision/WAM-Flow" aria-label="WAM-Flow code on GitHub">
        code <i class="fab fa-github" aria-hidden="true"></i><span class="github-stars-count" hidden></span>
    </a>
</div>

<p class="paper-summary">WAM-Flow is a VLA planner that uses discrete flow matching for parallel coarse-to-fine trajectory generation, achieving 90.3 PDMS on NAVSIM v1.</p>
</div>
</div>

<!-- Hallo4 -->
<div class='paper-box' id="hallo4">
    <div class='paper-box-image'>
        <div>
            <img src='https://fusion-lab.oss-cn-shanghai.aliyuncs.com/hallo4/teasers.jpg' alt="sym" width="100%">
        </div>
    </div>
<div class='paper-box-text' markdown="1">

<a class="paper-title" href="https://arxiv.org/abs/2505.23525">Hallo4: High-Fidelity Dynamic Portrait Animation via Direct Preference Optimization</a>

<div class="paper-venue">SIGGRAPH Asia 2025</div>

**Jiahao Cui<sup>\*</sup>**, Yan Chen<sup>\*</sup>, Mingwang Xu<sup>\*</sup>, Hanlin Shang, Yuxuan Chen, Yun Zhan, Zilong Dong, Yao Yao, Jingdong Wang, Siyu Zhu

<div class="paper-links">
    <a class="paper-link" href="https://xyz123xyz456.github.io/hallo4/#/">project</a>
    <a class="paper-link" href="https://arxiv.org/abs/2505.23525">paper</a>
    <a class="paper-link paper-code" href="https://github.com/fudan-generative-vision/hallo4" data-repo="fudan-generative-vision/hallo4" aria-label="Hallo4 code on GitHub">
        code <i class="fab fa-github" aria-hidden="true"></i><span class="github-stars-count" hidden></span>
    </a>
</div>

<p class="paper-summary">Powered by DPO, Halla4 generates lifelike audio-driven avatar videos with rich emotional expression and highly accurate lip synchronization.</p>
</div>
</div>

<!-- Hallo3 -->
<div class='paper-box'>
    <div class='paper-box-image'>
        <div>
            <video src="https://github.com/user-attachments/assets/f14bf935-ceaa-4dae-98b9-d7e54633475d"
                   muted
                   autoplay
                   loop
                   playsinline
                   aria-label="Hallo3 portrait animation demo">
            </video>
        </div>
    </div>
<div class='paper-box-text' markdown="1">

<a class="paper-title" href="https://arxiv.org/abs/2412.00733">Hallo3: Highly Dynamic and Realistic Portrait Image Animation with Video Diffusion Transformer</a>

<div class="paper-venue">CVPR 2025</div>

**Jiahao Cui**, Hui Li, Yun Zhan, Hanlin Shang, Kaihui Cheng, Yuqi Ma, Shan Mu, Hang Zhou, Jingdong Wang, Siyu Zhu

<div class="paper-links">
    <a class="paper-link" href="https://fudan-generative-vision.github.io/hallo3/#/">project</a>
    <a class="paper-link" href="https://arxiv.org/abs/2412.00733">paper</a>
    <a class="paper-link paper-code" href="https://github.com/fudan-generative-vision/hallo3" data-repo="fudan-generative-vision/hallo3" aria-label="Hallo3 code on GitHub">
        code <i class="fab fa-github" aria-hidden="true"></i><span class="github-stars-count" hidden></span>
    </a>
</div>

<p class="paper-summary">Hallo3 can generate highly realistic avatars with dynamic backgrounds, expressive foregrounds, and various head orientations, which collectively contribute to creating remarkably vivid and lifelike talking head.</p>
</div>
</div>

<!-- Hallo2 -->
<div class='paper-box'>
    <div class='paper-box-image'>
        <div>
            <img src='https://raw.githubusercontent.com/fudan-generative-vision/hallo2/main/assets/framework_2.jpg' alt="sym" width="100%">
        </div>
    </div>
<div class='paper-box-text' markdown="1">

<a class="paper-title" href="https://arxiv.org/pdf/2410.07718">Hallo2: Long-Duration and High-Resolution Audio-driven Portrait Image Animation</a>

<div class="paper-venue">ICLR 2025</div>

**Jiahao Cui<sup>\*</sup>**, Hui Li<sup>\*</sup>, Yao Yao, Hao Zhu, Hanlin Shang, Kaihui Cheng, Hang Zhou, Siyu Zhu, Jingdong Wang

<div class="paper-links">
    <a class="paper-link" href="https://fudan-generative-vision.github.io/hallo2/#/">project</a>
    <a class="paper-link" href="https://arxiv.org/pdf/2410.07718">paper</a>
    <a class="paper-link paper-code" href="https://github.com/fudan-generative-vision/hallo2" data-repo="fudan-generative-vision/hallo2" aria-label="Hallo2 code on GitHub">
        code <i class="fab fa-github" aria-hidden="true"></i><span class="github-stars-count" hidden></span>
    </a>
</div>

<p class="paper-summary">A new avatar video generative model capable of generating stunning 4K resolution videos for up to 1 hour!</p>
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
