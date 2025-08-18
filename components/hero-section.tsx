"use client"

import { Button } from "@/components/ui/button"
import { Download, Github } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const { translations } = useLanguage()

  // 滚动到下载区域
  const scrollToDownload = () => {
    const downloadSection = document.getElementById('download')
    if (downloadSection) {
      downloadSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // 跳转到GitHub
  const openGitHub = () => {
    window.open('https://github.com/helson-lin/Jevet', '_blank', 'noopener noreferrer')
  }

  return (
    <section className="relative py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-serif font-bold text-4xl lg:text-5xl xl:text-6xl leading-tight text-foreground">
                {translations.hero.title}
              </h1>

              <p className="font-sans text-xl lg:text-2xl text-muted-foreground font-medium">
                {translations.hero.subtitle}
              </p>

              <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-lg">
                {translations.hero.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base font-medium"
                onClick={scrollToDownload}
              >
                <Download className="w-5 h-5 mr-2" />
                {translations.hero.downloadButton}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-3 text-base font-medium bg-transparent"
                onClick={openGitHub}
              >
                <Github className="w-5 h-5 mr-2" />
                {translations.hero.viewSource}
              </Button>
            </div>

            <div className="inline-flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2 border">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <p className="text-sm font-medium text-muted-foreground">{translations.hero.features}</p>
            </div>
          </div>

          {/* Right column - Visual */}
          <div className="relative">
            <div className="overflow-hidden">
                <img
                  src="/ai-image-processing-interface.png"
                  alt="Jevet AI Image Processing Interface"
                  className="w-full h-auto rounded-lg"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
