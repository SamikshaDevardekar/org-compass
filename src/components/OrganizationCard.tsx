import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Edit, Trash2, Users, MapPin, Building } from "lucide-react";
import orgPlaceholder from "@/assets/org-placeholder.jpg";

interface Organization {
  id: string;
  name: string;
  managerName: string;
  address: string;
  logo?: string;
}

interface OrganizationCardProps {
  organization: Organization;
  onEdit: (org: Organization) => void;
  onDelete: (id: string) => void;
  onViewAdmins: (id: string) => void;
}

const OrganizationCard = ({ organization, onEdit, onDelete, onViewAdmins }: OrganizationCardProps) => {
  return (
    <Card className="group bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden">
      <CardHeader className="p-0">
        <div className="h-32 bg-gradient-to-br from-primary/20 to-primary-glow/20 relative overflow-hidden">
          <img 
            src={organization.logo || orgPlaceholder}
            alt={`${organization.name} logo`}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <h3 className="text-lg font-semibold text-foreground">{organization.name}</h3>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="h-4 w-4 mr-2" />
            <span>Manager: {organization.managerName}</span>
          </div>
          <div className="flex items-start text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
            <span>{organization.address}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => onEdit(organization)}
            className="flex-1 min-w-fit"
          >
            <Edit className="h-4 w-4 mr-1" />
            Edit
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => onViewAdmins(organization.id)}
            className="flex-1 min-w-fit"
          >
            <Building className="h-4 w-4 mr-1" />
            View Admins
          </Button>
          <Button 
            variant="destructive" 
            size="sm"
            onClick={() => onDelete(organization.id)}
            className="flex-1 min-w-fit"
          >
            <Trash2 className="h-4 w-4 mr-1" />
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrganizationCard;