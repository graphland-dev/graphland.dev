import type { Metadata } from "next";

type BilingualSection = {
  titleEn: string;
  titleBn: string;
  english: string[];
  bangla: string[];
};

const refundSections: BilingualSection[] = [
  {
    titleEn: "Overview",
    titleBn: "সারসংক্ষেপ",
    english: [
      "At Graphland, we are committed to ensuring your satisfaction with our services. If you are not completely satisfied with the results of our work, we offer a return and refund policy as outlined below.",
    ],
    bangla: [
      "Graphland-এ আমরা আমাদের সেবায় আপনার সন্তুষ্টি নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ। আমাদের কাজের ফলাফলে আপনি সম্পূর্ণ সন্তুষ্ট না হলে, নিচে বর্ণিত শর্ত অনুযায়ী রিটার্ন ও রিফান্ড নীতি প্রযোজ্য।",
    ],
  },
  {
    titleEn: "Eligibility for Refunds",
    titleBn: "রিফান্ডের যোগ্যতা",
    english: [
      "To be eligible for a refund, you must have completed the project and received the final deliverables.",
      "You must have provided clear and specific feedback during the project.",
      "You must have communicated any issues or concerns within 14 days of receiving the final deliverables.",
    ],
    bangla: [
      "রিফান্ডের জন্য যোগ্য হতে হলে আপনাকে অবশ্যই প্রকল্প সম্পন্ন করে চূড়ান্ত ডেলিভারেবল গ্রহণ করতে হবে।",
      "প্রকল্প চলাকালীন স্পষ্ট ও নির্দিষ্ট মতামত প্রদান করতে হবে।",
      "চূড়ান্ত ডেলিভারেবল পাওয়ার ১৪ দিনের মধ্যে যেকোনো সমস্যা বা উদ্বেগ আমাদের জানাতে হবে।",
    ],
  },
  {
    titleEn: "Refund Process",
    titleBn: "রিফান্ড প্রক্রিয়া",
    english: [
      "If you believe you are eligible for a refund, please contact us at hello@graphland.dev. Include your project details, reason for the refund request, and any supporting documentation so we can review your case promptly.",
    ],
    bangla: [
      "আপনি যদি মনে করেন রিফান্ডের জন্য যোগ্য, তাহলে hello@graphland.dev-এ যোগাযোগ করুন। প্রকল্পের বিবরণ, রিফান্ডের কারণ এবং প্রয়োজনীয় সহায়ক নথি সংযুক্ত করুন যাতে আমরা দ্রুত আপনার বিষয়টি পর্যালোচনা করতে পারি।",
    ],
  },
  {
    titleEn: "Refund Timeline",
    titleBn: "রিফান্ড সময়সীমা",
    english: [
      "Once your refund claim has been submitted and approved, please allow a standard processing time of 7 to 10 working days for the refund to be completed. The refund will be issued to the original payment method used during the transaction.",
      "Depending on your bank or payment provider, it may take additional time for the refunded amount to appear in your account.",
    ],
    bangla: [
      "আপনার রিফান্ড দাবি জমা ও অনুমোদনের পর, রিফান্ড সম্পন্ন হতে মানক প্রক্রিয়াকরণ সময় ৭ থেকে ১০ কর্মদিবস অনুগ্রহ করে অপেক্ষা করুন। লেনদেনের সময় ব্যবহৃত মূল পেমেন্ট পদ্ধতিতেই রিফান্ড প্রদান করা হবে।",
      "আপনার ব্যাংক বা পেমেন্ট প্রদানকারীর ওপর নির্ভর করে রিফান্ডকৃত অর্থ আপনার অ্যাকাউন্টে প্রদর্শিত হতে অতিরিক্ত সময় লাগতে পারে।",
    ],
  },
  {
    titleEn: "Non-Refundable Items",
    titleBn: "অ-রিফান্ডযোগ্য বিষয়",
    english: [
      "Services that have been fully delivered and approved by the client.",
      "Any custom-developed solutions, source code, or design assets that have been handed over to the client.",
      "Subscription-based services that have already been used during the billing period.",
      "Third-party tools, plugins, licenses, or services purchased on behalf of the client.",
    ],
    bangla: [
      "ক্লায়েন্ট কর্তৃক সম্পূর্ণ ডেলিভারি ও অনুমোদিত সেবা।",
      "কাস্টম-ডেভেলপড সমাধান, সোর্স কোড বা ডিজাইন অ্যাসেট যা ক্লায়েন্টের কাছে হস্তান্তর করা হয়েছে।",
      "বিলিং সময়কালে ইতিমধ্যে ব্যবহৃত সাবস্ক্রিপশন-ভিত্তিক সেবা।",
      "ক্লায়েন্টের পক্ষে ক্রয়কৃত তৃতীয় পক্ষের টুল, প্লাগইন, লাইসেন্স বা সেবা।",
    ],
  },
  {
    titleEn: "Cancellation Policy",
    titleBn: "বাতিলকরণ নীতি",
    english: [
      "Graphland does not offer a cancellation policy for any of its services or products. Once a project has been initiated, work has commenced, or a service agreement has been signed, the engagement is considered final and cannot be cancelled.",
      "All sales are therefore treated as final sales, and refunds (where applicable) are governed solely by the eligibility criteria and process described in this Return and Refund Policy.",
      "If you have questions or concerns before starting a project, please contact us at hello@graphland.dev and our team will be happy to assist you.",
    ],
    bangla: [
      "Graphland তার কোনো সেবা বা পণ্যের জন্য বাতিলকরণ নীতি প্রদান করে না। প্রকল্প শুরু হয়ে গেলে, কাজ শুরু হলে বা সেবা চুক্তি স্বাক্ষরিত হলে, চুক্তিটি চূড়ান্ত বলে গণ্য হয় এবং বাতিল করা যায় না।",
      "সুতরাং সকল বিক্রয় চূড়ান্ত বিক্রয় হিসেবে বিবেচিত হয়, এবং প্রযোজ্য ক্ষেত্রে রিফান্ড শুধুমাত্র এই রিটার্ন ও রিফান্ড নীতিতে বর্ণিত যোগ্যতা ও প্রক্রিয়া অনুযায়ী পরিচালিত হয়।",
      "প্রকল্প শুরুর আগে প্রশ্ন বা উদ্বেগ থাকলে hello@graphland.dev-এ যোগাযোগ করুন; আমাদের টিম সাহায্য করতে প্রস্তুত।",
    ],
  },
  {
    titleEn: "Contact Us",
    titleBn: "যোগাযোগ",
    english: [
      "If you have any questions about this Return and Refund Policy, please reach out to us at hello@graphland.dev.",
    ],
    bangla: [
      "এই রিটার্ন ও রিফান্ড নীতি সম্পর্কে কোনো প্রশ্ন থাকলে hello@graphland.dev-এ যোগাযোগ করুন।",
    ],
  },
];

