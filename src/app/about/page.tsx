import { Highlighter } from "@/components/magicui/highlighter";
import { Button } from "@/components/ui/button";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import ScheduleButton from "@/components/ScheduleButton";
import CurvedLoop from "@/components/ui/CurvedLoop";
import {
  Users,
  Target,
  Heart,
  BookOpen,
  Share2,
  Coffee,
  Award,
  Building,
  TrendingUp,
  Star,
} from "lucide-react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import ManagementTeam from "./_components/ManagementTeam";

export default function AboutPage() {
  return (
    <div className="bg-neutral-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-32">
        <BackgroundRippleEffect />

        <WavyBackground className="max-w-4xl mx-auto pb-40">
          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
            <div className="space-y-8">
              <h1 className="text-3xl lg:text-5xl font-bold text-neutral-100 leading-relaxed">
                Building Tomorrow&rsquo;s{" "}
                <Highlighter action="highlight" color="var(--primary)">
                  <span className="text-black">Digital</span>
                </Highlighter>{" "}
                Frontier
              </h1>

              <p className="text-xl md:text-2xl text-neutral-400 max-w-4xl mx-auto leading-relaxed">
                We&rsquo;re passionate developers and designers committed to
                revolutionizing how businesses harness technology through custom
                software solutions.
              </p>
            </div>
          </div>
        </WavyBackground>
      </section>

      {/* Mission Statement */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Mission content */}
            <div className="space-y-8">
              <h2 className="text-2xl lg:text-4xl font-bold text-neutral-100">
                Our Mission
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-neutral-300 leading-relaxed">
                  At Graphland, we believe in delivering custom software
                  solutions that deeply understand and solve our clients&rsquo;
                  unique challenges.
                </p>
                <p className="text-lg text-neutral-300 leading-relaxed">
                  Our commitment to excellence drives us to create innovative,
                  scalable, and impactful digital experiences that transform
                  businesses and empower growth.
                </p>
                <p className="text-lg text-neutral-300 leading-relaxed">
                  We don&rsquo;t just build software – we craft digital
                  solutions that become integral parts of our clients&rsquo;
                  success stories.
                </p>
              </div>

              <div className="pt-4">
                <ScheduleButton />
              </div>
            </div>

            {/* Right side - Visual elements */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/20">
                    <Target className="w-8 h-8 text-blue-400 mb-3" />
                    <h3 className="font-semibold text-neutral-100 mb-2">
                      Precision
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Every detail matters in our development process
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/20">
                    <TrendingUp className="w-8 h-8 text-green-400 mb-3" />
                    <h3 className="font-semibold text-neutral-100 mb-2">
                      Growth
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Solutions that scale with your success
                    </p>
                  </div>
                </div>
                <div className="space-y-6 mt-8">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/20">
                    <Building className="w-8 h-8 text-purple-400 mb-3" />
                    <h3 className="font-semibold text-neutral-100 mb-2">
                      Partnership
                    </h3>
                    <p className="text-sm text-neutral-400">
                      We become an extension of your team
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/20">
                    <Star className="w-8 h-8 text-orange-400 mb-3" />
                    <h3 className="font-semibold text-neutral-100 mb-2">
                      Excellence
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Quality that exceeds expectations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 lg:py-32 bg-neutral-900/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-4xl font-bold text-neutral-100 text-center mb-16">
            Our Impact
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-3xl lg:text-5xl font-bold text-white">
                50+
              </div>
              <div className="text-neutral-400">Satisfied Clients</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl lg:text-5xl font-bold text-white">
                100+
              </div>
              <div className="text-neutral-400">Projects Delivered</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl lg:text-5xl font-bold text-white">
                99%
              </div>
              <div className="text-neutral-400">Client Satisfaction</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl lg:text-5xl font-bold text-white">
                3+
              </div>
              <div className="text-neutral-400">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-4xl font-bold text-neutral-100 text-center mb-16">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 relative rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <Award className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold text-neutral-100 mb-2">
                Be World-Class
              </h3>
              <p className="text-neutral-400">
                We strive for excellence in every project, setting global
                standards for quality and innovation.
              </p>
            </div>

            <div className="relative p-8 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <Users className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-neutral-100 mb-2">
                Take Responsibility
              </h3>
              <p className="text-neutral-400">
                We own our decisions and deliverables, ensuring accountability
                at every level.
              </p>
            </div>

            <div className="relative p-8 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <Heart className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-neutral-100 mb-2">
                Be Supportive
              </h3>
              <p className="text-neutral-400">
                We believe in lifting each other up and creating an environment
                where everyone thrives.
              </p>
            </div>

            <div className="p-8 relative rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <BookOpen className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-neutral-100 mb-2">
                Always Learning
              </h3>
              <p className="text-neutral-400">
                We embrace continuous improvement and stay ahead of
                technological advancements.
              </p>
            </div>
            <div className="p-8 relative rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <Share2 className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-neutral-100 mb-2">
                Share Knowledge
              </h3>
              <p className="text-neutral-400">
                We believe in open collaboration and sharing insights to benefit
                the entire community.
              </p>
            </div>
            <div className="p-8 relative rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <Coffee className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-neutral-100 mb-2">
                Enjoy Downtime
              </h3>
              <p className="text-neutral-400">
                We value work-life balance and believe that rest fuels
                creativity and productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ManagementTeam />

      {/* Milestones */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-4xl font-bold text-neutral-100 text-center mb-16">
            Our Journey
          </h2>

          <div className="space-y-8">
            <div className="flex items-start gap-6 p-6 rounded-xl bg-neutral-800/50">
              <div className="text-2xl font-bold text-primary">2023</div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-100 mb-2">
                  Foundation & First Clients
                </h3>
                <p className="text-neutral-400">
                  Established Graphland with a vision to deliver exceptional
                  custom solutions, securing our first enterprise clients.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 rounded-xl bg-neutral-800/50">
              <div className="text-2xl font-bold text-primary">2024</div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-100 mb-2">
                  Scaling & Innovation
                </h3>
                <p className="text-neutral-400">
                  Expanded our team and technology stack, delivering
                  cutting-edge solutions across web, mobile, and desktop
                  platforms.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 rounded-xl bg-neutral-800/50">
              <div className="text-2xl font-bold text-primary">2025</div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-100 mb-2">
                  Global Recognition
                </h3>
                <p className="text-neutral-400">
                  Making waves on the world stage with innovative projects and
                  establishing partnerships with international clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-4xl font-bold text-neutral-100 text-center mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-neutral-900/50 border border-neutral-800">
              <h3 className="text-lg font-semibold text-neutral-100 mb-2">
                What makes Graphland different?
              </h3>
              <p className="text-neutral-400">
                We focus on deeply understanding your business challenges and
                crafting custom solutions that scale with your growth. Our
                commitment to quality and innovation sets us apart in the
                industry.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-neutral-900/50 border border-neutral-800">
              <h3 className="text-lg font-semibold text-neutral-100 mb-2">
                How do you ensure project success?
              </h3>
              <p className="text-neutral-400">
                We follow agile methodologies with regular client communication,
                thorough testing, and iterative development. Our experienced
                team ensures every project meets the highest standards of
                quality and performance.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-neutral-900/50 border border-neutral-800">
              <h3 className="text-lg font-semibold text-neutral-100 mb-2">
                What technologies do you work with?
              </h3>
              <p className="text-neutral-400">
                We leverage modern technologies including React, Next.js,
                Node.js, Python, mobile frameworks, and cloud platforms to
                deliver robust, scalable solutions tailored to your specific
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-neutral-900/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-neutral-100 mb-8">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg text-neutral-400 mb-12 max-w-2xl mx-auto">
            Let&rsquo;s discuss your project and explore how we can bring your
            vision to life with our custom solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ScheduleButton />
            <Button variant="secondary">View Our Work</Button>
          </div>
        </div>
      </section>

      <CurvedLoop
        marqueeText="Innovation Through Collaboration ✦  Innovation Through Collaboration ✦  Innovation Through Collaboration"
        speed={1}
        curveAmount={100}
        direction="right"
        interactive={true}
      />
    </div>
  );
}
