import { Book, FileText, CreditCard, Flag, Triangle, Layout, BookOpen, Calendar, Mail, Folder, BookCopy, Briefcase, Box, BookMarked, FileBox, Award } from 'lucide-react';
import { Product } from '../types/product';

export const products: Product[] = [
  {
    icon: Book,
    name: 'Agenda Permanente',
    description: 'Agenda personalizada de alta qualidade para uso profissional',
    specifications: [
      { label: 'Formato', value: '155mm x 220mm' },
      { label: 'Capa', value: 'Papelão Paraná Cinza, Revestido com Papel Couchê Fosco 145g/m², laminado BOPP brilho' },
      { label: 'Cor Capa', value: '4/0 cores' },
      { label: 'Papel Miolo', value: 'OffSet 75g/m²' },
      { label: 'Cor Miolo', value: '1/1 Cor' },
      { label: 'Acabamento', value: 'Wire-o' }
    ],
    price: 'R$ 25,00 und',
    image: 'src/imagens/AGENDA PERMANENTE.jpg'
  },
  {
    icon: BookOpen,
    name: 'Apostila com Espiral',
    description: 'Apostilas personalizadas com acabamento em espiral',
    specifications: [
      { label: 'Formato', value: '210mm x 297mm' },
      { label: 'Capa', value: 'Papel Couchê Fosco 240g/m², com laminação BOPP brilho' },
      { label: 'Cor Capa', value: '4/0 cores' },
      { label: 'Papel Miolo', value: 'Couchê fosco 90g/m²' },
      { label: 'Cor Miolo', value: '4/4 Cores' },
      { label: 'Acabamento', value: 'Espiral' }
    ],
    price: 'Solicitar Orçamento',
    image: 'src/imagens/APOSTILA.jpg'
  },
  {
    icon: BookOpen,
    name: 'Apostila Wire-o',
    description: 'Apostilas personalizadas com acabamento Wire-o',
    specifications: [
      { label: 'Formato', value: '210mm x 297mm' },
      { label: 'Capa', value: 'Papel Couchê Fosco 240g/m², com laminação BOPP brilho' },
      { label: 'Cor Capa', value: '4/0 cores' },
      { label: 'Papel Miolo', value: 'Couchê fosco 115g/m²' },
      { label: 'Cor Miolo', value: '4/4 Cores' },
      { label: 'Acabamento', value: 'Wire-o' }
    ],
    price: 'Solicitar Orçamento',
    image: 'src/imagens/APOSTILA (2).jpg'
  },
  {
    icon: Flag,
    name: 'Banner com Ilhós',
    description: 'Banner em lona com acabamento em ilhós',
    specifications: [
      { label: 'Formato', value: '900mm x 1750mm' },
      { label: 'Substrato', value: 'Lona' },
      { label: 'Cores', value: '4 (só frente)' },
      { label: 'Acabamento', value: 'Ilhós' }
    ],
    price: 'Solicitar Orçamento',
    image: 'src/imagens/BANNER.jpg'
  },
  {
    icon: Flag,
    name: 'Banner com Bastão',
    description: 'Banner em lona com acabamento em bastão',
    specifications: [
      { label: 'Formato', value: '900mm x 1300mm' },
      { label: 'Substrato', value: 'Lona' },
      { label: 'Cores', value: '4 (só frente)' },
      { label: 'Acabamento', value: 'Bastão' }
    ],
    price: 'Solicitar Orçamento',
    image: 'src/imagens/BANNER (2).jpg'
  },
  {
    icon: CreditCard,
    name: 'Cartões de Visita',
    description: 'Cartões profissionais com acabamento premium',
    specifications: [
      { label: 'Formato', value: '9cm x 5cm' },
      { label: 'Papel', value: 'Offset 240' },
      { label: 'Acabamento', value: 'BOPP brilho/Fosco ou sem' }
    ],
    price: 'R$ 0,45 und (Plastificados) / R$ 0,35 und (Sem Plastificação)',
    image: 'src/imagens/CARTOES DE VISITA.jpg'
  },
  {
    icon: Box,
    name: 'Caixa Bloco',
    description: 'Caixa bloco personalizada com refil',
    specifications: [
      { label: 'Caixa', value: '100 mm x 100 mm x 8,2 mm' },
      { label: 'Papel', value: 'Papel Supremo 240g/m²' },
      { label: 'Cores', value: '4 (frente)' },
      { label: 'Refil', value: 'Papel Offset 75g/m²' }
    ],
    price: 'R$ 5,00 und',
    image: 'src/imagens/CAIXA BLOCO.jpg'
  },
  {
    icon: Box,
    name: 'CAIXA BLOCO COM PORTA CELULAR',
    description: 'Caixa bloco personalizada com porta celular',
    specifications: [
      { label: 'Caixa', value: '140 mm x 100 mm, x 8,2 mm;' },
      { label: 'Papel', value: 'Papel Supremo 240g/m²' },
      { label: 'Cores', value: '4 (frente)' },
      { label: 'Refil', value: 'Papel Offset 75g/m²' }
    ],
    price: 'R$ 15,00 und',
    image: 'src/imagens/CAIXA BLOCO COM PORTA CELULAR.png'
  },
  {
    icon: Calendar,
    name: 'Calendário de Mesa',
    description: 'Calendários personalizados com acabamento profissional',
    specifications: [
      { label: 'Tamanho', value: '150mm x 125mm' },
      { label: 'Base do Calendário', value: 'Papel Supremo 250g/m²' },
      { label: 'Cores Base', value: '4 (frente)' },
      { label: 'Miolo', value: 'Couché Fosco 120g/m²' },
      { label: 'Cores Miolo', value: '4 (frente e verso)' },
      { label: 'Acabamento', value: 'Laminação brilho, Wire-o' }
    ],
    price: 'Solicitar Orçamento',
    image: 'src/imagens/CALEDARIO DE MESA.jpg'
  },
  {
    icon: Mail,
    name: 'Envelope Pequeno',
    description: 'Envelope personalizado formato pequeno',
    specifications: [
      { label: 'Tamanho', value: '229mm x 75mm' },
      { label: 'Papel', value: 'OffSet 120g/m²' },
      { label: 'Cores', value: '4 (frente)' },
      { label: 'Acabamento', value: 'Faca especial' }
    ],
    price: 'Solicitar Orçamento',
    image: 'src/imagens/ENVELOPE (2).jpg'
  },
  {
    icon: Mail,
    name: 'Envelope Médio',
    description: 'Envelope personalizado formato médio',
    specifications: [
      { label: 'Tamanho', value: '210mm x 150mm' },
      { label: 'Papel', value: 'OffSet 120g/m²' },
      { label: 'Cores', value: '4 (frente)' },
      { label: 'Acabamento', value: 'Faca especial' }
    ],
    price: 'Solicitar Orçamento',
    image: 'src/imagens/ENVELOPE.jpg'
  },
  {
    icon: Folder,
    name: 'Folder Uma Dobra',
    description: 'Folder com uma dobra e acabamento em laminação fosca',
    specifications: [
      { label: 'Formato Final', value: '210mm x 300mm' },
      { label: 'Papel', value: 'Couche Brilho 150g/m²' },
      { label: 'Cores', value: '4 (frente e verso)' },
      { label: 'Acabamento', value: '1 dobra, laminação fosca' }
    ],
    price: 'Solicitar Orçamento',
    image: 'src/imagens/FOLDER.jpg'
  },
  {
    icon: Folder,
    name: 'Folder Duas Dobras',
    description: 'Folder com duas dobras e acabamento em laminação fosca',
    specifications: [
      { label: 'Formato Final', value: '210mm x 300mm' },
      { label: 'Papel', value: 'Couche Brilho 150g/m²' },
      { label: 'Cores', value: '4 cores frente e verso' },
      { label: 'Acabamento', value: '2 dobras, laminação fosca' }
    ],
    price: 'Solicitar Orçamento',
    image: 'src/imagens/FOLDER (2).jpg'
  },
  {
    icon: BookMarked,
    name: 'Livro Brochura',
    description: 'Livro com acabamento em brochura e costura',
    specifications: [
      { label: 'Capa', value: 'Papel Couchê Fosco 170g/m², empastado no papelão cinza nº 18, com laminação BOPP fosca' },
      { label: 'Formato', value: '300mm x 210mm' },
      { label: 'Cores capa', value: '4 (frente)' },
      { label: 'Papel miolo', value: 'Couchê fosco 115g/m²' },
      { label: 'Cores miolo', value: '4 (frente e Verso)' },
      { label: 'Acabamento', value: 'Lombada quadrada, costura' },
      { label: 'Tiragem máxima', value: '100und' }
    ],
    price: 'Solicitar Orçamento',
    image: 'src/imagens/LIVRO BROCHURA.jpg'
  },
  {
    icon: BookCopy,
    name: 'Livro Capa Dura',
    description: 'Livro com acabamento em capa dura',
    specifications: [
      { label: 'Capa dura', value: 'Papel Couchê Fosco 170g/m², empastado no papelão cinza nº 18, com laminação BOPP fosca' },
      { label: 'Formato', value: '300mm x 210mm' },
      { label: 'Cores capa', value: '4 (frente)' },
      { label: 'Papel miolo', value: 'Couchê fosco 115g/m²' },
      { label: 'Cores miolo', value: '4 (frente e Verso)' },
      { label: 'Acabamento', value: 'Lombada quadrada, costura' },
      { label: 'Tiragem máxima', value: '100und' }
    ],
    price: 'Solicitar Orçamento',
    image: 'src/imagens/LIVRO CAPA DURA.jpg'
  },
  {
    icon: BookCopy,
    name: 'Livro Capa Dura com Luva',
    description: 'Livro com acabamento em capa dura e luva protetora',
    specifications: [
      { label: 'Capa dura', value: 'Papel Couchê Fosco 170g/m², empastado no papelão cinza nº 18, com laminação BOPP fosca' },
      { label: 'Formato', value: '210mm x 300mm' },
      { label: 'Papel Miolo', value: 'Couchê fosco 115g/m²' },
      { label: 'Cores', value: 'Capa 4 (frente) e Miolo 4 (frente e verso)' },
      { label: 'Acabamento', value: 'Brochura, Costurado' },
      { label: 'Luva', value: 'Papel Couchê Fosco 170g/m², empastado no papelão cinza nº 18, com laminação BOPP fosca' }
    ],
    price: 'Solicitar Orçamento',
    image: 'src/imagens/LIVRO CAPA DURA COM LUVA.jpg'
  },
  {
    icon: BookCopy,
    name: 'Livro Capa Dura com Sobrecapa',
    description: 'Livro com acabamento em capa dura e sobrecapa',
    specifications: [
      { label: 'Capa dura', value: 'Papel couchê fosco 170g/m², empastado no papelão cinza nº 18, com laminação BOPP fosca' },
      { label: 'Formato', value: '170mm x 230mm' },
      { label: 'Papel Miolo', value: 'Couchê fosco 115g/m²' },
      { label: 'Acabamento', value: 'Brochura, Costurado' },
      { label: 'Sobrecapa', value: 'Papel couchê fosco 170g/m², com laminação BOPP fosca' },
      { label: 'Cores', value: 'Capa 4 (frente), Miolo 4 (frente e verso), Sobrecapa 4 (frente)' }
    ],
    price: 'Solicitar Orçamento',
    image: 'src/imagens/LIVRO CAPA DURA COM SOBRECAPA.jpg'
  },
  {
    icon: FileBox,
    name: 'Pasta Canguru com Bolsa',
    description: 'Pasta com bolsa para documentos',
    specifications: [
      { label: 'Papel', value: 'Supremo 250g/m²' },
      { label: 'Formato', value: '220mm x 300mm' },
      { label: 'Cores', value: '4 (frente)' },
      { label: 'Acabamento', value: 'Bolsa colada ou encaixe, BOPP Brilho/Fosco' }
    ],
    price: 'R$ 2,50',
    image: 'src/imagens/PASTA CANGURU COM BOLSA.jpg'
  },
  {
    icon: FileText,
    name: 'Revista Premium',
    description: 'Revista com acabamento premium',
    specifications: [
      { label: 'Formato Final', value: '210mm x 280mm' },
      { label: 'Papel CAPA', value: 'Couche Brilho 170g/m²' },
      { label: 'Cores CAPA', value: '4 frente e verso' },
      { label: 'Papel MIOLO', value: 'Couche brilho 90g/m²' },
      { label: 'Cores MIOLO', value: '4 frente e verso' },
      { label: 'Acabamento', value: 'Dobrada cruzada, Grampo canoa' },
      { label: 'Quantidade Páginas MIOLO', value: 'Múltiplos de 4 páginas, máximo de 96 págs.' }
    ],
    price: 'Solicitar Orçamento',
    image: 'src/imagens/REVISTA (3).jpg'
  },
  {
    icon: FileText,
    name: 'Revista Simples',
    description: 'Revista com acabamento simples',
    specifications: [
      { label: 'Formato Final', value: '210mm x 280mm' },
      { label: 'Papel CAPA', value: 'Couche Brilho 145g/m²' },
      { label: 'Cores CAPA', value: '4 frente e verso' },
      { label: 'Papel MIOLO', value: 'Couche brilho 90g/m²' },
      { label: 'Cores MIOLO', value: '4 frente e verso' },
      { label: 'Acabamento', value: 'Dobrada cruzada, Grampo canoa' },
      { label: 'Quantidade Páginas MIOLO', value: 'Múltiplos de 4 páginas, máximo de 96 págs.' }
    ],
    price: 'Solicitar Orçamento',
    image: 'src/imagens/REVISTA (2).jpg'
  },
  {
    icon: FileText,
    name: 'Revista Padrão',
    description: 'Revista com acabamento padrão',
    specifications: [
      { label: 'Formato Final', value: '210mm x 280mm' },
      { label: 'Papel CAPA', value: 'Couche Brilho 170g/m²' },
      { label: 'Cores CAPA', value: '4 frente e verso' },
      { label: 'Papel MIOLO', value: 'Couche brilho 90g/m²' },
      { label: 'Cores MIOLO', value: '4 frente e verso' },
      { label: 'Acabamento', value: 'Dobrada cruzada, Grampo canoa' },
      { label: 'Quantidade Páginas MIOLO', value: 'Múltiplos de 4 páginas, máximo de 96 págs.' }
    ],
    price: 'Solicitar Orçamento',
    image: 'src/imagens/REVISTA.jpg'
  },
  {
    icon: Briefcase,
    name: 'Pasta de Alterações',
    description: 'Pasta para alterações com diferentes capacidades',
    specifications: [
      { label: 'Formato Final', value: '240 mm x 310mm' },
      { label: 'SUBSTRATO CAPA', value: 'Papelão paraná cinza nº 18, com empastamento em Vulcapel verde e vermelho' },
      { label: 'Acabamento', value: 'Acabamento interno papel fantasia e aplicação de hotstamping na parte frontal' },
      { label: 'Cores Disponíveis', value: 'Verde, Vermelho, Preto, Azul, Marrom e Cinza' }
    ],
    price: '50 Plásticos (100 FLS) R$ 72,50 / 75 Plásticos (150 FLS) R$ 90,00 / 100 Plásticos (200 FLS) R$ 107,50 / 125 Plásticos (250 FLS) R$ 125,00 / 150 Plásticos (300 FLS) R$ 142,50',
    image: 'src/imagens/PASTA DE ALTERACOES.jpg'
  },
  {
    icon: BookMarked,
    name: 'Encadernação de Alterações de Militares',
    description: 'Encadernação especial para alterações militares',
    specifications: [
      { label: 'Formato Final', value: '220 mm x 305mm' },
      { label: 'Quantidade de folhas', value: '400 Folhas' },
      { label: 'SUBSTRATO CAPA', value: 'Papelão Paraná cinza nº 18, empastamento com Vulcapel verde' },
      { label: 'Acabamento', value: 'Brochura, Costurado, acabamento interno papel fantasia e aplicação de hotstamping na parte lateral e frontal' }
    ],
    price: 'R$ 30,00 und',
    image: 'src/imagens/ENCADERNACAO DE ALTERACOES DE MILITARES.jpg'
  },
  {
    icon: BookMarked,
    name: 'Encadernação de Boletins',
    description: 'Encadernação especial para boletins',
    specifications: [
      { label: 'Formato Final', value: '220 mm x 305mm' },
      { label: 'Quantidade de folhas', value: '400 Folhas' },
      { label: 'SUBSTRATO CAPA', value: 'Papelão Paraná cinza nº 18, empastamento em Vulcapel verde' },
      { label: 'Acabamento', value: 'Brochura, Costurado, acabamento interno papel fantasia e aplicação de hotstamping na parte lateral e frontal' }
    ],
    price: 'R$ 30,00 und',
    image: 'src/imagens/ENCADERNACAO DE BOLETINS.jpg'
  },
  {
    icon: FileBox,
    name: 'Pasta Despacho',
    description: 'Pasta especial para despachos',
    specifications: [
      { label: 'Formato Final', value: '220 mm x 305mm' },
      { label: 'SUBSTRATO CAPA', value: 'Papelão Paraná cinza nº 18, com empastamento em Vulcapel Verde' },
      { label: 'Acabamento', value: 'Papel fantasia na área interna e aplicação de hotstamping na parte frontal' }
    ],
    price: 'R$ 30,00 und',
    image: 'src/imagens/PASTA DESPACHO.jpg'
  },
  {
    icon: Award,
    name: 'Pasta Referência Elogiosa',
    description: 'Pasta especial para referências e diplomas',
    specifications: [
      { label: 'Formato Final', value: '220 mm x 305mm' },
      { label: 'SUBSTRATO CAPA', value: 'Papelão Paraná cinza nº 18, com empastamento em Vulcapel Verde' },
      { label: 'Acabamento', value: 'Papel offset com orelhinha na parte interna e aplicação de hotstamping na parte frontal' }
    ],
    price: 'R$ 30,00 und',
    image: 'src/imagens/PASTA REFERÊNCIA ELOGIOSA.jpg'
  },
  {
    icon: Triangle,
    name: 'Prisma de Mesa',
    description: 'Prisma de mesa personalizado',
    specifications: [
      { label: 'Formato Final', value: '280 mm x 80mm' },
      { label: 'SUBSTRATO CAPA', value: 'Papelão Paraná cinza nº 18, com empastamento em Vulcapel Verde' },
      { label: 'Acabamento', value: 'Papel fantasia na área interna e aplicação de hotstamping na parte frontal' }
    ],
    price: 'R$ 30,00 und',
    image: 'src/imagens/PRISMA DE MESA.jpg'
  }
];