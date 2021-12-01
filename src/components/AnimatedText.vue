<template>
    <span v-html="computedText"></span>
</template>

<script>
export default {
  name: 'AnimatedText',
  props: {
    text: String
  },
  data() {
    return {
      animatedText: '',
      charIndex: 0
    }
  },
  computed: {
    computedText() {
      return this.animatedText;
    }
  },
  watch: {
    text: function() {
      console.log('updated');
      clearInterval(this.interval);
      this.charIndex = 0;
      this.animatedText = '';
      this.interval = setInterval(() => {
        this.animatedText += this.text[this.charIndex++];
        if (this.charIndex == this.text.length) {
          clearInterval(this.interval);
        }
      }, 10);
    }
  }
}
</script>