import { ArrowLeft, Calendar, Clock, Share2, Bookmark } from "lucide-react";
import Link from "next/link";
import { PageShell } from "@/components/shared/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/site-config";

// Mock data - in a real app, this would come from a database or API
const pressReleaseData = {
  "pressly-announces-ai-powered-distribution-platform": {
    title: "Pressly Announces Revolutionary AI-Powered Press Release Distribution Platform",
    category: "Company Update",
    date: "December 15, 2024",
    author: "Pressly Communications Team",
    image: "https://img.magnific.com/free-photo/long-shot-business-people-meeting_23-2148427153.jpg",
    excerpt: "Leading PR technology company unveils next-generation distribution platform that leverages artificial intelligence to optimize press release reach and engagement across global media networks.",
    content: `
      <p>NEW YORK – Pressly, a leading press release distribution platform, today announced the launch of its revolutionary AI-powered distribution system that promises to transform how businesses connect with media outlets worldwide.</p>
      
      <p>The new platform utilizes advanced machine learning algorithms to analyze press release content and automatically identify the most relevant journalists, publications, and media contacts for maximum impact. This intelligent targeting system has shown to increase press release pickup rates by over 300% in beta testing.</p>
      
      <h3>Key Features of the AI-Powered Platform:</h3>
      <ul>
        <li><strong>Smart Targeting:</strong> AI analyzes content to match with the most relevant media contacts</li>
        <li><strong>Optimal Timing:</strong> Predictive analytics determine the best times to send releases for maximum visibility</li>
        <li><strong>Performance Tracking:</strong> Real-time analytics provide detailed insights into campaign performance</li>
        <li><strong>Global Reach:</strong> Access to over 2,500 media outlets across 50+ countries</li>
      </ul>
      
      <p>"We're fundamentally changing how press release distribution works," said Sarah Johnson, CEO of Pressly. "Our AI technology doesn't just send press releases – it ensures they reach the right people at the right time, dramatically increasing the chances of media pickup and coverage."</p>
      
      <p>The platform's development comes after two years of research and development, working with over 500 PR professionals and media organizations to refine the technology. Early adopters have reported significant improvements in their media outreach efforts.</p>
      
      <p>Pricing for the AI-powered platform starts at $299 per month for small businesses, with enterprise solutions available for larger organizations. A free trial is available for qualified companies.</p>
      
      <h3>About Pressly:</h3>
      <p>Pressly is a leading press release distribution platform that connects businesses with media outlets worldwide. Founded in 2020, the company has helped over 12,000 businesses distribute more than 50,000 press releases to global media networks.</p>
      
      <h3>Media Contact:</h3>
      <p>Publishing Desk<br />
      media@pressly.com<br />
      212-555-0123</p>
    `
  },
  "expansion-european-markets-multilingual-support": {
    title: "Expansion into European Markets with Local Language Support",
    category: "Expansion",
    date: "December 1, 2024",
    author: "Pressly Communications Team",
    image: "https://img.magnific.com/free-photo/european-business-meeting-international_23-2148427153.jpg",
    excerpt: "New multilingual capabilities enable distribution in 15 languages, serving growing demand across European markets.",
    content: `
      <p>LONDON – Pressly today announced its strategic expansion into European markets with the launch of comprehensive multilingual support, enabling businesses to distribute press releases in 15 different languages across the continent.</p>
      
      <p>The expansion marks a significant milestone in Pressly's global growth strategy, addressing the increasing demand for localized press release distribution in European markets. The new multilingual platform supports English, French, German, Spanish, Italian, Portuguese, Dutch, Swedish, Norwegian, Danish, Finnish, Polish, Czech, Hungarian, and Romanian.</p>
      
      <h3>European Market Expansion Highlights:</h3>
      <ul>
        <li><strong>15 Language Support:</strong> Full translation and distribution capabilities in major European languages</li>
        <li><strong>Local Media Networks:</strong> Partnerships with over 800 European media outlets</li>
        <li><strong>Regional Offices:</strong> New offices in London, Paris, and Berlin to support European clients</li>
        <li><strong>Local Expertise:</strong> Native language specialists for market-specific optimization</li>
      </ul>
      
      <p>"European markets represent a tremendous opportunity for businesses looking to expand their global reach," said Michael Chen, Head of International Operations at Pressly. "Our multilingual capabilities ensure that press releases are not just translated, but culturally adapted for maximum impact in each local market."</p>
      
      <p>The expansion includes partnerships with leading European media organizations including Le Monde, Frankfurter Allgemeine Zeitung, El País, and Corriere della Sera. Pressly's AI-powered targeting system now incorporates regional media preferences and consumption patterns.</p>
      
      <h3>Market Response:</h3>
      <p>Early adopters in European markets have reported exceptional results. German automotive company AutoTech saw a 450% increase in media pickup after using Pressly's German language distribution, while French luxury brand Maison reported 300% higher engagement with their localized press releases.</p>
      
      <h3>Future Plans:</h3>
      <p>Pressly plans to expand its European language support to include additional languages in 2025, with Greek, Turkish, and Baltic languages slated for the next phase of expansion. The company is also exploring partnerships with Eastern European media networks.</p>
      
      <h3>About Pressly:</h3>
      <p>Pressly is a leading press release distribution platform that connects businesses with media outlets worldwide. Founded in 2020, the company has helped over 12,000 businesses distribute more than 50,000 press releases to global media networks.</p>
      
      <h3>Media Contact:</h3>
      <p>European Press Desk<br />
      europe@pressly.com<br />
      +44-20-7123-4567</p>
    `
  },
  "new-features-enhance-user-experience": {
    title: "New Features Enhance User Experience Across All Platforms",
    category: "Product Launch",
    date: "December 14, 2024",
    author: "Pressly Product Team",
    image: "https://img.magnific.com/free-photo/business-people-working-together-office_23-2148427153.jpg",
    excerpt: "Latest update introduces intuitive dashboard improvements, advanced analytics, and seamless integration capabilities for better campaign management.",
    content: `
      <p>SAN FRANCISCO – Pressly today released a major platform update featuring significant enhancements to user experience, analytics capabilities, and integration options, designed to streamline press release campaign management for businesses of all sizes.</p>
      
      <p>The update, available immediately to all Pressly users, introduces a redesigned dashboard with improved navigation, real-time campaign tracking, and enhanced reporting features. These improvements come in response to user feedback from over 10,000 active campaigns.</p>
      
      <h3>Key New Features:</h3>
      <ul>
        <li><strong>Redesigned Dashboard:</strong> Intuitive interface with one-click campaign access</li>
        <li><strong>Real-time Analytics:</strong> Live tracking of press release performance and media pickup</li>
        <li><strong>Advanced Segmentation:</strong> Target specific journalist groups and media categories</li>
        <li><strong>Integration Hub:</strong> Connect with CRM systems and social media platforms</li>
        <li><strong>Mobile Optimization:</strong> Full-featured mobile app for on-the-go campaign management</li>
      </ul>
      
      <p>"We've listened carefully to our users and built features that directly address their needs," said Lisa Rodriguez, VP of Product at Pressly. "The new dashboard alone reduces campaign setup time by 60%, while our enhanced analytics provide insights that were previously impossible to track."</p>
      
      <h3>User Experience Improvements:</h3>
      <p>The redesigned dashboard features a clean, modern interface with drag-and-drop functionality, customizable widgets, and intelligent campaign suggestions. The system now learns from user behavior to provide personalized recommendations for optimal distribution timing and targeting.</p>
      
      <h3>Analytics Enhancements:</h3>
      <p>New analytics features include sentiment analysis of media coverage, geographic heat maps showing pickup distribution, and competitor comparison tools. Users can now track not just where their press releases are published, but also how they're performing relative to industry benchmarks.</p>
      
      <h3>Integration Capabilities:</h3>
      <p>The new Integration Hub supports connections with popular CRM systems including Salesforce, HubSpot, and Microsoft Dynamics. Social media integrations allow for automatic posting of press releases across multiple platforms with optimized timing and formatting.</p>
      
      <h3>Pricing and Availability:</h3>
      <p>All new features are included in existing Pressly subscriptions at no additional cost. The mobile app is available for both iOS and Android devices.</p>
      
      <h3>About Pressly:</h3>
      <p>Pressly is a leading press release distribution platform that connects businesses with media outlets worldwide. Founded in 2020, the company has helped over 12,000 businesses distribute more than 50,000 press releases to global media networks.</p>
      
      <h3>Media Contact:</h3>
      <p>Product Communications<br />
      product@pressly.com<br />
      415-555-0189</p>
    `
  },
  "strategic-alliance-global-media-network": {
    title: "Strategic Alliance with Global Media Network Announced",
    category: "Partnership",
    date: "December 12, 2024",
    author: "Pressly Communications Team",
    image: "https://img.magnific.com/free-photo/business-handshake-meeting-partnership_23-2148427153.jpg",
    excerpt: "Partnership expands distribution reach to over 2,500 media outlets worldwide, providing clients with unprecedented access to global journalism networks.",
    content: `
      <p>NEW YORK – Pressly today announced a strategic alliance with Global Media Network (GMN), one of the world's largest media distribution networks, significantly expanding Pressly's reach to over 2,500 media outlets across 75 countries.</p>
      
      <p>The multi-year partnership represents a major expansion of Pressly's distribution capabilities, providing clients with direct access to premium media outlets including major newspapers, television networks, radio stations, and digital publications worldwide.</p>
      
      <h3>Partnership Benefits:</h3>
      <ul>
        <li><strong>Expanded Reach:</strong> Access to 2,500+ media outlets across 75 countries</li>
        <li><strong>Premium Placement:</strong> Priority distribution to top-tier media organizations</li>
        <li><strong>Enhanced Analytics:</strong> Detailed reporting on global media pickup and engagement</li>
        <li><strong>24/7 Support:</strong> Round-the-clock assistance for international campaigns</li>
      </ul>
      
      <p>"This alliance transforms our ability to deliver global media coverage for our clients," said David Martinez, CEO of Pressly. "Through GMN's extensive network, we can now ensure that press releases reach the right journalists at the right time, anywhere in the world."</p>
      
      <h3>Global Media Network Integration:</h3>
      <p>The integration with GMN's network includes major publications such as The New York Times, The Guardian, Le Monde, The Wall Street Journal, and hundreds of regional and industry-specific outlets. The partnership also includes specialized networks for technology, healthcare, finance, and entertainment industries.</p>
      
      <h3>Technology Integration:</h3>
      <p>Pressly's AI-powered targeting system now incorporates GMN's proprietary journalist database, providing real-time updates on journalist preferences, beat coverage, and contact information. The combined system offers the most comprehensive media targeting solution available in the market.</p>
      
      <h3>Client Benefits:</h3>
      <p>Early testing of the integrated system has shown remarkable results. Technology clients report 400% higher pickup rates in tech publications, while healthcare companies see 350% increased coverage in medical journals and health media.</p>
      
      <h3>Future Expansion:</h3>
      <p>The partnership includes plans for joint development of new distribution technologies, including AI-powered content optimization for different regions and automated translation services for international campaigns.</p>
      
      <h3>About Pressly:</h3>
      <p>Pressly is a leading press release distribution platform that connects businesses with media outlets worldwide. Founded in 2020, the company has helped over 12,000 businesses distribute more than 50,000 press releases to global media networks.</p>
      
      <h3>Media Contact:</h3>
      <p>Partnership Communications<br />
      partnerships@pressly.com<br />
      212-555-0145</p>
    `
  },
  "recognized-as-top-pr-technology-platform-2024": {
    title: "Recognized as Top PR Technology Platform of 2024",
    category: "Award",
    date: "December 5, 2024",
    author: "Pressly Communications Team",
    image: "https://img.magnific.com/free-photo/award-ceremony-business-success_23-2148427153.jpg",
    excerpt: "Industry awards highlight Pressly's innovation in press release distribution, customer satisfaction, and technological advancement.",
    content: `
      <p>LOS ANGELES – Pressly was honored with three major industry awards at the 2024 PR Technology Awards, including "Best PR Distribution Platform," "Most Innovative Technology," and "Excellence in Customer Service."</p>
      
      <p>The awards, presented at the annual PR Tech Conference, recognize Pressly's outstanding contribution to the public relations industry through its AI-powered distribution platform and exceptional client service.</p>
      
      <h3>Award Categories:</h3>
      <ul>
        <li><strong>Best PR Distribution Platform:</strong> Recognition for superior distribution capabilities and media reach</li>
        <li><strong>Most Innovative Technology:</strong> Award for AI-powered targeting and analytics</li>
        <li><strong>Excellence in Customer Service:</strong> Honor for outstanding client support and satisfaction</li>
      </ul>
      
      <p>"These awards validate our commitment to innovation and excellence in serving our clients," said Sarah Johnson, CEO of Pressly. "We're proud to be recognized by our peers in the industry for the technology and service we provide to help businesses amplify their voice through strategic press release distribution."</p>
      
      <h3>Industry Recognition:</h3>
      <p>The awards were judged by a panel of industry experts including PR professionals, journalists, and technology analysts. Pressly was selected from among 50 nominated companies based on criteria including technological innovation, client satisfaction, market impact, and overall value proposition.</p>
      
      <h3>Client Testimonials:</h3>
      <p>"Pressly has transformed how we handle our press release distribution," said Jennifer Lee, Communications Director at TechCorp. "The AI-powered targeting ensures our news reaches the right journalists, and the analytics provide insights we never had before. This recognition is well-deserved."</p>
      
      <h3>Market Impact:</h3>
      <p>Since its launch in 2020, Pressly has experienced rapid growth, now serving over 12,000 clients worldwide and distributing more than 50,000 press releases annually. The platform's success has been driven by its combination of advanced technology, comprehensive media networks, and exceptional customer service.</p>
      
      <h3>Future Developments:</h3>
      <p>Building on this success, Pressly plans to launch several new features in 2025, including enhanced video press release capabilities, advanced sentiment analysis, and expanded integration options with popular marketing and CRM platforms.</p>
      
      <h3>About Pressly:</h3>
      <p>Pressly is a leading press release distribution platform that connects businesses with media outlets worldwide. Founded in 2020, the company has helped over 12,000 businesses distribute more than 50,000 press releases to global media networks.</p>
      
      <h3>Media Contact:</h3>
      <p>Awards Communications<br />
      awards@pressly.com<br />
      310-555-0234</p>
    `
  },
  "record-breaking-quarter-press-releases-distributed": {
    title: "Record-Breaking Quarter: 50,000+ Press Releases Distributed",
    category: "Milestone",
    date: "November 28, 2024",
    author: "Pressly Communications Team",
    image: "https://img.magnific.com/free-photo/business-growth-success-metrics_23-2148427153.jpg",
    excerpt: "Milestone achievement demonstrates platform's growing influence and reliability in the PR industry.",
    content: `
      <p>CHICAGO – Pressly today announced a record-breaking quarter, with more than 50,000 press releases distributed through its platform between September and November 2024, representing a 75% increase over the same period last year.</p>
      
      <p>The milestone underscores Pressly's growing influence in the public relations industry and the increasing adoption of its AI-powered distribution platform by businesses worldwide.</p>
      
      <h3>Quarterly Highlights:</h3>
      <ul>
        <li><strong>50,000+ Press Releases:</strong> Record distribution volume</li>
        <li><strong>75% Growth:</strong> Year-over-year increase in distribution</li>
        <li><strong>2,500+ Media Outlets:</strong> Expanded media network reach</li>
        <li><strong>89% Pickup Rate:</strong> Average media pickup success rate</li>
      </ul>
      
      <p>"This achievement reflects the trust that businesses place in Pressly to deliver their news to the right audiences," said Michael Chen, Head of Operations at Pressly. "Our AI-powered targeting and extensive media network have proven to be a winning combination for our clients."</p>
      
      <h3>Industry Impact:</h3>
      <p>The record quarter included press releases for major corporate announcements, product launches, crisis communications, and thought leadership pieces. Industries showing the highest growth included technology (45% increase), healthcare (38% increase), and financial services (32% increase).</p>
      
      <h3>Geographic Distribution:</h3>
      <p>North America accounted for 45% of distributions, followed by Europe (30%), Asia-Pacific (15%), and other regions (10%). The company's recent expansion into European markets contributed significantly to the growth.</p>
      
      <h3>Technology Performance:</h3>
      <p>Pressly's AI-powered targeting system achieved a 92% accuracy rate in journalist matching, while the platform's analytics provided real-time insights that helped clients optimize their campaigns for better results.</p>
      
      <h3>Client Success Stories:</h3>
      <p>"Pressly has been instrumental in our growth strategy," said Amanda Roberts, VP of Communications at GlobalTech. "The platform's ability to target the right journalists has resulted in three times more media coverage compared to our previous distribution methods."</p>
      
      <h3>Future Outlook:</h3>
      <p>Based on current growth trends, Pressly projects distributing over 200,000 press releases in 2025, with continued expansion into new markets and the launch of enhanced features for video press releases and multimedia content.</p>
      
      <h3>About Pressly:</h3>
      <p>Pressly is a leading press release distribution platform that connects businesses with media outlets worldwide. Founded in 2020, the company has helped over 12,000 businesses distribute more than 50,000 press releases to global media networks.</p>
      
      <h3>Media Contact:</h3>
      <p>Metrics Communications<br />
      metrics@pressly.com<br />
      312-555-0167</p>
    `
  }
};

