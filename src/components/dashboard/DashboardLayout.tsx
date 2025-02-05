import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1">
          <div className="flex items-center justify-between p-4 border-b bg-white">
            <SidebarTrigger />
            <h1 className="text-xl font-semibold text-primary">Social Media Dashboard</h1>
          </div>
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}