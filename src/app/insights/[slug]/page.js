import connectDB from '@/lib/mongodb';
import Blog from '@/models/Blog';
import { notFound } from "next/navigation";
import FooterSection from "../../components/FooterSection";
import NavBar from "../../components/NavBar";
import AnimatedContent from './AnimatedContent';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  await connectDB();
  const blog = await Blog.findOne({ slug, isPublished: true });

  if (!blog) {
    return {
      title: 'Insight Not Found | SUH Tech',
      description: 'The requested insight could not be found.',
    };
  }

  return {
    title: `${blog.title} | SUH Tech Insights`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [blog.imageUrl || '/images/og-default.png']
    }
  };
}

export default async function InsightDetailPage({ params }) {
  const { slug } = await params;
  await connectDB();

  // Convert Mongoose document to plain object to avoid serialization errors with Client Components
  const blogDoc = await Blog.findOne({ slug, isPublished: true }).lean();

  if (!blogDoc) notFound();

  // Handle _id serialization manually if needed, or rely on lean() which returns string _id generally if configured,
  // but lean() returns Object ID. We must convert it.
  const blog = {
    ...blogDoc,
    _id: blogDoc._id.toString(),
    createdAt: blogDoc.createdAt?.toISOString(),
    updatedAt: blogDoc.updatedAt?.toISOString(),
    publishedAt: blogDoc.publishedAt?.toISOString(),
  };

  const formattedDate = new Date(blog.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans">
      <NavBar />
      <AnimatedContent blog={blog} formattedDate={formattedDate} />
      <FooterSection />
    </main>
  );
}
