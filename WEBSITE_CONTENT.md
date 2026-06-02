# Portfolio 网站内容母版

> 用法：以后如果你想改网站文案，优先改这份文件。  
> 改完后告诉 Codex“请按照 `WEBSITE_CONTENT.md` 同步网站并推送 GitHub”，我会把这里的内容同步到 `src/content`、`src/i18n`、`site.yaml` 等实际构建文件。  
> 这份文件本身是“编辑母版”，不会被网站自动读取；它的目的是让你只维护一份清晰、不重复的内容。

## 编辑规则

- 中文内容主要同步到中文站点：`/zh-cn/`、`/zh-cn/resume/`、`/zh-cn/work/`、`/zh-cn/faq/`。
- 英文内容主要同步到英文站点：`/en/`、`/en/resume/`、`/en/work/`、`/en/faq/`。
- 同一段内容如果会出现在多个页面，只在这里写一次，并用“同步位置”说明复用位置。
- 不建议在这里写太长的完整工作复盘。完整原始简历仍可放在 `CV.md`；这份文件维护的是网站发布版内容。
- 项目标签请优先使用已有标签：医疗产品定义、数字疗法方案、EEG 生物反馈、ICD-11 / DSM-5、评估流程设计、治疗内容设计、报告体系设计、睡眠节律分析、跨部门协作、R 统计分析、科研支持、实验设计、数据分析、培训与教学、GitHub Pages。

---

# 中文站点内容

## 1. 全站基础信息

同步位置：网站 SEO、导航、页脚、联系方式、履历联系方式。

- 姓名：何芳
- 网站名称：He Fang Portfolio
- 网站副标题：医疗健康产品 Portfolio
- 网站方向标签：医疗产品方向
- 邮箱：fanghe13@outlook.com
- 电话：17745169759
- SEO 标题：何芳 | 医疗健康产品 Portfolio
- SEO 描述：何芳 的个人作品集，聚焦医疗健康产品、数字疗法、脑科学相关内容设计与产品方案。
- SEO 图片说明：何芳 的作品集预览图

## 2. 首页内容

同步位置：首页首屏、首页右侧成果卡、首页能力卡、首页精选案例区。

### 首屏

- 顶部小字：作品集 / 履历 / 案例
- 主标题：你好，我是 何芳
- 主说明：我专注于医疗健康产品、数字疗法方案与脑科学相关内容设计，持续把复杂的医学逻辑整理成可设计、可研发、可交付的产品方案。
- 引导文案：你可以先看项目案例，也可以直接浏览在线履历。

### 首页概览卡

- 方向聚焦：医疗健康产品 / 医学内容 / 数字疗法
- 核心闭环：评估、治疗、报告三大模块设计
- 方法背景：心理学研究、脑科学内容设计、R 统计分析

### 代表成果

- 10 个脑电反馈游戏方案
- 8 个心理治疗指导语脚本定稿
- 4 类标准化报告模板
- 覆盖 ICD-11 / DSM-5 标签体系梳理

### 能力亮点

- 产品定义：围绕适应症、反馈机制、指标体系与交互逻辑完成方案梳理。
- 临床流程：搭建评估、治疗、报告闭环，推动内容从概念走向可交付。
- 数据规则：定义复合指标、阈值、得分逻辑、展示规则与存储要求。
- 协作落地：连接产品、研发、设计、算法与外部供应商，推进版本交付。

### 首页精选案例区

- 区块标题：把医学逻辑转成产品方案的三个案例
- 按钮：查看全部案例

## 3. 个人简介

同步位置：首页“个人简介”卡、在线履历页个人简介。

心理学硕士，具备心理学研究、脑科学相关医学内容设计、产品方案梳理与数据分析背景。熟悉 <span class="text-primary-900">ADHD、睡眠与昼夜节律、脑电及多参数生理信号、生物反馈、评估与治疗流程设计</span>，能够将医学文献、疾病机制、生理指标和临床证据转化为产品功能、训练/治疗方案、报告内容和研发需求。

## 4. 在线履历

同步位置：中文在线履历 `/zh-cn/resume/`。

### 基本信息

- 姓名：何芳
- 角色：医疗健康产品 / 医学内容 / 数字疗法方向
- Email：fanghe13@outlook.com
- Phone：17745169759

### 工作经历

#### 医学内容设计 / 产品方案支持

