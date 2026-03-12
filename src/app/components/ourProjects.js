'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const exampleImages = [
  '/images/Orga.png',
  '/images/Skillguru.png',
  '/images/Botbridge.png',
  '/images/Viraj.png',
];

const ourProjects = [
  {
    title: 'Orga – Employee & Operations Management System',
    subtitle:
      'Smart HR, Projects, Support & Finance — All in One Unified Platform',
    image: exampleImages[0],
    slug: 'orga-employee-management',
  },
  {
    title: 'SkillGuru – LMS Platform',
    subtitle: 'Empowering Continuous Learning & Skill Development',
    image: exampleImages[1],
    slug: 'skillguru-lms-platform',
  },
  {
    title: 'BotBridge – Support Automation Platform',
    subtitle: 'Smarter Customer Support with AI-Driven Chat & Ticketing',
    image: exampleImages[2],
    slug: 'botbridge-support-automation',
  },
  {
    title: 'Viraj Jewellers – Website Development (Client Project)',
    subtitle: 'Elegant Website for a Luxury Jewellery Brand',
    image: exampleImages[3],
    slug: 'viraj-jewellers-website',
  },
  {
    title: 'Dhanganga – Naye Soch Naya Kadam',
    subtitle:
      'One-stop destination for services from healthcare and IT to home maintenance, education, and more.',
    image: '/Dhanaganga.png',
    slug: 'dhanganga-naye-soch-naya-kadam',
  },

  {
    title: 'Shopify – Gifting & Hamper Store',
    subtitle:
      'Turn Your Special Moments into Cherished Memories — Curated gifts, hampers & personalised gifting experiences.',
    image: '/images/shopify.png',
    slug: 'moonbasik-gifting-store',
  },
  {
    title: 'BKBS TRUST - Serving Communities With Care',
    subtitle:
      'A social organization dedicated to supporting communities through healthcare, education, and welfare initiatives while helping people access health cards, financial assistance, essential services, and encouraging donations to improve community well-being.',
    image: '/images/bkbs.png',
    slug: 'bkbs-trust',
  },
];

const ScrollingMockup = ({ image, title }) => {
  return (
    <div
      className='relative w-full overflow-hidden border-[6px] border-black rounded-[24px] shadow-[0_25px_24.2px_14px_rgba(0,0,0,0.25)] bg-white dark:bg-gray-800'
      style={{ aspectRatio: '495 / 363' }}
    >
      <motion.div
        className='absolute top-0 left-0 w-full'
        initial={{ y: 0 }}
        whileHover={{ y: '-70%' }}
        transition={{ duration: 10, ease: 'linear' }}
      >
        <Image
          src={image}
          alt={title}
          width={495}
          height={3634}
          className='w-full h-auto object-top'
          priority
        />
      </motion.div>
    </div>
  );
};

export default function OurProjectsSection() {
  const router = useRouter();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className='py-16 lg:py-24'>
      <div className='container mx-auto'>
        {/* HEADER */}
        <motion.div
          className='text-center mb-12'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <p className='uppercase text-xs tracking-[0.4em] text-blue-500 dark:text-blue-400 mb-4'>
            Our Work
          </p>
          <h1 className='text-4xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent dark:from-blue-300 dark:to-purple-400'>
            Our Projects
          </h1>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
            A curated set of projects delivered across branding, SaaS,
            development and digital platforms.
          </p>
        </motion.div>

        {/* GRID */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-4'>
          {ourProjects.map((study, idx) => (
            <motion.article
              key={study.title + idx}
              className='rounded-2xl bg-white dark:bg-gray-900 shadow-md dark:shadow-none overflow-hidden cursor-pointer'
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              whileHover={{
                y: -6,
                boxShadow: '0 20px 40px rgba(15,23,42,0.08)',
              }}
              onClick={() => router.push(`/portfolio/${study.slug}`)}
            >
              <div className='p-4'>
                <ScrollingMockup image={study.image} title={study.title} />
              </div>

              <div className='p-6 bg-white dark:bg-gray-50/0'>
                <div className='text-xs text-gray-500 mb-2'>{study.year}</div>

                <h3
                  className='text-2xl font-semibold text-gray-900 dark:text-white leading-tight'
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {study.title}
                </h3>

                <p
                  className='mt-3 text-gray-600 dark:text-gray-300 text-sm'
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {study.subtitle}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
