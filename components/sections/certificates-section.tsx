import { Card, CardContent } from "@/components/ui/card"
import { Award, Calendar, Hash } from "lucide-react"
import { portfolioData } from "@/data/portfolio-data"
import Link from "next/link"

export function CertificatesSection() {
  const { certificates } = portfolioData

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Certificates</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise in various technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certificates.map((cert) => (
            <Link href={cert.link} target="_blank" rel="noopener noreferrer" className="no-underline" key={cert.id}>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex-shrink-0">
                    <Award className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{cert.name}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{cert.issuer}</p>

                    <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{cert.date}</span>
                      </div>
                      <span className="hidden sm:inline">•</span>
                      <div className="flex items-center gap-1">
                        <Hash className="h-4 w-4" />
                        {cert.credentialId.length > 25 ? `${cert.credentialId.slice(0, 25)}...` : cert.credentialId}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
