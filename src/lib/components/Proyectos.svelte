<script>
    import { collection, onSnapshot } from "firebase/firestore";
    import { db } from "$lib/assets/js/firebase";
    import "$lib/assets/css/app.css";

    let proyectosListados = [];

    onSnapshot(
        collection(db, "proyectos"),
        (querySnapshot) => {
            proyectosListados = querySnapshot.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
            });
        },
        (err) => {
            console.log(err);
        },
    );
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each proyectosListados as proyecto}
        <article
            class="group bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transform transition hover:shadow-xl hover:-translate-y-1"
        >
            <!-- Contenedor para recortar la imagen -->
            <div class="overflow-hidden">
                <img
                    class="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
                    src={proyecto.image}
                    alt={proyecto.titulo}
                />
            </div>
            <div class="p-4 pb-6 text-center">
                <div>
                    <h3
                        class="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100"
                    >
                        {proyecto.titulo}
                    </h3>
                </div>
                <div class="mt-3 flex flex-wrap justify-center gap-2">
                    {#each proyecto.tags as tag}
                        <span
                            class="bg-amber-500/20 text-amber-400 text-xs font-medium px-2 py-1 rounded-full"
                        >
                            #{tag}
                        </span>
                    {/each}
                </div>

                <div>
                    <p
                        class="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-300"
                    >
                        {proyecto.description}
                    </p>
                </div>
                <div class="mt-4">
                    <a
                        href={proyecto.github}
                        target="_blank"
                        class="bg-blue-700 hover:bg-blue-500 py-2 px-4 shadow-xl rounded font-mono"
                    >
                        CODIGO
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                    <a
                        target="_blank"
                        href={proyecto.website}
                        class="bg-green-700 hover:bg-green-500 py-2 px-4 shadow-xl rounded font-mono"
                    >
                        PROYECTO
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                </div>
            </div>
        </article>
    {/each}
</div>
