import React, { useEffect, useState } from 'react';
import {
  ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown,
  ChevronRight, Copy, Headphones, Menu, RotateCcw,
  ShieldCheck, Sparkles, Smartphone, X, Zap
} from 'lucide-react';

// Configure este número quando o WhatsApp real da loja estiver disponível.
// Formato: 55 + DDD + telefone, somente dígitos.
const WHATSAPP_NUMBER = '';

const products = [
  {
    id: 'pro',
    name: 'Linha Pro',
    model: 'Potência em cada detalhe.',
    detail: 'Para quem exige tudo da tecnologia.',
    label: 'MÁXIMA PERFORMANCE',
    look: 'graphite',
    color: 'Titânio escuro'
  },
  {
    id: 'air',
    name: 'Linha Air',
    model: 'Leveza que impressiona.',
    detail: 'Design elegante, sem excessos.',
    label: 'DESIGN & LEVEZA',
    look: 'ice',
    color: 'Prata glacial'
  },
  {
    id: 'classic',
    name: 'Linha Essencial',
    model: 'Tudo o que importa.',
    detail: 'Seu dia a dia, em outro nível.',
    label: 'A ESCOLHA INTELIGENTE',
    look: 'rose',
    color: 'Rosa suave'
  }
];

const questions = [
  {
    question: 'Como posso consultar os modelos disponíveis?',
    answer: 'Escolha a linha que chamou sua atenção e envie sua solicitação na seção de contato. Nossa equipe poderá confirmar os modelos, cores e capacidades disponíveis.'
  },
  {
    question: 'Os aparelhos têm garantia?',
    answer: 'As condições de garantia variam conforme o produto e a modalidade da venda. Consulte as informações específicas antes de finalizar seu pedido.'
  },
  {
    question: 'Posso consultar condições de pagamento?',
    answer: 'Sim. Utilize o formulário de atendimento para solicitar informações sobre valores e condições de pagamento dos modelos que procura.'
  },
  {
    question: 'Vocês trabalham com outros produtos?',
    answer: 'Esta primeira versão da vitrine destaca a linha de iPhones. Acessórios e outras categorias podem ser incluídos conforme o catálogo real da loja.'
  }
];

