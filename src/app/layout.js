import "./globals.css";
import Topo from "@/components/Topo";
import Rodape from "@/components/Rodape";

export const metadata = {
  title: "Sorveteria Artesanal",
  description: "O melhor no requisito sabor e experiência.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Topo/>
        {children}
        <Rodape/>
      </body>
    </html>
  );
}
