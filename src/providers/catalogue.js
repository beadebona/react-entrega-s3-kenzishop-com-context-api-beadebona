import { createContext, useContext } from 'react';

const CatalogueContext = createContext([]);

export const CatalogueProvider = ({ children }) => {
	const catalogue =([
    {
      id: 11,
      title: "Samsung Galaxy A01 Dual SIM 32 GB preto 2 GB RAM",
      description: "Processador Snapdragon 439 Octa-Core de 2GHz com 2GB de RAM.",
      price: 699.99,
      image: "https://http2.mlstatic.com/D_NQ_NP_661764-MLA44282592265_122020-O.webp"
    },
    {
      id: 12,
      title: "Xiaomi Redmi 9A Dual SIM 32 GB azul 2 GB RAM",
      description: "Processador MediaTek Helio G25 Octa-Core de 2GHz com 2GB de RAM.",
      price: 799.99,
      image: "https://http2.mlstatic.com/D_NQ_NP_958898-MLA43824398273_102020-O.webp"
    },
    {
      id: 13,
      title: "LG K11+ Dual SIM 32 GB dourado 3 GB RAM",
      description: "Processador MediaTek Helio G25 Octa-Core de 2GHz com 2GB de RAM.",
      price: 859.10,
      image: "https://http2.mlstatic.com/D_NQ_NP_633672-MLA31348110302_072019-O.webp"
    },
    {
      id: 45,
      title: "iPhone 11 Apple (64GB) Branco Tela 6,1\" 4G Câmera 12MP iOS",
      description: "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
      price: 3899.00,
      image: "https://images-americanas.b2w.io/produtos/01/00/img/1614132/3/1614132374_1GG.jpg"
    },
    {
      id: 46,
      title: "Smartphone Samsung Galaxy M31 128GB 4G Wi-Fi Tela 6.4'' Dual Chip 6GB RAM Câmera Quádrupla + Selfie 32MP - Preto",
      description: "Oferece o display Infinito de 6.4 polegadas do Galaxy M31 permite que você veja muito mais do que ama.",
      price: 1899.00,
      image: "https://images-americanas.b2w.io/produtos/01/00/img/1739672/6/1739672657_1GG.jpg"
    },
    {
          id:48, 
      title: "Smartphone Samsung Galaxy S20 Fe 128GB 4G Wi-Fi Tela 6.5'' Dual Chip 6GB RAM Câmera Tripla + Selfie 32MP - Cloud Lavender",
      description: "O Smartphone Samsung Galaxy S20 Fe é completo e perfeito para você que não abre mão de ter um item tecnológico sempre por perto.",
      price: 2499.00,
      image: "https://images-americanas.b2w.io/produtos/01/00/img/3234384/1/3234384140_1GG.jpg"
    },
    {
      id: 49,
      title: "iPhone 12 Pro Max Apple (128GB) Dourado tela 6,7\" Câmera tripla 12MP iOS",
      description: "iPhone 12 Pro Max. Tela Super Retina XDR maior com 6,7 polegadas.",
      price: 8999.99,
      image: "https://images-americanas.b2w.io/produtos/01/00/img/2290967/1/2290967121_1GG.jpg"
    },
    {
      id: 50,
      title: "Monitor Samsung",
      description: "Monitor Samsung Widescreen",
      price: 859.00,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7hCflge3FBfnRFhqxr-JASneJeyQJ6LQKZA&usqp=CAU"
    }
  ]);

return (
  <CatalogueContext.Provider
   value={{ catalogue }}>
	{children}
  </CatalogueContext.Provider>
 )
}

export const useCatalogue = () => useContext(CatalogueContext);