function scrollTo(id) {
  const node = document.getElementById(id);
  if (node) node.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Brand({ light = false }) {
  return (
    <a className={'brand ' + (light ? 'brand-light' : '')} href="#inicio" aria-label="AURA Mobile - início">
      <span className="brand-icon"><span>A</span><i /></span>
      <span className="brand-lettering">aura<span className="brand-dot">.</span><small>MOBILE STUDIO</small></span>
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  const navigate = (id) => {
    setMenuOpen(false);
    scrollTo(id);
  };

  return (
    <header className={'site-header ' + (scrolled ? 'header-scrolled' : '')}>
      <div className="nav-shell content-wrap">
        <Brand />
        <nav className={'main-nav ' + (menuOpen ? 'nav-open' : '')} aria-label="Navegação principal">
          <a href="#colecao" onClick={() => setMenuOpen(false)}>Coleção</a>
          <a href="#experiencia" onClick={() => setMenuOpen(false)}>Experiência</a>
          <a href="#como-funciona" onClick={() => setMenuOpen(false)}>Como funciona</a>
          <button className="mobile-nav-contact" onClick={() => navigate('contato')}>Fale com a gente <ArrowUpRight size={17} /></button>
        </nav>
        <button className="nav-contact" onClick={() => navigate('contato')}>
          Falar com um especialista <ArrowUpRight size={16} />
        </button>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >{menuOpen ? <X size={23} /> : <Menu size={23} />}</button>
      </div>
    </header>
  );
}

function DuoVisual() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 450);
    return () => clearTimeout(t);
  }, []);

  function replay() {
    setOpen(false);
    setTimeout(() => setOpen(true), 110);
  }

  return (
    <div className="duo-composition">
      <div className="visual-halo" />
      <div className="visual-grid" />
      <div className="device-coordinate coordinate-one">001 / FORM MEETS FUTURE</div>
      <div className="device-coordinate coordinate-two">DESIGNED TO INSPIRE</div>
      <div className="device-lift">
        <div className={'fold-device ' + (open ? 'is-open' : '')} role="img" aria-label="Animação conceitual de smartphone dobrável abrindo suas duas telas">
          <div className="fold-panel panel-left">
            <div className="fold-panel-inner">
              <div className="screen-wallpaper wallpaper-left">
                <div className="wallpaper-blob one" />
                <div className="wallpaper-blob two" />
                <span className="screen-time">9:41</span>
                <div className="screen-label">imagine<br />more<span>.</span></div>
              </div>
            </div>
          </div>
          <div className="fold-panel panel-right">
            <div className="fold-panel-inner">
              <div className="screen-wallpaper wallpaper-right">
                <div className="wallpaper-blob three" />
                <div className="wallpaper-blob four" />
                <span className="screen-signal">●●●</span>
                <div className="screen-orbit orbit-one" />
                <div className="screen-orbit orbit-two" />
              </div>
            </div>
          </div>
          <div className="device-hinge" />
        </div>
        <div className="device-ground-shadow" />
      </div>
      <div className="visual-label">
        <span className="label-star">✳</span>
        <span><strong>Imagine o impossível.</strong><small>Uma abertura conceitual em movimento.</small></span>
      </div>
      <button onClick={replay} className="replay-button" aria-label="Rever animação de abertura">
        <RotateCcw size={15} /> Rever animação
      </button>
      <div className="concept-label">CONCEITO VISUAL • NÃO REPRESENTA UM PRODUTO OFICIAL</div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-bg-glow" />
      <div className="content-wrap hero-layout">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> SUA PRÓXIMA EXPERIÊNCIA COMEÇA AQUI</div>
          <h1>O próximo <span className="hero-serif">nível</span> está em suas mãos<span className="dot-accent">.</span></h1>
          <p>Mais do que encontrar um novo iPhone. Uma experiência feita para quem valoriza design, tecnologia e cada detalhe da escolha.</p>
          <div className="hero-actions">
            <button className="button button-light" onClick={() => scrollTo('colecao')}>Explorar coleção <ArrowUpRight size={18} /></button>
            <button className="button button-text" onClick={() => scrollTo('experiencia')}>Conheça a experiência <ArrowRight size={18} /></button>
          </div>
          <div className="hero-note"><span className="hero-note-icon"><Sparkles size={17} /></span><span>Uma nova forma de escolher<br />o seu próximo dispositivo.</span></div>
        </div>
        <DuoVisual />
      </div>
      <div className="content-wrap hero-bottom">
        <span>01 / 04 &nbsp;—&nbsp; EXPLORE O EXTRAORDINÁRIO</span>
        <button onClick={() => scrollTo('colecao')}>SCROLL PARA DESCOBRIR <ArrowDown size={15} /></button>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <div className="trust-strip">
      <div className="content-wrap trust-inner">
        <span>ESCOLHAS QUE FAZEM SENTIDO</span><i />
        <span>TECNOLOGIA COM PERSONALIDADE</span><i />
        <span>ATENDIMENTO DE PESSOA PARA PESSOA</span>
      </div>
    </div>
  );
}

function MiniPhone({ look }) {
  return (
    <div className={'product-scene scene-' + look}>
      <div className="product-spotlight" />
      <div className={'mockphone phone-back phone-back-' + look}>
        <div className="camera-island">
          <span className="camera-lens lens-a" /><span className="camera-lens lens-b" />
          <span className="camera-lens lens-c" /><span className="camera-flash" />
        </div>
        <span className="phone-brand-mark">●</span>
      </div>
      <div className={'mockphone phone-front phone-front-' + look}>
        <div className="phone-screen">
          <div className="phone-notch" />
          <div className="phone-screen-glow" />
          <span className="mini-screen-clock">9:41</span>
          <div className="mini-orb" />
        </div>
      </div>
      <span className="product-orbit orbit-a" /><span className="product-orbit orbit-b" />
    </div>
  );
}

