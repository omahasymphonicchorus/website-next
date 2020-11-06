export default {
  install(Vue) {
    Vue.filter("truncate", (text, len, clamp) => {
      return text.slice(0, len) + (len < text.length ? clamp || "..." : "");
    });
  }
};
