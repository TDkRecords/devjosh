<script>
    import { addDoc, collection, getDocs } from "firebase/firestore";
    import { db } from "$lib/assets/js/firebase";
    import Proyectos from "$lib/components/Proyectos.svelte";

    let isAuthenticated = false;

    let user = {
        username: "",
        password: "",
    };

    let proyecto = {
        titulo: "",
        description: "",
        tags: "",
        image: "",
        github: "",
        website: "",
    };

    const loginAdmin = async () => {
        const snapshot = await getDocs(collection(db, "admin"));
        snapshot.forEach((doc) => {
            const data = doc.data();
            if (
                data.username === user.username &&
                data.password === user.password
            ) {
                isAuthenticated = true;
            }
        });
        if (!isAuthenticated) {
            alert("DATOS INCORRECTOS");
        }
    };

    const saveProject = async () => {
        const tagsArray = proyecto.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter((tag) => tag.length > 0);

        await addDoc(collection(db, "proyectos"), {
            ...proyecto,
            tags: tagsArray,
        });

        console.log("guardado!");

        proyecto = {
            titulo: "",
            description: "",
            image: "",
        };
    };
</script>

<main class="min-h-screen bg-gray-900 text-gray-100 p-6">
    <section class="max-w-5xl mx-auto">
        <h1
            class="text-4xl sm:text-5xl font-bold text-amber-400 mb-12 text-center"
        >
            Admin Site Page
        </h1>

        <!-- Login -->

        <!-- svelte-ignore a11y_label_has_associated_control -->
        {#if !isAuthenticated}
            <form
                class="bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col gap-6 max-w-md mx-auto"
                on:submit={loginAdmin}
            >
                <div>
                    <label
                        class="block font-semibold text-gray-200 text-lg mb-2"
                        >Username</label
                    >
                    <input
                        type="text"
                        bind:value={user.username}
                        class="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                </div>

                <div>
                    <label
                        class="block font-semibold text-gray-200 text-lg mb-2"
                        >Password</label
                    >
                    <input
                        type="password"
                        bind:value={user.password}
                        class="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                </div>

                <button
                    type="submit"
                    class="mt-4 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors"
                >
                    Entrar
                </button>
            </form>
        {/if}

        <!-- Admin Panel -->
        <!-- svelte-ignore a11y_label_has_associated_control -->
        {#if isAuthenticated}
            <div class="mt-12 flex flex-col gap-12">
                <!-- Add Project Form -->
                <form
                    class="bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col gap-6"
                    on:submit={saveProject}
                >
                    <h2
                        class="text-2xl sm:text-3xl font-semibold text-amber-200 mb-2"
                    >
                        Agregar Nuevo Proyecto
                    </h2>

                    <div>
                        <label
                            class="block font-semibold text-gray-200 text-base mb-2"
                            >Título</label
                        >
                        <input
                            type="text"
                            placeholder="Título..."
                            bind:value={proyecto.titulo}
                            class="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                    </div>

                    <div>
                        <label
                            class="block font-semibold text-gray-200 text-base mb-2"
                            >Descripción</label
                        >
                        <textarea
                            rows="3"
                            placeholder="Descripción..."
                            bind:value={proyecto.description}
                            class="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        ></textarea>
                    </div>

                    <div>
                        <label
                            class="block font-semibold text-gray-200 text-base mb-2"
                            >Etiquetas</label
                        >
                        <input
                            type="text"
                            placeholder="ej: svelte, flask, api"
                            bind:value={proyecto.tags}
                            class="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                    </div>

                    <div>
                        <label
                            class="block font-semibold text-gray-200 text-base mb-2"
                            >Imagen</label
                        >
                        <input
                            type="url"
                            placeholder="https://..."
                            bind:value={proyecto.image}
                            class="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                    </div>

                    <div>
                        <label
                            class="block font-semibold text-gray-200 text-base mb-2"
                            >GitHub</label
                        >
                        <input
                            type="url"
                            placeholder="https://..."
                            bind:value={proyecto.github}
                            class="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                    </div>

                    <div>
                        <label
                            class="block font-semibold text-gray-200 text-base mb-2"
                            >Website</label
                        >
                        <input
                            type="url"
                            placeholder="https://..."
                            bind:value={proyecto.website}
                            class="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                    </div>

                    <button
                        type="submit"
                        class="mt-4 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors"
                    >
                        Guardar
                    </button>
                </form>

                <hr class="my-12 border-gray-700" />

                <!-- Proyectos -->
                <div>
                    <h2
                        class="text-2xl sm:text-3xl font-semibold text-amber-200 mb-6 text-center"
                    >
                        Proyectos
                    </h2>
                    <Proyectos />
                </div>
            </div>
        {/if}
    </section>
</main>