const pressReleaseSlugs = Object.keys(pressReleaseData) as Array<keyof typeof pressReleaseData>;

export function generateStaticParams() {
  return pressReleaseSlugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function PressReleasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pressRelease = pressReleaseData[slug as keyof typeof pressReleaseData];
  
  if (!pressRelease) {
    return (
      <PageShell title="Press Release Not Found">
        <div className="text-center py-12">
          <h1 className="text-3xl font-bold text-purple-900 mb-4">Press Release Not Found</h1>
          <p className="text-gray-600 mb-6">The press release you're looking for doesn't exist or has been removed.</p>
          <Link href="/newsroom" className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700">
            <ArrowLeft className="h-4 w-4" />
            Back to Newsroom
          </Link>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell title={pressRelease.title}>
      <div className="max-w-4xl mx-auto">
        {/* Back Navigation */}
        <Link 
          href="/newsroom" 
          className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Newsroom
        </Link>

        {/* Main Press Release Content */}
        <Card className="border-purple-100 bg-white overflow-hidden">
          {/* Hero Image */}
          <div className="aspect-[16/9] relative">
            <img 
              src={pressRelease.image}
              alt={pressRelease.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/60"></div>
            <div className="absolute inset-0 flex items-end p-8">
              <div className="text-white">
                <Badge className="bg-purple-100 text-purple-900 hover:bg-purple-200 mb-4">
                  {pressRelease.category}
                </Badge>
                <h1 className="text-4xl font-bold mb-4">{pressRelease.title}</h1>
                <div className="flex items-center gap-6">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {pressRelease.date}
                  </span>
                  <span>By {pressRelease.author}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Article Actions */}
          <div className="border-b border-purple-100 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50">
                  <Bookmark className="h-4 w-4 mr-2" />
                  Save
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                Published {pressRelease.date}
              </div>
            </div>
          </div>

          {/* Article Content */}
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-purple-900 font-semibold mb-6">{pressRelease.excerpt}</p>
              <div 
                dangerouslySetInnerHTML={{ __html: pressRelease.content }}
                className="text-gray-700 leading-relaxed"
              />
            </div>
          </CardContent>

          {/* Footer */}
          <div className="border-t border-purple-100 p-6 bg-purple-50">
            <div className="text-center">
              <p className="text-purple-900 font-semibold mb-2">About {SITE_CONFIG.name}</p>
              <p className="text-purple-600 text-sm max-w-2xl mx-auto">
                {SITE_CONFIG.name} is a leading press release distribution platform connecting businesses with media outlets worldwide. 
                Our innovative AI-powered technology ensures your news reaches the right audience at the right time.
              </p>
            </div>
          </div>
        </Card>

        {/* Related Press Releases */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-purple-900 mb-6">Related Press Releases</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-purple-100 bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 mb-3">
                  Product Launch
                </Badge>
                <h3 className="font-semibold text-purple-900 mb-2">
                  New Features Enhance User Experience Across All Platforms
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Latest update introduces intuitive dashboard improvements and advanced analytics...
                </p>
                <Link href="/newsroom/new-features-enhance-user-experience" className="text-purple-600 text-sm font-semibold hover:text-purple-700">
                  Read more →
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-purple-100 bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 mb-3">
                  Partnership
                </Badge>
                <h3 className="font-semibold text-purple-900 mb-2">
                  Strategic Alliance with Global Media Network Announced
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Partnership expands distribution reach to over 2,500 media outlets worldwide...
                </p>
                <Link href="/newsroom/strategic-alliance-global-media-network" className="text-purple-600 text-sm font-semibold hover:text-purple-700">
                  Read more →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
