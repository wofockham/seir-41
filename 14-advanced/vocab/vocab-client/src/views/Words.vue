<template>
  <div>
    <h1>Words</h1>
    <table id="words" class="ui celled compact table">
      <thead>
        <tr>
          <th>English</th>
          <th>German</th>
          <th colspan="3"></th>
        </tr>
      </thead>

      <tbody>
      </tbody>
    </table>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
export default {
  name: 'words',
  data() {
    return {
      words: []
    }
  },
  async mounted() {
    this.words = await api.getWords();
  }
};
</script>

<style>
</style>