- 公司：某医疗科技公司
- 时间：2025.07 - 2026.04
- 标签：医学产品转化、多参数生物反馈、指标算法规则、睡眠节律分析、报告体系设计、临床评价支持、跨部门协作

工作要点：

- 围绕多参数生物反馈系统和生理参数系统开展医学产品工作，覆盖医学与技术调研、产品场景分析、适应症论证、产品方案设计、开发需求拆解、测试反馈、临床评价资料支持和项目知识库沉淀
- 主导多参数生物反馈系统医学产品框架设计，明确评估、训练、治疗、报告四类模块，建立医学机制、生理指标、训练目标、疾病/症状场景和功能模块之间的映射，并输出软件流程、后端需求、疾病标签、方案字段和报告输出规则
- 建立多模态指标与算法规则体系，梳理 EEG、PPG/HRV、EMG、EDA、皮温、加速度等指标，定义原始值、特征值、核心值、阈值、游戏驱动值和治疗效果值，以及阈值计算、实时反馈得分和治疗效果得分逻辑
- 主导评估与报告模块设计，整理压力评估、认知行为学范式、SNAP-IV、IVA-CPT 等评估流程、指标结果和报告文本，搭建评估报告、治疗报告、疗程报告和趋势报告 4 类模板及 EEG、HRV 等指标解释体系
- 主导反馈游戏和心理治疗内容建设，设计 20 个脑电反馈主题概念、10 个详细游戏脚本及实时指标映射，定稿 8 个心理治疗指导语和 4 个呼吸训练脚本，整理 16 个治疗/训练素材目录、225 个音视频素材，并参与第三方 demo 与剪辑成品逐版校准
- 支持生理参数系统体动仪指标产品化，梳理睡眠-觉醒、日间活动、睡眠连续性与碎片化、睡眠结构、余弦拟合、非参数昼夜节律和周期图分析等指标，输出计算逻辑、参考范围、医学解释、报告文本和变量映射材料
- 承担医学产品部日常内容与专项支持，完成 17 篇公众号文章，参与 ADHD 综述文献检索和初稿撰写，调研眼动、脑氧/fNIRS、PSG、OSA 面部识别、闭环 tVNS、CLAS 等方向，并汇总生物反馈适应症文献与对比器械临床资料

#### 科研助理

- 公司：西安电子科技大学广州研究院 / 广州脑调控技术研究有限公司
- 时间：2023.08 - 至今
- 标签：科研支持、R 统计分析、实验设计、数据分析、培训与教学

工作要点：

- 持续支持神经调控、睡眠、精神心理及内感受相关课题，参与研究方案梳理、实验推进与项目执行
- 参与立项标书、伦理申请等材料撰写，协助完成研究逻辑、实验设计与申报材料整理
- 负责文献检索、资料整理和部分论文内容撰写，支持研究框架搭建与结论讨论
- 使用 R 语言完成数据整理、统计分析、结果检查，并参与团队统计分析平台的开发、维护和更新
- 制作并讲授统计分析培训内容，为团队提供方法支持和线上培训支持
- 协助指导学生开展科研和毕业论文相关工作，推动实验进度和阶段目标落地

#### 教学助理（R 语言课程与工作坊）

- 公司：南京师范大学 / 江苏省心理学会
- 时间：2021.06 - 2022.06
- 标签：培训与教学、R 统计分析

工作要点：

- 协助完成课程材料准备、作业批改、学生指导和课后答疑
- 带领学员完成代码编写与心理学数据分析练习，支持研究方法与统计工具的实际应用

### 代表性成果

- 医学产品方案与内容资产：主导多参数生物反馈系统医学产品框架、指标算法、评估范式、反馈游戏、心理治疗和报告体系设计，整理 225 个治疗/训练音视频素材
- 学术论文与手稿：一作论文 1 篇在投，一作手稿 1 篇撰写中，参与论文 1 篇已接收，会议论文 1 篇
- 奖学金与资格：南京师范大学研究生学业奖学金（2020 - 2022）、黑龙江中医药大学校级奖学金（2017 - 2019）、大学英语六级、全国计算机等级考试二级

### 教育背景

- 南京师范大学 · 心理学硕士（学术型推免）
  - 时间：2020.09 - 2023.06
  - 描述：研究方向围绕心理学、脑科学与相关研究方法，具备较强的研究设计与数据分析基础。
- 黑龙江中医药大学 · 应用心理学本科
  - 时间：2016.09 - 2020.06

### 技能

- 医学产品转化：将医学文献、疾病机制、生理指标和临床证据转化为产品功能、训练/治疗方案、报告内容和开发需求
- 评估与治疗设计：设计评估、反馈、心理治疗、报告等核心模块，梳理多维评估流程、评分标准和标准化治疗方案
- 指标与规则体系搭建：定义复合指标、阈值、得分逻辑、展示规则、输入输出参数、数据存储规则及语音播放逻辑
- 报告体系与医学解释：将 EEG、HRV、体动仪睡眠/节律指标转化为报告文本、图表结构、变量映射和结果解释
- 文档与标准化建设：输出需求文档、指标说明、报告模板、疾病标签规范、脚本、素材标准和知识库交接文档
- 研究与数据分析：掌握 R 语言统计分析，具备文献调研、竞品分析、实验设计、数据处理与结果解释能力
- 工具与专业方向：R、MATLAB、Python（基础）、SQL（基础）、EEG、ERPs、fNIRS、EMG、EDA、PPG/HRV、体动仪、生物反馈

## 5. 项目案例

同步位置：中文案例页 `/zh-cn/work/`。

### 案例 1：多参数生物反馈系统医学产品方案设计

- 发布时间：2026-03-01
- 标签：医疗产品定义、EEG 生物反馈、ICD-11 / DSM-5、评估流程设计、治疗内容设计、报告体系设计
- 摘要：从医学证据、指标算法、评估范式、反馈游戏、心理治疗到报告体系，主导多参数生物反馈系统医学产品侧整体方案设计。

正文：

这个项目贯穿多参数生物反馈系统从医学理论和技术路径调研，到产品框架、指标算法、内容资源、报告体系和研发规则落地的全过程。

项目重点包括：

- 建立“医学机制-生理指标-训练目标-疾病/症状场景-功能模块”的映射关系
- 搭建评估、训练、治疗、报告四类核心模块，输出软件流程、后端需求、疾病标签、方案字段和报告规则
- 梳理 EEG、PPG/HRV、EMG、EDA、皮温、加速度等多模态指标，定义阈值、实时反馈得分和治疗效果得分逻辑
- 设计 20 个脑电反馈游戏主题概念、10 个详细游戏脚本和实时指标映射
- 定稿 8 个心理治疗指导语、4 个呼吸训练脚本，并整理 16 个治疗/训练素材目录、225 个音视频素材
- 搭建评估报告、治疗报告、疗程报告和趋势报告 4 类报告模板及 EEG、HRV 等核心指标解释体系

### 案例 2：生理参数系统体动仪指标与报告转化

- 发布时间：2026-02-01
- 标签：医疗产品定义、报告体系设计、睡眠节律分析、数据分析
- 摘要：围绕体动仪多维指标体系，完成睡眠、活动、昼夜节律和周期性节律相关指标的医学解释、计算逻辑、报告文本和变量映射。

正文：

这个项目聚焦生理参数系统中体动仪数据的产品化转化：从原始活动数据和算法结果，延展到用户能够理解、产品能够展示、研发能够实现的报告内容。

项目重点包括：

- 梳理睡眠-觉醒、日间活动、睡眠连续性与碎片化、睡眠结构和睡眠分期等基础指标
- 补充睡眠碎片指数、睡眠结构占比、R 期潜伏期等指标的计算逻辑、参考范围和解释口径
- 调研余弦拟合分析、非参数昼夜节律分析和周期图分析等高阶节律指标
- 将综合节律评分、主导生物周期、能量分布、活动相位、节律稳定性和日夜对比度等内容拆解为报告模块
- 输出报告文本、判断逻辑和变量映射材料，支持系统自动生成可解释报告和后续版本迭代

### 案例 3：神经调控与睡眠研究支持

- 发布时间：2025-11-15
- 标签：科研支持、实验设计、R 统计分析、数据分析、培训与教学
- 摘要：长期支持神经调控、睡眠、精神心理与 ADHD 相关研究，覆盖研究设计、材料申报、文献综述、统计分析、方法培训和专项技术调研。

正文：

该部分工作更偏研究支撑与方法落地，强调研究流程协作、数据结果解释和团队赋能。

- 参与研究方案、立项标书、伦理申请等材料整理
- 使用 R 语言完成数据处理、统计分析和结果检查，并参与团队统计分析平台维护与更新
- 参与 ADHD 综述文献检索、框架确定、初稿撰写、图表整理和修改
- 调研眼动、脑氧/fNIRS、PSG、体动仪、OSA 面部识别、闭环 tVNS、CLAS 等方向，为部门技术储备和产品探索提供资料
- 输出统计分析培训内容并支持学生科研实践

