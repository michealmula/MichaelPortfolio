import { useState, useEffect, useRef, useCallback } from "react";
import "./portfolio.css";
import w111  from "./realme2pro/w111.jpeg";
import land  from "./realme2pro/download (1).png";
import alnazer from "./realme2pro/w333.jpeg";
import tq   from "./realme2pro/tq.jpeg";
import cap  from "./realme2pro/cap.jpeg";
import htmll   from "./realme2pro/htmll.png";
import csss    from "./realme2pro/csss.png";
import jss     from "./realme2pro/jss.png";
import reactjs from "./realme2pro/reactjs.png";
import gitt    from "./realme2pro/gitt.png";
import githupp from "./realme2pro/githupp.png";
import vs      from "./realme2pro/vs.png";
import githuppContact from "./realme2pro/githupp.png";
import linkedin from "./realme2pro/linkedinnn.png";
import whatsapp from "./realme2pro/whatsapp.png";
import heroBg from "./immg.png";

import { motion, AnimatePresence } from 'framer-motion';

import { useSpring, animated } from '@react-spring/web';
/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */

const WORKS = [
  { id:1, cat:"web", title:"Portfolio Website",  desc:"A personal portfolio built from scratch — custom design, zero templates.",                                              tags:["HTML","CSS","JS","React JS"], img: w111,        soon:false, icon:null, link:"#" },
  { id:2, cat:"web", title:"Landing Page",        desc:"Responsive landing page with modern layout, smooth sections and clean UI.",                                             tags:["HTML","CSS"],                 img: land, soon:false, icon:null, link:"#" },
  { id:3, cat:"web", title:"Alnazer Store",        desc:"A responsive jewelry e-commerce website built with a modern design, showcasing products in an elegant shopping experience.", tags:["HTML","CSS","JS","React JS"],         img: alnazer,        soon:false, icon:null, link:"https://michealmula.github.io/Alnazerstore/" },
  { id:4, cat:"web", title:"TQ Store",             desc:"A dynamic SPA built with React JS. Component-based, state-driven.",                                                     tags:["React JS","JS","CSS"],       img: tq,           soon:false, icon:null, link:"https://michealmula.github.io/tqstore/" },
  { id:5, cat:"web", title:"Capital Finance",      desc:"A secure multi-step form application featuring dynamic flow and progress tracking.",                                    tags:["HTML","CSS","JS","React JS"],img: cap,         soon:false, icon:null, link:"https://michealmula.github.io/loan/" },
  { id:6, cat:"web", title:"Full Stack App",       desc:"Frontend meets backend. A complete web app — coming when the stack is ready.",                                          tags:["React JS","Node.js","CSS"],  img:null,                           soon:true,  icon:"🚀", link:null },
];

const SKILL_GROUPS = [
  {
    title:"Frontend Core",
    accent:"#e34f26",
    skills:[
      { img: htmll,   label:"HTML5",                  desc:"Semantic, accessible, well-structured web pages." },
      { img: csss,    label:"CSS3",                   desc:"Flexbox, Grid, animations, responsive design." },
      { img: jss,     label:"JavaScript (ES6+)",      desc:"DOM manipulation, events, interactive experiences." },
      { img: reactjs, label:"React.js / JSX",         desc:"Component architecture, state management, SPAs." },
      { img: null,    label:"Responsive Web Design",  desc:"Mobile-first layouts that work on every screen.", code:"📐" },
      { img: null,    label:"SPA",                    desc:"Single Page Applications with smooth navigation.", code:"⚡" },
      { img: null,    label:"Cross-Browser",          desc:"Consistent experience across all browsers.", code:"🌐" },
      { img: null,    label:"Mobile-First",           desc:"Designing from smallest screen up.", code:"📱" },
      { img: null,    label:"PWA",                    desc:"Progressive Web Apps — installable, offline-ready.", code:"🔌" },
    ],
  },
  {
    title:"Styling",
    accent:"#7952b3",
    skills:[
      { img: null,    label:"Flexbox",                desc:"One-dimensional layout control.", code:"◫" },
      { img: null,    label:"CSS Grid",               desc:"Two-dimensional layout system.", code:"⊞" },
      { img: null,    label:"CSS Animations",         desc:"Keyframes, transitions, motion design.", code:"✨" },
      { img: null,    label:"Media Queries",          desc:"Responsive breakpoints for every device.", code:"📺" },
      { img: csss,    label:"Bootstrap",              desc:"Rapid UI with a utility-first framework." },
      { img: null,    label:"Material UI",            desc:"Google's design system in React components.", code:"🎨" },
      { img: null,    label:"Styled Components",      desc:"CSS-in-JS for dynamic, scoped styling.", code:"💅" },
    ],
  },
  {
    title:"React Ecosystem",
    accent:"#61dafb",
    skills:[
      { img: reactjs, label:"React Router",           desc:"Client-side routing for SPAs." },
      { img: reactjs, label:"React Hooks",            desc:"useState, useEffect, useRef and custom hooks." },
      { img: null,    label:"Context API",            desc:"Global state without external libraries.", code:"🔗" },
      { img: null,    label:"Custom Hooks",           desc:"Reusable logic extracted into hooks.", code:"🪝" },
      { img: null,    label:"Lazy Loading",           desc:"Load components only when needed.", code:"💤" },
      { img: null,    label:"Code Splitting",         desc:"Smaller bundles, faster load times.", code:"✂️" },
    ],
  },
  {
    title:"APIs & Data",
    accent:"#00e8c8",
    skills:[
      { img: null,    label:"REST API",               desc:"Consuming and integrating RESTful services.", code:"🔌" },
      { img: null,    label:"Fetch API",              desc:"Native browser data fetching.", code:"📡" },
      { img: null,    label:"Axios",                  desc:"HTTP client with interceptors and config.", code:"📦" },
      { img: null,    label:"JSON",                   desc:"Data exchange format for APIs.", code:"{}" },
    ],
  },
  {
    title:"Tools & Workflow",
    accent:"#f05032",
    skills:[
      { img: gitt,    label:"Git",                    desc:"Version control, branching, merging." },
      { img: githupp, label:"GitHub / GitHub Pages",  desc:"Repos, collaboration, deployment." },
      { img: vs,      label:"VS Code",                desc:"Code editing, debugging, extensions." },
      { img: null,    label:"Vite",                   desc:"Lightning-fast build tool for React.", code:"⚡" },
      { img: null,    label:"npm",                    desc:"Package management and scripts.", code:"📦" },
      { img: null,    label:"Chrome DevTools",        desc:"Debugging, performance, network analysis.", code:"🔧" },
      { img: null,    label:"Figma → Code",           desc:"Translating Figma designs to HTML & React.", code:"🎨" },
    ],
  },
  {
    title:"Performance & SEO",
    accent:"#88fd00",
    skills:[
      { img: null,    label:"Image Optimization",     desc:"Compression, lazy loading, modern formats.", code:"🖼️" },
      { img: null,    label:"SEO Basics",             desc:"Meta tags, semantic HTML, structured data.", code:"🔍" },
      { img: null,    label:"Semantic HTML",          desc:"Meaningful markup for accessibility and SEO.", code:"📝" },
      { img: null,    label:"Performance",            desc:"Fast load times, efficient rendering.", code:"🚀" },
    ],
  },
  {
    title:"Deployment",
    accent:"#a78bfa",
    skills:[
      { img: null,    label:"Netlify",                desc:"Deploy and host modern web projects.", code:"🟢" },
      { img: githupp, label:"GitHub Pages",           desc:"Free static hosting from any repo." },
    ],
  },
  {
    title:"UI/UX",
    accent:"#ff4d6d",
    skills:[
      { img: null,    label:"UI Development",         desc:"Building polished, interactive interfaces.", code:"🎨" },
      { img: null,    label:"Landing Page Design",    desc:"High-converting, visually bold pages.", code:"🚀" },
      { img: null,    label:"E-commerce UI",          desc:"Product pages, carts, checkout flows.", code:"🛍️" },
      { img: null,    label:"Pixel Perfect",          desc:"Exact match between design and implementation.", code:"🎯" },
      { img: null,    label:"Modern Web Design",      desc:"Clean, contemporary, trend-aware aesthetics.", code:"✦" },
    ],
  },
  {
    title:"Soft Skills",
    accent:"#febc2e",
    skills:[
      { img: null,    label:"Problem Solving",        desc:"Breaking down complex challenges into solutions.", code:"🧠" },
      { img: null,    label:"Debugging",              desc:"Finding and fixing bugs systematically.", code:"🐛" },
      { img: null,    label:"Clean Code",             desc:"Readable, maintainable, well-structured code.", code:"✨" },
      { img: null,    label:"Attention to Detail",    desc:"Nothing ships unless it's right.", code:"🔬" },
      { img: null,    label:"Time Management",        desc:"Deadlines met, priorities handled.", code:"⏱️" },
    ],
  },
];

