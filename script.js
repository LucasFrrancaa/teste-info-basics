/* ═══════════════════════════════════════════════════════════
   VIEIRA ALVES ADVOCACIA — Sistema de Avaliação de Estágio
   script.js
═══════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════
   BANCO DE QUESTÕES
   Categorias: Hardware · Software · Microsoft Word ·
   Microsoft Excel · PDF · E-mail · Sistemas Jurídicos ·
   Rotinas Jurídicas · Organização de Arquivos ·
   Segurança da Informação · Internet · Nuvem · Redes
═══════════════════════════════════════════════════════ */
const QB = [

  /* ── HARDWARE (noções básicas) ─────────────────────── */
  {
    c: "Hardware",
    q: "O que é uma CPU?",
    o: [
      "Um tipo de memória RAM para armazenamento temporário",
      "O processador central do computador, responsável por executar as instruções dos programas",
      "Um dispositivo de armazenamento permanente de dados",
      "A placa de vídeo responsável pelo processamento gráfico"
    ],
    a: 1
  },
  {
    c: "Hardware",
    q: "Qual é a unidade básica de medida de armazenamento digital?",
    o: ["Pixel", "Hertz", "Watt", "Byte"],
    a: 3
  },
  {
    c: "Hardware",
    q: "O que significa a sigla RAM e para que serve?",
    o: [
      "Read Access Memory — memória de leitura permanente",
      "Rapid Application Module — módulo de aplicativos rápidos",
      "Random Access Memory — memória temporária usada pelo computador enquanto programas estão em execução",
      "Remote Access Machine — máquina de acesso remoto"
    ],
    a: 2
  },

  /* ── SOFTWARE / SISTEMA OPERACIONAL ─────────────────── */
  {
    c: "Software",
    q: "Qual dos itens abaixo é um sistema operacional?",
    o: ["Microsoft Word", "Google Chrome", "Adobe Acrobat Reader", "Windows 11"],
    a: 3
  },
  {
    c: "Software",
    q: "O que é a Área de Trabalho (Desktop) de um computador?",
    o: [
      "A memória interna onde os programas são executados",
      "O disco rígido onde os arquivos são salvos permanentemente",
      "A tela principal do sistema operacional onde ficam ícones e atalhos de programas",
      "O processador central do computador"
    ],
    a: 2
  },

  /* ── MICROSOFT WORD ──────────────────────────────────── */
  {
    c: "Microsoft Word",
    q: "Qual atalho de teclado é usado para SALVAR um documento no Word?",
    o: ["Ctrl+P", "Ctrl+Z", "Ctrl+X", "Ctrl+S"],
    a: 3
  },
  {
    c: "Microsoft Word",
    q: "Como inserir numeração de páginas automática em um documento Word?",
    o: [
      "Digitar manualmente o número em cada página",
      "Inserir > Número de Página",
      "Formatar > Parágrafo > Numeração",
      "Exibir > Régua > Páginas"
    ],
    a: 1
  },
  {
    c: "Microsoft Word",
    q: "O que faz o atalho Ctrl+Z no Word?",
    o: [
      "Salva o documento atual",
      "Fecha o programa",
      "Desfaz a última ação realizada",
      "Recorta o texto selecionado"
    ],
    a: 2
  },
  {
    c: "Microsoft Word",
    q: "O que é o recurso 'Controle de Alterações' no Word?",
    o: [
      "Controla o tamanho e o peso do arquivo automaticamente",
      "Registra todas as edições feitas no documento, identificando autor e data — essencial para revisão de contratos",
      "Bloqueia o documento contra edição por terceiros",
      "Verifica erros ortográficos e gramaticais automaticamente"
    ],
    a: 1
  },
  {
    c: "Microsoft Word",
    q: "Qual a diferença entre 'Salvar' e 'Salvar Como' no Word?",
    o: [
      "São a mesma função com nomes diferentes",
      "'Salvar Como' só funciona para exportar em PDF",
      "'Salvar' sobrescreve o arquivo atual; 'Salvar Como' permite escolher novo nome ou local",
      "'Salvar' cria uma cópia de segurança automática"
    ],
    a: 2
  },
  {
    c: "Microsoft Word",
    q: "O que faz o atalho Ctrl+F no Word?",
    o: [
      "Abre a função Localizar para buscar texto no documento",
      "Formata o texto selecionado em negrito",
      "Salva o documento em formato PDF",
      "Fecha o documento atual"
    ],
    a: 0
  },
  {
    c: "Microsoft Word",
    q: "Quais são os atalhos corretos para Copiar e Colar no teclado?",
    o: [
      "Ctrl+X para copiar e Ctrl+V para colar",
      "Ctrl+C para copiar e Ctrl+P para colar",
      "Ctrl+C para copiar e Ctrl+V para colar",
      "Ctrl+A para copiar e Ctrl+V para colar"
    ],
    a: 2
  },
  {
    c: "Microsoft Word",
    q: "Como criar uma tabela em um documento Word?",
    o: [
      "Pressionar Tab repetidamente para alinhar o texto em colunas",
      "É necessário usar Excel e depois copiar para o Word",
      "Formatar > Parágrafo > Inserir Tabela",
      "Inserir > Tabela > escolher número de linhas e colunas"
    ],
    a: 3
  },
  {
    c: "Microsoft Word",
    q: "Para formatar o recuo de primeira linha em 1,25 cm (padrão ABNT) no Word, o caminho correto é:",
    o: [
      "Pressionar Tab no início de cada parágrafo manualmente",
      "Página Inicial > Alinhar à direita",
      "Formatar > Coluna > Espaçamento",
      "Parágrafo > Recuo especial > Primeira linha > 1,25 cm"
    ],
    a: 3
  },
  {
    c: "Microsoft Word",
    q: "Como acessar o Cabeçalho e Rodapé em um documento Word?",
    o: [
      "Formatar > Cabeçalho e Rodapé",
      "Clique duplo na área superior ou inferior da página, ou Inserir > Cabeçalho / Rodapé",
      "Exibir > Layout > Cabeçalho",
      "Arquivo > Configurar Página > Margens"
    ],
    a: 1
  },
  {
    c: "Microsoft Word",
    q: "O que é Mala Direta (Mail Merge) no Word e quando é útil?",
    o: [
      "Uma função para mesclar dois documentos diferentes em um só",
      "Um recurso para personalizar e enviar um documento em massa para múltiplos destinatários com dados individuais (ex: notificações para vários clientes)",
      "Uma ferramenta de tradução automática de documentos jurídicos",
      "Um sistema de backup automático de documentos na nuvem"
    ],
    a: 1
  },
  {
    c: "Microsoft Word",
    q: "O que são 'Estilos' no Word (ex: Título 1, Normal, Subtítulo)?",
    o: [
      "Apenas temas visuais decorativos sem impacto funcional",
      "Tipos de fontes disponíveis no programa",
      "Formatos predefinidos de texto que garantem consistência visual e permitem gerar sumários automáticos",
      "Modelos de documento salvos na nuvem"
    ],
    a: 2
  },
  {
    c: "Microsoft Word",
    q: "Como gerar um Sumário Automático em um documento Word?",
    o: [
      "Digitar o sumário manualmente e atualizar cada vez que o documento muda",
      "Inserir > Índice > Sumário Automático (após aplicar os Estilos de título corretos no texto)",
      "Formatar > Parágrafo > Inserir Sumário",
      "Exibir > Estrutura de Tópicos > Gerar Sumário"
    ],
    a: 1
  },
  {
    c: "Microsoft Word",
    q: "Para que servem os Comentários inseridos em um documento Word?",
    o: [
      "Substituir o texto original por anotações do revisor",
      "Adicionar notas ou observações sem alterar o texto principal — muito usado na revisão colaborativa de contratos e petições",
      "Verificar gramática e ortografia automaticamente",
      "Salvar versões anteriores do documento automaticamente"
    ],
    a: 1
  },
  {
    c: "Microsoft Word",
    q: "Como verificar o número de palavras de um documento no Word?",
    o: [
      "Contar manualmente cada palavra do texto",
      "Ferramentas > Contagem de Palavras, ou verificar diretamente na barra de status na parte inferior da janela",
      "Inserir > Estatísticas do Documento",
      "Arquivo > Propriedades > Palavras"
    ],
    a: 1
  },
  {
    c: "Microsoft Word",
    q: "Como proteger um documento Word com senha para evitar edições não autorizadas?",
    o: [
      "Renomear o arquivo para uma sequência aleatória de caracteres",
      "Arquivo > Informações > Proteger Documento > Criptografar com Senha",
      "Formatar > Proteger > Senha de Edição",
      "Exibir > Modo Protegido > Ativar Senha"
    ],
    a: 1
  },
  {
    c: "Microsoft Word",
    q: "Qual atalho seleciona TODO o conteúdo de um documento Word?",
    o: ["Ctrl+T", "Ctrl+A", "Ctrl+E", "Ctrl+S"],
    a: 1
  },

  /* ── MICROSOFT EXCEL ─────────────────────────────────── */
  {
    c: "Microsoft Excel",
    q: "O que é uma planilha eletrônica e para que serve no contexto jurídico?",
    o: [
      "Um editor de textos avançado para petições e contratos",
      "Uma ferramenta para criar apresentações e slides",
      "Um programa para organizar dados em linhas e colunas, útil para controlar prazos, honorários, clientes e finanças do escritório",
      "Um sistema de armazenamento em nuvem para documentos"
    ],
    a: 2
  },
  {
    c: "Microsoft Excel",
    q: "Qual fórmula do Excel é usada para somar um intervalo de células?",
    o: [
      "=MEDIA(A1:A10)",
      "=SOMA(A1:A10)",
      "=CONTAR(A1:A10)",
      "=TOTAL(A1:A10)"
    ],
    a: 1
  },
  {
    c: "Microsoft Excel",
    q: "Qual fórmula calcula a média aritmética de um intervalo no Excel?",
    o: [
      "=SOMA(A1:A10)/10",
      "=CALCULAR(MEDIA;A1:A10)",
      "=MEDIA(A1:A10)",
      "=DIVIDIR(A1:A10)"
    ],
    a: 2
  },
  {
    c: "Microsoft Excel",
    q: "O que é uma referência de célula no Excel (ex: A1, B3)?",
    o: [
      "O nome do arquivo da planilha",
      "A identificação de uma célula pela combinação de coluna (letra) e linha (número), usada em fórmulas e cálculos",
      "A cor de formatação aplicada à célula",
      "O comentário inserido dentro da célula"
    ],
    a: 1
  },
  {
    c: "Microsoft Excel",
    q: "Como aplicar um Filtro em uma planilha do Excel para exibir apenas determinados dados?",
    o: [
      "Selecionar as células e pressionar Ctrl+F",
      "Dados > Filtro — em seguida clicar na seta da coluna desejada para escolher os critérios",
      "Formatar > Filtrar Células selecionadas",
      "Inserir > Filtro Automático de Coluna"
    ],
    a: 1
  },
  {
    c: "Microsoft Excel",
    q: "O que faz a fórmula =SE(A1>10,\"Aprovado\",\"Reprovado\") no Excel?",
    o: [
      "Soma os valores maiores que 10 na coluna A",
      "Verifica se A1 é maior que 10; se sim, exibe 'Aprovado'; caso contrário, exibe 'Reprovado'",
      "Conta quantas células têm valor maior que 10",
      "Formata a célula A1 com cor verde se o valor for maior que 10"
    ],
    a: 1
  },
  {
    c: "Microsoft Excel",
    q: "Para que serve 'Congelar Painéis' no Excel?",
    o: [
      "Proteger a planilha contra edições não autorizadas",
      "Fixar linhas ou colunas (geralmente o cabeçalho) para que permaneçam visíveis ao rolar a planilha",
      "Salvar uma versão congelada do arquivo para backup automático",
      "Bloquear a formatação das células selecionadas"
    ],
    a: 1
  },
  {
    c: "Microsoft Excel",
    q: "O que é PROCV (VLOOKUP) no Excel e quando é útil em um escritório?",
    o: [
      "Uma função para formatar células automaticamente com cores",
      "Uma função para criar gráficos na vertical da planilha",
      "Uma função para ordenar dados em ordem alfabética ou numérica",
      "Uma função que busca um valor em uma tabela e retorna dado correspondente — útil para cruzar listas de clientes, processos ou honorários"
    ],
    a: 3
  },
  {
    c: "Microsoft Excel",
    q: "Como ordenar alfabeticamente uma lista de clientes em uma planilha Excel?",
    o: [
      "Digitar os nomes em ordem manualmente",
      "Inserir > Organizar > Alfabético",
      "Selecionar a coluna > Dados > Classificar de A a Z",
      "Formatar > Célula > Ordenar > A-Z"
    ],
    a: 2
  },
  {
    c: "Microsoft Excel",
    q: "O que é Formatação Condicional no Excel?",
    o: [
      "Formatar células somente com fontes e tamanhos específicos",
      "Um recurso que aplica formatação automática (cores, ícones) com base em regras ou valores — ex: destacar prazos vencidos em vermelho",
      "Salvar o arquivo em formato específico para impressão",
      "Proteger determinadas células contra edição por outros usuários"
    ],
    a: 1
  },

  /* ── PDF ─────────────────────────────────────────────── */
  {
    c: "PDF",
    q: "O que significa a sigla PDF?",
    o: [
      "Program Data File",
      "Personal Digital Format",
      "Print Design File",
      "Portable Document Format (Formato Portátil de Documento)"
    ],
    a: 3
  },
  {
    c: "PDF",
    q: "Como converter um documento Word (.docx) em PDF sem softwares pagos?",
    o: [
      "Somente com softwares pagos como Adobe Acrobat Pro",
      "Copiar o conteúdo e colar em um site online",
      "Arquivo > Salvar Como > selecionar PDF como tipo de arquivo",
      "Imprimir o documento e escanear novamente"
    ],
    a: 2
  },
  {
    c: "PDF",
    q: "Qual a diferença entre assinatura digital e assinatura digitalizada?",
    o: [
      "São a mesma coisa e têm o mesmo valor jurídico",
      "A digitalizada tem maior valor jurídico por ser reprodução fiel da assinatura manuscrita",
      "A assinatura digital só é válida para documentos físicos impressos",
      "A assinatura digital tem validade jurídica garantida por certificado criptográfico; a digitalizada é apenas imagem escaneada, sem validade legal por si só"
    ],
    a: 3
  },

  /* ── E-MAIL PROFISSIONAL ─────────────────────────────── */
  {
    c: "E-mail Profissional",
    q: "O que deve constar obrigatoriamente em um e-mail profissional?",
    o: [
      "Apenas o texto da mensagem, sem necessidade de assunto",
      "Assunto claro e objetivo, destinatário correto, corpo da mensagem e assinatura profissional",
      "Somente os anexos necessários",
      "O número de telefone do remetente no campo de assunto"
    ],
    a: 1
  },
  {
    c: "E-mail Profissional",
    q: "Qual a diferença entre 'Responder' e 'Responder a Todos' em um e-mail?",
    o: [
      "São funções idênticas sem diferença prática",
      "'Responder a Todos' remove os destinatários originais da mensagem",
      "'Responder' envia somente ao remetente original; 'Responder a Todos' envia também a todos os copiados no e-mail",
      "'Responder' envia automaticamente com os anexos do e-mail original"
    ],
    a: 2
  },
  {
    c: "E-mail Profissional",
    q: "O que é o campo 'CCO' (Cópia Oculta / BCC) em um e-mail?",
    o: [
      "Campo obrigatório em todos os e-mails formais",
      "Usado para adicionar anexos ao e-mail",
      "Significa 'Cópia Com Original' para fins de arquivamento",
      "Permite incluir destinatário que recebe a mensagem sem que os outros vejam seu endereço de e-mail"
    ],
    a: 3
  },
  {
    c: "E-mail Profissional",
    q: "O que é spam no contexto de e-mail?",
    o: [
      "E-mails não solicitados enviados em massa, geralmente com fins publicitários ou maliciosos",
      "Um arquivo compactado enviado por e-mail",
      "Uma pasta especial para e-mails prioritários",
      "Um formato de assinatura eletrônica profissional"
    ],
    a: 0
  },

  /* ── SISTEMAS JURÍDICOS ──────────────────────────────── */
  {
    c: "Sistemas Jurídicos",
    q: "O que é o PJe (Processo Judicial Eletrônico)?",
    o: [
      "Um programa de edição de textos jurídicos como petições",
      "O sistema oficial para tramitação eletrônica de processos judiciais na Justiça brasileira",
      "Um sistema de gestão de clientes para escritórios de advocacia",
      "Uma ferramenta de videoconferência para audiências virtuais"
    ],
    a: 1
  },
  {
    c: "Sistemas Jurídicos",
    q: "Para assinar documentos eletronicamente no PJe, o advogado precisa de:",
    o: [
      "Apenas login e senha comuns do portal",
      "Uma assinatura escaneada salva em formato JPG",
      "Somente cadastro no portal Gov.br com foto",
      "Certificado Digital ICP-Brasil (token físico ou certificado em nuvem)"
    ],
    a: 3
  },
  {
    c: "Sistemas Jurídicos",
    q: "O que é um Certificado Digital ICP-Brasil?",
    o: [
      "Um simples cadastro online sem valor legal",
      "Um plugin instalado no navegador para acesso a sites governamentais",
      "Uma identidade digital com validade jurídica garantida por lei, emitida por Autoridade Certificadora credenciada, que permite assinar documentos eletronicamente",
      "Um tipo de antivírus obrigatório para acessar sistemas do Judiciário"
    ],
    a: 2
  },

  /* ── ROTINAS JURÍDICAS ───────────────────────────────── */
  {
    c: "Rotinas Jurídicas",
    q: "O que é o Diário da Justiça Eletrônico (DJe)?",
    o: [
      "Um jornal impresso com publicações de sentenças do Judiciário",
      "A versão eletrônica do Diário da Justiça, onde são publicadas decisões, intimações e atos processuais com validade legal",
      "Um sistema de agendamento de audiências virtuais nos tribunais",
      "Um programa de consulta de jurisprudência pago"
    ],
    a: 1
  },
  {
    c: "Rotinas Jurídicas",
    q: "Por que é importante monitorar as publicações no Diário da Justiça Eletrônico (DJe)?",
    o: [
      "Apenas para conhecimento geral, sem impacto nos processos",
      "Não é necessário; o sistema notifica automaticamente por SMS",
      "Serve somente para acompanhar processos de outros escritórios",
      "As publicações no DJe iniciam a contagem de prazos processuais — perder uma publicação pode gerar perda de prazo e prejuízo ao cliente"
    ],
    a: 3
  },
  {
    c: "Rotinas Jurídicas",
    q: "O que é o protocolo eletrônico de petições e como é realizado no PJe?",
    o: [
      "Envio de petições por e-mail ao juiz responsável pelo processo",
      "Impressão e entrega física da petição no balcão do fórum",
      "Envio digital da petição assinada com certificado digital pelo sistema PJe, sem necessidade de deslocamento ao fórum",
      "Envio por correio registrado para o tribunal competente"
    ],
    a: 2
  },
  {
    c: "Rotinas Jurídicas",
    q: "No CPC, os prazos processuais são contados, como regra geral, em:",
    o: [
      "Dias corridos, incluindo sábados, domingos e feriados",
      "Horas úteis, excluindo apenas finais de semana",
      "Dias úteis, excluindo sábados, domingos e feriados nacionais",
      "Semanas completas, contando sempre de segunda a segunda"
    ],
    a: 2
  },
  {
    c: "Rotinas Jurídicas",
    q: "Para que serve a consulta ao andamento processual online?",
    o: [
      "Para solicitar cópias físicas de processos no balcão do fórum",
      "Para verificar em tempo real as movimentações, decisões e intimações de um processo sem precisar ir ao fórum",
      "Para protocolar novas petições eletronicamente",
      "Para agendar audiências com o magistrado responsável"
    ],
    a: 1
  },
  {
    c: "Rotinas Jurídicas",
    q: "O que é uma Procuração Eletrônica e quando ela é necessária?",
    o: [
      "Um contrato digital de trabalho entre advogado e cliente",
      "Documento assinado digitalmente que concede poderes ao advogado para representar o cliente em processos eletrônicos, exigida em sistemas como o PJe",
      "Um cadastro de advogado no portal da OAB online",
      "Uma cópia digitalizada da procuração física tradicional"
    ],
    a: 1
  },
  {
    c: "Rotinas Jurídicas",
    q: "O que é o SEI (Sistema Eletrônico de Informações) e onde é utilizado?",
    o: [
      "Um sistema de gestão financeira para escritórios de advocacia privados",
      "Um software de backup automático para documentos jurídicos",
      "Uma rede social exclusiva para advogados e magistrados",
      "Plataforma de gestão de documentos e processos administrativos usada em órgãos públicos federais e estaduais"
    ],
    a: 3
  },
  {
    c: "Rotinas Jurídicas",
    q: "Como verificar a autenticidade de um documento com assinatura digital?",
    o: [
      "Verificar somente se o documento tem uma imagem de assinatura",
      "Confirmar que o arquivo está salvo em formato PDF",
      "Utilizar ferramentas de validação de assinatura digital (como o verificador do ITI ou Adobe Acrobat) que confirmam validade do certificado e integridade do documento",
      "Perguntar ao remetente se ele assinou digitalmente"
    ],
    a: 2
  },

  /* ── ORGANIZAÇÃO DE ARQUIVOS ─────────────────────────── */
  {
    c: "Organização de Arquivos",
    q: "Qual é a melhor prática para nomear arquivos de documentos jurídicos?",
    o: [
      "arquivo1.docx",
      "NOVO (cópia) (1).docx",
      "documento final versão 3 revisado ok.docx",
      "2024-11-15_Contrato_Joao_Silva_v1.docx"
    ],
    a: 3
  },
  {
    c: "Organização de Arquivos",
    q: "O que é a extensão de um arquivo? Qual extensão identifica um documento do Word?",
    o: [
      "O tamanho do arquivo em megabytes; Word usa .mb",
      "O local no computador onde o arquivo está salvo",
      "As letras após o ponto no nome do arquivo que indicam seu tipo e formato; o Word usa .docx",
      "O ícone visual do arquivo"
    ],
    a: 2
  },
  {
    c: "Organização de Arquivos",
    q: "Qual a diferença entre 'Excluir' e 'Excluir Permanentemente' (Shift+Delete)?",
    o: [
      "São iguais; ambos removem o arquivo definitivamente",
      "'Excluir Permanentemente' move o arquivo para uma pasta de backup",
      "'Excluir' envia para a Lixeira (recuperável); 'Excluir Permanentemente' remove sem passar pela Lixeira",
      "Arquivos jurídicos não podem ser excluídos permanentemente"
    ],
    a: 2
  },
  {
    c: "Organização de Arquivos",
    q: "Para que serve um arquivo compactado (ZIP)?",
    o: [
      "Reduzir o tamanho de um ou mais arquivos para facilitar armazenamento e envio por e-mail ou sistemas eletrônicos",
      "Um formato criptografado com senha obrigatória",
      "Um formato exclusivo do Windows para backup automático",
      "Um arquivo que não pode ser aberto sem software pago"
    ],
    a: 0
  },

  /* ── SEGURANÇA DA INFORMAÇÃO ─────────────────────────── */
  {
    c: "Segurança da Informação",
    q: "O que caracteriza uma senha FORTE para proteção de contas e sistemas?",
    o: [
      "O próprio nome do usuário com números no final",
      "A data de aniversário para facilitar a memorização",
      "Uma palavra simples e curta para não esquecer",
      "Combinação de letras maiúsculas, minúsculas, números e símbolos, com pelo menos 8 caracteres"
    ],
    a: 3
  },
  {
    c: "Segurança da Informação",
    q: "O que é phishing?",
    o: [
      "Um antivírus que protege contra ataques online",
      "Um programa de backup automático de arquivos",
      "Uma técnica em que criminosos tentam enganar usuários com e-mails ou sites falsos para roubar dados e senhas",
      "Um sistema de armazenamento em nuvem para documentos sigilosos"
    ],
    a: 2
  },
  {
    c: "Segurança da Informação",
    q: "Um colega recebe e-mail de um 'banco' pedindo para clicar em link urgente e atualizar dados. O que fazer?",
    o: [
      "Clicar no link e preencher os dados solicitados",
      "Encaminhar para todos os colegas para informar",
      "Responder o e-mail pedindo mais informações de segurança",
      "Não clicar, verificar o endereço real do remetente e reportar como phishing ao responsável de TI"
    ],
    a: 3
  },
  {
    c: "Segurança da Informação",
    q: "Por que não usar pendrives desconhecidos nos computadores do escritório?",
    o: [
      "Pendrives de marcas desconhecidas são lentos e travam o sistema",
      "Podem conter vírus ou malwares que comprometem dados sigilosos dos clientes e do escritório",
      "Ocupam muita memória RAM ao serem conectados",
      "O sistema operacional não reconhece pendrives de fabricantes não cadastrados"
    ],
    a: 1
  },
  {
    c: "Segurança da Informação",
    q: "O que é autenticação de dois fatores (2FA)?",
    o: [
      "Um sistema que exige duas senhas diferentes para o mesmo acesso",
      "Uma forma de login usando dois computadores simultaneamente",
      "Um método que cria duas cópias de backup de cada arquivo",
      "Um método de segurança que adiciona segunda camada de verificação (ex: código via SMS) além da senha, dificultando acessos não autorizados"
    ],
    a: 3
  },

  /* ── INTERNET E NAVEGADOR ────────────────────────────── */
  {
    c: "Internet e Navegador",
    q: "O que é um navegador (browser)? Cite exemplos.",
    o: [
      "Programa de edição de texto; Word e LibreOffice",
      "Antivírus; Avast e Kaspersky",
      "Sistema operacional; Windows e macOS",
      "Programa para acessar a internet; Google Chrome, Firefox e Microsoft Edge"
    ],
    a: 3
  },
  {
    c: "Internet e Navegador",
    q: "O que significa 'HTTPS' no endereço de um site?",
    o: [
      "Que o site é gratuito e sem necessidade de cadastro",
      "Que a conexão entre o navegador e o site é segura e criptografada",
      "Que o site é oficial do governo federal",
      "Que o site possui certificado de qualidade verificado"
    ],
    a: 1
  },
  {
    c: "Internet e Navegador",
    q: "O que são cookies no contexto de navegadores de internet?",
    o: [
      "Arquivos maliciosos que infectam o computador ao visitar sites",
      "Extensões obrigatórias instaladas pelos sites visitados",
      "Imagens em cache que agilizam o carregamento de páginas",
      "Pequenos arquivos armazenados pelo navegador com informações da navegação, como preferências e sessão de login"
    ],
    a: 3
  },

  /* ── NUVEM E ARMAZENAMENTO ───────────────────────────── */
  {
    c: "Nuvem e Armazenamento",
    q: "O que é armazenamento em nuvem (Cloud Storage)? Cite exemplos.",
    o: [
      "Memória RAM mais rápida para servidores; DDR4 e DDR5",
      "HD externo portátil para backup; Seagate e Western Digital",
      "Sistema de compactação de arquivos; ZIP e RAR",
      "Armazenamento de arquivos em servidores remotos acessíveis pela internet; Google Drive, OneDrive e Dropbox"
    ],
    a: 3
  },
  {
    c: "Nuvem e Armazenamento",
    q: "Qual a principal vantagem de salvar documentos jurídicos em nuvem (Google Drive / OneDrive)?",
    o: [
      "Os arquivos ficam públicos para facilitar compartilhamento com clientes",
      "Os arquivos na nuvem não podem ser modificados, garantindo integridade absoluta",
      "Os documentos ficam acessíveis de qualquer dispositivo com internet e protegidos em caso de falha ou perda do computador local",
      "A nuvem protege automaticamente contra qualquer hacker sem necessidade de senhas"
    ],
    a: 2
  },

  /* ── REDES E CONECTIVIDADE ───────────────────────────── */
  {
    c: "Redes e Conectividade",
    q: "Qual a diferença entre rede Wi-Fi pública e rede Wi-Fi privada?",
    o: [
      "Wi-Fi é exclusivo para computadores; redes públicas são mais rápidas",
      "Redes privadas são sempre pagas; redes públicas são sempre gratuitas",
      "Não há diferença de segurança entre os dois tipos",
      "Redes públicas (cafés, aeroportos) oferecem muito menos segurança que redes privadas protegidas por senha"
    ],
    a: 3
  },
  {
    c: "Redes e Conectividade",
    q: "O que é uma VPN e por que pode ser útil em escritório de advocacia?",
    o: [
      "É um programa antivírus avançado para proteção contra hackers",
      "É um serviço que aumenta a velocidade da internet do escritório",
      "É uma tecnologia que cria conexão segura e criptografada, protegendo dados sigilosos ao acessar sistemas remotamente",
      "É um sistema de backup automático para documentos confidenciais"
    ],
    a: 2
  }

]; // Fim do banco — total: 69 questões


