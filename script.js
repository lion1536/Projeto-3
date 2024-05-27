const wordContainer = document.getElementById('word-container');
const wrongLettersContainer = document.getElementById('wrong-letters');
const messageContainer = document.getElementById('message');
const letterInput = document.getElementById('letter-input');
const restartBtn = document.getElementById('restart-btn');
const words = ['javascript', 'programacao', 'computador', 'desenvolvedor', 'internet', 'algoritmo', 'variavel', 'função', 'objeto', 'array',
'estrutura', 'sintaxe', 'compilador', 'interprete', 'framework', 'biblioteca', 'linguagem', 'protocolo', 'rede', 'servidor',
'cliente', 'banco', 'dados', 'consulta', 'index', 'sql', 'html', 'css', 'node', 'react', 'angular', 'vue', 'frontend', 'backend',
'fullstack', 'devops', 'agile', 'scrum', 'kanban', 'teste', 'automação', 'debug', 'deploy', 'git', 'github', 'merge', 'branch',
'commit', 'push', 'pull', 'clone', 'fork', 'rest', 'api', 'json', 'xml', 'http', 'https', 'websocket', 'middleware', 'controller',
'view', 'model', 'mvc', 'singlepage', 'design', 'ux', 'ui', 'wireframe', 'prototipo', 'responsivo', 'acessibilidade', 'desempenho',
'otimização', 'segurança', 'criptografia', 'autenticação', 'autorização', 'token', 'jwt', 'oauth', 'sso', 'ssl', 'tls', 'dominio',
'dns', 'ip', 'gateway', 'router', 'switch', 'firewall', 'vpn', 'cloud', 'aws', 'azure', 'gcp', 'docker', 'kubernetes', 'virtualização',
'container', 'microserviços', 'arquitetura', 'escalabilidade', 'disponibilidade', 'manutenção', 'monitoramento', 'log', 'alerta',
'sistema', 'operacional', 'linux', 'windows', 'macos', 'unix', 'shell', 'bash', 'powershell', 'script', 'automação', 'pipeline',
'ci', 'cd', 'integracao', 'entrega', 'continua', 'desenvolvimento', 'software', 'hardware', 'processador', 'memoria', 'armazenamento',
'ssd', 'hdd', 'barramento', 'placa', 'mae', 'video', 'audio', 'rede', 'wifi', 'ethernet', 'bluetooth', 'infraestrutura', 'rede', 
'topologia', 'malha', 'estrela', 'anel', 'barra', 'token', 'ring', 'internet', 'protocolo', 'tcp', 'udp', 'ip', 'icp', 'arp', 
'rarp', 'dhcp', 'dns', 'http', 'https', 'smtp', 'pop3', 'imap', 'ftp', 'sftp', 'ssh', 'telnet', 'snmp', 'ldap', 'vpn', 'mpls',
'ethernet', 'token', 'ring', 'frame', 'relay', 'atm', 'isdn', 'lan', 'wan', 'man', 'wlan', 'vlan', 'vsat', 'p2p', 'p2mp', 'broadcast',
'multicast', 'unicast', 'anycast', 'routing', 'switching', 'networking', 'internetworking', 'intranet', 'extranet', 'cloud',
'computação', 'saas', 'paas', 'iaas', 'caas', 'xen', 'kvm', 'vmware', 'openstack', 'hyperv', 'container', 'docker', 'kubernetes',
'microservices', 'monolith', 'soa', 'msp', 'itil', 'cobit', 'devops', 'agile', 'scrum', 'kanban', 'lean', 'sixsigma', 'bpm', 
'erp', 'crm', 'bi', 'data', 'bigdata', 'analytics', 'machinelearning', 'ai', 'iot', 'iiot', 'wearable', 'smartcity', 'smartgrid',
'blockchain', 'bitcoin', 'cryptocurrency', 'token', 'ico', 'sto', 'defi', 'nft', 'smartcontract', 'dapp', 'wallet', 'exchange',
'trading', 'mining', 'hashing', 'consensus', 'pow', 'pos', 'dpos', 'bft', 'p2p', 'distributed', 'ledger', 'database', 'sql',
'nosql', 'mongodb', 'cassandra', 'redis', 'neo4j', 'orientdb', 'elastic', 'hbase', 'couchdb', 'rdbms', 'oracle', 'mysql', 'postgresql',
'sqlserver', 'sqlite', 'mariadb', 'firebird', 'informix', 'sybase', 'db2', 'teradata', 'hive', 'pig', 'spark', 'flink', 'kafka', 
'storm', 'hadoop', 'mapreduce', 'yarn', 'hdfs', 'distributed', 'computing', 'grid', 'cloud', 'computing', 'fog', 'edge', 'serverless',
'functions', 'faas', 'containers', 'kubernetes', 'openshift', 'rancher', 'nomad', 'swarm', 'docker', 'compose', 'helm', 'istio',
'linkerd', 'cni', 'cri', 'cncf', 'devops', 'sre', 'observability', 'monitoring', 'logging', 'tracing', 'prometheus', 'grafana',
'elasticsearch', 'logstash', 'kibana', 'efk', 'elk', 'splunk', 'datadog', 'newrelic', 'dynatrace', 'appdynamics', 'nagios', 'zabbix',
'icinga', 'netdata', 'cloudwatch', 'stackdriver', 'azurel', 'diagnostics', 'application', 'performance', 'management', 'apm',     'pizza', 'hamburguer', 'sushi', 'lasanha', 'taco', 'nachos', 'espaguete', 'frango', 'churrasco', 'cachorroquente', 'omelete',
'panqueca', 'waffles', 'torrada', 'croissant', 'baguete', 'pao', 'queijo', 'presunto', 'bacon', 'salame', 'salada', 'alface',
'tomate', 'pepino', 'cenoura', 'batata', 'mandioca', 'inhame', 'feijao', 'arroz', 'milho', 'ervilha', 'lentilha', 'grão-de-bico',
'soja', 'quinoa', 'aveia', 'granola', 'iogurte', 'leite', 'creme', 'manteiga', 'margarina', 'nata', 'sorvete', 'chocolate',
'biscoito', 'bolacha', 'doce', 'bala', 'pirulito', 'torta', 'bolo', 'pudim', 'mousse', 'gelatina', 'fruta', 'banana', 'maca',
'laranja', 'uva', 'pera', 'manga', 'abacaxi', 'morango', 'kiwi', 'cereja', 'amora', 'framboesa', 'mirtilo', 'pessego', 'ameixa',
'figo', 'abacate', 'melancia', 'melão', 'caju', 'goiaba', 'maracuja', 'limão', 'mandarina', 'toranja', 'acerola', 'cupuacu',
'açaí', 'graviola', 'biribá', 'pitanga', 'jabuticaba', 'umbu', 'cambuci', 'camapu', 'pequi', 'baru', 'castanha', 'noz', 'amendoa',
'pistache', 'avelã', 'amendoim', 'castanha-de-caju', 'castanha-do-pará', 'macadamia', 'pinhão', 'sesamo', 'linhaça', 'chia', 
'canela', 'cravo', 'noz-moscada', 'pimenta', 'cominho', 'coentro', 'manjericão', 'alecrim', 'tomilho', 'salsinha', 'cebolinha', 
'hortelã', 'louro', 'orégano', 'ervas', 'especiarias', 'azeite', 'vinagre', 'mostarda', 'maionese', 'ketchup', 'barbecue', 
'shoyu', 'missô', 'tahine', 'hummus', 'guacamole', 'molho', 'tempero', 'caldo', 'sopa', 'creme', 'ensopado', 'caldeirada',
'feijoada', 'moqueca', 'bobó', 'vatapá', 'cuscuz', 'farofa', 'polenta', 'nhoque', 'macarrão', 'ravióli', 'canelone', 'talharim', 
'fettuccine', 'penne', 'rigatoni', 'conchiglione', 'fusilli', 'capellini', 'angelhair', 'massa', 'pasta', 'focaccia', 'ciabatta',
'brioche', 'strudel', 'tarte', 'quiche', 'empada', 'pastel', 'coxinha', 'risole', 'croquete', 'bolinho', 'acarajé', 'abará',
'vatapá', 'tacacá', 'pato-no-tucupi', 'maniçoba', 'pamonha', 'curau', 'mingau', 'canjica', 'arroz-doce', 'arroz-de-leite', 'manjar',
'quindim', 'brigadeiro', 'beijinho', 'cajuzinho', 'bicho-de-pé', 'camafeu', 'olho-de-sogra', 'queijadinha', 'broa', 'biscoito-de-polvilho',
'pão-de-queijo', 'fritura', 'assado', 'grelhado', 'cozido', 'ensopado', 'braseado', 'defumado', 'escabeche', 'marinado', 'empanado',     'violão', 'guitarra', 'baixo', 'bateria', 'piano', 'teclado', 'sintetizador', 'violino', 'viola', 'violoncelo', 'contrabaixo', 
'flauta', 'clarinete', 'saxofone', 'trompete', 'trombone', 'tuba', 'oboé', 'fagote', 'harmonica', 'gaita', 'acordeão', 
'bandolim', 'cavaquinho', 'ukulele', 'banjo', 'harpa', 'cravo', 'órgão', 'marimba', 'xilofone', 'vibrafone', 'tímpano', 
'triângulo', 'pandeiro', 'tamborim', 'conga', 'bongô', 'claves', 'castanholas', 'agogô', 'cajón', 'berimbau', 'cuíca', 'reco-reco', 
'surdo', 'tambor', 'caixa', 'pratos', 'sino', 'apito', 'metronomo', 'afinador', 'capotraste', 'palheta', 'estante', 'pedal', 
'amplificador', 'microfone', 'alto-falante', 'mesa de som', 'mixer', 'interface de áudio', 'fones de ouvido', 'cabo', 'pódio', 
'partitura', 'notação musical', 'clave de sol', 'clave de fá', 'clave de dó', 'acorde', 'melodia', 'harmonia', 'ritmo', 'tempo', 
'compasso', 'andamento', 'sinfonia', 'concerto', 'sonata', 'quarteto', 'trio', 'dueto', 'solo', 'orquestra', 'banda', 'grupo', 
'coral', 'coro', 'maestro', 'compositor', 'arranjo', 'improvisação', 'interpretação', 'audição', 'ensaio', 'performance', 'show', 
'concerto', 'turnê', 'álbum', 'single', 'disco', 'vinil', 'cassete', 'cd', 'mp3', 'streaming', 'gravação', 'mixagem', 'masterização',
'estúdio', 'palco', 'camarim', 'plateia', 'acústica', 'sonorização', 'iluminação', 'cenário', 'figurino', 'ensaio', 'repertório',
'setlist', 'playlist', 'cover', 'original', 'dublagem', 'playback', 'karaokê', 'trilha sonora', 'musical', 'ópera', 'balé',
'coreografia', 'dança', 'pas de deux', 'tango', 'samba', 'forró', 'xote', 'frevo', 'baião', 'maracatu', 'axé', 'sertanejo', 
'bossa nova', 'mpb', 'soul', 'funk', 'rap', 'hip hop', 'rock', 'pop', 'jazz', 'blues', 'reggae', 'ska', 'punk', 'metal', 'grunge',
'indie', 'eletrônica', 'house', 'techno', 'trance', 'dubstep', 'drum and bass', 'breakbeat', 'trap', 'lo-fi', 'ambient', 'new age', 'português', 'inglês', 'espanhol', 'francês', 'alemão', 'italiano', 'japonês', 'chinês', 'russo', 'coreano', 'árabe', 'grego', 
'latim', 'hebraico', 'sânscrito', 'hindi', 'tâmil', 'sueco', 'norueguês', 'dinamarquês', 'finlandês', 'holandês', 'turco', 
'vietnamita', 'tailandês', 'persa', 'bengali', 'gujarati', 'marathi', 'urdu', 'punjabi', 'tagalo', 'ucraniano', 'polonês', 
'húngaro', 'romeno', 'tcheco', 'eslovaco', 'búlgaro', 'croata', 'sérvio', 'bósnio', 'macedônio', 'albanês', 'estoniano', 
'letão', 'lituano', 'maltês', 'islandês', 'irlandês', 'gaélico', 'galês', 'escocês', 'basco', 'catalão', 'galiciano', 
'occitano', 'romanche', 'farsi', 'amárico', 'somali', 'hausa', 'swahili', 'zulu', 'africâner', 'xhosa', 'mandarim', 
'cantão', 'min', 'wu', 'gan', 'hakka', 'taiwanês', 'laosiano', 'khmer', 'birmanês', 'singalês', 'nepali', 'mongol', 'tibetano',
'kazakh', 'uzbeque', 'turcomeno', 'quirguiz', 'tadjique', 'pashto', 'dari', 'baluchi', 'kurdish', 'assyrian', 'chaldean', 
'aramaico', 'copta', 'berbere', 'tuaregue', 'moçambicano', 'angolano', 'guinéu', 'caboverdiano', 'timorense', 'macua', 
'tonga', 'fijiano', 'samoano', 'maori', 'hawaiian', 'indonésio', 'malaio', 'javanês', 'sudanês', 'madurês', 'batak', 'minangkabau',
'banjar', 'balinês', 'lampung', 'sasak', 'manadonese', 'toraja', 'bugis', 'makassar', 'dayak', 'iban', 'dusun', 'rungus',
'murut', 'kadazan', 'melanau', 'orang ulu', 'penan', 'kenyah', 'kayan', 'bidayuh', 'lun bawang', 'kedayan', 'suluk', 'bajau',    'cachorro', 'gato', 'pássaro', 'peixe', 'cavalo', 'vaca', 'ovelha', 'cabra', 'porco', 'galinha', 'pato', 'ganso', 'peru', 
'coelho', 'hamster', 'rato', 'camundongo', 'leão', 'tigre', 'urso', 'elefante', 'girafa', 'zebra', 'rinoceronte', 'hipopótamo', 
'crocodilo', 'jacaré', 'tartaruga', 'lagarto', 'cobra', 'sapo', 'rã', 'macaco', 'chimpanzé', 'gorila', 'orangotango', 'panda', 
'koala', 'canguru', 'lobo', 'raposa', 'guaxinim', 'texugo', 'esquilo', 'ouriço', 'morcego', 'coruja', 'águia', 'falcão', 
'gavião', 'pomba', 'pombo', 'andorinha', 'gaivota', 'pinguim', 'albatroz', 'pelicano', 'avestruz', 'ema', 'nandu', 'kiwi', 
'flamingo', 'pavão', 'cisne', 'corvo', 'pardal', 'robin', 'beija-flor', 'colibri', 'pica-pau', 'periquito', 'papagaio', 
'arara', 'calopsita', 'canário', 'curió', 'bentivi', 'sabia', 'joão-de-barro', 'quero-quero', 'tucano', 'aracuã', 'jacutinga', 
'sabiá', 'cotovia', 'inhambu', 'macuco', 'jacamim', 'galinhola', 'marreca', 'gavião-real', 'harpia', 'acauã', 'carcará', 
'quati', 'tamanduá', 'anta', 'tatú', 'capivara', 'paca', 'cutia', 'mão-pelada', 'lobinho', 'mucura', 'gambá', 'peba', 
'pirarucu', 'pirarara', 'tucunaré', 'pintado', 'dourado', 'pacu', 'tambacu', 'curimatã', 'jatuarana', 'aruanã', 'piracanjuba', 
'traíra', 'jacaré-açu', 'surubim', 'peixe-boi', 'boto', 'garça', 'jabiru', 'caranguejo', 'siri', 'lagosta', 'camarão', 
'polvo', 'lula', 'ostra', 'marisco', 'mexilhão', 'caramujo', 'caracol', 'lesma', 'formiga', 'abelha', 'vespa', 'marimbondo', 
'borboleta', 'mariposa', 'besouro', 'joaninha', 'grilo', 'gafanhoto', 'barata', 'cigarra', 'louva-a-deus', 'mosca', 'mosquito', 
'pernilongo', 'pulga', 'carrapato', 'piolho', 'sanguessuga', 'lombriga', 'tênia', 'solitária', 'ameba', 'protozoário', 'bactéria', 
'vírus', 'fungo', 'algas', 'coral', 'esponja', 'anêmona', 'hidra', 'plâncton', 'medusa', 'ácaro', 'crustáceo', 'artrópode', 
'anelídeo', 'molusco', 'equinodermo', 'celenterado', 'esponjário', 'mamífero', 'réptil', 'anfíbio', 'peixe', 'inseto', 
'aracnídeo', 'crustáceo', 'molusco', 'platelminto', 'nematelminto', 'anelídeo', 'cnidário', 'porífero', 'equinodermo', 
];
console.log(words.length);
let selectedWord = words[Math.floor(Math.random() * words.length)];
let guessedLetters = [];
let wrongLetters = [];
const maxWrongAttempts = 6;

