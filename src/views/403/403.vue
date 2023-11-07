<script setup lang="ts"></script>

<template>
  <div class="root">
    <div class="container">
      <p>403</p>
      <p>{{ $tm('page403.permission') }}</p>
      <button>
        <RouterLink to="/kun">{{ $tm('page403.back') }}</RouterLink>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.root {
  height: 100vh;
  width: 100vw;
  min-width: 700px;
  min-height: 100vh;
  background: linear-gradient(
    var(--kungalgame-trans-pink-1),
    var(--kungalgame-trans-blue-1)
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--kungalgame-white);
  color: var(--kungalgame-font-color-3);
}

.container {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

p {
  margin: 7px;
}

p:first-child {
  font-size: 50px;
  font-weight: bold;
  color: var(--kungalgame-red-5);
}

button {
  border: 1px solid var(--kungalgame-blue-4);
  border-radius: 5px;
  font-size: 17px;
  background-color: var(--kungalgame-trans-white-9);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: var(--kungalgame-blue-4);
    transition: 0.2s;
  }

  a {
    padding: 5px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: var(--kungalgame-blue-4);

    &:hover {
      color: var(--kungalgame-white);
      transition: 0.2s;
    }
  }
}
</style>
