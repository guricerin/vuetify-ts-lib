<template>
  <v-dialog v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" color="primary"> Demo Dialog </v-btn>
    </template>
    <v-card>
      <v-card-title>Demo Dialog</v-card-title>
      <v-card-text> デモ用のダイアログです。 </v-card-text>
      <v-card-actions>
        <v-btn @click="dialog = false" color="primary">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class DemoDialog extends Vue {
  private dialog: boolean = false;
}
</script>
