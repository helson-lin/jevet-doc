"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Settings, Upload, Rocket } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function InstructionsSection() {
  const { language, translations } = useLanguage()

  const steps = [
    {
      icon: Download,
      step: "01",
      title: translations.instructions.steps.download.title,
      description: translations.instructions.steps.download.description,
    },
    {
      icon: Settings,
      step: "02",
      title: translations.instructions.steps.setup.title,
      description: translations.instructions.steps.setup.description,
    },
    {
      icon: Upload,
      step: "03",
      title: translations.instructions.steps.import.title,
      description: translations.instructions.steps.import.description,
    },
    {
      icon: Rocket,
      step: "04",
      title: translations.instructions.steps.process.title,
      description: translations.instructions.steps.process.description,
    },
  ]

  return (
    <section
      id="instructions"
      className="py-32 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <h2 className="font-serif font-black text-5xl md:text-7xl mb-8 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-fade-in">
            {translations.instructions.title}
          </h2>
          <p className="font-sans text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-delay">
            {translations.instructions.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="bg-background/90 backdrop-blur-xl border-border/50 relative overflow-hidden group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 hover:-translate-y-4 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-6 right-6 text-8xl font-black text-primary/5 group-hover:text-primary/15 transition-all duration-500 group-hover:scale-110">
                {step.step}
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />

              <CardHeader className="pb-6 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:from-primary/20 group-hover:to-accent/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <step.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <CardTitle className="font-serif font-bold text-2xl group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="font-sans leading-relaxed text-base group-hover:text-foreground/80 transition-colors duration-300">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
