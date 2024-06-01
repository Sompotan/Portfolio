import Image from "next/image";
import { Inter, Poppins, Anton, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

const anton = Anton({ subsets: ["latin"], weight: ["400"] });

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });


export default function Home() {
  return (
    <main
      id="home"
      className={`w-full min-h-screen mb-4 ${poppins.className}`}
    >
      <Image
        src={"/EllipseTop.png"}
        width={450}
        height={450}
        className="absolute top-0 -z-10"
        alt="elipse"
      />
      <Image
        src={"/EllipseBottom.png"}
        width={450}
        height={450}
        className="absolute right-0 top-3/4 -z-10"
        alt="elipse"
      />

      <div className="px-10">
        <div className="mt-8 w-full">
          <div className="px-4 flex flex-row justify-between items-center w-full bg-[#EADBC8] h-[94px] rounded-3xl drop-shadow-md">
            <Image
              src={"/LogoGabsee.png"}
              width={90}
              height={90}
              alt="logo-gabs"
            />
            <div className="flex flex-row gap-[90px] pr-8 text-[#000000] text-[24px]">
              <a href="#hero"><span>Home</span></a>
              <a href="#about"><span>About</span></a>
              <a href="#projects"><span>Projects</span></a>
              <a href="#contact"><span>Contact</span></a>
            </div>
          </div>
        </div>

        <div className="h-56"></div>

        <div id="hero" className="flex w-full h-[565px] bg-[#DAC0A3] rounded-[48px]">
          <Image
            src={"/gabsee.png"}
            width={523}
            height={758}
            className=" absolute -bottom-[142px] left-[100px]"
            alt="gabsee"
          />
          <div className="w-full flex flex-col justify-center items-end gap-4 pr-12">
            <p className={`${anton.className} w-1/2 text-black text-end text-[120px] font-bold leading-[120px]`}>PETER GABRIEL SOMPOTAN</p>
            <p className={`${roboto.className}  text-black font-medium text-[24px] `}>Frontend Developer & UI UX Designer</p>
            <p className="w-[529px] text-black text-end  right-10 top-[460px]">I create mobile and web interfaces that delight users and keep them coming back. I prioritize intuitive navigation, seamless interactions, and responsive design. I believe that a great user experience is the key to a successful product.</p>
          </div>

        </div>

        <div className="flex flex-row items-center justify-center">
          <Image
            src={"/unity-text.png"}
            width={200}
            height={200}
            alt="unity"
          />
          <Image
            src={"/logo-unsrat.png"}
            width={140}
            height={140}
            alt="unsrat"
          />
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-2  ">
            <div className="p-20 w-2/3 h-[644px] bg-[#DAC0A3] rounded-[48px] drop-shadow-xl">
              <p className={`${anton.className} text-black text-[100px] leading-[120px]`}>I DELIVER RESULTS THAT MAKE A DIFFERENCE</p>
              <p className={`${poppins.className} text-black pr-2`}>I dont just write code, I build solutions that drive user engagement, increase conversions, and improve your bottom line.</p>
            </div>
            <Image
              src={"/gabsee2.JPG"}
              width={486}
              height={644}
              className="w-1/3 rounded-[48px] drop-shadow-xl"
              alt="gabsee2"
            />
          </div>


          <div id="projects" className="w-full bg-[#DAC0A3] rounded-[48px] h-[500px] flex flex-row items-center justify-center drop-shadow-xl">
            <div className="p-14 w-full text-black flex flex-col gap-1">
              <p className={`${anton.className} w-[485px] text-[100px] leading-[120px] `}>REPORT FORMATTER</p>
              <p className={`${poppins.className} font-medium text-[24px]`}>UI UX Design</p>
              <p className={`${poppins.className} w-[485px] leading-[20px] `}>Report Formatter is an app that helps student to create their dissertation, you don’t have to worry about the indentation, what font does it use in common, everything makes easy using this app.</p>
            </div>
            <div>
              <Image
                src={"/macbook-pict.png"}
                width={765}
                height={510}
                className="rounded-[48px] mr-[500px]"
                alt="reportformatter"
              />
            </div>

          </div>

          <div className="w-full bg-[#DAC0A3] rounded-[48px] h-[500px] flex flex-row items-center justify-center drop-shadow-xl">
            <div className="p-14 w-1/2 text-black flex flex-col gap-1">
              <p className={`${anton.className} w-[600px] text-[100px] leading-[120px] `}>COURSE ABSENCE CODE</p>
              <p className={`${poppins.className} font-medium text-[24px]`}>UI UX Design</p>
              <p className={`${poppins.className} w-[485px] leading-[20px] `}>This app is for campus activities helper. So when a lecturer wan’t absence their presence they just give a code and student fill it on this app.</p>
            </div>
            <div className="w-1/2 h-full">
              <Image
                src={"/mockup-android.png"}
                width={500}
                height={500}
                className="rounded-[48px] w-full h-full "
                alt="absensce-code"
              />
            </div>

          </div>

          <div id="about" className="flex flex-row-reverse gap-2  ">
            <div className="p-20 w-2/3 h-[644px] bg-[#DAC0A3] rounded-[48px] flex flex-col gap-4 drop-shadow-xl">
              <p className={`${anton.className} text-black text-[90px] leading-[90px]`}>FRONTEND DEVELOPER & UI UX DESIGNER ENTHUSIAST</p>
              <p className={`${poppins.className} text-black pr-2`}>Passionate about web & mobile ui technologies. I love working at the intersection of user friendly interfaces and creativity. I create memorable web & mobile experiences.</p>
              <p className={`${poppins.className} text-black pr-2`}>When i’m not building or exploring new web & mobile experiences, i’m probably reading books or go for a walk.</p>
            </div>
            <Image
              src={"/gabsee3.JPG"}
              width={486}
              height={644}
              className="w-1/3 rounded-[48px] drop-shadow-xl"
              alt="gabsee3"
            />
          </div>

          <div id="contact" className="w-full bg-[#DAC0A3] rounded-[48px] h-[350px] flex flex-col justify-center items-center drop-shadow-xl">
            <p className={`${anton.className} text-black text-[90px] `}>CONTACT ME</p>
            <div className="flex flex-row gap-12">
              <a href="mailto:peternex42@gmail.com">
                <Image
                  src={"/gmail.png"}
                  width={100}
                  height={100}
                  alt="gmail"
                />
              </a>
              <a href="https://www.linkedin.com/in/gabsee">
                <Image
                  src={"/linkedin.png"}
                  width={100}
                  height={100}
                  alt="linkedin"
                />
              </a>
              <a href="https://www.instagram.com/petersompotan/">
                <Image
                  src={"/instagram.png"}
                  width={100}
                  height={100}
                  alt="instagram"
                />
              </a>

            </div>
          </div>


        </div>

      </div>




    </main>
  );
}