function Collection({ onChoose }) {
  return (
    <section className="collection-section section-padding" id="colecao">
      <div className="content-wrap">
        <div className="section-heading-row" data-reveal>
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> NOSSA CURADORIA</div>
            <h2>Encontre o que combina<br />com <em>você.</em></h2>
          </div>
          <p>Estilos diferentes. O mesmo desejo de viver a tecnologia da sua maneira. Descubra sua próxima escolha.</p>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <article className={'product-card ' + (index === 1 ? 'product-card-featured' : '')} key={product.id} data-reveal>
              <div className="product-card-header">
                <span>{product.label}</span><ArrowUpRight size={19} strokeWidth={1.6} />
              </div>
              <MiniPhone look={product.look} />
              <div className="product-card-bottom">
                <span className="product-index">0{index + 1} / COLLECTION</span>
                <h3>{product.name}</h3>
                <p>{product.model}</p>
                <button aria-label={'Consultar ' + product.name} className="product-action" onClick={() => onChoose(product.name)}>
                  Consultar modelos <span><ArrowUpRight size={18} /></span>
                </button>
              </div>
            </article>
          ))}
        </div>
        <p className="product-footnote">* Imagens ilustrativas e linhas conceituais. Modelos, cores, preços e disponibilidade sujeitos a confirmação.</p>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience-section section-padding" id="experiencia">
      <div className="content-wrap experience-grid">
        <div className="experience-art" data-reveal>
          <div className="experience-rings"><i /><i /><i /></div>
          <div className="experience-phone">
            <div className="experience-inner">
              <span className="experience-island" />
              <div className="experience-fluid fluid-one" />
              <div className="experience-fluid fluid-two" />
              <div className="experience-screen-copy">It feels<br /><em>different.</em></div>
              <span className="experience-time">9:41</span>
            </div>
          </div>
          <div className="experience-corner-note">DESIGN<br />IN EVERY DETAIL.</div>
          <div className="art-caption"><span>THE EXPERIENCE</span><span>02 / 04</span></div>
        </div>
        <div className="experience-copy" data-reveal>
          <div className="eyebrow"><span className="eyebrow-line" /> MAIS DO QUE UM APARELHO</div>
          <h2>O detalhe faz <em>toda</em> a diferença.</h2>
          <p>Algumas escolhas não são apenas sobre especificações. São sobre como a tecnologia se encaixa na sua rotina, na sua criatividade e no que vem pela frente.</p>
          <div className="experience-benefits">
            <div><span><Sparkles size={20} /></span><div><strong>Escolha com personalidade</strong><small>Encontre a linha que combina com o seu estilo.</small></div></div>
            <div><span><Headphones size={20} /></span><div><strong>Conversa de verdade</strong><small>Tire dúvidas antes de decidir.</small></div></div>
            <div><span><ShieldCheck size={20} /></span><div><strong>Informação com clareza</strong><small>Consulte as condições específicas de cada produto.</small></div></div>
          </div>
          <button className="inline-cta" onClick={() => scrollTo('contato')}>Vamos encontrar o seu próximo iPhone <ArrowUpRight size={18} /></button>
        </div>
      </div>
    </section>
  );
}

