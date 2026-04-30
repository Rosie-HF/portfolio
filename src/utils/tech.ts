import type { AllowedTechs } from '@/content.config';
import type { LanguageKey } from '@/i18n/i18n.ts';

const englishTechLabels: Record<AllowedTechs, string> = {
  '医疗产品定义': 'Medical product definition',
  '数字疗法方案': 'Digital therapeutics',
  'EEG 生物反馈': 'EEG biofeedback',
  'ICD-11 / DSM-5': 'ICD-11 / DSM-5',
  '评估流程设计': 'Assessment workflow design',
  '治疗内容设计': 'Therapeutic content design',
  '报告体系设计': 'Reporting system design',
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