const STATS = [
  { val:6,   suf:"",  lbl:"Projects" },
  { val:2,   suf:"y", lbl:"Coding"   },
  { val:500, suf:"+", lbl:"Hours"    },
  { val:7,   suf:"",  lbl:"Skills"   },
];

const ABOUT = [
  { n:"01", title:"Who I Am",        text:"Computer & AI student who genuinely loves the craft. I'm Michael Emil — I build things for the web and I design with intention." },
  { n:"02", title:"What I Do",       text:"HTML, CSS, JavaScript, React JS, and Git/GitHub. I move between code and design without skipping a beat." },
  { n:"03", title:"How I Work",      text:"I don't stop until it's done — and done right. Every project gets my full focus, from first commit to final polish." },
  { n:"04", title:"Where I'm Going", text:"Deeper, faster, better. I'm building toward full-stack mastery and I won't stop until I get there." },
];

const SERVICE_ITEMS = [
  { id:1, title:"Responsive Websites",    desc:"Pixel-perfect websites that look stunning on every screen — mobile, tablet, desktop. Fast, accessible, and built to last.", icon:"🌐", color:"rgba(180,255,80,.12)",  accent:"var(--a)",  demo:"browser"     },
  { id:2, title:"React Web Applications", desc:"Dynamic, component-based SPAs with clean state management. From simple tools to complex dashboards — React is my playground.", icon:"⚛️", color:"rgba(97,218,251,.1)",   accent:"#61DAFB",   demo:"component"   },
  { id:3, title:"Landing Pages",          desc:"High-converting landing pages with bold design, smooth animations, and a clear call to action. First impressions done right.", icon:"🚀", color:"rgba(0,232,200,.1)",    accent:"var(--a2)", demo:"landing"     },
  { id:4, title:"UI Development",         desc:"Turning designs or ideas into polished HTML/CSS/JS interfaces. Meticulous attention to spacing, color, and motion.",           icon:"🎨", color:"rgba(255,77,109,.1)",   accent:"var(--a3)", demo:"ui"          },
  { id:5, title:"Website Maintenance",    desc:"Bug fixes, performance boosts, content updates, and feature additions. Your site stays fresh — I stay on call.",               icon:"🔧", color:"rgba(180,255,80,.08)",  accent:"var(--a)",  demo:"maintenance" },
];

/* ══════════════════════════════════════════
   HOOKS
══════════════════════════════════════════ */
function useTheme() {
  const [t, setT] = useState("dark");
  const toggle = () => {
    const n = t === "dark" ? "light" : "dark";
    setT(n);
    document.body.setAttribute("data-t", n);
  };
  return [t, toggle];
}

function useFade(threshold = 0.12) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, vis];
}

function useCountUp(target, go) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!go) return;
    let c = 0;
    const step = Math.max(1, Math.ceil(target / 55));
    const iv = setInterval(() => {
      c = Math.min(c + step, target);
      setV(c);
      if (c >= target) clearInterval(iv);
    }, 18);
    return () => clearInterval(iv);
  }, [go, target]);
  return v;
}

function useTyping(words, spd = 75, pause = 1600) {
  const [display, setDisplay] = useState("");
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[wi];
    let t;
    if (!del && ci < w.length)  t = setTimeout(() => { setDisplay(w.slice(0,ci+1)); setCi(ci+1); }, spd);
    else if (!del)               t = setTimeout(() => setDel(true), pause);
    else if (del && ci > 0)      t = setTimeout(() => { setDisplay(w.slice(0,ci-1)); setCi(ci-1); }, spd/2);
    else                         { setDel(false); setWi((wi+1)%words.length); }
    return () => clearTimeout(t);
  }, [ci, del, wi, words, spd, pause]);
  return display;
}

/* ══════════════════════════════════════════
   INIT THEME
══════════════════════════════════════════ */
function InitTheme() {
  useEffect(() => { document.body.setAttribute("data-t", "dark"); }, []);
  return null;
}

/* ══════════════════════════════════════════
   COMPONENTS
══════════════════════════════════════════ */

/* Fade wrapper */
function Fi({ children, delay=0, style={}, className="" }) {
  const [ref, vis] = useFade();
  return (
    <div ref={ref} className={`fi${vis?" vis":""} ${className}`}
      style={{ transitionDelay:`${delay}s`, transitionDuration:".75s", ...style }}>
      {children}
    </div>
  );
}

/* Magnetic */
function Mag({ children, as="div", style={}, onClick, href, target, rel }) {
  const ref = useRef(null);
  const mv = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    ref.current.style.transform = `translate(${(e.clientX-(r.left+r.width/2))*.3}px,${(e.clientY-(r.top+r.height/2))*.3}px)`;
  };
  const ml = () => { if (ref.current) ref.current.style.transform = ""; };
  const Tag = href ? "a" : as;
  return <Tag ref={ref} href={href} target={target} rel={rel} onClick={onClick} className="mag" style={style} onMouseMove={mv} onMouseLeave={ml}>{children}</Tag>;
}

/* Tilt */
function Tilt({ children, style={}, onClick }) {
  const ref = useRef(null);
  const mv = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    ref.current.style.transform = `perspective(900px) rotateX(${((e.clientY-r.top-r.height/2)/(r.height/2))*-8}deg) rotateY(${((e.clientX-r.left-r.width/2)/(r.width/2))*8}deg) scale(1.015)`;
  };
  const ml = () => { if (ref.current) ref.current.style.transform = ""; };
  return (
    <div ref={ref} style={{...style,transition:"transform .15s ease"}} onMouseMove={mv} onMouseLeave={ml} onClick={onClick}>
      {children}
    </div>
  );
}

/* Custom Cursor */
function Cursor() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const ring = useRef({x:0,y:0});
  const mouse = useRef({x:0,y:0});
  
  useEffect(() => {
    // لو موبايل، مينفذش الكود
    if (isMobile) return;
    
    const mv = (e) => {
      mouse.current = {x:e.clientX,y:e.clientY};
      if (dotRef.current) { dotRef.current.style.left=e.clientX+"px"; dotRef.current.style.top=e.clientY+"px"; }
    };
    const ho = (e) => document.body.classList.toggle("hov", !!e.target.closest("a,button,[data-hover]"));
    let raf;
    const anim = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * .1;
      ring.current.y += (mouse.current.y - ring.current.y) * .1;
      if (ringRef.current) { ringRef.current.style.left=ring.current.x+"px"; ringRef.current.style.top=ring.current.y+"px"; }
      raf = requestAnimationFrame(anim);
    };
    anim();
    window.addEventListener("mousemove", mv);
    window.addEventListener("mouseover", ho);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove",mv); window.removeEventListener("mouseover",ho); };
  }, [isMobile]);
  
  // لو موبايل، متظهرش حاجة
  if (isMobile) return null;
  
  return (
    <>
      <div id="cur"><div id="cur-dot" ref={dotRef} style={{position:"fixed"}}/></div>
      <div id="cur-ring" ref={ringRef}/>
    </>
  );
}

/* Loader */
function Loader({ onDone }) {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => { setHide(true); setTimeout(onDone, 700); }, 1600);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <div id="loader" className={hide?"out":""}>
      <div className="ld-word">
        {"Michael".split("").map((l,i) => <span key={i} style={{animationDelay:`${i*.05}s`}}>{l}</span>)}
      </div>
      <div className="ld-dot"/>
    </div>
  );
}

/* Particles */
function Particles() {
  const cv = useRef(null);
  useEffect(() => {
    const c = cv.current, ctx = c.getContext("2d");
    let raf;
    const resize = () => { c.width=c.offsetWidth; c.height=c.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    const pts = Array.from({length:55},()=>({
      x:Math.random()*c.width, y:Math.random()*c.height,
      r:Math.random()*1.2+.3, vx:(Math.random()-.5)*.3, vy:(Math.random()-.5)*.3,
      op:Math.random()*.35+.08,
    }));
    const draw = () => {
      ctx.clearRect(0,0,c.width,c.height);
      pts.forEach(p => {
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0||p.x>c.width) p.vx*=-1;
        if(p.y<0||p.y>c.height) p.vy*=-1;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle=`rgba(180,255,80,${p.op})`; ctx.fill();
      });
      for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++){
        const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y, d=Math.sqrt(dx*dx+dy*dy);
        if(d<100){ ctx.beginPath(); ctx.strokeStyle=`rgba(180,255,80,${.08*(1-d/100)})`; ctx.lineWidth=.4; ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y); ctx.stroke(); }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize",resize); };
  },[]);
  return <canvas ref={cv} style={{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}}/>;
}

