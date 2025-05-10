function Intro() {
    return (
        <section id="Intro" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
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
                    <div className="relative group">
                        {/* Hiệu ứng ánh sáng gradient phía sau ảnh */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />

                        {/* Ảnh nền giao diện dashboard */}
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
                    </div>






                </div>
            </div>
        </section >
    );
}

export default Intro;