function displayWord(){
    wordContainer.innerHTML = selectedWord
    .split('')
    .map(letter => guessedLetters.includes(letter) ? letter : '_')
    .join(' ');
}

function updateWrongLetters(){
    wrongLettersContainer.innerHTML = `Letras erradas ${wrongLetters.join(', ')}`;
}
function checkGameOver(){
    if(wrongLetters.length >= maxWrongAttempts){
        messageContainer.innerHTML = 'Você perdeu!';
        letterInput.disabled = true;
    }else if(!wordContainer.innerHTML.includes('_')){
        messageContainer.innerHTML = 'Você ganhou!';
        letterInput.disabled = true;
    }
}

letterInput.addEventListener('input', () => {
    const letter = letterInput.value.toLowerCase();
    letterInput.value = '';

    if(letter && !guessedLetters.includes(letter) && !wrongLetters.includes(letter)){
        if(selectedWord.includes(letter)){
            guessedLetters.push(letter);
        }else{
            wrongLetters.push(letter);
        }

        displayWord();
        updateWrongLetters();
        checkGameOver();
    }
});

restartBtn.addEventListener('click', () =>{
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    wrongLetters = [];
    messageContainer.innerHTML = '';
    letterInput.disabled = false;
    displayWord();
    updateWrongLetters();
});

displayWord();