function Steps() {
  const steps = [
    { num: '01', icon: <Smartphone size={23}/>, title: 'Explore', text: 'Descubra o tipo de iPhone que combina com você e com a sua rotina.' },
    { num: '02', icon: <Headphones size={23}/>, title: 'Converse', text: 'Conte o que procura. O atendimento ajuda a esclarecer as opções.' },
    { num: '03', icon: <Zap size={23}/>, title: 'Escolha', text: 'Confira disponibilidade, valores e condições antes de decidir.' }
  ];
  return (
    <section className="steps-section section-padding" id="como-funciona">
      <div className="content-wrap">
        <div className="steps-heading" data-reveal>
          <div className="eyebrow"><span className="eyebrow-line" /> SIMPLES COMO DEVE SER</div>
          <h2>Seu upgrade.<br /><em>Sem complicar.</em></h2>
          <p>Uma jornada pensada para deixar a sua escolha mais leve.</p>
        </div>
        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step-card" key={step.num} data-reveal>
              <div className="step-upper"><span>{step.num} — 03</span><span className="step-icon">{step.icon}</span></div>
              <div className="step-content"><h3>{step.title}</h3><p>{step.text}</p></div>
              <span className="step-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [active, setActive] = useState(0);
  return (
    <section className="faq-section section-padding" id="duvidas">
      <div className="content-wrap faq-grid">
        <div className="faq-intro" data-reveal>
          <div className="eyebrow"><span className="eyebrow-line" /> RESPOSTAS DIRETAS</div>
          <h2>Alguma<br /><em>dúvida?</em></h2>
          <p>A gente simplifica. Confira algumas respostas para começar a sua escolha.</p>
          <button className="inline-cta" onClick={() => scrollTo('contato')}>Falar com atendimento <ArrowUpRight size={18}/></button>
        </div>
        <div className="faq-list" data-reveal>
          {questions.map((question, index) => (
            <div className={'faq-item ' + (active === index ? 'faq-active' : '')} key={question.question}>
              <button className="faq-question" aria-expanded={active === index} onClick={() => setActive(active === index ? -1 : index)}>
                <span>{String(index + 1).padStart(2, '0')}</span><strong>{question.question}</strong><ChevronDown size={19}/>
              </button>
              <div className="faq-answer" hidden={active !== index}><p>{question.answer}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ selected, onSelected }) {
  const [name, setName] = useState('');
  const [detail, setDetail] = useState('');
  const [status, setStatus] = useState('');

  async function submit(e) {
    e.preventDefault();
    const message = 'Olá! Meu nome é ' + name.trim() + '. Tenho interesse em ' + selected + '.' + (detail.trim() ? ' ' + detail.trim() : '') + ' Poderiam me informar disponibilidade e condições?';
    if (WHATSAPP_NUMBER.trim()) {
      window.open('https://wa.me/' + WHATSAPP_NUMBER.trim() + '?text=' + encodeURIComponent(message), '_blank', 'noopener,noreferrer');
      setStatus('Abrimos seu atendimento no WhatsApp.');
      return;
    }
    try {
      if (!navigator.clipboard) throw new Error('clipboard unavailable');
      await navigator.clipboard.writeText(message);
      setStatus('Mensagem copiada! O WhatsApp da loja será vinculado quando o número for cadastrado.');
    } catch {
      window.prompt('Copie sua mensagem:', message);
      setStatus('Sua mensagem está pronta. Falta configurar o número da loja.');
    }
  }

  return (
    <section className="contact-section" id="contato">
      <div className="content-wrap contact-grid">
        <div className="contact-left" data-reveal>
          <span className="contact-kicker">COMECE POR AQUI <span>✳</span></span>
          <h2>Seu próximo<br />iPhone começa<br /><em>com uma conversa.</em></h2>
          <p>Conta pra gente o que procura. Vamos dar o próximo passo juntos.</p>
          <div className="contact-brandline"><span>✳</span> AURA MOBILE STUDIO</div>
        </div>
        <div className="contact-form-card" data-reveal>
          <div className="form-top"><span>01 / SOLICITAR ATENDIMENTO</span><ArrowUpRight size={19}/></div>
          <h3>Vamos encontrar<br />o seu próximo.</h3>
          <form onSubmit={submit}>
            <label htmlFor="contact-name">SEU NOME</label>
            <input id="contact-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Como podemos te chamar?" required minLength={2} />
            <label htmlFor="contact-model">QUAL LINHA VOCÊ PROCURA?</label>
            <div className="select-holder"><select id="contact-model" value={selected} onChange={(e) => onSelected(e.target.value)}>
              <option>Linha Pro</option>
              <option>Linha Air</option>
              <option>Linha Essencial</option>
              <option>Ainda estou escolhendo</option>
            </select><ChevronDown size={17}/></div>
            <label htmlFor="contact-message">QUER NOS CONTAR MAIS? <span>(OPCIONAL)</span></label>
            <textarea id="contact-message" rows={3} value={detail} onChange={(e) => setDetail(e.target.value)} placeholder="Modelo, cor, capacidade ou alguma dúvida..." />
            <button className="submit-button" type="submit">{WHATSAPP_NUMBER ? 'Conversar no WhatsApp' : 'Copiar solicitação'} <ArrowUpRight size={19}/></button>
            <p className="form-note"><Check size={15}/> {WHATSAPP_NUMBER ? 'Você será direcionado ao WhatsApp.' : 'WhatsApp ainda não configurado nesta versão.'}</p>
            {status && <p className="form-status" role="status"><Copy size={15}/>{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="content-wrap">
        <div className="footer-top"><Brand light/><span>TECNOLOGIA COM PERSONALIDADE.<br/>ESCOLHAS COM PROPÓSITO.</span><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Voltar ao topo">VOLTAR AO TOPO <ArrowUpRight size={16}/></button></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} AURA MOBILE STUDIO. PROJETO CONCEITUAL.</span><span>Marca ilustrativa independente. Sem afiliação com a Apple.</span><span>FEITO PARA O PRÓXIMO CAPÍTULO ✳</span></div>
      </div>
    </footer>
  );
}

export default function App() {
  const [selected, setSelected] = useState('Ainda estou escolhendo');

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((node) => node.classList.add('revealed'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -28px 0px' });
    elements.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  function chooseModel(model) {
    setSelected(model);
    scrollTo('contato');
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Collection onChoose={chooseModel}/>
        <Experience />
        <Steps />
        <FAQ />
        <Contact selected={selected} onSelected={setSelected}/>
      </main>
      <Footer />
    </>
  );
}
