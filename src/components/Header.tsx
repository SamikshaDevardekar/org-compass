import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plus, Settings, Users } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-2xl font-bold text-foreground">
              SuperAdmin
            </Link>
            <nav className="hidden md:flex items-center space-x-4">
              <Link to="/">
                <Button 
                  variant={isActive('/') ? 'default' : 'ghost'}
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Users className="h-4 w-4" />
                  Organizations
                </Button>
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-3">
            <Link to="/add-organization">
              <Button 
                variant="default"
                size="sm"
                className="flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                Add Organization
              </Button>
            </Link>
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;