### 案例 4：医疗内容标准化与第三方交付协同

- 发布时间：2025-08-20
- 标签：数字疗法方案、治疗内容设计、报告体系设计、跨部门协作、GitHub Pages
- 摘要：通过文档标准化、素材标准制定、第三方 demo 与音视频成品验收，推动医学产品内容从方案进入可开发、可测试、可迭代的交付状态。

正文：

这一部分体现的是从内容设计、素材标准、研发对接到第三方交付验收的全流程协同能力。

- 统一适应症、评估、治疗、指标、算法、界面与素材文档结构
- 将医学逻辑拆解为软件流程、功能交互、算法输入输出、报告呈现和素材交付标准
- 对接第三方游戏和素材制作团队，提交游戏脚本、指导语、音视频素材需求并参与测试反馈
- 围绕游戏 demo 的数据映射、视觉反馈逻辑、界面元素，以及心理治疗素材的配音、剪辑、节奏和循环播放效果持续反馈
- 沉淀项目知识库、工作交接清单和文档归档，保障后续版本可追溯、可承接、可继续迭代

## 6. FAQ

同步位置：中文问答页 `/zh-cn/faq/`。

### 这个 portfolio 主要想传达什么能力？

这个站点主要面向医疗健康产品、医学产品经理、数字疗法产品策划，以及医学内容与方案设计相关岗位。

我希望重点传达三类能力：

- 能把复杂的医学与脑科学逻辑整理成产品方案
- 能搭建评估、治疗、报告等核心模块闭环
- 能在产品、研发、设计、算法与外部供应商之间推动落地

### 这些案例更偏研究还是更偏产品？

两者都有，但站点的组织方式更偏产品视角。

研究经历主要体现我的方法论基础，包括：

- 文献调研与研究设计
- 数据处理与统计分析
- 结果解释与材料撰写

案例页则更强调我如何把这些基础能力转换为可交付的产品方案、流程和内容体系。

### 如果想进一步沟通，最适合聊哪些方向？

欢迎交流以下方向：

- 医疗健康产品或数字疗法相关岗位机会
- 脑电、生物反馈、心理治疗内容设计相关项目
- 评估流程、报告体系或指标规则梳理工作
- 研究支持、统计分析培训与方法协作

## 7. 页脚和通用按钮文案

同步位置：页脚、导航、语言切换、按钮。

- 导航：首页、履历、案例、问答
- 语言切换说明：选择语言
- 履历按钮：打印或导出履历
- 履历版本：现代版、简洁版
- 页脚主文案：希望进一步交流？
- 页脚说明：欢迎通过 邮箱 联系我，或查看 在线履历 了解完整经历。
- 联系方式标题：联系方式
- 复制提示：已复制到剪贴板
- 版权文案：© {year} {name}。基于 {themeLink} 构建。
- 404 文案：找不到此页面
- 404 按钮：回首页

---

# English Site Content

## 1. Global Information

Sync targets: SEO, navigation, footer, contact links, resume contact details.

- Name: HE Fang
- Website name: He Fang Portfolio
- Website subtitle: Medical Product Portfolio
- Website status: Medical Product Focus
- Email: fanghe13@outlook.com
- Phone: 17745169759
- SEO title: HE Fang | Medical Product Portfolio
- SEO description: HE Fang's portfolio focused on medical health products, digital therapeutics, and neuroscience-related content design.
- SEO image alt: Preview image for HE Fang's portfolio

## 2. Home Page

Sync targets: English home page hero, outcome card, capability cards, featured cases section.

### Hero

- Eyebrow: Portfolio / Resume / Case Studies
- Headline: Hi, I'm HE Fang
- Intro: I focus on medical health products, digital therapeutics, and neuroscience-related content design, turning complex medical logic into product plans that teams can design, build, and deliver.
- CTA sentence: You can start with case studies, or go straight to my resume.

### Home Summary Cards

- Focus: Medical health products / Medical content / Digital therapeutics
- Core loop: Assessment, therapy, and reporting modules
- Method background: Psychology research, neuroscience content design, and R analysis

### Featured Outcomes

- 10 EEG biofeedback game concepts
- 8 finalized psychotherapy guidance scripts
- 4 standardized report templates
- Structured ICD-11 / DSM-5 label system coverage

