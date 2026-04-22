/* ═══════════════════════════════════════════════════════════
   VIEIRA ALVES ADVOCACIA — Sistema de Avaliação de Estágio
   script.js
═══════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════
   BANCO DE QUESTÕES
   Categoria: Informática Básica
═══════════════════════════════════════════════════════ */
const QB = [

  // ── Atalhos de Teclado ──────────────────────────────
  { c: "Informática Básica", q: "Você precisa copiar um trecho de uma petição para usar em outro documento. Qual atalho de teclado realiza essa ação?", o: ["Ctrl + V", "Ctrl + C", "Ctrl + X", "Ctrl + Z"], a: 1 },
  { c: "Informática Básica", q: "Após copiar um parágrafo de um contrato, você deseja inseri-lo em outro local do documento. Qual atalho utiliza para colar o conteúdo copiado?", o: ["Ctrl + C", "Ctrl + X", "Ctrl + V", "Ctrl + A"], a: 2 },
  { c: "Informática Básica", q: "Você quer mover um trecho de texto para outra posição no documento sem deixar uma cópia no local original. Qual atalho deve usar?", o: ["Ctrl + C", "Ctrl + X", "Ctrl + V", "Ctrl + D"], a: 1 },
  { c: "Informática Básica", q: "Ao formatar um parágrafo por engano, você quer desfazer imediatamente a última ação realizada. Qual atalho utiliza?", o: ["Ctrl + Y", "Ctrl + S", "Ctrl + Z", "Ctrl + D"], a: 2 },
  { c: "Informática Básica", q: "Você desfez uma ação com Ctrl + Z, mas percebeu que ela estava correta e quer restaurá-la. Qual atalho refaz a ação desfeita?", o: ["Ctrl + X", "Ctrl + Y", "Ctrl + Z", "Ctrl + R"], a: 1 },
  { c: "Informática Básica", q: "Ao terminar de redigir um ofício, você quer salvá-lo rapidamente sem usar o mouse. Qual atalho de teclado realiza essa ação?", o: ["Ctrl + A", "Ctrl + P", "Ctrl + N", "Ctrl + S"], a: 3 },
  { c: "Informática Básica", q: "Você precisa selecionar todo o conteúdo de um documento de uma só vez para alterar a fonte globalmente no MicrosoftWord. Qual atalho utiliza?", o: ["Ctrl + T", "Ctrl + A", "Ctrl + S", "Ctrl + E"], a: 0 },
  { c: "Informática Básica", q: "Com o cursor posicionado após uma letra, você quer apagar o caractere imediatamente à esquerda do cursor. Qual tecla pressiona?", o: ["Delete", "Enter", "Tab", "Backspace"], a: 3 },
  { c: "Informática Básica", q: "Com o cursor posicionado antes de uma letra, você quer deletá-la sem mover o cursor para trás. Qual tecla utiliza?", o: ["Backspace", "Delete", "Shift", "Esc"], a: 1 },
  { c: "Informática Básica", q: "Você selecionou o título de um relatório e quer aplicar negrito rapidamente, sem tirar as mãos do teclado. Qual atalho utiliza?", o: ["Ctrl + I", "Ctrl + N", "Ctrl + B", "Ctrl + T"], a: 1 },

  // ── Formatação de Texto ─────────────────────────────
  { c: "Informática Básica", q: "Ao escrever um termo em latim em um contrato (ex.: 'habeas corpus'), a norma culta recomenda deixá-lo em itálico. Qual atalho aplica essa formatação?", o: ["Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + E"], a: 1 },
  { c: "Informática Básica", q: "Para destacar uma cláusula importante de um contrato com sublinhado, você seleciona o texto e utiliza qual atalho?", o: ["Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + S"], a: 3 },
  { c: "Informática Básica", q: "A ABNT recomenda que o corpo do texto de documentos formais seja alinhado de forma que ocupe uniformemente as margens esquerda e direita ao mesmo tempo. Esse tipo de alinhamento chama-se:", o: ["Centralizado", "À direita", "À esquerda", "Justificado"], a: 3 },
  { c: "Informática Básica", q: "Ao digitar o título de uma seção em um relatório, você quer posicioná-lo no centro da página. Qual opção de alinhamento deve aplicar?", o: ["Justificado", "À esquerda", "Centralizado", "À direita"], a: 2 },
  { c: "Informática Básica", q: "Uma palavra no documento está sublinhada com uma linha vermelha ondulada. O que isso geralmente indica?", o: ["A palavra está formatada em negrito", "Possível erro ortográfico ou palavra não reconhecida pelo corretor", "O texto está centralizado incorretamente", "A fonte selecionada não está instalada"], a: 1 },
  { c: "Informática Básica", q: "Para corrigir rapidamente uma palavra marcada com erro ortográfico (sublinhada em vermelho), qual é o procedimento mais ágil?", o: ["Apagar a palavra inteira e redigitá-la", "Clicar com o botão direito sobre ela e selecionar a sugestão correta", "Ignorar o sublinhado e continuar digitando", "Fechar e reabrir o documento"], a: 1 },
  { c: "Informática Básica", q: "Ao preparar uma lista de documentos exigidos em um processo judicial, qual recurso de formatação torna a leitura mais clara e organizada?", o: ["Negrito em todo o texto", "Lista com marcadores ou numeração", "Texto inteiro em letras maiúsculas", "Fonte em cor diferente para cada item"], a: 1 },
  { c: "Informática Básica", q: "Você quer alterar o tamanho da fonte do cabeçalho de um relatório de 12 para 16 pontos. Onde realiza essa alteração no Word?", o: ["No menu Inserir > Cabeçalho", "No campo de tamanho de fonte na aba Página Inicial ou barra de ferramentas", "No menu Arquivo > Informações", "No rodapé do documento"], a: 1 },
  { c: "Informática Básica", q: "Em um documento de texto, o que o recurso 'Espaçamento entre linhas' controla?", o: ["A largura das margens laterais", "A distância vertical entre uma linha de texto e a seguinte", "A cor de fundo do parágrafo", "O número de colunas da página"], a: 1 },
  { c: "Informática Básica", q: "Você deseja que um documento extenso tenha uma aparência uniforme, com partes bem definidas. Qual recurso do Word permite aplicar o mesmo estilo de título a várias seções de forma consistente?", o: ["Copiar e colar a formatação manualmente em cada seção", "Usar os 'Estilos' da aba Página Inicial para aplicar padrões como Título 1, Título 2, etc.", "Alterar a fonte de todo o documento de uma vez", "Inserir uma tabela para organizar as seções"], a: 1 },

  // ── Gerenciamento de Arquivos ───────────────────────
  { c: "Informática Básica", q: "Você finalizou um contrato e quer salvá-lo com um nome específico em uma pasta determinada, sem sobrescrever a versão anterior. Qual opção utiliza?", o: ["Ctrl + S (Salvar)", "Ctrl + P (Imprimir)", "Salvar como (F12 ou Arquivo > Salvar como)", "Ctrl + W (Fechar)"], a: 2 },
  { c: "Informática Básica", q: "Você recebeu um arquivo chamado 'doc_final.docx' e precisa renomeá-lo para 'Contrato_Silva_2024.docx'. Como fazer isso no Windows?", o: ["Abrir o arquivo e alterar o título dentro do documento", "Clicar com o botão direito no arquivo e selecionar 'Renomear'", "Mover o arquivo para outra pasta e abri-lo novamente", "Criar uma cópia do arquivo e apagar o original"], a: 1 },
  { c: "Informática Básica", q: "Para organizar processos de diferentes clientes no computador do escritório, qual prática é mais recomendada?", o: ["Salvar todos os arquivos diretamente na Área de Trabalho", "Criar uma pasta para cada cliente, com subpastas por tipo de documento ou ano", "Usar nomes genéricos como 'doc1', 'doc2' para agilizar", "Guardar tudo em um único arquivo compactado"], a: 1 },
  { c: "Informática Básica", q: "Você precisa mover a minuta de um contrato da pasta 'Rascunhos' para a pasta 'Aprovados', sem manter cópia na pasta de origem. Qual é a maneira correta?", o: ["Copiar (Ctrl+C) e colar (Ctrl+V) na nova pasta, deixando cópia em ambas", "Recortar (Ctrl+X) na pasta de origem e colar (Ctrl+V) na pasta de destino", "Abrir o arquivo e salvá-lo novamente com outro nome na nova pasta", "Arrastar o arquivo para a barra de tarefas"], a: 1 },
  { c: "Informática Básica", q: "Você não se lembra em qual pasta salvou um arquivo urgente. Qual recurso do Windows permite localizá-lo rapidamente?", o: ["Abrir todos os programas instalados para procurar", "Usar a barra de pesquisa do Windows (tecla Windows + S ou a lupa na barra de tarefas)", "Reiniciar o computador para que o arquivo apareça", "Verificar o histórico do navegador de internet"], a: 1 },
  { c: "Informática Básica", q: "Qual é a extensão padrão dos documentos criados no Microsoft Word a partir da versão 2007?", o: [".doc", ".txt", ".docx", ".pdf"], a: 2 },
  { c: "Informática Básica", q: "Uma vantagem de enviar documentos finalizados no formato PDF, em vez de .docx, é:", o: ["O PDF ocupa sempre menos espaço em disco que o .docx", "O PDF preserva a formatação original e evita edições acidentais por terceiros", "O PDF pode ser editado por qualquer pessoa sem programas específicos", "O PDF só pode ser aberto em computadores com Windows"], a: 1 },
  { c: "Informática Básica", q: "Você excluiu um arquivo por engano no Windows. Qual é o primeiro lugar onde deve procurá-lo para tentar recuperá-lo?", o: ["A pasta 'Documentos'", "O Gerenciador de Tarefas", "A Lixeira", "O Painel de Controle"], a: 2 },
  { c: "Informática Básica", q: "Você precisa substituir todas as ocorrências de um nome incorreto em um documento longo (ex.: 'João' por 'José', em 20 trechos). Qual recurso é mais eficiente?", o: ["Ler o documento inteiro e corrigir cada ocorrência manualmente", "Usar 'Localizar e Substituir' (Ctrl + H)", "Apagar o documento e redigitá-lo corrigido", "Alterar somente a primeira ocorrência encontrada"], a: 1 },
  { c: "Informática Básica", q: "Você precisa enviar 10 arquivos por e-mail, mas o servidor limita o tamanho de cada anexo. O que pode fazer para enviar todos em um único arquivo?", o: ["Copiar e colar o conteúdo de todos em um único e-mail", "Compactar os arquivos em um único arquivo .zip e anexá-lo", "Enviar 10 e-mails separados, um para cada arquivo", "Converter todos para o formato .txt antes de enviar"], a: 1 },

  // ── Cenários Práticos ───────────────────────────────
  { c: "Informática Básica", q: "Você está digitando uma petição e o computador trava com o programa sem responder. Qual é o procedimento mais adequado?", o: ["Desligar o computador imediatamente pelo botão de força", "Aguardar alguns segundos; se não responder, abrir o Gerenciador de Tarefas (Ctrl + Alt + Del) e encerrar o programa", "Desconectar o cabo de energia da tomada", "Fechar a janela com o botão X repetidamente até responder"], a: 1 },
  { c: "Informática Básica", q: "Ao imprimir uma petição, a formatação do documento impresso ficou diferente da exibida na tela (margens diferentes, texto cortado). A causa mais provável é:", o: ["O arquivo está corrompido e precisa ser recriado", "A impressora possui configurações de margem que diferem das definidas no documento", "O texto foi digitado em idioma diferente do configurado", "A fonte utilizada no documento não existe no sistema"], a: 1 },
  { c: "Informática Básica", q: "Você abriu um documento recebido de outro escritório e algumas palavras aparecem com fontes padrão diferentes das do original. Isso ocorre porque:", o: ["O documento foi editado por muitas pessoas diferentes", "As fontes utilizadas no documento original não estão instaladas no computador atual", "O arquivo está desatualizado e precisa ser convertido", "O documento não foi salvo corretamente antes do envio"], a: 1 },
  { c: "Informática Básica", q: "Você precisa criar um novo contrato a partir de um modelo já existente, sem alterar o arquivo modelo original. Qual é o procedimento correto?", o: ["Editar o modelo diretamente e salvar com Ctrl + S", "Abrir o modelo e, antes de editar, usar 'Salvar como' para criar um novo arquivo com outro nome", "Copiar e colar o conteúdo no Bloco de Notas", "Renomear o modelo após editá-lo e salvar"], a: 1 },
  { c: "Informática Básica", q: "Durante uma reunião remota, o advogado solicita que você compartilhe a tela e mostre apenas um documento específico, sem revelar outras janelas abertas. O que fazer?", o: ["Minimizar todas as outras janelas antes de compartilhar a tela inteira", "Usar a opção 'Compartilhar janela específica' disponível nos aplicativos de videoconferência", "Fechar todos os outros programas antes de entrar na reunião", "Tirar uma captura de tela do documento e enviá-la no chat"], a: 1 },
  { c: "Informática Básica", q: "Você recebeu um e-mail suspeito dizendo que seu computador está infectado e pedindo que clique em um link imediatamente para resolver o problema. O que deve fazer?", o: ["Clicar no link imediatamente para proteger o computador", "Não clicar no link; deletar o e-mail e comunicar o ocorrido ao responsável de TI", "Encaminhar o e-mail para todos os colegas de trabalho", "Desligar o computador e não ligá-lo novamente"], a: 1 },
  { c: "Informática Básica", q: "Você está editando um contrato e percebe que, há 5 ações atrás, sobrescreveu acidentalmente um parágrafo importante. Como tentar recuperar o texto anterior?", o: ["Não é possível recuperar texto perdido no Word", "Fechar o documento sem salvar e reabrir a última versão salva", "Usar Ctrl + Z repetidamente para desfazer as últimas ações até restaurar o parágrafo", "Apagar o documento e reescrever tudo do zero"], a: 2 },
  { c: "Informática Básica", q: "Ao receber um arquivo .pdf de um contrato para revisão, você precisa inserir comentários sem alterar o texto original. Qual recurso utilizar?", o: ["Converter o PDF para .docx, editar e reconverter para PDF", "Usar a ferramenta 'Adicionar comentário' ou 'Nota' disponível em leitores de PDF", "Imprimir o documento e escrever os comentários à mão", "Copiar o texto para o Word, comentar e enviar o .docx"], a: 1 },
  { c: "Informática Básica", q: "Você está trabalhando em um documento importante há 1 hora sem salvar e ocorre uma queda de energia. Qual prática teria evitado a perda do trabalho?", o: ["Trabalhar mais rapidamente para terminar antes de possíveis interrupções", "Salvar o documento periodicamente com Ctrl + S ou ativar o salvamento automático nas configurações", "Usar o Bloco de Notas em vez do Word, pois ele salva automaticamente", "Imprimir o documento a cada 5 minutos como forma de backup"], a: 1 },
  { c: "Informática Básica", q: "Um colega enviou um documento de texto sem qualquer formatação: sem parágrafos definidos, sem títulos, sem espaçamento adequado. Qual é a abordagem correta para deixá-lo adequado para entrega?", o: ["Enviar o arquivo assim mesmo, pois o conteúdo é o que importa", "Estruturar o documento: definir parágrafos, aplicar títulos e estilos, ajustar espaçamento e alinhamento", "Apagar e redigitar todo o conteúdo do zero, agora com formatação", "Converter para PDF sem formatar e enviar"], a: 1 },

  // ── Conceitos Gerais de Informática ─────────────────
  { c: "Informática Básica", q: "O que é a 'área de transferência' (clipboard) de um computador?", o: ["Uma pasta especial no disco rígido para salvar arquivos temporários", "Um espaço temporário na memória RAM que armazena o último item copiado ou recortado", "Um programa de gerenciamento de arquivos do sistema operacional", "O histórico de documentos abertos recentemente"], a: 1 },
  { c: "Informática Básica", q: "Qual é a principal diferença entre 'copiar' (Ctrl + C) e 'recortar' (Ctrl + X) um arquivo ou trecho de texto?", o: ["Não há diferença prática; ambas as ações produzem o mesmo resultado", "Copiar mantém o item no local original; recortar o remove do local original ao ser colado", "Recortar cria uma cópia de segurança automática; copiar não cria", "Copiar apaga o item original; recortar mantém uma cópia no local de origem"], a: 1 },
  { c: "Informática Básica", q: "O que significa fazer um 'backup' de arquivos importantes no contexto de um escritório?", o: ["Apagar versões antigas para liberar espaço no disco", "Criar uma cópia de segurança dos arquivos em local diferente do original (ex.: HD externo, nuvem)", "Compactar arquivos em .zip para envio por e-mail", "Renomear os arquivos com a data atual para controle de versão"], a: 1 },
  { c: "Informática Básica", q: "Para que serve o recurso 'Controle de Alterações' no Microsoft Word?", o: ["Altera automaticamente a formatação do documento para o padrão ABNT", "Registra todas as modificações feitas no texto, indicando o autor e o conteúdo alterado", "Verifica e corrige automaticamente os erros ortográficos do documento", "Converte o documento para o formato PDF ao ser ativado"], a: 1 },
  { c: "Informática Básica", q: "O que é o 'cabeçalho' (header) em um documento de texto?", o: ["O título digitado na primeira linha do corpo do documento", "Uma área fixa exibida no topo de todas as páginas, usada para logotipo, título ou número do processo", "A primeira palavra de cada parágrafo do documento", "O nome do arquivo conforme exibido na barra de título do programa"], a: 1 },
  { c: "Informática Básica", q: "O que é o 'rodapé' (footer) em um documento de texto?", o: ["O último parágrafo do corpo do documento", "Uma área fixa exibida na parte inferior de todas as páginas, usada para numeração ou informações de contato", "A fonte aplicada nas últimas linhas do documento", "A última linha digitada antes de salvar o arquivo"], a: 1 },
  { c: "Informática Básica", q: "Ao digitar em um editor de texto, para qual finalidade a tecla 'Tab' é mais comumente utilizada?", o: ["Inserir uma quebra de página no documento", "Inserir um recuo (indentação) no início do parágrafo ou avançar entre campos de um formulário", "Salvar o documento automaticamente", "Selecionar a palavra mais próxima do cursor"], a: 1 },
  { c: "Informática Básica", q: "O que significa a sigla PDF?", o: ["Program Document File", "Portable Document Format", "Print Data Format", "Page Design File"], a: 1 },
  { c: "Informática Básica", q: "Para que serve o atalho Ctrl + P em um editor de texto como o Word?", o: ["Colar o conteúdo da área de transferência no documento", "Abrir o diálogo de impressão do documento", "Abrir um novo documento em branco", "Fechar o programa sem salvar"], a: 1 },
  { c: "Informática Básica", q: "Qual das opções abaixo descreve corretamente o conceito de armazenamento em 'nuvem' (cloud)?", o: ["Um programa instalado localmente no computador para organizar pastas e arquivos", "Um serviço de armazenamento remoto acessível pela internet, que permite guardar e acessar arquivos de qualquer dispositivo", "Uma unidade de armazenamento física, como um pen drive ou HD externo", "A memória RAM do computador, usada para processar dados temporariamente"], a: 1 }

]; // Fim do banco — total: 50 questões


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
