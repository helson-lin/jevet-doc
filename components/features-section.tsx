"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, RefreshCw, Zap, Shield, Layers, Droplets } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function FeaturesSection() {
  const { translations } = useLanguage()

  const features = [
    {
      icon: Brain,
      title: translations.features.backgroundRemoval.title,
      description: translations.features.backgroundRemoval.description,
    },
    {
      icon: RefreshCw,
      title: translations.features.formatConversion.title,
      description: translations.features.formatConversion.description,
    },
    {
      icon: Zap,
      title: translations.features.smartCompression.title,
      description: translations.features.smartCompression.description,
    },
    {
      icon: Shield,
      title: translations.features.privacyProtection.title,
      description: translations.features.privacyProtection.description,
    },
  ]

  const additionalFeatures = [
    {
      icon: Layers,
      title: translations.features.batchProcessing.title,
      description: translations.features.batchProcessing.description,
    },
    {
      icon: Droplets,
      title: translations.features.watermarkAddition.title,
      description: translations.features.watermarkAddition.description,
    },
  ]

  return (
    <section id="features" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-serif font-bold text-3xl lg:text-4xl mb-6 text-foreground">
            {translations.features.title}
          </h2>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed">{translations.features.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-sm hover:shadow-md transition-all duration-200 bg-background/80 backdrop-blur-sm h-64 flex flex-col"
            >
              <CardHeader className="pb-4 flex-1 flex flex-col justify-center">
                <div className="flex flex-col items-center text-center gap-4 h-full justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <CardTitle className="font-serif font-semibold text-lg mb-3 leading-tight">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="font-sans leading-relaxed text-sm text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
          {additionalFeatures.map((feature, index) => (
            <Card
              key={`additional-${index}`}
              className="border-0 shadow-sm hover:shadow-md transition-all duration-200 bg-background/80 backdrop-blur-sm h-64 flex flex-col"
            >
              <CardHeader className="pb-4 flex-1 flex flex-col justify-center">
                <div className="flex flex-col items-center text-center gap-4 h-full justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <CardTitle className="font-serif font-semibold text-lg mb-3 leading-tight">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="font-sans leading-relaxed text-sm text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
