export default function Home() {
  return <>Bienvenido</>;
}

{
  /* <div className='flex flex-col items-center w-[202px] mt-[60px]'>
            <h5 className='font-bold mb-[40px]'>Cara</h5>
            <Image
            src={cara}
            alt='cara outline'
            />
          </div> */
}

export async function getServerSideProps() {
  return {
    redirect: {
      permanent: false,
      destination: "toallitas-humedas-individuales",
    },
    props: {},
  };
}
