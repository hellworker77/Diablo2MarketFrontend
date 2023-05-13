import {Memento} from "./Memento";

export class IndexCaretaker {
    history: Array<Memento>
    pointer: number

    constructor() {
        this.history = []
        this.pointer = -1
    }

    save(memento: Memento) {
        this.history = this.history.slice(0, this.pointer + 1)
        this.history.push(memento)
        this.pointer = this.history.length - 1
    }

    undo(): Memento {
        if (this.pointer > 0) {
            this.pointer--;
        }
        return this.history[this.pointer]
    }

    redo(): Memento {
        if (this.pointer < this.history.length - 1) {
            this.pointer++
        }

        return this.history[this.pointer]
    }

    dispose() {
        this.pointer = -1
        this.history = []
    }
}