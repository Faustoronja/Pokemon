const squirtleAsciiArt = `
                ⢀⡠⠄⠒⢒⡾⠛⠛⠐⠲⣦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣶⠉⠀⢀⣠⠞⠀⠀⠀⣠⡶⠿⣿⣿⣶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣎⢹⠛⠓⠚⠉⠀⠀⠀⠀⠘⣡⠤⢤⡈⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⢹⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⣧⣀⣠⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⢽⡏⠀⠀⠀⠀⠀⠀⠀⠀⢸⣻⣿⣿⠟⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⡰⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠉⠛⠋⠰⣹⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣁⡀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠉⠒⠒⠓⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣷⣄⣤⣴⣯⣭⣥⣖⣚⣓⣒⣶⣶⠶⢿⣟⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣱⣏⢠⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡤⠶⠖⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢿⣿⣿⣿⣿⣿⣷⡵⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⣠⠶⠋⠉⠀⠀⢀⡾⠀⠙⠻⢿⣿⣿⣿⣿⣿⣿⣿⠋⠀⠀⠹⣿⣿⣿⣿⣟⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢠⢄⡀⠒⠋⠀⠀⠀⠀⠀⢠⣾⠿⠦⣤⣀⣀⠈⢹⣿⣿⣿⡿⠁⠀⠀⠀⠀⠃⢸⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠈⣿⣿⡏⠀⠀⠀⠀⠀⠀⡞⠀⠀⠀⠀⠈⠉⢩⡿⠛⠛⢻⠃⠀⠀⠀⠀⠀⢀⣿⣿⣿⢿⣿⡿⠟⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢀⣾⣿⣿⣿⣿⣷⣶⣦⣤⣼⡇⠀⠀⠀⠀⠀⠀⣸⠀⠀⠀⡜⢀⢔⣿⡄⠀⣠⣾⣿⣿⣿⢸⣿⣷⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠉⠉⠉⠉⠉⠛⠛⠛⠋⣿⢷⡀⠀⠀⠀⠀⠀⡿⠀⠀⣔⣡⣤⣿⣿⣀⣚⣻⣿⣿⣿⣿⢸⣿⣿⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠈⢳⣄⣀⠀⠀⠀⡇⠀⠈⠛⠛⠿⣿⣿⣿⣿⣿⣿⢸⣿⡇⣾⣿⣿⣸⡾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣄⡟⠀⠉⠉⠛⢺⠷⠶⠦⠤⠤⠤⠶⡏⢀⣿⣿⣿⣿⣿⡇⢿⣿⣿⣿⢹⠀⠀⠀⡠⠖⠊⠉⠉⠉⠙⣶⣦⣀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠞⣿⠁⠀⠀⠀⠀⢘⡀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⡿⢿⣿⣷⢸⣿⣿⣿⡇⠀⡠⠊⠀⠀⠀⠀⠀⣠⣴⣿⣿⣿⣦⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠘⢧⡀⠀⠀⠀⣸⣧⠀⠀⠀⠀⣀⣾⣿⡿⠋⠀⠀⠀⠀⠈⢣⣿⣿⡿⢠⣾⣷⣤⣤⣤⣴⣶⣿⣿⣿⣿⣿⣿⣿⡆
⠀⠀⠀⠀⠀⠀⠀⢠⠇⠀⠀⠀⣼⣿⣶⣦⣶⣿⣿⣷⣦⣴⣾⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⢻⣟⣵⣿⣿⣿⣿⣿⣿⣟⣭⣿⣿⣿⣿⣿⣿⣿⠇
⠀⠀⠀⠀⠀⠀⠀⣼⡀⢀⣠⣾⣿⣿⣿⣿⣭⣿⣿⣯⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀
⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀
⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠈⠉⠉⠻⠿⠶⢿⣦⣀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠈⣹⣿⠿⣿⣿⣿⣿⡿⠟⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣷⣾⣿⣿⣿⣿⡇⠈⠉⠉⠙⠛⠛⠛⠛⠛⠉⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠘⠛⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣇`;
export default squirtleAsciiArt;
