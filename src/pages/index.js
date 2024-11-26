
import Head from 'next/head';
import Home from '@/component/header';
import Countdown from '@/component/countdown';
import Important from '@/component/important';
import Map from '@/component/map';
import Contact from '@/component/contact';
import Footer from '@/component/footer';






const OneDance = () => {

return (
<div>
<Head>
<meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
<title>Dance contest</title>
  </Head>
  <Home />
  <Countdown />
  <Important />
  <Map />
  <Contact />
  <Footer />
</div>


)}

export default OneDance;










// export default function Home() {
//   return (
//     <div>
//       <main>
//         <Header />

//         <Countdown />

  
        
//       </main>
//     </div>
//   );
// }