/* ═══════════════════════════════════════════════════════
   ESTADO DA APLICAÇÃO
═══════════════════════════════════════════════════════ */
const S = {
  cfg: { name: '', nq: 20, min: 30 },
  qs:  [],
  ans: {},          // { índice: opção selecionada }
  cur: 0,
  totalSecs:  0,
  remaining:  0,
  used:       0,
  timer:      null,
  done:       false
};


/* ═══════════════════════════════════════════════════════
   GERENCIAMENTO DE TELAS
═══════════════════════════════════════════════════════ */
function go(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}


/* ═══════════════════════════════════════════════════════
   STEPPERS — Número de Questões e Tempo de Prova
═══════════════════════════════════════════════════════ */
const Q_MIN = 10, Q_MAX = 50, Q_STEP = 1;
const T_MIN = 10, T_MAX = 120, T_STEP = 5;
const Q_PRESETS = [10, 15, 20, 25, 30, 40, 50];
const T_PRESETS = [15, 20, 30, 45, 60, 90];

let qVal = 20;
let tVal = 30;

function setQ(v) {
  qVal = Math.max(Q_MIN, Math.min(Q_MAX, Math.round(v)));
  document.getElementById('dq').textContent = qVal;
  document.getElementById('q-minus').disabled = qVal <= Q_MIN;
  document.getElementById('q-plus').disabled  = qVal >= Q_MAX;
  document.querySelectorAll('#chips-q .chip').forEach(c => {
    c.classList.toggle('active', parseInt(c.dataset.val) === qVal);
  });
}