### Capability Highlights

- Product definition: Shape solutions around indications, feedback mechanisms, metric systems, and interaction logic.
- Clinical workflow: Build the loop from assessment to therapy and reporting, moving concepts toward delivery.
- Data rules: Define composite metrics, thresholds, scoring logic, display rules, and storage requirements.
- Cross-team delivery: Align product, engineering, design, algorithms, and external vendors to ship complete versions.

### Featured Case Section

- Section title: Three cases that turn medical logic into product plans
- Button: View all cases

## 3. Profile

Sync targets: English home profile card and English resume profile.

M.S. in Psychology with a background in psychological research, neuroscience-related medical content design, product planning, and data analysis. Familiar with <span class="text-primary-900">ADHD, sleep and circadian rhythms, EEG and multi-parameter physiological signals, biofeedback, and assessment and therapy workflows</span>, with experience translating medical literature, disease mechanisms, physiological metrics, and clinical evidence into product functions, intervention plans, reports, and engineering requirements.

## 4. Resume

Sync target: English resume page `/en/resume/`.

### Basic Information

- Name: HE Fang
- Role: Medical Health Product / Medical Content / Digital Therapeutics
- Email: fanghe13@outlook.com
- Phone: 17745169759

### Work Experience

#### Medical Content Design / Product Solution Support

- Company: Medical Technology Company
- Time: 2025.07 - 2026.04
- Tags: Medical product translation, Multi-parameter biofeedback, Metric and algorithm rules, Sleep rhythm analysis, Reporting system design, Clinical evaluation support, Cross-functional collaboration

Achievements:

- Worked across a multi-parameter biofeedback system and a physiological-parameter system, covering medical and technical research, product scenario analysis, indication rationale, product planning, requirement breakdown, testing feedback, clinical-evaluation support, and project knowledge-base handoff.
- Led the medical product framework for the multi-parameter biofeedback system, defining assessment, training, therapy, and reporting modules, mapping medical mechanisms, physiological metrics, training goals, disease/symptom scenarios, and product functions, and producing software flows, backend requirements, disease labels, plan fields, and report-output rules.
- Built a multi-modal metrics and algorithm rule system across EEG, PPG/HRV, EMG, EDA, skin temperature, and accelerometer signals, defining raw values, feature values, core values, thresholds, game-driving values, therapy-effect values, threshold rules, real-time feedback scores, and therapy-outcome scoring.
- Led assessment and reporting design, organizing stress assessment, cognitive-behavioral paradigms, SNAP-IV, IVA-CPT workflows, result metrics, and report text, while building four report templates and interpretation rules for EEG, HRV, and other core indicators.
- Led feedback-game and psychotherapy content design, including 20 EEG feedback game concepts, 10 detailed game scripts with real-time metric mappings, 8 psychotherapy guidance scripts, 4 breathing-training scripts, 16 therapy/training asset folders, and 225 audio/video assets, while reviewing third-party demos and edited deliverables across iterations.
- Supported productization of actigraphy metrics for the physiological-parameter system, organizing sleep-wake, daytime activity, sleep continuity and fragmentation, sleep architecture, cosinor analysis, non-parametric circadian rhythm analysis, and periodogram metrics into calculation logic, reference ranges, medical interpretations, report text, and variable mappings.
- Contributed to departmental content and research support, including 17 WeChat articles, ADHD review literature search and drafting, research on eye tracking, cerebral oxygen/fNIRS, PSG, facial-feature-based OSA detection, closed-loop tVNS, and CLAS, plus evidence summaries for biofeedback indications and comparable devices.

#### Research Assistant

- Company: Xidian University Guangzhou Institute / Guangzhou Brain Modulation Technology Research Co., Ltd.
- Time: 2023.08 - Present
- Tags: Research support, R statistical analysis, Experimental design, Data analysis, Training & instruction

Achievements:

- Supported ongoing projects in neuromodulation, sleep, psychiatry, psychology, and interoception, contributing to study planning, experiment execution, and day-to-day project coordination.
- Helped prepare proposals, ethics applications, and supporting materials while organizing research logic, experimental design, and submission documents.
- Took responsibility for literature review, material organization, and selected manuscript drafting to support research framing and interpretation.
- Used R to clean data, run statistical analyses, verify results, and contribute to the maintenance and iteration of the team's analysis platform.
- Created and delivered training materials in statistical analysis, providing both methodological support and online training for the team.
- Assisted in supervising students on research and thesis-related work, helping experiments and milestone delivery move forward.

