import Image from "next/image";
import Link from "next/link";
import employees from "@/app/emp/data.json";

type EmployeeRecord = {
  employee_id: string;
  name: string;
  department: string;
  designation: string;
  photo?: string;
};

const managementMembers: { id: string; designation: string }[] = [
  { id: "GL-25-BDE-001", designation: "CEO" },
  { id: "GL-21-EXC-001", designation: "CTO & Founder" },
];

export default function ManagementTeam() {
  const members = managementMembers
    .map(({ id, designation }) => {
      const employee = (employees as Record<string, EmployeeRecord>)[id];
      if (!employee) return null;
      return { ...employee, designation };
    })
    .filter(Boolean) as (EmployeeRecord & { designation: string })[];

  return (
    <section className="py-20 lg:py-32 bg-neutral-900/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-primary">
            Leadership
          </p>
          <h2 className="text-2xl lg:text-4xl font-bold text-neutral-100">
            Management Team
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            The leaders behind Graphland — driving strategy, technology, and
            client success.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {members.map((member) => (
            <Link
              key={member.employee_id}
              href={`/emp/${member.employee_id}`}
              className="group relative block aspect-[4/5] rounded-2xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-colors"
            >
              {member.photo ? (
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 400px"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-800 text-neutral-500">
                  No photo
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-xl font-semibold text-neutral-100">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-medium mt-1">
                  {member.designation}
                </p>
                <p className="text-neutral-500 text-xs mt-2">
                  {member.department}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
