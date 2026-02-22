export default function Footer({ darkMode }: { darkMode: boolean }) {
  return (
    <footer id="contato" className="relative text-white py-16 px-6 overflow-hidden"  style={{ background: darkMode ? "#070710" : "#0f172a" }}>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500" />

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">

        <div className="text-center">
          <h2 className="text-3xl font-extrabold mb-2" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
           Vamos <span style={{
              background: "linear-gradient(135deg, #818cf8, #c084fc, #f472b6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}> transformar ideias em soluções reais?</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-md">
            Estou disponível para projetos freelance, oportunidades de emprego ou só para trocar uma ideia!
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
    
          
          <a
            href="mailto:is3638973@gmail.com"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all hover:scale-105"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
            </svg>
            Gmail
          </a>

          
          <a
            href="https://github.com/Israel875"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold transition-all hover:scale-105"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9.027 23.126 9.027 22.808C9.027 22.523 9.016 21.764 9.011 20.763C5.672 21.492 4.968 19.158 4.968 19.158C4.422 17.773 3.633 17.404 3.633 17.404C2.546 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17.001 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.19 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 14.991 18.397 14.991 19.517C14.991 21.12 14.977 22.41 14.977 22.808C14.977 23.129 15.195 23.504 15.803 23.386C20.568 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"/>
            </svg>
            GitHub
          </a>

          
          <a
            href="https://www.linkedin.com/in/israellsantos"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-700 hover:bg-blue-600 text-white text-sm font-semibold transition-all hover:scale-105"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.191 11.846 12.908 13.291 12.908 14.785V20.452H9.352V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z"/>
            </svg>
            LinkedIn
          </a>

          
        <a
            href="https://wa.me/554498379408"
            target="_blank"
            rel="noopener noreferrer"
           className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-600 hover:bg-green-500 text-white text-sm font-semibold transition-all hover:scale-105"
         >
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
  WhatsApp
</a>

        </div>

        <div className="w-full h-px bg-slate-700" />

        <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-2 text-slate-500 text-xs">
          <span>© {new Date().getFullYear()} Israel Santos. Todos os direitos reservados.</span>
        </div>

      </div>
    </footer>
  );
}