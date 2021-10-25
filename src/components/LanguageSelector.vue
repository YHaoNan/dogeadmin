<template>
  <GeneralSelector
    :options="languageOptions"
    @select="onLanguageSelected"
    v-model="languageSelected"
  >
    <TranslationOutlined
      class="language-selector-icon"
      :style="{ fontSize: '24px' }"
      @click="isSelectorOpen = !isSelectorOpen"
    />
  </GeneralSelector>
</template>

<script setup lang="ts">
import { TranslationOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import GeneralSelector from "@components/GeneralSelector.vue";

defineProps({
  color: {
    type: String,
    default: "white",
  },
});

const languageSelected = ref("zh");
const isSelectorOpen = ref(false);
const { locale } = useI18n();

const languageOptions = [
  {
    id: 1,
    value: "zh",
    label: "简体中文",
    disabled: false,
  },
  {
    id: 2,
    value: "en",
    label: "English",
    disabled: false,
  },
  {
    id: 3,
    value: "jp",
    label: "日本語",
    disabled: true,
  },
];

const onLanguageSelected = (newLanguage: string) => {
  locale.value = newLanguage;
  isSelectorOpen.value = false;
};
</script>

<style scoped>
.language-selector {
  position: relative;
}
.language-selector-icon {
  color: v-bind(color);
}
</style>