function setT(v) {
  tVal = Math.max(T_MIN, Math.min(T_MAX, Math.round(v / T_STEP) * T_STEP));
  document.getElementById('dt').textContent = tVal;
  document.getElementById('t-minus').disabled = tVal <= T_MIN;
  document.getElementById('t-plus').disabled  = tVal >= T_MAX;
  document.querySelectorAll('#chips-t .chip').forEach(c => {
    c.classList.toggle('active', parseInt(c.dataset.val) === tVal);
  });
}

/* ═══════════════════════════════════════════════════════
   TELA DE CONFIGURAÇÃO
═══════════════════════════════════════════════════════ */
function goWelcome() {
  const nameEl = document.getElementById('cfg-name');
  const name   = nameEl.value.trim();

  if (!name) {
    nameEl.style.borderColor = 'var(--red)';
    nameEl.focus();
    return;
  }

  S.cfg.name = name;
  S.cfg.nq   = qVal;
  S.cfg.min  = tVal;

  document.getElementById('w-name').textContent = name;
  document.getElementById('w-q').textContent    = qVal;
  document.getElementById('w-t').textContent    = tVal;

  go('s-welcome');
}


/* ═══════════════════════════════════════════════════════
   INICIALIZAÇÃO DO TESTE
═══════════════════════════════════════════════════════ */
function startTest() {
  // Embaralha e seleciona N questões do banco
  const pool = [...QB].sort(() => Math.random() - 0.5);
  S.qs  = pool.slice(0, S.cfg.nq);
  S.ans = {};
  S.cur = 0;
  S.done = false;
  S.totalSecs = S.cfg.min * 60;
  S.remaining = S.totalSecs;
  S.used      = 0;

  document.getElementById('t-name').textContent = S.cfg.name;

  buildGrid();
  go('s-test');
  startTimer();
  renderQuestion();
}


