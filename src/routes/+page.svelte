<script>
    import Kivy from "./../lib/assets/svg/Kivy.svelte";
    import Tailwind from "./../lib/assets/svg/Tailwind.svelte";
    import Bootstrap from "./../lib/assets/svg/Bootstrap.svelte";
    import Flask from "./../lib/assets/svg/Flask.svelte";
    import Django from "./../lib/assets/svg/Django.svelte";
    import Svelte from "./../lib/assets/svg/Svelte.svelte";
    import CSS3 from "./../lib/assets/svg/CSS3.svelte";
    import HTML5 from "./../lib/assets/svg/HTML5.svelte";
    import JavaScript from "./../lib/assets/svg/JavaScript.svelte";
    import Proyectos from "./../lib/components/Proyectos.svelte";
    import "$lib/assets/css/app.css";
    import MySql from "$lib/assets/svg/MySQL.svelte";
    import Python from "$lib/assets/svg/Python.svelte";
</script>

<main class="max-w-6xl mx-auto p-4">
    <!-- titulo -->
    <section class="mx-auto mt-12 mb-12">
        <div
            class="flex flex-col md:flex-row items-center gap-8 justify-center"
        >
            <!-- Imagen -->
            <div class="mt-6 md:mt-0">
                <img
                    class="w-full h-full sm:w-full sm:h-full md:w-full md:h-full object-cover rounded-full"
                    src="https://i.pinimg.com/736x/e8/76/b6/e876b6ae994b1813f19bb97b9d0272a1.jpg"
                    alt="axeljosh_image.jpeg"
                />
            </div>
            <!-- Texto -->
            <div
                class="flex flex-col items-center md:items-start text-center md:text-left"
            >
                <div>
                    <h5
                        class="text-2xl sm:text-3xl font-bold text-amber-200 mt-4"
                    >
                        Axel Josh
                    </h5>
                </div>
                <div>
                    <h1
                        class="text-4xl sm:text-5xl font-bold text-gray-50 mb-2"
                    >
                        Desarrollador Web
                    </h1>
                </div>
                <div>
                    <p class="italic text-gray-300 max-w-md">
                        ~ Creando experiencias web que conectan con los usuarios
                    </p>
                </div>
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <!-- iconos -->
                <div class="flex gap-4 mt-7 justify-center md:justify-start">
                    <a
                        href="mailto:tdk.prods.company@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center justify-center w-12 h-12 bg-red-500 rounded-full text-white text-xl transition transform hover:scale-110 hover:shadow-lg hover:bg-red-600"
                    >
                        <i class="fa-solid fa-envelope"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/_axeljosh_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-400 rounded-full text-white text-xl transition transform hover:scale-110 hover:shadow-lg"
                    >
                        <i class="fa-brands fa-instagram"></i>
                    </a>

                    <a
                        href="https://x.com/_axeljosh_"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full text-white text-xl transition transform hover:scale-110 hover:shadow-lg"
                    >
                        <i class="fa-brands fa-x-twitter"></i>
                    </a>

                    <a
                        href="https://github.com/TDkRecords"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full text-white text-xl transition transform hover:scale-110 hover:shadow-lg"
                    >
                        <i class="fa-brands fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <hr class="my-12 border-gray-700" />

    <!-- Sobre Mi -->
    <section>
        <div class="text-center">
            <h3 class="text-2xl sm:text-3xl text-amber-200 font-semibold">
                Sobre Mi
            </h3>
        </div>
        <p
            class="text-center text-sm sm:text-base mt-4 text-gray-300 max-w-3xl mx-auto"
        >
            Soy un desarrollador fullstack con experiencia en Django, Flask y
            SvelteKit. Me apasiona construir aplicaciones web eficientes y
            escalables, aplicando buenas prácticas y manteniendo un enfoque en
            la calidad. Estoy listo para aportar mis habilidades y compromiso a
            nuevos desafíos profesionales.
        </p>
    </section>

    <hr class="my-12 border-gray-700" />

    <!-- proyectos -->
    <section class="mt-12">
        <div class="text-center mb-6">
            <h3 class="text-2xl sm:text-3xl text-amber-200 font-semibold">
                Proyectos Destacados
            </h3>
        </div>
        <Proyectos />
    </section>

    <hr class="my-12 border-gray-700" />

    <!-- Tecnologias Bento -->
    <section class="mt-16">
        <div class="text-center mb-10">
            <h3 class="text-3xl sm:text-4xl text-amber-200 font-bold">
                Tecnologías
            </h3>
        </div>

        <!-- Bento Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Frontend -->
            <div class="bg-gray-800/30 rounded-2xl p-6 shadow-lg">
                <h4 class="text-lg font-semibold text-gray-200 mb-5">
                    Frontend
                </h4>
                <div class="flex flex-wrap gap-5 justify-center">
                    <!-- JavaScript -->
                    <div
                        class="relative group w-14 h-14 bg-gray-900/60 rounded-full flex items-center justify-center shadow cursor-pointer
                    transform transition duration-300 ease-out hover:scale-110 hover:-rotate-12"
                    >
                        <JavaScript class="w-8 h-8 text-yellow-300" />
                        <span
                            class="absolute bottom-16 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-black/80 rounded shadow-lg opacity-0
                        group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300"
                        >
                            JavaScript
                        </span>
                    </div>

                    <!-- HTML -->
                    <div
                        class="relative group w-14 h-14 bg-gray-900/60 rounded-full flex items-center justify-center shadow cursor-pointer
                    transform transition duration-300 ease-out hover:scale-110 hover:-rotate-12"
                    >
                        <HTML5 class="w-8 h-8 text-orange-400" />
                        <span
                            class="absolute bottom-16 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-black/80 rounded shadow-lg opacity-0
                        group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300"
                        >
                            HTML5
                        </span>
                    </div>

                    <!-- CSS -->
                    <div
                        class="relative group w-14 h-14 bg-gray-900/60 rounded-full flex items-center justify-center shadow cursor-pointer
                    transform transition duration-300 ease-out hover:scale-110 hover:-rotate-12"
                    >
                        <CSS3 class="w-8 h-8 text-blue-400" />
                        <span
                            class="absolute bottom-16 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-black/80 rounded shadow-lg opacity-0
                        group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300"
                        >
                            CSS3
                        </span>
                    </div>
                </div>
            </div>

            <!-- Backend -->
            <div class="bg-gray-800/30 rounded-2xl p-6 shadow-lg">
                <h4 class="text-lg font-semibold text-gray-200 mb-5">
                    Backend
                </h4>
                <div class="flex flex-wrap gap-5 justify-center">
                    <!-- Python -->
                    <div
                        class="relative group w-14 h-14 bg-gray-900/60 rounded-full flex items-center justify-center shadow cursor-pointer
                    transform transition duration-300 ease-out hover:scale-110 hover:-rotate-12"
                    >
                        <Python class="w-8 h-8 text-green-400" />
                        <span
                            class="absolute bottom-16 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-black/80 rounded shadow-lg opacity-0
                        group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300"
                        >
                            Python
                        </span>
                    </div>

                    <!-- MySQL -->
                    <div
                        class="relative group w-14 h-14 bg-gray-900/60 rounded-full flex items-center justify-center shadow cursor-pointer
                    transform transition duration-300 ease-out hover:scale-110 hover:-rotate-12"
                    >
                        <MySql class="w-8 h-8 text-sky-400" />
                        <span
                            class="absolute bottom-16 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-black/80 rounded shadow-lg opacity-0
                        group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300"
                        >
                            MySQL
                        </span>
                    </div>
                </div>
            </div>

            <!-- Frameworks (Card larga abajo) -->
            <div class="md:col-span-2 bg-gray-800/30 rounded-2xl p-6 shadow-lg">
                <h4 class="text-lg font-semibold text-gray-200 mb-5">
                    Frameworks
                </h4>
                <div class="flex flex-wrap gap-5 justify-center">
                    <!-- Svelte -->
                    <div
                        class="relative group w-14 h-14 bg-gray-900/60 rounded-full flex items-center justify-center shadow cursor-pointer
                    transform transition duration-300 ease-out hover:scale-110 hover:-rotate-12"
                    >
                        <Svelte class="w-8 h-8 text-orange-500" />
                        <span
                            class="absolute bottom-16 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-black/80 rounded shadow-lg opacity-0
                        group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300"
                        >
                            Svelte
                        </span>
                    </div>

                    <!-- Django -->
                    <div
                        class="relative group w-14 h-14 bg-gray-900/60 rounded-full flex items-center justify-center shadow cursor-pointer
                    transform transition duration-300 ease-out hover:scale-110 hover:-rotate-12"
                    >
                        <Django class="w-8 h-8 text-green-500" />
                        <span
                            class="absolute bottom-16 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-black/80 rounded shadow-lg opacity-0
                        group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300"
                        >
                            Django
                        </span>
                    </div>

                    <!-- Flask -->
                    <div
                        class="relative group w-14 h-14 bg-gray-900/60 rounded-full flex items-center justify-center shadow cursor-pointer
                    transform transition duration-300 ease-out hover:scale-110 hover:-rotate-12"
                    >
                        <Flask class="w-8 h-8 text-cyan-400" />
                        <span
                            class="absolute bottom-16 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-black/80 rounded shadow-lg opacity-0
                        group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300"
                        >
                            Flask
                        </span>
                    </div>

                    <!-- Kivy -->
                    <div
                        class="relative group w-14 h-14 bg-gray-900/60 rounded-full flex items-center justify-center shadow cursor-pointer
                    transform transition duration-300 ease-out hover:scale-110 hover:-rotate-12"
                    >
                        <Kivy class="w-8 h-8 text-purple-400" />
                        <span
                            class="absolute bottom-16 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-black/80 rounded shadow-lg opacity-0
                        group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300"
                        >
                            Kivy
                        </span>
                    </div>

                    <!-- Bootstrap -->
                    <div
                        class="relative group w-14 h-14 bg-gray-900/60 rounded-full flex items-center justify-center shadow cursor-pointer
                    transform transition duration-300 ease-out hover:scale-110 hover:-rotate-12"
                    >
                        <Bootstrap class="w-8 h-8 text-pink-400" />
                        <span
                            class="absolute bottom-16 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-black/80 rounded shadow-lg opacity-0
                        group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300"
                        >
                            Bootstrap
                        </span>
                    </div>

                    <!-- Tailwind -->
                    <div
                        class="relative group w-14 h-14 bg-gray-900/60 rounded-full flex items-center justify-center shadow cursor-pointer
                    transform transition duration-300 ease-out hover:scale-110 hover:-rotate-12"
                    >
                        <Tailwind class="w-8 h-8 text-sky-400" />
                        <span
                            class="absolute bottom-16 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-black/80 rounded shadow-lg opacity-0
                        group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300"
                        >
                            Tailwind
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
