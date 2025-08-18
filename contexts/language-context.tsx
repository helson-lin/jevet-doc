"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "zh" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  translations: typeof translations.zh
}

const translations = {
  zh: {
    nav: {
      features: "功能特色",
      instructions: "使用教程",
      download: "立即下载",
      support: "技术支持",
    },
    hero: {
      title: "强大的 AI 图片处理工具",
      subtitle: "支持智能抠图、格式转换与压缩",
      description: "完全免费开源，本地处理，保护您的隐私。一站式图片处理解决方案，满足您的所有需求。",
      downloadButton: "免费下载",
      viewSource: "查看源码",
      features: "✓ 完全免费 ✓ 跨平台支持 ✓ 本地处理保护隐私",
    },
    features: {
      title: "核心功能",
      subtitle: "专业的 AI 图片处理能力",
      backgroundRemoval: {
        title: "AI 智能抠图",
        description:
          "集成多种先进 AI 模型（u2net、silueta、rmbg-1.4、bria-rmbg-2.0），自动识别主体，精准去除背景，效果媲美专业工具。",
      },
      formatConversion: {
        title: "格式转换",
        description: "支持 PNG、JPG、WEBP、GIF 等主流格式互转，智能优化压缩算法，在保证质量的同时最大化节省存储空间。",
      },
      smartCompression: {
        title: "智能压缩",
        description: "基于 Sharp 引擎的高性能压缩算法，可自定义质量、尺寸参数，批量处理大量图片，效率提升 10 倍。",
      },
      privacyProtection: {
        title: "隐私保护",
        description: "所有处理均在本地完成，无需联网，不上传任何数据到服务器，完全保护您的图片隐私和数据安全。",
      },
      batchProcessing: {
        title: "批量处理",
        description: "支持同时处理数百张图片，智能队列管理，多线程并行处理，大幅提升工作效率。",
      },
      watermarkAddition: {
        title: "水印添加",
        description: "支持文字和图片水印，可自定义位置、透明度、大小，批量添加水印保护您的作品版权。",
      },
    },
    instructions: {
      title: "快速开始",
      subtitle: "只需四个简单步骤，即可开始您的图片处理之旅。无需专业技能，我们让每个人都能轻松使用。",
      steps: {
        download: {
          title: "下载安装",
          description:
            "选择适合您系统的版本进行下载，按照安装向导完成安装过程。Windows 用户需要安装 Visual C++ 运行库。",
        },
        setup: {
          title: "模型管理",
          description: "首次启动后进入设置页面，根据需要下载 AI 模型文件到本地。推荐新手使用 u2net 或 silueta 模型。",
        },
        import: {
          title: "导入图片",
          description: "拖拽或点击选择需要处理的图片，支持 PNG、JPG、WEBP、GIF 等格式。支持批量导入处理数百张图片。",
        },
        process: {
          title: "开始处理",
          description: "选择功能和参数，点击开始处理，完成后导出到指定位置。所有处理均在本地完成，保护您的隐私。",
        },
      },
    },
    download: {
      title: "立即下载",
      subtitle: "选择适合您系统的版本，开始您的图片处理之旅。Jevet 完全免费开源，支持所有主流操作系统。",
      downloadButton: "下载",
      viewSource: "查看源码",
      platforms: {
        windows: {
          description: "兼容 Windows 10 及更高版本，支持 64 位系统架构",
          note: "需要 Microsoft Visual C++ 运行库",
        },
        macos: {
          description: "兼容 macOS 10.15 及更高版本，支持 Intel 和 Apple Silicon",
        },
        linux: {
          description: "支持主流 Linux 发行版，提供 AppImage、DEB、RPM 格式",
          note: "暂不支持",
        },
      },
      cloudTitle: "网盘下载",
      cloudSubtitle: "如果 GitHub 下载较慢，可使用以下网盘链接高速下载",
      cloud: {
        aliyun: {
          name: "阿里云盘",
          description: "不限速下载，无需登录",
        },
        quark: {
          name: "夸克网盘",
          description: "高速下载，支持在线播放",
        },
        baidu: {
          name: "百度网盘",
          description: "稳定可靠，提取码：qe2j",
        },
      },
      access: "访问",
      requirements: "系统要求：至少 4GB 内存，500MB 可用存储空间 • 发布时间：2025年8月15日",
    },
    footer: {
      description: "AI 驱动的图片处理工具，革新开发者编写、优化和维护代码的方式。为现代开发者工作流程而构建。",
      quickLinks: "快速链接",
      support: "技术支持",
      documentation: "使用文档",
      faq: "常见问题",
      community: "社区论坛",
      contact: "联系我们",
      copyright: "© 2024 Jevet.",
      madeWith: "为全球开发者用心打造",
    },
  },
  en: {
    nav: {
      features: "Features",
      instructions: "How to Use",
      download: "Download",
      support: "Support",
    },
    hero: {
      title: "Powerful AI Image Processing Tool",
      subtitle: "Support intelligent background removal, format conversion and compression",
      description:
        "Completely free and open source, local processing to protect your privacy. One-stop image processing solution for all your needs.",
      downloadButton: "Free Download",
      viewSource: "View Source",
      features: "✓ Completely Free ✓ Cross-platform ✓ Local Processing Privacy Protection",
    },
    features: {
      title: "Core Features",
      subtitle: "Professional AI Image Processing Capabilities",
      backgroundRemoval: {
        title: "AI Smart Background Removal",
        description:
          "Integrates multiple advanced AI models (u2net, silueta, rmbg-1.4, bria-rmbg-2.0), automatically identifies subjects, precisely removes backgrounds, with results comparable to professional tools.",
      },
      formatConversion: {
        title: "Format Conversion",
        description:
          "Supports conversion between mainstream formats like PNG, JPG, WEBP, GIF, with intelligent compression algorithms that maximize storage savings while ensuring quality.",
      },
      smartCompression: {
        title: "Smart Compression",
        description:
          "High-performance compression algorithm based on Sharp engine, customizable quality and size parameters, batch processing of large quantities of images, 10x efficiency improvement.",
      },
      privacyProtection: {
        title: "Privacy Protection",
        description:
          "All processing is completed locally without internet connection, no data uploaded to servers, completely protecting your image privacy and data security.",
      },
      batchProcessing: {
        title: "Batch Processing",
        description:
          "Support processing hundreds of images simultaneously, intelligent queue management, multi-threaded parallel processing, greatly improving work efficiency.",
      },
      watermarkAddition: {
        title: "Watermark Addition",
        description:
          "Support text and image watermarks, customizable position, transparency, size, batch watermark addition to protect your work copyright.",
      },
    },
    instructions: {
      title: "Quick Start",
      subtitle:
        "Complete your image processing journey in just four simple steps. No professional skills required, we make it easy for everyone to use.",
      steps: {
        download: {
          title: "Download & Install",
          description:
            "Choose the version suitable for your system to download, and complete the installation process following the installation wizard. Windows users need to install Visual C++ runtime.",
        },
        setup: {
          title: "Model Management",
          description:
            "Enter the settings page after first launch, download AI model files to local as needed. Beginners are recommended to use u2net or silueta models.",
        },
        import: {
          title: "Import Images",
          description:
            "Drag and drop or click to select images to process, supports PNG, JPG, WEBP, GIF and other formats. Supports batch import processing of hundreds of images.",
        },
        process: {
          title: "Start Processing",
          description:
            "Select functions and parameters, click start processing, export to specified location after completion. All processing is done locally to protect your privacy.",
        },
      },
    },
    download: {
      title: "Download Now",
      subtitle:
        "Choose the version for your system and start your image processing journey. Jevet is completely free and open source, supporting all mainstream operating systems.",
      downloadButton: "Download",
      viewSource: "View Source",
      platforms: {
        windows: {
          description: "Compatible with Windows 10 and higher, supports 64-bit system architecture",
          note: "Requires Microsoft Visual C++ runtime",
        },
        macos: {
          description: "Compatible with macOS 10.15 and higher, supports Intel and Apple Silicon",
        },
        linux: {
          description: "Supports mainstream Linux distributions, provides AppImage, DEB, RPM formats",
          note: "Not supported yet",
        },
      },
      cloudTitle: "Cloud Download",
      cloudSubtitle: "If GitHub download is slow, you can use the following cloud links for high-speed download",
      cloud: {
        aliyun: {
          name: "Aliyun Drive",
          description: "Unlimited speed download, no login required",
        },
        quark: {
          name: "Quark Drive",
          description: "High-speed download, supports online playback",
        },
        baidu: {
          name: "Baidu Drive",
          description: "Stable and reliable, extraction code: qe2j",
        },
      },
      access: "Access",
      requirements:
        "System Requirements: At least 4GB RAM, 500MB available storage space • Release Date: August 15, 2025",
    },
    footer: {
      description:
        "AI-powered image processing tool that revolutionizes how developers write, optimize, and maintain their code. Built for the modern developer workflow.",
      quickLinks: "Quick Links",
      support: "Support",
      documentation: "Documentation",
      faq: "FAQ",
      community: "Community",
      contact: "Contact Us",
      copyright: "© 2024 Jevet.",
      madeWith: "Made with love for developers worldwide",
    },
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh")

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        translations: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