/* ═══════════════════════════════════════════════════════
   CRONÔMETRO
═══════════════════════════════════════════════════════ */
function startTimer() {
  clearInterval(S.timer);
  S.timer = setInterval(() => {
    S.remaining--;
    S.used++;
    updateTimerDisplay();
    if (S.remaining <= 0) {
      clearInterval(S.timer);
      autoFinish();
    }
  }, 1000);
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const el   = document.getElementById('t-timer');
  el.textContent = fmt(S.remaining);
  el.className   = 't-timer';
  if      (S.remaining <= 60)                  el.classList.add('danger');
  else if (S.remaining <= S.totalSecs * 0.2)   el.classList.add('warn');
}

function autoFinish() {
  S.done = true;
  S.used = S.totalSecs;
  showComplete();
}


/* ═══════════════════════════════════════════════════════
   GRADE DE QUESTÕES (SIDEBAR)
═══════════════════════════════════════════════════════ */
function buildGrid() {
  const grid = document.getElementById('q-grid');
  grid.innerHTML = '';
  S.qs.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'q-dot';
    dot.id        = 'qd' + i;
    dot.textContent = String(i + 1).padStart(2, '0');
    dot.addEventListener('click', () => {
      S.cur = i;
      closeSidebar();
      renderQuestion();
    });
    grid.appendChild(dot);
  });
  syncGrid();
}