/* ══════════════════════════════════════════
   SECTIONS
══════════════════════════════════════════ */

/* NAVBAR */
function Navbar({ theme, toggle }) {
  const [sc, setSc] = useState(false);
  const [mo, setMo] = useState(false);
  useEffect(() => { const f=()=>setSc(window.scrollY>50); window.addEventListener("scroll",f); return ()=>window.removeEventListener("scroll",f); },[]);
  const links = [["Home","#home"],["About","#about"],["Work","#work"],["Services","#service"],["Skills","#skills"],["Contact","#contact"]];
  return (
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:1000,height:60,background:sc?"var(--nav)":"transparent",backdropFilter:sc?"blur(20px)":"none",borderBottom:sc?"1px solid var(--bd)":"none",padding:"0 clamp(20px,5vw,60px)",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
      <span className="glitch" data-g="Michael." style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:22,color:"var(--text)",letterSpacing:".04em",cursor:"default"}}>
        Michael<span style={{color:"var(--a)"}}>.</span>
      </span>
      <div className="nav-links">
        {links.map(([l,h]) => <a key={l} href={h} className="nav-link">{l}</a>)}
        <Mag as="button" onClick={toggle} style={{background:"transparent",border:"1px solid var(--bd)",padding:"5px 14px",borderRadius:"2px",color:"var(--t2)",fontSize:12,fontWeight:700,cursor:"none",letterSpacing:".06em",textTransform:"uppercase",fontFamily:"'Cabinet Grotesk',sans-serif"}}>
          {theme==="dark"?"☀ Light":"☾ Dark"}
        </Mag>
      </div>
      <button className="ham" onClick={()=>setMo(!mo)}>☰</button>
      {mo && (
        <div className="mob-menu">
          {links.map(([l,h]) => (
            <a key={l} href={h} onClick={()=>setMo(false)} style={{color:"var(--text)",textDecoration:"none",padding:"16px 28px",fontSize:17,fontFamily:"'Cabinet Grotesk',sans-serif",fontWeight:700,borderBottom:"1px solid var(--bd)"}}>
              {l}
            </a>
          ))}
          <button onClick={()=>{toggle();setMo(false);}} style={{background:"none",border:"none",color:"var(--a)",padding:"16px 28px",fontSize:16,fontFamily:"'Cabinet Grotesk',sans-serif",fontWeight:700,textAlign:"left",cursor:"none",borderTop:"1px solid var(--bd)"}}>
            {theme==="dark"?"☀ Light Mode":"☾ Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}
/* HERO */
function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

useEffect(() => {
  const onResize = () => setIsMobile(window.innerWidth <= 768);
  window.addEventListener("resize", onResize);
  return () => window.removeEventListener("resize", onResize);
}, []);
  const typed = useTyping(["Web Developer","UI Designer","CS Student","React Dev"]);
  const bgRef = useRef(null);
  useEffect(()=>{
    const f=()=>{ if(bgRef.current) bgRef.current.style.backgroundPositionY=`${window.scrollY*.3}px`; };
    window.addEventListener("scroll",f);
    return ()=>window.removeEventListener("scroll",f);
  },[]);

  return (
    <section id="home" ref={bgRef} className="parallax-bg grid-bg" style={{
      minHeight:"100vh", position:"relative", overflow:"hidden",
      /* ************************************************************
         BACKGROUND IMAGE — استبدل الـ URL ده بـ background image
         بتاعك (صورة بتاعتك الشخصية) بالمسار الصح
         مثال: url('../realme 2pro/my-photo.jpg')
         الـ gradient فوقيها بيعمل fade من فوق ومن تحت
      ************************************************************ */
backgroundImage: isMobile
 ? `linear-gradient(to bottom, var(--bg) 0%, transparent 20%, var(--bg) 100%)`
  : `
      linear-gradient(to right, var(--bg) 0%, var(--bg) 38%, transparent 65%, transparent 100%),
      linear-gradient(to left, var(--bg) 0%, transparent 20%, transparent 82%, var(--bg) 100%),
      linear-gradient(to bottom, var(--bg) 0%, transparent 18%, transparent 80%, var(--bg) 100%),
      url(${heroBg})
    `,
      backgroundSize:"cover",
      backgroundPosition:"top center",
      display:"flex", flexDirection:"column",
      justifyContent:"center", alignItems:"flex-start",
       padding: isMobile 
    ? "0 16px 0 16px"   // 👈 في الموبايل يبقى 16px بس (تقريباً من الشمال)
    : "0 clamp(24px,8vw,120px)", // 👈 في الشاشات الكبيرة نفس الكلام
    }}>

      {/* صورة الموبايل فقط */}
{/* صورة الموبايل - يمين */}
{/* صورة الموبايل - يمين ثابتة */}
{/* صورة الموبايل - يمين */}
{/* صورة الموبايل - يمين */}
{/* صورة الموبايل - يمين */}
{/* صورة الموبايل - يمين */}
{/* صورة الموبايل - يمين بجد */}
{/* صورة الموبايل - يمين */}
{isMobile && (
  <img
    src={heroBg}
    alt=""
    style={{
      position:"absolute",
      right: "-10%", // 👈 خليها -10% عشان تظهر في اليمين
      top: "50%",
      transform: "translateY(-50%)",
      height: "100%",
      width: "auto",
      objectFit: "cover",
      objectPosition: "center center",
      zIndex: 0,
      pointerEvents: "none",
      opacity: 0.8,
      maskImage: "linear-gradient(to left, black 0%, black 60%, transparent 90%)", // 👈 من اليمين للشمال
      WebkitMaskImage: "linear-gradient(to left, black 0%, black 60%, transparent 90%)",
    }}
  />
)}
      <Particles />

      {/* ── decorative vertical accent line ── */}
      <div style={{position:"absolute", left: isMobile ? "16px" : "clamp(24px,8vw,120px)",
top:0,bottom:0,width:1,background:"linear-gradient(to bottom,transparent,var(--a),transparent)",opacity:.25,zIndex:1}} />

      {/* ── glow blob behind photo area ── */}
      <div style={{
        position:"absolute",right:"clamp(60px,14vw,200px)",top:"50%",
        transform:"translateY(-50%)",
        width:"clamp(280px,34vw,520px)",height:"clamp(340px,44vw,640px)",
        borderRadius:"40% 60% 55% 45% / 45% 40% 60% 55%",
        background:"radial-gradient(ellipse at 40% 40%, rgba(180,255,80,.13) 0%, rgba(0,232,200,.07) 55%, transparent 80%)",
        filter:"blur(32px)",
        zIndex:-1,pointerEvents:"none",
      }}/>

      {/* ── LEFT: text content ── */}
{/* ── LEFT: text content ── */}
<div style={{
  position:"relative",
  zIndex:2,
  maxWidth: isMobile ? "55%" : 600, // 👈 النص في الشمال
  paddingRight: isMobile ? "20px" : "0",
}}>       <div className="hero-tag" style={{marginBottom:24}}>
          <span style={{width:6,height:6,borderRadius:"50%",background:"var(--a)",display:"inline-block"}}/>
          Available for work
        </div>

        <h1 className="hero-title" style={{fontSize:"clamp(52px,9vw,120px)",color:"var(--text)",marginBottom:0}}>
          Michael
        </h1>
        <h1 className="hero-title" style={{fontSize:"clamp(52px,9vw,120px)",color:"var(--a)",marginBottom:24}}>
          Emil<span style={{color:"var(--text)"}}>.</span>
        </h1>

        <div className="hero-sub" style={{display:"flex",alignItems:"center",gap:12,marginBottom:40}}>
          <div style={{width:32,height:1,background:"var(--a2)"}}/>
          <span style={{fontFamily:"'Cabinet Grotesk',sans-serif",fontSize:"clamp(14px,1.8vw,19px)",color:"var(--t2)",fontWeight:500,letterSpacing:".04em"}}>
            {typed}<span className="tcur">|</span>
          </span>
        </div>

        <div className="hero-btns" style={{display:"flex",gap:14,flexWrap:"wrap",marginBottom:48}}>
          <Mag href="#work" style={{
            display:"inline-flex",alignItems:"center",gap:10,
            padding:"14px 32px",background:"var(--a)",color:"var(--bg)",
            fontFamily:"'Cabinet Grotesk',sans-serif",fontWeight:800,fontSize:14,
            letterSpacing:".06em",textTransform:"uppercase",textDecoration:"none",
            borderRadius:"2px",border:"2px solid var(--a)",
            boxShadow:"4px 4px 0 rgba(180,255,80,.28)",
          }}>
            View Work <span>→</span>
          </Mag>
          <Mag href="mailto:mikelemel2@gmail.com" style={{
            display:"inline-flex",alignItems:"center",gap:10,
            padding:"14px 32px",background:"transparent",color:"var(--text)",
            fontFamily:"'Cabinet Grotesk',sans-serif",fontWeight:800,fontSize:14,
            letterSpacing:".06em",textTransform:"uppercase",textDecoration:"none",
            borderRadius:"2px",border:"2px solid var(--bd)",
          }}>
            Get in Touch
          </Mag>
        </div>

        {/* mini info row */}
        <div style={{display:"flex",gap:28,flexWrap:"wrap"}}>
          {[["📍","Egypt"],["🎓","Computer & AI"],["💻","Open to Freelance"]].map(([ic,tx])=>(
            <span key={tx} style={{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--t2)",fontFamily:"'Cabinet Grotesk',sans-serif",letterSpacing:".04em"}}>
              <span style={{fontSize:14}}>{ic}</span>{tx}
            </span>
          ))}
        </div>
      </div>

      {/* ── RIGHT: personal photo (background only) ── */}
      {/* ************************************************************
          الصورة كـ background — غير الـ url لو عايز تبدل الصورة
          backgroundPosition: اضبطها عشان الوجه يبقى مظبوط
          القيمة الحالية "300px center" — زيد أو نقص الـ 300
      ************************************************************ */}
      <div   className="hero-photo-div"
        style={{
        position:"absolute",
        /* بيبدأ من 35% عشان يـ overlap مع النص ويحصل blend طبيعي */
        left:"35%",
        right:0,
        top:0,
        bottom:0,
        zIndex:2,
        pointerEvents:"none",
        userSelect:"none",
        // backgroundImage:"url('/imgg.jpeg')",
        backgroundSize:"cover",
        backgroundPosition:"center center",
        /* fade يسار بيبدأ من أول الـ div وبيكون ناعم */
        maskImage:"linear-gradient(to right, transparent 0%, black 55%, black 100%), linear-gradient(to top, transparent 0%, black 10%, black 100%), linear-gradient(to bottom, transparent 0%, black 5%, black 100%)",
        WebkitMaskImage:"linear-gradient(to right, transparent 0%, black 55%, black 100%), linear-gradient(to top, transparent 0%, black 10%, black 100%), linear-gradient(to bottom, transparent 0%, black 5%, black 100%)",
      }}>
        {/* glow overlay فوق الصورة */}
        <div style={{
          position:"absolute", inset:0,
          background:"radial-gradient(ellipse 55% 65% at 30% 55%, rgba(0,120,100,.2) 0%, transparent 65%), radial-gradient(ellipse 45% 35% at 65% 75%, rgba(160,80,30,.14) 0%, transparent 60%)",
          opacity:"var(--photo-glow-op, 1)",
        }}/>
      </div>

      {/* scroll indicator */}
      <div style={{position:"absolute",bottom:32,right:"clamp(24px,5vw,60px)",zIndex:3,display:"flex",flexDirection:"column",alignItems:"center",gap:8}}>
        <span style={{fontSize:10,color:"var(--t3)",letterSpacing:3,textTransform:"uppercase",fontFamily:"'Cabinet Grotesk',sans-serif",writingMode:"vertical-rl"}}>Scroll</span>
        <div style={{width:1,height:48,background:"linear-gradient(to bottom,var(--a2),transparent)"}}/>
      </div>
    </section>
  );
}

/* STATS */
function StatNum({ val, suf, lbl, go }) {
  const v = useCountUp(val, go);
  return (
    <div style={{textAlign:"center",padding:"30px 16px",borderRight:"1px solid var(--bd)"}}>
      <div className="stat-num">{v}{suf}</div>
      <div style={{color:"var(--t2)",fontSize:12,letterSpacing:".1em",textTransform:"uppercase",marginTop:4,fontWeight:600}}>{lbl}</div>
    </div>
  );
}
function Stats() {
  const [ref, vis] = useFade();
  return (
    <div ref={ref} style={{borderTop:"1px solid var(--bd)",borderBottom:"1px solid var(--bd)",background:"var(--bg1)"}}>
      <div className="stats-grid" style={{maxWidth:900,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
        {STATS.map((s,i) => <StatNum key={i} {...s} go={vis}/>)}
      </div>
    </div>
  );
}

/* ABOUT */
function About() {
  return (
    <section id="about" style={{padding:"120px clamp(24px,8vw,120px)",maxWidth:1400,margin:"0 auto"}}>
      <Fi>
        <div style={{display:"flex",alignItems:"baseline",gap:20,marginBottom:64}}>
          <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(52px,8vw,96px)",color:"var(--text)",lineHeight:1}}>About</span>
          <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(52px,8vw,96px)",color:"var(--a)",lineHeight:1}}>Me</span>
          <div style={{flex:1,height:1,background:"linear-gradient(to right,var(--a),transparent)",alignSelf:"center",marginLeft:16}}/>
        </div>
      </Fi>
      <div className="about-grid" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:16}}>
        {ABOUT.map((a,i) => (
          <Fi key={i} delay={i*.07}>
            <div className="about-card" style={{height:"100%"}}>
              <div className="about-num">{a.n}</div>
              <h3 style={{fontFamily:"'Cabinet Grotesk',sans-serif",fontWeight:800,fontSize:16,color:"var(--a)",letterSpacing:".04em",textTransform:"uppercase",marginBottom:14}}>{a.title}</h3>
              <p style={{color:"var(--t2)",fontSize:14,lineHeight:1.85}}>{a.text}</p>
            </div>
          </Fi>
        ))}
      </div>
    </section>
  );
}

/* WORK */
function Modal({ p, onClose }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (p) requestAnimationFrame(() => setShow(true));
  }, [p]);
  if (!p) return null;
  return (
    <div className="overlay" onClick={onClose}
      style={{ opacity: show ? 1 : 0, transition: "opacity .2s ease" }}>
      <div className="mbox" onClick={e => e.stopPropagation()}
        style={{
          position: "relative",
          transform: show ? "scale(1) translateY(0)" : "scale(.93) translateY(24px)",
          opacity: show ? 1 : 0,
          transition: "transform .35s cubic-bezier(.22,.68,0,1.2), opacity .25s ease",
          maxWidth: 640,
        }}>
        <div style={{
          width: "100%", background: p.img ? "var(--bg2)" : "linear-gradient(135deg,rgba(180,255,80,.07),rgba(0,232,200,.05))",
          display: "flex", alignItems: "center", justifyContent: "center",
          overflow: "hidden", borderRadius: "4px 4px 0 0", minHeight: 200,
        }}>
          {p.img
            ? <img src={p.img} alt={p.title} style={{ width:"100%", height:"auto", maxHeight:360, objectFit:"contain", display:"block", padding:"12px" }}/>
            : <span style={{ fontSize: 72 }}>{p.icon}</span>}
        </div>
        <button className="mclose" onClick={onClose}>✕</button>
        <div style={{ padding: "26px 28px 32px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:8, flexWrap:"wrap" }}>
            <h3 style={{ fontFamily:"'Cabinet Grotesk',sans-serif", fontWeight:800, fontSize:20, color:"var(--text)", flex:1 }}>{p.title}</h3>
            {p.soon && <span className="soon-badge">Soon</span>}
          </div>
          <p style={{ color:"var(--t2)", fontSize:14, lineHeight:1.8, marginBottom:20 }}>{p.desc}</p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom: p.link ? 24 : 0 }}>
            {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
          {p.link && !p.soon && (
            <a href={p.link} target="_blank" rel="noreferrer" className="visit-btn">
              Visit Site <span className="arrow">↗</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Work() {
  const [active, setActive] = useState(0);
  const [m, setM] = useState(null);
  const containerRef = useRef(null);
  const isAnimating = useRef(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  // 🎯 للتعامل مع اللمس
  const onTouchStart = useRef({ y: 0 });

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // 🎯 منع التمرير العادي للصفحة جوا القسم
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // منع التمرير العادي
    const preventScroll = (e) => {
      if (el.contains(e.target)) {
        e.preventDefault();
      }
    };

    // منع الـ scroll events
    document.addEventListener('wheel', preventScroll, { passive: false });
    document.addEventListener('touchmove', preventScroll, { passive: false });

    return () => {
      document.removeEventListener('wheel', preventScroll);
      document.removeEventListener('touchmove', preventScroll);
    };
  }, []);

  // 🎯 التمرير بالعجلة مع إمكانية الخروج من القسم
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e) => {
      // منع التمرير العادي
      e.preventDefault();
      
      if (isAnimating.current) return;
      
      // 🎯 التمرير لأسفل
      if (e.deltaY > 30) {
        if (active < WORKS.length - 1) {
          isAnimating.current = true;
          setActive(prev => prev + 1);
          setTimeout(() => { isAnimating.current = false; }, 600);
        } else {
          // 🎯 لو في آخر مشروع، اخرج من القسم للـ Services
          isAnimating.current = true;
          // إعادة تفعيل التمرير العادي مؤقتاً
          document.removeEventListener('wheel', preventScroll);
          document.removeEventListener('touchmove', preventScroll);
          
          const servicesSection = document.getElementById('service');
          if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
          }
          
          setTimeout(() => { 
            isAnimating.current = false;
            // إعادة منع التمرير بعد الخروج
            setTimeout(() => {
              document.addEventListener('wheel', preventScroll, { passive: false });
              document.addEventListener('touchmove', preventScroll, { passive: false });
            }, 100);
          }, 600);
        }
      } 
      // 🎯 التمرير لأعلى
      else if (e.deltaY < -30) {
        if (active > 0) {
          isAnimating.current = true;
          setActive(prev => prev - 1);
          setTimeout(() => { isAnimating.current = false; }, 600);
        } else {
          // 🎯 لو في أول مشروع، اخرج من القسم للـ About
          isAnimating.current = true;
          // إعادة تفعيل التمرير العادي مؤقتاً
          document.removeEventListener('wheel', preventScroll);
          document.removeEventListener('touchmove', preventScroll);
          
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
          
          setTimeout(() => { 
            isAnimating.current = false;
            // إعادة منع التمرير بعد الخروج
            setTimeout(() => {
              document.addEventListener('wheel', preventScroll, { passive: false });
              document.addEventListener('touchmove', preventScroll, { passive: false });
            }, 100);
          }, 600);
        }
      }
    };

    // دالة منع التمرير (نفس اللي فوق)
    const preventScroll = (e) => {
      const el = containerRef.current;
      if (el && el.contains(e.target)) {
        e.preventDefault();
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    
    return () => {
      el.removeEventListener("wheel", onWheel);
      document.removeEventListener('wheel', preventScroll);
      document.removeEventListener('touchmove', preventScroll);
    };
  }, [active]);

  // 🎯 معالج اللمس
  const onTouchStartHandler = (e) => {
    onTouchStart.current.y = e.touches[0].clientY;
  };

  const onTouchMoveHandler = (e) => {
    e.preventDefault();
    if (isAnimating.current) return;
    
    const deltaY = onTouchStart.current.y - e.touches[0].clientY;
    
    // 🎯 السحب لأسفل (للأمام)
    if (deltaY > 30 && active < WORKS.length - 1) {
      isAnimating.current = true;
      setActive(prev => prev + 1);
      setTimeout(() => { isAnimating.current = false; }, 600);
    } 
    // 🎯 السحب لأعلى (للخلف)
    else if (deltaY < -30 && active > 0) {
      isAnimating.current = true;
      setActive(prev => prev - 1);
      setTimeout(() => { isAnimating.current = false; }, 600);
    }
    // 🎯 الخروج من القسم باللمس
    else if (deltaY > 30 && active === WORKS.length - 1) {
      isAnimating.current = true;
      const servicesSection = document.getElementById('service');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
      setTimeout(() => { isAnimating.current = false; }, 600);
    }
    else if (deltaY < -30 && active === 0) {
      isAnimating.current = true;
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
      setTimeout(() => { isAnimating.current = false; }, 600);
    }
  };

  const goTo = (idx) => {
    if (isAnimating.current || idx === active) return;
    setActive(idx);
  };

  return (
    <section 
      id="work" 
      ref={containerRef}
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        position: "relative",
        background: "var(--bg)",
        touchAction: "none",
      }}
      onTouchStart={onTouchStartHandler}
      onTouchMove={onTouchMoveHandler}
    >
      {/* ── title ── */}
      <div style={{
        position: "absolute",
        top: isMobile ? "clamp(16px, 3vh, 30px)" : "clamp(30px, 5vh, 60px)",
        left: isMobile ? "clamp(12px, 4vw, 20px)" : "clamp(24px, 6vw, 80px)",
        zIndex: 20,
        pointerEvents: "none",
      }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: isMobile ? 8 : 16 }}>
          <span style={{ 
            fontFamily: "'Bebas Neue',sans-serif", 
            fontSize: isMobile ? "clamp(24px, 5vw, 32px)" : "clamp(36px, 5vw, 64px)", 
            color: "var(--text)", 
            lineHeight: 1 
          }}>My</span>
          <span style={{ 
            fontFamily: "'Bebas Neue',sans-serif", 
            fontSize: isMobile ? "clamp(24px, 5vw, 32px)" : "clamp(36px, 5vw, 64px)", 
            color: "var(--a)", 
            lineHeight: 1 
          }}>Works</span>
        </div>
      </div>

      {/* ── dot nav ── */}
      <div style={{
        position: "absolute", 
        right: isMobile ? 12 : 32, 
        top: "50%", 
        transform: "translateY(-50%)",
        zIndex: 20, 
        display: "flex", 
        flexDirection: "column", 
        gap: isMobile ? 6 : 10,
      }}>
        {WORKS.map((_, i) => (
          <button 
            key={i} 
            onClick={() => goTo(i)} 
            style={{
              width: i === active ? (isMobile ? 8 : 10) : (isMobile ? 4 : 6),
              height: i === active ? (isMobile ? 8 : 10) : (isMobile ? 4 : 6),
              borderRadius: "50%",
              background: i === active ? "var(--a)" : "var(--bd)",
              border: "none", 
              cursor: "pointer", 
              padding: 0,
              transition: "all .3s",
              boxShadow: i === active ? "0 0 8px var(--a)" : "none",
            }}
          />
        ))}
      </div>

      {/* ── slide counter ── */}
      <div style={{
        position: "absolute", 
        bottom: isMobile ? 12 : 32, 
        left: isMobile ? "clamp(12px, 4vw, 20px)" : "clamp(24px, 6vw, 80px)",
        zIndex: 20, 
        fontFamily: "'Bebas Neue',sans-serif",
        fontSize: isMobile ? 10 : 13, 
        letterSpacing: ".2em", 
        color: "var(--t3)",
      }}>
        0{active + 1} <span style={{ color: "var(--bd)" }}>/ 0{WORKS.length}</span>
      </div>

      {/* ── Slides using CSS transform ── */}
      <div
        style={{
          height: `${WORKS.length * 100}vh`,
          width: "100%",
          transform: `translateY(-${active * 100}vh)`,
          transition: "transform 0.7s cubic-bezier(0.22, 0.68, 0, 1.2)",
          willChange: "transform",
        }}
      >
        {WORKS.map((w, index) => (
          <div
            key={index}
            style={{
              height: "100vh",
              width: "100%",
              display: "flex",
              alignItems: "center",
              position: "relative",
              background: "var(--bg)",
              overflow: "hidden",
            }}
          >
            <FullSlideContent 
              w={w} 
              onOpen={setM} 
              isActive={index === active}
            />
          </div>
        ))}
      </div>

      {/* ── Modal ── */}
      {m && <Modal p={m} onClose={() => setM(null)} />}

      {/* ── Scroll hint ── */}
{active === 0 && !isMobile && (
        <div style={{
          position: "absolute", 
          bottom: isMobile ? 60 : 32, 
          right: isMobile ? "clamp(12px, 4vw, 20px)" : "clamp(16px, 4vw, 60px)",
          zIndex: 10, 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          gap: 6,
        }}>
          <span style={{ 
            fontSize: isMobile ? 7 : 9, 
            color: "var(--t3)", 
            letterSpacing: 3, 
            textTransform: "uppercase", 
            fontFamily: "'Cabinet Grotesk',sans-serif", 
            writingMode: "vertical-rl" 
          }}>Scroll</span>
          <div style={{ 
            width: 1, 
            height: isMobile ? 20 : 40, 
            background: "linear-gradient(to bottom,var(--a2),transparent)" 
          }}/>
        </div>
      )}

      {/* ── Bottom indicator ── */}
      {active === WORKS.length - 1 && (
        <div style={{
          position: "absolute", 
          bottom: isMobile ? 60 : 32, 
          right: isMobile ? "clamp(12px, 4vw, 20px)" : "clamp(16px, 4vw, 60px)",
          zIndex: 10, 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          gap: 6,
        }}>
          <span style={{ 
            fontSize: isMobile ? 7 : 9, 
            color: "var(--t3)", 
            letterSpacing: 3, 
            textTransform: "uppercase", 
            fontFamily: "'Cabinet Grotesk',sans-serif", 
            writingMode: "vertical-rl" 
          }}>Next</span>
          <div style={{ 
            width: 1, 
            height: isMobile ? 20 : 40, 
            background: "linear-gradient(to bottom,var(--a2),transparent)" 
          }}/>
        </div>
      )}
    </section>
  );
}

