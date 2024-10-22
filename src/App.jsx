import './App.css'
import Container from './components/Container'
import Flex from './components/Flex'
import Image from './components/Image'
import Logo from './assets/Logo.png'
import bannerImg from './assets/bannerImg.avif'
import collectionBg from './assets/collectionBg.png'
import collectionimg from './assets/collectionimg.avif'
import collectionimg2 from './assets/collectionimg2.avif'
import collectionimg3 from './assets/collectionimg3.avif'
import bannerPoint from './assets/bannerPoint.png'
import Trendsimg from './assets/Trendsimg.png'
import Trendsmodelimg from './assets/Trendsmodelimg.avif'
import footerimg1 from './assets/footerimg1.avif'
import footerimg2 from './assets/footerimg2.avif'
import trendsi from './assets/trendsi.png'
import Menu from './components/Menu'
import Button from './components/Button'
import Heading from './components/Heading'
import { FaStar } from "react-icons/fa";

function App() {

  return (
    <>
      {/* Header Part Start */}
      <div className='bg-headerBg rounded-t-lg py-5'>
        <Container>
          <Flex>
            <div className='w-[15%]'>
              <Image imgSrc={Logo}/>
            </div>
            <Flex className='w-[60%] justify-center gap-x-8 mt-2'>
              <Menu menuName={'Men'}/>
              <Menu menuName={'Woman'}/>
              <Menu menuName={'Kids'}/>
              <Menu menuName={'Collection'}/>
              <Menu menuName={'Trends'}/>
            </Flex>
            <div className='w-[25%]'>
              <Button btnName={'Login'}  className={'py-3 border shadow-md rounded-md mr-3 border-borderBg px-5 hover:bg-borderBg hover:shadow-none'}/>
              <Button btnName={'SignUp'} className={'py-3 border shadow-md rounded-md border-borderBg px-5 hover:bg-borderBg hover:shadow-none'}/>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Header Part End */}

      {/* Banner Part Start */}
      <div className='bg-headerBg rounded-b-2xl py-[120px]'>
        <Container>
          <Flex>
            <div className='w-1/2 pr-8'>
              <Heading as={'h1'} text={'Find The Best Fashion Style For You'} className={'font-pop font-semibold text-[70px]'} />
              <Heading as={'h3'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. '} className={'font-pop font-normal text-[24px] pt-5'} />
              <Button className={'font-pop font-semibold text-[24px] bg-black text-white rounded-md py-5 px-16 mt-8'} btnName={'SHOP NOW'}/>
            </div>
            <div className='w-1/2 relative pl-10'>
              <Image imgSrc={bannerImg} className={'relative z-10 px-16'}/>
              <Image imgSrc={bannerPoint} className={'absolute top-[315px] left-[0px] z-8'}/>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Banner Part End */}

      {/* Collection Part Start */}
      <div className='relative pt-[200px] pb-[80px]'>
        <Container>
          <Heading as={'h2'} text={'New Collection'} className={'text-center font-bold font-frank text-[64px] text-black'} />
        <Flex className={'pt-[130px] justify-between'}>
            <div className={'w-[350px] relative'}>
            <Image imgSrc={collectionimg} imgAlt={collectionimg} />
            <Button btnName={'Sweater'} className={'absolute left-1/2 bottom-10 -translate-x-1/2 bg-white text-black px-28 py-3 rounded-3xl font-normal font-pop'}/>
            </div>
            <div className={'w-[350px] relative'}>
            <Image className={'h-[400px]'} imgSrc={collectionimg2} imgAlt={collectionimg2} />
            <Button btnName={'Jeans'} className={'absolute left-1/2 bottom-10 -translate-x-1/2 bg-white text-black px-28 py-3 rounded-3xl font-normal font-pop'}/>
            </div>
            <div className={'w-[350px] relative'}>
            <Image className={'h-[400px]'} imgSrc={collectionimg3} imgAlt={collectionimg3} />
            <Button btnName={'Shoes'} className={'absolute left-1/2 bottom-10 -translate-x-1/2 bg-white text-black px-28 py-3 rounded-3xl font-normal font-pop'}/>
            </div>
        </Flex>
          </Container>
          <Image imgSrc={collectionBg} imgAlt={collectionBg} className={'absolute right-0 bottom-0 z-[-1]'}/>
      </div>
      {/* Collection Part End */}

      {/* Trends Part Start */}
      <div className='pt-[50px]'>
        <Container>
          <Flex>
            <div className={'relative w-1/2'}>
          <Image  className={'ml-[500px]'} imgSrc={Trendsimg} imgAlt={Trendsimg} />
          <Image className={'absolute top-[50px] left-0 z-10'} imgSrc={Trendsmodelimg} imgAlt={Trendsmodelimg} />
            </div>
            <div className='w-1/2'>
              <Heading as={'h3'} text={'Best Fashion Since 2010'} className={'pl-[100px] pt-[120px] font-bold font-frank text-[64px]'} />
              <Heading as={'p'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. '} className={'pl-[100px] font-semibold text-[24px] pr-8 pt-[30px] font-pop'} />
            </div>
          </Flex>
          <div className='bg-counterBg py-[50px] ml-[480px] mt-[80px] w-[700px] rounded-3xl'>
            <Flex>
              <div className='text-center w-1/3 pl-2 border-r-2 border-black'>
                <Heading as={'h3'} text={'2010'} className={'font-pod font-bold text-[64px] text-black'} />
                <Heading as={'p'} text={'Founded'} className={'font-pop font-medium text-[28px] text-black'} />
              </div>
              <div className='text-center w-1/3 px-5 border-r-2 border-black'>
                <Heading as={'h3'} text={'5000+'} className={'font-pod font-bold text-[64px] text-black'} />
                <Heading as={'p'} text={'Product Sold'} className={'font-pop font-medium text-[28px] text-black'} />
              </div>
              <div className='text-center w-1/3'>
                <Heading as={'h3'} text={'4500+'} className={'font-pod font-bold text-[64px] text-black'} />
                <Heading as={'p'} text={'Best Reviews'} className={'font-pop font-medium text-[28px] text-black'} />
              </div>
            </Flex>
          </div>
            <Image imgSrc={trendsi} imgAlt={trendsi} className={'pl-[180px] pt-[30px] pb-2'}/>
        </Container>
      </div>
      {/* Trends Part End */}

      {/* Product Part Start */}
      <div className='bg-footerBG pt-[60px] pb-[190px]'>
        <Container>
          <Flex>
            <div className='w-[445px] pr-8'>
              <Heading as={'h1'} text={'Best Seller Product'} className={'font-frank font-bold text-[64px] text-white'} />
              <Heading as={'h3'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus.'} className={'font-frank font-bold text-[24px] text-white pt-5'} />
              <Button className={'font-pop font-semibold text-[24px] bg-black text-white rounded-md py-5 px-16 mt-8'} btnName={'Learn MORE'}/>
            </div>
            <div className='w-[360px] pt-6 pr-3'>
              <Image imgSrc={footerimg1} imgAlt={footerimg1} />
              <div className='bg-white py-[15px] pl-[22px]'>
                <Flex className={'text-footerStar pb-3'}>
                  <FaStar />
                  <FaStar className={'ml-2'} />
                  <FaStar className={'ml-2'} />
                  <FaStar className={'ml-2'} />
                  <FaStar className={'ml-2'} />
                </Flex>
                <Heading as={'h3'} text={'Sweater Shirt'} className={'font-pop font-semibold text-[22px] text-black'} />
                <Heading as={'h6'} text={'$45.99'} className={'font-pop font-normal text-[24px] text-footertext inline-block'} />
                <Heading as={'h6'} text={'$35.99'} className={'pl-[50px] font-pop font-normal text-[24px] text-black inline-block'} />
              </div>
            </div>
            <div className='w-[360px] pt-6 pl-3'>
              <Image imgSrc={footerimg2} imgAlt={footerimg2} />
              <div className='bg-white py-[15px] pl-[22px]'>
                <Flex className={'text-footerStar pb-3'}>
                  <FaStar />
                  <FaStar className={'ml-2'} />
                  <FaStar className={'ml-2'} />
                  <FaStar className={'ml-2'} />
                  <FaStar className={'ml-2'} />
                </Flex>
                <Heading as={'h3'} text={'Pants fashion'} className={'font-pop font-semibold text-[22px] text-black'} />
                <Heading as={'h6'} text={'$55'} className={'font-pop font-normal text-[24px] text-footertext inline-block'} />
                <Heading as={'h6'} text={'$44.99'} className={'pl-[50px] font-pop font-normal text-[24px] text-black inline-block'} />
              </div>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Product Part End */}
    </>
  )
}

export default App