function syncGrid() {
  const n = S.qs.length;
  S.qs.forEach((_, i) => {
    const dot = document.getElementById('qd' + i);
    if (!dot) return;
    dot.className = 'q-dot';
    if (i === S.cur)              dot.classList.add('current');
    if (S.ans[i] !== undefined)   dot.classList.add('answered');
  });

  const done = Object.keys(S.ans).length;
  const pct  = Math.round(done / n * 100);
  document.getElementById('sb-prog').textContent      = `${done}/${n} (${pct}%)`;
  document.getElementById('prog-fill').style.width    = pct + '%';
  document.getElementById('t-mobile-prog-fill').style.width = pct + '%';
}


/* ═══════════════════════════════════════════════════════
   RENDERIZAÇÃO DE QUESTÃO
═══════════════════════════════════════════════════════ */
const LETTERS = ['A', 'B', 'C', 'D'];

function renderQuestion() {
  const q = S.qs[S.cur];
  const i = S.cur;
  const n = S.qs.length;

  document.getElementById('q-num').textContent  = String(i + 1).padStart(2, '0');
  document.getElementById('q-cat').textContent  = q.c;
  document.getElementById('q-text').textContent = q.q;
  document.getElementById('nav-info').textContent = `Questão ${i + 1} de ${n}`;

  // Botões de navegação
  document.getElementById('btn-prev').style.visibility = i === 0 ? 'hidden' : 'visible';
  document.getElementById('btn-next').textContent      = i === n - 1 ? 'Ver Resumo →' : 'Próxima →';

  // Alternativas
  const opts = document.getElementById('opts');
  opts.innerHTML = '';
  q.o.forEach((text, oi) => {
    const div = document.createElement('div');
    div.className = 'opt' + (S.ans[i] === oi ? ' sel' : '');
    div.addEventListener('click', () => selectOption(oi));
    div.innerHTML = `
      <div class="opt-letter">${LETTERS[oi]}</div>
      <div class="opt-text">${text}</div>
    `;
    opts.appendChild(div);
  });

  document.getElementById('t-main').scrollTop = 0;
  syncGrid();
}

