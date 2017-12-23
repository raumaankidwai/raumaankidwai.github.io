function FifteenPuzzle () {
	this.state = [
		1, 2, 3, 4,
		5, 6, 7, 8,
		9, 10, 11, 12,
		13, 14, 15, 0
	];
}

FifteenPuzzle.prototype.move = function (move) {
	var zerocell = this.state.indexOf(0);
	
	// 0 = move the 0 cell up,
	// 1 = move the 0 cell right,
	// 2 = move the 0 cell down,
	// 3 = move the 0 cell left
	
	switch (move) {
		case 0:
			if (this.state[zerocell - 4]) {
				this.state[zerocell] = this.state[zerocell - 4];
				this.state[zerocell - 4] = 0;
			} else {
				throw new Error("Error: FifteenPuzzle: Illegal move");
			}
		break; case 1:
			if (this.state[zerocell + 1]) {
				this.state[zerocell] = this.state[zerocell + 1];
				this.state[zerocell + 1] = 0;
			} else {
				throw new Error("Error: FifteenPuzzle: Illegal move");
			}
		break; case 2:
			if (this.state[zerocell + 4]) {
				this.state[zerocell] = this.state[zerocell + 4];
				this.state[zerocell + 4] = 0;
			} else {
				throw new Error("Error: FifteenPuzzle: Illegal move");
			}
		break; case 3:
			if (this.state[zerocell - 1]) {
				this.state[zerocell] = this.state[zerocell - 1];
				this.state[zerocell - 1] = 0;
			} else {
				throw new Error("Error: FifteenPuzzle: Illegal move");
			}
		break; default:
			throw new Error("Error: FifteenPuzzle: Unrecognized move ID");
	}
};
