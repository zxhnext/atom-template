<template>
    <div id="app">
        <AtomComponent>
            <atom-banner :obj="{
                src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            }" />
            <atom-form />
        </AtomComponent>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AtomComponent from './common/atom-component.vue';
import AtomBanner from './components/atom-banner/index.vue';
import AtomForm from './components/atom-form/index.vue';

export default defineComponent({
    name: 'App',
    components: {
        AtomComponent,
        AtomBanner,
        AtomForm
    },
    setup() {
        
    },
})
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
img {
    vertical-align: top;
}
</style>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
