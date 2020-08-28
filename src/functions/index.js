export function setNutriScoreColor(letter) {
	switch (letter) {
		case 'A':
		case 'a':
			return 'green';
		case 'B':
		case 'b':
			return 'olive';
		case 'C':
		case 'c':
			return 'yellow';
		case 'D':
		case 'd':
			return 'orange';
		case 'E':
		case 'e':
			return 'red';
		default:
			return letter;
	}
}
