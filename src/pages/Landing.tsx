export function Landing() {
  return (
    <div className="flex min-h-[calc(100vh-372px)] w-full flex-col justify-center gap-4">
      <h1 className="w-full text-left text-6xl font-bold md:text-6xl xl:text-center xl:text-6xl 2xl:text-8xl">
        Python Norte 2026
      </h1>
      <p
        className="w-full text-left uppercase
                   tracking-[0.15em] md:tracking-[0.3em] xl:text-center xl:tracking-[0.5em] 2xl:tracking-[0.75em]"
      >
        Ananindeua - PA • 3 a 5 de julho
      </p>
      <div className="flex w-full justify-start xl:justify-center">
        <button
          className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-blue-700"
          onClick={() =>
            window.open(
              'https://www.even3.com.br/python-norte-2026-631670?cp=pybr2025',
              '_blank',
            )
          }
        >
          Adquirir Ingresso
        </button>
      </div>
    </div>
  )
}