function FullSlideContent({ w, onOpen, isActive }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div style={{
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      background: "var(--bg)",
      opacity: isActive ? 1 : 0.8,
      transition: "opacity 0.5s ease",
      padding: isMobile ? "0" : "0",
    }}>
      {/* ── BG image ── */}
      {w.img && (
        <div style={{
          position: "absolute", 
          inset: 0,
          backgroundImage: `url('${w.img}')`,
          backgroundSize: "cover", 
          backgroundPosition: "center",
          opacity: isMobile ? 0.12 : 0.15, // 👈 أوضح شوية
    filter: isMobile ? "blur(2px)" : "blur(3px)", 
          transform: isMobile ? "scale(1.1)" : "scale(1)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}/>
      )}

      {/* ── gradient overlay ── */}
      <div style={{
        position: "absolute", 
        inset: 0,
  background: isMobile 
    ? `linear-gradient(to bottom, var(--bg) 0%, transparent 10%, transparent 60%, var(--bg) 100%)` // 👈 غيرنا النسب
    : `linear-gradient(to right, var(--bg) 0%, var(--bg) 40%, transparent 75%), 
       linear-gradient(to top, var(--bg) 0%, transparent 25%)`,
        pointerEvents: "none",
      }}/>

      {/* ── content container ── */}
      <div style={{
        position: "relative", 
        zIndex: 2,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "center" : "center",
        justifyContent: isMobile ? "center" : "space-between",
  padding: isMobile ? "70px 20px 30px" : "120px clamp(24px, 8vw, 120px) 80px",
          maxWidth: isMobile ? "100%" : 1400,
        margin: "0 auto",
         gap: isMobile ? 20 : 0,
      }}>
        {/* ── left content ── */}
        <div style={{
          width: isMobile ? "100%" : "auto",
          flex: isMobile ? "none" : 1,
          maxWidth: isMobile ? "100%" : 780,
          padding: isMobile ? "0" : "0",
          transform: isActive ? "translateY(0)" : "translateY(20px)",
          opacity: isActive ? 1 : 0.7,
          transition: "transform 0.6s cubic-bezier(0.22, 0.68, 0, 1.2), opacity 0.5s ease",
          textAlign: isMobile ? "center" : "left",
        }}>
          {/* index */}
          <span style={{
            fontFamily: "'Bebas Neue',sans-serif", 
            fontSize: isMobile ? 10 : 11,
            color: "var(--a)", 
            letterSpacing: ".25em",
            display: "block", 
            marginBottom: isMobile ? 12 : 24,
            textAlign: isMobile ? "center" : "left",
          }}>
            PROJECT — 0{w.id}
          </span>

          {/* title */}
          <h2 style={{
            fontFamily: "'Bebas Neue',sans-serif",
            fontSize: isMobile ? "clamp(36px, 8vw, 48px)" : "clamp(52px, 8vw, 110px)",
            color: "var(--text)", 
            lineHeight: isMobile ? 1.1 : 0.95,
            marginBottom: isMobile ? 12 : 28, 
            letterSpacing: ".01em",
            textAlign: isMobile ? "center" : "left",
            wordBreak: "break-word",
          }}>
            {w.title}
            {w.soon && (
              <span className="soon-badge" style={{ 
                marginLeft: isMobile ? 8 : 16, 
                verticalAlign: "middle", 
                fontSize: isMobile ? 10 : 14,
                display: isMobile ? "inline-block" : "inline",
              }}>Soon</span>
            )}
          </h2>

          {/* desc */}
          <p style={{
            color: "var(--t2)", 
            fontSize: isMobile ? "clamp(13px, 2.5vw, 15px)" : "clamp(15px, 1.5vw, 18px)",
            lineHeight: isMobile ? 1.7 : 1.8, 
            marginBottom: isMobile ? 16 : 32, 
            maxWidth: isMobile ? "100%" : 520,
            textAlign: isMobile ? "center" : "left",
            padding: isMobile ? "0 4px" : "0",
          }}>{w.desc}</p>

          {/* tags */}
          <div style={{ 
            display: "flex", 
            flexWrap: "wrap", 
            gap: isMobile ? 6 : 8, 
            marginBottom: isMobile ? 16 : 40,
            justifyContent: isMobile ? "center" : "flex-start",
          }}>
            {w.tags.map(t => (
              <span key={t} className="tag" style={{ 
                fontSize: isMobile ? 9 : 12, 
                padding: isMobile ? "3px 8px" : "5px 14px",
                background: "rgba(180,255,80,0.08)",
                border: "1px solid rgba(180,255,80,0.15)",
                borderRadius: "4px",
                color: "var(--t2)",
                fontFamily: "'Cabinet Grotesk',sans-serif",
                fontWeight: 600,
                letterSpacing: "0.03em",
              }}>{t}</span>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ 
            display: "flex", 
            gap: isMobile ? 8 : 14, 
            flexWrap: "wrap", 
            alignItems: "center",
            justifyContent: isMobile ? "center" : "flex-start",
          }}>
            {w.link && !w.soon && (
              <a href={w.link} target="_blank" rel="noreferrer" 
                className="visit-btn" 
                style={{ 
                  marginTop: 0,
                  padding: isMobile ? "8px 16px" : "12px 28px",
                  fontSize: isMobile ? 11 : 14,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "var(--a)",
                  color: "var(--bg)",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  textDecoration: "none",
                  borderRadius: "2px",
                  border: "2px solid var(--a)",
                  fontFamily: "'Cabinet Grotesk',sans-serif",
                  letterSpacing: ".06em",
                }}
              >
                Visit Site <span className="arrow" style={{ fontSize: isMobile ? 14 : 18 }}>↗</span>
              </a>
            )}
            <button 
              onClick={() => onOpen(w)} 
              style={{
                background: "transparent", 
                border: "1px solid var(--bd)",
                borderRadius: 2, 
                padding: isMobile ? "8px 16px" : "12px 24px",
                color: "var(--t2)", 
                fontSize: isMobile ? 10 : 12, 
                fontWeight: 700,
                letterSpacing: ".06em", 
                textTransform: "uppercase",
                cursor: "pointer", 
                fontFamily: "'Cabinet Grotesk',sans-serif",
                transition: "border-color .2s, color .2s",
              }}
              onMouseEnter={e => { 
                e.currentTarget.style.borderColor = "var(--a)"; 
                e.currentTarget.style.color = "var(--a)"; 
              }}
              onMouseLeave={e => { 
                e.currentTarget.style.borderColor = "var(--bd)"; 
                e.currentTarget.style.color = "var(--t2)"; 
              }}
            >
              Details →
            </button>
          </div>
        </div>

        {/* ── right preview image (Desktop only) ── */}
        {w.img && !isMobile && (
          <div style={{
            position: "relative",
            width: "clamp(300px, 36vw, 520px)",
            aspectRatio: "16/10",
            borderRadius: 8,
            overflow: "hidden",
            border: "1px solid var(--bd)",
            boxShadow: "0 32px 80px rgba(0,0,0,.5)",
            flexShrink: 0,
            transform: isActive ? "scale(1)" : "scale(0.9)",
            opacity: isActive ? 1 : 0.5,
            transition: "transform 0.6s cubic-bezier(0.22, 0.68, 0, 1.2), opacity 0.5s ease",
          }}>
            <img src={w.img} alt={w.title} style={{ 
              width: "100%", 
              height: "100%", 
              objectFit: "cover" 
            }}/>
            <div style={{ 
              position: "absolute", 
              inset: 0, 
              background: "linear-gradient(135deg, rgba(180,255,80,.06), transparent)" 
            }}/>
          </div>
        )}

        {/* ── mobile preview image (small thumbnail) ── */}
{/* ── mobile preview image (bigger & better) ── */}
{w.img && isMobile && (
  <div style={{
    width: "100%",
    maxWidth: "340px", // 👈 زودنا من 280 لـ 340
    aspectRatio: "16/10", // 👈 غيرنا النسبة
    borderRadius: 12, // 👈 زودنا التقريب
    overflow: "hidden",
    border: "2px solid var(--bd)", // 👈 تخين شوية
    boxShadow: "0 12px 40px rgba(0,0,0,.5)", // 👈 ظل أقوى
    flexShrink: 0,
    marginTop: 12, // 👈 مسافة أكبر
    marginBottom: 8,
    transform: isActive ? "scale(1) translateY(0)" : "scale(0.95) translateY(10px)",
    opacity: isActive ? 1 : 0.6, // 👈 أوضح
    transition: "transform 0.6s cubic-bezier(0.22, 0.68, 0, 1.2), opacity 0.5s ease",
  }}>
    <img src={w.img} alt={w.title} style={{ 
      width: "100%", 
      height: "100%", 
      objectFit: "cover",
      transition: "transform 0.5s ease",
    }}/>
    <div style={{ 
      position: "absolute", 
      inset: 0, 
      background: "linear-gradient(135deg, rgba(180,255,80,.1), transparent 60%)",
    }}/>
    {/* Overlay shine effect */}
    <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "40%",
      background: "linear-gradient(to bottom, rgba(255,255,255,.05), transparent)",
      pointerEvents: "none",
    }}/>
  </div>
)}

        {/* ── icon fallback (mobile) ── */}
        {!w.img && (
          <div style={{
            width: isMobile ? "80px" : "clamp(200px, 28vw, 380px)",
            aspectRatio: "1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: isMobile ? 48 : 96,
            background: "rgba(180,255,80,.04)",
            border: "1px solid var(--bd)",
            borderRadius: 8,
            flexShrink: 0,
            transform: isActive ? "scale(1)" : "scale(0.9)",
            opacity: isActive ? 1 : 0.5,
            transition: "transform 0.6s cubic-bezier(0.22, 0.68, 0, 1.2), opacity 0.5s ease",
          }}>{w.icon}</div>
        )}
      </div>
    </div>
  );
}

