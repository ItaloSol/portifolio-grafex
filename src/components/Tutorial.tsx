import React from 'react';
import { Mail, Clock, FileCheck, Printer, CheckCircle, Truck } from 'lucide-react';

export function Tutorial() {
  const steps = [
    {
      icon: Mail,
      title: 'Envie um e-mail',
      content: (
        <div className="space-y-2">
          <p>Envie para: <a href="mailto:divcmcl@graficadoexercito.eb.mil.br" className="text-yellow-600 hover:text-yellow-700">divcmcl@graficadoexercito.eb.mil.br</a></p>
          <p>Incluindo:</p>
          <ul className=" space-y-1 text-gray-600">
            <li className="list-disc list-inside ml-4">Especificações do produto (tipo, formato, cor e outras informações);</li>
            <li className="list-disc list-inside ml-4">Quantidade desejada.</li>
            <li>Dados do cliente para pagamento:
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Pessoa Jurídica: Nome da OM, CODOM, endereço e CNPJ;</li>
                <li>Pessoa Física: Nome completo, RG, CPF, endereço e telefone.</li>
              </ul>
            </li>
          </ul>
        </div>
      )
    },
    {
      icon: Clock,
      title: 'Aguarde o Orçamento',
      content: 'Em até 3 dias úteis, enviaremos o orçamento. Para dúvidas, entre em contato informando o número da sua proposta de orçamento.'
    },
    {
      icon: FileCheck,
      title: 'Aprove o Orçamento',
      content: 'Envie a proposta escaneada, carimbada e assinada pela autoridade responsável pelo pagamento (OD e/ou Cmt), junto com o arquivo da mídia do produto.'
    },
    {
      icon: Printer,
      title: 'Avalie o Modelo',
      content: 'Após recebermos a aprovação e a mídia, enviaremos um MODELO por e-mail para sua apreciação e aprovação.'
    },
    {
      icon: CheckCircle,
      title: 'Confirme o Modelo',
      content: 'O prazo de confecção iniciará após sua aprovação do MODELO enviado.'
    },
    {
      icon: Truck,
      title: 'Produção e Entrega',
      content: 'Após a aprovação do MODELO por e-mail, seu produto entrará na linha de produção para futura entrega.'
    }
  ];

  return (
    <section id="tutorial" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Como Fazer seu Pedido</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-[1.02]">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-navy-900 rounded-full p-3">
                      <step.icon className="h-6 w-6 text-yellow-500" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-yellow-500 text-navy-900 font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm">
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <div className="text-gray-600">{step.content}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}