function selectOption(oi) {
  S.ans[S.cur] = oi;
  renderQuestion();
}


/* ═══════════════════════════════════════════════════════
   NAVEGAÇÃO ENTRE QUESTÕES
═══════════════════════════════════════════════════════ */
function navigate(dir) {
  const n = S.qs.length;
  if (dir === -1 && S.cur > 0) {
    S.cur--;
    renderQuestion();
  } else if (dir === 1 && S.cur < n - 1) {
    S.cur++;
    renderQuestion();
  } else if (dir === 1 && S.cur === n - 1) {
    openFinalizeModal();
  }
}


/* ═══════════════════════════════════════════════════════
   SIDEBAR MOBILE — abrir/fechar
═══════════════════════════════════════════════════════ */
function openSidebar() {
  document.getElementById('t-sidebar').classList.add('open');
  document.getElementById('sidebar-overlay').classList.add('on');
}

function closeSidebar() {
  document.getElementById('t-sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('on');
}


/* ═══════════════════════════════════════════════════════
   MODAL DE FINALIZAÇÃO
═══════════════════════════════════════════════════════ */
function openFinalizeModal() {
  const skipped = S.qs.length - Object.keys(S.ans).length;
  const warn    = document.getElementById('modal-warn');

  if (skipped > 0) {
    warn.style.display = 'block';
    warn.textContent   = `⚠ Você ainda tem ${skipped} questão(ões) sem resposta. Serão contadas como erro.`;
  } else {
    warn.style.display = 'none';
  }

  document.getElementById('modal').classList.add('on');
}

function closeFinalizeModal() {
  document.getElementById('modal').classList.remove('on');
}

function finalizeTest() {
  closeFinalizeModal();
  clearInterval(S.timer);
  S.done = true;
  showComplete();
}


/* ═══════════════════════════════════════════════════════
   TELA DE CONCLUSÃO
═══════════════════════════════════════════════════════ */
function showComplete() {
  const n      = S.qs.length;
  const done   = Object.keys(S.ans).length;
  const skipped = n - done;

  document.getElementById('c-name').textContent  = S.cfg.name.split(' ')[0];
  document.getElementById('c-ans').textContent   = done;
  document.getElementById('c-skip').textContent  = skipped;
  document.getElementById('c-time').textContent  = fmt(S.used);

  go('s-complete');
}


/* ═══════════════════════════════════════════════════════
   TELA DE RESULTADOS (INSTRUTOR)
═══════════════════════════════════════════════════════ */
function showResults() {
  let correct = 0, incorrect = 0, skipped = 0;

  S.qs.forEach((q, i) => {
    if      (S.ans[i] === undefined) skipped++;
    else if (S.ans[i] === q.a)       correct++;
    else                              incorrect++;
  });

  const n   = S.qs.length;
  const pct = Math.round(correct / n * 100);

  // Cabeçalho
  document.getElementById('r-sub').textContent = `${S.cfg.name} — Informática Básica para Área Jurídica`;

  // Círculo de pontuação
  document.getElementById('sc-pct').textContent  = pct + '%';
  document.getElementById('sc-frac').textContent = `${correct}/${n}`;
  const circle = document.getElementById('sc-circle');
  circle.className = 'score-circle' + (pct < 40 ? ' low' : pct < 70 ? ' med' : '');

  // Estatísticas
  document.getElementById('r-ok').textContent = correct;
  document.getElementById('r-ko').textContent = incorrect;
  document.getElementById('r-sk').textContent = skipped;
  document.getElementById('r-tm').textContent = fmt(S.used);

  // Nível de desempenho
  const badge = document.getElementById('r-lvl');
  if      (pct >= 88) { badge.textContent = 'Avançado — Excelente preparação digital';              badge.className = 'lvl-badge av'; }
  else if (pct >= 72) { badge.textContent = 'Bom — Pronto para trabalho com orientação mínima';     badge.className = 'lvl-badge bm'; }
  else if (pct >= 44) { badge.textContent = 'Intermediário — Necessita de treinamento básico';       badge.className = 'lvl-badge md'; }
  else                { badge.textContent = 'Básico — Requer treinamento antes de assumir funções';  badge.className = 'lvl-badge bs'; }

  // Revisão questão a questão
  const container = document.getElementById('res-qs');
  container.innerHTML = '';

  S.qs.forEach((q, i) => {
    const ua      = S.ans[i];
    const isSkip  = ua === undefined;
    const isOk    = ua === q.a;
    const cls     = isSkip ? 'sk' : isOk ? 'ok' : 'ko';
    const label   = isSkip ? 'Em Branco' : isOk ? 'Correto' : 'Incorreto';

    const optsHTML = q.o.map((opt, oi) => {
      let cls = 'res-opt';
      if (oi === q.a)                   cls += ' is-correct';
      else if (oi === ua && !isOk)      cls += ' is-wrong';
      const mark = oi === q.a ? '✓' : (oi === ua && !isOk ? '✗' : '');
      return `
        <div class="${cls}">
          <span class="res-opt-ltr">${LETTERS[oi]}</span>
          <span style="flex:1">${opt}</span>
          ${mark ? `<strong>${mark}</strong>` : ''}
        </div>`;
    }).join('');

    const el = document.createElement('div');
    el.className = `res-q ${cls}`;
    el.innerHTML = `
      <div class="res-q-top">
        <div>
          <div class="res-q-num">QUESTÃO ${String(i + 1).padStart(2, '0')} — ${q.c.toUpperCase()}</div>
          <div class="res-q-txt">${q.q}</div>
        </div>
        <span class="res-q-tag ${cls}">${label}</span>
      </div>
      <div class="res-opts">${optsHTML}</div>
    `;
    container.appendChild(el);
  });

  go('s-results');
}


/* ═══════════════════════════════════════════════════════
   NOVA AVALIAÇÃO (reset)
═══════════════════════════════════════════════════════ */
function resetApp() {
  clearInterval(S.timer);
  Object.assign(S, {
    qs: [], ans: {}, cur: 0,
    totalSecs: 0, remaining: 0, used: 0,
    timer: null, done: false
  });
  document.getElementById('cfg-name').value = '';
  setQ(20);
  setT(30);
}


/* ═══════════════════════════════════════════════════════
   UTILITÁRIOS
═══════════════════════════════════════════════════════ */
function fmt(secs) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
}


