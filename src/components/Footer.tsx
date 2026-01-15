import { Mail, MapPin } from "lucide-react";
import logo from "@/assets/trackmed-logo.png";

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "For Business", href: "#business" },
      { label: "Security", href: "#security" },
      { label: "Pricing", href: "#" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Cookies", href: "#" },
      { label: "HIPAA", href: "#" },
    ],
  },
};

export const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="TrackMed" className="h-8 w-auto" />
              <span className="font-display font-bold text-lg">TrackMed</span>
            </div>
            <p className="text-primary-foreground/60 text-sm mb-6 max-w-xs">
              Securing pharmaceutical supply chains with trusted verification technology.
            </p>
            <div className="space-y-2 text-sm text-primary-foreground/60">
              <a href="mailto:hello@trackmed.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" /> hello@trackmed.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> San Francisco, CA
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-sm mb-4">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} TrackMed. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-primary-foreground/40">
            <span>SOC 2</span>
            <span>HIPAA</span>
            <span>PCI-DSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
