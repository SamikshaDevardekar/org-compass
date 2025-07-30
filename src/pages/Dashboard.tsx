import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OrganizationCard from "@/components/OrganizationCard";
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Search, Building } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock data for organizations
const mockOrganizations = [
  {
    id: "1",
    name: "TechCorp Solutions",
    managerName: "John Smith",
    address: "123 Silicon Valley, CA 94025, USA",
  },
  {
    id: "2", 
    name: "Global Industries",
    managerName: "Sarah Johnson",
    address: "456 Business District, NY 10001, USA",
  },
  {
    id: "3",
    name: "Innovation Labs",
    managerName: "Michael Chen",
    address: "789 Research Park, Austin, TX 78701, USA",
  },
  {
    id: "4",
    name: "Digital Dynamics",
    managerName: "Emily Davis",
    address: "321 Tech Avenue, Seattle, WA 98101, USA",
  },
  {
    id: "5",
    name: "Future Systems",
    managerName: "David Wilson",
    address: "654 Innovation Drive, Boston, MA 02101, USA",
  },
  {
    id: "6",
    name: "MetaWorks Inc",
    managerName: "Lisa Rodriguez",
    address: "987 Digital Plaza, San Francisco, CA 94105, USA",
  }
];

const Dashboard = () => {
  const [organizations, setOrganizations] = useState(mockOrganizations);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const filteredOrganizations = organizations.filter(org =>
    org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    org.managerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (organization: any) => {
    toast({
      title: "Edit Organization",
      description: `Editing ${organization.name}`,
    });
    // Navigate to edit page (to be implemented)
  };

  const handleDelete = (id: string) => {
    const orgToDelete = organizations.find(org => org.id === id);
    setOrganizations(orgs => orgs.filter(org => org.id !== id));
    toast({
      title: "Organization Deleted",
      description: `${orgToDelete?.name} has been removed successfully.`,
      variant: "destructive",
    });
  };

  const handleViewAdmins = (id: string) => {
    const org = organizations.find(org => org.id === id);
    toast({
      title: "View Admins",
      description: `Viewing admins for ${org?.name}`,
    });
    // Navigate to admins page (to be implemented)
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Building className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold text-foreground">Organizations</h1>
              <p className="text-muted-foreground">Manage all your organizations and their administrators</p>
            </div>
          </div>
          
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search organizations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {filteredOrganizations.length === 0 ? (
          <div className="text-center py-12">
            <Building className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">No organizations found</h3>
            <p className="text-muted-foreground">
              {searchTerm ? "Try adjusting your search terms" : "Get started by adding your first organization"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOrganizations.map((organization) => (
              <OrganizationCard
                key={organization.id}
                organization={organization}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onViewAdmins={handleViewAdmins}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;