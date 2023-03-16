<template>
    <div :class="style.notFoundCont">
    <h1 :class="style.error">404</h1>
    <h4>Oops! Page Not Found😟😓!</h4>
    <RouterLink to="/" :class="style.home">👈Go Back Home</RouterLink>
    </div>
</template>

<script>
export default {
    name: 'NotFoundPage',

    data: () => {
        return {
            style: {
              notFoundCont: `flex flex-col justify-center items-center`,
              error: `mb-5 text-4xl font-bold text-red-400 items-start`,
              home: `text-md text-blue-400 hover:bg-slate-900 hover:shadow-lg rounded-lg shadow p-2 m-2 hover: dark:hover:text-blue-400 dark:hover:bg-white  dark:text-white transition-all ease-in-out duration-500`

            }
        }
    }
}
</script>