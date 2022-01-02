<script>
</script>

<svelte:head>
  <title>Huddle Single Section Page</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@400;600&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div
  class="bg-pattern-mobile bg-no-repeat bg-contain p-8 bg-cstm-primary-violet min-h-screen flex flex-col"
>
  <header>
    <nav>
      <img src="assets/logo.svg" alt="huddle logo" class="w-1/2" />
    </nav>
  </header>
  <main class="text-center text-white flex-1 flex flex-col justify-evenly">
    <img
      src="/assets/illustration-mockups.svg"
      alt="illustration"
      class="w-full my-10"
    />
    <h1 class="font-poppins font-bold text-3xl">
      Build The Community Your Fans Will Love
    </h1>
    <p class="font-open-sans text-xl mt-5">
      Huddle re-imagines the way we build communities. You have a voice, but so
      does your audience. Create connections with your users as you engage in
      genuine discussion.
    </p>
    <button
      class="font-open-sans bg-white text-cstm-primary-violet hover:bg-cstm-primary-soft-magenta shadow-lg hover:shadow-2xl py-4 my-10 rounded-full w-3/4 mx-auto"
      >Register</button
    >
  </main>
  <footer class="flex justify-center items-center gap-5">
    <img
      src="/assets/icon-facebook.svg"
      alt="facebook icon"
      width="40"
      height="40"
      class="hover:text-cstm-primary-soft-magenta"
    />
    <img
      src="/assets/icon-instagram.svg"
      alt="instagram icon"
      width="40"
      height="40"
    />
    <img
      src="/assets/icon-twitter.svg"
      alt="twitter icon"
      width="40"
      height="40"
    />
  </footer>
</div>

<style>
</style>
