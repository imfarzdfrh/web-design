import { ref, onMounted } from "vue";

export const useTheme = () => {
  const isDarkMode = ref(false);

  // بررسی وضعیت ذخیره شده در localStorage
  const loadTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      isDarkMode.value = true;
      document.documentElement.classList.add("dark");
    } else {
      isDarkMode.value = false;
      document.documentElement.classList.remove("dark");
    }
  };

  // تغییر حالت دارک/لایت
  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    if (isDarkMode.value) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  onMounted(() => {
    loadTheme(); // بارگذاری وضعیت ذخیره شده
  });

  return { isDarkMode, toggleTheme };
};
