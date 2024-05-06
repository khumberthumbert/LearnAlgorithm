import { BinaryTree } from "./binaryTree.mjs";

class Heap {
    constructor() {
        this.root = null;
        this.lastInsertedNode = null;
    }

    insert(data) {
        if (this.lastInsertedNode == null) {
            this.lastInsertedNode = new BinaryTree(data);
            this.root = this.lastInsertedNode;
            return;
        }
    }
}