
export const setTheme = (name) => {
    localStorage.setItem('theme', name);
    document.documentElement.className = name;
}