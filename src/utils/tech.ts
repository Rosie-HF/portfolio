import type { AllowedTechs } from '@/content.config';
import type { LanguageKey } from '@/i18n/i18n.ts';

const englishTechLabels: Record<AllowedTechs, string> = {
  '0-1 产品方案': '0-1 product planning',
  '适应症论证': 'Indication rationale',
  '多模态指标': 'Multimodal metrics',
  '算法逻辑': 'Algorithm logic',
  '反馈训练': 'Feedback training',
  '治疗内容': 'Therapeutic content',
  '报告体系': 'Reporting system',
  '体动仪指标': 'Actigraphy metrics',
  '活动分析': 'Activity analysis',
  '报告转化': 'Report translation',
  '变量映射': 'Variable mapping',
  'taVNS': 'taVNS',
  '睡眠研究': 'Sleep research',
  '科研写作': 'Scientific writing',
  '方法培训': 'Method training',
  '医疗产品定义': 'Medical product definition',
  '数字疗法方案': 'Digital therapeutics',
  'EEG 生物反馈': 'EEG biofeedback',
  'ICD-11 / DSM-5': 'ICD-11 / DSM-5',
  '评估流程设计': 'Assessment workflow design',
  '治疗内容设计': 'Therapeutic content design',
  '报告体系设计': 'Reporting system design',
  '睡眠节律分析': 'Sleep rhythm analysis',
  '跨部门协作': 'Cross-functional collaboration',
  'R 统计分析': 'R statistical analysis',
  '科研支持': 'Research support',
  '实验设计': 'Experimental design',
  '数据分析': 'Data analysis',
  '培训与教学': 'Training & instruction',
  'GitHub Pages': 'GitHub Pages',
};

export function getTechLabel(tech: AllowedTechs, locale: LanguageKey) {
  if (locale === 'en') {
    return englishTechLabels[tech] ?? tech;
  }

  return tech;
}