/* SERVICES */
function ServiceDemo({ type, accent }) {
  if (type==="browser") return (
    <div style={{background:"rgba(0,0,0,.35)",borderRadius:8,overflow:"hidden",border:"1px solid rgba(255,255,255,.08)",width:"100%"}}>
      <div style={{background:"rgba(255,255,255,.06)",padding:"8px 12px",display:"flex",alignItems:"center",gap:6}}>
        {["#ff5f57","#febc2e","#28c840"].map(c=><span key={c} style={{width:8,height:8,borderRadius:"50%",background:c,display:"inline-block"}}/>)}
        <div style={{flex:1,height:12,background:"rgba(255,255,255,.08)",borderRadius:4,marginLeft:8}}/>
      </div>
      <div style={{padding:12,display:"flex",flexDirection:"column",gap:6}}>
        <div style={{height:10,background:"rgba(255,255,255,.12)",borderRadius:3,width:"70%",animation:"shimmer 2s ease-in-out infinite"}}/>
        <div style={{height:8,background:"rgba(255,255,255,.07)",borderRadius:3,width:"90%"}}/>
        <div style={{height:8,background:"rgba(255,255,255,.07)",borderRadius:3,width:"60%"}}/>
        <div style={{display:"flex",gap:6,marginTop:4}}>
          <div style={{height:22,width:60,background:accent,borderRadius:3,opacity:.8}}/>
          <div style={{height:22,width:50,background:"rgba(255,255,255,.08)",borderRadius:3}}/>
        </div>
      </div>
    </div>
  );
  if (type==="component") return (
    <div style={{width:"100%",display:"flex",flexDirection:"column",gap:6}}>
      {["useState","useEffect","useRef"].map((h,i) => (
        <div key={h} style={{background:"rgba(97,218,251,.06)",border:"1px solid rgba(97,218,251,.15)",borderRadius:6,padding:"6px 10px",fontSize:11,fontFamily:"monospace",color:"rgba(97,218,251,.8)",animation:`slideInX .4s ease ${i*.1}s both`}}>
          <span style={{color:"rgba(255,255,255,.35)"}}>import </span>
          <span style={{color:"#61DAFB"}}>{`{ ${h} }`}</span>
          <span style={{color:"rgba(255,255,255,.35)"}}> from "react"</span>
        </div>
      ))}
    </div>
  );
  if (type==="landing") return (
    <div style={{width:"100%",display:"flex",flexDirection:"column",gap:5}}>
      <div style={{height:14,background:"rgba(0,232,200,.25)",borderRadius:3,width:"55%"}}/>
      {[null,null,null].map((_,i)=><div key={i} style={{height:8,background:"rgba(255,255,255,.07)",borderRadius:3,width:i===1?"80%":i===2?"65%":"100%"}}/>)}
      <div style={{height:24,background:"rgba(0,232,200,.3)",borderRadius:4,width:72,marginTop:4}}/>
    </div>
  );
  if (type==="ui") return (
    <div style={{width:"100%",display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
      {[["#ff4d6d","Button"],["rgba(180,255,80,.3)","Input"],["rgba(97,218,251,.2)","Card"],["rgba(255,255,255,.06)","Modal"]].map(([bg,lbl])=>(
        <div key={lbl} style={{background:bg,borderRadius:5,padding:"6px 8px",fontSize:10,fontWeight:700,color:"rgba(255,255,255,.7)",textAlign:"center",letterSpacing:".05em",border:"1px solid rgba(255,255,255,.08)"}}>{lbl}</div>
      ))}
    </div>
  );
  if (type==="maintenance") return (
    <div style={{width:"100%",display:"flex",flexDirection:"column",gap:6}}>
      {["✓  Bug Fixes","✓  Performance","✓  Updates","✓  New Features"].map((t,i)=>(
        <div key={t} style={{fontSize:11,color:"rgba(180,255,80,.85)",fontFamily:"'Cabinet Grotesk',sans-serif",fontWeight:600,letterSpacing:".04em",animation:`slideInX .4s ease ${i*.08}s both`}}>{t}</div>
      ))}
    </div>
  );
  return null;
}

function ServicesNew() {
  const [active, setActive] = useState(null);
  return (
    <section id="service" style={{padding:"80px 0 120px",overflow:"hidden"}}>
      <div style={{maxWidth:1400,margin:"0 auto",padding:"0 clamp(24px,8vw,120px)"}}>
        <Fi>
          <div style={{display:"flex",alignItems:"baseline",gap:20,marginBottom:16}}>
            <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(52px,8vw,96px)",color:"var(--text)",lineHeight:1}}>What I</span>
            <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(52px,8vw,96px)",color:"var(--a)",lineHeight:1}}>Offer</span>
            <div style={{flex:1,height:1,background:"linear-gradient(to right,var(--a),transparent)",alignSelf:"center",marginLeft:16}}/>
          </div>
          <p style={{color:"var(--t2)",fontSize:15,marginBottom:64,maxWidth:500,lineHeight:1.7,fontFamily:"'Cabinet Grotesk',sans-serif"}}>
            Services I provide — each one crafted with real attention to quality.
          </p>
        </Fi>
        <div style={{display:"flex",flexDirection:"column",gap:0}}>
          {SERVICE_ITEMS.map((s,i) => (
            <Fi key={s.id} delay={i*.08}>
              <div data-hover onClick={()=>setActive(active===s.id?null:s.id)}
                style={{borderTop:"1px solid var(--bd)",padding:"0",cursor:"none",background:active===s.id?s.color:"transparent",...(i===SERVICE_ITEMS.length-1?{borderBottom:"1px solid var(--bd)"}:{})}}
                onMouseEnter={e=>{ if(active!==s.id) e.currentTarget.style.background=s.color.replace(/[\d.]+\)$/,"0.05)"); }}
                onMouseLeave={e=>{ if(active!==s.id) e.currentTarget.style.background="transparent"; }}
              >
                <div style={{display:"flex",alignItems:"center",padding:"clamp(18px,2.5vw,28px) 0",gap:20}}>
                  <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:13,color:"var(--t3)",letterSpacing:".1em",minWidth:28}}>0{s.id}</span>
                  <span style={{fontSize:24,width:44,height:44,borderRadius:8,background:active===s.id?s.color:"var(--bgc)",border:`1px solid ${active===s.id?"rgba(255,255,255,.12)":"var(--bd)"}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{s.icon}</span>
                  <h3 style={{flex:1,fontFamily:"'Cabinet Grotesk',sans-serif",fontWeight:800,fontSize:"clamp(17px,2.2vw,26px)",color:active===s.id?"var(--text)":"var(--t2)",letterSpacing:"-.01em"}}>{s.title}</h3>
                  <span style={{fontSize:20,color:active===s.id?s.accent:"var(--t3)",transition:"transform .35s cubic-bezier(.22,.68,0,1.2)",transform:active===s.id?"rotate(45deg)":"rotate(0deg)",display:"inline-block"}}>+</span>
                </div>
                <div style={{display:"grid",gridTemplateRows:active===s.id?"1fr":"0fr",transition:"grid-template-rows .4s cubic-bezier(.22,.68,0,1.2)",overflow:"hidden"}}>
                  <div style={{overflow:"hidden"}}>
                    <div className="svc-expand-grid">
                      <div>
                        <p style={{color:"var(--t2)",fontSize:15,lineHeight:1.85,fontFamily:"'Cabinet Grotesk',sans-serif",marginBottom:20}}>{s.desc}</p>
                        <span style={{display:"inline-flex",alignItems:"center",gap:6,fontSize:12,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:s.accent,borderBottom:`1px solid ${s.accent}`,paddingBottom:2}}>Learn More →</span>
                      </div>
                      <div style={{background:"rgba(0,0,0,.25)",border:"1px solid var(--bd)",borderRadius:10,padding:16,display:"flex",alignItems:"center"}}>
                        <ServiceDemo type={s.demo} accent={s.accent}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fi>
          ))}
        </div>
      </div>
    </section>
  );
}

/* SKILLS */
function Skills() {
  return (
    <section id="skills" style={{padding:"80px clamp(24px,8vw,120px) 120px",background:"var(--bg1)"}}>
      <div style={{maxWidth:1400,margin:"0 auto"}}>
        <Fi>
          <div style={{display:"flex",alignItems:"baseline",gap:20,marginBottom:64}}>
            <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(52px,8vw,96px)",color:"var(--text)",lineHeight:1}}>My</span>
            <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(52px,8vw,96px)",color:"var(--a)",lineHeight:1}}>Skills</span>
            <div style={{flex:1,height:1,background:"linear-gradient(to right,var(--a),transparent)",alignSelf:"center",marginLeft:16}}/>
          </div>
        </Fi>
        <div className="skills-grid" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:40}}>
          {SKILL_GROUPS.map((grp,gi) => (
            <Fi key={grp.title} delay={gi*.1}>
              <div>
                <div className="skill-group-title" style={{color:grp.accent}}>{grp.title}</div>
                <div style={{display:"flex",flexDirection:"column",gap:10}}>
                  {grp.skills.map((sk,si) => (
                    <Fi key={sk.label} delay={gi*.1+si*.06}>
                      <div className="skill-row" style={{"--row-accent":grp.accent}}>
                        {sk.img
  ? <img src={sk.img} alt={sk.label} className="skill-icon"/>
  : <span style={{
      width:40, height:40, flexShrink:0,
      borderRadius:8, border:"1px solid var(--bd)",
      background:"var(--bg)",
      display:"flex", alignItems:"center", justifyContent:"center",
      fontSize:18,
    }}>{sk.code}</span>
}
                        <span className="skill-name">{sk.label}</span>
                        <span className="skill-desc">{sk.desc}</span>
                      </div>
                    </Fi>
                  ))}
                </div>
              </div>
            </Fi>
          ))}
        </div>
      </div>
    </section>
  );
}

/* CONTACT STRIP */
function ContactStrip() {
  const socials = [
    ["GitHub","https://github.com/michealmula/",githupp],
    ["LinkedIn","https://www.linkedin.com/in/mikel-emel-59933933b/",linkedin],
    ["WhatsApp","https://wa.me/201117359755/",whatsapp],
  ];
  return (
    <section id="contact" style={{padding:"100px clamp(24px,8vw,120px)",overflow:"hidden",position:"relative"}}>
      <div style={{position:"absolute",left:0,right:0,top:"50%",transform:"translateY(-50%)",textAlign:"center",fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(60px,15vw,180px)",color:"var(--bd)",letterSpacing:".02em",pointerEvents:"none",userSelect:"none",whiteSpace:"nowrap",overflow:"hidden"}}>
        LET'S WORK
      </div>
      <div style={{position:"relative",zIndex:1,maxWidth:700,margin:"0 auto",textAlign:"center"}}>
        <Fi>
          <p style={{fontFamily:"'Cabinet Grotesk',sans-serif",fontSize:13,letterSpacing:".14em",textTransform:"uppercase",color:"var(--a2)",marginBottom:16}}>Get in touch</p>
          <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(48px,8vw,96px)",color:"var(--text)",lineHeight:.95,marginBottom:24}}>
            Got a project?<br/><span style={{color:"var(--a)"}}>Let's talk.</span>
          </h2>
          <p style={{color:"var(--t2)",fontSize:16,lineHeight:1.7,marginBottom:44}}>
            I'm open to freelance work, collaborations, and interesting ideas. Reach out via email or socials.
          </p>
          <div className="contact-btns" style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>
            <Mag href="mailto:mikelemel2@gmail.com" style={{display:"inline-flex",alignItems:"center",gap:10,padding:"16px 36px",background:"var(--a)",color:"var(--bg)",fontFamily:"'Cabinet Grotesk',sans-serif",fontWeight:800,fontSize:14,letterSpacing:".06em",textTransform:"uppercase",textDecoration:"none",borderRadius:"2px",border:"2px solid var(--a)",boxShadow:"5px 5px 0 rgba(180,255,80,.25)"}}>
              ✉ Email Me
            </Mag>
            <Mag href="https://wa.me/201117359755/" target="_blank" rel="noreferrer" style={{display:"inline-flex",alignItems:"center",gap:10,padding:"16px 36px",background:"transparent",color:"var(--text)",fontFamily:"'Cabinet Grotesk',sans-serif",fontWeight:800,fontSize:14,letterSpacing:".06em",textTransform:"uppercase",textDecoration:"none",borderRadius:"2px",border:"2px solid var(--bd)"}}>
              WhatsApp
            </Mag>
          </div>
          <div style={{display:"flex",gap:16,justifyContent:"center",marginTop:40}}>
            {socials.map(([alt,href,img]) => (
              <Mag key={alt} href={href} target="_blank" rel="noreferrer" style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:46,height:46,border:"1px solid var(--bd)",borderRadius:"2px",background:"var(--bgc)"}}>
                <img src={img} alt={alt} style={{width:24,height:24,objectFit:"contain"}}/>
              </Mag>
            ))}
          </div>
        </Fi>
      </div>
    </section>
  );
}

/* FOOTER */
function Footer() {
  return (
    <footer style={{borderTop:"1px solid var(--bd)",padding:"32px clamp(24px,8vw,120px)",background:"var(--bg1)"}}>
      <div className="footer-inner" style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16}}>
        <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:20,color:"var(--text)",letterSpacing:".04em"}}>
          Michael<span style={{color:"var(--a)"}}>.</span>
        </span>
        <p style={{color:"var(--t3)",fontSize:13,fontFamily:"'Cabinet Grotesk',sans-serif"}}>&copy; 2026 Michael Emil. All rights reserved.</p>
        <div className="footer-links-row" style={{display:"flex",gap:16}}>
          {[["#home","Home"],["#about","About"],["#work","Work"],["#service","Services"],["#skills","Skills"]].map(([h,l]) => (
            <a key={l} href={h} style={{color:"var(--t2)",textDecoration:"none",fontSize:12,letterSpacing:".08em",textTransform:"uppercase",fontFamily:"'Cabinet Grotesk',sans-serif",fontWeight:600}}
              onMouseEnter={e=>e.target.style.color="var(--a)"}
              onMouseLeave={e=>e.target.style.color="var(--t2)"}
            >{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* SCROLL TOP */
function ScrollTop() {
  const [on, setOn] = useState(false);
  useEffect(() => { const f=()=>setOn(window.scrollY>320); window.addEventListener("scroll",f); return ()=>window.removeEventListener("scroll",f); },[]);
  return <button id="stb" className={on?"on":""} onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>↑</button>;
}

/* ══════════════════════════════════════════
   APP
══════════════════════════════════════════ */
export default function App() {
  const [ready, setReady] = useState(false);
  const [theme, toggle]   = useTheme();
  const done = useCallback(() => { setTimeout(()=>setReady(true), 700); },[]);

  return (
    <>
      <InitTheme/>
      <Cursor/>
      {!ready && <Loader onDone={done}/>}
      <div style={{opacity:ready?1:0,transition:"opacity .6s"}}>
        <Navbar theme={theme} toggle={toggle}/>
        <Hero/>
        <Stats/>
        <About/>
        <Work/>
        <ServicesNew/>
        <Skills/>
        <ContactStrip/>
        <Footer/>
        <ScrollTop/>
      </div>
    </>
  );
}