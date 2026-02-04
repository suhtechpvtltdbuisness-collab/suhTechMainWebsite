
import connectDB from '@/lib/mongodb';
import Blog from '@/models/Blog';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();

    // DELETE EXISTING BLOGS TO START FRESH as per user request
    await Blog.deleteMany({});

    const blogs = [
      {
        title: "How to Stand Up a CI/CD Pipeline in 14 Days",
        slug: "how-to-stand-up-a-cicd-pipeline-in-14-days",
        category: "DevOps",
        excerpt: "Learn the step-by-step process of setting up a robust CI/CD pipeline for your development team, ensuring faster and more reliable deployments.",
        content: `
<h2>CI/CD isn’t tooling. It’s operational discipline.</h2>

<p>
For growing engineering teams, <strong>slow releases</strong>, <strong>broken builds</strong>,
and <strong>manual deployments</strong> quietly kill momentum.
</p>

<p>
This <strong>14-day roadmap</strong> helps you move from ad-hoc releases to a
<strong>reliable, automated delivery system</strong>—without disrupting ongoing development.
</p>

<p>
Think of it as <strong>delivery infrastructure</strong> you build once and benefit from every single release.
</p>

<h3>Delivery First: Ship with Confidence from Day One</h3>
<p><em>Fast teams don’t deploy bravely—they deploy safely.</em></p>

<ul>
  <li><strong>Reduce deployment failures</strong></li>
  <li><strong>Accelerate release cycles</strong></li>
  <li><strong>Improve code quality & reliability</strong></li>
  <li><strong>Build confidence</strong> across engineering & product</li>
</ul>

<h3>Days 1–2: Assess the Current State (Non-Negotiable)</h3>
<p><strong>You can’t automate chaos.</strong></p>

<p>
Before tools or pipelines, clarity is mandatory.
Audit your current codebase, branching strategy, and deployment flow.
Identify where manual steps, approvals, or failures occur.
</p>

<p>
Document environments (<strong>dev, staging, production</strong>),
infrastructure ownership, and release responsibilities.
</p>

<p>
Define what <strong>“done”</strong> means for a deployment:
successful build, passing tests, artifact creation, and safe rollout.
</p>

<p>
Choose a <strong>single CI/CD platform</strong> early
(GitHub Actions, GitLab CI, Bitbucket Pipelines, Jenkins)
to avoid fragmentation.
</p>

<p><strong>A clear baseline prevents rework later.</strong></p>

<h3>Days 3–4: Version Control & Branching Strategy</h3>
<p><strong>CI/CD starts with how code flows.</strong></p>
<p><strong>Bad branching breaks good pipelines.</strong></p>

<ul>
  <li>Standardize on <strong>trunk-based development</strong> or short-lived feature branches</li>
  <li>Protect main branches with required checks, reviews, and status gates</li>
  <li>Enforce consistent commit conventions and meaningful pull requests</li>
  <li>Automate linting and static analysis at the PR level</li>
</ul>

<p><strong>Clean version control habits are the backbone of automation.</strong></p>

<h3>Days 5–6: Build Automation & Dependency Management</h3>
<p><strong>If builds aren’t repeatable, deployments won’t be either.</strong></p>

<ul>
  <li>Create deterministic build scripts that run locally and in CI</li>
  <li>Lock dependency versions and cache them to reduce build time</li>
  <li>Generate build artifacts once and promote across environments</li>
  <li>Fail fast on build errors</li>
</ul>

<p><strong>A reliable build is non-negotiable.</strong></p>

<h3>Days 7–8: Test Integration & Quality Gates</h3>
<p><strong>Speed without safety is recklessness.</strong></p>

<ul>
  <li>Integrate unit tests into every pipeline run</li>
  <li>Add integration or API tests for critical workflows</li>
  <li>Set minimum coverage thresholds and block failing merges</li>
  <li>Surface test results and logs directly in CI output</li>
</ul>

<p><strong>Good pipelines stop bad code automatically.</strong></p>

<h3>Days 9–10: Deployment Automation</h3>
<p><strong>Manual deployments don’t scale.</strong></p>

<ul>
  <li>Script deployments using infrastructure-as-code or platform tools</li>
  <li>Enable environment-specific configuration</li>
  <li>Implement blue-green or rolling deployments</li>
  <li>Add automated rollback mechanisms</li>
</ul>

<p><strong>Production should never depend on memory or heroics.</strong></p>

<h3>Days 11–12: Secrets, Security & Access Control</h3>
<p><strong>CI/CD pipelines are high-value targets.</strong></p>

<ul>
  <li>Store secrets in secure vaults or CI-native secret managers</li>
  <li>Apply least-privilege access controls</li>
  <li>Scan dependencies and container images for vulnerabilities</li>
  <li>Audit pipeline logs and access regularly</li>
</ul>

<p><strong>A fast pipeline is useless if it’s not secure.</strong></p>

<h3>Days 13–14: Monitoring, Alerts & Team Enablement</h3>
<p><strong>CI/CD succeeds only when teams trust it.</strong></p>

<ul>
  <li>Track build time, failure rate, and deployment frequency</li>
  <li>Set alerts for failed builds and rollbacks</li>
  <li>Document the pipeline clearly</li>
  <li>Run a controlled end-to-end release</li>
</ul>

<p><strong>Your pipeline should be boring—and that’s a win.</strong></p>

<h3>Bonus Hardening Tips (Often Overlooked)</h3>

<ul>
  <li>Keep pipelines small, fast, and composable</li>
  <li>Run CI jobs in parallel</li>
  <li>Tag and version artifacts for traceability</li>
  <li>Prune stale branches, jobs, and credentials</li>
  <li>Review pipelines as production code</li>
</ul>

<p>
<strong>
CI/CD isn’t about shipping faster—it’s about shipping smarter.
When automation, quality, and visibility align, releases become routine.
</strong>
</p>
            `,
        imageUrl: "/images/Deployment.png",
        isPublished: true,
        author: "DevOps Team",
        readTime: "8 min read"
      },
      {
        title: "AI Product Roadmaps: From POC to Production",
        slug: "ai-product-roadmaps-from-poc-to-production",
        category: "AI & Automation",
        excerpt: "Navigating the journey of building AI products from the initial Proof of Concept to a full-scale production environment.",
        content: `
<h2>The AI Journey</h2>
<p>Moving from a Proof of Concept (POC) to production is a challenging phase for many AI projects. This guide outlines the key considerations for a successful transition.</p>
<h3>Validating the POC</h3>
<p>Ensure your POC addresses a real user need and that the model performs well on representative data.</p>
<h3>Scalability</h3>
<p>Production environments require robust infrastructure. Consider using Kubernetes for container orchestration and scaling.</p>
<h3>Monitoring and Maintenance</h3>
<p>AI models can drift over time. Implement monitoring to track performance and retrain models as necessary.</p>
            `,
        imageUrl: "/images/Innovation.png",
        isPublished: true,
        author: "AI Research Team",
        readTime: "6 min read"
      },
      {
        title: "Technical SEO Checklist for Next.js & Headless CMS",
        slug: "technical-seo-checklist-for-nextjs-headless-cms",
        category: "SEO & Growth",
        excerpt: "Maximize your website's visibility with this comprehensive technical SEO checklist specifically designed for Next.js applications.",
        content: `
<h2>Optimizing Next.js for SEO</h2>
// <p>Next.js offers excellent SEO capabilitir.</p>
<h3>Server-Side Rendering (SSR)</h3>
<p>Leverage SSR to ensure search engines can crawl your content effectively.</p>
<h3>Meta Tags and Open Graph</h3>
<p>Dynamically generate meta tags for each page to improve click-through rates on social media and search results.</p>
<h3>Sitemap and Robots.txt</h3>
<p>Don't forget to generate a dynamic sitemap and configure your robots.txt file to guide crawlers.</p>
             `,
        imageUrl: "/images/Rectangle_Web_Development.svg",
        isPublished: true,
        author: "SEO Specialist",
        readTime: "9 min read"
      },
      {
        title: "Security Hardening Playbook for SaaS Startups",
        slug: "security-hardening-playbook-for-saas-startups",
        category: "Cybersecurity",
        excerpt: "Essential security practices for SaaS startups to protect customer data and build trust from day one.",
        content: `
<h2>Security First</h2>
<p>For SaaS startups, security is not just a feature; it's a requirement. Here is a playbook to harden your security posture.</p>
<h3>Identity and Access Management (IAM)</h3>
<p>Implement strict IAM policies. Use Multi-Factor Authentication (MFA) for all critical accounts.</p>
<h3>Data Encryption</h3>
<p>Encrypt data both in transit and at rest. Use industry-standard protocols like TLS and AES.</p>
<h3>Regular Audits</h3>
<p>Conduct regular security audits and penetration testing to identify and fix vulnerabilities.</p>
            `,
        imageUrl: "/images/Testing.png",
        isPublished: true,
        author: "Security Team",
        readTime: "7 min read"
      }
    ];

    await Blog.insertMany(blogs);
    return NextResponse.json({ message: 'Cleared old blogs and seeded 4 new blogs successfully', success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
