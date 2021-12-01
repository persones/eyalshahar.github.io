<template>
  <div class="discography">
    <div class="section-title">Discography (keyboards/programming)</div>
    <table>
      <tr>
        <th>year</th>
        <th>artist</th>
        <th>album</th>
        <th>label</th>
        <th>status</th>
      </tr>
      <tr v-for="(album, index) in diskcography" :key="index">
        <td class="date">{{ album.year }}</td>
        <td>{{ album.artist }}</td>
        <td class="academic-title">{{ album.title }}</td>
        <td>{{ album.label }}</td>
        <td>{{ album.status }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Discography",
  props: {
    diskcography: Array
  }
}
</script>

<style>
  .discography td, .discography th {
    padding: 0 1em;
  }

  .discography {
    text-transform: capitalize;
  }

</style>