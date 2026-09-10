"use client"

import { motion, MotionConfig } from "framer-motion"
import {
  fadeUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/components/home/animations"
import BlogPreview from "@/components/home/BlogPreview"
import FeaturedWebsites from "@/components/home/FeaturedWebsites"
import ProjectsPreview from "@/components/home/ProjectsPreview"
import QuickFacts from "@/components/home/QuickFacts"
import WorkPreview from "@/components/home/WorkPreview"
import { homeIntroConfig } from "@/data/content"
import { BlogPostProps, ProjectProps, WorkItemProps } from "@/lib/types"

interface HomeContentProps {
  blog: BlogPostProps[]
  work: WorkItemProps[]
  projects: ProjectProps[]
}

/**
 * This component renders the main content of the home page, including the introduction section,
 * quick facts, work experience preview, projects preview, and blog posts preview.
 * @param blog - An array of blog post data to display in the blog preview section.
 * @param work - An array of work experience data to display in the work preview section.
 * @param projects - An array of project data to display in the projects preview section.
 */
export default function HomeContent({ blog, work, projects }: HomeContentProps) {
  return (
    <MotionConfig reducedMotion="user">
      <section className="px-4 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] gap-10 lg:gap-16 items-start pt-32 sm:pt-24 pb-12 scroll-mt-24">
          {/* Intro Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUpVariants}
            viewport={{ once: true }}
            className="text-left"
          >
            <p className="mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400">
              Front-End Developer · Automation Builder
            </p>

            <h1 className="max-w-3xl text-4xl sm:text-6xl font-bold tracking-tight mb-6 text-gray-900 dark:text-gray-100">
              Hi, I&#39;m {homeIntroConfig.shortName || homeIntroConfig.name}{" "}
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                className="inline-block"
              >
                👋
              </motion.span>
            </h1>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainerVariants}
              viewport={{ once: true }}
              className="space-y-5 max-w-2xl"
            >
              {homeIntroConfig.introParagraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={staggerItemVariants}
                  className="text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-300"
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>

          <QuickFacts className="mt-2 lg:mt-16" />
        </div>

        <FeaturedWebsites />
        <WorkPreview work={work} />
        <ProjectsPreview projects={projects} />
        <BlogPreview blog={blog} />
      </section>
    </MotionConfig>
  )
}
