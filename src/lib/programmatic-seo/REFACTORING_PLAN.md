# 程序化页面重构计划

## 当前问题
- 单个 `data.ts` 文件有 2185 行
- 27 个页面全部在一个文件中
- 难以维护和扩展
- Git 合并冲突风险高

## 推荐的文件结构

```
src/lib/programmatic-seo/
├── types.ts                    # 类型定义（保持不变）
├── utils.ts                    # 工具函数（保持不变）
├── constants.ts                # 共享的基础内容（baseFeatures, baseTestimonials）
├── data.ts                     # 主入口文件（导出所有页面）
│
├── pages/                      # 按分类组织的页面
│   ├── problem-solution.ts     # 问题-解决方案类页面
│   ├── question-based.ts       # 问答类页面（How-to 指南）
│   ├── feature-focused.ts       # 功能聚焦类页面
│   ├── comparison.ts           # 对比类页面
│   ├── demographic-specific.ts # 特定人群类页面
│   └── symptom-outcome.ts      # 症状-结果类页面
│
└── index.ts                    # 统一导出（可选）
```

## 优势

### ✅ 可维护性
- 每个文件 200-400 行，易于阅读
- 按分类组织，逻辑清晰
- 修改某个分类不影响其他分类

### ✅ 协作友好
- 多人可同时编辑不同分类
- 减少 Git 合并冲突
- 代码审查更容易

### ✅ 可扩展性
- 添加新页面只需编辑对应分类文件
- 新增分类只需创建新文件
- 不影响现有代码

### ✅ 性能
- 按需导入（如果使用动态导入）
- 更好的代码分割
- Tree-shaking 优化

## 实施步骤

1. **创建 constants.ts** - 提取共享内容
2. **创建 pages/ 目录** - 按分类拆分
3. **重构 data.ts** - 作为统一入口
4. **更新导入** - 确保所有引用正常工作
5. **测试验证** - 确保所有页面正常生成

## 示例代码结构

### constants.ts
```typescript
export const baseFeatures = [...]
export const baseTestimonials = [...]
```

### pages/problem-solution.ts
```typescript
import { ProgrammaticPageData } from '../types'
import { baseFeatures, baseTestimonials } from '../constants'

export const problemSolutionPages: ProgrammaticPageData[] = [
  {
    slug: 'quit-gaming-addiction-app',
    category: 'problem-solution',
    // ... 页面配置
  },
  // ... 更多 problem-solution 页面
]
```

### data.ts
```typescript
import { ProgrammaticPageData } from './types'
import { problemSolutionPages } from './pages/problem-solution'
import { questionBasedPages } from './pages/question-based'
import { featureFocusedPages } from './pages/feature-focused'
// ... 其他导入

export const programmaticPages: ProgrammaticPageData[] = [
  ...problemSolutionPages,
  ...questionBasedPages,
  ...featureFocusedPages,
  // ... 合并所有页面
]

// 保持现有的导出函数不变
export function getPageBySlug(slug: string) { ... }
export function getAllPageSlugs() { ... }
export function getAllPages() { ... }
```

## 注意事项

⚠️ **保持向后兼容**
- `data.ts` 的导出函数签名保持不变
- 确保 `getAllPages()` 等函数正常工作

⚠️ **共享内容管理**
- 基础内容（baseFeatures）放在 constants.ts
- 避免重复定义

⚠️ **类型安全**
- 所有页面文件使用相同的类型定义
- TypeScript 会确保类型一致性







