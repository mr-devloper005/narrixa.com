import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/shared/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/site-config";

const pressReleases = [
  {
    id: 1,
    title: "Pressly Announces Revolutionary AI-Powered Press Wire Distribution Platform",
    excerpt: "Leading PR technology company unveils next-generation distribution platform that leverages artificial intelligence to optimize Press Wire reach and engagement across global media networks.",
    category: "Company Update",
    date: "2 hours ago",
    image: "https://img.magnific.com/free-photo/long-shot-business-people-meeting_23-2148427153.jpg",
    slug: "pressly-announces-ai-powered-distribution-platform"
  },
  {
    id: 2,
    title: "New Features Enhance User Experience Across All Platforms",
    excerpt: "Latest update introduces intuitive dashboard improvements, advanced analytics, and seamless integration capabilities for better campaign management.",
    category: "Product Launch",
    date: "1 day ago",
    image: "https://img.magnific.com/free-photo/business-people-working-together-office_23-2148427153.jpg",
    slug: "new-features-enhance-user-experience"
  },
  {
    id: 3,
    title: "Strategic Alliance with Global Media Network Announced",
    excerpt: "Partnership expands distribution reach to over 2,500 media outlets worldwide, providing clients with unprecedented access to global journalism networks.",
    category: "Partnership",
    date: "3 days ago",
    image: "https://img.magnific.com/free-photo/business-handshake-meeting-partnership_23-2148427153.jpg",
    slug: "strategic-alliance-global-media-network"
  },
  {
    id: 4,
    title: "Recognized as Top PR Technology Platform of 2024",
    excerpt: "Industry awards highlight Pressly's innovation in Press Wire distribution, customer satisfaction, and technological advancement.",
    category: "Award",
    date: "1 week ago",
    image: "https://img.magnific.com/free-photo/award-ceremony-business-success_23-2148427153.jpg",
    slug: "recognized-as-top-pr-technology-platform-2024"
  },
  {
    id: 5,
    title: "Expansion into European Markets with Local Language Support",
    excerpt: "New multilingual capabilities enable distribution in 15 languages, serving growing demand across European markets.",
    category: "Expansion",
    date: "2 weeks ago",
    image: "https://img.magnific.com/free-photo/european-business-meeting-international_23-2148427153.jpg",
    slug: "expansion-european-markets-multilingual-support"
  },
  {
    id: 6,
    title: "Record-Breaking Quarter: 50,000+ Press Wires Distributed",
    excerpt: "Milestone achievement demonstrates platform's growing influence and reliability in the PR industry.",
    category: "Milestone",
    date: "3 weeks ago",
    image: "https://img.magnific.com/free-photo/business-growth-success-metrics_23-2148427153.jpg",
    slug: "record-breaking-quarter-press-releases-distributed"
  }
];

export default function NewsroomPage() {
  return (
    <PageShell
      title="Newsroom"
      description={`Latest Press Wires and news from ${SITE_CONFIG.name}. Stay updated with our company announcements, product launches, and industry insights.`}
    >
      <div className="space-y-8">
        {/* Featured Press Wire */}
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Card className="border-purple-100 bg-white overflow-hidden">
              <div className="aspect-[16/9] relative">
                <img 
                  src={pressReleases[0].image}
                  alt={pressReleases[0].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/60"></div>
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="text-white">
                    <Badge className="bg-purple-100 text-purple-900 hover:bg-purple-200 mb-3">
                      {pressReleases[0].category}
                    </Badge>
                    <h1 className="text-3xl font-bold mb-3">{pressReleases[0].title}</h1>
                    <p className="text-lg opacity-90 mb-4">{pressReleases[0].excerpt}</p>
                    <div className="flex items-center gap-4">
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <Link 
                  href={`/newsroom/${pressReleases[0].slug}`}
                  className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                >
                  Read full Press Wire
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Card>
          </div>
          
          {/* Recent Releases Sidebar */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-purple-900">Recent Releases</h2>
            {pressReleases.slice(1, 4).map((release) => (
              <Card key={release.id} className="border-purple-100 bg-white hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 mb-2">
                    {release.category}
                  </Badge>
                  <h3 className="font-semibold text-purple-900 mb-2 line-clamp-2">{release.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{release.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <Link 
                      href={`/newsroom/${release.slug}`}
                      className="text-purple-600 text-sm font-semibold hover:text-purple-700"
                    >
                      Read more →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Press Wires Grid */}
        <div>
          <h2 className="text-2xl font-bold text-purple-900 mb-6">All Press Wires</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pressReleases.map((release) => (
              <Card key={release.id} className="border-purple-100 bg-white hover:shadow-lg transition-shadow">
                <div className="aspect-[16/9] relative">
                  <img 
                    src={release.image}
                    alt={release.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/60"></div>
                  <div className="absolute inset-0 flex items-end p-4">
                    <div className="text-white">
                      <Badge className="bg-purple-100 text-purple-900 hover:bg-purple-200 mb-2">
                        {release.category}
                      </Badge>
                      <h3 className="font-bold line-clamp-2">{release.title}</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{release.excerpt}</p>
                  <div className="flex items-center justify-end">
                    <Link 
                      href={`/newsroom/${release.slug}`}
                      className="text-purple-600 text-sm font-semibold hover:text-purple-700"
                    >
                      Read more →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
