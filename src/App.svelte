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
  class="bg-pattern-mobile md:bg-pattern-desktop bg-no-repeat bg-contain p-8 bg-cstm-primary-violet min-h-screen flex flex-col md:justify-between"
>
  <header>
    <nav>
      <img src="assets/logo.svg" alt="huddle logo" class="w-1/2 md:w-80" />
    </nav>
  </header>
  <main
    class="text-center text-white flex-1 flex flex-col md:flex-none justify-evenly md:grid md:grid-cols-2 md:gap-20"
  >
    <div class="flex items-center">
      <img
        src="/assets/illustration-mockups.svg"
        alt="illustration"
        class="w-full my-10"
      />
    </div>
    <div class="md:flex md:items-center md:text-left">
      <div>
        <h1 class="font-poppins font-bold text-3xl md:text-5xl">
          Build The Community Your Fans Will Love
        </h1>
        <p class="font-open-sans text-xl mt-5">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button
          class="font-poppins font-bold bg-white text-cstm-primary-violet hover:bg-cstm-primary-soft-magenta shadow-lg hover:shadow-xl py-4 my-10 rounded-full w-3/4 mx-auto md:w-80"
          >Register</button
        >
      </div>
    </div>
  </main>
  <footer class="flex justify-center md:justify-end items-center gap-5">
    <img
      src="/assets/icon-facebook.svg"
      alt="facebook icon"
      width="40"
      height="40"
      class="hover:-translate-y-3 transition-all duration-300 ease-in-out cursor-pointer"
    />
    <img
      src="/assets/icon-instagram.svg"
      alt="instagram icon"
      width="40"
      height="40"
      class="hover:-translate-y-3 transition-all duration-300 ease-in-out cursor-pointer"
    />
    <img
      src="/assets/icon-twitter.svg"
      alt="twitter icon"
      width="40"
      height="40"
      class="hover:-translate-y-3 transition-all duration-300 ease-in-out cursor-pointer"
    />
  </footer>
</div>

<style>
</style>
