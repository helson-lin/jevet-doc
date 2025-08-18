"use client"

import { Github, Twitter, Mail, Heart } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { language, translations } = useLanguage()

  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/90 text-background py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background/5 via-transparent to-background/5" />
      </div>
      {/* </CHANGE> */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <span className="font-serif font-black text-4xl">Jevet</span>
            </div>
            <p className="font-sans text-background/90 max-w-md leading-relaxed text-lg">
              {translations.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-2xl mb-6">{translations.footer.quickLinks}</h3>
            <ul className="font-sans space-y-4">
              <li>
                <a
                  href="#features"
                  className="text-background/80 hover:text-accent transition-colors duration-300 text-lg"
                >
                  {translations.nav.features}
                </a>
              </li>
              <li>
                <a
                  href="#instructions"
                  className="text-background/80 hover:text-accent transition-colors duration-300 text-lg"
                >
                  {translations.nav.instructions}
                </a>
              </li>
              <li>
                <a
                  href="#download"
                  className="text-background/80 hover:text-accent transition-colors duration-300 text-lg"
                >
                  {translations.nav.download}
                </a>
              </li>
              <li>
                <a
                  href="#support"
                  className="text-background/80 hover:text-accent transition-colors duration-300 text-lg"
                >
                  {translations.footer.support}
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-serif font-bold text-2xl mb-6">{translations.footer.support}</h3>
            <ul className="font-sans space-y-4">
              <li>
                <a href="#" className="text-background/80 hover:text-accent transition-colors duration-300 text-lg">
                  {translations.footer.documentation}
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-accent transition-colors duration-300 text-lg">
                  {translations.footer.faq}
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-accent transition-colors duration-300 text-lg">
                  {translations.footer.community}
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-accent transition-colors duration-300 text-lg">
                  {translations.footer.contact}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-12 flex flex-col md:flex-row justify-between items-center">
          <p className="font-sans text-background/70 text-lg mb-6 md:mb-0">
            {translations.footer.copyright} <Heart className="w-5 h-5 inline text-accent mx-1" />{" "}
            {translations.footer.madeWith}
          </p>

          <div className="flex space-x-6">
            <a
              href="https://github.com/helson-lin/Jevet"
              className="text-background/70 hover:text-accent transition-colors duration-300 hover:scale-110 transform"
            >
              <Github className="w-7 h-7" />
            </a>
            <a
              href="https://x.com/helsonlin"
              className="text-background/70 hover:text-accent transition-colors duration-300 hover:scale-110 transform"
            >
              <Twitter className="w-7 h-7" />
            </a>
            <a
              href="mailto:helson-lin@outlook.com"
              className="text-background/70 hover:text-accent transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
