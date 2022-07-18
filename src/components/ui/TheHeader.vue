<template>
  <header>
    <nav>
      <h1>Find A Coach</h1>
      <ul>
        <li><router-link to="/coaches"> All Coaches</router-link></li>
        <li><router-link to="/requests"> Requests</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  padding: 1rem;
  background-color: rgb(34, 34, 94);
  display: flex;
  justify-content: center;
  align-items: center;
}
header nav{
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header h1 {
  color: White;
}
header nav ul {
  list-style-type: none;
}
header nav ul li{
  display: inline;
}
header nav ul li{
  padding: 0.75rem;
}
header a {
  border: 1px solid rgb(139, 163, 240);
  border-radius: 2px;
  text-decoration: none;
  color: rgb(139, 163, 240);
  padding: 10px;
}
header a.router-link-active,
header a:hover {
  border: 1px solid white;
  color: white;
}

</style>