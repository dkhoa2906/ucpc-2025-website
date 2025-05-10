import { TiltCard } from "./TiltCard";

function Intro() {
    return (
        <section id="Intro" className="w-full px-20 h-screen py-12 md:py-24 lg:py-32 xl:py-30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black z-0" />
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-10 mix-blend-overlay" />
            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-white to-zinc-300 text-transparent bg-clip-text">
                                UIT COLLEGIATE PROGRAMMING CONTEST 2025
                            </h1>
                            <p className="max-w-[600px] text-zinc-400 md:text-xl">
                                A competitive programming event where students challenge their coding skills and teamwork.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white h-11 rounded-md px-8 gap-1">
                                Đăng kí tham gia
                            </button>
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium border bg-background hover:text-accent-foreground h-11 rounded-md px-8 border-zinc-700 text-white hover:bg-zinc-800">
                                Nộp lệ phí
                            </button>
                        </div>

                    </div>
                    {/* <div className="relative group">
                       
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />

                       
                        <img
                            alt="Dashboard Preview"
                            loading="lazy"
                            width={600}
                            height={600}
                            decoding="async"
                            className="relative mx-auto w-[600px] overflow-hidden rounded-xl border border-zinc-800 shadow-2xl"
                            src="/photos/POSTER_02.png"
                            style={{ color: "transparent" }}
                        />
                    </div> */}

                    <div className="relative group mx-20">
                        <TiltCard
                            options={{ max: 30 , speed: 400, scale: 1.05 }}
                            className="rounded-3xl overflow-hidden w-full relative shadow-[0_0_60px_10px_rgba(208,32,157,0.7)] ring-[3px] ring-white/50  hover:shadow-[0_0_30px_20px_rgba(208,32,157,0.9)]"
                        >
                            <div className="absolute inset-0 blur-2xl opacity-50 rounded-3xl bg-[#D0209D]/40 z-0  group-hover:opacity-70" />
                            <img
                                src="/photos/POSTER_00.png"
                                className="object-cover w-full h-[60%] relative z-10"
                                alt="cover"
                            />
                        </TiltCard>
                    </div>


                </div>
            </div>
        </section >
    );
}

export default Intro;