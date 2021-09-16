<template>
    <a :href="obj.link">
        <img
            :src="obj.src"
            width="100%"
            alt="图片"
        />
    </a>
</template>

<script lang="ts">
interface BannerInfo {
    link: String
    src: String
}
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    name: 'banner',
    props: {
        obj: {
            type: Object as PropType<BannerInfo>,
            default: () => ({})
        }
    },
})
</script>