/* ═══════════════════════════════════════════════════════
   EVENT LISTENERS
═══════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  // Config — nome
  document.getElementById('btn-start-cfg').addEventListener('click', goWelcome);
  document.getElementById('cfg-name').addEventListener('input', function () {
    this.style.borderColor = '';
  });

  // Config — stepper questões
  document.getElementById('q-minus').addEventListener('click', () => setQ(qVal - Q_STEP));
  document.getElementById('q-plus').addEventListener('click',  () => setQ(qVal + Q_STEP));
  document.querySelectorAll('#chips-q .chip').forEach(chip => {
    chip.addEventListener('click', () => setQ(parseInt(chip.dataset.val)));
  });

  // Config — stepper tempo
  document.getElementById('t-minus').addEventListener('click', () => setT(tVal - T_STEP));
  document.getElementById('t-plus').addEventListener('click',  () => setT(tVal + T_STEP));
  document.querySelectorAll('#chips-t .chip').forEach(chip => {
    chip.addEventListener('click', () => setT(parseInt(chip.dataset.val)));
  });

  // Inicializa valores e estados dos botões
  setQ(20);
  setT(30);

  // Welcome
  document.getElementById('btn-start-test').addEventListener('click', startTest);

  // Test — navegação
  document.getElementById('btn-prev').addEventListener('click', () => navigate(-1));
  document.getElementById('btn-next').addEventListener('click', () => navigate(1));

  // Test — sidebar mobile
  document.getElementById('btn-toggle-sidebar').addEventListener('click', openSidebar);
  document.getElementById('btn-close-sidebar').addEventListener('click', closeSidebar);
  document.getElementById('sidebar-overlay').addEventListener('click', closeSidebar);

  // Test — finalizar
  document.getElementById('btn-finalize').addEventListener('click', openFinalizeModal);
  document.getElementById('btn-cancel-modal').addEventListener('click', closeFinalizeModal);
  document.getElementById('btn-confirm-finalize').addEventListener('click', finalizeTest);
  document.getElementById('modal').addEventListener('click', function (e) {
    if (e.target === this) closeFinalizeModal();
  });

  // Complete — acesso instrutor
  document.getElementById('btn-results').addEventListener('click', showResults);

  // Results — nova avaliação
  document.getElementById('btn-new-eval').addEventListener('click', () => {
    resetApp();
    go('s-config');
  });

});
