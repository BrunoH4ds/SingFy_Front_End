import MainPolicy from "@/components/template_policy/MainPolicy";

export default function policyLayout({ children }: { children: React.ReactNode }) {
  return <MainPolicy>{children}</MainPolicy>;
}
