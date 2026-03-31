const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p className="font-display text-lg font-bold text-foreground">beck's</p>
        <p>© {new Date().getFullYear()} Beck's Coffee. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
