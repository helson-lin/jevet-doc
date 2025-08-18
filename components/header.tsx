"use client"

import { Button } from "@/components/ui/button"
import { Download, Menu, X } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, translations } = useLanguage()

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 lg:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 group">
            <div className="w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
              <img src="image-gallery.svg" alt="logo" className="w-12 h-12 fill-white" />
            </div>
            <span className="font-serif font-black text-2xl lg:text-3xl group-hover:text-accent transition-colors duration-300">
              Jevet
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            <a href="#features" className="relative hover:text-accent transition-all duration-300 font-medium group">
              {translations.nav.features}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#instructions"
              className="relative hover:text-accent transition-all duration-300 font-medium group"
            >
              {translations.nav.instructions}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#download" className="relative hover:text-accent transition-all duration-300 font-medium group">
              {translations.nav.download}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#support" className="relative hover:text-accent transition-all duration-300 font-medium group">
              {translations.nav.support}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-1 border border-primary-foreground/20">
              <button
                onClick={() => setLanguage("zh")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  language === "zh"
                    ? "bg-accent text-accent-foreground shadow-md scale-105"
                    : "hover:bg-primary-foreground/20 hover:scale-105"
                }`}
              >
                中文
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  language === "en"
                    ? "bg-accent text-accent-foreground shadow-md scale-105"
                    : "hover:bg-primary-foreground/20 hover:scale-105"
                }`}
              >
                EN
              </button>
            </div>
            <Button className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 px-6 py-2">
              <Download className="w-4 h-4 mr-2" />
              {translations.hero.downloadButton}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-primary-foreground/10 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <nav className="mt-6 pb-6 border-t border-primary-foreground/20">
            <div className="flex flex-col space-y-4 pt-6">
              <a
                href="#features"
                className="hover:text-accent transition-colors font-medium py-2 hover:translate-x-2 transition-transform duration-300"
              >
                {translations.nav.features}
              </a>
              <a
                href="#instructions"
                className="hover:text-accent transition-colors font-medium py-2 hover:translate-x-2 transition-transform duration-300"
              >
                {translations.nav.instructions}
              </a>
              <a
                href="#download"
                className="hover:text-accent transition-colors font-medium py-2 hover:translate-x-2 transition-transform duration-300"
              >
                {translations.nav.download}
              </a>
              <a
                href="#support"
                className="hover:text-accent transition-colors font-medium py-2 hover:translate-x-2 transition-transform duration-300"
              >
                {translations.nav.support}
              </a>

              <div className="flex items-center justify-center bg-primary-foreground/10 rounded-xl p-1 mt-4 border border-primary-foreground/20">
                <button
                  onClick={() => setLanguage("zh")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex-1 ${
                    language === "zh" ? "bg-accent text-accent-foreground shadow-md" : "hover:bg-primary-foreground/20"
                  }`}
                >
                  中文
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex-1 ${
                    language === "en" ? "bg-accent text-accent-foreground shadow-md" : "hover:bg-primary-foreground/20"
                  }`}
                >
                  EN
                </button>
              </div>

              <Button className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground w-full mt-4 shadow-lg hover:shadow-xl transition-all duration-300">
                <Download className="w-4 h-4 mr-2" />
                {translations.hero.downloadButton}
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
