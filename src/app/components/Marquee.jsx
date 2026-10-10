import MarqueeText from 'react-marquee-text';
import FetchError from './FetchError';
const Marquee = async() => {
    const res= await fetch('https://api.api-store.workers.dev/api/bazardor/products', {
  next: {
    revalidate: 60,
  },
})
if(!res.ok){
    return <FetchError></FetchError>
  }
    const data= await res.json()
    const headPrice= data
    return (
        <div className=' sticky top-0 bg-white py-2 relative z-0 overflow-hidden'>
            <div className=' flex justify-center items-center gap-1'>
            <MarqueeText direction='right' duration={15}>
            {
                headPrice.map((h)=><div key={h.id}><div className='flex gap-1 items-center'><span>{h.image}</span><p >{h.nameBn}</p><p>{Number(h.today).toLocaleString("bn-BD")}</p><span>টাকা/কেজি</span><p className={h.change.dir==='up'?'text-green-600':'text-red-600'}><span>{h.change.dir==='up'?'▼':'▲'}</span>{h.change.pct}%</p><span className='mx-3'>|</span></div></div>)
            }
            </MarqueeText>
            </div>
        </div>
    );
};

export default Marquee;