import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zolfi™ | Blockchain Security & Development</title>
        <meta name="description" content="Zolfi is OneGodian's blockchain development and security platform." />
      </Head>
      <main style={{fontFamily:'Arial, sans-serif',background:'#061325',color:'#fff',minHeight:'100vh',padding:'48px'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto'}}>
          <p style={{color:'#7dd3fc',letterSpacing:'0.18em',textTransform:'uppercase'}}>Zolfi™ Platform</p>
          <h1 style={{fontSize:'56px',lineHeight:'1.05',margin:'12px 0'}}>Blockchain Security. Smart Contract Intelligence. Post-Quantum Readiness.</h1>
          <p style={{fontSize:'20px',color:'#cbd5e1',maxWidth:'760px'}}>Zolfi™ helps organizations secure smart contracts, assess blockchain risk, improve protocol resilience, and prepare for the next era of digital trust.</p>
          <div style={{display:'flex',gap:'16px',marginTop:'28px',flexWrap:'wrap'}}>
            <a href='#services' style={{background:'#0ea5e9',padding:'14px 22px',borderRadius:'10px',color:'#00111f',fontWeight:700,textDecoration:'none'}}>Explore Services</a>
            <a href='#developers' style={{border:'1px solid #334155',padding:'14px 22px',borderRadius:'10px',color:'#fff',textDecoration:'none'}}>Developer Portal</a>
          </div>
          <section id='services' style={{marginTop:'72px',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:'18px'}}>
            {['Smart Contract Audits','Threat Detection','Cross-Chain Verification','Quantum Security Research'].map((item)=> (
              <div key={item} style={{background:'#0b1d36',padding:'22px',borderRadius:'14px',border:'1px solid #1e293b'}}>
                <h3>{item}</h3>
                <p style={{color:'#94a3b8'}}>Enterprise-grade services powered by the Zolfi platform.</p>
              </div>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
