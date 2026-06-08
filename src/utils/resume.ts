import type { CollectionEntry } from 'astro:content';

export type ResumeAchievement = CollectionEntry<'resume'>['data']['workExperience'][number]['achievements'][number];

const emphasisTerms = [
  '采集-评估-训练/治疗-反馈-报告',
  '多模态生理指标与算法规则体系',
  '睡眠/活动/昼夜节律指标报告映射材料',
  '心理治疗内容与素材标准体系',
  '睡眠多参数 taVNS 实验方案',
  '多参数生物反馈系统',
  '16 个治疗/训练素材目录',
  '225 个音视频素材',
  '4 类标准化报告模板',
  '治疗/呼吸训练指导语',
  '体动仪指标产品化',
  '统计分析培训内容',
  '论文部分内容撰写',
  '实时反馈得分',
  '治疗效果得分',
  '脑电反馈游戏策划',
  '17 篇公众号文章',
  'Molecular Psychiatry',
  'PPG/HRV',
  '适应症论证',
  '刺激参数',
  '实验流程',
  '采集指标',
  '立项标书',
  '伦理申请',
  '文献检索',
  'R 语言',
  '统计分析平台',
  'EEG',
  'EMG',
  'EDA',
  'Medical-product-side planning',
  'multimodal physiological-metric and algorithm-rule system',
  'sleep multi-parameter taVNS experimental protocol',
  'multi-parameter biofeedback system',
  'therapy and breathing-training guidance scripts',
  'psychotherapy content and asset standard system',
  'standardized report templates',
  'EEG feedback game plans',
  'R-based statistical methods',
  'actigraphy metrics',
].sort((a, b) => b.length - a.length);

const emphasisPattern = new RegExp(
  emphasisTerms
    .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|'),
  'g',
);

export function highlightResumeTerms(text: string): string {
  return text.replace(emphasisPattern, '<strong>$&</strong>');
}

export function renderResumeAchievements(list: ResumeAchievement): string {
  if (!Array.isArray(list)) {
    return `<li>${highlightResumeTerms(list)}</li>`;
  }

  return list
    .map((item) => {
      if (Array.isArray(item)) {
        return `<ul style="padding-left: 1.2em" class="list-disc list-inside">${renderResumeAchievements(item)}</ul>`;
      }

      return `<li>${highlightResumeTerms(item)}</li>`;
    })
    .join('');
}