#### Teaching Assistant (R Courses & Workshops)

- Company: Nanjing Normal University / Jiangsu Psychological Society
- Time: 2021.06 - 2022.06
- Tags: Training & instruction, R statistical analysis

Achievements:

- Assisted with course preparation, assignment review, student guidance, and post-class Q&A.
- Guided participants through coding and psychology data-analysis exercises, supporting the practical use of research methods and statistical tools.

### Selected Achievements

- Medical Product Planning and Content Assets: Led medical product framework, metric rules, assessment paradigms, feedback games, psychotherapy content, and reporting design for a multi-parameter biofeedback system, including 225 therapy/training audio and video assets.
- Papers and Manuscripts: One first-author paper under review, one first-author manuscript in progress, one co-authored paper accepted, and one conference paper.
- Scholarships and Qualifications: Graduate Academic Scholarship at Nanjing Normal University (2020 - 2022), university scholarship at Heilongjiang University of Chinese Medicine (2017 - 2019), CET-6, and National Computer Rank Examination Level 2.

### Education

- Nanjing Normal University · M.S. in Psychology
  - Time: 2020.09 - 2023.06
  - Description: Focused on psychology, neuroscience, and related research methods, with strong foundations in study design and data analysis.
- Heilongjiang University of Chinese Medicine · B.A. in Applied Psychology
  - Time: 2016.09 - 2020.06

### Skills

- Medical product translation: turn medical literature, disease mechanisms, physiological metrics, and clinical evidence into product functions, intervention plans, reports, and engineering requirements.
- Assessment and therapy design: design assessment, feedback, psychotherapy, and reporting modules, including multi-dimensional workflows, scoring standards, and standardized intervention plans.
- Metrics and rule systems: define composite indicators, thresholds, scoring logic, display rules, input-output parameters, data storage requirements, and audio playback logic.
- Reporting and medical interpretation: translate EEG, HRV, and actigraphy sleep/rhythm metrics into report text, chart structures, variable mappings, and result interpretation.
- Documentation and standardization: produce requirement docs, metric definitions, report templates, disease label specifications, scripts, asset standards, and knowledge-base handoff materials.
- Research and data analysis: apply R for statistical analysis and support literature review, competitive analysis, experimental design, data processing, and interpretation.
- Tools and domain knowledge: R, MATLAB, Python (basic), SQL (basic), EEG, ERPs, fNIRS, EMG, EDA, PPG/HRV, actigraphy, and biofeedback.

## 5. Case Studies

Sync target: English case page `/en/work/`.

### Case 1: Multi-Parameter Biofeedback Medical Product Planning

- Publish date: 2026-03-01
- Tags: 医疗产品定义, EEG 生物反馈, ICD-11 / DSM-5, 评估流程设计, 治疗内容设计, 报告体系设计
- Summary: Led the medical-product planning work for a multi-parameter biofeedback system across evidence research, metric rules, assessment paradigms, feedback games, psychotherapy content, and reporting.

Body:

This project covered the full medical-product path for a multi-parameter biofeedback system, from medical theory and technical research to product frameworks, metric rules, content assets, report structures, and engineering-ready requirements.

Key contributions included:

- Mapped medical mechanisms, physiological metrics, training goals, disease/symptom scenarios, and product functions
- Built assessment, training, therapy, and reporting modules with software flows, backend requirements, disease labels, plan fields, and report rules
- Organized EEG, PPG/HRV, EMG, EDA, skin-temperature, and accelerometer metrics, including threshold rules, real-time feedback scores, and therapy-outcome scoring
- Designed 20 EEG feedback game concepts, 10 detailed game scripts, and real-time metric mappings
- Finalized 8 psychotherapy guidance scripts and 4 breathing-training scripts, while organizing 16 therapy/training asset folders and 225 audio/video assets
- Built four report templates across assessment, therapy, course, and trend reports, with interpretation rules for EEG, HRV, and other core metrics

### Case 2: Actigraphy Metrics and Report Translation for Physiological Parameters

- Publish date: 2026-02-01
- Tags: 医疗产品定义, 报告体系设计, 睡眠节律分析, 数据分析
- Summary: Turned multi-dimensional actigraphy metrics into medical interpretations, calculation logic, report text, and variable mappings across sleep, activity, circadian rhythm, and periodic rhythm analysis.

