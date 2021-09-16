<!-- eslint-disable -->
<template>
    <div id="slider-view" class="slider-view" v-if="loaded">
        <!-- 编辑容器 -->
        <div
            v-for="(component, index) in components"
            :data-layout="component.props && component.props._layout"
            :id="`atom-render-id-_component_${index}`"
            :key="index"
        >
            <div
                :is="component.name"
                :key="component + index"
                :obj="component.props || {}"
                :config="component.config"
                @onRemoteComponentLoad="remoteComponentLoad"
            />
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'atom-component',
    setup() {
        window.addEventListener('message', (e) => {
            // 不接受消息源来自于当前窗口的消息
            if (e.source === window || e.data === 'loaded') {
                return;
            }
            this[e.data.type](e.data.data);
        });

        const addComponent = () => {
            // todo add componet
        };
        const changeProps = (payload) => {
            // this.$set(this.components[this.currentIndex], 'props', payload);
        };
    },
})
</script>
