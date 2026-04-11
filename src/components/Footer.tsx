import PulsoLogo from "./PulsoLogo";

const Footer = () => {
  return (
    <footer className="border-t border-thin border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          <div>
            <PulsoLogo />
            <p className="text-sm text-muted-foreground mt-3 max-w-xs">
              Financial infrastructure for WhatsApp. Built in Latin America, for Latin America.
            </p>
          </div>
          <div className="flex gap-12">
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Product</h4>
              <a href="#products" className="block text-sm text-foreground hover:text-primary transition-colors">Pulso Verify</a>
              <a href="#products" className="block text-sm text-foreground hover:text-primary transition-colors">Pulso Pay</a>
              <a href="#products" className="block text-sm text-foreground hover:text-primary transition-colors">Pulso ID</a>
            </div>
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Company</h4>
              <a href="#about" className="block text-sm text-foreground hover:text-primary transition-colors">About</a>
              <a href="#developers" className="block text-sm text-foreground hover:text-primary transition-colors">Developers</a>
              <a href="#waitlist" className="block text-sm text-foreground hover:text-primary transition-colors">Waitlist</a>
            </div>
          </div>
        </div>
        <div className="border-t border-thin border-border pt-6">
          <p className="text-xs text-muted-foreground">© 2026 Pulso Technologies, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
