import { cls } from "@/app/lib/utils";

export default function Logo({ size }: { size: "main" | "mini" }) {
  return (
    <div className="flex flex-col items-center px-2">
      <span
        className={cls(
          size === "main" ? "text-8xl font-bold" : "text-3xl font-extrabold",
          "uppercase  text-violet-600"
        )}
      >
        daegu
      </span>
      <h1
        className={cls(
          size === "main"
            ? "text-7xl font-semibold"
            : "text-2xl tracking-tighter -mt-2 -ml-1 font-semibold"
        )}
      >
        MoGakKo
      </h1>
    </div>
  );
}
