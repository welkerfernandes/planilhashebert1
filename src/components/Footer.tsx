import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
              Planilhas Financeiras
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Ferramentas gratuitas para você controlar suas finanças de forma
              simples e eficiente.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#spreadsheets"
                  className="hover:text-primary transition-colors"
                >
                  Planilhas
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sobre
                </a>
              </li>
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h4 className="font-semibold mb-4">Categorias</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#spreadsheets"
                  className="hover:text-primary transition-colors"
                >
                  Pessoa Física
                </a>
              </li>
              <li>
                <a
                  href="#spreadsheets"
                  className="hover:text-primary transition-colors"
                >
                  Empresários
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Investimentos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Controle de Gastos
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Planilhas Financeiras. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
