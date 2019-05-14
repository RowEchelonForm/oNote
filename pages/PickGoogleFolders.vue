<template>
 <div>Pick Google Folders page</div>
</template>

<script lang="ts">
import { Component, Emit, Mutation, State, Vue, } from 'nuxt-property-decorator';

@Component({
  middleware: 'auth',
})
export default class PickGoogleFolders extends Vue {
  // TODO: Implement this based on the drive picker test
  // MOVE ELEMENT WITH THEME CLASS TO LAYOUT: Create a "ThemeContainer" component that contains theme rendering fuinctionality that is in the layout
}
</script>