Body:

This project focused on translating actigraphy data for a physiological-parameter system: moving from raw activity data and algorithm outputs into report content that users can understand, product teams can display, and engineering teams can implement.

Key contributions included:

- Organized core sleep-wake, daytime activity, sleep continuity and fragmentation, sleep architecture, and sleep-stage metrics
- Added calculation logic, reference ranges, and interpretation language for metrics such as sleep fragmentation index, sleep-stage proportions, and REM latency
- Researched higher-level rhythm metrics from cosinor analysis, non-parametric circadian rhythm analysis, and periodogram analysis
- Structured report modules around comprehensive rhythm scoring, dominant biological period, energy distribution, activity phase, rhythm stability, and day-night contrast
- Produced report text, judgment logic, and variable mappings to support automatic report generation and future product iterations

### Case 3: Neuromodulation and Sleep Research Support

- Publish date: 2025-11-15
- Tags: 科研支持, 实验设计, R 统计分析, 数据分析, 培训与教学
- Summary: Supported research in neuromodulation, sleep, mental health, and ADHD across study design, submissions, literature reviews, statistical analysis, training, and targeted technology research.

Body:

This body of work leans more toward research operations and methodological support, with an emphasis on process coordination, interpretation, and team enablement.

- Helped organize study plans, proposal materials, and ethics submissions
- Used R for data processing, statistical analysis, and result checking while contributing to the team's analysis platform
- Supported ADHD review work through literature search, framework development, drafting, figure/table organization, and revision
- Researched eye tracking, cerebral oxygen/fNIRS, PSG, actigraphy, facial-feature-based OSA detection, closed-loop tVNS, and CLAS to support technical exploration
- Produced statistical-analysis training materials and supported student research practice

### Case 4: Medical Content Standardization and Delivery Coordination

- Publish date: 2025-08-20
- Tags: 数字疗法方案, 治疗内容设计, 报告体系设计, 跨部门协作, GitHub Pages
- Summary: Moved medical product content from planning into buildable and testable delivery through documentation standards, asset specifications, third-party demo review, and audio/video acceptance.

Body:

This work reflects end-to-end coordination from content design and asset standards to engineering handoff and third-party delivery review.

- Standardized documentation across indications, assessments, therapies, metrics, algorithms, interfaces, and content assets
- Translated medical logic into software flows, feature interactions, algorithm inputs and outputs, report presentation rules, and asset delivery standards
- Coordinated with third-party game and content-production teams on game scripts, guidance text, audio/video requirements, and testing feedback
- Reviewed game-demo data mappings, visual feedback logic, interface elements, voiceover, editing, pacing, and looped playback across iterations
- Built project knowledge bases, handoff lists, and archived materials so later versions could remain traceable and easy to continue

## 6. FAQ

Sync target: English FAQ page `/en/faq/`.

### What capabilities is this portfolio meant to highlight?

This site is mainly aimed at roles in medical health products, medical product management, digital therapeutics planning, and medical content or solution design.

I want to communicate three strengths in particular:

- Turning complex medical and neuroscience logic into workable product plans
- Building the core loop across assessment, therapy, and reporting
- Driving execution across product, engineering, design, algorithms, and external vendors

### Are these cases more research-oriented or more product-oriented?

They include both, but the site is organized more from a product point of view.

My research experience mainly shows the methodological foundation behind the work, including:

- Literature review and research design
- Data processing and statistical analysis
- Interpretation and material writing

The case-study pages then emphasize how I turn those foundations into deliverable product plans, workflows, and content systems.

### What kinds of conversations are the best fit if you'd like to connect?

I'm especially open to talking about:

- Roles in medical health products or digital therapeutics
- Projects related to EEG, biofeedback, or psychotherapy content design
- Work on assessment workflows, reporting systems, or metric-rule structuring
- Research support, statistics training, and methodological collaboration

## 7. Footer and Common UI Text

Sync targets: footer, navigation, language picker, buttons.

- Navigation: Home, Resume, Cases, FAQ
- Language picker label: Select language
- Resume button: Print or Export Resume
- Resume versions: Modern, Minimal
- Footer heading: Interested in connecting?
- Footer sentence: Reach out by Email or view my resume for the full experience.
- Contact heading: Contact
- Copied feedback: Copied to clipboard
- Copyright: © {year} {name}. Built with {themeLink}.
- 404 text: Page not found
- 404 button: Back home
