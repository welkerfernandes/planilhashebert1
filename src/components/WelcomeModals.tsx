// src/components/WelcomeModals.tsx
import * as React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import banner1 from "@/assets/banner1.jpg";
import banner2 from "@/assets/banner2.jpg";

// Links de afiliação
const BANNER_1_LINK = "https://pln.brtrk2.com/aff_c?offer_id=9055&aff_id=16469";
const BANNER_2_LINK = "https://pln.brtrk2.com/aff_c?offer_id=9056&aff_id=16469";

// Componente auxiliar para renderizar o banner dentro do modal
const Banner = ({
  src,
  alt,
  href,
}: {
  src: string;
  alt: string;
  href: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full rounded-lg overflow-hidden transition-transform hover:scale-[1.01] duration-300"
  >
    <img src={src} alt={alt} className="w-full h-auto object-cover" />
  </a>
);

export const WelcomeModals = () => {
  // Inicializa o Modal 1 como fechado, mas será aberto no useEffect
  const [openModal1, setOpenModal1] = React.useState(false);
  const [openModal2, setOpenModal2] = React.useState(false);

  // Efeito para abrir o Modal 1 na montagem (primeira carga)
  React.useEffect(() => {
    // Pequeno delay para garantir que o modal abra após a inicialização da página
    const timer = setTimeout(() => {
      setOpenModal1(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseModal1 = (open: boolean) => {
    // Se o usuário fechar o Modal 1
    if (!open) {
      setOpenModal1(false);
      // Abre o Modal 2 imediatamente
      setOpenModal2(true);
    } else {
      setOpenModal1(true);
    }
  };

  const handleCloseModal2 = (open: boolean) => {
    // Se o usuário fechar o Modal 2
    if (!open) {
      setOpenModal2(false);
    } else {
      setOpenModal2(true);
    }
  };

  return (
    <>
      {/* Modal 1: Banner Carrefour (Abre no carregamento) */}
      <Dialog open={openModal1} onOpenChange={handleCloseModal1}>
        <DialogContent className="sm:max-w-md p-0 overflow-hidden border-none shadow-elegant">
          <Banner
            src={banner1}
            alt="Peça Já o seu Cartão Carrefour e Aproveite Todos os Benefícios"
            href={BANNER_1_LINK}
          />
        </DialogContent>
      </Dialog>

      {/* Modal 2: Banner Atacadão (Abre ao fechar o Modal 1) */}
      <Dialog open={openModal2} onOpenChange={handleCloseModal2}>
        <DialogContent className="sm:max-w-lg p-0 overflow-hidden border-none shadow-elegant">
          <Banner
            src={banner2}
            alt="Garanta Seu Cartão Atacadão On-line e em Poucos Minutos."
            href={BANNER_2_LINK}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};
