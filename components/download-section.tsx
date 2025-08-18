"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Monitor, Apple, HardDrive, Github, Cloud } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function DownloadSection() {
  const { language, translations } = useLanguage()

  const platforms = [
    {
      icon: Monitor,
      name: "Windows",
      version: "v0.0.1",
      size: "~85 MB",
      description: translations.download.platforms.windows.description,
      downloadUrl:
        "https://github.com/helson-lin/Jevet/releases/download/untagged-e6c62caf0deec252579e/Jevet-Windows-0.0.1-Setup.exe",
      note: translations.download.platforms.windows.note,
    },
    {
      icon: Apple,
      name: "macOS",
      version: "v0.0.1",
      size: "~95 MB",
      description: translations.download.platforms.macos.description,
      downloadUrl:
        "https://github.com/helson-lin/Jevet/releases/download/untagged-e6c62caf0deec252579e/Jevet-Mac-0.0.1-Installer.dmg",
    },
    {
      icon: HardDrive,
      name: "Linux",
      version: "v0.0.1",
      size: "~90 MB",
      description: translations.download.platforms.linux.description,
      downloadUrl: "#",
      note: translations.download.platforms.linux.note,
    },
  ]

  const cloudDownloads = [
    {
      name: translations.download.cloud.aliyun.name,
      description: translations.download.cloud.aliyun.description,
      url: "https://www.alipan.com/s/GAXVURbc1ez",
    },
    {
      name: translations.download.cloud.quark.name,
      description: translations.download.cloud.quark.description,
      url: "https://pan.quark.cn/s/d86900ce33f8",
    },
    {
      name: translations.download.cloud.baidu.name,
      description: translations.download.cloud.baidu.description,
      url: "https://pan.baidu.com/s/1BO4vMlcm7xkkno0GYeoCUQ?pwd=qe2j",
    },
  ]

  return (
    <section
      id="download"
      className="py-32 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 text-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-gray-300/20 to-transparent" />
        <div className="absolute top-20 left-20 w-80 h-80 bg-gray-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <h2 className="font-serif font-black text-5xl md:text-7xl mb-8 animate-fade-in">
            {translations.download.title}
          </h2>
          <p className="font-sans text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay">
            {translations.download.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {platforms.map((platform, index) => (
            <Card
              key={index}
              className="bg-white/90 backdrop-blur-xl text-gray-900 border-0 shadow-lg group hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-black/20 to-gray-600/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />

              <CardHeader className="text-center pb-6 relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:from-gray-200 group-hover:to-gray-300 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                  <platform.icon className="w-12 h-12 text-black group-hover:text-gray-700 transition-colors duration-300" />
                </div>
                <CardTitle className="font-serif font-bold text-3xl group-hover:text-black transition-colors duration-300">
                  {platform.name}
                </CardTitle>
                <CardDescription className="font-sans text-lg">
                  {platform.version} • {platform.size}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <p className="font-sans text-muted-foreground mb-6 leading-relaxed">{platform.description}</p>
                {platform.note && (
                  <div className="mb-6 relative">
                    <div className="p-4 rounded-xl relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-0.5"></div>
                      <div className="flex items-start gap-3">
                        <div className="flex-1">
                          <p className="font-sans text-sm leading-relaxed mb-2 text-orange-500 font-bold text-center text-italic">
                            {platform.note}
                          </p>
                          {platform.name === "Windows" && (
                            <a
                              href="https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-medium hover:outline-2 hover:outline-black px-2 py-1 rounded transition-colors"
                            >
                              Download Visual C++ Runtime
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <Button
                  className="w-full bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black text-white shadow-xl hover:shadow-2xl transition-all duration-300 py-6 text-lg font-semibold hover:scale-105"
                  disabled={platform.name === "Linux"}
                  asChild={platform.name !== "Linux"}
                >
                  {platform.name !== "Linux" ? (
                    <a href={platform.downloadUrl} target="_blank" rel="noopener noreferrer">
                      <Download className="w-5 h-5 mr-3" />
                      {translations.download.downloadButton} {platform.name}
                    </a>
                  ) : (
                    <>
                      <Download className="w-5 h-5 mr-3" />
                      {translations.download.downloadButton} {platform.name}
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-20">
          <Button
            variant="outline"
            className="bg-transparent border-gray-400 text-gray-700 hover:bg-gray-100 hover:text-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 py-6 px-10 text-lg font-semibold hover:scale-105 backdrop-blur-sm"
            asChild
          >
            <a href="https://github.com/helson-lin/Jevet" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-3" />
              {translations.download.viewSource}
            </a>
          </Button>
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="font-serif font-bold text-4xl text-center mb-10 animate-fade-in text-gray-900">
            {translations.download.cloudTitle}
          </h3>
          <p className="font-sans text-lg text-gray-700 text-center mb-12 leading-relaxed animate-fade-in-delay">
            {translations.download.cloudSubtitle}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cloudDownloads.map((cloud, index) => (
              <Card
                key={index}
                className="bg-white/70 backdrop-blur-xl border-gray-300 group hover:bg-white/85 transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-fade-in-up shadow-md"
                style={{ animationDelay: `${600 + index * 150}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <h4 className="font-serif font-bold text-gray-900 mb-4 text-2xl group-hover:text-black transition-colors duration-300">
                    {cloud.name}
                  </h4>
                  <p className="font-sans text-sm text-gray-700 mb-8 leading-relaxed">
                    {cloud.description}
                  </p>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-gray-400 text-gray-700 hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                    asChild
                  >
                    <a href={cloud.url} target="_blank" rel="noopener noreferrer">
                      <Cloud className="w-4 h-4 mr-2" />
                      {translations.download.access}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-20">
          <p className="font-sans text-gray-600 leading-relaxed text-lg animate-fade-in-delay">
            {translations.download.requirements}
          </p>
        </div>
      </div>
    </section>
  )
}
