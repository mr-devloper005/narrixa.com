import Link from "next/link";
import { PageShell } from "@/components/shared/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockTeamMembers } from "@/data/mock-data";
import { SITE_CONFIG } from "@/lib/site-config";

const highlights = [
  { label: "Press Wires distributed", value: "50k+" },
  { label: "Media outlets reached", value: "2,500+" },
  { label: "Companies served", value: "12k+" },
];

const values = [
  { title: "Strategic distribution", description: "We connect your stories with the right journalists and publications for maximum impact." },
  { title: "Targeted reach", description: "Our intelligent matching ensures your Press Wires reach the most relevant media contacts." },
  { title: "Measurable results", description: "Track your campaign performance with comprehensive analytics and coverage reports." },
];

export default function AboutPage() {
  return (
    <PageShell
      title={`About ${SITE_CONFIG.name}`}
      description={`${SITE_CONFIG.name} is a leading Press Wire distribution platform connecting businesses with media outlets worldwide.`}
      actions={
        <>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 font-semibold text-white transition-colors hover:bg-black/85"
          >
            Contact Us
          </Link>
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-purple-100 bg-white">
          <CardContent className="space-y-4 p-6">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">Our Story</Badge>
            <h2 className="text-2xl font-semibold text-purple-900">
              Empowering businesses to share their stories with the world.
            </h2>
            <p className="text-sm text-purple-600">
              {SITE_CONFIG.name} revolutionizes Press Wire distribution by connecting businesses with the right journalists and publications, ensuring your news reaches the audience that matters most.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-lg border border-purple-100 bg-purple-50 p-4">
                  <div className="text-2xl font-semibold text-purple-900">{item.value}</div>
                  <div className="text-xs text-purple-600">{item.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="space-y-4">
          {values.map((value) => (
            <Card key={value.title} className="border-purple-100 bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-purple-900">{value.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {mockTeamMembers.map((member) => (
          <Card key={member.id} className="border-purple-100 bg-white transition-transform hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="bg-purple-100 text-purple-700">{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-purple-900">{member.name}</p>
                  <p className="text-xs text-purple-600">{member.role}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-600">{member.bio}</p>
              <p className="mt-3 text-xs text-gray-500">{member.location}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
