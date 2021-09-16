<template>
    <div v-if="componentRef" :is="componentRef" :obj="obj" />
</template>

<script lang="ts">
// 远程全局组件
import { defineComponent, extend, ref, nextTick, watch } from 'vue';

export default defineComponent({
    name: "atom-remote-component-loader",
    props: {
        obj: {
            type: Object,
            default: () => {},
        },
        config: {},
    },
    setup(props, { emit }) {
        const componentRef = ref('');

        // 动态添加组件，用于可视化编辑场景
        const { name, js, css, index } = props.config;
        const component = window[name];
        if (!component) {
            const script = document.createElement("script");
            const link = document.createElement("link");
            script.src = js;
            link.href = css;
            link.rel = "stylesheet";
            document.head.appendChild(link);
            document.body.appendChild(script);
            script.onload = () => {
                emit("onRemoteComponentLoad", {
                    ...window[name],
                    index,
                });
                componentRef.value = extend(window[name].Component);
            };
        } else {
            // 非动态化添加，用于构建场景
            emit("onRemoteComponentLoad", {
                ...window[name],
                index,
            });
            // 先有 props 再挂组件，不然 props 是 null 可能会有错
            nextTick(() => {
                componentRef.value = extend(window[name].Component);
            });
        }
    
        watch(() => config.value.name, (name) => {
            componentRef.value = extend(window[name].Component);
        })

        return {
            componentRef
        }
    },
})
</script>
