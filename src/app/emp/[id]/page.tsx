import { IconIdOff, IconRosetteDiscountCheckFilled } from "@tabler/icons-react";
import Image from "next/image";
import employees from "../data.json";
type EmployeeRecord = {
  employee_id: string;
  name: string;
  designation: string;
  photo?: string;
};

type PageParams = { id?: string };

export default async function EmployeeVerifyPage({
  params,
}: {
  params: PageParams | Promise<PageParams>;
}) {
  const resolvedParams = await Promise.resolve(params);
  const id = resolvedParams?.id ?? "";
  const key = typeof id === "string" ? id.trim() : "";
  const employee = (employees as Record<string, EmployeeRecord | undefined>)[
    key
  ];
  const notFound = !employee;

  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-2xl items-center justify-center px-4 py-10">
      <div className="w-full rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur">
        <div className="text-center">
          <div className="text-sm text-white/60">
            Graphland Employee Verification
          </div>
          <div className="mt-2 text-xl font-semibold tracking-tight text-white">
            {notFound
              ? "Employee not found"
              : "This employee is a verified member of Graphland"}
          </div>
          <div
            className={[
              "mx-auto mt-3 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
              notFound
                ? "bg-red-500/15 text-red-200"
                : "bg-emerald-500/15 text-emerald-200",
            ].join(" ")}
          >
            {!notFound ? (
              <IconRosetteDiscountCheckFilled className="mr-1.5 h-4 w-4" />
            ) : null}
            {notFound ? "NOT VERIFIED" : "VERIFIED"}
          </div>
        </div>

        {notFound ? (
          <div className="mt-10 flex flex-col items-center text-center">
            <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-red-100">
              <IconIdOff className="h-10 w-10" />
            </div>

            <div className="mt-5 text-sm text-white/70">
              Invalid / unknown employee id
            </div>
            <div className="mt-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 font-mono text-base text-white/90">
              {key || "(missing id)"}
            </div>
          </div>
        ) : (
          <div className="mt-8 flex flex-col items-center text-center">
            <div className="mt-2 size-28 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              {employee.photo ? (
                <Image
                  src={employee.photo}
                  alt={employee.name}
                  width={112}
                  height={112}
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-xs text-white/50">
                  No photo
                </div>
              )}
            </div>

            <div className="mt-5 max-w-full">
              <div className="text-2xl font-semibold tracking-tight text-white">
                {employee.name}
              </div>
              <div className="mt-1 text-sm text-white/70">
                {employee.designation}
              </div>

              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <div className="text-xs uppercase tracking-wide text-white/60">
                  ID
                </div>
                <div className="font-mono text-sm text-white/90">
                  {employee.employee_id}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