const SectionBlock = ({
  titleEn,
  titleBn,
  english,
  bangla,
}: BilingualSection) => (
  <div className="p-6 lg:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-6">
    <div>
      <h3 className="text-xl font-semibold text-neutral-100">{titleEn}</h3>
      <p className="text-neutral-400">{titleBn}</p>
    </div>
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">
          English
        </p>
        <div className="space-y-3 text-neutral-300">
          {english.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">
          বাংলা
        </p>
        <div className="space-y-3 text-neutral-300">
          {bangla.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const metadata: Metadata = {
  title: "Return and Refund Policy | Graphland",
  description:
    "Graphland's bilingual (English & Bangla) return and refund policy, including the 7–10 working day refund timeline.",
};

export default function RefundPolicy() {
  return (
    <div className="bg-neutral-950 text-neutral-100">
      <section className="pt-32 pb-16 border-b border-neutral-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
            Legal · বৈধতা
          </p>
          <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
            Return and Refund Policy
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-neutral-400">
            <span>Last updated: June 8, 2026</span>
            <span className="hidden sm:block text-neutral-700">•</span>
            <span>Contact: hello@graphland.dev</span>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-12">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-primary">
              Return & Refund · রিটার্ন ও রিফান্ড
            </p>
            <h2 className="text-2xl lg:text-3xl font-semibold">
              Our commitment to fair refunds and clear timelines
            </h2>
            <p className="text-neutral-400">
              The clauses below apply to all services and products purchased
              through graphland.dev and our official payment channels.
            </p>
          </div>

          <div className="space-y-6">
            {refundSections.map((section) => (
              <SectionBlock key={section.titleEn} {...section} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
