import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Globe, Mail, Phone, MapPin } from "lucide-react";
import { FiInstagram, FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";
import { portfolioData } from "@/data/portfolio-data";

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  twitter: FiTwitter,
  globe: Globe,
  instagram: FiInstagram,
};

export function HeroSection() {
  const { personal, socialLinks } = portfolioData;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold  mb-4">
              <span className="flex items-center gap-4">
                <span className="text-gray-900 dark:text-white">
                  Hi, I&apos;m
                </span>
                <span className="text-blue-600 dark:text-blue-400">
                  {personal.name}
                </span>
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              {personal.title}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
              {personal.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href={`mailto:${personal.email}`}>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
              </a>
              <a href={`tel:${personal.phone}`}>
                <Button variant="outline" size="lg">
                  <Phone className="mr-2 h-4 w-4" />
                  {personal.phone}
                </Button>
              </a>
            </div>

            <div className="flex justify-center lg:justify-start gap-4">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <Button key={link.name} variant="outline" size="icon" asChild>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="h-5 w-5" />
                      <span className="sr-only">{link.name}</span>
                    </a>
                  </Button>
                );
              })}
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2 mt-6 text-gray-600 dark:text-gray-400">
              <MapPin className="h-4 w-4" />
              <span>{personal.location}</span>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative">
              <div className="h-80 w-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
                <Image
                  src={personal.profileImage || "/placeholder.svg"}
                  alt={personal.name}
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg">
                <span className="text-2xl">👋</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
